"use client";

import Image from "next/image";
import { useRef } from "react";
import { brand, techCards } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { gsap, useGSAP } from "@/lib/gsap";

export function TechStack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card) => {
          const media = card.querySelector(".tech-card__media img");
          const body = card.querySelector(".tech-card__body");

          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 42%",
                scrub: 0.85,
              },
            })
            .fromTo(card, { x: 180, autoAlpha: 0.2, scale: 0.96 }, { x: 0, autoAlpha: 1, scale: 1 }, 0)
            .fromTo(body, { x: 48, autoAlpha: 0.15 }, { x: 0, autoAlpha: 1 }, 0.12)
            .fromTo(media, { scale: 1.12 }, { scale: 1 }, 0);
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="tech">
      <div className="container tech__inner">
        <header className="tech__header">
          <SplitHeading as="h1" lines={["Technology"]} className="tech__title" />
          <SplitHeading lines={["should move things forward"]} className="tech__subtitle" delay={0.2} />
          <Reveal delay={0.5}>
            <p className="tech__lead">{brand.tagline}</p>
          </Reveal>
        </header>

        <div className="tech-stack">
          {techCards.map((card, i) => (
            <article key={card.title} className="tech-card">
              <div className="tech-card__media">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 768px) 45vw, 520px" priority={i === 0} />
              </div>
              <div className="tech-card__body">
                <h3 className="tech-card__title">{card.title}</h3>
                <div className="tech-card__desc">
                  <p>{card.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
