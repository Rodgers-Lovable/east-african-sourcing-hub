import { useState, useEffect } from "react";
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
import { useEmailJS } from "@/hooks/useEmailJS";
import heroContact from "@/assets/hero-contact.jpg";
import { trackContact, trackCTASourcing, trackPartnerForm } from "@/lib/umami";

// General Contact Form Data
interface GeneralFormData {
  name: string;
  company: string;
  email: string;
  country: string;
  buyerType: string;
  message: string;
}

const initialGeneralData: GeneralFormData = {
  name: "",
  company: "",
  email: "",
  country: "",
  buyerType: "",
  message: "",
};

// Partner Introduction Form Data
interface PartnerFormData {
  name: string;
  organization: string;
  role: string;
  email: string;
  country: string;
  representing: string;
  description: string;
  websiteLink: string;
}

const initialPartnerData: PartnerFormData = {
  name: "",
  organization: "",
  role: "",
  email: "",
  country: "",
  representing: "",
  description: "",
  websiteLink: "",
};

const ContactPage = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [hasStartedPartnerForm, setHasStartedPartnerForm] = useState(false);
  
  // General Contact Form
  const [generalData, setGeneralData] = useState<GeneralFormData>(initialGeneralData);
  const { 
    status: generalStatus, 
    submitGeneralContact, 
    resetStatus: resetGeneralStatus 
  } = useEmailJS();

  // Partner Introduction Form
  const [partnerData, setPartnerData] = useState<PartnerFormData>(initialPartnerData);
  const { 
    status: partnerStatus, 
    submitPartnerIntro, 
    resetStatus: resetPartnerStatus 
  } = useEmailJS();

  // Track partner form view
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#partner') {
      trackPartnerForm.view();
    }
  }, []);

  const handleGeneralChange = (field: keyof GeneralFormData, value: string) => {
    setGeneralData(prev => ({ ...prev, [field]: value }));
  };

  const handlePartnerChange = (field: keyof PartnerFormData, value: string) => {
    // Track form start on first interaction
    if (!hasStartedPartnerForm) {
      setHasStartedPartnerForm(true);
      trackPartnerForm.start();
    }
    setPartnerData(prev => ({ ...prev, [field]: value }));
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitGeneralContact({
        name: generalData.name,
        company: generalData.company,
        email: generalData.email,
        country: generalData.country,
        buyerType: generalData.buyerType,
        message: generalData.message,
      });
      trackContact.formSubmitSuccess();
      setGeneralData(initialGeneralData);
    } catch {
      // Error is handled by the hook
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitPartnerIntro({
        name: partnerData.name,
        organization: partnerData.organization,
        role: partnerData.role,
        email: partnerData.email,
        country: partnerData.country,
        representing: partnerData.representing,
        description: partnerData.description,
        websiteLink: partnerData.websiteLink,
      });
      trackPartnerForm.submitSuccess();
      setPartnerData(initialPartnerData);
      setHasStartedPartnerForm(false);
    } catch {
      // Error is handled by the hook
    }
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
              <a 
                href={`mailto:${company.contact.email}`} 
                onClick={() => trackContact.emailClick()}
                className="trade-card group block h-full"
              >
                <Mail className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">Email</h3>
                <p className="text-sm text-muted-foreground">{company.contact.email}</p>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <a 
                href={`https://wa.me/${company.contact.whatsapp.replace(/[^0-9]/g, "")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackContact.whatsappClick()}
                className="trade-card group block h-full"
              >
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
              <a 
                href={company.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackContact.linkedinClick()}
                className="trade-card group block h-full"
              >
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
              onClick={() => {
                trackCTASourcing.fromContact();
                setEnquiryModalOpen(true);
              }}
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
                <button
                  onClick={() => resetGeneralStatus()}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="gen-name">Full Name *</Label>
                    <Input 
                      id="gen-name" 
                      required 
                      className="mt-2"
                      value={generalData.name}
                      onChange={(e) => handleGeneralChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gen-company">Company</Label>
                    <Input 
                      id="gen-company" 
                      className="mt-2"
                      value={generalData.company}
                      onChange={(e) => handleGeneralChange("company", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="gen-email">Email *</Label>
                    <Input 
                      id="gen-email" 
                      type="email" 
                      required 
                      className="mt-2"
                      value={generalData.email}
                      onChange={(e) => handleGeneralChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gen-country">Country *</Label>
                    <Input 
                      id="gen-country" 
                      required 
                      className="mt-2"
                      value={generalData.country}
                      onChange={(e) => handleGeneralChange("country", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gen-type">Buyer Type</Label>
                  <Select value={generalData.buyerType} onValueChange={(value) => handleGeneralChange("buyerType", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roaster">Roaster</SelectItem>
                      <SelectItem value="trader">Trader</SelectItem>
                      <SelectItem value="importer">Importer</SelectItem>
                      <SelectItem value="exporter">Exporter</SelectItem>
                      <SelectItem value="producer">Producer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="gen-message">Message *</Label>
                  <Textarea 
                    id="gen-message" 
                    required 
                    rows={5} 
                    className="mt-2"
                    value={generalData.message}
                    onChange={(e) => handleGeneralChange("message", e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={generalStatus === "submitting"} 
                  className="px-6 py-3 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all font-medium disabled:opacity-50"
                >
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
                <button
                  onClick={() => resetPartnerStatus()}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Submit another introduction
                </button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ptr-name">Name *</Label>
                    <Input 
                      id="ptr-name" 
                      required 
                      className="mt-2"
                      value={partnerData.name}
                      onChange={(e) => handlePartnerChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ptr-org">Organization *</Label>
                    <Input 
                      id="ptr-org" 
                      required 
                      className="mt-2"
                      value={partnerData.organization}
                      onChange={(e) => handlePartnerChange("organization", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ptr-role">Role *</Label>
                    <Input 
                      id="ptr-role" 
                      required 
                      className="mt-2"
                      value={partnerData.role}
                      onChange={(e) => handlePartnerChange("role", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="ptr-email">Email *</Label>
                    <Input 
                      id="ptr-email" 
                      type="email" 
                      required 
                      className="mt-2"
                      value={partnerData.email}
                      onChange={(e) => handlePartnerChange("email", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="ptr-country">Country of Operation *</Label>
                  <Input 
                    id="ptr-country" 
                    required 
                    className="mt-2"
                    value={partnerData.country}
                    onChange={(e) => handlePartnerChange("country", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Representing</Label>
                  <Select value={partnerData.representing} onValueChange={(value) => handlePartnerChange("representing", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farm">Farm / Estate</SelectItem>
                      <SelectItem value="coop">Cooperative / Union</SelectItem>
                      <SelectItem value="exporter">Exporter</SelectItem>
                      <SelectItem value="milling">Milling / Processing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ptr-desc">Brief Description *</Label>
                  <Textarea 
                    id="ptr-desc" 
                    required 
                    rows={4} 
                    placeholder="Tell us about your organization, production, and what you're looking for..." 
                    className="mt-2"
                    value={partnerData.description}
                    onChange={(e) => handlePartnerChange("description", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="ptr-link">Website / Reference Link</Label>
                  <Input 
                    id="ptr-link" 
                    placeholder="https://..." 
                    className="mt-2"
                    value={partnerData.websiteLink}
                    onChange={(e) => handlePartnerChange("websiteLink", e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={partnerStatus === "submitting"} 
                  className="px-6 py-3 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all font-medium disabled:opacity-50"
                >
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
