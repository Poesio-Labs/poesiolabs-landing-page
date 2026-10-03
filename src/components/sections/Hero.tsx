"use client";

import { useRef } from "react";
import { brand } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { gsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { motion: "(prefers-reduced-motion: no-preference)", fine: "(pointer: fine)" },
        (ctx) => {
          const { motion, fine } = ctx.conditions as { motion: boolean; fine: boolean };
          if (!motion) return;

          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .from(".hero__base", { opacity: 0, duration: 0.8, ease: "power2.out" })
            .from(".hero__logo-mark", { x: 70, opacity: 0, scale: 0.9, rotate: -8, duration: 1.3 }, 0.05)
            .from(".hero__logo-orbit", { opacity: 0, strokeDashoffset: 520, duration: 1.4, stagger: 0.12 }, 0.18)
            .from(".hero__logo-node", { scale: 0, opacity: 0, duration: 0.7, stagger: 0.08, transformOrigin: "center" }, 0.55)
            .from(".hero__copy > *", { y: 22, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.15)
            .from(".hero__panel", { y: 34, opacity: 0, scale: 0.96, duration: 1.1 }, 0.32)
            .from(".hero__metric-grid div", { x: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.68)
            .from(".hero__workflow span", { scaleX: 0, opacity: 0, duration: 0.9, stagger: 0.12, transformOrigin: "left center" }, 0.82)
            .from(".hero__proof li", { y: 12, opacity: 0, duration: 0.6, stagger: 0.06 }, 1);

          gsap.to(".hero__sweep", {
            xPercent: 180,
            duration: 5.5,
            ease: "sine.inOut",
            repeat: -1,
            repeatDelay: 1,
          });

          gsap.to(".hero__logo-mark", { rotate: 2.5, scale: 1.035, duration: 6, ease: "sine.inOut", repeat: -1, yoyo: true });
          gsap.to(".hero__logo-orbit", {
            strokeDashoffset: -620,
            duration: 7,
            ease: "none",
            repeat: -1,
            stagger: 0.35,
          });
          gsap.to(".hero__logo-node--one", { x: -34, y: 18, duration: 3.1, ease: "sine.inOut", repeat: -1, yoyo: true });
          gsap.to(".hero__logo-node--two", { x: 28, y: -24, duration: 3.7, ease: "sine.inOut", repeat: -1, yoyo: true });
          gsap.to(".hero__logo-node--three", { x: -18, y: -18, duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true });
          gsap.to(".hero__workflow span", {
            opacity: 0.45,
            duration: 1.7,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.18,
          });

          gsap
            .timeline({
              scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
            })
            .to(".hero__panel", { yPercent: -12, ease: "none" }, 0)
            .to(".hero__banner", { yPercent: 16, opacity: 0.55, ease: "none" }, 0)
            .to(".hero__stripes", { yPercent: 10, opacity: 0.55, ease: "none" }, 0)
            .to(".hero__veil", { opacity: 1, ease: "none" }, 0);

          if (!fine) return;

          const layers = [
            { el: ".hero__panel", depth: -12 },
            { el: ".hero__banner", depth: 14 },
            { el: ".hero__stripes", depth: 5 },
          ].map(({ el, depth }) => ({
            depth,
            x: gsap.quickTo(el, "x", { duration: 1.4, ease: "power3.out" }),
            y: gsap.quickTo(el, "y", { duration: 1.4, ease: "power3.out" }),
          }));

          const onMove = (event: PointerEvent) => {
            const nx = event.clientX / window.innerWidth - 0.5;
            const ny = event.clientY / window.innerHeight - 0.5;
            layers.forEach((layer) => {
              layer.x(nx * layer.depth);
              layer.y(ny * layer.depth);
            });
          };

          window.addEventListener("pointermove", onMove);
          return () => window.removeEventListener("pointermove", onMove);
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" id="top">
      <div className="hero__scene" aria-hidden="true">
        <div className="hero__base" />
        <div className="hero__folds">
          <span className="hero__fold hero__fold--left" />
          <span className="hero__fold hero__fold--ring" />
          <span className="hero__fold hero__fold--ring-alt" />
          <span className="hero__fold hero__fold--right" />
          <span className="hero__fold hero__fold--core" />
        </div>
        <div className="hero__stripes">
          <span className="hero__sweep" />
        </div>
        <div className="hero__banner">
          <svg className="hero__logo-system" viewBox="0 0 900 620" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="hero-p-ribbon" x1="0" y1="0" x2="1" y2="0.4">
                <stop offset="0" stopColor="#d56cff" />
                <stop offset="0.52" stopColor="#8b3df5" />
                <stop offset="1" stopColor="#17071f" />
              </linearGradient>
              <linearGradient id="hero-p-stem" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#d56cff" stopOpacity="0.7" />
                <stop offset="0.5" stopColor="#5c1f83" stopOpacity="0.45" />
                <stop offset="1" stopColor="#050505" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="hero-p-orbit" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#d56cff" stopOpacity="0" />
                <stop offset="0.35" stopColor="#d56cff" stopOpacity="0.72" />
                <stop offset="0.7" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="1" stopColor="#d56cff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g className="hero__logo-orbits">
              <path className="hero__logo-orbit hero__logo-orbit--one" d="M42 398C214 240 478 208 730 272C826 296 890 344 932 410" />
              <path className="hero__logo-orbit hero__logo-orbit--two" d="M118 512C330 354 610 340 860 474" />
              <path className="hero__logo-orbit hero__logo-orbit--three" d="M330 148C492 58 710 112 820 252" />
            </g>
            <g className="hero__logo-mark" transform="translate(205 -150) scale(1.08)">
              <path
                fill="url(#hero-p-ribbon)"
                d="M245 392c0-52 46-92 102-82l166 54c32 11 55 42 55 77v56c0 36-22 66-54 76l-134 43V513l80-26c9-3 9-15 0-18l-170-55c-26-9-45-14-45-22Z"
              />
              <path fill="url(#hero-p-stem)" d="M245 398l135 44v248l-88-30c-28-10-47-36-47-66V398Z" />
            </g>
            <circle className="hero__logo-node hero__logo-node--one" cx="746" cy="168" r="15" />
            <circle className="hero__logo-node hero__logo-node--two" cx="638" cy="486" r="8" />
            <circle className="hero__logo-node hero__logo-node--three" cx="314" cy="424" r="6" />
          </svg>
        </div>
        <div className="hero__horizon-wrap">
          <span className="hero__horizon-echo" />
          <span className="hero__horizon" />
          <span className="hero__flare" />
        </div>
        <div className="hero__grain" />
        <div className="hero__veil" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <h1>Build the product your next stage depends on.</h1>
          <p>
            {brand.name} turns complex workflows, ambitious ideas, and underperforming interfaces into focused
            software systems that are clear enough to sell, strong enough to scale, and polished enough to trust.
          </p>
          <div className="hero__actions">
            <Button href={brand.ctaHref} size="lg">
              Start a build
            </Button>
            <Button href="#approach" size="lg" variant="secondary">
              View process
            </Button>
          </div>
          <ul className="hero__proof" aria-label="Capabilities">
            <li>Research</li>
            <li>UX systems</li>
            <li>Frontend</li>
            <li>Backend</li>
            <li>Launch</li>
          </ul>
        </div>

        <Card className="hero__panel">
          <CardHeader>
            <span className="hero__panel-kicker">Build operating system</span>
            <CardTitle>From business signal to product launch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="hero__metric-grid">
              <div>
                <span>01</span>
                <strong>Discovery sprint</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Product interface</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Production release</strong>
              </div>
            </div>
            <div className="hero__workflow" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
