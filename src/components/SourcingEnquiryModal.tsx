import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useEmailJS } from "@/hooks/useEmailJS";
import { trackSourcingModal } from "@/lib/umami";

interface SourcingEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  role: string;
  email: string;
  country: string;
  origins: string[];
  volume: string;
  shippingWindow: string;
  processingPreference: string;
  notes: string;
}

const initialFormData: FormData = {
  name: "",
  company: "",
  role: "",
  email: "",
  country: "",
  origins: [],
  volume: "",
  shippingWindow: "",
  processingPreference: "",
  notes: "",
};

export const SourcingEnquiryModal = ({ isOpen, onClose }: SourcingEnquiryModalProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const { status, submitSourcingEnquiry, resetStatus } = useEmailJS();
  const formRef = useRef<HTMLFormElement>(null);

  // Track modal open
  useEffect(() => {
    if (isOpen) {
      trackSourcingModal.open();
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Track form start on first interaction
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackSourcingModal.formStart();
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOriginToggle = (origin: string, checked: boolean) => {
    // Track form start on first interaction
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackSourcingModal.formStart();
    }
    setFormData(prev => ({
      ...prev,
      origins: checked 
        ? [...prev.origins, origin]
        : prev.origins.filter(o => o !== origin)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitSourcingEnquiry({
        name: formData.name,
        company: formData.company,
        role: formData.role,
        email: formData.email,
        country: formData.country,
        origins: formData.origins,
        volume: formData.volume,
        shippingWindow: formData.shippingWindow,
        processingPreference: formData.processingPreference,
        notes: formData.notes,
      });
      
      // Track success with optional properties
      trackSourcingModal.submitSuccess({
        originSelected: formData.origins.length > 1 ? 'multiple' : formData.origins[0] || '',
        volumeRange: formData.volume || '',
      });
    } catch {
      // Track error
      trackSourcingModal.submitError();
    }
  };

  const handleClose = () => {
    // Track modal close (only if user manually closes, not after success)
    if (status !== "success") {
      trackSourcingModal.close();
    }
    setFormData(initialFormData);
    setHasStartedForm(false);
    resetStatus();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full flex flex-col bg-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-card">
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-foreground">Coffee Sourcing Enquiry</h2>
                <p className="text-sm text-muted-foreground mt-1 hidden sm:block">
                  Tell us about your sourcing requirements
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground hidden md:block">Esc to close</span>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-accent/10 hover:text-accent rounded transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {status === "success" ? (
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="max-w-md text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl mb-4">Enquiry Submitted</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your sourcing enquiry. We'll review your requirements and respond within 1-2 business days.
                    </p>
                    <div className="p-4 bg-muted/50 rounded text-left text-sm">
                      <p className="font-medium mb-2">What happens next:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• We'll review your requirements</li>
                        <li>• Match with available partner coffees</li>
                        <li>• Respond with suitable options and next steps</li>
                      </ul>
                    </div>
                    <button
                      onClick={handleClose}
                      className="mt-8 px-6 py-3 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] transition-all font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="max-w-5xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Left Column: Your Details */}
                        <div className="space-y-6">
                          <div className="border-b border-border pb-2 mb-4">
                            <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Your Details</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name" className="text-sm">Full Name *</Label>
                              <Input 
                                id="name" 
                                required 
                                className="mt-1.5"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="company" className="text-sm">Company *</Label>
                              <Input 
                                id="company" 
                                required 
                                className="mt-1.5"
                                value={formData.company}
                                onChange={(e) => handleInputChange("company", e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="role" className="text-sm">Role</Label>
                              <Input 
                                id="role" 
                                className="mt-1.5"
                                value={formData.role}
                                onChange={(e) => handleInputChange("role", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-sm">Email *</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                required 
                                className="mt-1.5"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="country" className="text-sm">Buyer Country *</Label>
                            <Input 
                              id="country" 
                              required 
                              className="mt-1.5"
                              value={formData.country}
                              onChange={(e) => handleInputChange("country", e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Right Column: Sourcing Needs */}
                        <div className="space-y-6">
                          <div className="border-b border-border pb-2 mb-4">
                            <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Sourcing Needs</h3>
                          </div>
                          <div>
                            <Label className="text-sm">Origins of Interest *</Label>
                            <div className="flex flex-wrap gap-4 mt-2">
                              {["Kenya", "Ethiopia", "Uganda"].map((origin) => (
                                <div key={origin} className="flex items-center gap-2">
                                  <Checkbox 
                                    id={`origin-${origin}`}
                                    checked={formData.origins.includes(origin)}
                                    onCheckedChange={(checked) => handleOriginToggle(origin, checked as boolean)}
                                  />
                                  <Label htmlFor={`origin-${origin}`} className="font-normal text-sm">{origin}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm">Expected Volume</Label>
                              <Select value={formData.volume} onValueChange={(value) => handleInputChange("volume", value)}>
                                <SelectTrigger className="mt-1.5">
                                  <SelectValue placeholder="Select volume" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="samples">Samples only</SelectItem>
                                  <SelectItem value="1-5">1–5 bags</SelectItem>
                                  <SelectItem value="10-50">10–50 bags</SelectItem>
                                  <SelectItem value="container">Container-level</SelectItem>
                                  <SelectItem value="unsure">Not sure yet</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="shipping" className="text-sm">Shipping Window</Label>
                              <Input 
                                id="shipping" 
                                placeholder="e.g., Q2 2026" 
                                className="mt-1.5"
                                value={formData.shippingWindow}
                                onChange={(e) => handleInputChange("shippingWindow", e.target.value)}
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="processing" className="text-sm">Processing Preference</Label>
                            <Input 
                              id="processing" 
                              placeholder="e.g., Washed, Natural" 
                              className="mt-1.5"
                              value={formData.processingPreference}
                              onChange={(e) => handleInputChange("processingPreference", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Full Width: Notes */}
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="border-b border-border pb-2 mb-4">
                          <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Additional Notes</h3>
                        </div>
                        <Textarea
                          id="notes"
                          rows={3}
                          placeholder="Profile targets, specific regions, certifications, or any other requirements..."
                          className="resize-none"
                          value={formData.notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="shrink-0 px-6 py-4 border-t border-border bg-muted/50">
                    <div className="max-w-5xl mx-auto flex items-center justify-end gap-4">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="px-6 py-2.5 bg-accent text-accent-foreground hover:bg-[hsl(42,50%,63%)] hover:shadow-md transition-all font-medium text-sm disabled:opacity-50"
                      >
                        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
