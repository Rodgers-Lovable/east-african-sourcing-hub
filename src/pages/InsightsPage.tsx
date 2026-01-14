import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { InsightCard } from "@/components/InsightCard";
import { InsightImageCard } from "@/components/InsightImageCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { insights, insightCategories } from "@/data/insights";
import heroInsights from "@/assets/hero-insights.jpg";
import dryingBeds from "@/assets/drying-beds.jpg";
import coffeeCupping from "@/assets/coffee-cupping.jpg";
import processingStation from "@/assets/processing-station.jpg";

// Map insights to images for visual cards
const insightImages: Record<string, string> = {
  "understanding-harvest-windows-east-africa": dryingBeds,
  "sampling-timelines-what-buyers-should-know": coffeeCupping,
  "processing-methods-trade-implications": processingStation,
};

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredInsights = activeCategory
    ? insights.filter((post) => post.category === activeCategory)
    : insights;

  // Featured insights (first 3) get image cards
  const featuredInsights = filteredInsights.slice(0, 3);
  const remainingInsights = filteredInsights.slice(3);

  return (
    <Layout>
      <SEOHead
        title="Market Insights"
        description="Trade perspectives on East African coffee. Harvest windows, logistics, processing, and sourcing strategies from Imwera Coffee."
        canonical="/insights"
      />

      {/* Hero */}
      <PageHero
        image={heroInsights}
        tag="Market Insights"
        title="Trade Perspectives on East African Coffee"
        description="Practical knowledge for buyers—harvest windows, logistics, quality communication, and sourcing strategies across our origins."
      />

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                All
              </button>
              {insightCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts with Images */}
      {featuredInsights.length > 0 && (
        <section className="section-lg">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredInsights.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  {insightImages[post.slug] ? (
                    <InsightImageCard post={post} image={insightImages[post.slug]} />
                  ) : (
                    <InsightCard post={post} />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Remaining Posts */}
      {remainingInsights.length > 0 && (
        <section className="section-lg bg-card">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingInsights.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <InsightCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredInsights.length === 0 && (
        <section className="section-lg">
          <div className="container-wide text-center py-16">
            <p className="text-muted-foreground">
              No posts in this category yet.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter placeholder */}
      <section className="section-lg bg-card">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2>Stay Informed</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Check back regularly for new insights, or get in touch directly 
              to discuss your sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-6 font-medium bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;
