"use client";

import { useRef } from "react";
import { brand, footer } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { gsap, useGSAP } from "@/lib/gsap";

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
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
          <h2 className="footer__heading">{`${footer.headingLead} ${footer.headingAccent} ${footer.headingTail}`}</h2>
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
        <p className="footer__brand-word">Poesio Labs</p>
      </div>
    </footer>
  );
}
