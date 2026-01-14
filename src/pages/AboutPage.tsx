import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ImageDivider } from "@/components/ImageDivider";
import { ImageTextSection } from "@/components/ImageTextSection";
import { VisualBreak } from "@/components/VisualBreak";
import { company, principles } from "@/data/company";
import heroAbout from "@/assets/hero-about.jpg";
import coffeeSorting from "@/assets/coffee-sorting.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import processingStation from "@/assets/processing-station.jpg";
import coffeeBagsWarehouse from "@/assets/coffee-bags-warehouse.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <SEOHead
        title="About"
        description="Learn about Imwera Coffee, an independent green coffee brokerage connecting international buyers with quality coffees from Kenya, Ethiopia, and Uganda."
        canonical="/about"
      />

      {/* Hero */}
      <PageHero
        image={heroAbout}
        tag="About Us"
        title="Independent Green Coffee Brokerage in East Africa"
        description="Imwera Coffee connects international buyers with high-quality coffees from trusted partners across Kenya, Ethiopia, and Uganda."
      />

      {/* Who We Are - Image/Text Split */}
      <section className="section-lg">
        <div className="container-wide">
          <ImageTextSection
            image={coffeeSorting}
            imageAlt="Green coffee beans being sorted by hand"
            title="Who We Are"
            imagePosition="left"
          >
            <p className="mb-4">
              Imwera Coffee is an independent green coffee brokerage and sourcing 
              company based in Nairobi, Kenya. We operate across three of East 
              Africa's most distinguished specialty coffee origins: Kenya, Ethiopia, 
              and Uganda.
            </p>
            <p className="mb-4">
              Our focus is simple: connecting international buyers—roasters, importers, 
              and traders—with quality coffees from our carefully curated network of 
              producing partners.
            </p>
            <p>
              We're not a producer. We're brokers—specialists in facilitating connections 
              and supporting successful transactions between parties who might not 
              otherwise find each other.
            </p>
          </ImageTextSection>
        </div>
      </section>

      {/* Visual Break */}
      <VisualBreak
        image={originEthiopia}
        alt="Ethiopian coffee landscape with mountains"
        caption="Ethiopia's highlands produce some of the world's most distinctive coffees."
        height="lg"
      />

      {/* Our Role */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="Our Role in the Supply Chain"
              description="Understanding what we do—and don't do—helps set clear expectations."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <AnimatedSection delay={0.1} direction="left">
              <div className="trade-card bg-background h-full">
                <h3 className="font-serif text-xl mb-4">What We Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    Connect buyers with suitable partner coffees
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    Coordinate sampling and quality communication
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    Support contracting and documentation
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    Facilitate export through licensed partners
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent">•</span>
                    Maintain transparent origin traceability
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="trade-card bg-background h-full">
                <h3 className="font-serif text-xl mb-4">What We Don't Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground">×</span>
                    Produce or grow coffee
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground">×</span>
                    Operate washing stations or mills
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground">×</span>
                    Export Kenyan coffee directly (yet)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground">×</span>
                    Claim ownership of partner coffees
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground">×</span>
                    Misrepresent origin or traceability
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Transparency - Image/Text Split (reversed) */}
      <section className="section-lg">
        <div className="container-wide">
          <ImageTextSection
            image={processingStation}
            imageAlt="Coffee processing station with drying beds"
            title="Why Transparency Matters"
            imagePosition="right"
          >
            <p className="mb-4">
              The specialty coffee trade depends on trust. Buyers need to know where 
              their coffee comes from, who produced it, and who handled it along the 
              way.
            </p>
            <p className="mb-4">
              When we say "partner coffees" or "coffees we source," we mean exactly 
              that—coffees produced by our partners that we're representing to buyers. 
              We don't inflate our role or obscure theirs.
            </p>
            <p>
              This honesty creates clearer expectations and stronger relationships 
              with both buyers and producers.
            </p>
          </ImageTextSection>
        </div>
      </section>

      {/* Image Divider */}
      <ImageDivider image={coffeeBagsWarehouse} alt="Green coffee bags in warehouse" height="md" />

      {/* Principles */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="Our Approach"
              description="The principles that guide how we work with buyers and partners."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {principles.map((principle, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="trade-card bg-background h-full">
                  <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Forward Looking */}
      <section className="section-lg">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2>Looking Forward</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {company.forwardStatement}
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              In the meantime, our partner-based model allows us to deliver quality 
              coffees and reliable service while we build the infrastructure and 
              relationships needed for the next phase of our growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="dark"
        title="Work With Us"
        description="Whether you're a buyer seeking quality East African coffee or a producer looking for international connections, we'd like to hear from you."
        primaryLink="/contact#enquiry"
        primaryLabel="Sourcing Enquiry"
        secondaryLink="/contact"
        secondaryLabel="General Contact"
      />
    </Layout>
  );
};

export default AboutPage;
