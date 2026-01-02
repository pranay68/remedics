import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { Reveal } from "@/components/animations/Reveal";
import { Spotlight } from "@/components/animations/Spotlight";
import { Target, Lightbulb, Rocket, Quote, LucideIcon } from "lucide-react";

function Block({ title, desc, delay = 0, icon: Icon }: { title: string; desc: string; delay?: number; icon: LucideIcon }) {
  return (
    <Reveal delay={delay}>
      <Spotlight>
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-white/20 backdrop-blur-sm h-full">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5 text-white/70" />
          </div>
          <div className="font-display text-xl font-bold tracking-tight mb-3">{title}</div>
          <div className="font-sans text-sm leading-relaxed text-white/40">{desc}</div>
        </div>
      </Spotlight>
    </Reveal>
  );
}

export default function AboutPage() {
  return (
    <Shell>
      <Page
        eyebrow="About"
        title={
          <Reveal>
            <span className="font-display">
              We build tools for <span className="text-shimmer">builders</span>.
            </span>
          </Reveal>
        }
        subtitle={
          <Reveal delay={0.1}>
            <span className="text-white/60">
              Aternox exists to accelerate software development. We build AI products that help engineers stay in flow and ship faster.
            </span>
          </Reveal>
        }
      >
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <Block
            delay={0.2}
            icon={Target}
            title="Mission"
            desc="Eliminate the friction between thought and code. Make software engineering more creative and less repetitive."
          />
          <Block
            delay={0.3}
            icon={Lightbulb}
            title="Approach"
            desc="Deep integration. We don't just build wrappers; we build systems that understand the structure of software."
          />
          <Block
            delay={0.4}
            icon={Rocket}
            title="Philosophy"
            desc="Tools should be fast, reliable, and invisible. They should work with you, not against you."
          />
        </div>

        <Reveal delay={0.5}>
          <Spotlight>
            <div className="mt-12 glass rounded-[2.5rem] border border-white/10 p-10 glow-intense relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Quote size={160} />
              </div>
              <div className="text-xs font-display font-bold uppercase tracking-[0.2em] text-white/40 mb-8">
                Leadership
              </div>
              <div className="flex flex-col gap-10 md:flex-row md:items-center relative z-10">
                <div className="h-32 w-32 shrink-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-3xl bg-black text-4xl font-display font-bold text-white/80">
                    SK
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-2">Sulekha Kumari Kamti</h3>
                  <p className="font-display text-sm font-bold tracking-widest text-white/40 uppercase">Founder & CEO</p>
                  <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/50">
                    Sulekha founded Aternox with a vision to redefine the relationship between developers and their tools. 
                    With a focus on building AI-native infrastructure, she leads the company&apos;s mission to architect the future of code, 
                    ensuring that engineering remains a creative pursuit at scale.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-12 glass rounded-[2.5rem] border border-white/10 p-12 text-center">
            <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Statement
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl mb-6">
              Code is the <span className="text-shimmer">lever</span>.
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-xl text-white/50 leading-relaxed">
              We believe that by making engineers more productive, we accelerate the pace of innovation for everyone.
            </p>
          </div>
        </Reveal>
      </Page>
    </Shell>
  );
}
