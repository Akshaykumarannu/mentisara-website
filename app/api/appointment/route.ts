import { NextRequest, NextResponse } from "next/server";
import { AppointmentFormData, APIResponse } from "@/types";

export const dynamic = "force-dynamic";

// ─────────────────────────────────────────────────────────
// MENTISARA — APPOINTMENT INTAKE API (Resend-powered)
// 
// EMAIL SETUP NOTES FOR PRODUCTION:
//
// Option A (Recommended — Free): Verify your domain in Resend dashboard
//   1. Go to https://resend.com/domains
//   2. Add domain: mentisara.in
//   3. Add the DNS records Resend provides to your domain registrar
//   4. Once verified, set EMAIL_FROM_ADDRESS=Mentisara <hello@mentisara.in>
//
// Option B (Quick start — no domain needed):
//   - Resend's onboarding@resend.dev sender ONLY sends to the email
//     address registered with your Resend account.
//   - So CONTACT_EMAIL must equal your Resend account email.
//   - This works for testing; for prod, verify your domain (Option A).
//
// Current .env.local config:
//   EMAIL_SERVICE_API_KEY=re_...    → Your Resend API key
//   CONTACT_EMAIL=akshay58930@gmail.com   → Must match Resend account email if using onboarding@resend.dev
//   EMAIL_FROM_ADDRESS=Mentisara Intake <onboarding@resend.dev>
// ─────────────────────────────────────────────────────────

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

    // 3. Build submission payload
    const applicationId = `MTS-${Date.now().toString().slice(-6)}`;
    const submissionPayload = {
      applicationId,
      submittedAt: new Date().toISOString(),
      clientName: `${firstName.trim()} ${lastName.trim()}`,
      email: email.trim().toLowerCase(),
      phone: phoneClean,
      age: age || "Not specified",
      service: preferredService,
      preferredDate: preferredDate || "Flexible",
      preferredTimeSlot: body.preferredTimeSlot || "Flexible",
      sessionMode: body.sessionMode || "Online",
      primaryConcern: primaryConcern.trim(),
      additionalNotes: body.additionalNotes || "None",
    };

    console.log("[Mentisara] New Appointment Application:", submissionPayload);

    // 4. Email dispatch via Resend
    const apiKey = process.env.EMAIL_SERVICE_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "contact@mentisara.in";
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || "Mentisara Intake <onboarding@resend.dev>";

    if (apiKey && apiKey !== "mock_dev_key") {
      // ── EMAIL 1: Notification to clinic (Mentisara team) ──
      const clinicEmailHtml = buildClinicEmailHtml(submissionPayload);
      const clinicEmailRes = await sendEmail(apiKey, {
        from: fromAddress,
        to: [recipientEmail],
        subject: `🔔 New Therapy Application [${applicationId}] — ${submissionPayload.clientName} (${submissionPayload.service})`,
        html: clinicEmailHtml,
      });

      if (!clinicEmailRes.ok) {
        const errorBody = await clinicEmailRes.json();
        console.error("[Resend] Clinic email error:", errorBody);
        // Log the error but don't fail the request — still return success
      } else {
        const clinicResult = await clinicEmailRes.json();
        console.log("[Resend] Clinic email sent:", clinicResult.id);
      }

      // ── EMAIL 2: Confirmation to client ──
      // Note: This works when from domain is verified (mentisara.in).
      // With onboarding@resend.dev, client email delivery is unreliable
      // unless the client's email matches the Resend account email.
      // Verify mentisara.in domain in Resend for reliable client emails.
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
          console.warn("[Resend] Client email warning (may need domain verification):", clientError);
        }
      } catch (clientEmailErr) {
        console.warn("[Resend] Client confirmation email skipped:", clientEmailErr);
      }
    } else {
      console.log("[Mentisara] Email service not configured. Payload logged above. Set EMAIL_SERVICE_API_KEY in .env.local");
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
        <tr><td style="background:linear-gradient(135deg,#0F2619,#1A3F2A);padding:28px 32px;border-radius:16px 16px 0 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <div style="width:42px;height:42px;background:rgba(255,255,255,0.12);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:22px;font-weight:bold;color:#F5EFEB;text-align:center;line-height:42px;">M</div>
                <span style="font-family:Georgia,serif;font-size:20px;font-weight:bold;color:#ffffff;vertical-align:middle;margin-left:12px;">Mentisara</span>
              </td>
              <td align="right">
                <span style="font-size:11px;color:rgba(255,255,255,0.6);font-weight:600;">APPLICATION INTAKE</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Alert Banner -->
        <tr><td style="background:#1E4D31;padding:14px 32px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0;color:#A8D5B5;font-size:13px;font-weight:700;">
            🔔 NEW THERAPY APPLICATION RECEIVED
          </p>
          <p style="margin:4px 0 0;color:rgba(168,213,181,0.7);font-size:11px;">
            Application ID: <strong style="color:#A8D5B5;">${p.applicationId}</strong> &nbsp;|&nbsp; ${new Date(p.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' })} IST
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:28px 32px;">
          
          <h3 style="margin:0 0 20px;font-family:Georgia,serif;font-size:18px;color:#0F2619;">Client Details</h3>
          
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
            ${buildRow("Client Name", `<strong>${p.clientName}</strong>`)}
            ${buildRow("Email", `<a href="mailto:${p.email}" style="color:#1E4D31;">${p.email}</a>`)}
            ${buildRow("Phone / WhatsApp", `<a href="tel:${p.phone}" style="color:#1E4D31;">+${p.phone}</a>`)}
            ${buildRow("Age", p.age)}
            ${buildRow("Preferred Service", `<strong style="color:#1E4D31;">${p.service}</strong>`)}
            ${buildRow("Session Mode", p.sessionMode)}
            ${buildRow("Preferred Date", p.preferredDate)}
            ${buildRow("Preferred Time Slot", p.preferredTimeSlot)}
          </table>

          <div style="margin:24px 0;background:#f8f5ee;border-left:4px solid #1E4D31;border-radius:0 8px 8px 0;padding:16px 20px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#1E4D31;text-transform:uppercase;letter-spacing:0.08em;">Primary Concern / Focus Area</p>
            <p style="margin:0;font-size:14px;color:#2d3a30;line-height:1.7;">${p.primaryConcern}</p>
          </div>

          ${p.additionalNotes !== "None" ? `
          <div style="margin:16px 0;background:#fff9f7;border:1px solid #ffe8de;border-radius:8px;padding:16px 20px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#9B4426;text-transform:uppercase;letter-spacing:0.08em;">Additional Notes</p>
            <p style="margin:0;font-size:13px;color:#4a3a35;line-height:1.7;">${p.additionalNotes}</p>
          </div>
          ` : ''}

          <div style="margin-top:24px;padding:16px 20px;background:#f0f6f2;border-radius:10px;text-align:center;">
            <p style="margin:0;font-size:13px;color:#1E4D31;font-weight:600;">⚡ Please respond to this client within 24 hours via email or WhatsApp.</p>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f4f2ee;padding:20px 32px;border-radius:0 0 16px 16px;border-top:1px solid #e0d8cf;">
          <p style="margin:0;font-size:11px;color:#8a7e72;text-align:center;">
            Submitted via <a href="https://www.mentisara.in" style="color:#1E4D31;text-decoration:none;">mentisara.in</a> online intake system &nbsp;·&nbsp; ${p.applicationId}
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildRow(label: string, value: string) {
  return `
  <tr>
    <td style="padding:9px 0;border-bottom:1px solid #f0ebe4;color:#7a7065;width:160px;vertical-align:top;font-size:13px;">${label}:</td>
    <td style="padding:9px 0 9px 12px;border-bottom:1px solid #f0ebe4;color:#1a1a1a;font-size:13px;">${value}</td>
  </tr>`;
}

// ─── Email 2: Client confirmation ─────────────────────────

function buildClientConfirmationHtml(p: {
  applicationId: string;
  clientName: string;
  service: string;
  preferredDate: string;
  preferredTimeSlot: string;
}) {
  const firstName = p.clientName.split(" ")[0];
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f2ee;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ee;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#0F2619,#1A3F2A,#2D6643);padding:36px 32px;border-radius:16px 16px 0 0;text-align:center;">
          <div style="width:52px;height:52px;background:rgba(255,255,255,0.12);border-radius:16px;display:inline-flex;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:26px;font-weight:bold;color:#F5EFEB;text-align:center;line-height:52px;margin-bottom:14px;">M</div>
          <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:500;color:#ffffff;letter-spacing:-0.02em;">MENTISARA</h1>
          <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">Psychotherapy & Care</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 32px;">
          <h2 style="margin:0 0 6px;font-family:Georgia,serif;font-size:22px;color:#0F2619;font-weight:500;">
            Application Received, ${firstName} 🌿
          </h2>
          <p style="margin:0 0 24px;font-size:14px;color:#6b7c6e;">Thank you for reaching out to Mentisara.</p>

          <p style="font-size:15px;color:#2d3a30;line-height:1.8;margin:0 0 20px;">
            We have received your therapy application and our clinical coordinator will be in touch with you
            <strong style="color:#0F2619;">within 24 hours</strong> to confirm your session details.
          </p>

          <!-- Summary Card -->
          <div style="background:#f4f9f6;border:1px solid #c8e0d2;border-radius:12px;padding:20px 24px;margin:20px 0;">
            <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#1E4D31;text-transform:uppercase;letter-spacing:0.1em;">Your Application Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
              <tr>
                <td style="padding:6px 0;color:#5a7061;width:140px;">Application ID:</td>
                <td style="padding:6px 0;color:#0F2619;font-weight:700;">${p.applicationId}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#5a7061;">Service:</td>
                <td style="padding:6px 0;color:#0F2619;font-weight:600;">${p.service}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#5a7061;">Preferred Date:</td>
                <td style="padding:6px 0;color:#0F2619;">${p.preferredDate}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;color:#5a7061;">Preferred Slot:</td>
                <td style="padding:6px 0;color:#0F2619;">${p.preferredTimeSlot}</td>
              </tr>
            </table>
          </div>

          <p style="font-size:14px;color:#4a5a4f;line-height:1.8;margin:20px 0;">
            While you wait, please know that your privacy is our highest priority. All information
            you shared is handled under strict psychological confidentiality standards.
          </p>

          <!-- WhatsApp CTA -->
          <div style="text-align:center;margin:28px 0;">
            <a href="https://wa.me/919740791523?text=Hello%20Mentisara%2C%20I%20just%20submitted%20application%20${p.applicationId}"
               style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:12px;text-decoration:none;letter-spacing:0.02em;">
              💬 Chat on WhatsApp
            </a>
            <p style="margin:10px 0 0;font-size:11px;color:#8a9a8e;">or email us at <a href="mailto:contact@mentisara.in" style="color:#1E4D31;">contact@mentisara.in</a></p>
          </div>

          <p style="font-size:13px;color:#8a9a8e;border-top:1px solid #ece7e0;padding-top:20px;margin:20px 0 0;line-height:1.7;">
            This is an automated confirmation. Please do not reply to this email — use the WhatsApp link
            or contact us directly at <a href="mailto:contact@mentisara.in" style="color:#1E4D31;">contact@mentisara.in</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f4f2ee;padding:20px 32px;border-radius:0 0 16px 16px;border-top:1px solid #e0d8cf;text-align:center;">
          <p style="margin:0;font-size:11px;color:#8a7e72;">
            <a href="https://www.mentisara.in" style="color:#1E4D31;text-decoration:none;">mentisara.in</a>
            &nbsp;·&nbsp; Structured & Person-Centred Online Psychotherapy
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
