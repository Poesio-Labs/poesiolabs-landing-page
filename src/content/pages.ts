import type { IconName } from "@/components/ui/Icon";

export const homePage = {
  title: "Poesio Labs — Engineering the digital future",
  description:
    "Poesio Labs is a software development company that combines research, design, engineering, and technology to turn complex problems into useful digital products and systems.",
};

export const aboutPage = {
  title: "About",
  description:
    "Poesio Labs is a software development company creating digital products, systems, and experiences that solve real problems for businesses across industries.",
  eyebrow: "About Poesio Labs",
  heading: "Technology should serve people",
  lead: "We work at the intersection of research, design, and engineering to build solutions that are useful, thoughtful, and built to last.",
  principlesLabel: "What guides us",
  principlesHeading: "Three principles behind every build",
};

export const servicesPage = {
  title: "Services",
  description:
    "Product research, tech solutions, digital systems, software development, and brand systems — Poesio Labs carries products from idea to launch and improves the ones already in use.",
  eyebrow: "Services",
  heading: "From the first question to a product in use",
  lead: "We research, design, and engineer digital products, systems, and experiences — starting from the problem, not the technology.",
  listLabel: "What we do",
  services: [
    {
      title: "Product Research",
      icon: "search" as IconName,
      description:
        "We start by understanding the problem, users, market, and opportunity, so every decision that follows has a clear reason behind it.",
    },
    {
      title: "Tech Solutions",
      icon: "cube" as IconName,
      description:
        "We turn insights into a clear product or system direction and choose technology that fits how your people and processes already work.",
    },
    {
      title: "Digital Systems",
      icon: "flow" as IconName,
      description:
        "Internal tools and data platforms that connect people, processes, and information, giving teams better visibility and control over their operations.",
    },
    {
      title: "Software Development",
      icon: "code" as IconName,
      description:
        "Web and mobile applications designed and engineered with purpose — from a rough idea through design, development, and launch.",
    },
    {
      title: "Brand Systems",
      icon: "network" as IconName,
      description:
        "Brand systems that carry a consistent identity across your digital products, so the experience feels coherent wherever people meet it.",
    },
  ],
  existing: {
    heading: "Already have a product?",
    body: "We audit, extend, and modernise existing products — improving performance, user experience, and architecture without starting from scratch.",
  },
};

export const industriesPage = {
  title: "Industries",
  description:
    "Poesio Labs builds digital products and systems for healthcare, hospitality and travel, environment and sustainability, logistics, professional services, and media.",
  eyebrow: "Industries We Serve",
  heading: "One Company, Multiple Industries",
  lead: "The same research, design, and engineering discipline, applied to the problems each industry actually faces.",
};

export const partnershipsPage = {
  title: "Partnerships",
  description:
    "Partner with Poesio Labs on delivery, technology, and industry initiatives. Contact partnership@poesiolabs.com to start a conversation.",
  eyebrow: "Partnerships",
  heading: "Let’s build what’s next, together",
  lead: "We work with organizations that share our belief that technology should serve people. If you see a way to combine strengths, we want to hear about it.",
  whyLabel: "Why partner with us",
  whyHeading: "Research, design, and engineering under one roof",
  whyBody:
    "Poesio Labs carries work from understanding the problem through design, development, and launch. Partners get a team that can take ownership of the full product journey — or plug into the part where they need it most.",
  opportunities: [
    {
      title: "Delivery partnerships",
      description:
        "Agencies, studios, and consultancies that need dependable research, design, or engineering capacity to deliver digital products for their clients.",
    },
    {
      title: "Technology partnerships",
      description:
        "Platform and tooling providers whose products we can build with, integrate, and bring to businesses that need them.",
    },
    {
      title: "Industry partnerships",
      description:
        "Organizations in the industries we serve that want to explore how better software can improve operations, access, and experiences.",
    },
  ],
  nextHeading: "Start a partnership conversation",
  nextBody: "Tell us who you are, what you have in mind, and how you see us working together. We’ll reply to arrange a conversation.",
};

export const contactPage = {
  title: "Contact",
  description:
    "Contact Poesio Labs. Email info@poesiolabs.com for projects and general inquiries, or partnership@poesiolabs.com for partnerships.",
  eyebrow: "Contact",
  heading: "Talk to Poesio Labs",
  lead: "Whether you have a rough idea, an existing product, or a partnership in mind, the fastest way to reach us is by email.",
  channels: [
    {
      title: "Projects & general inquiries",
      body: "Start a project, ask a question, or tell us about a problem you want solved.",
      key: "email" as const,
    },
    {
      title: "Partnerships",
      body: "Explore delivery, technology, or industry partnerships with Poesio Labs.",
      key: "partnershipEmail" as const,
    },
  ],
  nextHeading: "What happens next",
  nextBody: "We’ll set up a short discovery call to understand your goals and suggest the best way forward.",
};

export const legalNotice = "Draft — pending legal review. This page will be finalised before launch.";

export const legalPages = {
  privacy: {
    title: "Privacy Policy",
    description: "How Poesio Labs handles personal information on poesiolabs.com.",
    sections: [
      {
        heading: "What we collect",
        body: "This website does not use forms, accounts, or analytics. We do not collect personal information through the site itself. If you email us, we receive the information you choose to include in your message.",
      },
      {
        heading: "How we use it",
        body: "We use the information in your email only to reply to you and to discuss the work or partnership you have contacted us about.",
      },
      {
        heading: "Your choices",
        body: "You can ask us to delete our correspondence with you at any time by emailing info@poesiolabs.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that apply when you use poesiolabs.com.",
    sections: [
      {
        heading: "Use of this website",
        body: "This website provides information about Poesio Labs and its services. You may browse and share it for personal and business purposes.",
      },
      {
        heading: "Content",
        body: "The text, branding, and design of this website belong to Poesio Labs unless stated otherwise. Information on the site is provided for general purposes and does not form a contract.",
      },
      {
        heading: "Projects",
        body: "Any project or partnership with Poesio Labs is governed by a separate written agreement.",
      },
      {
        heading: "Questions",
        body: "Questions about these terms can be sent to info@poesiolabs.com.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "How poesiolabs.com uses cookies.",
    sections: [
      {
        heading: "Cookies on this website",
        body: "This website does not set tracking or advertising cookies and does not use analytics tools.",
      },
      {
        heading: "Changes",
        body: "If we introduce cookies in the future, we will update this page and ask for consent where required.",
      },
    ],
  },
};
