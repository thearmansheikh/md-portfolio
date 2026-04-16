import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || !apiKey.startsWith("re_")) {
      console.error("RESEND_API_KEY is missing or invalid.");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Attempt to send via Resend
    const recipient =
      process.env.EMAIL_RECIPIENT || "thearmansheikh.co@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] Message from ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:500px;margin:auto;padding:20px;">
          <h2 style="color:#22d3ee;margin-bottom:16px;">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
            <tr><td style="padding:8px 0;color:#888;font-weight:600;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;font-weight:600;">Subject</td><td style="padding:8px 0;">${subject || "—"}</td></tr>
          </table>
          <div style="background:#f4f4f5;padding:12px;border-radius:8px;">
            <p style="margin:0;color:#333;white-space:pre-wrap;line-height:1.5;">${message}</p>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
    });

    if (error) {
      // Fallback: log the submission so nothing is lost
      console.error("Resend error:", error);
      console.log("⚠️ Fallback — message logged instead of emailed:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          message: "Message received (email delivery pending — check console).",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully.", id: data?.id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Contact route error:", err);
    // Still return 200 so the user doesn't see an error — log instead
    console.log("⚠️ Fallback — message logged:", {
      name: (await req.json()).name,
      email: (await req.json()).email,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { message: "Message received (email delivery pending — check console)." },
      { status: 200 }
    );
  }
}
