import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "About Aternox",
  description: "Aternox is the company behind DGS — Deep General Synthesis. Delaware, USA.",
};

export default function AboutPage() {
  return (
    <Shell>
      <Page
        eyebrow="About"
        title="About Aternox"
      >
        <FadeIn>
          <div className="max-w-3xl space-y-8">
            <p className="text-base leading-relaxed text-white/60">
              Aternox is the company behind DGS — Deep General Synthesis. We are building a deterministic synthesis engine for researchers, enterprises, and builders who need verified answers, not confident guesses. Aternox is incorporated in Delaware, USA.
            </p>
            <p className="text-base leading-relaxed text-white/60">
              DGS was designed and built by Lennox Hayes, founder of Aternox. The FLT3 research program was DGS&apos;s first major proof of concept — a complete preclinical research architecture for a problem that has occupied major pharmaceutical R&amp;D teams for decades.
            </p>
            <p className="text-base leading-relaxed text-white/60">
              For research collaboration, validator inquiries, or enterprise access — use the contact page.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90"
              >
                Contact us
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
