import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { origins } from "@/data/origins";
import originKenya from "@/assets/origin-kenya.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import originUganda from "@/assets/origin-uganda.jpg";

const originImages: Record<string, string> = {
  kenya: originKenya,
  ethiopia: originEthiopia,
  uganda: originUganda,
};

const OriginsPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Coffees by Origin"
        description="Explore specialty coffee origins across East Africa. Source quality green coffee from Kenya, Ethiopia, and Uganda through Imwera Coffee's partner network."
        canonical="/origins"
      />

      {/* Hero */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <span className="tag mb-6 inline-block">Origins</span>
          <h1 className="text-balance">
            Coffees by Origin
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            We source from three of East Africa's most distinguished specialty 
            origins. Each offers distinct profiles, trade dynamics, and opportunities 
            for discerning buyers.
          </p>
        </div>
      </section>

      {/* Origin Cards */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-16">
            {origins.map((origin, index) => (
              <div
                key={origin.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={originImages[origin.slug]}
                    alt={`${origin.name} coffee landscape`}
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="tag-brass mb-4 inline-block">{origin.name}</span>
                  <h2 className="text-3xl mb-4">{origin.tagline}</h2>
                  <p className="text-muted-foreground mb-6">
                    {origin.overview}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Harvest
                      </p>
                      <p className="text-sm">{origin.harvestPeriod.split("|")[0].trim()}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        Processing
                      </p>
                      <p className="text-sm">
                        {origin.processingMethods.slice(0, 2).map(p => p.split("—")[0].trim()).join(", ")}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/origins/${origin.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Full {origin.name} overview <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            title="Origin Comparison"
            description="A quick reference for key characteristics across our three origins."
            centered
          />
          <div className="overflow-x-auto mt-8">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2>Ready to Explore?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Dive deeper into individual origins for detailed information on regions, 
            processing, profiles, and sourcing approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/origins/kenya"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Kenya
            </Link>
            <Link
              to="/origins/ethiopia"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Ethiopia
            </Link>
            <Link
              to="/origins/uganda"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Uganda
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OriginsPage;
