import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { OriginImageCard } from "@/components/OriginImageCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { SourcingEnquiryModal } from "@/components/SourcingEnquiryModal";
import { origins } from "@/data/origins";
import heroOrigins from "@/assets/hero-origins.jpg";
import originKenya from "@/assets/origin-kenya.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import originUganda from "@/assets/origin-uganda.jpg";
import dryingBeds from "@/assets/drying-beds.jpg";
import { trackCTASourcing } from "@/lib/umami";

const originImages: Record<string, string> = {
  kenya: originKenya,
  ethiopia: originEthiopia,
  uganda: originUganda,
};

const OriginsPage = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Coffees by Origin"
        description="Explore specialty coffee origins across East Africa. Source quality green coffee from Kenya, Ethiopia, and Uganda through Imwera Coffee's partner network."
        canonical="/origins"
      />

      {/* Hero */}
      <PageHero
        image={heroOrigins}
        tag="Origins"
        title="Coffees by Origin"
        description="We source from three of East Africa's most distinguished specialty origins. Each offers distinct profiles, trade dynamics, and opportunities for discerning buyers."
      />

      {/* Origin Image Cards */}
      <section className="section-lg">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {origins.map((origin) => (
                <OriginImageCard
                  key={origin.id}
                  origin={origin}
                  image={originImages[origin.slug]}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote
        image={dryingBeds}
        alt="Coffee cherries drying on raised African beds"
        quote="East Africa produces less than 5% of the world's coffee, yet commands the highest prices at specialty auctions year after year."
        attribution="International Coffee Organization"
      />

      {/* Comparison */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="Origin Comparison"
              description="A quick reference for key characteristics across our three origins."
              centered
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto mt-12">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 font-serif font-medium">Attribute</th>
                    <th className="text-left py-4 font-serif font-medium">Kenya</th>
                    <th className="text-left py-4 font-serif font-medium">Ethiopia</th>
                    <th className="text-left py-4 font-serif font-medium">Uganda</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-4 font-medium text-foreground">Primary Harvest</td>
                    <td className="py-4">Oct – Dec</td>
                    <td className="py-4">Oct – Feb</td>
                    <td className="py-4">Sep – Dec</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 font-medium text-foreground">Dominant Processing</td>
                    <td className="py-4">Fully Washed</td>
                    <td className="py-4">Washed & Natural</td>
                    <td className="py-4">Fully Washed</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 font-medium text-foreground">Key Profiles</td>
                    <td className="py-4">Bright, berry, complex</td>
                    <td className="py-4">Floral to fruity</td>
                    <td className="py-4">Citrus, balanced</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 font-medium text-foreground">Price Position</td>
                    <td className="py-4">Premium</td>
                    <td className="py-4">Varied</td>
                    <td className="py-4">Value</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 font-medium text-foreground">Typical Lead Time</td>
                    <td className="py-4">4–8 weeks</td>
                    <td className="py-4">6–12 weeks</td>
                    <td className="py-4">4–8 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2>Ready to Source?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Submit a sourcing enquiry with your requirements, or dive deeper into individual origins for detailed information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => {
                  trackCTASourcing.fromOrigin('origins-hub');
                  setEnquiryModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all"
              >
                Submit Sourcing Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/origins/kenya"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border-2 border-accent text-accent bg-transparent hover:bg-accent/10 transition-all"
              >
                Explore Kenya
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SourcingEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </Layout>
  );
};

export default OriginsPage;
