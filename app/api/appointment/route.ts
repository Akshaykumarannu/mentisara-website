import { NextRequest, NextResponse } from "next/server";
import { AppointmentFormData, APIResponse } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body: AppointmentFormData = await req.json();

    // 1. Anti-spam Honeypot Check
    if (body.honeypot) {
      return NextResponse.json<APIResponse>({
        success: true,
        message: "Your application has been received.",
      });
    }

    // 2. Server-side Input Validation
    const {
      firstName, lastName, email, phone, age,
      preferredService, preferredDate, primaryConcern, consentAgreed
    } = body;

    if (!firstName || !lastName || !email || !phone || !preferredService || !primaryConcern || consentAgreed !== true) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please fill out all required fields and accept the privacy consent agreement." },
        { status: 400 }
      );
    }

    // Mandatory Age Validation (Requirement 18 & 21)
    if (!age || isNaN(parseInt(age, 10)) || parseInt(age, 10) < 10 || parseInt(age, 10) > 120) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please provide a valid age between 10 and 120." },
        { status: 400 }
      );
    }

    // Preferred Language Validation (Requirement 20 & 21)
    if (!body.preferredLanguage) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please select your preferred language." },
        { status: 400 }
      );
    }
    if (body.preferredLanguage === "Other" && !body.preferredLanguageOther?.trim()) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please specify your preferred language." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const phoneClean = phone.replace(/[^0-9+]/g, "");
    if (phoneClean.length < 8) {
      return NextResponse.json<APIResponse>(
        { success: false, message: "Please enter a valid phone number with area/country code." },
        { status: 400 }
      );
    }

    const languageDisplay = body.preferredLanguage === "Other" && body.preferredLanguageOther
      ? `Other (${body.preferredLanguageOther.trim()})`
      : body.preferredLanguage || "English";

    // 3. Build submission payload (Do not log raw base64 data to preserve privacy)
    const applicationId = `MTS-${Date.now().toString().slice(-6)}`;
    const submissionPayload = {
      applicationId,
      submittedAt: new Date().toISOString(),
      clientName: `${firstName.trim()} ${lastName.trim()}`,
      email: email.trim().toLowerCase(),
      phone: phoneClean,
      age: age.trim(),
      preferredLanguage: languageDisplay,
      idProofProvided: Boolean(body.idProofFileName),
      idProofFileName: body.idProofFileName || "None provided",
      service: preferredService,
      preferredDate: preferredDate || "Flexible",
      preferredTimeSlot: body.preferredTimeSlot || "Flexible",
      sessionMode: body.sessionMode || "Online",
      primaryConcern: primaryConcern.trim(),
      additionalNotes: body.additionalNotes || "None",
    };

    console.log("[Mentisara] New Appointment Application:", {
      applicationId: submissionPayload.applicationId,
      clientName: submissionPayload.clientName,
      email: submissionPayload.email,
      phone: submissionPayload.phone,
      age: submissionPayload.age,
      preferredLanguage: submissionPayload.preferredLanguage,
      idProofProvided: submissionPayload.idProofProvided,
      idProofFileName: submissionPayload.idProofFileName,
      service: submissionPayload.service,
    });

    // 4. Email dispatch via Resend
    const apiKey = process.env.EMAIL_SERVICE_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "mentisaramindtalks@gmail.com";
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || "Mentisara Intake <onboarding@resend.dev>";

    // Build attachments if user provided optional ID proof
    const attachments: Array<{ filename: string; content: string }> = [];
    if (body.idProofBase64 && body.idProofFileName) {
      const cleanBase64 = body.idProofBase64.replace(/^data:[^;]+;base64,/, "");
      attachments.push({
        filename: body.idProofFileName,
        content: cleanBase64,
      });
    }

    if (apiKey && apiKey !== "mock_dev_key") {
      // ── EMAIL 1: Notification to clinic (Mentisara team) ──
      const clinicEmailHtml = buildClinicEmailHtml(submissionPayload);
      const clinicEmailRes = await sendEmail(apiKey, {
        from: fromAddress,
        to: [recipientEmail],
        subject: `🔔 New Therapy Application [${applicationId}] — ${submissionPayload.clientName} (${submissionPayload.service})`,
        html: clinicEmailHtml,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      if (!clinicEmailRes.ok) {
        const errorBody = await clinicEmailRes.json();
        console.error("[Resend] Clinic email error:", errorBody);
      } else {
        const clinicResult = await clinicEmailRes.json();
        console.log("[Resend] Clinic email sent:", clinicResult.id);
      }

      // ── EMAIL 2: Confirmation to client ──
      try {
        const clientEmailHtml = buildClientConfirmationHtml(submissionPayload);
        const clientEmailRes = await sendEmail(apiKey, {
          from: fromAddress,
          to: [submissionPayload.email],
          replyTo: recipientEmail,
          subject: `Your Mentisara Therapy Application [${applicationId}] — Received`,
          html: clientEmailHtml,
        });

        if (clientEmailRes.ok) {
          const clientResult = await clientEmailRes.json();
          console.log("[Resend] Client confirmation email sent:", clientResult.id);
        } else {
          const clientError = await clientEmailRes.json();
          console.warn("[Resend] Client email warning:", clientError);
        }
      } catch (clientEmailErr) {
        console.warn("[Resend] Client confirmation email skipped:", clientEmailErr);
      }
    } else {
      console.log("[Mentisara] Email service not configured or in dev. Application saved successfully.");
    }

    return NextResponse.json<APIResponse>({
      success: true,
      message: "Thank you. Your application has been received. Our team will contact you within 24 hours to confirm your appointment.",
      data: { applicationId },
    });

  } catch (err) {
    console.error("[Mentisara] Appointment API error:", err);
    return NextResponse.json<APIResponse>(
      { success: false, message: "We couldn't submit your request right now. Please try again or contact us directly via WhatsApp." },
      { status: 500 }
    );
  }
}

