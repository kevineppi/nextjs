/**
 * Consent-Verwaltung + Script-Loader · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Modell seit 04.09.2026 (Kevin-Entscheidung): Opt-out statt Banner.
 * Die Scripts laden standardmäßig (components/TrackingLoader.tsx),
 * AUSSER im localStorage liegt "denied" — gesetzt über den
 * Widerspruchs-Schalter in der Datenschutzerklärung (Art. 21 DSGVO,
 * Rechtsgrundlage lit. f). Frühere Banner-Ablehnungen bleiben wirksam.
 *
 * Geladene Dienste bei Zustimmung (nur wenn in trackingConfig.ts
 * konfiguriert):
 * - Microsoft Clarity: Session-Aufzeichnungen, Heatmaps. Eingaben in
 *   Formularfelder werden von Clarity standardmäßig maskiert.
 * - Google Ads (gtag.js): reine Conversion-Messung. ad_personalization
 *   bleibt bewusst auf "denied" — kein Re-Targeting, keine
 *   personalisierte Werbung. So steht es auch in der
 *   Datenschutzerklärung; nicht ändern ohne deren Anpassung.
 */

import { TRACKING } from "@/lib/trackingConfig";

const STORAGE_KEY = "ekdruck_consent_v1";

export type ConsentValue = "granted" | "denied";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value?: string };
    return parsed.value === "granted" || parsed.value === "denied" ? parsed.value : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }));
  } catch {
    /* localStorage gesperrt (z. B. Privatmodus mit Restriktionen) — dann bleibt es bei Session-Verhalten */
  }
}

let scriptsLoaded = false;

/**
 * Lädt Clarity und gtag.js. Idempotent — mehrfacher Aufruf lädt nichts doppelt.
 * Wird vom TrackingLoader aufgerufen, sofern kein Opt-out ("denied") vorliegt.
 */
export function loadTrackingScripts(): void {
  if (typeof window === "undefined" || scriptsLoaded) return;
  scriptsLoaded = true;
  const w = window as any;

  // ── Microsoft Clarity ──
  if (TRACKING.clarityProjectId) {
    w.clarity =
      w.clarity ||
      function (...args: unknown[]) {
        (w.clarity.q = w.clarity.q || []).push(args);
      };
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${TRACKING.clarityProjectId}`;
    document.head.appendChild(s);
  }

  // ── Google Ads Conversion (gtag.js) ──
  if (TRACKING.googleAdsId) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING.googleAdsId}`;
    document.head.appendChild(s);

    w.dataLayer = w.dataLayer || [];
    w.gtag =
      w.gtag ||
      function gtag() {
        // gtag erwartet das arguments-Objekt, keine Spread-Args
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer.push(arguments);
      };
    // Consent Mode v2: Nutzer hat aktiv zugestimmt, bevor dieser Code läuft.
    // ad_personalization bleibt denied → keine Remarketing-Listen.
    w.gtag("consent", "default", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "denied",
      analytics_storage: "granted",
    });
    w.gtag("js", new Date());
    w.gtag("config", TRACKING.googleAdsId);
  }
}

/**
 * Meldet eine erfolgreiche Anfrage (Kostenrechner oder Kontaktformular).
 * Feuert nur, wenn die Scripts geladen sind — also nur mit Einwilligung.
 * Ohne Einwilligung ist der Aufruf ein No-op.
 */
export function trackLeadConversion(source: "kostenrechner" | "kontaktformular"): void {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.clarity === "function") {
    w.clarity("event", `lead_${source}`);
    // Lead-Sessions bei Clarity priorisiert aufzeichnen
    w.clarity("upgrade", "lead");
  }
  if (typeof w.gtag === "function" && TRACKING.googleAdsId && TRACKING.googleAdsLeadLabel) {
    w.gtag("event", "conversion", {
      send_to: `${TRACKING.googleAdsId}/${TRACKING.googleAdsLeadLabel}`,
    });
  }
}
