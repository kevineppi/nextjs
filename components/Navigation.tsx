'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Calendar, Phone, Calculator } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contactConfig";
import { trackContactClick } from "@/lib/tracking";

// 2026-07-04 (SEO v2 Task 3): flache 5-Punkt-Nav statt Mega-Menue.
// Kernleistungen direkt sichtbar, kein "Services"-Dropdown, in dem sie versteckt waren.
const NAV_LINKS = [
  { href: "/architekturmodelle", label: "Architekturmodelle" },
  { href: "/messemodelle", label: "Messemodelle & Exponate" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ratgeber", label: "Ratgeber" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png"
                alt="ekdruck e.U. - 3D-Druck Oberösterreich Logo"
                className="h-12 md:h-16 w-auto max-w-[180px] sm:max-w-none"
                width={180}
                height={64}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation, flach */}
          <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {l.label}
              </Link>
            ))}

            {/* Quick Contact Icons */}
            <div className="flex items-center gap-1 ml-1 pl-3 border-l border-border/50">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Chat"
                aria-label="WhatsApp Business"
                onClick={() => trackContactClick("whatsapp", { source: "header" })}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-foreground/70 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="15-Min Termin buchen"
                aria-label="Termin buchen"
                onClick={() => trackContactClick("calcom", { source: "header" })}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                title={CONTACT.phoneDisplay}
                aria-label="Anrufen"
                onClick={() => trackContactClick("phone", { source: "header" })}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <Button variant="hero" size="sm" className="ml-1 hover:scale-105 transition-transform duration-300 text-sm md:text-base px-4 md:px-6 py-2" asChild>
              <Link href="/kontakt">Angebot</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menü öffnen">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation, flach */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1 mt-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 text-foreground font-medium rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="border-t border-border/50 pt-4 mt-4 space-y-2">
              <Link
                href="/kostenrechner"
                className="flex items-center gap-3 p-3 bg-primary/5 text-foreground rounded-xl hover:bg-primary/10 active:scale-[0.98] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Calculator className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Kostenrechner</div>
                  <div className="text-xs text-muted-foreground">Preis sofort berechnen</div>
                </div>
              </Link>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex flex-col items-center gap-1 p-3 bg-primary/5 text-foreground rounded-xl hover:bg-primary/10 active:scale-[0.98] transition-all"
                  onClick={() => { trackContactClick("phone", { source: "mobile_nav" }); setIsOpen(false); }}
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-[11px] font-semibold">Anrufen</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-3 bg-[#25D366]/10 text-foreground rounded-xl hover:bg-[#25D366]/20 active:scale-[0.98] transition-all"
                  onClick={() => { trackContactClick("whatsapp", { source: "mobile_nav" }); setIsOpen(false); }}
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  <span className="text-[11px] font-semibold">WhatsApp</span>
                </a>
                <a
                  href={CONTACT.calBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 p-3 bg-primary/5 text-foreground rounded-xl hover:bg-primary/10 active:scale-[0.98] transition-all"
                  onClick={() => { trackContactClick("calcom", { source: "mobile_nav" }); setIsOpen(false); }}
                >
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-[11px] font-semibold">Termin</span>
                </a>
              </div>
            </div>

            <Button variant="hero" size="sm" className="w-full mt-4" asChild>
              <Link href="/kontakt" onClick={() => setIsOpen(false)}>Angebot erhalten</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
