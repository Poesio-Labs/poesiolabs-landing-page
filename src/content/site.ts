import type { IconName } from "@/components/ui/Icon";

export const brand = {
  name: "Poesio Labs",
  shortName: "Poesio",
  ctaLabel: "Start a project",
  ctaHref: "mailto:hello@poesiolabs.com",
  tagline:
    "We design and build polished web products, internal systems, and launch-ready platforms for teams that need senior product thinking and careful engineering.",
};

export const navLinks = [
  { label: "Company", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Range", href: "#industries" },
  { label: "FAQs", href: "#faqs" },
];

export const services: { label: string; icon: IconName }[] = [
  { label: "Research-led product strategy", icon: "search" },
  { label: "High-conversion interfaces", icon: "cube" },
  { label: "Operational software systems", icon: "flow" },
  { label: "Web and mobile engineering", icon: "code" },
  { label: "Brand-to-product systems", icon: "network" },
];

export const techCards = [
  {
    title: "Frame the work before the build",
    description: "We map user needs, operational constraints, and the business outcome before a single interface decision is made.",
    image: "/images/tech-solve-v3.jpg",
    alt: "A dark product strategy workspace with research notes and interface diagrams",
  },
  {
    title: "Design the system, not only the screen",
    description: "Interfaces, flows, states, content, and technical foundations are shaped as one coherent product system.",
    image: "/images/tech-build-v3.jpg",
    alt: "A premium web application dashboard displayed on a laptop in a dark studio",
  },
  {
    title: "Ship software teams can trust",
    description: "We build reliable products with maintainable code, clear handoff, and enough polish to launch publicly.",
    image: "/images/tech-connect-v3.jpg",
    alt: "A precise engineering control room with connected product systems",
  },
];

export const about = {
  heading: ["A senior", "product team", "for hard builds"],
  paragraphs: [
    "partners with founders, operators, and growing companies to turn messy product ideas into clear, usable, and scalable software.",
    "We work across strategy, UX, interface design, full-stack engineering, and launch systems, so the product feels coherent from the first click to the backend workflow.",
    "Every engagement starts with clarity: what needs to change, who needs to use it, which constraints matter, and what a successful launch should prove.",
    "The result is software that feels considered, performs reliably, and gives teams a stronger foundation for the next phase of growth.",
  ],
};

export const approachSteps = [
  { number: "01", title: "Diagnose", description: "Clarify the user, business, workflow, and technical problem underneath the request." },
  { number: "02", title: "Shape", description: "Turn the diagnosis into flows, content hierarchy, system architecture, and a launch plan." },
  { number: "03", title: "Build", description: "Design and engineer the product with production states, responsive behavior, and clean handoff." },
  { number: "04", title: "Refine", description: "Test the experience, remove friction, tighten performance, and prepare the product for real users." },
];

export const industries = [
  {
    title: "Healthcare",
    description: "Patient portals, scheduling tools, intake systems, and operational dashboards that reduce friction for care teams.",
    image: "/images/industry-healthcare-v3.png",
  },
  {
    title: "Hospitality & Travel",
    description: "Booking flows, guest portals, itinerary systems, and operator tools that make service feel seamless.",
    image: "/images/industry-hospitality-v3.png",
  },
  {
    title: "Environment & Sustainability",
    description: "Reporting tools, monitoring dashboards, and data products that make impact work easier to measure and act on.",
    image: "/images/industry-environment-v3.png",
  },
  {
    title: "Logistics",
    description: "Route visibility, fleet coordination, delivery workflows, and internal tools for teams moving physical goods.",
    image: "/images/industry-logistics-v3.png",
  },
  {
    title: "Professional Services",
    description: "Client portals, workflow automation, proposal systems, and knowledge tools for high-trust service businesses.",
    image: "/images/industry-professional-v3.png",
  },
  {
    title: "Media",
    subtitle: "and lots more..",
    description: "Publishing systems, creator tools, content operations, and audience experiences built for speed and clarity.",
    image: "/images/industry-media-v3.png",
  },
];

export const faqs = [
  {
    question: "What does Poesio Labs do?",
    answer:
      "Poesio Labs is a software development company. We research, design, and engineer digital products, systems, and experiences that solve real problems for businesses.",
  },
  {
    question: "What kind of products does Poesio Labs build?",
    answer:
      "Web and mobile applications, internal tools, data platforms, and brand systems — anything where thoughtful technology can move a business forward.",
  },
  {
    question: "Can Poesio Labs help from idea to development?",
    answer:
      "Yes. We can start from a rough idea, validate it through research, define the product direction, and carry it all the way through design, development, and launch.",
  },
  {
    question: "Do you work on existing products?",
    answer:
      "Absolutely. We audit, extend, and modernise existing products — improving performance, user experience, and architecture without starting from scratch.",
  },
  {
    question: "How can I start a project with Poesio Labs?",
    answer:
      "Reach out through the “Talk to Poesio Labs” button. We'll set up a short discovery call to understand your goals and suggest the best way forward.",
  },
];

export const footer = {
  eyebrow: "Build with clarity",
  headingLead: "Launch a product",
  headingAccent: "worth",
  headingTail: "trusting.",
  pitch: "Bring us the problem, the messy workflow, or the product idea. We will help shape it into software that is clear, useful, and ready for real users.",
  links: [
    { label: "Home", href: "#top" },
    { label: "Company", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Range", href: "#industries" },
  ],
  socials: [
    { label: "Facebook", icon: "facebook" as IconName, href: "#" },
    { label: "X", icon: "x" as IconName, href: "#" },
    { label: "Instagram", icon: "instagram" as IconName, href: "#" },
    { label: "LinkedIn", icon: "linkedin" as IconName, href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
