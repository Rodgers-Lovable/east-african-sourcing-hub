import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface PageHeroProps {
  image: string;
  tag?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  size?: "default" | "large";
  showScrollIndicator?: boolean;
}

export const PageHero = ({
  image,
  tag,
  title,
  description,
  children,
  size = "default",
  showScrollIndicator = false,
}: PageHeroProps) => {
  const heightClass = size === "large" ? "min-h-[85vh]" : "min-h-[70vh]";

  return (
    <section className={`relative ${heightClass} flex items-end overflow-hidden`}>
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay - scrolls with content */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />

      {/* Content */}
      <div className="container-wide relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          {tag && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="tag-brass mb-6 inline-block"
            >
              {tag}
            </motion.span>
          )}
          <h1 className="text-primary-foreground text-balance">{title}</h1>
          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/60 text-sm tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
