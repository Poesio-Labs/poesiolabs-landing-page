import type { IconName } from "@/components/ui/Icon";

const email = "info@poesiolabs.com";
const partnershipEmail = "partnership@poesiolabs.com";

export const brand = {
  name: "Poesio Labs",
  shortName: "Poesio",
  url: "https://poesiolabs.com",
  email,
  partnershipEmail,
  ctaLabel: "Talk to Poesio Labs",
  ctaHref: `mailto:${email}`,
  partnershipHref: `mailto:${partnershipEmail}?subject=${encodeURIComponent("Partnership inquiry")}`,
  tagline:
    "We combine research, design, engineering, and technology to turn complex problems into useful digital products and systems.",
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
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
    image: "/images/illustrations/solve-real-problem.png",
    alt: "Glass circuit board with glowing green components",
  },
  {
    title: "Build with purpose",
    description: "Every product we ship is shaped around a clear outcome for the people using it.",
    image: "/images/illustrations/buildwithpurpose.png",
    alt: "Layered white curved paper forms in soft light",
  },
  {
    title: "Connect ideas using Technology",
    description: "We bridge ideas, people, and systems with technology that fits how they work.",
    image: "/images/illustrations/connectideas.png",
    alt: "Glowing processor chip on a dark circuit board with gold traces",
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
    image: "/images/industries/healthcare.png",
    alt: "Medical tablet displaying scans, surrounded by capsules and a stethoscope",
  },
  {
    title: "Hospitality & Travel",
    description: "We build digital experiences that make booking, hosting, and travelling smoother for guests and operators.",
    image: "/images/industries/hospital-travels.png",
    alt: "Traveller relaxing on a leaning palm tree beside beach huts",
  },
  {
    title: "Environment & Sustainability",
    description: "We create technology that helps organizations track, manage, and improve their environmental impact.",
    image: "/images/industries/environment.png",
    alt: "Hands guiding recycling arrows around a small globe",
  },
  {
    title: "Logistics",
    description: "We build systems that give logistics teams real-time visibility over routes, fleets, and deliveries.",
    image: "/images/industries/logistics.png",
    alt: "Container ship docked beneath port cranes",
    position: "50% 62%",
  },
  {
    title: "Professional Services",
    description: "We connect people, processes, and movement through smarter digital infrastructure.",
    image: "/images/industries/professional-services.png",
    alt: "Professional signing a document at a desk",
  },
  {
    title: "Media",
    subtitle: "and lots more..",
    description: "We build digital products that help media businesses create, manage, distribute, and engage with content.",
    image: "/images/industries/media.png",
    alt: "Video editing timeline on an ultrawide monitor in a neon-lit studio",
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
  links: [{ label: "Home", href: "/" }, ...navLinks],
  socials: [
    { label: "LinkedIn", icon: "linkedin" as IconName, href: "https://www.linkedin.com/company/poesio-labs/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};
