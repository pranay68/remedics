import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

function Row({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/50 p-6">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </div>
  );
}

export default function SafetyPage() {
  return (
    <Shell>
      <Page
        eyebrow="Safety"
        title={
          <>
            Built to be <span className="text-gradient">reviewable</span>.
          </>
        }
        subtitle={
          "We don’t position Billings AI as a magical black box. We position it as controllable infrastructure: outputs, logs, and workflows designed for oversight."
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Row
            title="Operator-in-the-loop"
            desc="Designed to support professional judgment with clear artifacts, not replace it by default."
          />
          <Row
            title="Audit trail"
            desc="Traceable outputs and structured logs that can fit governance and review processes."
          />
          <Row
            title="Evaluation mindset"
            desc="We treat metrics seriously: we measure, stress-test, and iterate."
          />
          <Row
            title="Security-by-design"
            desc="Secure defaults with deployment flexibility based on your environment constraints."
          />
        </div>

        <div className="mt-10 rounded-3xl border border-border/70 bg-surface/45 p-8 glow">
          <div className="text-xs font-semibold text-muted">Important</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Not financial advice.
          </h2>
          <p className="mt-3 text-muted">
            Billings AI is built for billing workflows and requires professional oversight.
            We avoid claiming certifications or regulatory approvals unless they are
            currently obtained.
          </p>
        </div>
      </Page>
    </Shell>
  );
}
