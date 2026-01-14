import { useState } from "react";
import { Mail, MessageCircle, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { SourcingEnquiryModal } from "@/components/SourcingEnquiryModal";
import { company } from "@/data/company";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroContact from "@/assets/hero-contact.jpg";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage = () => {
  const [generalStatus, setGeneralStatus] = useState<FormStatus>("idle");
  const [partnerStatus, setPartnerStatus] = useState<FormStatus>("idle");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralStatus("submitting");
    setTimeout(() => setGeneralStatus("success"), 1000);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerStatus("submitting");
    setTimeout(() => setPartnerStatus("success"), 1000);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact"
        description="Get in touch with Imwera Coffee. Submit a sourcing enquiry, general contact, or partner introduction."
        canonical="/contact"
      />

      {/* Hero */}
      <PageHero
        image={heroContact}
        tag="Contact"
        title="Get in Touch"
        description="Whether you're ready to source or just exploring, we're here to help."
      />

      {/* Contact Info */}
      <section className="section-lg">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0}>
              <a href={`mailto:${company.contact.email}`} className="trade-card group block h-full">
                <Mail className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">Email</h3>
                <p className="text-sm text-muted-foreground">{company.contact.email}</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <a href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="trade-card group block h-full">
                <MessageCircle className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">{company.contact.whatsapp}</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="trade-card h-full">
                <MapPin className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">{company.contact.location}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="trade-card group block h-full">
                <Linkedin className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect with us</p>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sourcing Enquiry CTA */}
      <section className="section-lg bg-muted">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2>Looking to Source Coffee?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Submit a detailed sourcing enquiry and tell us about your requirements—origin preferences, volume expectations, profile targets, and timing.
            </p>
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all"
            >
              Submit Sourcing Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* General Contact Form */}
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader title="General Contact" description="For general enquiries, introductions, or questions about working with us." />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            {generalStatus === "success" ? (
              <div className="p-6 border border-success text-success text-center">
                <p className="font-medium">Thank you for your message. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><Label htmlFor="gen-name">Full Name *</Label><Input id="gen-name" required className="mt-2" /></div>
                  <div><Label htmlFor="gen-company">Company</Label><Input id="gen-company" className="mt-2" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><Label htmlFor="gen-email">Email *</Label><Input id="gen-email" type="email" required className="mt-2" /></div>
                  <div><Label htmlFor="gen-country">Country *</Label><Input id="gen-country" required className="mt-2" /></div>
                </div>
                <div><Label htmlFor="gen-type">Buyer Type</Label>
                  <Select><SelectTrigger className="mt-2"><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent><SelectItem value="roaster">Roaster</SelectItem><SelectItem value="trader">Trader</SelectItem><SelectItem value="importer">Importer</SelectItem><SelectItem value="exporter">Exporter</SelectItem><SelectItem value="producer">Producer</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
                  </Select>
                </div>
                <div><Label htmlFor="gen-message">Message *</Label><Textarea id="gen-message" required rows={5} className="mt-2" /></div>
                <button type="submit" disabled={generalStatus === "submitting"} className="px-6 py-3 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all font-medium disabled:opacity-50">
                  {generalStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Partner Introduction Form */}
      <section id="partner" className="section-lg">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeader title="Partner Introduction" description="For producers, exporters, and processors interested in working with us." />
            <p className="text-sm text-muted-foreground mb-6">Due to volume, we may not respond immediately. Suitable introductions will be followed up directly.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            {partnerStatus === "success" ? (
              <div className="p-6 border border-success text-success text-center">
                <p className="font-medium">Thank you for your introduction. We'll review and follow up if there's a fit.</p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><Label htmlFor="ptr-name">Name *</Label><Input id="ptr-name" required className="mt-2" /></div>
                  <div><Label htmlFor="ptr-org">Organization *</Label><Input id="ptr-org" required className="mt-2" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><Label htmlFor="ptr-role">Role *</Label><Input id="ptr-role" required className="mt-2" /></div>
                  <div><Label htmlFor="ptr-email">Email *</Label><Input id="ptr-email" type="email" required className="mt-2" /></div>
                </div>
                <div><Label htmlFor="ptr-country">Country of Operation *</Label><Input id="ptr-country" required className="mt-2" /></div>
                <div><Label>Representing</Label>
                  <Select><SelectTrigger className="mt-2"><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent><SelectItem value="farm">Farm / Estate</SelectItem><SelectItem value="coop">Cooperative / Union</SelectItem><SelectItem value="exporter">Exporter</SelectItem><SelectItem value="milling">Milling / Processing</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent>
                  </Select>
                </div>
                <div><Label htmlFor="ptr-desc">Brief Description *</Label><Textarea id="ptr-desc" required rows={4} placeholder="Tell us about your organization, production, and what you're looking for..." className="mt-2" /></div>
                <div><Label htmlFor="ptr-link">Website / Reference Link</Label><Input id="ptr-link" placeholder="https://..." className="mt-2" /></div>
                <button type="submit" disabled={partnerStatus === "submitting"} className="px-6 py-3 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all font-medium disabled:opacity-50">
                  {partnerStatus === "submitting" ? "Submitting..." : "Submit Introduction"}
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      <SourcingEnquiryModal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
      />
    </Layout>
  );
};

export default ContactPage;
