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
            Your code is <span className="text-gradient text-shimmer">yours</span>.
          </>
        }
        subtitle={
          "Aternox is designed with a zero-retention architecture. We don't train on your code, and we don't store your IP."
        }
      >
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <Row
              delay={0.1}
              title="Zero Retention"
              desc="Code snippets sent for inference are discarded immediately after generation. No logs, no storage."
            />
            <Row
              delay={0.2}
              title="Local Indexing"
              desc="Your codebase index lives on your machine. We never upload your repository to our servers."
            />
            <Row
              delay={0.3}
              title="SOC 2 Ready"
              desc="Our infrastructure is built on SOC 2 compliant providers with strict access controls."
            />
            <Row
              delay={0.4}
              title="Enterprise Controls"
              desc="Admins can enforce policies on model usage, telemetry, and data sharing."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">
              Commitment
            </div>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              We don&apos;t train on your data.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Our business model is selling software, not selling your data. We explicitly opt-out of training base models on customer code.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
