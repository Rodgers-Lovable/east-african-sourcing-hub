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
    <section className={`section ${isDark ? "bg-primary" : "bg-card"}`}>
      <div className="container-narrow text-center">
        <h2 className={isDark ? "text-primary-foreground" : "text-foreground"}>
          {title}
        </h2>
        <p className={`mt-4 max-w-xl mx-auto ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to={primaryLink}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-colors ${
              isDark
                ? "bg-primary-foreground text-primary hover:bg-accent hover:text-primary"
                : "bg-primary text-primary-foreground hover:bg-secondary"
            }`}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryLink && secondaryLabel && (
            <Link
              to={secondaryLink}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-medium border transition-colors ${
                isDark
                  ? "border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent"
                  : "border-border text-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
