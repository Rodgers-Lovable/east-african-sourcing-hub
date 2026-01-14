import { AnimatedSection } from "./AnimatedSection";

interface ImageTextSectionProps {
  image: string;
  imageAlt: string;
  title?: string;
  children: React.ReactNode;
  imagePosition?: "left" | "right";
}

export const ImageTextSection = ({
  image,
  imageAlt,
  title,
  children,
  imagePosition = "left",
}: ImageTextSectionProps) => {
  const imageContent = (
    <AnimatedSection direction={imagePosition === "left" ? "left" : "right"}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </AnimatedSection>
  );

  const textContent = (
    <AnimatedSection direction={imagePosition === "left" ? "right" : "left"} delay={0.1}>
      <div className="flex flex-col justify-center h-full">
        {title && <h3 className="font-serif text-2xl md:text-3xl mb-4">{title}</h3>}
        <div className="prose-trade text-muted-foreground">{children}</div>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {imagePosition === "left" ? (
        <>
          {imageContent}
          {textContent}
        </>
      ) : (
        <>
          {textContent}
          {imageContent}
        </>
      )}
    </div>
  );
};
