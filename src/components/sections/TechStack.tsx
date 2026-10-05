"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import { brand, techCards } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function TechStack() {
  const root = useRef<HTMLElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".tech-card", stack.current);
        let settleTops: number[] = [];

        const update = () => {
          const viewport = window.innerHeight;
          const arrival = cards.map((card, i) => {
            const top = card.getBoundingClientRect().top;
            return gsap.utils.clamp(0, 1, (viewport - top) / (viewport - settleTops[i]));
          });

          cards.forEach((card, i) => {
            const covered = arrival.slice(i + 1).reduce((sum, value) => sum + value, 0);
            card.style.setProperty("--covered", `${covered}`);
          });
        };

        ScrollTrigger.create({
          trigger: stack.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: update,
          onRefresh: () => {
            settleTops = cards.map((card) => parseFloat(getComputedStyle(card).top) || 0);
            update();
          },
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

        <div ref={stack} className="tech-stack">
          {techCards.map((card, i) => (
            <article key={card.title} className="tech-card" style={{ "--card-index": i } as CSSProperties}>
              <div className="tech-card__media">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1279px) 48vw, 620px" priority={i === 0} />
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
