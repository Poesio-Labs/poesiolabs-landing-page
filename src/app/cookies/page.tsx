import { LegalPage } from "@/components/sections/LegalPage";
import { legalPages } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";

const page = legalPages.cookies;

export const metadata = pageMetadata({ title: page.title, description: page.description, path: "/cookies", noindex: true });

export default function CookiesPage() {
  return <LegalPage page={page} />;
}
