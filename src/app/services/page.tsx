import { Approach } from "@/components/sections/Approach";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { servicesPage } from "@/content/pages";
import { brand } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...servicesPage, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow={servicesPage.eyebrow} heading={servicesPage.heading} lead={servicesPage.lead}>
        <Button href={brand.ctaHref} size="lg">
          {brand.ctaLabel}
        </Button>
      </PageHeader>

      <section className="section section--dark">
        <div className="container">
          <SectionLabel>{servicesPage.listLabel}</SectionLabel>
          <SplitHeading lines={["Five ways we help"]} className="heading-xl services__title" />
          <ul className="card-grid">
            {servicesPage.services.map((service, i) => (
              <li key={service.title}>
                <Reveal delay={(i % 3) * 0.08} className="info-card">
                  <span className="info-card__icon" aria-hidden="true">
                    <Icon name={service.icon} size={26} />
                  </span>
                  <h3 className="info-card__title">{service.title}</h3>
                  <p className="info-card__body">{service.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="info-card info-card--wide">
            <div>
              <h3 className="info-card__title">{servicesPage.existing.heading}</h3>
              <p className="info-card__body">{servicesPage.existing.body}</p>
            </div>
            <Button href={brand.ctaHref} size="lg" variant="secondary">
              {brand.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </section>

      <Approach />
      <CtaBand />
    </>
  );
}
