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
            Talk to us when you’re ready to <span className="text-shimmer">deploy</span>.
          </>
        }
        subtitle={
          "No aggressive funnels. Send the minimum details and we’ll respond." 
        }
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-border/70 bg-surface/50 p-7">
              <div className="font-sans text-sm font-bold tracking-tight">Contact</div>
              <div className="mt-2 font-sans text-sm text-white/40">
                Use the form to request access, sales inquiries, or general questions. We do not display direct emails publicly.
              </div>
              <div className="mt-6 font-sans text-sm text-white/40">
                Please provide your contact details in the form and we will respond shortly.
              </div>
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="font-sans text-xs font-bold uppercase tracking-widest text-brand-2">
                  Headquarters
                </div>
                <div className="mt-2 font-sans text-sm text-white/40">
                  Chandranagar, Ward 07<br />
                  Nepal
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
