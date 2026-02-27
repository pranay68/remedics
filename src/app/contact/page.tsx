import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ResearchForm } from "@/components/site/contact/ResearchForm";
import { EnterpriseForm } from "@/components/site/contact/EnterpriseForm";

export const metadata: Metadata = {
  title: "Contact | Aternox",
  description:
    "Research collaboration, enterprise access, or general inquiries. Get in touch with Aternox.",
};

export default function ContactPage() {
  return (
    <Shell>
      <Page
        eyebrow="Contact"
        title="Get in touch."
        subtitle="Two routes. Choose the one that fits."
      >
        <div className="grid gap-12 md:grid-cols-2">
          {/* ROUTE 1 */}
          <FadeIn>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2 mb-3">
                RESEARCH COLLABORATION
              </div>
              <p className="text-sm text-muted mb-6">
                For scientists, researchers, and institutional partners. Submit your details and we will follow up with NDA documentation if applicable.
              </p>
              <ResearchForm />
            </div>
          </FadeIn>

          {/* ROUTE 2 */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-8 glow">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2 mb-3">
                GENERAL / ENTERPRISE
              </div>
              <p className="text-sm text-muted mb-6">
                For enterprise access inquiries, press, or anything else.
              </p>
              <EnterpriseForm />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center text-[11px] text-white/30">
            No phone. No physical address. Aternox LLC, Delaware, USA.
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
