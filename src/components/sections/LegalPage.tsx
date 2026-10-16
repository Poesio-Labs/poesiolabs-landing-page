import { PageHeader } from "@/components/sections/PageHeader";
import { legalNotice, type legalPages } from "@/content/pages";

type LegalContent = (typeof legalPages)[keyof typeof legalPages];

export function LegalPage({ page }: { page: LegalContent }) {
  return (
    <>
      <PageHeader eyebrow="Legal" heading={page.title} lead={page.description} />
      <section className="section section--dark legal">
        <div className="container legal__inner">
          <p className="legal__notice" role="note">
            {legalNotice}
          </p>
          {page.sections.map((section) => (
            <section key={section.heading} className="legal__section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
