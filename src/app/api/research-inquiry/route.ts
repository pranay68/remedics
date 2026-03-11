import {
    applyRateLimit,
    badRequest,
    getClientIp,
    internalServerError,
    isSpamTrapTriggered,
    normalizeText,
    tooManyRequests,
} from "@/lib/security/request";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { getDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    const ip = getClientIp(request);
    const rateLimit = applyRateLimit({
        key: `research:${ip}`,
        limit: 5,
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

        const { name, institution, role, interest, website, turnstileToken } = body as Record<string, unknown>;

        if (isSpamTrapTriggered(website)) {
            return NextResponse.json({ success: true, message: "Research inquiry submitted successfully" }, { status: 201 });
        }

        const turnstile = await verifyTurnstileToken(request, turnstileToken);
        if (!turnstile.ok) {
            return badRequest("Security verification failed.");
        }

        const normalizedName = normalizeText(name, 120);
        const normalizedInstitution = normalizeText(institution, 180);
        const normalizedRole = normalizeText(role, 160);
        const normalizedInterest = normalizeText(interest, 4000);

        // Validation
        if (!normalizedName || normalizedInterest.length < 20) {
            return badRequest("Name and research interest are required.");
        }

        // Add to Firestore
        const docRef = await db.collection("research_inquiries").add({
            name: normalizedName,
            institution: normalizedInstitution,
            role: normalizedRole,
            interest: normalizedInterest,
            ip,
            timestamp: new Date(),
            status: "pending",
        });

        return NextResponse.json(
            {
                success: true,
                id: docRef.id,
                message: "Research inquiry submitted successfully",
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Research inquiry error:", error);
        return internalServerError();
    }
}
