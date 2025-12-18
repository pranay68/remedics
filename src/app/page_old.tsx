import Link from "next/link";
import { SignalCore } from "@/components/hero/SignalCore";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/60 px-3 py-1 text-xs text-muted animate-float">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-2 animate-pulse" />
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/50 p-6 backdrop-blur glow">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Shell>
      <main className="noise">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.18]" />
          <div className="absolute -top-48 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.55),transparent_55%)] blur-3xl" />
          <div className="absolute -top-40 right-[-180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.28),transparent_60%)] blur-3xl" />

          <Section className="relative grid gap-10 py-12 md:grid-cols-12 md:py-20">
            <div className="md:col-span-7">
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>Future-of-billing systems</Pill>
                  <Pill>Audit-ready workflows</Pill>
                  <Pill>Built for speed</Pill>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h1 className="mt-6 text-balance text-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                  The billing intelligence engine for the next era.
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <h2 className="mt-4 text-display text-4xl font-semibold leading-[1.05] tracking-tight text-shimmer md:text-5xl lg:text-6xl">
                  Precision, control, dominance.
                </h2>
              </FadeIn>

              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted md:text-lg">
                Billings AI is designed to push accuracy and workflow speed beyond today’s
                baselines—while preserving the controls required for responsible financial use.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/product"
                  className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold"
                >
                  Explore Product
                </Link>
                <Link
                  href="#download"
                  className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold"
                >
                  Download (soon)
                </Link>
                <Link
                  href="/safety"
                  className="inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-muted hover:text-foreground"
                >
                  Safety posture
                </Link>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Card
                  title="Accuracy-first"
                  desc="Engineered to outperform common baselines across core billing workflows (evaluation details on request)."
                />
                <Card
                  title="Audit trail"
                  desc="Traceable outputs with structured logs designed for review, governance, and iteration."
                />
                <Card
                  title="Workflow speed"
                  desc="From invoice to reconciliation—built to compress cycle time without sacrificing control."
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 bg-surface/40 p-3 glow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.35),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(0,212,255,0.18),transparent_55%)]" />
                <SignalCore className="relative h-full w-full" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-4 backdrop-blur">
                    <div className="text-xs font-semibold text-muted">Signal Core</div>
                    <div className="mt-1 text-sm">
                      A visual metaphor for our engine: structured, controllable, alive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <Section className="py-16">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Built like infrastructure. Presented like art.
              </h2>
              <p className="mt-3 text-muted">
                The point isn’t noise. It’s engineering confidence: calm UI, sharp edges,
                and visuals that communicate capability.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Card
                  title="Operator-in-the-loop"
                  desc="Designed for oversight and accountability, not blind automation."
                />
                <Card
                  title="Deployment-ready"
                  desc="Flexible paths (cloud/on-prem) depending on your environment."
                />
                <Card
                  title="Security posture"
                  desc="Principled defaults and secure design patterns from day one."
                />
                <Card
                  title="Evaluation culture"
                  desc="We measure performance. We iterate. We keep receipts (when appropriate)."
                />
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-16">
          <div
            id="download"
            className="rounded-3xl border border-border/70 bg-surface/45 p-8 glow"
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-semibold text-muted">Download</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Not yet public. We’ll open access soon.
                </h3>
                <p className="mt-2 text-muted">
                  This isn’t a waitlist funnel. It’s a controlled launch.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
