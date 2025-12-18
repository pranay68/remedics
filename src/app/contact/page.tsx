import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { ContactForm } from "@/components/site/contact/ContactForm";

export default function ContactPage() {
  return (
    <Shell>
      <Page
        eyebrow="Contact"
        title={
          <>
            Talk to us when you’re ready to <span className="text-gradient">deploy</span>.
          </>
        }
        subtitle={
          "No aggressive funnels. Send the minimum details and we’ll respond." 
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
              <div className="text-sm font-semibold">Fast path</div>
              <div className="mt-2 text-sm text-muted">
                Use the form. Or email directly.
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <div className="text-muted">Sales</div>
                <div className="font-medium">sales@billings.ai</div>
                <div className="mt-4 text-muted">General</div>
                <div className="font-medium">hello@billings.ai</div>
                <div className="mt-4 text-xs text-muted">
                  Placeholder emails—swap later.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
              <ContactForm />
            </div>
          </div>
        </div>
      </Page>
    </Shell>
  );
}
