import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Block({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function AboutPage() {
  return (
    <Shell>
      <Page
        eyebrow="About"
        title={
          <>
            We build the <span className="text-gradient text-shimmer">future</span> of billing systems.
          </>
        }
        subtitle={
          "Billings AI exists to make billing operations faster, more precise, and more governable—without turning finance into chaos."
        }
      >
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            <Block
              delay={0.1}
              title="Mission"
              desc="Compress billing cycle time while raising the quality of artifacts and financial decisions."
            />
            <Block
              delay={0.2}
              title="Approach"
              desc="Engineering-first systems: evaluation loops, safety controls, and strong UX."
            />
            <Block
              delay={0.3}
              title="Philosophy"
              desc="Confidence through measurement. Authority through execution."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
              Statement
            </div>
            <h2 className="mt-3 text-display text-3xl font-semibold tracking-tight md:text-4xl">
              We don't beg for attention.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              The product speaks. The engineering shows. When you're ready to deploy,
              we'll talk.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
