import { LegalPage } from "@/components/sections/LegalPage";
import { legalPages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.privacy;

export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/privacy", noindex: true });

export default function PrivacyPage() {
  return <LegalPage page={page} />;
}
