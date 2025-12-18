import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Row({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function SafetyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Safety"
        title={
          <>
            Built to be <span className="text-gradient text-shimmer">reviewable</span>.
          </>
        }
        subtitle={
          "We don't position Billings AI as a magical black box. We position it as controllable infrastructure: outputs, logs, and workflows designed for oversight."
        }
      >
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <Row
              delay={0.1}
              title="Operator-in-the-loop"
              desc="Designed to support professional judgment with clear artifacts, not replace it by default."
            />
            <Row
              delay={0.2}
              title="Audit trail"
              desc="Traceable outputs and structured logs that can fit governance and review processes."
            />
            <Row
              delay={0.3}
              title="Evaluation mindset"
              desc="We treat metrics seriously: we measure, stress-test, and iterate."
            />
            <Row
              delay={0.4}
              title="Security-by-design"
              desc="Secure defaults with deployment flexibility based on your environment constraints."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Important
            </div>
            <h2 className="mt-3 text-display text-3xl font-semibold tracking-tight md:text-4xl">
              Not financial advice.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Billings AI is built for billing workflows and requires professional oversight.
              We avoid claiming certifications or regulatory approvals unless they are
              currently obtained.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
