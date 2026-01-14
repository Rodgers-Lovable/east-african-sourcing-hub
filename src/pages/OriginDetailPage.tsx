import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { getOriginBySlug, origins } from "@/data/origins";
import originKenya from "@/assets/origin-kenya.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import originUganda from "@/assets/origin-uganda.jpg";

const originImages: Record<string, string> = {
  kenya: originKenya,
  ethiopia: originEthiopia,
  uganda: originUganda,
};

const OriginDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const origin = slug ? getOriginBySlug(slug) : undefined;

  if (!origin) {
    return <Navigate to="/origins" replace />;
  }

  const otherOrigins = origins.filter((o) => o.id !== origin.id);

  return (
    <Layout>
      <SEOHead
        title={origin.seo.title.replace(" | Imwera Coffee", "")}
        description={origin.seo.description}
        canonical={`/origins/${origin.slug}`}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${originImages[origin.slug]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        <div className="container-wide relative z-10 py-16">
          <span className="tag-brass mb-4 inline-block">{origin.name}</span>
          <h1 className="text-primary-foreground max-w-3xl">{origin.tagline}</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-narrow">
          <div className="prose-trade">
            <p className="text-lg">{origin.overview}</p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            title="Key Regions"
            description={`Major coffee-producing regions across ${origin.name}.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {origin.regions.map((region, index) => {
              const [name, desc] = region.split("—");
              return (
                <div key={index} className="trade-card bg-background">
                  <h3 className="font-serif text-lg mb-2">{name.trim()}</h3>
                  {desc && <p className="text-sm text-muted-foreground">{desc.trim()}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Processing */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader title="Processing Methods" />
          <div className="space-y-4 mt-8">
            {origin.processingMethods.map((method, index) => {
              const [name, desc] = method.split("—");
              return (
                <div key={index} className="border-l-2 border-accent pl-6 py-2">
                  <h3 className="font-serif text-lg">{name.trim()}</h3>
                  {desc && <p className="text-muted-foreground mt-1">{desc.trim()}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Harvest & Availability */}
      <section className="section bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Harvest Period</h3>
              <p className="text-muted-foreground">{origin.harvestPeriod}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Availability Window</h3>
              <p className="text-muted-foreground">{origin.availabilityWindow}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Range */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            title="Typical Profile Range"
            description="General flavor characteristics you can expect from this origin."
          />
          <div className="flex flex-wrap gap-3 mt-8">
            {origin.profileRange.map((profile, index) => (
              <span key={index} className="tag">
                {profile}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Approach */}
      <section className="section bg-card">
        <div className="container-narrow">
          <SectionHeader title={`How We Source ${origin.name} Coffees`} />
          <div className="prose-trade mt-8">
            <p>{origin.sourcingApproach}</p>
          </div>
        </div>
      </section>

      {/* Buyer Notes */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            title="For Buyers"
            description="Practical information for sourcing from this origin."
          />
          <div className="space-y-4 mt-8">
            {origin.buyerNotes.map((note, index) => {
              const [label, ...rest] = note.split(":");
              const content = rest.join(":").trim();
              return (
                <div key={index} className="flex gap-4">
                  <span className="text-accent font-medium shrink-0">{label}:</span>
                  <span className="text-muted-foreground">{content}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Origins */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            title="Explore Other Origins"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
            {otherOrigins.map((other) => (
              <Link
                key={other.id}
                to={`/origins/${other.slug}`}
                className="trade-card bg-background group"
              >
                <span className="tag-brass mb-3 inline-block">{other.name}</span>
                <h3 className="font-serif text-lg group-hover:text-accent transition-colors">
                  {other.tagline}
                </h3>
                <span className="flex items-center gap-2 mt-4 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="dark"
        title={`Source ${origin.name} Coffee`}
        description={`Tell us about your requirements for ${origin.name} coffee. We'll identify suitable options from our partner network.`}
        primaryLink="/contact#enquiry"
        primaryLabel="Submit Sourcing Enquiry"
        secondaryLink="/brokerage-sourcing"
        secondaryLabel="How We Work"
      />
    </Layout>
  );
};

export default OriginDetailPage;
