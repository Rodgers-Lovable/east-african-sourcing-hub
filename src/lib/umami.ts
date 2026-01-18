/**
 * Umami Analytics Tracking Utilities
 * 
 * Focused on buyer intent, sourcing interest, and partner quality signals.
 * Privacy-respectful and lightweight.
 */

// Type definitions for Umami
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}

// Check if Umami is loaded
const isUmamiLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.umami?.track === 'function';
};

/**
 * Core tracking function with type safety
 */
export const trackEvent = (
  eventName: string, 
  properties?: Record<string, string | number | boolean>
): void => {
  if (!isUmamiLoaded()) {
    // In development, log events to console
    if (import.meta.env.DEV) {
      console.log('[Umami Dev]', eventName, properties);
    }
    return;
  }
  
  try {
    window.umami!.track(eventName, properties);
  } catch (error) {
    console.warn('[Umami] Tracking error:', error);
  }
};

// ============================================
// NAVIGATION & DISCOVERY EVENTS
// ============================================

export const trackNavClick = {
  origins: () => trackEvent('nav_origins_click'),
  originKenya: () => trackEvent('nav_origin_kenya_click'),
  originEthiopia: () => trackEvent('nav_origin_ethiopia_click'),
  originUganda: () => trackEvent('nav_origin_uganda_click'),
  brokerage: () => trackEvent('nav_brokerage_click'),
  about: () => trackEvent('nav_about_click'),
  insights: () => trackEvent('nav_insights_click'),
  contact: () => trackEvent('nav_contact_click'),
};

// ============================================
// HOMEPAGE ORIGIN CARDS
// ============================================

export const trackHomeOriginCard = {
  view: (origin: 'kenya' | 'ethiopia' | 'uganda') => 
    trackEvent('home_origin_card_view', { origin }),
  click: (origin: 'kenya' | 'ethiopia' | 'uganda') => 
    trackEvent('home_origin_card_click', { origin }),
};

// ============================================
// SCROLL DEPTH TRACKING
// ============================================

export const trackScrollDepth = {
  brokerage50: () => trackEvent('scroll_50_brokerage'),
  brokerage75: () => trackEvent('scroll_75_brokerage'),
  origin50: (origin: string) => trackEvent('scroll_50_origin', { origin }),
  origin75: (origin: string) => trackEvent('scroll_75_origin', { origin }),
};

// ============================================
// SOURCING ENQUIRY MODAL FUNNEL
// ============================================

export const trackSourcingModal = {
  open: () => trackEvent('sourcing_modal_open'),
  close: () => trackEvent('sourcing_modal_close'),
  formStart: () => trackEvent('sourcing_form_start'),
  submitSuccess: (data?: { originSelected?: string; volumeRange?: string }) => 
    trackEvent('sourcing_form_submit_success', data),
  submitError: () => trackEvent('sourcing_form_submit_error'),
};

// ============================================
// CTA TRIGGER POINTS
// ============================================

export const trackCTASourcing = {
  fromHome: () => trackEvent('cta_sourcing_from_home'),
  fromBrokerage: () => trackEvent('cta_sourcing_from_brokerage'),
  fromOrigin: (origin: string) => trackEvent('cta_sourcing_from_origin', { origin }),
  fromContact: () => trackEvent('cta_sourcing_from_contact'),
  fromNav: () => trackEvent('cta_sourcing_from_nav'),
};

// ============================================
// PARTNER FORM TRACKING
// ============================================

export const trackPartnerForm = {
  view: () => trackEvent('partner_form_view'),
  start: () => trackEvent('partner_form_start'),
  submitSuccess: () => trackEvent('partner_form_submit_success'),
};

// ============================================
// CONTACT PAGE TRACKING
// ============================================

export const trackContact = {
  formSubmitSuccess: () => trackEvent('contact_form_submit_success'),
  whatsappClick: () => trackEvent('contact_whatsapp_click'),
  emailClick: () => trackEvent('contact_email_click'),
  linkedinClick: () => trackEvent('contact_linkedin_click'),
};

// ============================================
// MARKET INSIGHTS TRACKING
// ============================================

export const trackInsight = {
  postView: (postTitle: string, postCategory?: string) => 
    trackEvent('insight_post_view', { post_title: postTitle, post_category: postCategory || '' }),
  scroll75: (postTitle: string) => 
    trackEvent('insight_scroll_75', { post_title: postTitle }),
  internalLinkClick: (linkTarget: string) => 
    trackEvent('insight_internal_link_click', { link_target: linkTarget }),
};

// ============================================
// THEME TOGGLE TRACKING
// ============================================

export const trackTheme = {
  toggleDark: () => trackEvent('theme_toggle_dark'),
  toggleLight: () => trackEvent('theme_toggle_light'),
};

// ============================================
// MAP INTERACTION TRACKING (for future use)
// ============================================

export const trackMap = {
  viewContactPage: () => trackEvent('map_view_contact_page'),
  regionHover: (region: string) => trackEvent('map_region_hover', { region }),
  regionClick: (region: string) => trackEvent('map_region_click', { region }),
};
