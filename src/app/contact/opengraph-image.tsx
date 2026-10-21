import { contactPage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${contactPage.heading}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: contactPage.eyebrow, title: contactPage.heading, lead: contactPage.lead });
}
