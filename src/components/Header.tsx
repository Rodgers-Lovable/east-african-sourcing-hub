import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { company } from "@/data/company";
import { origins } from "@/data/origins";
import { SourcingEnquiryModal } from "./SourcingEnquiryModal";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Brokerage & Sourcing", href: "/brokerage-sourcing" },
  { name: "Origins", href: "/origins", hasDropdown: true },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [originsDropdownOpen, setOriginsDropdownOpen] = useState(false);
  const [mobileOriginsOpen, setMobileOriginsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOriginsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileOriginsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOriginsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOriginsDropdownOpen(false);
    }, 150);
  };

  const isOriginActive = location.pathname === "/origins" || location.pathname.startsWith("/origins/");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
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
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.href}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                        isOriginActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${originsDropdownOpen ? "rotate-180" : ""}`} />
                    </Link>
                    
                    {/* Dropdown */}
                    {originsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border shadow-lg rounded-sm overflow-hidden animate-fade-in">
                        {origins.map((origin) => (
                          <Link
                            key={origin.slug}
                            to={`/origins/${origin.slug}`}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              location.pathname === `/origins/${origin.slug}`
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {origin.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              ))}
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors"
              >
                Sourcing Enquiry
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 text-base font-medium py-2 transition-colors ${
                            isOriginActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => setMobileOriginsOpen(!mobileOriginsOpen)}
                          className="p-2 text-muted-foreground hover:text-foreground"
                          aria-label="Toggle origins submenu"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${mobileOriginsOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      {mobileOriginsOpen && (
                        <div className="pl-4 pb-2 flex flex-col gap-1">
                          {origins.map((origin) => (
                            <Link
                              key={origin.slug}
                              to={`/origins/${origin.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`text-sm py-2 transition-colors ${
                                location.pathname === `/origins/${origin.slug}`
                                  ? "text-foreground"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {origin.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium py-2 transition-colors ${
                        location.pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setEnquiryModalOpen(true);
                  }}
                  className="text-base font-medium px-4 py-3 mt-2 bg-primary text-primary-foreground hover:bg-secondary transition-colors text-center"
                >
                  Sourcing Enquiry
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <SourcingEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </>
  );
};
