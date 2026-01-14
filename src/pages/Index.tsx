import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { OriginImageCard } from "@/components/OriginImageCard";
import { InsightCard } from "@/components/InsightCard";
import { EnquiryCTABlock } from "@/components/EnquiryCTABlock";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { SourcingEnquiryModal } from "@/components/SourcingEnquiryModal";
import { company, principles } from "@/data/company";
import { services } from "@/data/services";
import { origins } from "@/data/origins";
import { insights } from "@/data/insights";
import heroImage from "@/assets/hero-coffee-landscape.jpg";
import coffeeSorting from "@/assets/coffee-sorting.jpg";
import originKenya from "@/assets/origin-kenya.jpg";
import originEthiopia from "@/assets/origin-ethiopia.jpg";
import originUganda from "@/assets/origin-uganda.jpg";

const originImages: Record<string, string> = {
  kenya: originKenya,
  ethiopia: originEthiopia,
  uganda: originUganda,
};

const Index = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <Layout>
      <SEOHead />

      {/* Hero Section */}
      <PageHero
        image={heroImage}
        tag="Kenya · Ethiopia · Uganda"
        title={company.tagline}
        description={company.description}
        size="large"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setEnquiryModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all"
          >
            Submit Sourcing Enquiry
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            to="/brokerage-sourcing"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border-2 border-white/30 text-white hover:border-accent hover:text-accent transition-colors"
          >
            How We Work
          </Link>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="prose-trade">
              <h2>Independent Brokerage, Trusted Sourcing</h2>
              <p className="text-lg">
                Imwera Coffee is an independent green coffee brokerage operating across East Africa's 
                premier specialty origins. We connect international buyers—roasters, importers, and 
                traders—with high-quality coffees sourced through our network of trusted partners.
              </p>
              <p>
                We don't produce coffee. We don't claim ownership of the coffees we represent. 
                Instead, we focus on what we do best: building relationships, verifying quality, 
                coordinating logistics, and facilitating transparent transactions between buyers 
                and our partner producers and exporters.
              </p>
              <p className="text-sm text-muted-foreground italic mt-6">
                {company.forwardStatement}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxQuote
        image={coffeeSorting}
        alt="Green coffee beans being sorted"
        quote="Coffee is far more than a beverage. It is an invitation to life, disguised as a cup of warm liquid."
        attribution="African Proverb"
      />

      {/* Services */}
      <section className="section-lg">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              tag="Services"
              title="What We Do"
              description="From initial enquiry to export coordination, we support every stage of the sourcing process."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Origins Preview - Image Cards */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              tag="Origins"
              title="Coffees by Origin"
              description="We source from three of East Africa's most distinguished specialty origins, each with distinct characteristics and trade dynamics."
              centered
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {origins.map((origin) => (
                <OriginImageCard
                  key={origin.id}
                  origin={origin}
                  image={originImages[origin.slug]}
                />
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/origins"
                className="inline-flex items-center gap-2 text-accent hover:text-[hsl(42,50%,63%)] transition-colors font-medium"
              >
                Explore all origins <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-lg">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              tag="Principles"
              title="How We Work"
              description="Our approach is built on transparency, strong partnerships, and a commitment to quality at every step."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="left">
                <div className="border-l-2 border-accent pl-6 py-2">
                  <h3 className="font-serif text-xl mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Preview */}
      <section className="section-lg bg-card">
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeader
              tag="Insights"
              title="Market Insights"
              description="Trade perspectives on East African coffee—harvest windows, logistics, and sourcing strategies."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <InsightCard post={post} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-accent hover:text-[hsl(42,50%,63%)] transition-colors font-medium"
              >
                View all insights <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <EnquiryCTABlock
        title="Ready to Source East African Coffee?"
        description="Tell us about your requirements. Whether you're looking for a specific profile, volume, or timing—we'll help you find the right coffees from our partner network."
        secondaryLink="/contact"
        secondaryLabel="General Contact"
      />

      <SourcingEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </Layout>
  );
};

export default Index;
