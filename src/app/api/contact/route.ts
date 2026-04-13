import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
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

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_APP_PASSWORD;
    const recipient = process.env.EMAIL_RECIPIENT || user;

    if (!user || !pass) {
      console.error("Email env vars not configured.");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      replyTo: email,
      to: recipient,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] Message from ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:500px;margin:auto;">
          <h2 style="color:#22d3ee;">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;font-weight:bold;color:#888;">Name</td><td style="padding:6px 0;">${name}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold;color:#888;">Email</td><td style="padding:6px 0;">${email}</td></tr>
            <tr><td style="padding:6px 0;font-weight:bold;color:#888;">Subject</td><td style="padding:6px 0;">${subject || "—"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:12px;background:#111;border-radius:8px;">
            <p style="color:#ccc;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`,
    });

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
