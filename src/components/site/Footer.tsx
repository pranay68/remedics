import Link from "next/link";

const primaryLinks = [
  { href: "/dgs", label: "What is DGS?" },
  { href: "/compare", label: "Compare DGS" },
  { href: "/product", label: "Product" },
  { href: "/research", label: "Research proof" },
  { href: "/safety", label: "Safety" },
  { href: "/waitlist", label: "Waitlist" },
];

const learnLinks = [
  { href: "/learn/verified-synthesis", label: "Verified synthesis" },
  { href: "/learn/evaluation-verification", label: "Evaluation & verification" },
  { href: "/learn/governed-autonomy", label: "Governed autonomy" },
  { href: "/learn/research-architecture", label: "Research architecture" },
  { href: "/learn/autonomous-coding", label: "Autonomous coding" },
];

const compareLinks = [
  { href: "/compare/dgs-vs-llms", label: "DGS vs LLMs" },
  { href: "/compare/dgs-vs-chatbots", label: "DGS vs chatbots" },
  { href: "/compare/dgs-vs-agent-frameworks", label: "DGS vs agent frameworks" },
  { href: "/autonomous-coding-software", label: "Autonomous coding software" },
  { href: "/autonomous-software-development", label: "Autonomous software development" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const navigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aternox site navigation",
    itemListElement: [...primaryLinks, ...learnLinks, ...compareLinks].map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.label,
      url: new URL(item.href, site).href,
    })),
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }} />
      <div className="mx-auto max-w-4xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="text-sm">
            <div className="text-display text-sm font-medium tracking-[-0.01em] text-white/90">Aternox</div>
            <div className="mt-2 text-[13px] leading-relaxed text-white/50">
              Deterministic General Synthesis for structured, reviewable, high-stakes work.
            </div>
            <div className="mt-2 text-[11px] font-mono text-white/40">
              Aternox LLC, Delaware, USA
            </div>
            <div className="mt-4 max-w-xs text-[12px] leading-relaxed text-white/40">
              Explore DGS, comparison pages, learn pillars, research proof, and safety context from one crawlable footer hub.
            </div>
            <div className="mt-4 text-xs text-white/60">
              © 2026 Aternox LLC
            </div>
          </div>

          <FooterColumn title="Core" links={primaryLinks} />
          <FooterColumn title="Learn" links={learnLinks} />
          <FooterColumn title="Compare" links={compareLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-6 text-[12px] text-white/40">
          <span>Deterministic General Synthesis</span>
          <span className="text-white/20">•</span>
          <span>Reviewer-ready artifacts</span>
          <span className="text-white/20">•</span>
          <span>Governed workflows</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/35">{title}</div>
      <div className="mt-4 flex flex-col gap-3 text-[13px] text-white/50">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors hover:text-white/80">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
