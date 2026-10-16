import { LegalPage } from "@/components/sections/LegalPage";
import { legalPages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.terms;

export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/terms", noindex: true });

export default function TermsPage() {
  return <LegalPage page={page} />;
}
