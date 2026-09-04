'use client'

/**
 * Tracking-Loader (Opt-out-Modell) · ekdruck
 * ──────────────────────────────────────────────────────────────────
 *
 * Kevin-Entscheidung 04.09.2026: kein Cookie-Banner. Clarity (und
 * später die Google-Ads-Messung) laden direkt beim Seitenaufruf,
 * AUSSER der Besucher hat auf der Datenschutzseite widersprochen
 * (Opt-out-Schalter unten, gespeichert in localStorage).
 *
 * Rechtsgrundlage laut Datenschutzerklärung: Art. 6 Abs. 1 lit. f
 * DSGVO (berechtigtes Interesse) mit Widerspruchsrecht nach Art. 21.
 * Frühere Banner-Entscheidungen bleiben respektiert: Wer damals
 * "Ablehnen" geklickt hat, bleibt ausgenommen (gleicher Storage-Key).
 */

import { useEffect, useState } from "react";
import { getStoredConsent, loadTrackingScripts, setStoredConsent } from "@/lib/consent";
import { trackingConfigured } from "@/lib/trackingConfig";

const TrackingLoader = () => {
  useEffect(() => {
    if (!trackingConfigured()) return;
    if (getStoredConsent() !== "denied") loadTrackingScripts();
  }, []);
  return null;
};

/**
 * Widerspruchs-Schalter für die Datenschutzerklärung (Art. 21 DSGVO).
 * Zeigt den Status auf diesem Gerät und schaltet die Analyse ab/an.
 */
export const AnalyticsOptOut = () => {
  const [status, setStatus] = useState<"active" | "optout" | null>(null);

  useEffect(() => {
    if (!trackingConfigured()) return;
    setStatus(getStoredConsent() === "denied" ? "optout" : "active");
  }, []);

  if (status === null) return null;

  const toggle = () => {
    if (status === "active") {
      setStoredConsent("denied");
      setStatus("optout");
      // Reload, damit bereits geladene Analyse-Scripts sicher stoppen
      window.location.reload();
    } else {
      setStoredConsent("granted");
      setStatus("active");
      loadTrackingScripts();
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        Status auf diesem Gerät:{" "}
        <strong className="text-foreground">
          {status === "active" ? "Analyse aktiv" : "Analyse deaktiviert"}
        </strong>
      </p>
      <button
        type="button"
        onClick={toggle}
        className="rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
      >
        {status === "active" ? "Analyse deaktivieren" : "Analyse wieder aktivieren"}
      </button>
    </div>
  );
};

export default TrackingLoader;
