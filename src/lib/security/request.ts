import { NextRequest, NextResponse } from "next/server";

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

type RateLimitOptions = {
    key: string;
    limit: number;
    windowMs: number;
};

type RateLimitResult = {
    allowed: boolean;
    remaining: number;
    resetAt: number;
};

declare global {
    var __aternoxRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore = globalThis.__aternoxRateLimitStore ?? new Map<string, RateLimitEntry>();

if (!globalThis.__aternoxRateLimitStore) {
    globalThis.__aternoxRateLimitStore = rateLimitStore;
}

function cleanupRateLimitStore(now: number) {
    if (rateLimitStore.size < 500) return;

    for (const [key, entry] of rateLimitStore.entries()) {
        if (entry.resetAt <= now) {
            rateLimitStore.delete(key);
        }
    }
}

export function getClientIp(request: NextRequest) {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "unknown";
    }

    return request.headers.get("x-real-ip") || "unknown";
}

export function applyRateLimit({ key, limit, windowMs }: RateLimitOptions): RateLimitResult {
    const now = Date.now();
    cleanupRateLimitStore(now);

    const existing = rateLimitStore.get(key);

    if (!existing || existing.resetAt <= now) {
        const resetAt = now + windowMs;
        rateLimitStore.set(key, { count: 1, resetAt });
        return { allowed: true, remaining: Math.max(limit - 1, 0), resetAt };
    }

    existing.count += 1;
    rateLimitStore.set(key, existing);

    return {
        allowed: existing.count <= limit,
        remaining: Math.max(limit - existing.count, 0),
        resetAt: existing.resetAt,
    };
}

export function tooManyRequests(message = "Too many requests. Please try again later.", resetAt?: number) {
    return NextResponse.json(
        { error: message },
        {
            status: 429,
            headers: resetAt
                ? {
                    "Retry-After": Math.max(Math.ceil((resetAt - Date.now()) / 1000), 1).toString(),
                }
                : undefined,
        },
    );
}

export function badRequest(message: string) {
    return NextResponse.json({ error: message }, { status: 400 });
}

export function serviceUnavailable(message = "Service temporarily unavailable.") {
    return NextResponse.json({ error: message }, { status: 503 });
}

export function internalServerError() {
    return NextResponse.json({ error: "Request failed. Please try again later." }, { status: 500 });
}

export function normalizeText(value: unknown, maxLength: number) {
    if (typeof value !== "string") return "";
    return value.trim().replace(/\0/g, "").slice(0, maxLength);
}

export function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isSpamTrapTriggered(value: unknown) {
    return typeof value === "string" && value.trim().length > 0;
}