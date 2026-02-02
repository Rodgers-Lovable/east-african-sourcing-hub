// Centralized company information and content
// All pages import from this single source

export const company = {
  name: "Imwera Coffee",
  tagline: "Every sip is a journey to East Africa",
  description:
    "An independent green coffee brokerage and sourcing company connecting international buyers with high-quality coffees from trusted partners across Kenya, Ethiopia, and Uganda.",

  // Core positioning
  role: "brokerage",
  notProducer: true,
  notExporter: true, // Kenya specifically, until licensed

  // Forward-looking statement
  forwardStatement:
    "Imwera Coffee is in the process of expanding its operations and, in time, intends to export Kenyan coffee directly while continuing to represent trusted partners across the region.",

  // Origins served
  origins: ["Kenya", "Ethiopia", "Uganda"],

  // Contact information
  contact: {
    email: "trade@imweracoffee.com",
    tel: "+254119858100",
    location: "Nairobi, Kenya",
  },

  // Social links
  social: {
    linkedin: "https://www.linkedin.com/company/111128533",
    facebook: "https://facebook.com//people/Imwera-Coffee",
    whatsapp: "+25776229000",
  },
  dev: {
    fname: "Brian",
    lname: "Mawira",
    email: "brianmawira2@gmail.com",
    website: "https://mawirab.com",
  },
};

export const positioning = {
  // Approved language
  approved: [
    "Available coffees",
    "Coffees we source",
    "Partner coffees",
    "Sourced through trusted partners",
    "Curated selection",
    "Partner-based sourcing",
  ],

  // Language to avoid
  avoid: [
    "Our farm",
    "We produce",
    "We export", // Until licensed for Kenya
    "Our coffee",
    "Grown by us",
  ],

  // Key differentiators
  differentiators: [
    "Independent brokerage focused on quality",
    "Deep relationships with trusted partners",
    "Transparent sourcing communication",
    "Trade-focused, not retail",
    "Regional expertise across East Africa",
  ],
};

export const principles = [
  {
    title: "Transparency First",
    description:
      "We're clear about our role. We don't claim to produce or own the coffees we represent. Every relationship is documented honestly.",
  },
  {
    title: "Partner-Based Sourcing",
    description:
      "Our quality comes from the partners we work with. We carefully select and maintain relationships with reliable producers and exporters.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We prioritize sustainable partnerships over one-time transactions. Repeat business benefits everyone in the chain.",
  },
  {
    title: "Trade-Focused Communication",
    description:
      "We speak the language of trade. Profiles, logistics, timelines, and contracts—communicated clearly and professionally.",
  },
];

export const seo = {
  siteName: "Imwera Coffee",
  defaultTitle:
    "Imwera Coffee | Green Coffee Brokerage & Sourcing in East Africa",
  defaultDescription:
    "Independent green coffee brokerage connecting international buyers with quality coffees from Kenya, Ethiopia, and Uganda. Partner-based sourcing, sampling coordination, and trade support.",
  keywords: [
    "green coffee brokerage",
    "coffee sourcing East Africa",
    "coffee broker Kenya",
    "Kenyan specialty coffee",
    "Ethiopian green coffee",
    "Uganda coffee sourcing",
    "coffee trading",
    "specialty coffee wholesale",
  ],
  ogImage: "/og-image.jpg",
  twitterHandle: "@imweracoffee",
};
