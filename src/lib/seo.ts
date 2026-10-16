import type { Metadata } from "next";
import { brand } from "@/content/site";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Poesio Labs — Engineering the digital future",
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, absoluteTitle = false, noindex = false }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${brand.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: brand.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
