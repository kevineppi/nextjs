'use client'

import Link from 'next/link'
import { ArrowRight, Calculator, Star, Clock, MapPin, Activity } from 'lucide-react'
import { BRAND } from '@/data/brandVoice'

/**
 * FunnelHero — Asymmetrisches Home-Hero mit EINER primären Mission
 * ──────────────────────────────────────────────────────────────────
 *
 * Verändert: statt Stack mit 5 Button-Optionen → asymmetrischer Split
 * (60/40), links das Statement + EINE primäre CTA + 1 Secondary,
 * rechts ein Live-Werkstatt-Snapshot mit Stats.
 *
 * Mission der Home: User → Kostenrechner (STL hochladen) als primäre
 * Conversion. Alles andere ist sekundär.
 *
 * Design-Quelle:
 *   - StoryBrand: "If you confuse, you lose"
 *   - ConversionXL: Single-Mission-Pages
 *   - Refactoring UI: Visual Hierarchy primary/secondary/tertiary
 */
const FunnelHero = () => {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden"
      aria-label="Hero — 3D-Druck Österreich"
    >
      {/* Hintergrund-Akzent — subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ═══ LINKS — Statement + EINE primäre CTA ═══ */}
          <div className="lg:col-span-7">
            {/* Eyebrow mit Live-Status-Pill */}
            <div className="flex items-center gap-3 mb-6">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                3D-Druck Österreich · seit {BRAND.yearFounded}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                <Activity className="w-2.5 h-2.5 animate-pulse" />
                Drucker laufen
              </span>
            </div>

            {/* H1 — EIN starkes Statement */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-6">
              Ihr Produkt zu groß<br />
              für den Messestand?<br />
              <span className="text-primary">Wir drucken es in 24h.</span>
            </h1>

            {/* Subline — sehr kurz */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Maßstabsgetreue Industriemodelle aus dem 3D-Druck. STL hochladen,
              Festpreisangebot binnen 6 Stunden, Lieferung morgen — direkt aus Gunskirchen, OÖ.
            </p>

            {/* PRIMARY CTA — visuell dominant + SECONDARY als Text-Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link
                href="/kostenrechner"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-8 py-5 font-bold text-base md:text-lg hover:opacity-90 transition-all shadow-[0_6px_20px_-6px_rgba(59,155,110,0.4)] hover:shadow-[0_10px_30px_-6px_rgba(59,155,110,0.5)] hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                STL hochladen — Preis in 60 Sek.
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/branchen"
                className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-primary transition-colors group"
              >
                Branche auswählen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust-Strip — kompakt, dicht */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-bold">{BRAND.reviews.rating}</span>
                <span className="text-xs text-muted-foreground">· {BRAND.reviews.count} Google-Reviews</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-bold">6h Angebot</span>
                <span className="text-xs text-muted-foreground">verbindlich</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-bold">{BRAND.location.split(',')[0]}</span>
                <span className="text-xs text-muted-foreground">Made in Austria</span>
              </div>
            </div>
          </div>

          {/* ═══ RECHTS — Werkstatt-Snapshot mit Live-Stats ═══ */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Mono-Number-Marker — wie Magazin-Cover-Issue */}
              <div className="absolute -top-2 -left-2 z-10 bg-background border-2 border-foreground rounded-full px-4 py-2">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.25em]">
                  Issue {String(new Date().getMonth() + 1).padStart(2, '0')}/26
                </p>
              </div>

              {/* Mein-Werkstatt-Card */}
              <div className="bg-foreground text-background rounded-3xl p-8 md:p-10 relative overflow-hidden">
                {/* Akzent-Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                    Live aus der Werkstatt
                  </p>

                  <p className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-8">
                    "Bei mir landet Ihre Anfrage direkt — kein Vertriebsfilter, keine Hierarchie."
                  </p>

                  {/* Avatar + Signatur */}
                  <div className="flex items-center gap-3 mb-8 pb-8 border-b border-background/10">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="font-bold text-lg">K</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">{BRAND.founderName}</p>
                      <p className="mono text-[10px] uppercase tracking-[0.2em] text-background/60">
                        Inhaber {BRAND.companyName}
                      </p>
                    </div>
                  </div>

                  {/* Mini-Stats — vertical stack */}
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <span className="mono text-xs uppercase tracking-wider text-background/60">FDM-Drucker</span>
                      <span className="font-mono text-2xl font-bold text-primary">{BRAND.printers.fdm}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="mono text-xs uppercase tracking-wider text-background/60">Express möglich</span>
                      <span className="font-mono text-2xl font-bold text-primary">24h</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="mono text-xs uppercase tracking-wider text-background/60">ab Preis</span>
                      <span className="font-mono text-2xl font-bold text-primary">€20</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating-Trust-Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 md:p-5 shadow-xl rotate-[-5deg] hover:rotate-0 transition-transform">
                <div className="text-center">
                  <p className="font-mono text-xl md:text-2xl font-bold leading-none">★{BRAND.reviews.rating}</p>
                  <p className="mono text-[8px] uppercase tracking-[0.25em] mt-1">
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunnelHero
