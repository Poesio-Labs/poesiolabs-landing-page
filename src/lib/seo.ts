import type { Metadata } from "next";
import { brand } from "@/content/site";

export const xHandle = "@poesiolabs";

export const ogImageSize = { width: 1200, height: 630 };

type PageSeo = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  hasOwnImage?: boolean;
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  imageAlt = `${brand.name} — Engineering the digital future`,
  hasOwnImage = false,
  noindex = false,
}: PageSeo): Metadata {
  const imageUrl = `${hasOwnImage && path !== "/" ? path : ""}/opengraph-image`;
  const image = { url: imageUrl, ...ogImageSize, alt: imageAlt, type: "image/png" };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: brand.name,
      locale: "en_US",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: xHandle,
      title,
      description,
      images: [image],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: brand.url },
      { "@type": "ListItem", position: 2, name, item: new URL(path, brand.url).toString() },
    ],
  };
}
