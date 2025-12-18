import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

function Tier({
  name,
  forWhom,
  bullets,
  delay = 0,
}: {
  name: string;
  forWhom: string;
  bullets: string[];
  delay?: number;
}) {
  return (
    <ScaleIn delay={delay} className="group rounded-3xl border border-border/70 bg-surface/50 p-8 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">{forWhom}</div>
      <div className="mt-3 text-display text-xl font-semibold tracking-tight">{name}</div>
      <ul className="mt-6 space-y-3 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-brand-2" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </ScaleIn>
  );
}

export default function PricingPage() {
  return (
    <Shell>
      <Page
        eyebrow="Pricing"
        title={
          <>
            No tiers to impress you. Just <span className="text-gradient text-shimmer">fit</span>.
          </>
        }
        subtitle={
          "We don't publish pricing publicly. Billings AI deployments depend on environment, governance, and scope."
        }
      >
        <FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            <Tier
              delay={0.1}
              name="Pilot"
              forWhom="Small teams"
              bullets={["Workflow fit", "Evaluation loop", "Fast setup"]}
            />
            <Tier
              delay={0.2}
              name="Scale"
              forWhom="Finance teams / enterprises"
              bullets={["Governance path", "Role-based workflows", "Integration planning"]}
            />
            <Tier
              delay={0.3}
              name="Enterprise"
              forWhom="Regulated environments"
              bullets={["Security posture", "Deployment options", "Support SLAs"]}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Pricing is contextual
                </div>
                <h2 className="mt-3 text-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Tell us your environment, and we'll scope it.
                </h2>
                <p className="mt-4 text-base text-muted md:text-lg">
                  Cloud vs on-prem, integrations, governance requirements—these decide the shape.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex h-14 items-center justify-center rounded-full px-7 text-base font-semibold transition-all hover:scale-105"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
