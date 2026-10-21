import { homePage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${homePage.ogTitle}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Software development company", title: homePage.ogTitle, lead: homePage.ogLead });
}
