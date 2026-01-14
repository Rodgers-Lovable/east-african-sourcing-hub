// Origin-specific data for Kenya, Ethiopia, and Uganda

export interface Origin {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  overview: string;
  regions: string[];
  processingMethods: string[];
  harvestPeriod: string;
  availabilityWindow: string;
  profileRange: string[];
  sourcingApproach: string;
  buyerNotes: string[];
  seo: {
    title: string;
    description: string;
  };
}

export const origins: Origin[] = [
  {
    id: "kenya",
    name: "Kenya",
    slug: "kenya",
    tagline: "Renowned for bright acidity and complex fruit notes",
    overview: "Kenyan coffee has long been regarded as one of the most distinctive and sought-after origins in specialty coffee. The country's unique terroir, including volcanic soils, high altitudes, and equatorial climate, combined with meticulous processing standards, produces coffees with remarkable clarity and complexity. The Kenyan auction system and direct sales channels offer multiple pathways to accessing these exceptional coffees.",
    regions: [
      "Nyeri — High-altitude production with intense acidity and berry notes",
      "Kirinyaga — Complex profiles with stone fruit and citrus characteristics",
      "Murang'a — Balanced cups with floral and fruit complexity",
      "Kiambu — Traditional production area with classic Kenyan profiles",
      "Embu — Emerging region with diverse flavor expressions",
      "Meru — High-quality production with distinctive local characteristics",
    ],
    processingMethods: [
      "Fully Washed (dominant) — The Kenyan double-wash process produces exceptional clarity",
      "Honey Process — Limited but growing, offering alternative flavor expressions",
      "Natural — Rare, typically experimental lots from progressive producers",
    ],
    harvestPeriod: "Main crop: October – December | Fly crop: April – June",
    availabilityWindow: "Main crop coffees typically available January through August. Fly crop lots available July through November. Fresh crop arrivals vary by processing timeline.",
    profileRange: [
      "Bright, wine-like acidity",
      "Blackcurrant, tomato, and berry notes (classic SL varieties)",
      "Citrus and stone fruit",
      "Complex, layered profiles",
      "Clean, crisp finish",
    ],
    sourcingApproach: "We source Kenyan coffees through established partner relationships with cooperatives, estates, and marketing agents. As Imwera Coffee is not currently a licensed Kenyan exporter, all export processes are facilitated through our licensed partner network. We maintain transparent communication about origin, lot traceability, and partner identity throughout the sourcing process.",
    buyerNotes: [
      "Lead times: 4-8 weeks from order to shipment, depending on logistics and documentation",
      "Sampling: Pre-shipment samples available; allow 2-3 weeks for international delivery",
      "Lot sizes: Range from single-lot micro offerings (5-20 bags) to larger cooperative blends",
      "Variability: Seasonal and lot-to-lot variation is normal; cupping verification recommended",
      "Documentation: Full traceability documentation provided through our partner network",
    ],
    seo: {
      title: "Kenya Coffee Sourcing | Imwera Coffee",
      description: "Source high-quality Kenyan specialty coffee through Imwera Coffee's partner network. Nyeri, Kirinyaga, Murang'a origins. Washed processing, complex profiles, reliable supply.",
    },
  },
  {
    id: "ethiopia",
    name: "Ethiopia",
    slug: "ethiopia",
    tagline: "The birthplace of coffee, unmatched in diversity",
    overview: "Ethiopia stands alone as the origin and genetic homeland of Arabica coffee. The country's extraordinary diversity—thousands of native varieties, distinct regional processing traditions, and varied terroirs—produces an unparalleled range of flavor profiles. From the floral elegance of Yirgacheffe to the fruity intensity of Guji naturals, Ethiopian coffees offer something for every palate and program.",
    regions: [
      "Yirgacheffe — Floral, tea-like, and citrus notes with elegant acidity",
      "Sidama — Balanced cups with berry, citrus, and complex sweetness",
      "Guji — Intense fruit notes, often tropical and berry-forward",
      "Limu — Balanced, wine-like acidity with stone fruit notes",
      "Harrar — Wild, fruity naturals with blueberry and wine characteristics",
      "Jimma — Commercial and specialty grades with diverse expressions",
    ],
    processingMethods: [
      "Washed — Produces clarity and highlights regional terroir characteristics",
      "Natural — Sun-dried whole cherry, intensely fruity profiles",
      "Honey — Growing in adoption, offering middle-ground complexity",
    ],
    harvestPeriod: "October – February (varies by region and altitude)",
    availabilityWindow: "Fresh crop typically available February through September. Natural processed lots may arrive later due to extended drying times. Year-round availability of select lots possible.",
    profileRange: [
      "Floral and jasmine notes (especially washed Yirgacheffe)",
      "Stone fruit and citrus (Sidama, Limu)",
      "Berry and tropical fruit (Guji naturals)",
      "Tea-like and delicate (washed lots)",
      "Wild and wine-like (Harrar naturals)",
    ],
    sourcingApproach: "We work with Ethiopian exporters, cooperative unions, and private washing station operators who share our commitment to quality and transparency. Our partner network includes established exporters with proven track records for reliability and quality consistency. We can source both auction and direct-trade lots depending on buyer requirements.",
    buyerNotes: [
      "Lead times: 6-12 weeks typical, depending on export logistics and documentation",
      "Sampling: Pre-shipment samples strongly recommended; plan for extended transit times",
      "Lot sizes: Micro-lots from single washing stations to larger regional blends available",
      "Variability: Significant lot-to-lot variation common; communication with partners is key",
      "Documentation: ECX certification where applicable; traceability to washing station level",
    ],
    seo: {
      title: "Ethiopia Coffee Sourcing | Imwera Coffee",
      description: "Source exceptional Ethiopian specialty coffee through Imwera Coffee. Yirgacheffe, Sidama, Guji origins. Washed and natural processing, floral to fruity profiles.",
    },
  },
  {
    id: "uganda",
    name: "Uganda",
    slug: "uganda",
    tagline: "Emerging specialty origin with exceptional value",
    overview: "Uganda represents one of East Africa's most compelling emerging specialty origins. While historically known for Robusta production, the country's Arabica offerings—particularly from Mount Elgon, Rwenzori, and the southwestern highlands—are gaining recognition for their quality and value proposition. Progressive producers and exporters are investing in quality infrastructure, creating opportunities for buyers seeking distinctive coffees with strong value-to-quality ratios.",
    regions: [
      "Mount Elgon (Bugisu) — The traditional Arabica heartland with bright, fruity profiles",
      "Rwenzori Mountains — High-altitude production with complex, wine-like acidity",
      "West Nile — Emerging area with distinctive local varieties",
      "Southwestern Uganda — Kigezi and surrounding areas with quality potential",
    ],
    processingMethods: [
      "Fully Washed — The standard for specialty Ugandan Arabica",
      "Natural — Growing in adoption, particularly in progressive operations",
      "Honey — Experimental lots from quality-focused partners",
    ],
    harvestPeriod: "Main crop: September – December | Fly crop: April – June",
    availabilityWindow: "Fresh crop typically available December through July. Availability depends on partner stock and processing capacity. Early engagement recommended for specific lots.",
    profileRange: [
      "Bright acidity with citrus notes",
      "Stone fruit and berry characteristics",
      "Chocolate and nutty undertones",
      "Clean, balanced cups",
      "Excellent value-to-quality ratio",
    ],
    sourcingApproach: "We partner with Ugandan exporters, cooperatives, and quality-focused processors who are actively investing in specialty coffee development. Our sourcing prioritizes partners with transparent practices, fair farmer payments, and consistent quality standards. We're particularly focused on relationships that support the continued growth of Uganda's specialty segment.",
    buyerNotes: [
      "Lead times: 4-8 weeks typical from confirmed order",
      "Sampling: Pre-shipment samples available through our partner network",
      "Lot sizes: From micro-lots to container quantities depending on partner",
      "Value proposition: Excellent quality-to-price ratio compared to other East African origins",
      "Development: Quality continues to improve as infrastructure and processing develops",
    ],
    seo: {
      title: "Uganda Coffee Sourcing | Imwera Coffee",
      description: "Source quality Ugandan specialty coffee through Imwera Coffee. Mount Elgon, Rwenzori origins. Washed processing, bright profiles, excellent value.",
    },
  },
];

export const getOriginBySlug = (slug: string): Origin | undefined => {
  return origins.find((o) => o.slug === slug);
};
