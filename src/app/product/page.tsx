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
        eyebrow="Product"
        title={
          <>
            A system built for <span className="text-gradient text-shimmer">precision</span>.
          </>
        }
        subtitle={
          "Billings AI is a billing intelligence layer: it accelerates claim intake, invoicing, reconciliation, and operational decision paths with controls for review and governance."
        }
      >
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="glass rounded-3xl border border-gradient p-8 glow-intense scan-line">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Workflow
                </div>
                <div className="mt-3 text-display text-2xl font-semibold md:text-3xl">
                  Signal → Structure → Decision support
                </div>
                <p className="mt-3 text-base text-muted md:text-lg">
                  Capture billing context, transform it into structured financial artifacts,
                  and surface decision support aligned to your workflow.
                </p>
                <div className="mt-8 grid gap-3">
                  {[
                    { label: "Claim intake", tag: "fast" },
                    { label: "Revenue triage", tag: "traceable" },
                    { label: "Transaction records", tag: "reviewable" },
                    { label: "Audit-ready summaries", tag: "audit-ready" },
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
                  What it feels like
                </div>
                <h2 className="mt-3 text-display text-2xl font-semibold tracking-tight md:text-3xl">
                  Calm UX.{" "}
                  <span className="text-gradient">Aggressive capability.</span>
                </h2>
                <p className="mt-4 text-base text-muted">
                  The UI is minimal so the output is loud: clear artifacts, clear rationale,
                  and a governance path that fits real environments.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link
                    href="/safety"
                    className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Safety posture
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Contact sales
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
              title="Accuracy-first culture"
              desc="We focus on evaluation loops and continuous improvements. Specific benchmark artifacts can be shared privately."
            />
            <Feature
              delay={0.2}
              title="Audit-ready outputs"
              desc="Structured logs and review flows designed for governance and iteration."
            />
            <Feature
              delay={0.3}
              title="Deployment flexibility"
              desc="Cloud or controlled environments depending on your security and data constraints."
            />
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
