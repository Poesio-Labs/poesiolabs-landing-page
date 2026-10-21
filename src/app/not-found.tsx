import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `Page not found | ${brand.name}` },
};

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      heading="This page could not be found"
      lead="The link may be broken or the page may have moved. These pages are a good place to continue."
    >
      <Button href="/" size="lg">
        Go to the home page
      </Button>
      <Button href="/services" size="lg" variant="secondary" showIcon={false}>
        Explore our services
      </Button>
    </PageHeader>
  );
}
