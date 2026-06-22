"use client";

import { useMemo, useState } from "react";
import { TurnstileWidget } from "@/components/security/TurnstileWidget";

const CASE_OPTIONS = [
  {
    value: "broken-app",
    label: "Broken app",
    description: "The app is failing, unstable, or no longer coherent.",
  },
  {
    value: "messy-handoff",
    label: "Messy handoff",
    description: "Repo truth, docs, and current behavior no longer line up.",
  },
  {
    value: "buyer-package",
    label: "Buyer package",
    description: "You need a bounded recovery package for a buyer-facing case.",
  },
] as const;

type CaseIntent = (typeof CASE_OPTIONS)[number]["value"];

export function WaitlistForm({
  compact = false,
  source = "waitlist-page",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [problemToSolve, setProblemToSolve] = useState("");
  const [caseIntent, setCaseIntent] = useState<CaseIntent>("broken-app");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileEnabled = useMemo(
    () => Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY),
    []
  );

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
          caseIntent,
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
      setErrorMessage(
        "Waitlist submission is temporarily unavailable. Please try again shortly."
      );
      setSending(false);
      return;
    }
    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-6 text-center text-[15px] text-white/70">
        You&apos;re on the list. We&apos;ll follow up when the July 1 launch window
        opens and the infrastructure pass is complete.
      </div>
    );
  }

  const isFormValid = email.trim() && (!turnstileEnabled || Boolean(turnstileToken));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
        Launching July 1. Development status is ready, and infrastructure is
        still processing. This form is for early signal only.
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold text-white">
          Email address
        </label>
        <input
          type="email"
          required
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 w-full rounded-2xl border border-white/20 bg-white/5 px-4 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-white/50 focus:bg-white/10"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label className="mb-2 block text-xs font-semibold text-white">
          Website
        </label>
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
        <label className="mb-3 block text-xs font-semibold text-white">
          What kind of case are you preparing?
        </label>
        <div className={`grid gap-3 ${compact ? "md:grid-cols-3" : "sm:grid-cols-3"}`}>
          {CASE_OPTIONS.map((option) => {
            const active = caseIntent === option.value;
            return (
              <label
                key={option.value}
                className={`cursor-pointer rounded-2xl border px-4 py-4 transition-all ${
                  active
                    ? "border-white/50 bg-white/10"
                    : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/[0.08]"
                }`}
              >
                <input
                  type="radio"
                  name="caseIntent"
                  value={option.value}
                  checked={active}
                  onChange={() => setCaseIntent(option.value)}
                  className="sr-only"
                />
                <div className="text-sm font-semibold text-white">{option.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-white/50">
                  {option.description}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {!compact && (
        <div>
          <label className="mb-2 block text-xs font-semibold text-white">
            What do you need recovered?
          </label>
          <textarea
            value={problemToSolve}
            onChange={(e) => setProblemToSolve(e.target.value)}
            placeholder="Describe the app, repo, or case that needs recovery."
            maxLength={10000}
            rows={6}
            className="w-full resize-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-white/50 focus:bg-white/10"
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
        className="btn-primary inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? "Joining..." : "Join waitlist"}
      </button>
    </form>
  );
}
