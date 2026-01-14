import { useState } from "react";
import { Mail, MessageCircle, MapPin, Linkedin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { SectionHeader } from "@/components/SectionHeader";
import { company } from "@/data/company";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage = () => {
  const [generalStatus, setGeneralStatus] = useState<FormStatus>("idle");
  const [sourcingStatus, setSourcingStatus] = useState<FormStatus>("idle");
  const [partnerStatus, setPartnerStatus] = useState<FormStatus>("idle");

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralStatus("submitting");
    setTimeout(() => setGeneralStatus("success"), 1000);
  };

  const handleSourcingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSourcingStatus("submitting");
    setTimeout(() => setSourcingStatus("success"), 1000);
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
      <section className="section-lg bg-card">
        <div className="container-narrow">
          <span className="tag mb-6 inline-block">Contact</span>
          <h1>Get in Touch</h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Whether you're ready to source or just exploring, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href={`mailto:${company.contact.email}`} className="trade-card group">
              <Mail className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">Email</h3>
              <p className="text-sm text-muted-foreground">{company.contact.email}</p>
            </a>
            <a href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="trade-card group">
              <MessageCircle className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">{company.contact.whatsapp}</p>
            </a>
            <div className="trade-card">
              <MapPin className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-serif text-lg mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">{company.contact.location}</p>
            </div>
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="trade-card group">
              <Linkedin className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">Connect with us</p>
            </a>
          </div>
        </div>
      </section>

      {/* General Contact Form */}
      <section className="section bg-card">
        <div className="container-narrow">
          <SectionHeader title="General Contact" description="For general enquiries, introductions, or questions about working with us." />
          {generalStatus === "success" ? (
            <div className="p-6 border border-success-green text-success-green text-center">
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
              <button type="submit" disabled={generalStatus === "submitting"} className="px-6 py-3 bg-primary text-primary-foreground hover:bg-secondary transition-colors font-medium disabled:opacity-50">
                {generalStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sourcing Enquiry Form */}
      <section id="enquiry" className="section">
        <div className="container-narrow">
          <SectionHeader title="Coffee Sourcing Enquiry" description="Tell us about your sourcing requirements. The more detail, the better we can help." />
          {sourcingStatus === "success" ? (
            <div className="p-6 border border-success-green text-success-green text-center">
              <p className="font-medium">Thank you for your enquiry. We'll review your requirements and respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSourcingSubmit} className="space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Label htmlFor="src-name">Full Name *</Label><Input id="src-name" required className="mt-2" /></div>
                <div><Label htmlFor="src-company">Company *</Label><Input id="src-company" required className="mt-2" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Label htmlFor="src-role">Role</Label><Input id="src-role" className="mt-2" /></div>
                <div><Label htmlFor="src-email">Email *</Label><Input id="src-email" type="email" required className="mt-2" /></div>
              </div>
              <div><Label htmlFor="src-country">Buyer Country *</Label><Input id="src-country" required className="mt-2" /></div>
              <div><Label>Origins of Interest *</Label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {["Kenya", "Ethiopia", "Uganda"].map((o) => (
                    <div key={o} className="flex items-center gap-2"><Checkbox id={`origin-${o}`} /><Label htmlFor={`origin-${o}`} className="font-normal">{o}</Label></div>
                  ))}
                </div>
              </div>
              <div><Label>Expected Volume</Label>
                <Select><SelectTrigger className="mt-2"><SelectValue placeholder="Select volume" /></SelectTrigger>
                  <SelectContent><SelectItem value="samples">Samples only</SelectItem><SelectItem value="1-5">1–5 bags</SelectItem><SelectItem value="10-50">10–50 bags</SelectItem><SelectItem value="container">Container-level</SelectItem><SelectItem value="unsure">Not sure yet</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><Label htmlFor="src-shipping">Preferred Shipping Window</Label><Input id="src-shipping" placeholder="e.g., Q2 2026" className="mt-2" /></div>
                <div><Label htmlFor="src-processing">Processing Preference</Label><Input id="src-processing" placeholder="e.g., Washed, Natural" className="mt-2" /></div>
              </div>
              <div><Label htmlFor="src-notes">Requirements / Notes</Label><Textarea id="src-notes" rows={4} placeholder="Profile targets, specific regions, any other requirements..." className="mt-2" /></div>
              <button type="submit" disabled={sourcingStatus === "submitting"} className="px-6 py-3 bg-primary text-primary-foreground hover:bg-secondary transition-colors font-medium disabled:opacity-50">
                {sourcingStatus === "submitting" ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partner Introduction Form */}
      <section id="partner" className="section bg-card">
        <div className="container-narrow">
          <SectionHeader title="Partner Introduction" description="For producers, exporters, and processors interested in working with us." />
          <p className="text-sm text-muted-foreground mb-6">Due to volume, we may not respond immediately. Suitable introductions will be followed up directly.</p>
          {partnerStatus === "success" ? (
            <div className="p-6 border border-success-green text-success-green text-center">
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
              <button type="submit" disabled={partnerStatus === "submitting"} className="px-6 py-3 bg-primary text-primary-foreground hover:bg-secondary transition-colors font-medium disabled:opacity-50">
                {partnerStatus === "submitting" ? "Submitting..." : "Submit Introduction"}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
