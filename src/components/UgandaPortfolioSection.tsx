import type { Origin, OriginProduct } from "@/data/origins";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeader } from "@/components/SectionHeader";
import { SpecSheetBlock } from "@/components/SpecSheetBlock";
import { ProductSpecSheet } from "@/components/ProductSpecSheet";

interface UgandaPortfolioSectionProps {
  origin: Origin;
  onEnquireProduct: (product: OriginProduct) => void;
}

export const UgandaPortfolioSection = ({ origin, onEnquireProduct }: UgandaPortfolioSectionProps) => {
  if (origin.slug !== "uganda") return null;
  if (!origin.portfolio?.arabica || !origin.portfolio?.robusta) return null;

  const { arabica, robusta } = origin.portfolio;

  return (
    <section className="section-lg bg-card">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeader
            title="Uganda Portfolio"
            description="Structured, buyer-friendly specs for current Arabica and Fine Robusta offerings."
          />
        </AnimatedSection>

        {/* Specialty Arabica */}
        <div className="mt-12 space-y-6">
          <AnimatedSection>
            <h3 className="font-serif text-xl">Specialty Arabica (Mount Elgon)</h3>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SpecSheetBlock
              title="General Profile"
              rows={[
                { label: "Coffee Type", value: arabica.generalProfile.coffeeType },
                { label: "Altitude", value: arabica.generalProfile.altitude },
                { label: "Varieties", value: arabica.generalProfile.varieties.join(" / ") },
                { label: "Style", value: arabica.generalProfile.style },
                { label: "Scoring Range", value: arabica.generalProfile.scoringRange },
              ]}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {arabica.products.map((p, index) => (
              <AnimatedSection key={p.name} delay={0.12 + index * 0.06}>
                <ProductSpecSheet product={p} onEnquire={onEnquireProduct} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Fine Robusta */}
        <div className="mt-16 space-y-6">
          <AnimatedSection>
            <h3 className="font-serif text-xl">Fine Robusta (Central Uganda)</h3>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <SpecSheetBlock
              title="Origin & Context"
              rows={[
                { label: "Origin", value: robusta.originContext.origin },
                { label: "Regions", value: robusta.originContext.regions.join(" / ") },
                { label: "Altitude", value: robusta.originContext.altitudeRange },
                { label: "Farming System", value: robusta.originContext.farmingSystem },
                { label: "Intercropping", value: robusta.originContext.intercropping.join(", ") },
                { label: "Shade Species", value: robusta.originContext.shadeSpecies.join(" / ") },
                { label: "Positioning", value: robusta.originContext.positioning },
              ]}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {robusta.processingProfiles.map((p, index) => (
              <AnimatedSection key={p.name} delay={0.12 + index * 0.06}>
                <ProductSpecSheet product={p} onEnquire={onEnquireProduct} />
              </AnimatedSection>
            ))}
          </div>

          {robusta.supplyChainSteps?.length ? (
            <AnimatedSection delay={0.2}>
              <div className="trade-card bg-background">
                <h4 className="font-serif text-lg">Robusta Supply Chain (Kalungu)</h4>
                <ol className="mt-4 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                  {robusta.supplyChainSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          ) : null}

          {robusta.sustainabilityHighlights?.length ? (
            <AnimatedSection delay={0.25}>
              <div className="trade-card bg-background">
                <h4 className="font-serif text-lg">Sustainability Highlights</h4>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {robusta.sustainabilityHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ) : null}
        </div>
      </div>
    </section>
  );
};
