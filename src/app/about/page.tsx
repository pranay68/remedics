import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Block({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="font-sans text-sm font-bold tracking-tight text-brand-2">{title}</div>
      <div className="mt-2 font-sans text-sm leading-relaxed text-white/40">{desc}</div>
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
            We build tools for <span className="text-shimmer">builders</span>.
          </>
        }
        subtitle={
          "Aternox exists to accelerate software development. We build AI products that help engineers stay in flow and ship faster."
        }
      >
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            <Block
              delay={0.1}
              title="Mission"
              desc="Eliminate the friction between thought and code. Make software engineering more creative and less repetitive."
            />
            <Block
              delay={0.2}
              title="Approach"
              desc="Deep integration. We don't just build wrappers; we build systems that understand the structure of software."
            />
            <Block
              delay={0.3}
              title="Philosophy"
              desc="Tools should be fast, reliable, and invisible. They should work with you, not against you."
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
                <h3 className="font-sans text-2xl font-bold tracking-[-0.04em] text-foreground">Sulekha Kumari Kamti</h3>
                <p className="font-sans text-sm font-bold tracking-tight text-brand-2">Founder & CEO</p>
                <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/40">
                  Sulekha founded Aternox with a vision to redefine the relationship between developers and their tools. 
                  With a focus on building AI-native infrastructure, she leads the company's mission to architect the future of code, 
                  ensuring that engineering remains a creative pursuit at scale.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-2">
              Statement
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-[0.15em] uppercase md:text-3xl">
              Code is the lever.
            </h2>
            <p className="mt-4 max-w-3xl font-sans text-base text-white/40 md:text-lg">
              We believe that by making engineers more productive, we accelerate the pace of innovation for everyone.
            </p>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
