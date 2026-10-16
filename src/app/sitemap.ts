import type { MetadataRoute } from "next";
import { brand, navLinks } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...navLinks.map((link) => link.href)];

  return routes.map((route) => ({
    url: new URL(route, brand.url).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
