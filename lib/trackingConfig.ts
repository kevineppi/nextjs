/**
 * Tracking-Konfiguration · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Zentrale Schalter für Webanalyse (Microsoft Clarity) und
 * Google-Ads-Conversion-Messung.
 *
 * WICHTIG: Solange die IDs leer sind, wird KEIN Tracking-Script
 * geladen. Modell: Opt-out — die Dienste laufen standardmäßig, der
 * Widerspruchs-Schalter sitzt in der Datenschutzerklärung (Abschnitt 7).
 *
 * IDs eintragen:
 * - clarityProjectId: clarity.microsoft.com → Projekt anlegen →
 *   Settings → "Project ID" (kurzer Code, z. B. "abcd1234ef")
 * - googleAdsId: Google Ads → Zielvorhaben → Conversions →
 *   Tag einrichten → Format "AW-123456789"
 * - googleAdsLeadLabel: Label der Conversion-Aktion "Anfrage gesendet"
 *   (der Teil nach dem Schrägstrich im send_to-Wert)
 *
 * Diese IDs sind öffentlich (jede Website liefert sie an den Browser
 * aus) — sie dürfen im public Repo stehen.
 */

export const TRACKING = {
  clarityProjectId: "ycwud20nqh", // clarity.microsoft.com · Projekt "ek-druck.at" (eingetragen 04.09.2026)
  googleAdsId: "AW-16570583366", // Google Ads · Conversion-Aktion "Lead-Formular senden" (eingetragen 04.09.2026)
  googleAdsLeadLabel: "T46fCJPHnO4cEMaSvN09", // Label aus dem Ereignis-Snippet derselben Aktion
  openaiPixelId: "QhSBiwu9mCuH7w2m9FFyEL", // ads.openai.com · Datenquelle "Formular gesendet" (Testkampagne ab 05.09.2026)
} as const;

/** Mindestens ein Dienst konfiguriert? Steuert, ob das Cookie-Banner überhaupt erscheint. */
export const trackingConfigured = (): boolean =>
  Boolean(TRACKING.clarityProjectId || TRACKING.googleAdsId);
