import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SourcingEnquiryModal } from "./SourcingEnquiryModal";
import { trackCTASourcing } from "@/lib/umami";

interface EnquiryCTABlockProps {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
}

export const EnquiryCTABlock = ({
  title,
  description,
  primaryLabel = "Submit Sourcing Enquiry",
  secondaryLink,
  secondaryLabel,
}: EnquiryCTABlockProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const handleOpenModal = () => {
    // Track CTA source based on current page
    if (location.pathname === '/') {
      trackCTASourcing.fromHome();
    } else if (location.pathname === '/brokerage-sourcing') {
      trackCTASourcing.fromBrokerage();
    } else if (location.pathname.startsWith('/origins/')) {
      const origin = location.pathname.replace('/origins/', '');
      trackCTASourcing.fromOrigin(origin);
    }
    setModalOpen(true);
  };
  return (
    <>
      <section className="section bg-card border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="text-foreground">{title}</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-accent text-accent-foreground focus:outline-none hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
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

      <SourcingEnquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};
