'use client'

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Sparkles, Layers, Building2, Presentation, Building, Calculator, MessageCircle, Calendar, Phone, BookOpen, FlaskConical } from "lucide-react";
import { CONTACT, getWhatsAppUrl } from "@/lib/contactConfig";
import { trackContactClick } from "@/lib/tracking";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png" 
                alt="ekdruck e.U. - 3D-Druck Oberösterreich Logo" 
                className="h-12 md:h-16 w-auto max-w-[180px] sm:max-w-none"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={12} className="w-[520px] p-4 bg-background border border-border/50 shadow-2xl z-[110] animate-scale-in">
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {/* Linke Spalte - Services */}
                  <div className="space-y-0.5">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Services</div>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/prototypen" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Layers className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Prototypen</div>
                          <div className="text-xs text-muted-foreground">Rapid Prototyping ab €20</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/einzelanfertigungen" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Einzelanfertigungen</div>
                          <div className="text-xs text-muted-foreground">Unikate & Kunstobjekte</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/3d-druck-materialien" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <FlaskConical className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Materialien</div>
                          <div className="text-xs text-muted-foreground">PLA, PETG, ABS & mehr</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/ratgeber" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Ratgeber</div>
                          <div className="text-xs text-muted-foreground">Guides & Fachwissen</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/referenzen" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Referenzen & Projekte</div>
                          <div className="text-xs text-muted-foreground">Erfolgreiche Kundenprojekte</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                  
                  {/* Rechte Spalte - Zielgruppen */}
                  <div className="space-y-0.5">
                    <div className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Zielgruppen</div>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/architekturmodelle" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Building2 className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Architekturmodelle</div>
                          <div className="text-xs text-muted-foreground">Für Architekten & Planer</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/architekturmodelle-abo" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer border border-primary/20 bg-primary/5">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-200">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-primary flex items-center gap-1.5">
                            Architektur-Flatrate
                            <span className="text-[9px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">NEU</span>
                          </div>
                          <div className="text-xs text-muted-foreground">Ab €199/Monat · Erstes Modell gratis</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/messemodelle" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Presentation className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Messemodelle</div>
                          <div className="text-xs text-muted-foreground">Express 24h für Events</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="p-0 focus:bg-transparent">
                      <Link href="/firmenkunden" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0 transition-all duration-200 ease-out group cursor-pointer">
                        <div className="flex-shrink-0 w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                          <Building className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Firmenkunden</div>
                          <div className="text-xs text-muted-foreground">B2B Projekte & Aufträge</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/kostenrechner" className="flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
              <Calculator className="h-4 w-4" />
              Rechner
            </Link>
            <Link href="/ueber-uns" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">Über uns</Link>

            {/* Quick Contact Icons */}
            <div className="flex items-center gap-1 ml-2 pl-3 border-l border-border/50">
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

            <Button variant="hero" size="sm" className="ml-1 hover:scale-105 transition-transform duration-300 text-xs md:text-base px-2 md:px-6 py-1 md:py-2" asChild>
              <Link href="/kontakt">Angebot</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in max-h-[80vh] overflow-y-auto">
            {/* Services Section */}
            <div className="mb-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">Services</div>
              <div className="grid grid-cols-2 gap-1">
                <Link href="/prototypen" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Layers className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Prototypen</span>
                </Link>
                <Link href="/einzelanfertigungen" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Einzelanfertigungen</span>
                </Link>
                <Link href="/3d-druck-materialien" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <FlaskConical className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Materialien</span>
                </Link>
                <Link href="/ratgeber" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Ratgeber</span>
                </Link>
                <Link href="/referenzen" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Referenzen</span>
                </Link>
              </div>
            </div>

            {/* Zielgruppen Section */}
            <div className="mb-4">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 py-2">Zielgruppen</div>
              <div className="grid grid-cols-2 gap-1">
                <Link href="/architekturmodelle" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Architektur</span>
                </Link>
                <Link href="/messemodelle" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Presentation className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Messe</span>
                </Link>
                <Link href="/firmenkunden" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Building className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate">Firmenkunden</span>
                </Link>
                <Link href="/architekturmodelle-abo" 
                  className="flex items-center gap-2 p-3 text-foreground rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 active:bg-primary/20 active:scale-[0.98] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium truncate text-primary">Flatrate NEU</span>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-border/50 pt-4 space-y-2">
              <div className="grid grid-cols-3 gap-2 mb-2">
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

              <Link href="/kostenrechner"
                className="flex items-center gap-3 p-3 bg-primary/5 text-foreground rounded-xl hover:bg-primary/10 active:scale-[0.98] transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Calculator className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Kostenrechner</div>
                  <div className="text-xs text-muted-foreground">Preis sofort berechnen</div>
                </div>
              </Link>
            </div>

            <Button
              variant="hero"
              size="sm"
              className="w-full mt-4"
              asChild
            >
              <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                Angebot erhalten
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
