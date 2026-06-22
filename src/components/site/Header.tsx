"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
  { href: "/about", label: "About" },
  { href: "/waitlist", label: "Waitlist" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.08] bg-black/70 backdrop-blur-xl"
          : "border-white/[0.04] bg-black/30 backdrop-blur-md"
      } supports-[backdrop-filter]:bg-black/30`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#05060e]">
            <Image
              src="/logo.png"
              alt="Aternox"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-sans text-sm font-semibold tracking-[-0.03em] text-white/90">
              Aternox
            </div>
            <div className="mt-0.5 text-[11px] font-medium tracking-tight text-white/60">
              ReArch
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-[13px] transition-all duration-200 ${
                  active
                    ? "bg-white/[0.08] text-white"
                    : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-white/75">
            Launching July 1
          </div>
        </div>
      </div>
    </header>
  );
}
