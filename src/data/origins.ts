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
  /**
   * Optional structured portfolio/spec data for origins that have multiple
   * product families (e.g. Uganda Arabica + Fine Robusta).
   *
   * Kept optional to preserve existing site structure and allow incremental UI reuse.
   */
  portfolio?: {
    arabica?: {
      generalProfile: {
        coffeeType: string;
        altitude: string;
        varieties: string[];
        style: string;
        scoringRange: string;
      };
      products: OriginProduct[];
    };
    robusta?: {
      originContext: {
        origin: string;
        regions: string[];
        altitudeRange: string;
        farmingSystem: string;
        intercropping: string[];
        shadeSpecies: string[];
        positioning: string;
      };
      processingProfiles: OriginProduct[];
      supplyChainSteps?: string[];
      sustainabilityHighlights?: string[];
    };
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface OriginProduct {
  name: string;
  /** A short label for listings/cards (e.g. “Natural Arabica”) */
  type?: string;
  /** Optional sub-origin/locality (e.g. “Bulambuli”, “Masaka & Kalungu”) */
  location?: string;
  process: string;
  altitude: string;
  varieties: string[];
  flavorNotes: string[];
  score: string;
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
    overview:
      "Uganda is a compelling specialty origin with two distinct value propositions: high-altitude specialty Arabica from Mount Elgon (1900+ masl) and micro-lot Fine Robustas from Central Uganda. Buyers can access expressive, fermentation-driven Arabica profiles (82+–86+) alongside rare-cup Robusta lots (83+–85+) built for modern espresso and blend programs.",
    regions: [
      "Mount Elgon (Bulambuli, Namisindwa, Manafwa) — High-altitude Arabica (1900+ masl) with expressive profiles",
      "Central Uganda (Masaka & Kalungu) — Fine Robusta micro-lots (1100–1300 masl) with rare cup potential",
      "Rwenzori Mountains — High-altitude Arabica with complex acidity and structure",
      "Southwestern Uganda — Quality-driven Arabica potential from cooler highland zones",
    ],
    processingMethods: [
      "Specialty Arabica (Mount Elgon) — Natural, natural anaerobic, and controlled anaerobic fermentations (drums/sacs), plus select co-fermentations",
      "Fine Robusta (Central Uganda) — Sun-dried lots with targeted fermentations including anaerobic yeast and anaerobic natural, plus pineapple co-fermentation",
    ],
    harvestPeriod: "Main crop: September – December | Fly crop: April – June",
    availabilityWindow:
      "Fresh crop typically available December through July (timing varies by process and partner prep). Early engagement is recommended for specific micro-lots and fermentation styles.",
    profileRange: [
      "Specialty Arabica (82+–86+): strawberry, ripe plum, brown sugar, chocolate, tropical fruit",
      "Fine Robusta (83+–85+): cocoa, molasses, caramel, vanilla, citrus, nutty cream",
      "Fermentation-driven lots with clean structure and defined sweetness",
      "Commercially strong value-to-quality across both Arabica and Fine Robusta programs",
    ],
    sourcingApproach:
      "We source Uganda coffees through partners operating two complementary supply chains: (1) high-altitude Arabica from Mount Elgon with both traditional and experimental fermentation options, and (2) Fine Robusta micro-lots from Central Uganda designed for differentiated cup profiles. For Robusta, coffee is collected from surrounding villages, primary processing takes place in Kalungu, and lots are managed through meticulous sorting, pulping, controlled fermentation, and sun-drying. Final hulling, grading, and export preparation are completed under strict supervision.",
    buyerNotes: [
      "Lead times: 4-8 weeks typical from confirmed order",
      "Sampling: Pre-shipment samples available through our partner network",
      "Lot sizes: From micro-lots to container quantities depending on partner",
      "Value proposition: Excellent quality-to-price ratio compared to other East African origins",
      "Portfolio: Specialty Arabica (1900+ masl, SL14/SL28/Bugisu Local) and Fine Robusta (1100–1300 masl, Nganda/Elite/KR selections)",
    ],
    portfolio: {
      arabica: {
        generalProfile: {
          coffeeType: "Specialty Arabica",
          altitude: "1900+ masl",
          varieties: ["SL14", "SL28", "Bugisu Local"],
          style:
            "High-altitude, expressive profiles with experimental and traditional fermentations",
          scoringRange: "82+ to 86+",
        },
        products: [
          {
            name: "Moonrise",
            type: "Natural Arabica",
            location: "Bulambuli",
            process: "Natural",
            altitude: "1900+ masl",
            varieties: ["SL14", "SL28", "Bugisu Local"],
            flavorNotes: [
              "Strawberry",
              "Chocolate",
              "Ripe Plum",
              "Brown Sugar",
            ],
            score: "85+",
          },
          {
            name: "Sunshine",
            type: "Natural Anaerobic",
            location: "Namisindwa & Manafwa",
            process: "Between Natural & Anaerobic",
            altitude: "1900+ masl",
            varieties: ["SL14", "SL28", "Bugisu Local"],
            flavorNotes: ["Pineapple", "Lemon", "Fresh Almond", "Cocoa"],
            score: "85+",
          },
          {
            name: "Elgon Boozy",
            type: "Anaerobic Natural Fermentation",
            process: "5-day anaerobic fermentation in drums",
            altitude: "1900+ masl",
            varieties: ["SL14", "SL28", "Bugisu Local"],
            flavorNotes: [
              "Marmalade",
              "Exotic Fruit",
              "Mango",
              "Pineapple",
              "Tamarind",
            ],
            score: "86+",
          },
          {
            name: "Bloom",
            type: "Anaerobic Natural Fermentation",
            process: "5-day anaerobic fermentation in sacs",
            altitude: "1900+ masl",
            varieties: ["SL14", "SL28", "Bugisu Local"],
            flavorNotes: [
              "Chocolate",
              "Woody Notes",
              "Dried Fruit",
              "Spice",
            ],
            score: "82+",
          },
          {
            name: "Ananas",
            type: "Pineapple Co-Fermentation",
            process: "Pineapple Co-Fermentation",
            altitude: "1900+ masl",
            varieties: ["SL14", "SL28", "Bugisu Local"],
            flavorNotes: ["Pomegranate", "Banana", "Jackfruit", "Apricot"],
            score: "86+",
          },
        ],
      },
      robusta: {
        originContext: {
          origin: "Central Uganda",
          regions: ["Masaka", "Kalungu"],
          altitudeRange: "1100–1300 masl",
          farmingSystem: "Smallholder farms (1–3 acres) + select larger estates",
          intercropping: ["Bananas", "cassava", "beans"],
          shadeSpecies: ["Albizia", "Ficus"],
          positioning: "Micro-lot Fine Robustas with rare cup profiles",
        },
        processingProfiles: [
          {
            name: "Yeast Fermentation Robusta",
            altitude: "1100–1300 masl",
            varieties: ["Nganda", "Elite", "KR1", "KR2", "KR3", "KR4", "KR5", "KR6", "KR7", "KR8", "KR9", "KR10"],
            process: "4-day anaerobic yeast fermentation; sun-dried",
            flavorNotes: [
              "Cocoa",
              "Molasses",
              "Caramel",
              "Tropical Fruit",
              "Nutty Cream",
            ],
            score: "85+",
          },
          {
            name: "Anaerobic Fermentation Robusta",
            altitude: "1100–1300 masl",
            varieties: ["Nganda", "Elite", "KR1", "KR2", "KR3", "KR4", "KR5", "KR6", "KR7", "KR8", "KR9", "KR10"],
            process: "6-day anaerobic natural fermentation; sun-dried",
            flavorNotes: ["Molasses", "Vanilla", "Citrus", "Tropical Fruit", "Nutty"],
            score: "84+",
          },
          {
            name: "Pineapple Co-Fermentation Robusta",
            altitude: "1100–1300 masl",
            varieties: ["Nganda", "Elite", "KR1", "KR2", "KR3", "KR4", "KR5", "KR6", "KR7", "KR8", "KR9", "KR10"],
            process: "6-day anaerobic natural fermentation; pineapple co-fermentation; sun-dried",
            flavorNotes: ["Ripe Banana", "Orange Juice", "Nutty"],
            score: "84+",
          },
          {
            name: "Natural Robusta",
            altitude: "1100–1300 masl",
            varieties: ["Nganda", "Elite", "KR1", "KR2", "KR3", "KR4", "KR5", "KR6", "KR7", "KR8", "KR9", "KR10"],
            process: "Sun-dried",
            flavorNotes: ["Roasted Cereal", "Nuts", "Spicy", "Chocolate", "Orange"],
            score: "83+",
          },
        ],
        supplyChainSteps: [
          "Coffee collected from surrounding villages",
          "Primary processing in Kalungu",
          "Meticulous sorting → pulping → controlled fermentation → sun-drying",
          "Final hulling, grading, and export preparation under strict supervision",
        ],
        sustainabilityHighlights: [
          "Good Agricultural Practices (GAPs): mulching, pruning, pest control, soil conservation",
          "Organic compost use to reduce chemical dependency",
          "Contour planting and mulching to prevent erosion",
          "Water filtered through lime and stone soak pits",
          "Sun drying to reduce energy use",
        ],
      },
    },
    seo: {
      title: "Uganda Coffee Sourcing | Imwera Coffee",
      description: "Source quality Ugandan specialty coffee through Imwera Coffee. Mount Elgon, Rwenzori origins. Washed processing, bright profiles, excellent value.",
    },
  },
];

export const getOriginBySlug = (slug: string): Origin | undefined => {
  return origins.find((o) => o.slug === slug);
};
