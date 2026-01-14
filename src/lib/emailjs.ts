import emailjs from "@emailjs/browser";

// EmailJS Configuration
// Add your EmailJS credentials here or via environment variables
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  templates: {
    sourcingEnquiry: import.meta.env.VITE_EMAILJS_TEMPLATE_SOURCING || "YOUR_SOURCING_TEMPLATE_ID",
    generalContact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || "YOUR_CONTACT_TEMPLATE_ID",
    partnerIntro: import.meta.env.VITE_EMAILJS_TEMPLATE_PARTNER || "YOUR_PARTNER_TEMPLATE_ID",
  },
};

// Initialize EmailJS with public key
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Sourcing Enquiry Form Data
export interface SourcingEnquiryData {
  name: string;
  company: string;
  role?: string;
  email: string;
  country: string;
  origins: string[];
  volume?: string;
  shippingWindow?: string;
  processingPreference?: string;
  notes?: string;
}

// General Contact Form Data
export interface GeneralContactData {
  name: string;
  company?: string;
  email: string;
  country: string;
  buyerType?: string;
  message: string;
}

// Partner Introduction Form Data
export interface PartnerIntroData {
  name: string;
  organization: string;
  role: string;
  email: string;
  country: string;
  representing?: string;
  description: string;
  websiteLink?: string;
}

// Send Sourcing Enquiry Email
export const sendSourcingEnquiry = async (data: SourcingEnquiryData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    company: data.company,
    role: data.role || "Not specified",
    country: data.country,
    origins: data.origins.join(", ") || "Not specified",
    volume: data.volume || "Not specified",
    shipping_window: data.shippingWindow || "Not specified",
    processing_preference: data.processingPreference || "Not specified",
    notes: data.notes || "None",
    form_type: "Sourcing Enquiry",
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templates.sourcingEnquiry,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
};

// Send General Contact Email
export const sendGeneralContact = async (data: GeneralContactData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    company: data.company || "Not specified",
    country: data.country,
    buyer_type: data.buyerType || "Not specified",
    message: data.message,
    form_type: "General Contact",
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templates.generalContact,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
};

// Send Partner Introduction Email
export const sendPartnerIntro = async (data: PartnerIntroData): Promise<void> => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    organization: data.organization,
    role: data.role,
    country: data.country,
    representing: data.representing || "Not specified",
    description: data.description,
    website_link: data.websiteLink || "Not provided",
    form_type: "Partner Introduction",
  };

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templates.partnerIntro,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
};
