// FAQ data for Brokerage & Sourcing page

export interface FAQ {
  question: string;
  answer: string;
}

export const brokerageFaqs: FAQ[] = [
  {
    question: "What is the difference between a coffee broker and an exporter?",
    answer: "A broker facilitates connections between buyers and sellers without necessarily owning or physically handling the coffee. An exporter holds the license to export coffee from an origin country and manages the logistics of shipment. Imwera Coffee operates as a broker, connecting international buyers with quality coffees through our partner network, which includes licensed exporters.",
  },
  {
    question: "Does Imwera Coffee export Kenyan coffee directly?",
    answer: "Not currently. Imwera Coffee is not yet a licensed Kenyan coffee exporter. All Kenyan coffee exports are facilitated through our licensed partner network. We manage the sourcing, relationship, and transaction coordination while our export partners handle the regulatory and logistics requirements. We intend to expand our export capabilities in the future.",
  },
  {
    question: "What are your minimum order quantities?",
    answer: "This varies by partner and origin. Some partners can accommodate sample-size orders (1-5 bags) for evaluation, while others require minimum quantities of 10+ bags or container-level volumes. We'll discuss your volume requirements early in the sourcing conversation to ensure we match you with appropriate partners.",
  },
  {
    question: "How does sampling work?",
    answer: "We coordinate sample requests between buyers and partners. Typical process: submit your interest with specifications → we identify suitable lots → partner prepares and ships samples → you evaluate and provide feedback → proceed to purchase discussion if quality meets expectations. Allow 2-4 weeks for sample delivery to most international destinations.",
  },
  {
    question: "What payment terms do you offer?",
    answer: "Payment terms are negotiated on a case-by-case basis and depend on relationship history, volume, and partner requirements. Typical arrangements range from payment against documents to net terms for established buyers. We'll discuss options during the contracting phase.",
  },
  {
    question: "Can I visit your partner farms or washing stations?",
    answer: "Yes, we can facilitate origin visits for serious buyers. Origin trips require advance planning and coordination with partners. These visits are valuable for building long-term relationships and understanding the coffees you're purchasing. Contact us to discuss possibilities.",
  },
  {
    question: "How do you ensure quality consistency?",
    answer: "Quality consistency comes from partner selection, ongoing communication, and clear feedback loops. We work with partners who have demonstrated track records for quality. We maintain regular communication about cupping results, buyer expectations, and market trends. Pre-shipment samples are always available for final verification before shipment.",
  },
  {
    question: "What documentation do you provide?",
    answer: "Full documentation includes: lot information and traceability details, cupping scores and tasting notes where available, phytosanitary certificates, weight certificates, and shipping documentation. Specific documentation varies by origin and partner but we ensure transparency throughout.",
  },
  {
    question: "How far in advance should I plan my purchases?",
    answer: "We recommend engaging 3-6 months before your desired delivery window, especially for specific lots or limited-availability coffees. Fresh crop booking typically happens 2-4 months before harvest. The earlier you engage, the better your access to preferred lots and the smoother the logistics.",
  },
  {
    question: "Do you work with small roasters or only large buyers?",
    answer: "We work with buyers across the volume spectrum, from small specialty roasters seeking micro-lots to larger importers sourcing container quantities. Our partner network includes options for various volume levels. Quality expectations and trade professionalism matter more than volume.",
  },
];
