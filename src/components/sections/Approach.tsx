"use client";

import { motion } from "framer-motion";
import type { PointerEvent } from "react";
import { approachSteps } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";

const trackPointer = (event: PointerEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
};

export function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="container">
        <SectionLabel>Our Approach</SectionLabel>
        <SplitHeading lines={["How we work"]} className="heading-xl approach__title" />

        <motion.ol
          className="approach__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {approachSteps.map((step) => (
            <motion.li
              key={step.number}
              className="step-card"
              onPointerMove={trackPointer}
              variants={{
                hidden: { opacity: 0, y: 48, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <span className="step-card__number">{step.number}</span>
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.description}</p>
              <span className="step-card__progress" aria-hidden="true" />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
