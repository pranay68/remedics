import type { PropsWithChildren, ReactNode } from "react";
import { Section } from "@/components/site/Section";

export function Page({
  title,
  eyebrow,
  subtitle,
  children,
}: PropsWithChildren<{
  title: ReactNode;
  eyebrow?: ReactNode;
  subtitle?: ReactNode;
}>) {
  return (
    <div className="noise">
      <div className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
        <div className="absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.42),transparent_60%)] blur-3xl" />
        <div className="absolute -top-52 right-[2%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.22),transparent_62%)] blur-3xl" />

        <Section className="relative py-16">
          {eyebrow ? (
            <div className="text-xs font-semibold text-muted">{eyebrow}</div>
          ) : null}
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-muted md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </Section>
      </div>

      <Section className="py-16">{children}</Section>
    </div>
  );
}
