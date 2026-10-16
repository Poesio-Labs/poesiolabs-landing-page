import { ContactCards } from "@/components/sections/ContactCards";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { partnershipsPage } from "@/content/pages";
import { brand } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...partnershipsPage, path: "/partnerships" });

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader eyebrow={partnershipsPage.eyebrow} heading={partnershipsPage.heading} lead={partnershipsPage.lead}>
        <Button href={brand.partnershipHref} size="lg">
          Email our partnerships team
        </Button>
      </PageHeader>

      <section className="section section--dark">
        <div className="container">
          <SectionLabel>{partnershipsPage.whyLabel}</SectionLabel>
          <div className="split-intro">
            <SplitHeading lines={[partnershipsPage.whyHeading]} className="heading-xl" />
            <Reveal delay={0.1}>
              <p className="split-intro__body">{partnershipsPage.whyBody}</p>
            </Reveal>
          </div>

          <ul className="card-grid">
            {partnershipsPage.opportunities.map((opportunity, i) => (
              <li key={opportunity.title}>
                <Reveal delay={i * 0.08} className="info-card">
                  <h3 className="info-card__title">{opportunity.title}</h3>
                  <p className="info-card__body">{opportunity.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark section--contact">
        <div className="container">
          <SectionLabel>Next step</SectionLabel>
          <div className="split-intro">
            <SplitHeading lines={[partnershipsPage.nextHeading]} className="heading-xl" />
            <Reveal delay={0.1}>
              <p className="split-intro__body">{partnershipsPage.nextBody}</p>
            </Reveal>
          </div>
          <ContactCards
            channels={[
              {
                title: "Partnership inquiries",
                body: "Delivery, technology, and industry partnerships.",
                email: brand.partnershipEmail,
                href: brand.partnershipHref,
              },
              {
                title: "General inquiries",
                body: "Projects, questions, and everything else.",
                email: brand.email,
                href: brand.ctaHref,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
