import { industries } from "@/content/site";
import { IndustryCard } from "@/components/sections/Industries";
import { Reveal } from "@/components/ui/Reveal";

export function IndustryGrid() {
  return (
    <section className="industries industries--page section" aria-label="Industries">
      <div className="container">
        <h2 className="sr-only">Industries we serve</h2>
        <ul className="industry-grid">
          {industries.map((industry, i) => (
            <li key={industry.title}>
              <Reveal delay={(i % 3) * 0.08} className="industry-card industry-card--grid">
                <IndustryCard
                  industry={industry}
                  priority={i < 3}
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 46vw, 380px"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
