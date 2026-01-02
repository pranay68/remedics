import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/animations/Reveal";
import { Spotlight } from "@/components/animations/Spotlight";
import { Magnetic } from "@/components/animations/Magnetic";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <Spotlight>
      <div className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur transition-all duration-500 hover:border-white/[0.2] hover:bg-white/[0.04]">
        <div className="font-display text-[13px] font-medium tracking-wide text-white/90">{title}</div>
        <div className="mt-2.5 font-sans text-[13px] leading-relaxed text-white/50">{desc}</div>
      </div>
    </Spotlight>
  );
}

export default function Home() {
  return (
    <Shell>
      {/* Hero Section */}
      <Section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* ...existing code... */}
        <div className="relative z-10 max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-white/60">Next-Gen AI Development</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8">
              <span className="font-futuristic text-shimmer block mb-2">Aternox.</span>
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Future of Code.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed font-light">
              We build high-performance AI tools for the world's most ambitious developers. 
              Experience <span className="text-white font-medium">Reprog</span> — the flagship AI coding assistant.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-6">
              <Magnetic>
                <Link
                  href="/product"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-2 group"
                >
                  Explore Reprog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-full border border-white/20 hover:bg-white/5 transition-all"
                >
                  Contact Sales
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 hover:opacity-50 transition-opacity cursor-pointer">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-32 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={0.4}>
            <Spotlight>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md h-full group hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Reprog AI</h3>
                <p className="text-white/60 leading-relaxed">
                  Our flagship coding assistant that understands your entire codebase, not just the file you're in.
                </p>
              </div>
            </Spotlight>
          </Reveal>

          <Reveal delay={0.5}>
            <Spotlight>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md h-full group hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Enterprise Grade</h3>
                <p className="text-white/60 leading-relaxed">
                  Security-first architecture designed for the world's most sensitive development environments.
                </p>
              </div>
            </Spotlight>
          </Reveal>

          <Reveal delay={0.6}>
            <Spotlight>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md h-full group hover:border-white/20 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Neural Engine</h3>
                <p className="text-white/60 leading-relaxed">
                  Proprietary models optimized for low-latency, high-accuracy code generation and refactoring.
                </p>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </Section>
    </Shell>
  );
}
