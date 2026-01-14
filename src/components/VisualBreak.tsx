import { AnimatedSection } from "./AnimatedSection";

interface VisualBreakProps {
  image: string;
  alt: string;
  caption?: string;
  height?: "sm" | "md" | "lg";
}

export const VisualBreak = ({ image, alt, caption, height = "md" }: VisualBreakProps) => {
  const heightClasses = {
    sm: "h-48 md:h-64",
    md: "h-64 md:h-80",
    lg: "h-80 md:h-96",
  };

  return (
    <AnimatedSection className="w-full">
      <div className={`relative ${heightClasses[height]} overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
              {caption}
            </p>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};
