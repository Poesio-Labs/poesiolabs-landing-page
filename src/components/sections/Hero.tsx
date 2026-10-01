"use client";

import { useRef } from "react";
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
            .from(".hero__base", { opacity: 0, duration: 1.2, ease: "power2.out" })
            .from(".hero__fold", { opacity: 0, scale: 1.25, duration: 2.4, stagger: 0.15 }, 0)
            .from(".hero__stripes", { opacity: 0, duration: 2 }, 0.4)
            .from(".hero__horizon", { yPercent: 70, scaleX: 0.4, opacity: 0, duration: 2.2 }, 0.5)
            .from(".hero__horizon-echo", { yPercent: 90, opacity: 0, duration: 2.4 }, 0.8)
            .from(".hero__flare", { scaleX: 0, opacity: 0, duration: 1.8 }, 1.1);

          gsap.utils.toArray<HTMLElement>(".hero__fold").forEach((fold, i) => {
            gsap.to(fold, {
              rotate: `+=${gsap.utils.random(-14, 14)}`,
              xPercent: gsap.utils.random(-8, 8),
              yPercent: gsap.utils.random(-6, 6),
              duration: gsap.utils.random(9, 14),
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

          gsap.to(".hero__horizon", {
            "--glow": 1,
            scaleX: 1.04,
            duration: 3.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          gsap
            .timeline({
              scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.6 },
            })
            .to(".hero__horizon-wrap", { yPercent: -55, scale: 1.25, ease: "none" }, 0)
            .to(".hero__folds", { yPercent: 18, rotate: 4, ease: "none" }, 0)
            .to(".hero__stripes", { yPercent: 12, opacity: 0.2, ease: "none" }, 0)
            .to(".hero__veil", { opacity: 1, ease: "none" }, 0);

          if (!fine) return;

          const layers = [
            { el: ".hero__folds", depth: 30 },
            { el: ".hero__horizon-wrap", depth: -18 },
            { el: ".hero__stripes", depth: 8 },
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
    <section ref={root} className="hero" id="top" aria-hidden="true">
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
        <span className="hero__horizon-echo" />
        <span className="hero__horizon" />
        <span className="hero__flare" />
      </div>
      <div className="hero__grain" />
      <div className="hero__veil" />
    </section>
  );
}
