"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent";

const inquiryTypes = ["General", "Enterprise Access", "Press", "Other"];

export function EnterpriseForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", organization: "", inquiryType: "General", message: "" });

  function set(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/enterprise-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit inquiry. Please try again.");
      setStatus("idle");
      return;
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-sm text-white/70">
        Message received. We will follow up shortly.
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
        <div className="text-xs font-semibold text-muted">Organization</div>
        <input value={form.organization} onChange={set("organization")} placeholder="Company / Organization" className="h-11 w-full rounded-2xl border border-border/70 bg-background/30 px-4 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25" />
      </label>
      <label className="block space-y-1.5">
        <div className="text-xs font-semibold text-muted">Inquiry type</div>
        <select value={form.inquiryType} onChange={set("inquiryType")} className="h-11 w-full rounded-2xl border border-border/70 bg-background/80 px-4 text-sm text-white outline-none focus:border-white/30">
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block space-y-1.5">
        <div className="text-xs font-semibold text-muted">Message</div>
        <textarea required value={form.message} onChange={set("message")} rows={4} placeholder="Tell us what you need…" className="w-full rounded-2xl border border-border/70 bg-background/30 px-4 py-3 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/25 resize-none" />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-primary inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105 disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
