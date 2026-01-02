import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { ContactForm } from "@/components/site/contact/ContactForm";
import { Reveal } from "@/components/animations/Reveal";
import { Spotlight } from "@/components/animations/Spotlight";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <Shell>
      <Page
        eyebrow="Contact"
        title={
          <Reveal>
            <span className="font-display">
              Talk to us when you’re ready to <span className="text-shimmer">deploy</span>.
            </span>
          </Reveal>
        }
        subtitle={
          <Reveal delay={0.1}>
            <span className="text-white/60">
              No aggressive funnels. Send the minimum details and we’ll respond.
            </span>
          </Reveal>
        }
      >
        <div className="grid gap-8 md:grid-cols-12 mt-12">
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <Spotlight>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white/70" />
                    </div>
                    <div className="font-display text-xl font-bold tracking-tight">Get in touch</div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                        Inquiries
                      </div>
                      <p className="font-sans text-base text-white/50 leading-relaxed">
                        Use the form to request access, sales inquiries, or general questions. We do not display direct emails publicly.
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-4 h-4 text-white/30" />
                        <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                          Headquarters
                        </div>
                      </div>
                      <div className="font-sans text-lg text-white/60 leading-relaxed">
                        Chandranagar, Ward 07<br />
                        Nepal
                      </div>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.3}>
              <Spotlight>
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm glow-intense">
                  <ContactForm />
                </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </Page>
    </Shell>
  );
}
