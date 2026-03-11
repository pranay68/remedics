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
        key: `enterprise:${ip}`,
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

        const { name, organization, inquiryType, message, website, turnstileToken } = body as Record<string, unknown>;

        if (isSpamTrapTriggered(website)) {
            return NextResponse.json({ success: true, message: "Enterprise inquiry submitted successfully" }, { status: 201 });
        }

        const turnstile = await verifyTurnstileToken(request, turnstileToken);
        if (!turnstile.ok) {
            return badRequest("Security verification failed.");
        }

        const normalizedName = normalizeText(name, 120);
        const normalizedOrganization = normalizeText(organization, 180);
        const normalizedType = normalizeText(inquiryType, 80) || "General";
        const normalizedMessage = normalizeText(message, 4000);

        // Validation
        if (!normalizedName || normalizedMessage.length < 12) {
            return badRequest("Name and message are required.");
        }

        // Add to Firestore
        const docRef = await db.collection("enterprise_inquiries").add({
            name: normalizedName,
            organization: normalizedOrganization,
            inquiryType: normalizedType,
            message: normalizedMessage,
            ip,
            timestamp: new Date(),
            status: "pending",
        });

        return NextResponse.json(
            {
                success: true,
                id: docRef.id,
                message: "Enterprise inquiry submitted successfully",
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Enterprise inquiry error:", error);
        return internalServerError();
    }
}