// ─── Helper: Send email via Resend ───────────────────────

async function sendEmail(apiKey: string, payload: {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
  attachments?: Array<{ filename: string; content: string }>;
}) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

// ─── Email 1: Clinic notification ────────────────────────

function buildClinicEmailHtml(p: {
  applicationId: string;
  submittedAt: string;
  clientName: string;
  email: string;
  phone: string;
  age: string;
  preferredLanguage: string;
  idProofProvided: boolean;
  idProofFileName: string;
  service: string;
  preferredDate: string;
  preferredTimeSlot: string;
  sessionMode: string;
  primaryConcern: string;
  additionalNotes: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ee;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        
        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#1A3F2A,#2D6643);padding:28px 32px;border-radius:16px 16px 0 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-family:Georgia,serif;font-size:22px;font-weight:bold;color:#ffffff;">Mentisara</span>
              </td>
              <td align="right">
                <span style="font-size:11px;color:rgba(255,255,255,0.7);font-weight:600;">NEW APPLICATION INTAKE</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Alert Banner -->
        <tr><td style="background:#2D6643;padding:14px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0;color:#ffffff;font-size:13px;font-weight:700;">
            🔔 NEW THERAPY APPLICATION RECEIVED
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:32px;">

          <!-- Client details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #e0dcd5;border-radius:12px;overflow:hidden;">
            <tr style="background:#faf7f2;">
              <td colspan="2" style="padding:12px 18px;font-size:12px;font-weight:700;color:#1A3F2A;text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid #e0dcd5;">
                Client Information
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;width:140px;border-bottom:1px solid #f0ede8;">Full Name:</td>
              <td style="padding:10px 18px;font-size:14px;color:#111;font-weight:700;border-bottom:1px solid #f0ede8;">${p.clientName}</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Email:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;border-bottom:1px solid #f0ede8;">
                <a href="mailto:${p.email}" style="color:#1A3F2A;font-weight:600;">${p.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Phone / WhatsApp:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;border-bottom:1px solid #f0ede8;">
                <a href="https://wa.me/${p.phone.replace(/[^0-9]/g, "")}" style="color:#25D366;font-weight:700;">${p.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Age:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;font-weight:600;border-bottom:1px solid #f0ede8;">${p.age} years</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Preferred Language:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;font-weight:600;border-bottom:1px solid #f0ede8;">${p.preferredLanguage}</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;">ID Proof Status:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;font-weight:600;">
                ${p.idProofProvided ? `Attached (${p.idProofFileName})` : "Not provided (Optional)"}
              </td>
            </tr>
          </table>

          <!-- Session details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border:1px solid #e0dcd5;border-radius:12px;overflow:hidden;">
            <tr style="background:#faf7f2;">
              <td colspan="2" style="padding:12px 18px;font-size:12px;font-weight:700;color:#1A3F2A;text-transform:uppercase;letter-spacing:0.08em;border-bottom:1px solid #e0dcd5;">
                Requested Service & Timing
              </td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;width:140px;border-bottom:1px solid #f0ede8;">Service:</td>
              <td style="padding:10px 18px;font-size:14px;color:#1A3F2A;font-weight:700;border-bottom:1px solid #f0ede8;">${p.service}</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Session Mode:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;border-bottom:1px solid #f0ede8;">${p.sessionMode}</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;border-bottom:1px solid #f0ede8;">Preferred Date:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;border-bottom:1px solid #f0ede8;">${p.preferredDate}</td>
            </tr>
            <tr>
              <td style="padding:10px 18px;font-size:13px;color:#666;">Preferred Slot:</td>
              <td style="padding:10px 18px;font-size:13px;color:#111;">${p.preferredTimeSlot}</td>
            </tr>
          </table>

          <!-- Clinical note -->
          <div style="background:#faf7f2;border:1px solid #e0dcd5;border-radius:12px;padding:18px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#1A3F2A;text-transform:uppercase;letter-spacing:0.08em;">Primary Concern:</p>
            <p style="margin:0;font-size:14px;color:#222;line-height:1.6;font-style:italic;">&ldquo;${p.primaryConcern}&rdquo;</p>
            ${p.additionalNotes !== "None" ? `
            <p style="margin:14px 0 6px;font-size:12px;font-weight:700;color:#1A3F2A;text-transform:uppercase;letter-spacing:0.08em;">Additional Notes:</p>
            <p style="margin:0;font-size:13px;color:#444;line-height:1.5;">${p.additionalNotes}</p>
            ` : ""}
          </div>

          <!-- Action buttons -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:8px;">
                <a href="https://wa.me/${p.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(p.clientName)}%2C%20thank%20you%20for%20reaching%20out%20to%20Mentisara.%20We%20received%20your%20application%20[${p.applicationId}]."
                   style="display:block;background:#25D366;color:#ffffff;font-size:13px;font-weight:700;text-align:center;padding:12px 18px;border-radius:10px;text-decoration:none;">
                  💬 Reply on WhatsApp
                </a>
              </td>
              <td style="padding-left:8px;">
                <a href="mailto:${p.email}?subject=Mentisara%20Intake%20Confirmation%20%5B${p.applicationId}%5D"
                   style="display:block;background:#1A3F2A;color:#ffffff;font-size:13px;font-weight:700;text-align:center;padding:12px 18px;border-radius:10px;text-decoration:none;">
                  ✉️ Reply via Email
                </a>
              </td>
            </tr>
          </table>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#ede8e1;padding:16px 32px;border-radius:0 0 16px 16px;text-align:center;font-size:11px;color:#777;">
          Mentisara Practice Intake Notification · Application ID: ${p.applicationId}
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Email 2: Client confirmation ────────────────────────

function buildClientConfirmationHtml(p: {
  applicationId: string;
  clientName: string;
  service: string;
  preferredDate: string;
  preferredTimeSlot: string;
  preferredLanguage: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ee;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e0dcd5;">
        
        <!-- Header -->
        <tr><td style="background:#1A3F2A;padding:28px 32px;text-align:center;">
          <span style="font-family:Georgia,serif;font-size:24px;font-weight:bold;color:#ffffff;">Mentisara</span>
          <p style="margin:4px 0 0;font-size:12px;color:rgba(255,255,255,0.7);letter-spacing:0.1em;text-transform:uppercase;">The Essence of the Mind</p>
        </td></tr>

        <!-- Content -->
        <tr><td style="padding:32px;">
          <h2 style="font-family:Georgia,serif;font-size:22px;color:#1A3F2A;margin:0 0 14px;">
            Thank you, ${p.clientName}.
          </h2>
          <p style="font-size:14px;color:#4a5a4f;line-height:1.7;margin:0 0 20px;">
            We have received your application for psychological consultation at Mentisara. Our clinical intake coordinator will review your preferences and connect with you shortly to confirm your session schedule.
          </p>

          <!-- Summary Box -->
          <div style="background:#faf7f2;border:1px solid #e0dcd5;border-radius:12px;padding:20px;margin:20px 0;">
            <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#1A3F2A;text-transform:uppercase;letter-spacing:0.08em;">Your Intake Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
              <tr>
                <td style="padding:6px 0;color:#666;width:140px;">Application ID:</td>
                <td style="padding:6px 0;color:#111;font-weight:700;">${p.applicationId}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#666;">Service:</td>
                <td style="padding:6px 0;color:#111;font-weight:600;">${p.service}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#666;">Language:</td>
                <td style="padding:6px 0;color:#111;">${p.preferredLanguage}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#666;">Preferred Date:</td>
                <td style="padding:6px 0;color:#111;">${p.preferredDate}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#666;">Preferred Slot:</td>
                <td style="padding:6px 0;color:#111;">${p.preferredTimeSlot}</td>
              </tr>
            </table>
          </div>

          <p style="font-size:13px;color:#666;line-height:1.6;margin:16px 0;">
            All information you shared is protected under strict psychological privacy and care standards.
          </p>

          <!-- WhatsApp Link -->
          <div style="text-align:center;margin:24px 0 10px;">
            <a href="https://wa.me/919188159149?text=Hello%20Mentisara%2C%20I%20just%20submitted%20application%20${p.applicationId}"
               style="display:inline-block;background:#25D366;color:#ffffff;font-size:13px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">
              💬 Connect with us on WhatsApp
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#ede8e1;padding:16px;text-align:center;font-size:11px;color:#777;">
          Mentisara Practice · Kerala & Worldwide Online Care
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
