import Link from "next/link";
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
    <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.02]">
      <div className="text-[13px] font-medium tracking-wide text-white/90">{title}</div>
      <div className="mt-2.5 text-[13px] leading-relaxed text-white/50">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Shell>
      <main className="noise cursor-crosshair">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-[0.07]" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_75%_30%,rgba(6,182,212,0.14),transparent_70%)]" />

          <Section className="relative min-h-[calc(100vh-72px)] py-20 md:py-24">
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/60 backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-white/40" />
                THE FUTURE OF BILLING OPERATIONS
              </div>

              <h1 className="mt-10 text-balance text-display text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-[5rem]">
                Billing intelligence,<br className="hidden md:block" /> engineered for control and speed.
              </h1>
              
              <h2 className="mt-6 text-display text-2xl font-light leading-[1.2] tracking-[-0.02em] text-white/50 md:text-3xl lg:text-4xl">
                Accuracy, automation, compliance.
              </h2>

              <p className="mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60 md:text-base">
                Billings AI is billing intelligence infrastructure—built to streamline billing workflows,
                compress cycle time, and keep every output auditable.
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/product"
                  className="btn-primary group inline-flex h-11 items-center justify-center rounded-full px-6 text-[13px] transition-all duration-200"
                >
                  Explore Product
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-6 text-[13px] transition-all duration-200"
                >
                  Download
                </Link>
                <Link
                  href="/safety"
                  className="inline-flex h-11 items-center justify-center px-6 text-[13px] text-white/50 transition-all duration-200 hover:text-white/80"
                >
                  Safety posture
                </Link>
              </div>

              <div className="mt-16 grid w-full gap-3 md:grid-cols-3">
                <Card
                  title="Accuracy-first"
                  desc="Engineered to outperform common baselines across core billing workflows (evaluation details on request)."
                />
                <Card
                  title="Audit trail"
                  desc="Traceable outputs with structured logs designed for review, governance, and iteration."
                />
                <Card
                  title="Workflow speed"
                  desc="From invoice to reconciliation—built to compress cycle time without sacrificing control."
                />
              </div>
            </div>
          </Section>
        </div>

        <Section className="py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-display text-3xl font-medium leading-[1.15] tracking-[-0.02em] md:text-4xl">
                Built like infrastructure.{" "}
                <span className="text-gradient">Presented like art.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/60">
                The point isn't noise. It's engineering confidence: calm UI, sharp edges,
                and visuals that communicate capability.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-3 md:grid-cols-2">
                <Card
                  title="Operator-in-the-loop"
                  desc="Designed for oversight and accountability, not blind automation."
                />
                <Card
                  title="Deployment-ready"
                  desc="Flexible paths (cloud/on-prem) depending on your environment."
                />
                <Card
                  title="Security posture"
                  desc="Principled defaults and secure design patterns from day one."
                />
                <Card
                  title="Evaluation culture"
                  desc="We measure performance. We iterate. We keep receipts (when appropriate)."
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Shell>
  );
}
