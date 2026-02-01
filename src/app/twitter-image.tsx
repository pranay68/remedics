import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000000",
          color: "#FFFFFF",
          padding: 64,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(800px 400px at 50% 0%, rgba(255,255,255,0.14), transparent 70%), radial-gradient(700px 420px at 75% 30%, rgba(209,213,219,0.10), transparent 70%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 22, letterSpacing: 2, color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>
            Reprog — by Aternox
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
            Autonomous engineering for enterprise.
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", lineHeight: 1.35 }}>
            Specs → production-ready software.
          </div>
        </div>
      </div>
    ),
    size
  );
}
