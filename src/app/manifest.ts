import type { MetadataRoute } from "next";
import { homePage } from "@/content/pages";
import { brand } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.name,
    description: homePage.description,
    start_url: "/",
    display: "browser",
    background_color: "#050505",
    theme_color: "#12051f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
