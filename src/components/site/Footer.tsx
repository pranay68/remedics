import Link from "next/link";

const links = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
          <div className="text-display text-sm font-medium tracking-[-0.01em] text-white/90">Remedics</div>
          <div className="mt-2 text-[13px] leading-relaxed text-white/50">
            Built for speed, auditability, and safety-first workflows.
          </div>
        </div>

        <div className="flex items-center gap-4 text-[13px] text-white/50">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white/80">
              {l.label}
            </Link>
          ))}
          <span className="text-white/30">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
