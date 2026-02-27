import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

export const metadata: Metadata = {
  title: "DGS — Deep General Synthesis | Aternox",
  description:
    "DGS is a deterministic synthesis engine. Not a language model. Not prediction. Verifiable, traceable output across every domain.",
};

function ModeCard({
  label,
  headline,
  body,
  access,
  delay = 0,
}: {
  label: string;
  headline: string;
  body: string;
  access: string;
  delay?: number;
}) {
  return (
    <ScaleIn
      delay={delay}
      className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow"
    >
      <div className="font-mono text-[10px] font-semibold tracking-widest text-brand-2 uppercase">{label}</div>
      <div className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">{headline}</div>
      <div className="mt-2.5 text-sm leading-relaxed text-muted">{body}</div>
      <div className="mt-5 inline-block rounded-full border border-border/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted">
        {access}
      </div>
    </ScaleIn>
  );
}

export default function DGSPage() {
  return (
    <Shell>
      <Page
        eyebrow="DEEP GENERAL SYNTHESIS"
        title="DGS — Deep General Synthesis"
        subtitle="A deterministic synthesis engine. Not a language model. Not a prediction system. A structured reasoning architecture that produces verifiable output."
      >
        {/* HOW DGS DIFFERS */}
        <FadeIn>
          <div className="glass rounded-3xl border border-gradient p-8 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
              How DGS Differs
            </div>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50 mb-4">
                  Standard AI Systems
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  {[
                    "Generates probable next tokens",
                    "Output varies on the same input",
                    "Cannot show its reasoning chain",
                    "Confident even when wrong",
                    "Treats all tasks with equal depth",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/20" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-2 mb-4">DGS</h3>
                <ul className="space-y-3 text-sm text-muted">
                  {[
                    "Synthesizes through structured logic gates",
                    "Same input produces same output — always",
                    "Every conclusion is traceable",
                    "Uncertain outputs are flagged, not hidden",
                    "Mode-specific depth — right tool for right problem",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-brand-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* THE FOUR MODES */}
        <FadeIn delay={0.2}>
          <div className="mt-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted mb-6">
              The Four Modes
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ModeCard
                delay={0.1}
                label="FAST MODE"
                headline="Complex everyday tasks. Deterministic output."
                body="Fast Mode is the entry point. It handles problems that frontier models fumble — complex reasoning tasks that require structured thinking rather than fluent generation. Faster than GPT-4. No hallucination. Same output on every run."
                access="PUBLIC — Coming soon"
              />
              <ModeCard
                delay={0.2}
                label="MID MODE"
                headline="Multi-step logic. Cross-domain synthesis."
                body="Mid Mode goes deeper. For problems that require reasoning across domains — connecting a legal principle to a financial structure, or a scientific method to an engineering constraint. Structured output at every step."
                access="PUBLIC — Coming soon"
              />
              <ModeCard
                delay={0.3}
                label="DEEP MODE"
                headline="Enterprise-grade. For problems that break standard AI."
                body="Deep Mode is for the problems that should not be solvable by existing tools. Ultra-complex, multi-layer synthesis tasks. Enterprise pricing. Private access. Outputs are structured, verified, and delivered with a complete logic trace."
                access="ENTERPRISE — Private access"
              />
              <ModeCard
                delay={0.4}
                label="SYNTHETIC MODE"
                headline="Discovery-level synthesis. This is the crown."
                body="Synthetic Mode generates genuinely new structured knowledge — not recombined information, not pattern completion. This is the mode that produced the FLT3 preclinical research program. It is not publicly available. It is not for sale. Access is by invitation only."
                access="RESTRICTED — Not available"
              />
            </div>
          </div>
        </FadeIn>

        {/* WHAT DGS DOES NOT DO */}
        <FadeIn delay={0.4}>
          <div className="mt-12 rounded-2xl border border-border/70 bg-surface/50 p-8">
            <h2 className="font-sans text-2xl font-semibold tracking-[-0.04em]">What DGS does not do.</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[
                "Does not replace domain expertise",
                "Does not have real-time internet access",
                "Does not make clinical, legal, or financial decisions on your behalf",
                "Does not reveal its internal architecture — ever",
                "Synthetic Mode is not available to the public and will not be",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-white/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* PROOF TEASER */}
        <FadeIn delay={0.6}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense scan-line">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
              Proof of Concept
            </div>
            <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">See it in action.</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              DGS produced a complete preclinical research architecture for FLT3-mutated Acute Myeloid Leukemia — 58 documents, one run. The full program scope and public summary are available on the research page.
            </p>
            <div className="mt-6">
              <Link
                href="/research"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                View the research →
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
