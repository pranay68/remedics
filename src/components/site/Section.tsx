import type { PropsWithChildren } from "react";

export function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`mx-auto max-w-6xl px-5 ${className}`.trim()}>
      {children}
    </section>
  );
}
