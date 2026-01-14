import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title: string;
  description: string;
  primaryLink: string;
  primaryLabel: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  variant?: "default" | "dark";
}

export const CTABlock = ({
  title,
  description,
  primaryLink,
  primaryLabel,
  secondaryLink,
  secondaryLabel,
  variant = "default",
}: CTABlockProps) => {
  const isDark = variant === "dark";

  return (
    <section className={`section ${isDark ? "bg-card border-t border-border" : "bg-muted"}`}>
      <div className="container-narrow text-center">
        <h2 className="text-foreground">
          {title}
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to={primaryLink}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all"
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLink && secondaryLabel && (
            <Link
              to={secondaryLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border-2 border-accent text-accent bg-transparent hover:bg-accent/10 transition-all"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
