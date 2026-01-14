import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/data/company";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Brokerage & Sourcing", href: "/brokerage-sourcing" },
  { name: "Origins", href: "/origins" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl font-medium text-foreground hover:text-accent transition-colors"
          >
            {company.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact#enquiry"
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Sourcing Enquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors text-center"
              >
                Sourcing Enquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
