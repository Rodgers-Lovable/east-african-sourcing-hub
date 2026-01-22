import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { EnquiryCTABlock } from "@/components/EnquiryCTABlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { UgandaPortfolioSection } from "@/components/UgandaPortfolioSection";
import { SourcingEnquiryModal, type SourcingEnquiryPrefill } from "@/components/SourcingEnquiryModal";
import { getOriginBySlug, origins } from "@/data/origins";
import originKenya from "@/assets/origin-kenya.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import originUganda from "@/assets/origin-uganda.jpg";
import coffeeSorting from "@/assets/coffee-sorting.jpg";
import dryingBeds from "@/assets/drying-beds.jpg";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const originImages: Record<string, string> = {
  kenya: originKenya,
  ethiopia: originEthiopia,
  uganda: originUganda,
};

const originQuotes: Record<string, { quote: string; attribution: string }> = {
  kenya: {
    quote: "Kenya's SL28 and SL34 cultivars were developed in the 1930s and remain among the most prized varieties for their complex, wine-like acidity.",
    attribution: "Coffee Research Foundation",
  },
  ethiopia: {
    quote: "The birthplace of Arabica coffee, Ethiopia's forests contain more genetic diversity than all other coffee-growing regions combined.",
    attribution: "World Coffee Research",
  },
  uganda: {
    quote: "Uganda is Africa's largest coffee exporter by volume, with Robusta accounting for 80% of production and Arabica commanding specialty premiums.",
    attribution: "Uganda Coffee Development Authority",
  },
};

const OriginDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const origin = slug ? getOriginBySlug(slug) : undefined;

  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<SourcingEnquiryPrefill | undefined>(undefined);

  // Track scroll depth on origin pages
  useScrollTracking({ type: 'origin', origin: slug });

  if (!origin) {
    return <Navigate to="/origins" replace />;
  }

  const otherOrigins = origins.filter((o) => o.id !== origin.id);
  const quote = originQuotes[origin.slug] || originQuotes.kenya;

  return (
    <Layout>
      <SEOHead
        title={origin.seo.title.replace(" | Imwera Coffee", "")}
        description={origin.seo.description}
        canonical={`/origins/${origin.slug}`}
      />

      {/* Hero */}
      <PageHero
        image={originImages[origin.slug]}
        tag={origin.name}
        title={origin.tagline}
      />

      {/* Overview */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="prose-trade">
              <p className="text-lg">{origin.overview}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Regions */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="Key Regions"
              description={`Major coffee-producing regions across ${origin.name}.`}
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {origin.regions.map((region, index) => {
              const [name, desc] = region.split("—");
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="trade-card bg-background h-full">
                    <h3 className="font-serif text-lg mb-2">{name.trim()}</h3>
                    {desc && <p className="text-sm text-muted-foreground">{desc.trim()}</p>}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote
        image={coffeeSorting}
        alt="Coffee processing"
        quote={quote.quote}
        attribution={quote.attribution}
      />

      {/* Processing */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader title="Processing Methods" />
          </AnimatedSection>
          <div className="space-y-4 mt-12">
            {origin.processingMethods.map((method, index) => {
              const [name, desc] = method.split("—");
              return (
                <AnimatedSection key={index} delay={index * 0.1} direction="left">
                  <div className="border-l-2 border-accent pl-6 py-2">
                    <h3 className="font-serif text-lg">{name.trim()}</h3>
                    {desc && <p className="text-muted-foreground mt-1">{desc.trim()}</p>}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uganda Portfolio (structured spec sheets) */}
      <UgandaPortfolioSection
        origin={origin}
        onEnquireProduct={(product) => {
          setEnquiryPrefill({
            origins: ["Uganda"],
            processingPreference: product.type || "",
            notes: `Uganda product of interest: ${product.name}${product.type ? ` (${product.type})` : ""}.\n\nTarget profile: ${product.flavorNotes.join(", ")}.\nAltitude: ${product.altitude}.\nProcess: ${product.process}.\n\nAdditional requirements:`,
          });
          setEnquiryModalOpen(true);
        }}
      />

      {/* Harvest & Availability */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <h3 className="font-serif text-xl mb-4">Harvest Period</h3>
              <p className="text-muted-foreground">{origin.harvestPeriod}</p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <h3 className="font-serif text-xl mb-4">Availability Window</h3>
              <p className="text-muted-foreground">{origin.availabilityWindow}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Profile Range */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="Typical Profile Range"
              description="General flavor characteristics you can expect from this origin."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-8">
              {origin.profileRange.map((profile, index) => (
                <span key={index} className="tag">
                  {profile}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax Quote 2 */}
      <ParallaxQuote
        image={dryingBeds}
        alt="Coffee drying beds"
        quote="The altitude, soil composition, and microclimate of each region impart unique terroir characteristics that define the cup profile."
        attribution="Specialty Coffee Association"
      />

      {/* Sourcing Approach */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader title={`How We Source ${origin.name} Coffees`} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="prose-trade mt-8">
              <p>{origin.sourcingApproach}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Buyer Notes */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="For Buyers"
              description="Practical information for sourcing from this origin."
            />
          </AnimatedSection>
          <div className="space-y-4 mt-12">
            {origin.buyerNotes.map((note, index) => {
              const [label, ...rest] = note.split(":");
              const content = rest.join(":").trim();
              return (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="flex gap-4">
                    <span className="text-accent font-medium shrink-0">{label}:</span>
                    <span className="text-muted-foreground">{content}</span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Origins */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="Explore Other Origins"
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            {otherOrigins.map((other, index) => (
              <AnimatedSection key={other.id} delay={index * 0.1}>
                <Link
                  to={`/origins/${other.slug}`}
                  className="trade-card bg-background group block"
                >
                  <span className="tag-brass mb-3 inline-block">{other.name}</span>
                  <h3 className="font-serif text-lg group-hover:text-accent transition-colors">
                    {other.tagline}
                  </h3>
                  <span className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <EnquiryCTABlock
        title={`Source ${origin.name} Coffee`}
        description={`Tell us about your requirements for ${origin.name} coffee. We'll identify suitable options from our partner network.`}
        primaryLabel="Submit Sourcing Enquiry"
        secondaryLink="/brokerage-sourcing"
        secondaryLabel="How We Work"
      />

      <SourcingEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        prefill={enquiryPrefill}
      />
    </Layout>
  );
};

export default OriginDetailPage;
