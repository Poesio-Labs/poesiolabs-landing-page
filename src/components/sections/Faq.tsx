"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitHeading } from "@/components/ui/SplitHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq section" id="faqs">
      <div className="container">
        <SectionLabel>FAQs</SectionLabel>
        <div className="faq__grid">
          <SplitHeading lines={["Perhaps,", "You might", "wonder.."]} className="heading-xl faq__title" />

          <motion.ul
            className="faq__list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <motion.li
                  key={faq.question}
                  className={`faq-item ${open ? "is-open" : ""}`}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.7, ease }}
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      className="faq-item__icon"
                      animate={{ rotate: open ? 135 : 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <Icon name="plus" size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        className="faq-item__panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="faq-item__line" aria-hidden="true" />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
