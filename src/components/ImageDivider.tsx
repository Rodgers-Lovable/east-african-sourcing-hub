import { AnimatedSection } from "./AnimatedSection";

interface ImageDividerProps {
  image: string;
  alt: string;
  height?: "sm" | "md" | "lg";
}

export const ImageDivider = ({ image, alt, height = "md" }: ImageDividerProps) => {
  const heightClasses = {
    sm: "h-48 md:h-64",
    md: "h-64 md:h-80",
    lg: "h-80 md:h-96",
  };

  return (
    <AnimatedSection>
      <div className={`w-full ${heightClasses[height]} overflow-hidden`}>
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );
};
