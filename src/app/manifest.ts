import type { MetadataRoute } from "next";
import { productName, siteDescription } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${productName} | Aternox`,
    short_name: productName,
    description: siteDescription,
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
