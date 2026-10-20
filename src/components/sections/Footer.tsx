"use client";

import Image from "next/image";
import Link from "next/link";
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
          <h2 className="footer__heading">
            {footer.headingLead} <span className="footer__heading-accent">{footer.headingAccent}</span>{" "}
            {footer.headingTail}
          </h2>
          <nav className="footer__links" aria-label="Footer">
            {footer.links.map((link) => (
              <Link key={link.label} href={link.href} className="footer__link">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Reveal delay={0.2} className="footer__aside">
          <p className="footer__pitch">{footer.pitch}</p>
          <Button href={brand.ctaHref} className="footer__button">
            {brand.ctaLabel}
          </Button>
          {footer.socials.length > 0 && (
            <ul className="footer__socials">
              {footer.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={`${brand.name} on ${social.label}`}
                    className="footer__social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon} size={22} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </div>

      <div className="footer__bottom">
        <div className="container footer__legal">
          <p>© {new Date().getFullYear()} {brand.name.toUpperCase()}. All rights reserved.</p>
          <ul>
            {footer.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__brand" aria-hidden="true">
        <span className="footer__brand-glow" />
        <Image src="/brand/wordmark.png" alt="" width={1637} height={263} sizes="100vw" className="footer__brand-word" />
      </div>
    </footer>
  );
}
