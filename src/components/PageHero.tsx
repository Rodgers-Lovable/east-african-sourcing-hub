import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  tag?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  size?: "default" | "large";
}

export const PageHero = ({
  image,
  tag,
  title,
  description,
  children,
  size = "default",
}: PageHeroProps) => {
  const heightClass = size === "large" ? "min-h-[80vh]" : "min-h-[50vh]";

  return (
    <section className={`relative ${heightClass} flex items-end`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-16 md:py-20">
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
    </section>
  );
};
