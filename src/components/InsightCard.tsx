import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { InsightPost } from "@/data/insights";

interface InsightCardProps {
  post: InsightPost;
}

export const InsightCard = ({ post }: InsightCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={`/insights/${post.slug}`}
      className="trade-card group block"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag">{post.category}</span>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>
        <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
          <span className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};
