'use client'

/**
 * Cookie-/Consent-Banner · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Erscheint nur, wenn (a) in lib/trackingConfig.ts mindestens ein
 * Dienst konfiguriert ist und (b) noch keine Entscheidung im
 * localStorage liegt. "Ablehnen" und "Zustimmen" sind gleichwertig —
 * bewusst kein Dark Pattern, das passt nicht zur Marke.
 *
 * Widerruf: Footer-Link (ConsentSettingsLink) öffnet das Banner
 * erneut. Wechsel von Zustimmung auf Ablehnung lädt die Seite neu,
 * damit bereits geladene Scripts sicher verschwinden.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_OPEN_EVENT,
  getStoredConsent,
  loadTrackingScripts,
  openConsentSettings,
  setStoredConsent,
} from "@/lib/consent";
import { trackingConfigured } from "@/lib/trackingConfig";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!trackingConfigured()) return;
    const stored = getStoredConsent();
    if (stored === "granted") loadTrackingScripts();
    if (stored === null) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setStoredConsent("granted");
    loadTrackingScripts();
    setVisible(false);
  };

  const decline = () => {
    const hadGranted = getStoredConsent() === "granted";
    setStoredConsent("denied");
    setVisible(false);
    // Wechsel von Ja auf Nein: Seite neu laden, damit geladene Scripts stoppen
    if (hadGranted) window.location.reload();
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:mx-0"
    >
      <p className="text-sm font-semibold mb-1.5">Kurz gefragt: dürfen wir mitschauen?</p>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        Mit Ihrer Zustimmung zeichnet Microsoft Clarity auf, wie Besucher die Seite bedienen
        (Klicks und Scrollen, Eingaben werden maskiert), und Google Ads misst, ob eine Anzeige zu
        einer Anfrage geführt hat. Kein Re-Targeting, keine personalisierte Werbung. Ohne Zustimmung
        wird nichts geladen. Details in der{" "}
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-foreground">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={decline}
          className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          Ablehnen
        </button>
        <button
          onClick={accept}
          className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Zustimmen
        </button>
      </div>
    </div>
  );
};

/** Footer-Link zum erneuten Öffnen des Banners (Widerruf, Art. 7 Abs. 3 DSGVO). */
export const ConsentSettingsLink = ({ className }: { className?: string }) => {
  if (!trackingConfigured()) return null;
  return (
    <button type="button" onClick={openConsentSettings} className={className}>
      Cookie-Einstellungen
    </button>
  );
};

export default ConsentBanner;
