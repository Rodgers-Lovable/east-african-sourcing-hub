import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQBlock } from "@/components/FAQBlock";
import { EnquiryCTABlock } from "@/components/EnquiryCTABlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ImageTextSection } from "@/components/ImageTextSection";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { services } from "@/data/services";
import { brokerageFaqs } from "@/data/faqs";
import heroBrokerage from "@/assets/hero-brokerage.jpg";
import coffeeSorting from "@/assets/coffee-sorting.jpg";
import coffeeCupping from "@/assets/coffee-cupping.jpg";
import dryingBeds from "@/assets/drying-beds.jpg";
import coffeeBagsWarehouse from "@/assets/coffee-bags-warehouse.jpg";

const BrokerageSourcingPage = () => {
  const process = [
    {
      step: "01",
      title: "Enquiry & Requirements",
      description: "Tell us what you're looking for—origin preferences, volume expectations, profile targets, timing requirements. The more detail, the better we can match you.",
    },
    {
      step: "02",
      title: "Partner Matching",
      description: "We identify suitable coffees from our partner network based on your specifications. We'll present options with full traceability and partner information.",
    },
    {
      step: "03",
      title: "Sampling Coordination",
      description: "We coordinate sample preparation and shipment from partners. Samples ship directly to you with all relevant documentation and cupping notes.",
    },
    {
      step: "04",
      title: "Quality Feedback",
      description: "You evaluate samples and share feedback. We relay cupping notes to partners, supporting the quality dialogue that builds lasting relationships.",
    },
    {
      step: "05",
      title: "Contracting Support",
      description: "Once you've selected coffees, we support the contracting process—pricing discussions, terms negotiation, and documentation coordination.",
    },
    {
      step: "06",
      title: "Export & Logistics",
      description: "Export is handled through our licensed partner network. We coordinate the logistics, documentation, and communication to ensure smooth delivery.",
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Brokerage & Sourcing"
        description="Learn how Imwera Coffee's green coffee brokerage works. From enquiry to export, we support buyers sourcing quality East African coffee through our partner network."
        canonical="/brokerage-sourcing"
      />

      {/* Hero */}
      <PageHero
        image={heroBrokerage}
        tag="Brokerage & Sourcing"
        title="How Green Coffee Brokerage Works"
        description="A step-by-step look at how we connect international buyers with quality coffees from East Africa."
      />

      {/* What is Brokerage - Image/Text Split */}
      <section className="section-lg">
        <div className="container-wide">
          <ImageTextSection
            image={coffeeCupping}
            imageAlt="Professional coffee cupping session"
            title="What is Green Coffee Brokerage?"
            imagePosition="left"
          >
            <p className="mb-4">
              Green coffee brokerage is the professional facilitation of coffee 
              trade between producing origins and consuming markets. A broker 
              connects buyers with suitable coffees, coordinates sampling and 
              quality verification, supports contracting, and helps manage the 
              logistics of international trade.
            </p>
            <p className="mb-4">
              Unlike importers who take title to coffee and maintain inventory, 
              brokers facilitate direct transactions between buyers and sellers.
            </p>
            <p>
              At Imwera Coffee, we specialize in East African origins—Kenya, 
              Ethiopia, and Uganda. Our deep knowledge of these markets allows 
              us to source coffees that meet specific buyer requirements.
            </p>
          </ImageTextSection>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote
        image={dryingBeds}
        alt="Coffee cherries drying on raised beds"
        quote="Natural processing extends drying time to 20-30 days, concentrating sugars and developing the fruit-forward complexity African coffees are known for."
        attribution="Processing Insights"
      />

      {/* Services */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="How We Support Buyers"
              description="From initial enquiry to successful delivery, we provide comprehensive support throughout the sourcing process."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="trade-card bg-background h-full">
                  <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-lg">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              title="The Sourcing Process"
              description="A typical transaction follows these steps—though we adapt to each buyer's specific needs and timeline."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="relative">
                  <span className="text-6xl font-serif text-muted/30 absolute -top-4 -left-2">
                    {item.step}
                  </span>
                  <div className="pt-8">
                    <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote
        image={coffeeSorting}
        alt="Coffee sample preparation"
        quote="Kenya's auction system grades coffees by screen size and quality—AA represents the largest beans, typically 17-18 screen size."
        attribution="Kenya Coffee Trade"
      />

      {/* Partner Relationships - Image/Text Split */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <ImageTextSection
            image={coffeeBagsWarehouse}
            imageAlt="Green coffee bags stacked in warehouse"
            title="How We Work With Partners"
            imagePosition="right"
          >
            <p className="mb-4">
              Our ability to source quality coffee depends entirely on the partners 
              we work with. We're selective about these relationships, prioritizing 
              partners who share our commitment to quality, reliability, and 
              transparent communication.
            </p>
            <p className="mb-4">
              <strong>What we look for:</strong> Quality consistency, reliable 
              communication, full traceability, and fair practices with farmers.
            </p>
            <p>
              <strong>What partners expect from us:</strong> Clear requirement 
              communication, timely cupping feedback, reliable payment facilitation, 
              and long-term relationship focus.
            </p>
          </ImageTextSection>
        </div>
      </section>

      {/* What We Don't Claim */}
      <section className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="What We Don't Claim"
              description="Transparency about our role means being clear about what we're not."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="prose-trade">
              <p>
                We're not producers. The coffees we source are grown, processed, and 
                prepared by our partner farms, cooperatives, washing stations, and 
                exporters. We represent them honestly, without claiming their work 
                as our own.
              </p>
              <p>
                We're not (yet) licensed Kenyan coffee exporters. All Kenyan exports 
                are facilitated through our licensed partner network. We're working 
                toward direct export capability, but until that's in place, we're 
                transparent about how exports actually work.
              </p>
              <p>
                We don't claim ownership of partner coffees until a transaction is 
                completed. When we present "available coffees" or "coffees we source," 
                we mean coffees from our partner network that we can facilitate 
                access to—not inventory we hold.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader
              title="Frequently Asked Questions"
              description="Common questions from buyers about working with Imwera Coffee."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-8">
              <FAQBlock faqs={brokerageFaqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <EnquiryCTABlock
        title="Ready to Start Sourcing?"
        description="Submit a sourcing enquiry with your requirements, or explore our origin profiles to learn more about the coffees we represent."
        primaryLabel="Submit Sourcing Enquiry"
        secondaryLink="/origins"
        secondaryLabel="Explore Origins"
      />
    </Layout>
  );
};

export default BrokerageSourcingPage;
