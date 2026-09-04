/**
 * Tracking-Konfiguration · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Zentrale Schalter für Webanalyse (Microsoft Clarity) und
 * Google-Ads-Conversion-Messung.
 *
 * WICHTIG: Solange die IDs leer sind, erscheint KEIN Cookie-Banner
 * und es wird KEIN Tracking-Script geladen. Die Dienste laufen
 * grundsätzlich erst nach aktiver Einwilligung (Cookie-Banner).
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
  clarityProjectId: "",
  googleAdsId: "",
  googleAdsLeadLabel: "",
} as const;

/** Mindestens ein Dienst konfiguriert? Steuert, ob das Cookie-Banner überhaupt erscheint. */
export const trackingConfigured = (): boolean =>
  Boolean(TRACKING.clarityProjectId || TRACKING.googleAdsId);
