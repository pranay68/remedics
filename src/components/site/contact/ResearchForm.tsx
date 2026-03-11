"use client";

import { useState } from "react";
import { TurnstileWidget } from "@/components/security/TurnstileWidget";

type Status = "idle" | "sending" | "sent" | "error";

export function ResearchForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({ name: "", institution: "", role: "", interest: "" });
    const [website, setWebsite] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const turnstileEnabled = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

    function set(key: keyof typeof form) {
        return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setForm((s) => ({ ...s, [key]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (status === "sending") return;
        setStatus("sending");
        setErrorMessage("");
        try {
            const response = await fetch("/api/research-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, website, turnstileToken }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || "Failed to submit");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage(error instanceof Error ? error.message : "Failed to submit inquiry. Please try again.");
            setStatus("error");
            return;
        }
        setStatus("sent");
    }

    if (status === "sent") {
        return (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-sm text-white/70">
                Request received. If your inquiry requires access to the full FLT3 program package, NDA documentation will follow within 48 hours.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block space-y-1.5">
                <div className="text-xs font-semibold text-muted">Full name</div>
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25" />
            </label>
            <label className="block space-y-1.5">
                <div className="text-xs font-semibold text-muted">Institution</div>
                <input value={form.institution} onChange={set("institution")} placeholder="University / Company" className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25" />
            </label>
            <label className="block space-y-1.5">
                <div className="text-xs font-semibold text-muted">Role / Title</div>
                <input value={form.role} onChange={set("role")} placeholder="Principal Investigator, Researcher…" className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25" />
            </label>
            <label className="block space-y-1.5">
                <div className="text-xs font-semibold text-muted">Brief description of your interest</div>
                <textarea required value={form.interest} onChange={set("interest")} rows={4} placeholder="Describe your interest or collaboration request…" className="w-full rounded-2xl border border-border/70 bg-background/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25 resize-none" />
            </label>
            <div className="hidden" aria-hidden="true">
                <label className="block space-y-1.5">
                    <div className="text-xs font-semibold text-muted">Website</div>
                    <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} className="h-0 w-0 opacity-0" name="website" />
                </label>
            </div>
            <TurnstileWidget onTokenChange={setTurnstileToken} />
            {status === "error" && errorMessage ? (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{errorMessage}</div>
            ) : null}
            <button type="submit" disabled={status === "sending" || (turnstileEnabled && !turnstileToken)} className="btn-primary inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50">
                {status === "sending" ? "Submitting…" : "Submit research inquiry"}
            </button>
            <p className="text-[11px] text-white/30 text-center">
                If your inquiry requires access to the full FLT3 program package, NDA documentation will follow within 48 hours.
            </p>
        </form>
    );
}
