"use client";

import { motion } from "framer-motion";
import { Fragment, type ElementType } from "react";

type SplitHeadingProps = {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  accentWords?: string[];
};

export function SplitHeading({ lines, as: Tag = "h2", className = "", lineClassName = "", delay = 0, accentWords = [] }: SplitHeadingProps) {
  let wordIndex = 0;

  return (
    <motion.div initial={false} whileInView="visible" viewport={{ once: true, margin: "-15% 0px" }}>
      <Tag className={`split ${className}`} aria-label={lines.join(" ")}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className={`split__line ${lineClassName}`} aria-hidden="true">
            {line.split(" ").map((word, i) => {
              const index = wordIndex++;
              return (
                <Fragment key={i}>
                  <span className="split__mask">
                    <motion.span
                      className={`split__word ${accentWords.includes(word) ? "split__word--accent" : ""}`}
                      variants={{
                        visible: { y: "0%", rotate: 0 },
                      }}
                      transition={{ duration: 0.9, delay: delay + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>{" "}
                </Fragment>
              );
            })}
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
