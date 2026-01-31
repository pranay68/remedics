"use client";

import { useMemo, useState } from "react";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return (
      form.email.trim().length > 3 &&
      status.state !== "sending"
    );
  }, [form.email, status.state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to send.");
      }

      setStatus({
        state: "sent",
        message: data.message || "Request received. Our team will reach out shortly.",
      });
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ state: "error", message: msg });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <div className="text-sm font-semibold">Request Access</div>
        <div className="mt-1 text-sm text-muted">
          Enter your details and we&apos;ll get back to you with a custom demo.
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <div className="text-xs font-semibold text-muted">Name</div>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm outline-none focus:border-white/30"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="space-y-2">
          <div className="text-xs font-semibold text-muted">Email *</div>
          <input
            required
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm outline-none focus:border-white/30"
            placeholder="you@company.com"
            autoComplete="email"
            type="email"
          />
        </label>
      </div>

      <label className="space-y-2">
        <div className="text-xs font-semibold text-muted">Company</div>
        <input
          value={form.company}
          onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
          className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm outline-none focus:border-white/30"
          placeholder="Company / Organization"
          autoComplete="organization"
        />
      </label>

      <label className="space-y-2">
        <div className="text-xs font-semibold text-muted">Message (Optional)</div>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          className="min-h-[100px] w-full rounded-2xl border border-border/70 bg-background/30 p-4 text-sm outline-none focus:border-white/30"
          placeholder="Tell us about your team's needs..."
        />
      </label>

      <button
        disabled={!canSubmit}
        type="submit"
        className="h-12 w-full rounded-2xl bg-white font-bold text-black transition-all hover:bg-white/90 disabled:opacity-50"
      >
        {status.state === "sending" ? "Sending..." : "Request Access"}
      </button>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {status.state === "sent" ? (
          <div className="text-sm text-muted">{status.message}</div>
        ) : null}
        {status.state === "error" ? (
          <div className="text-sm text-danger">{status.message}</div>
        ) : null}
      </div>
    </form>
  );
}
