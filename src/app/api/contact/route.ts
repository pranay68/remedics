import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        company?: string;
        message?: string;
      }
    | null;

  const email = body?.email?.trim() || "";
  const message = body?.message?.trim() || "";

  if (!email || message.length < 8) {
    return NextResponse.json(
      { ok: false, message: "Please include a valid email and message." },
      { status: 400 },
    );
  }

  // Placeholder: intentionally does not send/store anything.
  // When you're ready, wire this route to Resend/SendGrid/Postmark or a CRM.
  return NextResponse.json({
    ok: true,
    message: "Received. We’ll respond soon.",
  });
}
