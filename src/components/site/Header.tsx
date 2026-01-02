"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
	{ href: "/product", label: "Product" },
	{ href: "/safety", label: "Safety" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/about", label: "About" },
	{ href: "/careers", label: "Careers" },
];

function isActive(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(href + "/");
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
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-5 py-4">
				<Link
					href="/"
					className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
				>
					<span className="relative grid h-8 w-8 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
						<span className="h-3 w-3 rounded-md bg-white" />
					</span>
					<div className="leading-tight">
						<div className="text-display text-sm font-medium tracking-[-0.01em]">
							Aternox
						</div>
						<div className="text-xs text-white/40">Engineering & products</div>
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
										: "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

			<div className="flex items-center gap-2">
					<Link
						href="/contact"
						className="btn-secondary inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[13px] transition-all duration-200"
						aria-label="Download — contact sales"
					>
						Download
					</Link>
				</div>
			</div>
		</header>
	);
}
