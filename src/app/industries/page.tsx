import { CtaBand } from "@/components/sections/CtaBand";
import { IndustryGrid } from "@/components/sections/IndustryGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { industriesPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...industriesPage, path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow={industriesPage.eyebrow} heading={industriesPage.heading} lead={industriesPage.lead} />
      <IndustryGrid />
      <CtaBand heading="Working in one of these industries?" />
    </>
  );
}
