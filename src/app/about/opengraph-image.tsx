import { aboutPage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${aboutPage.heading}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: aboutPage.eyebrow, title: aboutPage.heading, lead: aboutPage.lead });
}
