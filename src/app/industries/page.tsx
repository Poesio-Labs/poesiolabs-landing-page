import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { industriesPage } from "@/content/pages";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: industriesPage.seoTitle,
  description: industriesPage.description,
  path: "/industries",
  hasOwnImage: true,
  imageAlt: `Poesio Labs — ${industriesPage.heading}`,
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Industries", "/industries")} />
      <PageHeader eyebrow={industriesPage.eyebrow} heading={industriesPage.heading} lead={industriesPage.lead} />
      <IndustryGrid />
      <CtaBand heading="Working in one of these industries?" />
    </>
  );
}
