import { NextRequest } from "next/server";
import { getClientIp } from "@/lib/security/request";

type TurnstileVerificationResult = {
    ok: boolean;
    enforced: boolean;
};

export async function verifyTurnstileToken(request: NextRequest, token: unknown): Promise<TurnstileVerificationResult> {
    const secret = process.env.TURNSTILE_SECRET_KEY;

    if (!secret) {
        return { ok: true, enforced: false };
    }

    if (typeof token !== "string" || !token.trim()) {
        return { ok: false, enforced: true };
    }

    const formData = new URLSearchParams();
    formData.set("secret", secret);
    formData.set("response", token.trim());

    const remoteIp = getClientIp(request);
    if (remoteIp && remoteIp !== "unknown") {
        formData.set("remoteip", remoteIp);
    }

    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString(),
            cache: "no-store",
        });

        if (!response.ok) {
            return { ok: false, enforced: true };
        }

        const data = (await response.json()) as { success?: boolean };
        return { ok: Boolean(data.success), enforced: true };
    } catch {
        return { ok: false, enforced: true };
    }
}