// Market Insights posts data

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Harvest" | "Market" | "Logistics" | "Origin Notes";
  date: string;
  readTime: string;
  content: string;
  seo: {
    title: string;
    description: string;
  };
}

export const insightCategories = ["Harvest", "Market", "Logistics", "Origin Notes"] as const;

export const insights: InsightPost[] = [
  {
    id: "1",
    slug: "understanding-harvest-windows-east-africa",
    title: "Understanding Harvest Windows Across East Africa",
    excerpt: "A practical guide to harvest timing in Kenya, Ethiopia, and Uganda—what buyers need to know for planning purchases and managing inventory.",
    category: "Harvest",
    date: "2026-01-10",
    readTime: "6 min read",
    content: `
## Timing Your Purchases Right

Understanding harvest windows is fundamental to effective green coffee sourcing. Each origin has distinct patterns influenced by altitude, rainfall, and local climate variations. Planning purchases around these windows helps ensure access to fresh crop coffee and better price positioning.

### Kenya: The Dual Harvest Pattern

Kenya operates with two distinct harvest periods:

**Main Crop (October – December)**
The main harvest accounts for approximately 60-70% of annual production. These coffees typically reach export readiness between January and March, with peak availability from February through June.

**Fly Crop (April – June)**
The secondary harvest contributes the remaining production. Fly crop coffees are generally available from July through November, though volumes are smaller and specific lots may sell out quickly.

### Ethiopia: A More Complex Picture

Ethiopian harvests occur primarily between October and February, but regional and altitude variations create significant complexity:

- **Yirgacheffe and Sidama:** Typically harvest November through January
- **Guji:** Similar timing with some variation by micro-region  
- **Harrar:** Earlier harvest, often starting in October
- **Processing time:** Natural coffees require extended drying, delaying availability by 4-8 weeks compared to washed lots

Fresh Ethiopian coffees typically become available from February onwards, with peak selection through the summer months.

### Uganda: Following the Bimodal Pattern

Like Kenya, Uganda experiences two harvest seasons:

- **Main season:** September through December
- **Secondary season:** April through June

Mount Elgon and Rwenzori regions may show slight timing variations based on altitude and local weather patterns.

## Planning Implications

For buyers, these patterns suggest several strategic considerations:

1. **Book early for specific lots** — Distinctive micro-lots often sell during or shortly after processing
2. **Build relationships for allocation** — Partners prioritize established buyers for limited availability coffees
3. **Consider arrival timing** — Factor in processing, export, and shipping when planning roast schedules
4. **Maintain buffer inventory** — Seasonal gaps require inventory management across origins

Understanding these windows is the first step toward building a reliable, quality-focused sourcing program across East Africa.
    `,
    seo: {
      title: "Harvest Windows in East Africa | Imwera Coffee",
      description: "Practical guide to coffee harvest timing in Kenya, Ethiopia, and Uganda. Plan purchases, manage inventory, and source fresh crop East African coffee.",
    },
  },
  {
    id: "2",
    slug: "sampling-timelines-what-buyers-should-know",
    title: "What Buyers Should Know About Sampling Timelines",
    excerpt: "From sample request to cupping evaluation—realistic timelines and tips for efficient sampling across East African origins.",
    category: "Logistics",
    date: "2026-01-05",
    readTime: "5 min read",
    content: `
## The Reality of Sample Logistics

Sample evaluation is essential to informed purchasing, but the timeline from request to cupping can surprise buyers unfamiliar with East African logistics. Understanding realistic expectations helps avoid frustration and supports better planning.

### Typical Timeline Breakdown

**Request to Dispatch: 3-7 days**
Partners need time to pull samples from stock, prepare packaging, and arrange courier pickup. During peak season or with remote partners, this may extend further.

**Transit Time: 7-14 days**
International courier services (DHL, FedEx) typically deliver within 5-7 business days, but customs clearance can add significant delays depending on destination country requirements.

**Total Timeline: 2-4 weeks**
Plan for a minimum of two weeks from request to samples in hand, with three to four weeks being more realistic for East African origins.

### Factors Affecting Timeline

- **Seasonal demand:** Peak sampling periods (fresh crop arrival) create bottlenecks
- **Partner location:** Urban exporters dispatch faster than remote washing stations
- **Customs requirements:** Phytosanitary certificates and import documentation vary by country
- **Sample size:** Larger sample quantities may require additional preparation time

### Tips for Efficient Sampling

1. **Batch requests** — Submit multiple sample requests together when possible
2. **Communicate clearly** — Specify exactly what you need and your shipping details
3. **Build lead time** — Request samples well ahead of purchase decisions
4. **Confirm receipt** — Track shipments and acknowledge arrival promptly
5. **Provide feedback** — Cupping notes help partners and strengthen relationships

### Pre-Shipment Samples

For confirmed purchases, always request pre-shipment samples (PSS) before final approval. This verification step protects both buyer and seller and should be built into your purchase timeline—typically adding 2-3 weeks before shipment authorization.

Realistic expectations around sampling timelines support better sourcing decisions and stronger partner relationships.
    `,
    seo: {
      title: "Coffee Sampling Timelines | Imwera Coffee",
      description: "Realistic sampling timelines for East African coffee sourcing. Request to cupping expectations, logistics tips, and pre-shipment sample protocols.",
    },
  },
  {
    id: "3",
    slug: "processing-methods-trade-implications",
    title: "Processing Methods and Their Trade Implications",
    excerpt: "How washed, natural, and honey processing affect not just flavor but also pricing, availability, and logistics.",
    category: "Origin Notes",
    date: "2025-12-28",
    readTime: "7 min read",
    content: `
## Beyond Flavor: The Trade Perspective

Processing method significantly influences green coffee characteristics—but for buyers, the implications extend beyond the cup. Understanding how processing affects availability, pricing, and logistics supports more informed sourcing decisions.

### Washed (Fully Washed)

**Process:** Cherry pulped, mucilage removed through fermentation, beans washed clean, then dried.

**Trade Implications:**
- **Dominant in East Africa:** Washed processing is the standard, particularly in Kenya and for most Ethiopian export grades
- **Consistency:** Generally more predictable cup profiles lot-to-lot
- **Availability:** Larger volumes, more partner options
- **Pricing:** Often the baseline against which other processes are compared
- **Quality indicators:** Defect counts, screen size, and moisture readings are well-established

### Natural (Dry Process)

**Process:** Whole cherries dried intact, then hulled after drying.

**Trade Implications:**
- **Growing popularity:** Demand for naturals has increased significantly
- **Higher risk:** Extended drying increases defect risk; quality variation is greater
- **Pricing premium:** Quality naturals often command higher prices
- **Limited availability:** Smaller volumes compared to washed
- **Timing:** Longer processing time delays availability by 4-8 weeks
- **Storage considerations:** Naturals may require more careful storage management

### Honey (Pulped Natural)

**Process:** Cherry pulped but some mucilage retained during drying.

**Trade Implications:**
- **Rare in East Africa:** Less common than in Central America; experimental in most East African origins
- **Niche positioning:** Appeals to buyers seeking unique offerings
- **Variable definitions:** "Honey" means different things in different contexts; clarity is important
- **Pricing:** Typically between washed and naturals when available

### Practical Sourcing Considerations

1. **Match process to program needs** — Espresso blends may favor washed consistency; filter highlights may reward natural complexity
2. **Plan for variation** — Natural and honey lots require more careful evaluation
3. **Communicate clearly** — Specify processing preferences early in sourcing discussions
4. **Consider timing** — Natural availability lags washed; plan accordingly
5. **Evaluate storage capacity** — Higher-moisture naturals need appropriate conditions

Processing method is one of many factors in sourcing decisions—but understanding its trade implications helps buyers make choices that align with their quality expectations and operational needs.
    `,
    seo: {
      title: "Coffee Processing & Trade Implications | Imwera Coffee",
      description: "How washed, natural, and honey processing affect coffee pricing, availability, and logistics. Trade-focused processing guide for green coffee buyers.",
    },
  },
  {
    id: "4",
    slug: "navigating-partner-based-sourcing",
    title: "Navigating Partner-Based Sourcing With Transparency",
    excerpt: "Why we work through partners and what that means for buyers—clear communication about our role in the supply chain.",
    category: "Market",
    date: "2025-12-20",
    readTime: "5 min read",
    content: `
## Our Role in the Chain

Transparency about sourcing structure is fundamental to building trust. At Imwera Coffee, we're clear about what we are and what we aren't—and why that distinction matters for buyers.

### What We Are

**We are an independent green coffee brokerage.** This means:

- We connect buyers with coffees from our network of trusted partners
- We facilitate introductions, sampling, and transaction coordination
- We communicate quality requirements and feedback between parties
- We support the contracting and logistics process
- We maintain ongoing relationships with both buyers and partners

### What We Are Not

**We are not producers.** We don't own farms, operate washing stations, or process coffee ourselves.

**We are not (yet) a licensed Kenyan exporter.** All Kenyan coffee exports are facilitated through our licensed partner network. This is a regulatory reality, not a limitation on quality or service.

**We don't claim ownership of partner coffees.** The coffees we source remain partner coffees until purchased. We represent them honestly.

### Why Partner-Based Works

Working through trusted partners offers several advantages:

- **Access:** We can source from multiple origins, regions, and producers
- **Verification:** Partners we work with have proven quality track records
- **Flexibility:** We scale with buyer needs without production constraints
- **Focus:** We concentrate on relationship management and trade facilitation

### What This Means for Buyers

1. **Traceability:** We provide full documentation of partner identity and coffee origin
2. **Honest communication:** We'll tell you exactly where a coffee comes from and through whom
3. **Relationship continuity:** We facilitate direct partner relationships for long-term buyers
4. **No surprises:** Our role is clear from the first conversation

Our commitment to transparency isn't just principle—it's practical. Clear expectations create better partnerships and more successful transactions.
    `,
    seo: {
      title: "Partner-Based Coffee Sourcing | Imwera Coffee",
      description: "Understanding Imwera Coffee's partner-based sourcing model. Transparent brokerage practices, supply chain clarity, and honest communication.",
    },
  },
  {
    id: "5",
    slug: "regional-overview-kenya-ethiopia-uganda",
    title: "Regional Overview: Kenya, Ethiopia, Uganda",
    excerpt: "A comparative look at East Africa's three major specialty origins—what makes each unique and how they complement a sourcing program.",
    category: "Origin Notes",
    date: "2025-12-15",
    readTime: "8 min read",
    content: `
## Three Origins, Distinct Opportunities

East Africa offers exceptional diversity for specialty coffee sourcing. Understanding the distinct characteristics and trade dynamics of each origin helps buyers build balanced, reliable programs.

### Kenya: The Precision Origin

**Character:** Kenyan coffees are renowned for their precision—bright acidity, complex fruit notes, and clean cups that reflect meticulous processing standards.

**Trade Dynamics:**
- Well-established auction and direct sales systems
- Strong infrastructure for quality verification
- Premium pricing reflects reputation and demand
- Reliable export documentation and logistics

**Best For:** Buyers seeking distinctive, high-clarity coffees for showcase offerings

### Ethiopia: The Diversity Origin

**Character:** No other origin matches Ethiopia's variety. From delicate floral washed lots to intense fruity naturals, the range is extraordinary.

**Trade Dynamics:**
- Complex export system requiring experienced partners
- Significant lot-to-lot variation (opportunity and risk)
- Growing direct-trade relationships alongside ECX
- Longer lead times and logistics complexity

**Best For:** Buyers with developed cupping capability seeking unique, story-rich offerings

### Uganda: The Value Origin

**Character:** Uganda's Arabica sector is ascending. Quality is improving rapidly, and value-to-quality ratios are compelling.

**Trade Dynamics:**
- Less established specialty infrastructure (but growing)
- More flexible minimum quantities
- Competitive pricing
- Progressive partners investing in quality

**Best For:** Buyers seeking quality at accessible price points, or building East African programs without Kenya/Ethiopia premiums

### Building a Balanced Program

Many buyers source across multiple East African origins:

- **Flagship/showcase:** Kenyan lots for highest-visibility offerings
- **Core program:** Ethiopian washed for consistent quality
- **Seasonal highlights:** Ethiopian naturals for excitement
- **Value tier:** Ugandan coffees for accessible entry points

### Risk Distribution

Multi-origin sourcing also distributes risk:
- Harvest timing varies, smoothing availability
- Partner relationships across countries provide backup options
- Currency and logistics exposure is diversified

The three origins complement each other well—understanding their distinct dynamics helps buyers maximize quality while managing trade complexity.
    `,
    seo: {
      title: "Kenya, Ethiopia, Uganda Coffee Overview | Imwera Coffee",
      description: "Comparative overview of East African specialty coffee origins. Kenya, Ethiopia, Uganda profiles, trade dynamics, and sourcing program strategies.",
    },
  },
  {
    id: "6",
    slug: "quality-feedback-communication-best-practices",
    title: "Quality Feedback Communication Best Practices",
    excerpt: "How to communicate cupping results and quality expectations effectively—strengthening partner relationships through constructive dialogue.",
    category: "Market",
    date: "2025-12-08",
    readTime: "5 min read",
    content: `
## Feedback That Builds Relationships

Quality communication is a two-way conversation. How buyers communicate cupping results and quality expectations significantly influences partner relationships and future coffee quality.

### Why Feedback Matters

Partners invest significant effort in quality—from cherry selection through processing and preparation. Constructive feedback:

- Validates quality efforts when successful
- Identifies specific areas for improvement
- Builds trust through honest, consistent communication
- Supports continuous quality development

### Effective Feedback Practices

**Be Specific**
"This lot scored 84 with stone fruit and citrus notes, clean finish" is more useful than "good coffee."

**Be Constructive**
If quality falls short, identify specific attributes: "We detected slight mustiness suggesting possible storage issue" rather than "not up to standard."

**Be Consistent**
Use consistent scoring protocols and communicate your methodology. Partners can calibrate when they understand your framework.

**Be Timely**
Share feedback while the lot is still relevant. Delayed feedback loses its value for process improvement.

### Communication Channels

1. **Immediate cupping notes:** Share within days of evaluation
2. **Quality summaries:** Periodic reviews of overall performance
3. **Specific requests:** Communicate target profiles clearly
4. **Market context:** Help partners understand what buyers are seeking

### What to Communicate

**Positive Feedback:**
- Specific attributes you valued
- How the coffee performed in your program
- Willingness to continue purchasing

**Constructive Feedback:**
- Specific quality concerns with clear description
- Context on why the attribute matters
- Openness to discussing contributing factors

**Avoid:**
- Vague criticism without specificity
- Comparisons that undermine rather than inform
- Feedback delivered only when there are problems

### Building Long-Term Relationships

The best sourcing relationships involve ongoing quality dialogue. Partners who receive consistent, constructive feedback can:

- Adjust processing parameters
- Improve sorting and preparation
- Allocate higher-quality lots to responsive buyers
- Invest in infrastructure with confidence

Quality feedback isn't just evaluation—it's investment in future coffee quality.
    `,
    seo: {
      title: "Coffee Quality Feedback Best Practices | Imwera Coffee",
      description: "How to communicate cupping results and quality expectations effectively. Building stronger partner relationships through constructive coffee quality dialogue.",
    },
  },
];

export const getInsightBySlug = (slug: string): InsightPost | undefined => {
  return insights.find((post) => post.slug === slug);
};

export const getInsightsByCategory = (category: InsightPost["category"]): InsightPost[] => {
  return insights.filter((post) => post.category === category);
};
