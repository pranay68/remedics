import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DGS | Aternox",
    short_name: "DGS",
    description:
      "DGS is Aternox's deterministic logic-gate synthesis engine with traceable decision rules. Synthesis can vary; logic structure does not.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "1000x1000",
        type: "image/png",
      },
    ],
  };
}
