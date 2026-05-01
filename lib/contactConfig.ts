/**
 * Zentrale Kontakt-Konfiguration
 * Hier werden alle Kontakt-Links / Nummern gepflegt.
 * Tausche nach dem Cal.com-Setup einfach CAL_BOOKING_URL aus.
 */

export const CONTACT = {
  // Telefon (E.164 für tel:-Links)
  phone: "+436765517197",
  phoneDisplay: "+43 676 5517197",

  // WhatsApp Business – gleiche Nummer wie Telefon, ohne + und ohne Leerzeichen
  whatsappNumber: "436765517197",

  // Vorgefüllte WhatsApp Nachricht (URL-encoded)
  whatsappMessage:
    "Hallo ekdruck, ich interessiere mich für ein 3D-Druck Projekt und hätte gerne ein unverbindliches Angebot.",

  // E-Mail
  email: "office@ek-druck.at",

  // Cal.com Booking-URL (Standard 15-Min Beratung)
  calBookingUrl: "https://cal.com/kevin-eppensteiner-nktcfi/15min",

  // Antwortzeit-Versprechen (für Conversion-Texte)
  responsePromise: "Antwort in 6 Stunden",
} as const;

/**
 * Erzeugt einen WhatsApp-Link mit optional kontextspezifischer Nachricht.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage ?? CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

/**
 * Erzeugt einen mailto:-Link mit optionalem Subject + Body.
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${CONTACT.email}${qs ? `?${qs}` : ""}`;
}

/**
 * Cal.com Embed-URL (kann Inline gerendert werden).
 */
export function getCalEmbedUrl(): string {
  return CONTACT.calBookingUrl;
}
