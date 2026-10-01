import type { IconName } from "@/components/ui/Icon";

export const brand = {
  name: "Poesio Labs",
  shortName: "Poesio",
  ctaLabel: "Talk to Poesio Labs",
  ctaHref: "mailto:hello@poesiolabs.com",
  tagline:
    "We combine research, design, engineering, and technology to turn complex problems into useful digital products and systems.",
};

export const navLinks = [
  { label: "Company", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Range", href: "#industries" },
  { label: "FAQs", href: "#faqs" },
];

export const services: { label: string; icon: IconName }[] = [
  { label: "Product Research", icon: "search" },
  { label: "Tech Solutions", icon: "cube" },
  { label: "Digital Systems", icon: "flow" },
  { label: "Software Development", icon: "code" },
  { label: "Brand Systems", icon: "network" },
];

export const techCards = [
  {
    title: "Solve real problems",
    description: "We start with the problem, not the technology.",
    image: "/images/tech-solve.jpg",
    alt: "A glowing key unlocking a purple puzzle piece",
  },
  {
    title: "Build with purpose",
    description: "Every product we ship is shaped around a clear outcome for the people using it.",
    image: "/images/tech-build.jpg",
    alt: "An open laptop glowing in a dark room",
  },
  {
    title: "Connect ideas using Technology",
    description: "We bridge ideas, people, and systems with technology that fits how they work.",
    image: "/images/tech-connect.jpg",
    alt: "A white robotic hand",
  },
];

export const about = {
  heading: ["We are", "building what", "comes next"],
  paragraphs: [
    "is a software development company creating digital products, systems, and experiences that solve real problems for businesses across industries.",
    "We work at the intersection of research, design, and engineering to build solutions that are useful, thoughtful, and built to last.",
    "Our approach combines strategic thinking with technical execution, ensuring every project has a clear purpose and delivers meaningful results.",
    "We believe technology should serve people, not the other way around. That's why we start with understanding, move through careful planning, and build with intention.",
  ],
};

export const approachSteps = [
  { number: "01", title: "Discover", description: "Understand the problem, users, market, and opportunity." },
  { number: "02", title: "Define", description: "Turn insights into a clear product or system direction." },
  { number: "03", title: "Build", description: "Design and develop the solution with purpose." },
  { number: "04", title: "Evolve", description: "Learn, improve, and continue moving forward." },
];

export const industries = [
  {
    title: "Healthcare",
    description: "We build digital tools that improve healthcare access, operations, and patient experiences.",
    image: "/images/industry-healthcare.png",
  },
  {
    title: "Hospitality & Travel",
    description: "We build digital experiences that make booking, hosting, and travelling smoother for guests and operators.",
    image: "/images/industry-hospitality.png",
  },
  {
    title: "Environment & Sustainability",
    description: "We create technology that helps organizations track, manage, and improve their environmental impact.",
    image: "/images/industry-environment.png",
  },
  {
    title: "Logistics",
    description: "We build systems that give logistics teams real-time visibility over routes, fleets, and deliveries.",
    image: "/images/industry-logistics.png",
  },
  {
    title: "Professional Services",
    description: "We connect people, processes, and movement through smarter digital infrastructure.",
    image: "/images/industry-professional.png",
  },
  {
    title: "Media",
    subtitle: "and lots more..",
    description: "We build digital products that help media businesses create, manage, distribute, and engage with content.",
    image: "/images/industry-media.png",
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
  eyebrow: "Let’s build together",
  headingLead: "Ready to",
  headingAccent: "build",
  headingTail: "what’s next?",
  pitch: "Partner with Poesio Labs to turn your ideas into impactful digital products and systems",
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
