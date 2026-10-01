"use client";

import { useState } from "react";
import { about, brand } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function About() {
  const [expanded, setExpanded] = useState(false);
  const [lead, ...rest] = about.paragraphs;

  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionLabel>About Us</SectionLabel>
        <div className="about__grid">
          <SplitHeading lines={about.heading} className="heading-xl about__title" lineClassName="about__line" />

          <Reveal delay={0.15} className={`glass-card about__card ${expanded ? "is-expanded" : ""}`}>
            <p>
              <strong>{brand.name}</strong> {lead}
            </p>
            <div className="about__more">
              <div>
                {rest.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="about__toggle"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
