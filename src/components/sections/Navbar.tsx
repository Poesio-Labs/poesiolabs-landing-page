"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const footer = document.querySelector(".footer");
    const onFooter = !!footer && footer.getBoundingClientRect().top < window.innerHeight;

    if (current < previous || !onFooter) setHidden(false);
    else if (current > previous && !menuOpen) setHidden(true);

    setScrolled(current > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={false}
      animate={{ y: hidden ? -90 : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease }}
    >
      <div className="nav__bar">
        <Logo className="nav__logo" />

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={brand.ctaHref} className="nav__cta">
          {brand.ctaLabel}
        </Button>

        <button
          type="button"
          className="nav__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={26} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav__menu-link"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.06 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
