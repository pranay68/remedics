import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Feature({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function ProductPage() {
  return (
    <Shell>
      <Page
        eyebrow={
          <span>
            Reprog <span className="text-white/30">by</span> Aternox
          </span>
        }
        title={
          <>
            Autonomous engineering that <span className="text-gradient text-shimmer">ships</span> enterprise software.
          </>
        }
        subtitle={
          "Reprog turns intent into production-ready code with clear change scopes, reviewable output, and controls designed for real organizations."
        }
      >
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="glass rounded-3xl border border-gradient p-8 glow-intense scan-line">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Workflow
                </div>
                <div className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  Spec → Scope → Implementation → Verification
                </div>
                <p className="mt-3 text-base text-muted md:text-lg">
                  Reprog is built for outcomes: changes that fit the codebase, stay understandable, and survive
                  production constraints. You get speed without giving up control.
                </p>
                <div className="mt-8 grid gap-3">
                  {[
                    { label: "Spec-to-System Planning", tag: "decomposition" },
                    { label: "Coordinated Implementation", tag: "multi-agent" },
                    { label: "Tests + Fix Loops", tag: "verification" },
                    { label: "Enterprise Guardrails", tag: "governance" },
                  ].map((item, i) => (
                    <ScaleIn key={item.label} delay={0.1 * (i + 1)}>
                      <div className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background/40 px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-brand-2/50 hover:bg-background/60">
                        <div className="text-base font-medium">{item.label}</div>
                        <div className="text-mono text-xs text-brand-2">{item.tag}</div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <div className="glass rounded-3xl border border-border/70 p-8 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                  Experience
                </div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  Feels like magic.{" "}
                  <span className="text-shimmer">Works like engineering.</span>
                </h2>
                <p className="mt-4 text-base text-muted">
                  Output is designed for real teams: readable diffs, predictable structure, and governance-friendly
                  workflow.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link
                    href="/safety"
                    className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Security
                  </Link>
                  <Link
                    href="/download"
                    className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Get Reprog
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Feature
              delay={0.1}
              title="Consistency"
              desc="Architecture, naming, and conventions stay coherent across the codebase — not just a single file."
            />
            <Feature
              delay={0.2}
              title="Enterprise-Grade Outputs"
              desc="From services to web apps: strong defaults, tests, and maintainable code that your team can own."
            />
            <Feature
              delay={0.3}
              title="Verification Loops"
              desc="Reprog helps you validate changes with checks and test coverage, iterating until behavior matches intent."
            />
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
