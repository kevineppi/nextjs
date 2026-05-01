'use client'

import { Phone, MessageCircle, Calendar, Mail, ArrowRight, Clock, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTACT, getWhatsAppUrl } from "@/lib/contactConfig";
import { trackContactClick, type ContactChannel } from "@/lib/tracking";

interface QuickContactBarProps {
  /** Kontext für vorgefüllte WhatsApp-Nachricht, z. B. "Messemodell". */
  context?: string;
  /** Heading-Text (default für allgemeine Conversion). */
  title?: string;
  /** Subline. */
  subtitle?: string;
  /** Variante: "section" = volle Section mit Hintergrund, "card" = nur Card. */
  variant?: "section" | "card";
}

/**
 * Premium B2B Multi-Channel Kontakt-Block.
 * Senkt Conversion-Hürde durch 4 parallele Kontaktwege:
 *  1. Sofort anrufen (für eilige B2B)
 *  2. WhatsApp (für jüngere Architekten/Designer)
 *  3. 15-Min-Termin buchen (Cal.com)
 *  4. Detail-Anfrage (Formular)
 */
const QuickContactBar = ({
  context = "Ihr Projekt",
  title = "Wie möchten Sie starten?",
  subtitle = "Wählen Sie den schnellsten Weg – wir antworten persönlich, kein Callcenter.",
  variant = "section",
}: QuickContactBarProps) => {
  const waMessage = `Hallo ekdruck, ich hätte eine Anfrage zu: ${context}. Können wir kurz sprechen?`;

  const channels: Array<{
    icon: typeof Phone;
    label: string;
    sublabel: string;
    href: string;
    badge: string;
    external: boolean;
    primary: boolean;
    channel: ContactChannel;
  }> = [
    {
      icon: Phone,
      label: "Sofort anrufen",
      sublabel: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
      badge: "Mo–Fr 8–18 Uhr",
      external: true,
      primary: true,
      channel: "phone",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      sublabel: "Foto/Skizze direkt senden",
      href: getWhatsAppUrl(waMessage),
      badge: "Antwort < 2h",
      external: true,
      primary: false,
      channel: "whatsapp",
    },
    {
      icon: Calendar,
      label: "15-Min Termin",
      sublabel: "Beratungsgespräch buchen",
      href: CONTACT.calBookingUrl,
      badge: "Online verfügbar",
      external: true,
      primary: false,
      channel: "calcom",
    },
    {
      icon: Mail,
      label: "Detail-Anfrage",
      sublabel: "Formular mit Datei-Upload",
      href: "/kontakt",
      badge: CONTACT.responsePromise,
      external: false,
      primary: false,
      channel: "form",
    },
  ];

  const Wrapper = variant === "section" ? "section" : "div";

  return (
    <Wrapper
      className={
        variant === "section"
          ? "py-16 md:py-24 bg-muted/30 border-y border-border"
          : "py-8"
      }
      aria-label="Schneller Kontakt"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
              Direkt zum Angebot
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* 4-Channel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {channels.map((c) => {
              const Inner = (
                <div
                  className={`group relative h-full rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    c.primary
                      ? "border-primary bg-primary/5 hover:border-primary hover:shadow-primary/20"
                      : "border-border bg-background hover:border-primary/40"
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold mono uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    <Check className="w-2.5 h-2.5 text-primary" />
                    {c.badge}
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                      c.primary ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <c.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-lg mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {c.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{c.sublabel}</p>

                  <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Starten <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              );

              return c.external ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => trackContactClick(c.channel, { source: "quick_contact_bar", context })}
                  className="block h-full"
                >
                  {Inner}
                </a>
              ) : (
                <Link
                  key={c.label}
                  href={c.href}
                  onClick={() => trackContactClick(c.channel, { source: "quick_contact_bar", context })}
                  className="block h-full"
                >
                  {Inner}
                </Link>
              );
            })}
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span>Antwort innerhalb von 6 Stunden (Mo–Fr)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" />
              <span>Kein Callcenter – direkter Kontakt zum Inhaber</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-primary" />
              <span>Kostenlos & unverbindlich</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuickContactBar;
