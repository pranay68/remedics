import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/50 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Shell>
      <Page
        eyebrow="Product"
        title={
          <>
            A system built for <span className="text-gradient">precision</span>.
          </>
        }
        subtitle={
          "Billings AI is a billing intelligence layer: it accelerates claim intake, transaction records, and operational decision paths with controls for review and governance."
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border/70 bg-surface/45 p-7 glow">
              <div className="text-xs font-semibold text-muted">Workflow</div>
              <div className="mt-2 text-lg font-semibold">
                Signal → Structure → Decision support
              </div>
              <p className="mt-2 text-muted">
                Capture billing context, transform it into structured financial artifacts,
                and surface decision support aligned to your workflow.
              </p>
              <div className="mt-6 grid gap-3">
                {["Claim intake", "Revenue triage", "Transaction records", "Audit-ready summaries"].map(
                  (x) => (
                    <div
                      key={x}
                      className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/30 px-4 py-3"
                    >
                      <div className="text-sm font-medium">{x}</div>
                      <div className="text-xs text-muted">fast • traceable • reviewable</div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border/70 bg-surface/45 p-7">
              <div className="text-xs font-semibold text-muted">What it feels like</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Calm UX. Aggressive capability.
              </h2>
              <p className="mt-3 text-muted">
                The UI is minimal so the output is loud: clean artifacts, clear rationale,
                and a governance path that fits real environments.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/safety"
                  className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-semibold"
                >
                  Safety posture
                </Link>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-semibold"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Feature
            title="Accuracy-first culture"
            desc="We focus on evaluation loops and continuous improvements. Specific benchmark artifacts can be shared privately."
          />
          <Feature
            title="Audit-ready outputs"
            desc="Structured logs and review flows designed for governance and iteration."
          />
          <Feature
            title="Deployment flexibility"
            desc="Cloud or controlled environments depending on your security and data constraints."
          />
        </div>
      </Page>
    </Shell>
  );
}
