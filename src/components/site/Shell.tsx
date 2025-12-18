import type { PropsWithChildren } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export function Shell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
