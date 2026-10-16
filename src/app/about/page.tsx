import Image from "next/image";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { aboutPage } from "@/content/pages";
import { brand, techCards } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...aboutPage, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={aboutPage.eyebrow} heading={aboutPage.heading} lead={aboutPage.lead}>
        <Button href={brand.ctaHref} size="lg">
          {brand.ctaLabel}
        </Button>
      </PageHeader>

      <About />

      <section className="section section--dark principles">
        <div className="container">
          <SectionLabel>{aboutPage.principlesLabel}</SectionLabel>
          <SplitHeading lines={[aboutPage.principlesHeading]} className="heading-xl principles__title" />
          <ul className="principles__grid">
            {techCards.map((card, i) => (
              <li key={card.title}>
                <Reveal delay={i * 0.08} className="info-card principle-card">
                  <div className="principle-card__media">
                    <Image src={card.image} alt={card.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1279px) 46vw, 380px" />
                  </div>
                  <h3 className="info-card__title">{card.title}</h3>
                  <p className="info-card__body">{card.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Approach />
      <CtaBand />
    </>
  );
}
