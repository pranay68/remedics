import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        company?: string;
        message?: string;
      }
    | null;

  const name = body?.name?.trim() || "Unknown";
  const email = body?.email?.trim() || "";
  const company = body?.company?.trim() || "N/A";
  const message = body?.message?.trim() || "";

  if (!email || message.length < 8) {
    return NextResponse.json(
      { ok: false, message: "Please include a valid email and message." },
      { status: 400 },
    );
  }

  // Configure the transporter with Gmail
  // NOTE: You must create an App Password for your Gmail account.
  // Go to Google Account -> Security -> 2-Step Verification -> App Passwords
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER || "sulekhakapar123@gmail.com", // Fallback for dev, but env var is better
      pass: process.env.GMAIL_APP_PASSWORD, // You must set this in .env.local
    },
  });

  try {
    if (process.env.GMAIL_APP_PASSWORD) {
      await transporter.sendMail({
        from: `"Aternox Contact" <${process.env.GMAIL_USER || "sulekhakapar123@gmail.com"}>`,
        to: "sulekhakapar123@gmail.com",
        subject: `New Contact from ${name} (${company})`,
        text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
        `,
        html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });
      console.log("Email sent successfully to sulekhakapar123@gmail.com");
    } else {
      console.warn("GMAIL_APP_PASSWORD not set. Email was not sent.");
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    // We still return success to the client so the UI doesn't break, 
    // but we log the error on the server.
  }

  return NextResponse.json({
    ok: true,
    message: "Received. We’ll respond soon.",
  });
}
