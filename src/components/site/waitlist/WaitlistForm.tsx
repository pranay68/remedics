"use client";

import { useMemo, useState } from "react";
import { TurnstileWidget } from "@/components/security/TurnstileWidget";

const ENGINE_OPTIONS = [
    {
        value: "standard",
        label: "Standard",
        description: "General structured synthesis. Public availability soon.",
    },
    {
        value: "deep",
        label: "Deep",
        description: "Higher-depth synthesis for harder professional workflows.",
    },
    {
        value: "synthetic",
        label: "Synthetic",
        description: "Restricted discovery-tier engine. Not public.",
    },
] as const;

type EngineInterest = (typeof ENGINE_OPTIONS)[number]["value"];

export function WaitlistForm({
    compact = false,
    source = "waitlist-page",
}: {
    compact?: boolean;
    source?: string;
}) {
    const [email, setEmail] = useState("");
    const [problemToSolve, setProblemToSolve] = useState("");
    const [engineInterest, setEngineInterest] = useState<EngineInterest>("standard");
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [website, setWebsite] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");

    const turnstileEnabled = useMemo(() => Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY), []);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email.trim() || sending) return;

        setSending(true);
        setErrorMessage("");
        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.trim(),
                    engineInterest,
                    problemToSolve,
                    source,
                    website,
                    turnstileToken,
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                const msg = data.error || data.message || "Failed to submit";
                throw new Error(msg);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage("Waitlist submission is temporarily unavailable. Please try again shortly.");
            setSending(false);
            return;
        }
        setSending(false);
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="py-6 text-center text-[15px] text-white/70">
                You&apos;re on the list. We&apos;ll reach out when the Standard engine opens and use your engine interest to prioritize access.
            </div>
        );
    }

    const isFormValid = email.trim() && (!turnstileEnabled || Boolean(turnstileToken));

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
                DGS is not public yet. The <span className="font-semibold text-white">Standard engine</span> is the first public release and will be available soon.
            </div>

            <div>
                <label className="block text-xs font-semibold text-white mb-2">Email address</label>
                <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-sm outline-none focus:border-white/50 focus:bg-white/10 placeholder:text-white/40 text-white transition-all"
                />
            </div>

            <div className="hidden" aria-hidden="true">
                <label className="block text-xs font-semibold text-white mb-2">Website</label>
                <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="h-0 w-0 opacity-0"
                    name="website"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-white mb-3">
                    Which engine are you most interested in?
                </label>
                <div className={`grid gap-3 ${compact ? "md:grid-cols-3" : "sm:grid-cols-3"}`}>
                    {ENGINE_OPTIONS.map((option) => {
                        const active = engineInterest === option.value;
                        return (
                            <label
                                key={option.value}
                                className={`cursor-pointer rounded-2xl border px-4 py-4 transition-all ${active
                                    ? "border-white/50 bg-white/10"
                                    : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="engineInterest"
                                    value={option.value}
                                    checked={active}
                                    onChange={() => setEngineInterest(option.value)}
                                    className="sr-only"
                                />
                                <div className="text-sm font-semibold text-white">{option.label}</div>
                                <div className="mt-1 text-xs leading-relaxed text-white/50">{option.description}</div>
                            </label>
                        );
                    })}
                </div>
            </div>

            {!compact && (
                <div>
                    <label className="block text-xs font-semibold text-white mb-2">
                        What problem would you like DGS to solve first?
                    </label>
                    <textarea
                        value={problemToSolve}
                        onChange={(e) => setProblemToSolve(e.target.value)}
                        placeholder="Describe the first problem you'd like to solve."
                        maxLength={10000}
                        rows={6}
                        className="w-full resize-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/50 focus:bg-white/10 placeholder:text-white/40 text-white transition-all"
                    />
                </div>
            )}

            {errorMessage && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {errorMessage}
                </div>
            )}

            <TurnstileWidget onTokenChange={setTurnstileToken} />

            <button
                type="submit"
                disabled={sending || !isFormValid}
                className="btn-primary inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {sending ? "Joining…" : "Join waitlist"}
            </button>
        </form>
    );
}
