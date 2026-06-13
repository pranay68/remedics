export const siteName = "Aternox";
export const productName = "ReArch";
export const siteTitle = "ReArch by Aternox | Recovery for Broken AI-Built Apps";
export const siteDescription =
  "ReArch helps teams recover broken, messy, or stalled AI-built software through bounded case understanding, explicit confirmation, scoped execution, and delivery-ready packages.";

export const fiveStages = [
  {
    name: "Intake",
    summary: "You bring the broken app, repo, docs, and visible failure.",
  },
  {
    name: "Case Room",
    summary: "We build the case, separate truth from noise, and confirm what recovery actually means.",
  },
  {
    name: "Quote",
    summary: "A quote appears only after the case is built and explicitly confirmed.",
  },
  {
    name: "Run",
    summary: "Execution stays inside the confirmed scope instead of wandering through guesses.",
  },
  {
    name: "Package",
    summary: "You receive a bounded recovery package without exposing internal dossier structure on the public site.",
  },
] as const;

export const trustPrinciples = [
  "Backend-owned truth before quote or run.",
  "Explicit case confirmation before pricing becomes actionable.",
  "Bounded deliverable, honest limits, and remedy on non-delivery.",
  "No outcome guarantee and no fabricated proof claims.",
] as const;

export const pricingPrinciples = [
  "No flat public price.",
  "Quote after explicit case confirmation.",
  "Charge at authorize.",
  "Bounded deliverable with honest limits and remedy on non-delivery.",
  "No outcome guarantee.",
] as const;

export const recoverySignals = [
  "AI-built product collapsed under patch layers",
  "handoff context is inconsistent or missing",
  "live behavior and repo truth no longer match",
  "the team needs a buyer-safe recovery package instead of more guesswork",
] as const;
