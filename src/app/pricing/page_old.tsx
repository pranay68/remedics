import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

function Tier({
  name,
  forWhom,
  bullets,
}: {
  name: string;
  forWhom: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
      <div className="text-xs font-semibold text-muted">{forWhom}</div>
      <div className="mt-2 text-lg font-semibold tracking-tight">{name}</div>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-brand" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Shell>
      <Page
        eyebrow="Pricing"
        title={
          <>
            No tiers to impress you. Just <span className="text-gradient">fit</span>.
          </>
        }
        subtitle={
          "We don’t publish pricing publicly. Remedics deployments depend on environment, governance, and scope."
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Tier
            name="Pilot"
            forWhom="Small teams"
            bullets={["Workflow fit", "Evaluation loop", "Fast setup"]}
          />
          <Tier
            name="Scale"
            forWhom="Hospitals / clinics"
            bullets={["Governance path", "Role-based workflows", "Integration planning"]}
          />
          <Tier
            name="Enterprise"
            forWhom="Regulated environments"
            bullets={["Security posture", "Deployment options", "Support SLAs"]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-border/70 bg-surface/45 p-8 glow">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="text-xs font-semibold text-muted">
                Pricing is contextual
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Tell us your environment, and we’ll scope it.
              </h2>
              <p className="mt-3 text-muted">
                Cloud vs on-prem, integrations, governance requirements—these decide the shape.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </Page>
    </Shell>
  );
}
