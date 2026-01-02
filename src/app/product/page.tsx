import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Feature({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function ProductPage() {
  return (
    <Shell>
      <Page
        eyebrow="Reprog"
        title={
          <>
            The AI assistant that <span className="text-gradient text-shimmer">understands</span> your code.
          </>
        }
        subtitle={
          "Reprog is a context-aware coding companion. It reads your entire repository to provide suggestions, refactors, and answers that actually compile and run."
        }
      >
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="glass rounded-3xl border border-gradient p-8 glow-intense scan-line">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Capabilities
                </div>
                <div className="mt-3 text-display text-2xl font-semibold md:text-3xl">
                  Context → Reasoning → Generation
                </div>
                <p className="mt-3 text-base text-muted md:text-lg">
                  Reprog indexes your codebase locally. It understands your types, your utilities, and your architecture
                  before it writes a single line of code.
                </p>
                <div className="mt-8 grid gap-3">
                  {[
                    { label: "Smart Autocomplete", tag: "predictive" },
                    { label: "Natural Language Edit", tag: "conversational" },
                    { label: "Codebase Chat", tag: "indexed" },
                    { label: "One-click Refactor", tag: "automated" },
                  ].map((item, i) => (
                    <ScaleIn key={item.label} delay={0.1 * (i + 1)}>
                      <div className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background/40 px-5 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-brand-2/50 hover:bg-background/60">
                        <div className="text-base font-medium">{item.label}</div>
                        <div className="text-mono text-xs text-brand-2">{item.tag}</div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <div className="glass rounded-3xl border border-border/70 p-8 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
                  Experience
                </div>
                <h2 className="mt-3 text-display text-2xl font-semibold tracking-tight md:text-3xl">
                  Feels like magic.{" "}
                  <span className="text-gradient">Works like engineering.</span>
                </h2>
                <p className="mt-4 text-base text-muted">
                  Stop context switching between documentation and your editor. Reprog brings the knowledge to your cursor.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link
                    href="/safety"
                    className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Security
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Feature
              delay={0.1}
              title="Local Indexing"
              desc="Reprog builds a semantic map of your codebase on your machine. Your code never leaves your device for indexing."
            />
            <Feature
              delay={0.2}
              title="Multi-file Edits"
              desc="Ask Reprog to refactor a component, and it will automatically update the imports and usages in other files."
            />
            <Feature
              delay={0.3}
              title="Terminal Integration"
              desc="Generate shell commands, explain errors, and run scripts directly from the chat interface."
            />
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
