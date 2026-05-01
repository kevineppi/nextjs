'use client'

import { useEffect } from 'react';

// Type declarations for Google gtag (Analytics & Ads)
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const useGoogleAds = (adsConversionId?: string) => {
  useEffect(() => {
    // gtag is already loaded and configured via index.html for both GA4 and Google Ads
    // No additional initialization needed here
  }, [adsConversionId]);

  const trackConversion = (conversionLabel: string, value?: number, transactionId?: string) => {
    if (!window.gtag) {
      console.warn('Google gtag not initialized');
      return;
    }

    const conversionData: Record<string, any> = {
      'send_to': conversionLabel,
    };

    // Add conversion value if provided
    if (value !== undefined) {
      conversionData['value'] = value;
      conversionData['currency'] = 'EUR';
    }

    // Add transaction ID if provided
    if (transactionId) {
      conversionData['transaction_id'] = transactionId;
    }

    window.gtag('event', 'conversion', conversionData);
    console.log('Google Ads conversion tracked:', conversionLabel, value, transactionId);
  };

  return { trackConversion };
};
