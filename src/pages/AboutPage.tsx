import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABlock } from "@/components/CTABlock";
import { company, principles } from "@/data/company";
import coffeeSorting from "@/assets/coffee-sorting.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <SEOHead
        title="About"
        description="Learn about Imwera Coffee, an independent green coffee brokerage connecting international buyers with quality coffees from Kenya, Ethiopia, and Uganda."
        canonical="/about"
      />

      {/* Hero */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <span className="tag mb-6 inline-block">About Us</span>
          <h1 className="text-balance">
            Independent Green Coffee Brokerage in East Africa
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Imwera Coffee connects international buyers with high-quality coffees 
            from trusted partners across Kenya, Ethiopia, and Uganda.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div>
              <img
                src={coffeeSorting}
                alt="Green coffee beans being sorted by hand"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="section bg-card">
        <div className="container-narrow">
          <SectionHeader
            title="Our Role in the Supply Chain"
            description="Understanding what we do—and don't do—helps set clear expectations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="trade-card bg-background">
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
            <div className="trade-card bg-background">
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
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            title="Why Transparency Matters"
            description="In a trade built on relationships and trust, clarity about roles and origins is fundamental."
          />
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
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            title="Our Approach"
            description="The principles that guide how we work with buyers and partners."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {principles.map((principle, index) => (
              <div key={index} className="trade-card bg-background">
                <h3 className="font-serif text-xl mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forward Looking */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2>Looking Forward</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {company.forwardStatement}
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            In the meantime, our partner-based model allows us to deliver quality 
            coffees and reliable service while we build the infrastructure and 
            relationships needed for the next phase of our growth.
          </p>
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
