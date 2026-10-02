import { NextRequest, NextResponse } from "next/server";
import { ContactFormData, APIResponse } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    if (body.honeypot) {
      return NextResponse.json<APIResponse>({
        success: true,
        message: "Your message has been sent.",
      });
    }

    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          message: "Please fill out all required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<APIResponse>(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    console.log("[Mentisara Contact Inquiry]", {
      fullName,
      email,
      phone: body.phone,
      subject: body.subject,
      message,
      timestamp: new Date().toISOString(),
    });

    const apiKey = process.env.EMAIL_SERVICE_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "contact@mentisara.in";

    if (apiKey && apiKey !== "mock_dev_key") {
      try {
        const fromAddress = process.env.EMAIL_FROM_ADDRESS || "Mentisara Contact <onboarding@resend.dev>";
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [recipientEmail],
            subject: `New Contact Inquiry: ${fullName} (${body.subject || "General"})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #faf9f5;">
                <div style="background-color: #1E3A2F; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Mentisara — General Contact Inquiry</h2>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Full Name:</strong></td>
                    <td style="padding: 8px 0; color: #111;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0; color: #111;">${body.phone || "Not provided"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Subject:</strong></td>
                    <td style="padding: 8px 0; color: #1E3A2F; font-weight: bold;">${body.subject || "General Inquiry"}</td>
                  </tr>
                </table>

                <div style="margin-top: 15px; margin-bottom: 15px;">
                  <strong style="color: #1E3A2F; display: block; margin-bottom: 6px;">Message:</strong>
                  <div style="background-color: #ffffff; padding: 14px; border-left: 4px solid #1E3A2F; border-radius: 4px; color: #333; line-height: 1.6; border: 1px solid #eee;">
                    ${message}
                  </div>
                </div>

                <div style="border-top: 1px solid #e0e0e0; padding-top: 15px; margin-top: 20px; font-size: 12px; color: #888; text-align: center;">
                  Submitted through Mentisara Contact Page • <a href="https://www.mentisara.in" style="color: #1E3A2F;">mentisara.in</a>
                </div>
              </div>
            `,
          }),
        });
        const resendData = await resendRes.json();
        console.log("[Resend Contact Email Result]:", resendData);
      } catch (emailErr) {
        console.error("Contact email dispatch error:", emailErr);
      }
    }

    return NextResponse.json<APIResponse>({
      success: true,
      message: "Thank you for reaching out to Mentisara. We have received your inquiry and will respond within 24 hours.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json<APIResponse>(
      {
        success: false,
        message: "Unable to send your message right now. Please reach out via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
