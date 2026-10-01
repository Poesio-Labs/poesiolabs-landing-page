"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { industries } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";

const ease = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 6000;
const pad = (value: number) => String(value).padStart(2, "0");

type Industry = (typeof industries)[number];

function IndustryCard({ industry, priority = false }: { industry: Industry; priority?: boolean }) {
  return (
    <>
      <div className="industry-card__media">
        <Image src={industry.image} alt="" fill sizes="(max-width: 1279px) 90vw, 520px" priority={priority} />
      </div>
      <h3 className="industry-card__title">
        {industry.title}
        {"subtitle" in industry && <span className="industry-card__subtitle">{industry.subtitle}</span>}
      </h3>
      <p className="industry-card__desc">{industry.description}</p>
    </>
  );
}

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 80, rotate: direction * 2 }),
  center: { opacity: 1, x: 0, rotate: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -80, rotate: direction * -2 }),
};

function IndustryCarousel() {
  const [[index, direction], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const total = industries.length;

  const go = (step: number) => setState(([current]) => [(current + step + total) % total, step]);

  useEffect(() => {
    if (paused || !inView) return;
    const id = window.setTimeout(() => setState(([current]) => [(current + 1) % total, 1]), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, inView, total]);

  const industry = industries[index];

  return (
    <div
      ref={ref}
      className="industries__carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="industries__aside">
        <SplitHeading
          lines={["One", "Company,", "Multiple", "Industries"]}
          className="heading-xl industries__title"
        />
        <Reveal delay={0.3}>
          <p className="industries__kicker">Peek the industries we serve</p>
        </Reveal>

        <div className="industries__progress" aria-hidden="true">
          <div className="industries__track">
            <motion.span
              className="industries__fill"
              animate={{ scaleX: (index + 1) / total }}
              transition={{ duration: 0.8, ease }}
            />
          </div>
          <span className="industries__count">
            <span className="industries__current">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.span
                  key={index}
                  custom={direction}
                  initial={{ y: direction * 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction * -16, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                >
                  {pad(index + 1)}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="industries__total"> / {pad(total)}</span>
          </span>
        </div>
      </div>

      <Reveal delay={0.1} className="industry-card industry-card--carousel" tabIndex={0} aria-roledescription="carousel">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={index}
            className="industry-card__slide"
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.75, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              if (info.offset.x > 60) go(-1);
            }}
            aria-live="polite"
          >
            <IndustryCard industry={industry} priority={index === 0} />
          </motion.div>
        </AnimatePresence>

        <div className="industry-card__controls">
          <button type="button" aria-label="Previous industry" onClick={() => go(-1)}>
            <Icon name="chevronLeft" size={22} />
          </button>
          <button type="button" aria-label="Next industry" onClick={() => go(1)}>
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
      </Reveal>
    </div>
  );
}

function IndustryList() {
  return (
    <div className="industries__stack">
      <SplitHeading lines={["One Company,", "Multiple Industries"]} className="heading-xl industries__title" />
      <Reveal delay={0.2}>
        <p className="industries__kicker">Peek the industries we serve</p>
      </Reveal>
      <ul className="industries__list">
        {industries.map((industry) => (
          <li key={industry.title}>
            <Reveal className="industry-card">
              <IndustryCard industry={industry} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Industries() {
  return (
    <section className="industries section" id="industries">
      <div className="container">
        <SectionLabel>Industries We Serve</SectionLabel>
        <IndustryCarousel />
        <IndustryList />
      </div>
    </section>
  );
}
