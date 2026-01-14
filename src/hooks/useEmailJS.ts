import { useState, useCallback, useEffect } from "react";
import { 
  initEmailJS,
  sendSourcingEnquiry, 
  sendGeneralContact, 
  sendPartnerIntro,
  SourcingEnquiryData,
  GeneralContactData,
  PartnerIntroData,
} from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const useEmailJS = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Initialize EmailJS on hook mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const resetStatus = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  const submitSourcingEnquiry = useCallback(async (data: SourcingEnquiryData) => {
    setStatus("submitting");
    setError(null);
    
    try {
      await sendSourcingEnquiry(data);
      setStatus("success");
      toast({
        title: "Enquiry Submitted",
        description: "We'll review your requirements and respond within 1-2 business days.",
      });
    } catch (err) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Failed to send enquiry";
      setError(errorMessage);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your enquiry. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  }, [toast]);

  const submitGeneralContact = useCallback(async (data: GeneralContactData) => {
    setStatus("submitting");
    setError(null);
    
    try {
      await sendGeneralContact(data);
      setStatus("success");
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon.",
      });
    } catch (err) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Failed to send message";
      setError(errorMessage);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  }, [toast]);

  const submitPartnerIntro = useCallback(async (data: PartnerIntroData) => {
    setStatus("submitting");
    setError(null);
    
    try {
      await sendPartnerIntro(data);
      setStatus("success");
      toast({
        title: "Introduction Submitted",
        description: "Thank you for your introduction. We'll review and follow up if there's a fit.",
      });
    } catch (err) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "Failed to send introduction";
      setError(errorMessage);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your introduction. Please try again.",
        variant: "destructive",
      });
      throw err;
    }
  }, [toast]);

  return {
    status,
    error,
    resetStatus,
    submitSourcingEnquiry,
    submitGeneralContact,
    submitPartnerIntro,
  };
};
