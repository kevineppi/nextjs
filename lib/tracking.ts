/**
 * GTM / DataLayer Conversion-Tracking Helper
 *
 * Sendet strukturierte Events für jeden Kontakt-Kanal an den Google Tag Manager.
 * Im GTM können diese Events als Conversions konfiguriert werden, um zu messen,
 * welcher Kanal (Telefon / WhatsApp / Cal.com / Formular) am besten konvertiert.
 *
 * Verwendung:
 *   import { trackContactClick } from "@/lib/tracking";
 *   onClick={() => trackContactClick("phone", "header")}
 */

export type ContactChannel = "phone" | "whatsapp" | "calcom" | "form" | "email";

export interface TrackingContext {
  /** Wo wurde der Click ausgelöst? z. B. "header", "sticky_cta", "quick_contact_bar", "footer" */
  source?: string;
  /** Optional: Zusatzkontext (z. B. Region oder Service) */
  context?: string;
}

/**
 * Pushed ein Conversion-Event in den dataLayer.
 * GTM Trigger: Custom Event = "contact_channel_click"
 */
export function trackContactClick(channel: ContactChannel, ctx: TrackingContext = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "contact_channel_click",
    contact_channel: channel,
    contact_source: ctx.source ?? "unknown",
    contact_context: ctx.context ?? null,
    timestamp: new Date().toISOString(),
  });
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log("[tracking] contact_channel_click", { channel, ...ctx });
  }
}
