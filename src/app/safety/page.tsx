import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { Reveal } from "@/components/animations/Reveal";
import { Spotlight } from "@/components/animations/Spotlight";
import { ShieldCheck, Lock, EyeOff, Server, LucideIcon } from "lucide-react";

function Row({ title, desc, delay = 0, icon: Icon }: { title: string; desc: string; delay?: number; icon: LucideIcon }) {
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

export default function SafetyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Safety"
        title={
          <Reveal>
            <span className="font-display">
              Your code is <span className="text-shimmer">yours</span>.
            </span>
          </Reveal>
        }
        subtitle={
          <Reveal delay={0.1}>
            <span className="text-white/60">
              Reprog is designed with a zero-retention architecture. We don&apos;t train on your code, and we don&apos;t store your IP.
            </span>
          </Reveal>
        }
      >
        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <Row
            delay={0.2}
            icon={EyeOff}
            title="Zero Retention"
            desc="Code snippets sent for inference are discarded immediately after generation. No logs, no storage."
          />
          <Row
            delay={0.3}
            icon={Lock}
            title="Local Indexing"
            desc="Your codebase index lives on your machine. We never upload your repository to our servers."
          />
          <Row
            delay={0.4}
            icon={ShieldCheck}
            title="SOC 2 Ready"
            desc="Our infrastructure is built on SOC 2 compliant providers with strict access controls."
          />
          <Row
            delay={0.5}
            icon={Server}
            title="Enterprise Controls"
            desc="Admins can enforce policies on model usage, telemetry, and data sharing."
          />
        </div>

        <Reveal delay={0.6}>
          <Spotlight>
            <div className="mt-12 glass rounded-[2.5rem] border border-white/10 p-12 glow-intense relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <ShieldCheck size={160} />
              </div>
              <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                Commitment
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl mb-6 leading-tight">
                We don&apos;t train on <br />your data.
              </h2>
              <p className="max-w-3xl font-sans text-xl text-white/50 leading-relaxed">
                Our business model is selling software, not selling your data. We explicitly opt-out of training base models on customer code.
              </p>
            </div>
          </Spotlight>
        </Reveal>
      </Page>
    </Shell>
  );
}
