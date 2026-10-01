"use client";

import { useRef } from "react";
import { brand, footer } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { gsap, useGSAP } from "@/lib/gsap";

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: ".footer__brand", start: "top bottom", end: "bottom bottom", scrub: 1 },
          })
          .from(".footer__brand-mark", { yPercent: 80, rotate: -12, opacity: 0, ease: "none" }, 0)
          .from(".footer__brand-letter", { yPercent: 110, opacity: 0, stagger: 0.06, ease: "none" }, 0.1)
          .from(".footer__brand-glow", { scale: 0.4, opacity: 0, ease: "none" }, 0);

        gsap.from(".footer__line", {
          scaleX: 0,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="footer">
      <span className="footer__line" aria-hidden="true" />

      <div className="container footer__top">
        <div className="footer__cta">
          <Reveal>
            <p className="footer__eyebrow">{footer.eyebrow}</p>
          </Reveal>
          <SplitHeading
            lines={[`${footer.headingLead} ${footer.headingAccent}`, footer.headingTail]}
            className="footer__heading"
            accentWords={[footer.headingAccent]}
          />
          <nav className="footer__links" aria-label="Footer">
            {footer.links.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Reveal delay={0.2} className="footer__aside">
          <p className="footer__pitch">{footer.pitch}</p>
          <Button href={brand.ctaHref} className="footer__button">
            {brand.ctaLabel}
          </Button>
          <ul className="footer__socials">
            {footer.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label} className="footer__social">
                  <Icon name={social.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="footer__bottom">
        <div className="container footer__legal">
          <p>© {new Date().getFullYear()} {brand.name.toUpperCase()}. All rights reserved.</p>
          <ul>
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__brand" aria-hidden="true">
        <span className="footer__brand-glow" />
        <LogoMark className="footer__brand-mark" tone="mono" />
        <span className="footer__brand-word">
          {"Poesio".split("").map((letter, i) => (
            <span key={i} className="footer__brand-letter">
              {letter}
            </span>
          ))}
          <span className="footer__brand-letter footer__brand-labs">Labs</span>
        </span>
      </div>
    </footer>
  );
}
