import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

function Job({ title, loc }: { title: string; loc: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface/50 p-6 transition-colors hover:bg-surface/70">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-xs text-muted">{loc}</div>
      </div>
      <div className="text-xs font-medium text-brand-2">Apply &rarr;</div>
    </div>
  );
}

export default function CareersPage() {
  return (
    <Shell>
      <Page
        eyebrow="Careers"
        title={
          <>
            We hire <span className="text-gradient">builders</span>.
          </>
        }
        subtitle={
          "Aternox is the company behind DGS — a deterministic synthesis engine for researchers, enterprises, and builders. We hire builders who ship."
        }
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-sm font-semibold">Open roles</div>
            <p className="mt-2 text-sm text-muted">
              If you don’t see a role but you’re world-class at systems engineering or
              developer tooling, please get in touch via the Contact form and include a short note and your CV/link to work.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <Job title="Founding Systems Engineer" loc="Remote / Hybrid" />
            <Job title="AI Research Engineer" loc="Remote" />
            <Job title="Product Engineer (IDE)" loc="Remote" />
          </div>
        </div>
      </Page>
    </Shell>
  );
}
