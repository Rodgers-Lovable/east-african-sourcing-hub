import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { OriginCard } from "@/components/OriginCard";
import { InsightCard } from "@/components/InsightCard";
import { CTABlock } from "@/components/CTABlock";
import { company, services, principles } from "@/data/company";
import { origins } from "@/data/origins";
import { insights } from "@/data/insights";
import heroImage from "@/assets/hero-coffee-landscape.jpg";

const Index = () => {
  return (
    <Layout>
      <SEOHead />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="tag-brass mb-6 inline-block">
              Kenya · Ethiopia · Uganda
            </span>
            <h1 className="text-primary-foreground text-balance">
              {company.tagline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              {company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/contact#enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-primary-foreground text-primary hover:bg-accent transition-colors"
              >
                Submit Sourcing Enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/brokerage-sourcing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground transition-colors"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-card">
        <div className="container-narrow">
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
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-wide">
          <SectionHeader
            tag="Services"
            title="What We Do"
            description="From initial enquiry to export coordination, we support every stage of the sourcing process."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Origins Preview */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            tag="Origins"
            title="Coffees by Origin"
            description="We source from three of East Africa's most distinguished specialty origins, each with distinct characteristics and trade dynamics."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {origins.map((origin) => (
              <OriginCard key={origin.id} origin={origin} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/origins"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Explore all origins <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section">
        <div className="container-wide">
          <SectionHeader
            tag="Principles"
            title="How We Work"
            description="Our approach is built on transparency, strong partnerships, and a commitment to quality at every step."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-xl mb-2">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Preview */}
      <section className="section bg-card">
        <div className="container-wide">
          <SectionHeader
            tag="Insights"
            title="Market Insights"
            description="Trade perspectives on East African coffee—harvest windows, logistics, and sourcing strategies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              View all insights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="dark"
        title="Ready to Source East African Coffee?"
        description="Tell us about your requirements. Whether you're looking for a specific profile, volume, or timing—we'll help you find the right coffees from our partner network."
        primaryLink="/contact#enquiry"
        primaryLabel="Submit Sourcing Enquiry"
        secondaryLink="/contact"
        secondaryLabel="General Contact"
      />
    </Layout>
  );
};

export default Index;
