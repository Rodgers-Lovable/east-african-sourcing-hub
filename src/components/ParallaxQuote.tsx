import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxQuoteProps {
  image: string;
  alt: string;
  quote: string;
  attribution?: string;
}

export const ParallaxQuote = ({ image, alt, quote, attribution }: ParallaxQuoteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div 
      ref={containerRef}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
    >
      {/* Parallax Image */}
      <motion.div 
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ y }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      
      {/* Quote Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-narrow text-center px-6">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <span className="text-accent text-6xl md:text-8xl font-serif absolute -top-8 -left-2 md:-top-12 md:-left-6 opacity-50">
              "
            </span>
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-snug font-medium">
              {quote}
            </p>
            <span className="text-accent text-6xl md:text-8xl font-serif absolute -bottom-12 -right-2 md:-bottom-16 md:-right-6 opacity-50">
              "
            </span>
            {attribution && (
              <footer className="mt-8 text-white/70 text-sm md:text-base uppercase tracking-wider">
                — {attribution}
              </footer>
            )}
          </motion.blockquote>
        </div>
      </div>
    </div>
  );
};
