import { Link } from "react-router-dom";
import { Home, Briefcase, MapPin, Mail } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import heroLandscape from "@/assets/hero-coffee-landscape.jpg";

const navigationLinks = [
  {
    label: "Go to Homepage",
    href: "/",
    icon: Home,
  },
  {
    label: "Brokerage & Sourcing",
    href: "/brokerage-sourcing",
    icon: Briefcase,
  },
  {
    label: "Coffees by Origin",
    href: "/origins",
    icon: MapPin,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="Page not found"
        description="The page you are looking for may have moved or is no longer available."
        canonical="/404"
      />

      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroLandscape})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />

        {/* Content */}
        <div className="container-narrow relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Tag */}
            <span className="tag-brass mb-6 inline-block">404</span>

            {/* Headline */}
            <h1 className="text-foreground mb-6">Page not found</h1>

            {/* Brass underline */}
            <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-3">
              The page you are looking for may have moved or is no longer available.
            </p>
            <p className="text-muted-foreground max-w-md mx-auto mb-10">
              You can continue exploring Imwera Coffee using the links below.
            </p>

            {/* Navigation Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`
                    inline-flex items-center gap-2 px-5 py-3 font-medium transition-all
                    ${index === 0 
                      ? "bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md" 
                      : "border border-border text-foreground hover:border-accent hover:text-accent"
                    }
                  `}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
