import { industriesPage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${industriesPage.heading}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: industriesPage.eyebrow, title: industriesPage.heading, lead: industriesPage.lead });
}
