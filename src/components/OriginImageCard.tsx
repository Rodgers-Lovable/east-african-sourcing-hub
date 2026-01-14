import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Origin } from "@/data/origins";

interface OriginImageCardProps {
  origin: Origin;
  image: string;
}

export const OriginImageCard = ({ origin, image }: OriginImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url(${image})`,
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
      />

      {/* Gradient Overlay - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Origin Name - Always Visible */}
        <motion.span
          className="tag-brass mb-3"
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {origin.name}
        </motion.span>

        {/* Tagline - Always Visible */}
        <motion.h3
          className="font-serif text-2xl md:text-3xl text-primary-foreground mb-3"
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {origin.tagline}
        </motion.h3>

        {/* Description - Revealed on Hover */}
        <motion.p
          className="text-primary-foreground/80 text-sm md:text-base mb-6 line-clamp-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {origin.overview.substring(0, 150)}...
        </motion.p>

        {/* Action Buttons - Revealed on Hover */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <Link
            to={`/origins/${origin.slug}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary-foreground text-primary hover:bg-accent transition-colors"
          >
            Explore Origin
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact#enquiry"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium border border-primary-foreground/50 text-primary-foreground hover:border-primary-foreground transition-colors"
          >
            Sourcing Enquiry
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
