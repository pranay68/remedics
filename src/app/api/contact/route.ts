import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  applyRateLimit,
  badRequest,
  getClientIp,
  internalServerError,
  isSpamTrapTriggered,
  isValidEmail,
  normalizeText,
  serviceUnavailable,
  tooManyRequests,
} from "@/lib/security/request";
import { verifyTurnstileToken } from "@/lib/security/turnstile";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const rateLimit = applyRateLimit({
    key: `contact:${ip}`,
    limit: 5,
    windowMs: 10 * 60 * 1000,
  });

  if (!rateLimit.allowed) {
    return tooManyRequests(undefined, rateLimit.resetAt);
  }

  const body = (await req.json().catch(() => null)) as
    | {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
      website?: string;
      turnstileToken?: string;
    }
    | null;

  if (!body) {
    return badRequest("Invalid request body.");
  }

  if (isSpamTrapTriggered(body.website)) {
    return NextResponse.json({ ok: true, message: "Received. We’ll respond soon." });
  }

  const turnstile = await verifyTurnstileToken(req, body.turnstileToken);
  if (!turnstile.ok) {
    return badRequest("Security verification failed.");
  }

  const name = normalizeText(body?.name, 120) || "Unknown";
  const email = normalizeText(body?.email, 320).toLowerCase();
  const company = normalizeText(body?.company, 180) || "N/A";
  const message = normalizeText(body?.message, 4000);

  if (!email || !isValidEmail(email)) {
    return badRequest("Please include a valid email address.");
  }

  if (message && message.length < 12) {
    return badRequest("If you include a message, please provide a bit more detail.");
  }

  const mailUser = process.env.GMAIL_USER;
  const mailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!mailUser || !mailPassword) {
    return serviceUnavailable("Contact intake is temporarily unavailable.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailUser,
      pass: mailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Aternox Contact" <${mailUser}>`,
      to: mailUser,
      subject: `New Contact from ${name} (${company})`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
IP: ${ip}

Message:
${message || "N/A"}
        `,
      html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>IP:</strong> ${ip}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${(message || "N/A").replace(/\n/g, "<br>")}</p>
        `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    return internalServerError();
  }

  return NextResponse.json({
    ok: true,
    message: "Received. We’ll respond soon.",
  });
}
