import { faqs } from "@/content/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function Faq() {
  return (
    <section className="faq section" id="faqs">
      <div className="container">
        <SectionLabel>FAQs</SectionLabel>
        <div className="faq__grid">
          <SplitHeading lines={["Perhaps,", "You might", "wonder.."]} className="heading-xl faq__title" />

          <Accordion type="single" collapsible className="faq__list">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
