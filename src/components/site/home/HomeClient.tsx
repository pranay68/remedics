"use client";

import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";
import { WaitlistForm } from "@/components/site/waitlist/WaitlistForm";
import {
  fiveStages,
  recoverySignals,
  trustPrinciples,
} from "@/content/site";

function Card({
  label,
  headline,
  body,
}: {
  label: string;
  headline: string;
  body: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
      <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
        {label}
      </div>
      <div className="mt-3 font-sans text-[15px] font-semibold tracking-tight text-white/90">
        {headline}
      </div>
      <div className="mt-2.5 font-sans text-[13px] leading-relaxed text-white/50">
        {body}
      </div>
    </div>
  );
}

export default function HomeClient() {
  return (
    <Shell>
      <main className="noise">
        <div className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%0%,rgba(255,255,255,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_75%30%,rgba(192,192,192,0.08),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05] select-none">
            <Image
              src="/logo.png"
              alt="Aternox background"
              width={1000}
              height={1000}
              className="object-contain"
              priority
            />
          </div>

          <Section className="relative min-h-[calc(100vh-72px)] py-20 md:py-24">
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-white/[0.08] to-transparent px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-white/60" />
                REARCH RECOVERY BY ATERNOX
              </div>

              <h1 className="mt-10 text-balance font-sans text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]">
                Recover the app.
                <br className="hidden md:block" />
                <span className="text-shimmer">Then recover the truth.</span>
              </h1>

              <h2 className="mt-8 max-w-3xl text-balance font-sans text-xl font-light leading-relaxed tracking-tight text-white/50 md:text-2xl">
                ReArch is the public recovery product for broken, messy, or stalled
                AI-built software. Case understanding comes before quote. Quote
                comes before run.
              </h2>

              <p className="mt-6 max-w-2xl text-balance font-sans text-[15px] font-semibold leading-relaxed tracking-tight text-white/70">
                The public site sells the process, trust posture, and bounded
                outcome. It does not expose hidden package internals or fabricated
                proof.
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/waitlist"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px-5px_rgba(255,255,255,0.3)]"
                >
                  Launching July 1
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]"
                >
                  Development status
                </Link>
              </div>

              <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/25">
                <span>Intake</span>
                <span>•</span>
                <span>Case Room</span>
                <span>•</span>
                <span>Quote</span>
                <span>•</span>
                <span>Run</span>
                <span>•</span>
                <span>Package</span>
              </div>
            </div>
          </Section>
        </div>

        <Section className="py-24">
          <div className="grid gap-4 md:grid-cols-3">
            <Card
              label="WHY TEAMS COME"
              headline="When AI-built software stops making coherent sense."
              body="ReArch is for cases where repo truth, visible behavior, and prior handoffs no longer line up."
            />
            <Card
              label="WHAT CHANGES"
              headline="Case understanding before commercial confidence."
              body="The workflow is deliberately gated: understand the case, confirm the case, then quote and run."
            />
            <Card
              label="WHAT STAYS PRIVATE"
              headline="No public dossier theater."
              body="The site never exposes the six package files, hidden document IDs, or invented proof artifacts."
            />
          </div>
        </Section>

        <Section className="pb-24">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 backdrop-blur">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
              FIVE STAGES
            </div>
            <h2 className="mt-6 font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">
              Public process, cleanly stated.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {fiveStages.map((stage, index) => (
                <div
                  key={stage.name}
                  className="rounded-2xl border border-white/[0.08] bg-black/20 p-5"
                >
                  <div className="text-[11px] font-mono uppercase tracking-widest text-white/35">
                    0{index + 1}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white/90">
                    {stage.name}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/55">
                    {stage.summary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pb-24">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
                GOOD FIT
              </div>
              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-[-0.04em]">
                Cases that need recovery, not more improvisation.
              </h2>
              <div className="mt-6 space-y-3">
                {recoverySignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white/60"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
                TRUST STRIP
              </div>
              <h2 className="mt-6 font-sans text-3xl font-semibold tracking-[-0.04em]">
                Sharp, but honest.
              </h2>
              <div className="mt-6 space-y-3">
                {trustPrinciples.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm text-white/60"
                  >
                    {principle}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/trust"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]"
                >
                  Read trust doctrine
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]"
                >
                  Read pricing doctrine
                </Link>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pb-32">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 md:p-16 text-center backdrop-blur">
            <h2 className="font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">
              Launching July 1.
            </h2>
            <p className="mt-4 text-[15px] text-white/50">
              Development status: ready. Infrastructure status: processing. The
              public site stays honest about where the launch stands while the
              remaining infrastructure work finishes.
            </p>
            <div className="mx-auto mt-8 max-w-3xl text-left">
              <WaitlistForm compact source="home-page" />
            </div>
            <p className="mt-4 text-[11px] text-white/30">
              No fabricated timelines. No updates until there is something real to
              say.
            </p>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
