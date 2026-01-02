import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { Reveal } from "@/components/animations/Reveal";
import { Spotlight } from "@/components/animations/Spotlight";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowRight, Shield, Zap, Cpu, Code2, Sparkles } from "lucide-react";

function Feature({ title, desc, delay = 0, icon: Icon }: { title: string; desc: string; delay?: number; icon: any }) {
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

export default function ProductPage() {
  return (
    <Shell>
      <Page
        eyebrow="Reprog"
        title={
          <Reveal>
            <span className="font-display">
              The AI assistant that <span className="text-shimmer">understands</span> your code.
            </span>
          </Reveal>
        }
        subtitle={
          <Reveal delay={0.1}>
            <span className="text-white/60">
              Reprog is a context-aware coding companion. It reads your entire repository to provide suggestions, refactors, and answers that actually compile and run.
            </span>
          </Reveal>
        }
      >
        <div className="grid gap-8 md:grid-cols-12 mt-12">
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <Spotlight>
                <div className="glass rounded-[2.5rem] border border-white/10 p-10 glow-intense relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Code2 size={120} />
                  </div>
                  <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                    Capabilities
                  </div>
                  <div className="font-display text-3xl font-bold md:text-4xl mb-6 leading-tight">
                    Context → Reasoning <br />→ Generation
                  </div>
                  <p className="font-sans text-lg text-white/50 mb-10 leading-relaxed">
                    Reprog indexes your codebase locally. It understands your types, your utilities, and your architecture
                    before it writes a single line of code.
                  </p>
                  <div className="grid gap-4">
                    {{
                      label: "Smart Autocomplete",
                      tag: "predictive",
                      icon: Zap,
                    },
                    {
                      label: "Natural Language Edit",
                      tag: "conversational",
                      icon: Sparkles,
                    },
                    {
                      label: "Codebase Chat",
                      tag: "indexed",
                      icon: Code2,
                    },
                    {
                      label: "One-click Refactor",
                      tag: "automated",
                      icon: Cpu,
                    }].map((item, i) => (
                      <Reveal key={item.label} delay={0.3 + i * 0.1}>
                        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                          <div className="flex items-center gap-4">
                            <item.icon className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" />
                            <div className="font-display text-base font-bold tracking-tight">{item.label}</div>
                          </div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 px-2 py-1 rounded border border-white/5">{item.tag}</div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.4}>
              <Spotlight>
                <div className="glass rounded-[2.5rem] border border-white/10 p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                      Experience
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl mb-6 leading-tight">
                      Feels like magic.{" "}
                      <span className="text-shimmer">Works like engineering.</span>
                    </h2>
                    <p className="font-sans text-lg text-white/50 leading-relaxed">
                      Stop context switching between documentation and your editor. Reprog brings the knowledge to your cursor.
                    </p>
                  </div>
                  
                  <div className="mt-12 flex flex-col gap-4">
                    <Magnetic>
                      <Link
                        href="/contact"
                        className="w-full h-16 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
                      >
                        Request Access
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <Feature
            delay={0.5}
            icon={Shield}
            title="Local Indexing"
            desc="Reprog builds a semantic map of your codebase on your machine. Your code never leaves your device for indexing."
          />
          <Feature
            delay={0.6}
            icon={Zap}
            title="Zero Latency"
            desc="Optimized for speed. Get suggestions in milliseconds, keeping you in the flow state without interruptions."
          />
          <Feature
            delay={0.7}
            icon={Cpu}
            title="Neural Reasoning"
            desc="Beyond simple completion. Reprog reasons about logic, edge cases, and performance implications."
          />
        </div>
      </Page>
    </Shell>
  );
}
