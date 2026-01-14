import { Link } from "react-router-dom";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Brokerage & Sourcing", href: "/brokerage-sourcing" },
    { name: "Contact", href: "/contact" },
  ],
  origins: [
    { name: "Kenya", href: "/origins/kenya" },
    { name: "Ethiopia", href: "/origins/ethiopia" },
    { name: "Uganda", href: "/origins/uganda" },
  ],
  resources: [
    { name: "Market Insights", href: "/insights" },
    { name: "Sourcing Enquiry", href: "/contact#enquiry" },
    { name: "Partner Introduction", href: "/contact#partner" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium">
              {company.name}
            </Link>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Independent green coffee brokerage and sourcing across Kenya, Ethiopia, and Uganda.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={`mailto:${company.contact.email}`}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Origins</h4>
            <ul className="space-y-3">
              {footerNavigation.origins.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              {company.contact.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
