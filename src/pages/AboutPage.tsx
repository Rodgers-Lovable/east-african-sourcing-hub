import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ImageDivider } from "@/components/ImageDivider";
import { company, principles } from "@/data/company";
import heroAbout from "@/assets/hero-about.jpg";
import coffeeSorting from "@/assets/coffee-sorting.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";

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

      {/* Who We Are */}
      <section className="section-lg">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="prose-trade">
                <SectionHeader title="Who We Are" />
                <p>
                  Imwera Coffee is an independent green coffee brokerage and sourcing 
                  company based in Nairobi, Kenya. We operate across three of East 
                  Africa's most distinguished specialty coffee origins: Kenya, Ethiopia, 
                  and Uganda.
                </p>
                <p>
                  Our focus is simple: connecting international buyers—roasters, importers, 
                  and traders—with quality coffees from our carefully curated network of 
                  producing partners. We handle the relationship management, quality 
                  communication, and transaction coordination that makes cross-border 
                  coffee trade work smoothly.
                </p>
                <p>
                  We're not a producer. We're not (yet) a licensed Kenyan exporter. 
                  We're brokers—specialists in facilitating connections and supporting 
                  successful transactions between parties who might not otherwise find 
                  each other.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <img
                src={coffeeSorting}
                alt="Green coffee beans being sorted by hand"
                className="w-full h-auto rounded-sm"
                loading="lazy"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <ImageDivider image={originEthiopia} alt="Ethiopian coffee landscape" height="lg" />

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

      {/* Transparency */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="Why Transparency Matters"
              description="In a trade built on relationships and trust, clarity about roles and origins is fundamental."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="prose-trade mt-8">
              <p>
                The specialty coffee trade depends on trust. Buyers need to know where 
                their coffee comes from, who produced it, and who handled it along the 
                way. We believe transparency about our role in this chain strengthens 
                rather than weakens our value proposition.
              </p>
              <p>
                When we say "partner coffees" or "coffees we source," we mean exactly 
                that—coffees produced by our partners that we're representing to buyers. 
                We don't inflate our role or obscure theirs. This honesty creates clearer 
                expectations and stronger relationships with both buyers and producers.
              </p>
              <p>
                We also believe that transparency extends to limitations. We're not yet 
                licensed to export Kenyan coffee directly. Rather than work around this 
                fact, we're transparent about it and work with licensed partners to 
                facilitate exports professionally and legally.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
