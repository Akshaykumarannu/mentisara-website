// Google Analytics 4 & Custom Event Tracking Helper

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    // Development fallback logger
    console.log(`[Analytics Event] ${category} -> ${action}${label ? ` (${label})` : ""}`);
  }
};
