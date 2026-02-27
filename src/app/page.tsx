"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";

function Card({
  label,
  headline,
  body,
  badge,
}: {
  label: string;
  headline: string;
  body: string;
  badge?: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
      <div className="font-mono text-[10px] font-semibold tracking-widest text-white/40 uppercase">{label}</div>
      <div className="mt-3 font-sans text-[15px] font-semibold tracking-tight text-white/90">{headline}</div>
      <div className="mt-2.5 font-sans text-[13px] leading-relaxed text-white/50">{body}</div>
      {badge && (
        <div className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] tracking-wider text-white/40">
          {badge}
        </div>
      )}
    </div>
  );
}

function PDFButton() {
  return (
    <a
      href="/downloads/flt3-summary.pdf"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        fetch("/downloads/flt3-summary.pdf", { method: "HEAD" }).then((r) => {
          if (!r.ok) {
            e.preventDefault();
            alert("Summary PDF coming soon.");
          }
        });
      }}
      className="inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90"
    >
      Download summary (PDF)
    </a>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // noop
    }
    setSubmitted(true);
  }

  return (
    <Shell>
      <main className="noise cursor-crosshair">
        {/* HERO */}
        <div className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_75%_30%,rgba(192,192,192,0.08),transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none mix-blend-overlay">
            <Image src="/logo.png" alt="Aternox Background" width={1000} height={1000} className="object-contain grayscale invert" priority />
          </div>

          <Section className="relative min-h-[calc(100vh-72px)] py-20 md:py-24">
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-white/[0.08] to-transparent px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(255,255,255,0.2)]">
                <span className="h-1 w-1 rounded-full bg-white/60 shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                DGS — DEEP GENERAL SYNTHESIS
              </div>

              <h1 className="mt-10 text-balance font-sans text-5xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]">
                <span className="text-shimmer">Synthesis.</span> <br className="hidden md:block" />
                <span className="text-white/90">Not prediction.</span>
              </h1>

              <h2 className="mt-8 max-w-2xl text-balance font-sans text-xl font-light leading-relaxed tracking-tight text-white/40 md:text-2xl">
                DGS produces deterministic, verified output across every domain. No hallucination. No hedging. Pure synthesized logic.
              </h2>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/waitlist" className="group inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                  Join the waitlist
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link href="/research" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]">
                  See the proof →
                </Link>
              </div>

              <div className="mt-16 font-mono text-[11px] tracking-widest text-white/25 uppercase">
                DGS v1 — February 26, 2026 — Private Development
              </div>
            </div>
          </Section>
        </div>

        {/* SECTION 2 — THREE CARDS */}
        <Section className="py-24">
          <div className="grid gap-4 md:grid-cols-3">
            <Card label="01 / DETERMINISTIC" headline="Every output follows a logic chain." body="DGS does not generate probable answers. It synthesizes verified conclusions through structured reasoning gates. The output is traceable, falsifiable, and consistent." />
            <Card label="02 / DOMAIN-AGNOSTIC" headline="Science. Law. Finance. Engineering." body="The same synthesis architecture that produced a complete preclinical oncology research program can structure a legal argument or a financial analysis. Domain changes. Logic does not." />
            <Card label="03 / FOUR MODES" headline="From fast synthesis to discovery." body="Fast and Mid for complex everyday tasks. Deep for problems that break standard AI. Synthetic for generating genuinely new structured knowledge — restricted access only." />
          </div>
        </Section>

        {/* SECTION 3 — PROOF */}
        <Section className="pb-24">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 backdrop-blur">
            <div className="font-mono text-[10px] font-semibold tracking-widest text-white/40 uppercase">PROOF OF CONCEPT / FLT3-MUTATED AML</div>
            <h2 className="mt-6 font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">
              58 documents. One run. What a lab takes years to build.
            </h2>
            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-white/60">
              DGS produced a complete preclinical research architecture for FLT3-mutated Acute Myeloid Leukemia. Target engagement evidence contracts. Selectivity separation protocols. Off-target counter-screens. Failure playbooks for six resistance mechanisms. A Stage 0–4 development plan. 58 structured documents with deterministic logic gates throughout.
            </p>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-white/60">
              No lab data. No synthesized molecule. No clinical claims. This is the architecture — the logic a research program runs on. Built to be stress-tested by scientists, not admired from a distance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PDFButton />
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]">
                Request full program under NDA →
              </Link>
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-white/30">
              Preclinical research architecture only. No clinical efficacy claimed. Not medical advice. Independent laboratory validation required.
            </p>
          </div>
        </Section>

        {/* SECTION 4 — FOUR MODE CARDS */}
        <Section className="pb-24">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card label="FAST" headline="Deterministic synthesis for complex everyday tasks." body="Faster than frontier models. No hallucination. Consistent output on every run." badge="PUBLIC — Coming soon" />
            <Card label="MID" headline="Deep structured reasoning for multi-step problems." body="Cross-domain synthesis for logic problems that require more than one reasoning pass." badge="PUBLIC — Coming soon" />
            <Card label="DEEP" headline="Ultra-complex problem solving for enterprise challenges." body="For problems that break standard AI systems. Enterprise-grade structured output." badge="ENTERPRISE — Private access" />
            <Card label="SYNTHETIC" headline="Discovery-level synthesis. Genuinely new structured knowledge." body="This is the crown. Restricted access. Not publicly available and not for sale." badge="RESTRICTED — Not available" />
          </div>
        </Section>

        {/* SECTION 5 — WAITLIST */}
        <Section className="pb-32">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 text-center backdrop-blur">
            <h2 className="font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">DGS is in private development.</h2>
            <p className="mt-4 text-white/50 text-[15px]">Join the waitlist. Be first when Fast and Mid modes open.</p>
            <div className="mt-8 flex flex-col items-center">
              {submitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-5 text-[14px] text-white/70">
                  You&apos;re on the list. We will reach out when access opens — and not before.
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                  <input type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/30" />
                  <button type="submit" className="h-11 shrink-0 rounded-full bg-white px-6 text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/90">Join waitlist</button>
                </form>
              )}
            </div>
            <p className="mt-4 text-[11px] text-white/30">No spam. No updates until there is something real to say.</p>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
