'use client'

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CONTACT } from "@/lib/contactConfig";

interface CalEmbedProps {
  /** z. B. "kevin-eppensteiner-nktcfi/15min" – wird automatisch aus contactConfig gelesen */
  calLink?: string;
  /** Höhe des Embeds (default: responsive). */
  height?: string;
}

/**
 * Cal.com Inline-Embed.
 * Ermöglicht Termin-Buchung direkt auf der Seite, ohne Sprung zu cal.com.
 * Höhere Conversion-Rate vs. externer Link.
 */
const CalEmbed = ({ calLink, height = "640px" }: CalEmbedProps) => {
  // Extrahiert "kevin-eppensteiner-nktcfi/15min" aus voller URL
  const link = calLink ?? CONTACT.calBookingUrl.replace(/^https?:\/\/cal\.com\//, "");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "ekdruck-15min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#16a34a" },
          dark: { "cal-brand": "#16a34a" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
      style={{ minHeight: height }}
    >
      <Cal
        namespace="ekdruck-15min"
        calLink={link}
        style={{ width: "100%", height: "100%", minHeight: height, overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default CalEmbed;
