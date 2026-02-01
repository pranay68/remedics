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
                REPROG — BY ATERNOX
              </div>

              <h1 className="mt-10 text-balance font-sans text-5xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-7xl lg:text-[5.5rem]">
                <span className="text-shimmer">Reprog.</span> <br className="hidden md:block" />
                <span className="text-white/90">Autonomous engineering for enterprise teams.</span>
              </h1>
              
              <h2 className="mt-8 max-w-2xl text-balance font-sans text-xl font-light leading-relaxed tracking-tight text-white/40 md:text-2xl">
                Turn specs into production-ready software — fast, controlled, and reviewable.
              </h2>

              <p className="mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60 md:text-base">
                Reprog ships real codebases: architecture that makes sense, changes that compile, and output that stays
                readable under pressure. You get leverage without handing over your playbook.
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/product"
                  className="group inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  See Reprog
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
                  Talk to sales
                </Link>
              </div>

              <div className="mt-16 grid w-full gap-3 md:grid-cols-3">
                <Card
                  title="Enterprise Output"
                  desc="Codebases with structure: maintainable patterns, fewer surprises, and cleaner diffs."
                />
                <Card
                  title="Control Built In"
                  desc="Guardrails, review points, and governance so autonomy stays accountable."
                />
                <Card
                  title="Reviewable by Humans"
                  desc="Clear reasoning and change summaries so your team can approve with confidence."
                />
              </div>
            </div>
          </Section>
        </div>

        <Section className="py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-sans text-3xl font-semibold leading-[1.15] tracking-[-0.04em] md:text-4xl">
                Built for velocity.{" "}
                <span className="text-shimmer">Designed for trust.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                Reprog is not a chat toy. It’s an enterprise product that turns intent into working software with
                controls your organization can live with.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-[13px] text-white/50">
                <Link href="/autonomous-coding-software" className="hover:text-white/80">
                  Autonomous coding software →
                </Link>
                <Link href="/autonomous-software-development" className="hover:text-white/80">
                  Autonomous software development →
                </Link>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 md:grid-cols-2">
                <Card
                  title="Spec → Scope"
                  desc="Turn requirements into a clear scope your team can review before anything changes."
                />
                <Card
                  title="Build → Integrate"
                  desc="Make coherent multi-file changes that fit your repo’s patterns and conventions."
                />
                <Card
                  title="Verify → Iterate"
                  desc="Favor correctness: checks, validation, and iteration until the behavior matches intent."
                />
                <Card
                  title="Enterprise Controls"
                  desc="Governance, policy, and audit-friendly workflow for real production environments."
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
