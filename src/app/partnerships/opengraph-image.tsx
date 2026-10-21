import { partnershipsPage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${partnershipsPage.heading}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: partnershipsPage.eyebrow, title: partnershipsPage.heading, lead: partnershipsPage.lead });
}
