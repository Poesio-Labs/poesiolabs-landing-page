import { ContactCards } from "@/components/sections/ContactCards";
import { Faq } from "@/components/sections/Faq";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { contactPage } from "@/content/pages";
import { brand } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...contactPage, path: "/contact" });

const hrefFor = { email: brand.ctaHref, partnershipEmail: brand.partnershipHref };

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={contactPage.eyebrow} heading={contactPage.heading} lead={contactPage.lead} />

      <section className="section section--dark section--contact">
        <div className="container">
          <ContactCards
            channels={contactPage.channels.map((channel) => ({
              title: channel.title,
              body: channel.body,
              email: brand[channel.key],
              href: hrefFor[channel.key],
            }))}
          />
          <Reveal className="info-card info-card--wide">
            <div>
              <h2 className="info-card__title">{contactPage.nextHeading}</h2>
              <p className="info-card__body">{contactPage.nextBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  );
}
