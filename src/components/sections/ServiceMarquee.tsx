"use client";

import { useRef } from "react";
import { services } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function ServiceMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(".marquee__track", { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
        // A negative timeScale stalls at totalTime 0, so start deep into the loop
        loop.totalTime(loop.duration() * 100);

        let direction = 1;
        const trigger = ScrollTrigger.create({
          onUpdate: (self) => {
            if (self.direction !== direction) direction = self.direction;
            const boost = Math.min(Math.abs(self.getVelocity()) / 300, 5);
            gsap.to(loop, { timeScale: direction * (1 + boost), duration: 0.3, overwrite: true });
            gsap.to(loop, { timeScale: direction, duration: 1.2, delay: 0.3 });
          },
        });

        return () => trigger.kill();
      });
    },
    { scope: root },
  );

  const items = [...services, ...services];

  return (
    <div ref={root} className="marquee" aria-label="What we do">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__list" aria-hidden={copy === 1}>
            {items.map((service, i) => (
              <li key={`${service.label}-${i}`} className="marquee__item">
                <Icon name={service.icon} size={24} className="marquee__icon" />
                <span>{service.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
