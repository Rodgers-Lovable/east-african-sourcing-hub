import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { InsightCard } from "@/components/InsightCard";
import { getInsightBySlug, insights } from "@/data/insights";

const InsightDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getInsightBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = insights
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // Parse markdown content
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n")
      .map((line, index) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="mt-12 mb-4 text-2xl">
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="mt-8 mb-3 text-xl">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={index} className="font-medium text-foreground mt-4">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <li key={index} className="ml-6 mb-2 text-muted-foreground">
              {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
            </li>
          );
        }
        if (line.match(/^\d+\./)) {
          return (
            <li key={index} className="ml-6 mb-2 text-muted-foreground list-decimal">
              {line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}
            </li>
          );
        }
        if (line.trim() === "") {
          return <br key={index} />;
        }
        return (
          <p key={index} className="mb-4 text-muted-foreground">
            {line.replace(/\*\*(.*?)\*\*/g, (_, text) => text)}
          </p>
        );
      });
  };

  return (
    <Layout>
      <SEOHead
        title={post.seo.title.replace(" | Imwera Coffee", "")}
        description={post.seo.description}
        canonical={`/insights/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          section: post.category,
        }}
      />

      {/* Back Link */}
      <section className="py-6 border-b border-border">
        <div className="container-narrow">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Insights
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-6">
            <span className="tag">{post.category}</span>
            <span className="text-sm text-muted-foreground">{formattedDate}</span>
            <span className="text-sm text-muted-foreground">· {post.readTime}</span>
          </div>
          <h1 className="text-balance">{post.title}</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container-narrow">
          <article className="prose-trade">
            {renderContent(post.content)}
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section bg-card">
          <div className="container-wide">
            <h2 className="text-2xl mb-8 text-center">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedPosts.map((related) => (
                <InsightCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container-narrow text-center">
          <h2>Questions?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            If you have questions about sourcing East African coffee or want to 
            discuss your specific requirements, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-6 font-medium bg-primary text-primary-foreground hover:bg-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default InsightDetailPage;
