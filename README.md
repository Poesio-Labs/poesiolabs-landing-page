# Poesio Labs — Landing Page

Marketing landing page for Poesio Labs. Next.js (App Router) + GSAP (ScrollTrigger) + Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| Concern | Location |
| --- | --- |
| All copy, links, card/industry/FAQ data | `src/content/site.ts` |
| All styling (tokens, primitives, sections, breakpoints) | `src/app/globals.css` |
| Page composition (section order) | `src/app/page.tsx` |
| Fonts, metadata, Framer Motion config | `src/app/layout.tsx`, `src/components/MotionProvider.tsx` |
| GSAP + ScrollTrigger registration | `src/lib/gsap.ts` |
| Reusable UI primitives | `src/components/ui/` |
| One component per page section | `src/components/sections/` |
| Images | `public/images/` |

### Styling

There is one stylesheet: `src/app/globals.css`. Colours, fonts, radii, spacing and type scale are CSS
custom properties on `:root` at the top of the file — change a token there and it applies everywhere.
Class names follow a `block__element--modifier` pattern that maps 1:1 to components
(e.g. `.tech-card__title` lives in `TechStack.tsx`). Breakpoints: `1279px` (tablet) and `640px` (mobile).

### Motion — which tool does what

| Section | Tool | Behaviour |
| --- | --- | --- |
| `Hero.tsx` | GSAP | Intro timeline, ambient fold drift, pointer parallax, scroll parallax on the horizon arc. Built from CSS layers — no images. |
| `ServiceMarquee.tsx` | GSAP | Infinite loop; speed and direction follow scroll velocity. |
| `TechStack.tsx` | GSAP ScrollTrigger | Pinned stacked cards. One scrubbed timeline expands the next card while the previous collapses into a bar. Card sizes come from `--card-open` / `--card-closed` in CSS. |
| `Footer.tsx` | GSAP ScrollTrigger | Wordmark letters rise in, scrubbed to scroll. |
| `Navbar.tsx`, `Industries.tsx`, `Faq.tsx`, `About.tsx`, `Approach.tsx` | Framer Motion | Hide-on-scroll nav, carousel transitions, accordion, in-view reveals. |
| `ui/SplitHeading.tsx`, `ui/Reveal.tsx`, `ui/SectionLabel.tsx` | Framer Motion | Shared in-view reveal primitives used by every section. |

`prefers-reduced-motion` is respected: GSAP effects are registered inside `gsap.matchMedia()` and Framer
Motion uses `MotionConfig reducedMotion="user"`. With reduced motion, the tech cards render fully expanded.

## Placeholder assets

The images in `public/images/` were cropped from the design mockups (`tech-solve.jpg`, `industry-*.png`)
or are Unsplash stand-ins (`tech-build.jpg`, `tech-connect.jpg`). Replace them with the original
high-resolution assets using the same filenames.
