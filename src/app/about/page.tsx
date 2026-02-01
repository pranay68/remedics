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
            We build tools for <span className="text-gradient text-shimmer">builders</span>.
          </>
        }
        subtitle={
          "Aternox is the company behind Reprog — an autonomous engineering product designed for enterprise teams that need speed and control."
        }
      >
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            <Block
              delay={0.1}
              title="Mission"
              desc="Turn intent into production software with the reliability and discipline of a world-class engineering org."
            />
            <Block
              delay={0.2}
              title="Approach"
              desc="Product-first autonomy: outcomes, verification, and governance — without exposing the blueprint."
            />
            <Block
              delay={0.3}
              title="Philosophy"
              desc="Enterprise-grade means predictable: readable code, strong defaults, safety controls, and iteration until it works."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
              Leadership
            </div>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center">
              <div className="h-24 w-24 shrink-0 rounded-2xl bg-gradient-to-br from-brand to-brand-2 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-surface text-3xl font-bold text-brand-2">
                  SK
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Sulekha Kumari Kamti</h3>
                <p className="text-sm font-medium text-brand-2">Founder & CEO</p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  Sulekha founded Aternox with a vision to redefine the relationship between developers and their tools. 
                  With a focus on building AI-native infrastructure, she leads the company&apos;s mission to architect the future of code, 
                  ensuring that engineering remains a creative pursuit at scale.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
              Statement
            </div>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Code is the lever.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              We believe software should be built with speed and certainty. Autonomy is the lever.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
