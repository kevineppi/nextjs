'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, X, Calendar, MessageCircle } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contactConfig";
import { trackContactClick } from "@/lib/tracking";

interface StickyCTAProps {
  regionName?: string;
  deliveryTime?: string;
  /** Kontext für vorgefüllte WhatsApp-Nachricht (z. B. "Messemodell Wien") */
  context?: string;
}

const StickyCTA = ({ regionName, deliveryTime, context }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600 && !isDismissed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  const headline = regionName
    ? `3D-Druck für ${regionName}`
    : "Direkt starten – Sie wählen den Weg";

  const subline = deliveryTime
    ? `${deliveryTime} Lieferzeit · Express 24h möglich`
    : "Anrufen · WhatsApp · Termin · Anfrage – Antwort in 6h";

  const waMsg = context
    ? `Hallo ekdruck, ich hätte eine Anfrage zu: ${context}.`
    : undefined;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md border-t border-border/60" />

      <div className="container mx-auto px-3 md:px-4 py-3 relative">
        <div className="flex items-center justify-between gap-3 max-w-6xl mx-auto">
          {/* Left: Headline (hidden on small screens to save space for CTAs) */}
          <div className="hidden md:flex items-center gap-3 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center shrink-0 flex">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-sm truncate">{headline}</p>
              <p className="text-xs text-muted-foreground truncate">{subline}</p>
            </div>
          </div>

          {/* Mobile: Compact label */}
          <div className="flex md:hidden items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <p className="font-bold text-xs truncate">Direkt kontakt</p>
          </div>

          {/* Multi-Channel Action Buttons */}
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            {/* Phone */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 px-2 md:px-3 hover:bg-primary/10"
              title="Anrufen"
            >
              <a
                href={`tel:${CONTACT.phone}`}
                aria-label="Anrufen"
                onClick={() => trackContactClick("phone", { source: "sticky_cta", context })}
              >
                <Phone className="w-4 h-4 md:mr-1.5" />
                <span className="hidden md:inline">Anrufen</span>
              </a>
            </Button>

            {/* WhatsApp */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 px-2 md:px-3 hover:bg-[#25D366]/10 hover:text-[#25D366]"
              title="WhatsApp"
            >
              <a
                href={getWhatsAppUrl(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat starten"
                onClick={() => trackContactClick("whatsapp", { source: "sticky_cta", context })}
              >
                <MessageCircle className="w-4 h-4 md:mr-1.5" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
            </Button>

            {/* Cal.com Termin */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 px-2 md:px-3 hover:bg-primary/10"
              title="Termin buchen"
            >
              <a
                href={CONTACT.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="15-Minuten Termin buchen"
                onClick={() => trackContactClick("calcom", { source: "sticky_cta", context })}
              >
                <Calendar className="w-4 h-4 md:mr-1.5" />
                <span className="hidden lg:inline">Termin</span>
              </a>
            </Button>

            {/* Primary: Anfrage */}
            <Button asChild size="sm" variant="cta" className="group rounded-xl h-9">
              <Link href="/kontakt"
                onClick={() => trackContactClick("form", { source: "sticky_cta", context })}
              >
                <span className="hidden sm:inline">Anfrage</span>
                <span className="sm:hidden">Anfragen</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>

            {/* Dismiss */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0 hover:bg-destructive/10 hover:text-destructive"
              onClick={() => setIsDismissed(true)}
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
