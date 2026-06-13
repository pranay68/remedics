import {
  applyRateLimit,
  badRequest,
  getClientIp,
  internalServerError,
  isSpamTrapTriggered,
  isValidEmail,
  normalizeText,
  tooManyRequests,
} from "@/lib/security/request";
import { getDb } from "@/lib/firebase-admin";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedCaseIntents = ["broken-app", "messy-handoff", "buyer-package"];

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = applyRateLimit({
    key: `waitlist:${ip}`,
    limit: 6,
    windowMs: 10 * 60 * 1000,
  });

  if (!rateLimit.allowed) {
    return tooManyRequests(undefined, rateLimit.resetAt);
  }

  try {
    const db = getDb();
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return badRequest("Invalid request body.");
    }

    const { email, problemToSolve, caseIntent, source, website, turnstileToken } =
      body as Record<string, unknown>;

    if (isSpamTrapTriggered(website)) {
      return NextResponse.json(
        { success: true, message: "Successfully added to waitlist" },
        { status: 201 }
      );
    }

    const turnstile = await verifyTurnstileToken(request, turnstileToken);
    if (!turnstile.ok) {
      return NextResponse.json(
        { error: "Security verification failed." },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeText(email, 320).toLowerCase();
    const normalizedProblem = normalizeText(problemToSolve, 4000);
    const normalizedSource = normalizeText(source, 120) || "unknown";

    if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
      return badRequest("Please enter a valid email address.");
    }

    if (typeof problemToSolve === "string" && problemToSolve.length > 4000) {
      return badRequest("Problem description is too long.");
    }

    if (
      typeof caseIntent === "string" &&
      !allowedCaseIntents.includes(caseIntent)
    ) {
      return badRequest("Invalid case intent.");
    }

    const docRef = await db.collection("waitlist").add({
      email: normalizedEmail,
      caseIntent:
        typeof caseIntent === "string" ? caseIntent : "broken-app",
      problemToSolve: normalizedProblem,
      source: normalizedSource,
      ip,
      timestamp: new Date(),
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        id: docRef.id,
        message: "Successfully added to waitlist",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return internalServerError();
  }
}
