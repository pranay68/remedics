import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reprog | Aternox",
    short_name: "Reprog",
    description: "Reprog is Aternox’s autonomous engineering product for enterprise teams.",
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
