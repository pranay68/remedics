import Link from "next/link";
import Image from "next/image";
import { Shell } from "@/components/site/Shell";
import { Section } from "@/components/site/Section";



function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]">
      <div className="font-sans text-[13px] font-semibold tracking-tight text-white/90">{title}</div>
      <div className="mt-2.5 font-sans text-[13px] leading-relaxed text-white/50">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Shell>
      <main className="noise cursor-crosshair">
        <div className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          {/* Platinum/Silver Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_75%_30%,rgba(192,192,192,0.08),transparent_70%)]" />
          
          {/* Faded Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none mix-blend-overlay">
             <Image 
               src="/logo.png" 
               alt="Aternox Background" 
               width={1000} 
               height={1000} 
               className="object-contain grayscale invert"
               priority
             />
          </div>

          <Section className="relative min-h-[calc(100vh-72px)] py-20 md:py-24">
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-white/[0.08] to-transparent px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(255,255,255,0.2)]">
                <span className="h-1 w-1 rounded-full bg-white/60 shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                AUTONOMOUS SOFTWARE SYSTEM
              </div>

              <h1 className="mt-10 text-balance font-sans text-5xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]">
                <span className="text-shimmer">Aternox.</span> <br className="hidden md:block" /> 
                <span className="text-white/90">Enterprise software. Built end-to-end.</span>
              </h1>
              
              <h2 className="mt-8 max-w-2xl text-balance font-sans text-xl font-light leading-relaxed tracking-tight text-white/40 md:text-2xl">
                The first autonomous system that builds enterprise-grade software.
              </h2>

              <p className="mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60 md:text-base">
                Not vibe coding. Not no-code. A coordinated system that plans, implements, tests, and ships production
                software—like a team of 10,000 superhuman developers with unreal coordination.
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/product"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  How it works
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/download"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 text-[13px] text-white transition-all duration-200 hover:bg-white/[0.08]"
                >
                  Download (soon)
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center px-6 text-[13px] text-white/50 transition-all duration-200 hover:text-white/80"
                >
                  Request access
                </Link>
              </div>

              <div className="mt-16 grid w-full gap-3 md:grid-cols-3">
                <Card
                  title="Enterprise-Grade"
                  desc="Built for real teams: architecture, tests, and maintainable code—not demoware."
                />
                <Card
                  title="Autonomous System"
                  desc="A coordinated set of agents that behaves like one engineering organization."
                />
                <Card
                  title="Verified Output"
                  desc="Plans, implements, tests, and iterates until the software matches the spec."
                />
              </div>
            </div>
          </Section>
        </div>

        <Section className="py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">
                Built for flow state.{" "}
                <span className="text-shimmer">Engineered for speed.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                Aternox goes beyond an assistant. It’s a full-stack autonomous workflow that turns intent into
                enterprise-grade software.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 md:grid-cols-2">
                <Card
                  title="Spec → Plan"
                  desc="Convert requirements into an actionable plan with clear scopes and interfaces."
                />
                <Card
                  title="Build → Integrate"
                  desc="Implement multi-file changes with coherent architecture across the codebase."
                />
                <Card
                  title="Test → Fix"
                  desc="Generate tests, run checks, and iterate until failures are resolved."
                />
                <Card
                  title="Enterprise Controls"
                  desc="Security, governance, and workflows designed for production environments."
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
