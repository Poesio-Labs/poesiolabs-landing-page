import { servicesPage } from "@/content/pages";
import { renderOgImage } from "@/lib/og-image";
import { ogImageSize } from "@/lib/seo";

export const alt = `Poesio Labs — ${servicesPage.heading}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: servicesPage.eyebrow, title: servicesPage.heading, lead: servicesPage.lead });
}
