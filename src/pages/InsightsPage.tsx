import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { InsightCard } from "@/components/InsightCard";
import { insights, insightCategories } from "@/data/insights";

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredInsights = activeCategory
    ? insights.filter((post) => post.category === activeCategory)
    : insights;

  return (
    <Layout>
      <SEOHead
        title="Market Insights"
        description="Trade perspectives on East African coffee. Harvest windows, logistics, processing, and sourcing strategies from Imwera Coffee."
        canonical="/insights"
      />

      {/* Hero */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <span className="tag mb-6 inline-block">Market Insights</span>
          <h1 className="text-balance">
            Trade Perspectives on East African Coffee
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Practical knowledge for buyers—harvest windows, logistics, quality 
            communication, and sourcing strategies across our origins.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
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
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container-wide">
          {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInsights.map((post) => (
                <InsightCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter placeholder - no subscription form */}
      <section className="section bg-card">
        <div className="container-narrow text-center">
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
        </div>
      </section>
    </Layout>
  );
};

export default InsightsPage;
