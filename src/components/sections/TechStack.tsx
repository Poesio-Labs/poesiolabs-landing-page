"use client";

import Image from "next/image";
import { useRef } from "react";
import { brand, techCards } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { gsap, useGSAP } from "@/lib/gsap";

const cssLength = (el: Element, name: string) =>
  parseFloat(getComputedStyle(el).getPropertyValue(name)) || 0;

export function TechStack() {
  const root = useRef<HTMLElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const stackEl = stack.current!;
        const cards = gsap.utils.toArray<HTMLElement>(".tech-card", stackEl);
        const open = () => cssLength(stackEl, "--card-open");
        const closed = () => cssLength(stackEl, "--card-closed");
        const q = (card: HTMLElement, selector: string) => card.querySelector(selector);
        const styles = getComputedStyle(stackEl);
        const ink = styles.getPropertyValue("--ink").trim();
        const violet = styles.getPropertyValue("--violet-500").trim();

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut", duration: 1 },
          scrollTrigger: {
            trigger: stackEl,
            start: "center 55%",
            end: () => `+=${(cards.length - 1) * window.innerHeight * 0.8}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            snap: { snapTo: 1 / (cards.length - 1), duration: 0.6, ease: "power2.inOut" },
          },
        });

        cards.slice(1).forEach((card, i) => {
          const previous = cards[i];
          const at = i;

          tl.to(previous, { height: closed, scale: 0.97, opacity: 0.88 }, at)
            .to(q(previous, ".tech-card__desc"), { autoAlpha: 0, height: 0, duration: 0.5 }, at)
            .to(q(previous, ".tech-card__title"), { color: ink }, at)
            .to(q(previous, ".tech-card__media img"), { scale: 1.15 }, at)
            .to(card, { height: open, scale: 1, opacity: 1 }, at)
            .fromTo(q(card, ".tech-card__media img"), { scale: 1.3 }, { scale: 1 }, at)
            .to(q(card, ".tech-card__title"), { color: violet }, at)
            .to(q(card, ".tech-card__desc"), { autoAlpha: 1, height: "auto", duration: 0.6 }, at + 0.4);
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
            <article key={card.title} className="tech-card" data-index={i}>
              <div className="tech-card__media">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 768px) 45vw, 460px" priority={i === 0} />
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
