import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { InsightPost } from "@/data/insights";

interface InsightImageCardProps {
  post: InsightPost;
  image: string;
}

export const InsightImageCard = ({ post, image }: InsightImageCardProps) => {
  return (
    <Link
      to={`/insights/${post.slug}`}
      className="group block relative overflow-hidden rounded-sm aspect-[4/3]"
    >
      <img
        src={image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/90 text-white mb-3 w-fit">
          {post.category}
        </span>
        <h3 className="font-serif text-lg md:text-xl text-white mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-white/70 text-sm line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-white/80 text-sm">
          <span>{post.readTime}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};
