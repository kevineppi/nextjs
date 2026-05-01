'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Clock, Star, MessageCircle } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badge?: string;
  urgencyText?: string;
  /** card = weißer Hintergrund mit runder Umrahmung (Standard). filled = voller Primär-Hintergrund. */
  variant?: "card" | "filled";
  legalNote?: string;
}

const CTASection = ({
  headline = "Projekt anfragen – Angebot in 6 Stunden",
  subline = "Schicken Sie uns Ihre CAD-Datei oder beschreiben Sie Ihr Vorhaben. Wir melden uns persönlich mit einem verbindlichen Angebot – kostenlos und unverbindlich.",
  ctaLabel = "Jetzt kostenlos anfragen",
  ctaHref = "/kontakt",
  secondaryLabel = "Referenzen ansehen",
  secondaryHref = "/referenzen",
  badge = "Kostenlos & unverbindlich",
  urgencyText = "⚡ Express 24h für dringende Termine möglich",
  variant = "card",
  legalNote,
}: CTASectionProps) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle page-level background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in">
          {variant === "card" ? (
            /* ── Card variant ─────────────────────────────────────── */
            <div className="max-w-3xl mx-auto bg-background border border-border rounded-3xl shadow-xl px-8 py-14 md:px-16 md:py-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {badge}
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                {headline}
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                {subline}
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Antwort in unter 6h</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span>5.0 Google Bewertung</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>Persönliche Beratung</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="hero" className="text-base w-full sm:w-auto px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  <Link href={ctaHref} onClick={() => window.scrollTo(0, 0)}>
                    {ctaLabel}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base w-full sm:w-auto px-8 border-2 hover:bg-muted/50">
                  <Link href={secondaryHref} onClick={() => window.scrollTo(0, 0)}>
                    {secondaryLabel}
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">{urgencyText}</p>
              {legalNote && (
                <p className="mt-3 text-xs text-muted-foreground/60">{legalNote}</p>
              )}
            </div>
          ) : (
            /* ── Filled variant (legacy) ──────────────────────────── */
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {badge}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{headline}</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">{subline}</p>
              <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /><span>Antwort in unter 6h</span></div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5">
                  <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
                  <span>5.0 Google Bewertung</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-primary" /><span>Persönliche Beratung</span></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" variant="hero" className="text-base w-full sm:w-auto px-8 shadow-lg shadow-primary/25">
                  <Link href={ctaHref} onClick={() => window.scrollTo(0, 0)}>{ctaLabel}<ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base w-full sm:w-auto px-8 border-2 hover:bg-muted/50">
                  <Link href={secondaryHref} onClick={() => window.scrollTo(0, 0)}>{secondaryLabel}</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">{urgencyText}</p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
