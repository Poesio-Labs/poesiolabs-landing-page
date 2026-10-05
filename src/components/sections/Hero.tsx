"use client";

import { useRef } from "react";
import { brand } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { gsap, useGSAP } from "@/lib/gsap";

const ARC = "M40 360A760 320 0 0 1 1560 360";
const ARC_ECHO = "M-40 410A840 310 0 0 1 1640 410";
const ARC_ECHO_FAR = "M-140 470A940 300 0 0 1 1740 470";

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

          const arcs = gsap.utils.toArray<SVGPathElement>(".hero__arc-draw");
          const draw = { length: 0 };
          const renderArc = () => {
            arcs.forEach((arc) => {
              arc.style.strokeDasharray = `${draw.length} 1000`;
              arc.style.strokeDashoffset = `${draw.length / 2 - 500}`;
            });
          };
          renderArc();

          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .from(".hero__base", { opacity: 0, duration: 1.4, ease: "power2.out" })
            .from(".hero__fold", { opacity: 0, scale: 1.12, duration: 2.6, stagger: 0.12, ease: "power2.out" }, 0)
            .from(".hero__stripes", { opacity: 0, duration: 2 }, 0.4)
            .to(draw, { length: 1000, duration: 2.4, ease: "expo.inOut", onUpdate: renderArc }, 0.2)
            .from(".hero__arc-echo", { opacity: 0, y: 28, duration: 2.2, stagger: 0.18, ease: "power3.out" }, 0.9)
            .from(".hero__line", { yPercent: 55, opacity: 0, duration: 1.4, stagger: 0.12 }, 0.35)
            .from(".hero__copy p", { y: 18, opacity: 0, duration: 1.3 }, 0.65)
            .from(".hero__actions", { y: 18, opacity: 0, duration: 1.3 }, 0.8);

          gsap
            .timeline({ repeat: -1, repeatDelay: 2.4, yoyo: true, delay: 2.8 })
            .fromTo(
              ".hero__arc-glint",
              { strokeDashoffset: 60 },
              { strokeDashoffset: -1000, duration: 4.2, ease: "power1.inOut" },
            )
            .fromTo(".hero__arc-glint", { opacity: 0 }, { opacity: 0.9, duration: 1, ease: "sine.out" }, 0)
            .to(".hero__arc-glint", { opacity: 0, duration: 1, ease: "sine.in" }, 3.2);

          gsap.to(".hero__arc-halo", { opacity: 0.85, duration: 3.4, ease: "sine.inOut", repeat: -1, yoyo: true });

          gsap.utils.toArray<HTMLElement>(".hero__fold").forEach((fold, i) => {
            gsap.to(fold, {
              rotate: `+=${gsap.utils.random(-8, 8)}`,
              xPercent: gsap.utils.random(-6, 6),
              yPercent: gsap.utils.random(-4, 4),
              duration: gsap.utils.random(10, 16),
              delay: i * 0.4,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });

          gsap.to(".hero__sweep", {
            xPercent: 260,
            duration: 7,
            ease: "sine.inOut",
            repeat: -1,
            repeatDelay: 2,
          });

          gsap
            .timeline({
              scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
            })
            .to(".hero__horizon-wrap", { yPercent: -30, scale: 1.12, ease: "none" }, 0)
            .to(".hero__folds", { yPercent: 14, rotate: 3, ease: "none" }, 0)
            .to(".hero__stripes", { yPercent: 12, opacity: 0.2, ease: "none" }, 0)
            .to(".hero__copy", { y: 60, opacity: 0.35, ease: "none" }, 0)
            .to(".hero__veil", { opacity: 1, ease: "none" }, 0);

          if (!fine) return;

          const layers = [
            { el: ".hero__folds", depth: 26 },
            { el: ".hero__horizon-wrap", depth: -14 },
            { el: ".hero__stripes", depth: 6 },
          ].map(({ el, depth }) => ({
            depth,
            x: gsap.quickTo(el, "x", { duration: 1.6, ease: "power3.out" }),
            y: gsap.quickTo(el, "y", { duration: 1.6, ease: "power3.out" }),
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
        <div className="hero__horizon-wrap">
          <svg className="hero__arc" viewBox="0 0 1600 360" fill="none" strokeLinecap="round">
            <defs>
              <linearGradient id="hero-arc-fade-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1600" y2="0">
                <stop offset="0.06" stopColor="#000" />
                <stop offset="0.36" stopColor="#fff" />
                <stop offset="0.64" stopColor="#fff" />
                <stop offset="0.94" stopColor="#000" />
              </linearGradient>
              <mask id="hero-arc-fade" maskUnits="userSpaceOnUse" x="-200" y="-200" width="2000" height="900">
                <rect x="-200" y="-200" width="2000" height="900" fill="url(#hero-arc-fade-fill)" />
              </mask>
              <filter id="hero-arc-blur-lg" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="26" />
              </filter>
              <filter id="hero-arc-blur-md" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
              <filter id="hero-arc-blur-sm" x="-20%" y="-60%" width="140%" height="220%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
            <g mask="url(#hero-arc-fade)">
              <path className="hero__arc-echo" d={ARC_ECHO_FAR} stroke="#8f6ee0" strokeWidth="2" filter="url(#hero-arc-blur-md)" />
              <path className="hero__arc-echo" d={ARC_ECHO} stroke="#c4adf5" strokeWidth="2.5" filter="url(#hero-arc-blur-sm)" />
              <path
                className="hero__arc-halo hero__arc-draw"
                d={ARC}
                pathLength={1000}
                stroke="#a678ff"
                strokeWidth="64"
                filter="url(#hero-arc-blur-lg)"
              />
              <path
                className="hero__arc-draw"
                d={ARC}
                pathLength={1000}
                stroke="#dcc8ff"
                strokeWidth="12"
                filter="url(#hero-arc-blur-md)"
              />
              <path className="hero__arc-draw" d={ARC} pathLength={1000} stroke="#ffffff" strokeWidth="3" />
              <path
                className="hero__arc-glint"
                d={ARC}
                pathLength={1000}
                stroke="#ffffff"
                strokeWidth="7"
                strokeDasharray="60 2000"
                filter="url(#hero-arc-blur-sm)"
              />
            </g>
          </svg>
        </div>
        <div className="hero__grain" />
        <div className="hero__veil" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <h1>
            <span className="hero__line">Engineering</span>{" "}
            <span className="hero__line">
              the digital <em className="hero__accent">future</em>
            </span>
          </h1>
          <p>We build better systems, and experiences that solve real problems and move technology forward.</p>
          <div className="hero__actions">
            <Button href="#about" size="lg" variant="secondary" showIcon={false}>
              Explore {brand.name}
            </Button>
            <Button href={brand.ctaHref} size="lg">
              {brand.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
