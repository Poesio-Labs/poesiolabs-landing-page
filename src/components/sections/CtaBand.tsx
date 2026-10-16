import { brand } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type CtaAction = { label: string; href: string; variant?: "default" | "secondary" };

type CtaBandProps = {
  heading?: string;
  body?: string;
  actions?: CtaAction[];
};

export function CtaBand({
  heading = "Have a problem worth solving?",
  body = "Tell us about it. We’ll set up a short discovery call to understand your goals and suggest the best way forward.",
  actions = [{ label: brand.ctaLabel, href: brand.ctaHref }],
}: CtaBandProps) {
  return (
    <section className="cta-band section">
      <div className="container">
        <Reveal className="cta-band__card">
          <h2 className="cta-band__title">{heading}</h2>
          <p className="cta-band__body">{body}</p>
          <div className="cta-band__actions">
            {actions.map((action) => (
              <Button key={action.href} href={action.href} size="lg" variant={action.variant}>
                {action.label}
              </Button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
