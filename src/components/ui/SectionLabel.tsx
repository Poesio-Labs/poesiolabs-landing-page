"use client";

import { motion } from "framer-motion";

export function SectionLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <motion.p
      className={`section-label ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <motion.span
        className="section-label__text"
        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className="section-label__bar"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.p>
  );
}
