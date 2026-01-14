import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Origin } from "@/data/origins";

interface OriginCardProps {
  origin: Origin;
}

export const OriginCard = ({ origin }: OriginCardProps) => {
  return (
    <Link
      to={`/origins/${origin.slug}`}
      className="trade-card group block"
    >
      <div className="flex flex-col h-full">
        <span className="tag-brass mb-4">{origin.name}</span>
        <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">
          {origin.tagline}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-1">
          {origin.overview.substring(0, 180)}...
        </p>
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Key regions:</p>
          <p className="text-sm text-foreground">
            {origin.regions.slice(0, 3).map((r) => r.split("—")[0].trim()).join(" · ")}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};
