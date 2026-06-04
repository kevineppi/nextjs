/**
 * Branchen-Übersicht — Premium-Page mit Hub-and-Spoke-Architektur
 * /branchen
 *
 * 2026-05-31: Komplett-Redesign der bisherigen 6-Cards-Übersicht.
 * Neue Premium-UX: animierte Hero-Stats, Branchen-Premium-Cards mit Multi-CTA,
 * Comparison-Section, Process-Visualization, Trust-Block.
 * Cross-Links zu allen Branchen-Spokes + Service-Pages + Cases.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Building2, Calculator, Star, Cog, Ship, Factory,
  Zap, Car, Lightbulb, TrendingUp, Award, Sparkles, Layers,
  CheckCircle2, Clock, Target, ShieldCheck, BookOpen, Wrench,
  Phone,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { branchen } from '@/data/branchenData'
import { buildDachAlternates, STANDARD_ROBOTS, breadcrumbSchema } from '@/lib/seo'

const TITLE =
  'Branchen-Lösungen — 3D-Druck Messemodelle für 6 Industrien | ekdruck'
const DESCRIPTION =
  '3D-gedruckte Messemodelle für Maschinenbau, Schiffbau, Energietechnik, Anlagenbau, Automotive, Elektrotechnik. Branchen-Guides, echte Cases, Festpreis in 6h. ★5,0'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/branchen'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/branchen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'ekdruck – Branchen-Messemodelle 6 Industrie-Cluster',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Branchen-Messemodelle ek-druck',
  description: DESCRIPTION,
  url: 'https://www.ek-druck.at/branchen',
  hasPart: branchen.map((b) => ({
    '@type': 'WebPage',
    name: b.h1,
    url: `https://www.ek-druck.at/branchen/${b.slug}`,
    about: b.primaryKeyword,
  })),
}

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Branchen', url: '/branchen' },
])

// ─────────────────────────────────────────────────────────────────
//   BRANCHEN-PREMIUM-CONFIG (Icon, Gradient, Hauptmessen, Tech-Specs)
// ─────────────────────────────────────────────────────────────────

const brancheConfig: Record<
  string,
  {
    Icon: React.ComponentType<{ className?: string }>
    gradient: string
    border: string
    bgIcon: string
    hauptmessen: string[]
    topProdukte: string[]
    massstab: string
    material: string
    leadIn: string
  }
> = {
  maschinenbau: {
    Icon: Cog,
    gradient: 'from-blue-500/10 to-cyan-500/5',
    border: 'group-hover:border-blue-500/40',
    bgIcon: 'bg-blue-500/10 text-blue-600',
    hauptmessen: ['EMO Hannover', 'AMB Stuttgart', 'Intec Leipzig'],
    topProdukte: ['CNC-Fräsen', 'Drehmaschinen', 'Spindel-Schnittmodelle', 'Bearbeitungszentren'],
    massstab: '1:8 bis 1:10',
    material: 'PETG + PA-CF',
    leadIn: 'Bewegliche Spindeln + Werkzeug-Wechsler als Eyecatcher',
  },
  schiffbau: {
    Icon: Ship,
    gradient: 'from-cyan-500/10 to-blue-500/5',
    border: 'group-hover:border-cyan-500/40',
    bgIcon: 'bg-cyan-500/10 text-cyan-600',
    hauptmessen: ['SMM Hamburg', 'Europort Rotterdam', 'Posidonia Athen'],
    topProdukte: ['Vollschiff-Modelle', 'Azimuth-Thruster', 'Schiffsantriebe', 'Propeller-Detail'],
    massstab: '1:50 bis 1:100',
    material: 'PLA + PETG',
    leadIn: 'Segmentierte Vollschiffe mit Magnetverbindungen',
  },
  energietechnik: {
    Icon: Zap,
    gradient: 'from-amber-500/10 to-yellow-500/5',
    border: 'group-hover:border-amber-500/40',
    bgIcon: 'bg-amber-500/10 text-amber-600',
    hauptmessen: ['E-world Essen', 'WindEnergy Hamburg', 'Hannover Messe'],
    topProdukte: ['MV-Schaltanlagen', 'Windturbinen', 'Trafostationen', 'PV-Landschaftsmodelle'],
    massstab: '1:25 bis 1:50',
    material: 'ABS + Polycarbonat-FR',
    leadIn: 'Klappbare Schaltschrank-Türen mit Sammelschienen-Innenbild',
  },
  anlagenbau: {
    Icon: Factory,
    gradient: 'from-emerald-500/10 to-teal-500/5',
    border: 'group-hover:border-emerald-500/40',
    bgIcon: 'bg-emerald-500/10 text-emerald-600',
    hauptmessen: ['Achema Frankfurt', 'POWTECH Nürnberg', 'IFAT München'],
    topProdukte: ['Verpackungsanlagen', 'Pumpen-Schnittmodelle', 'Reaktoren', 'Förderanlagen'],
    massstab: '1:10 bis 1:25',
    material: 'PETG + ABS',
    leadIn: 'Materialfluss-Codierung DIN 2403 + modulare Multi-Stand-Strategien',
  },
  automotive: {
    Icon: Car,
    gradient: 'from-rose-500/10 to-pink-500/5',
    border: 'group-hover:border-rose-500/40',
    bgIcon: 'bg-rose-500/10 text-rose-600',
    hauptmessen: ['IAA Mobility', 'Vienna Autoshow', 'Auto Zürich'],
    topProdukte: ['Karosserie-Schnitte', 'E-Antriebe', 'Konzeptfahrzeuge', 'ADAS-Demos'],
    massstab: '1:5 bis 1:10',
    material: 'ABS + Aceton-Glättung',
    leadIn: 'Spritzguss-Optik ohne Spritzguss-Tooling für Tier-1/2-Zulieferer',
  },
  elektrotechnik: {
    Icon: Lightbulb,
    gradient: 'from-violet-500/10 to-purple-500/5',
    border: 'group-hover:border-violet-500/40',
    bgIcon: 'bg-violet-500/10 text-violet-600',
    hauptmessen: ['Hannover Messe', 'electronica München', 'SPS Nürnberg'],
    topProdukte: ['Schaltschränke', 'Messwandler', 'Klemmenreihen-Details', 'Industrie-PCs'],
    massstab: '1:3 bis 1:5',
    material: 'PETG + ABS-Detail',
    leadIn: 'IEC 60446 Farbcodierung + Variantenvergleich am Stand',
  },
}

export default function BranchenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <Breadcrumbs items={[{ name: 'Branchen', url: '/branchen' }]} />

        {/* ═══════════════════════════════════════════════════════════
            HERO — animated stats, gradient background
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          {/* Decorative gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                <span>6 Industrie-Cluster · DACH-Spezialisierung</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6 animate-fade-in">
                Branchen-Lösungen für{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Industriegüter-Aussteller
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Maschinenbau, Schiffbau, Energietechnik, Anlagenbau, Automotive, Elektrotechnik —
                jede Branche hat eigene Maßstäbe, Materialien, Brennstoffklassen-Anforderungen
                und Leitmessen. Wir kennen sie alle. Pro Branche: Service-Übersicht, vollständiger
                Fach-Guide, echte Cases aus 2024-2026.
              </p>

              {/* Trust-Badge-Row */}
              <div className="flex flex-wrap gap-3 items-center mb-12">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">★5,0 · 31 Bewertungen</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">Made in Austria</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">NDA-konform</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">Festpreis in 6h</span>
                </div>
              </div>

              {/* Stats-Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold text-primary mb-1 transition-transform group-hover:scale-110 origin-left">
                    6
                  </div>
                  <div className="text-sm text-muted-foreground">Industrie-Cluster</div>
                </div>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold text-primary mb-1 transition-transform group-hover:scale-110 origin-left">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Leitmessen DACH+EU</div>
                </div>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold text-primary mb-1 transition-transform group-hover:scale-110 origin-left">
                    1:1—1:500
                  </div>
                  <div className="text-sm text-muted-foreground">Maßstabs-Range</div>
                </div>
                <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
                  <div className="text-4xl font-bold text-primary mb-1 transition-transform group-hover:scale-110 origin-left">
                    3-5 Wo
                  </div>
                  <div className="text-sm text-muted-foreground">Standard-Lieferzeit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            BRANCHEN-CLUSTER — Premium-Cards mit Multi-CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                  Wählen Sie Ihren Cluster
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  6 Branchen, 6 Showcase-Strategien
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jede Karte führt zur Branchen-Service-Übersicht UND zum vollständigen Fach-Guide
                  mit Brennstoffklasse, Maßstabsstrategie und ROI-Rechnungen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branchen.map((b, i) => {
                  const config = brancheConfig[b.slug]
                  if (!config) return null
                  const { Icon, gradient, border, bgIcon, hauptmessen, topProdukte, massstab, material, leadIn } = config

                  return (
                    <div
                      key={b.slug}
                      className={`group relative bg-card border-2 border-border ${border} rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
                    >
                      {/* Gradient overlay (subtle) */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                      {/* Card content */}
                      <div className="relative p-8">
                        {/* Header: Icon + Number */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-14 h-14 rounded-2xl ${bgIcon} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <div className="text-5xl font-bold text-primary/10 leading-none">
                            0{i + 1}
                          </div>
                        </div>

                        {/* Branche Name */}
                        <div className="mb-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                            Branche {String(i + 1).padStart(2, '0')}
                          </p>
                          <h3 className="font-bold text-2xl leading-tight mb-3 tracking-tight group-hover:text-primary transition-colors">
                            {b.primaryKeyword}
                          </h3>
                          <p className="text-sm text-muted-foreground italic leading-relaxed mb-5">
                            {leadIn}
                          </p>
                        </div>

                        {/* Hauptmessen Badges */}
                        <div className="mb-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Leitmessen
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {hauptmessen.map((m) => (
                              <span
                                key={m}
                                className="text-xs px-2.5 py-1 rounded-md bg-muted/60 border border-border font-medium"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Top Produkte */}
                        <div className="mb-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Typische Showcases
                          </p>
                          <ul className="space-y-1.5">
                            {topProdukte.map((p) => (
                              <li key={p} className="text-sm flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech-Specs Inline */}
                        <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-border">
                          <div>
                            <div className="text-xs text-muted-foreground mb-0.5">Maßstab</div>
                            <div className="text-sm font-bold">{massstab}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-0.5">Material</div>
                            <div className="text-sm font-bold">{material}</div>
                          </div>
                        </div>

                        {/* Multi-CTA */}
                        <div className="space-y-2">
                          <Link
                            href={`/ratgeber/messemodell-${b.slug}`}
                            className="group/cta flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm transition-all hover:gap-3"
                          >
                            <span className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              Vollständiger Guide
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                          </Link>
                          <Link
                            href={`/branchen/${b.slug}`}
                            className="group/cta flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 border-border hover:border-primary/40 font-bold text-sm transition-all"
                          >
                            <span className="flex items-center gap-2">
                              <Wrench className="w-4 h-4" />
                              Service-Übersicht
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground transition-transform group-hover/cta:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            COMPARISON — wir vs klassische Modellbauer
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                  Warum 3D-Druck statt klassischer Modellbau
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Der Unterschied in 4 Dimensionen
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-border rounded-3xl p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider mb-4">
                    Klassischer Modellbau
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">12-22 Wochen</div>
                        <div className="text-sm text-muted-foreground">Lieferzeit standardmäßig</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">€15.000-60.000</div>
                        <div className="text-sm text-muted-foreground">Preisbereich für Standardmodelle</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Handarbeit + Vakuumform</div>
                        <div className="text-sm text-muted-foreground">Iterations-Kosten hoch</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Premium-Glasoptik</div>
                        <div className="text-sm text-muted-foreground">Acryl-Klarsicht möglich</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
                    ekdruck
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    3D-Druck Premium
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">3-5 Wochen</div>
                        <div className="text-sm text-muted-foreground">Standard-Lieferzeit, Express 2-3 Wochen</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">€3.000-18.000</div>
                        <div className="text-sm text-muted-foreground">Standardmodelle, Premium bis €25k</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">CAD-direkt + ABS+Aceton-Glättung</div>
                        <div className="text-sm text-muted-foreground">Iterationen in 10-15 Werktagen</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Spritzguss-Optik durch Aceton-Glättung</div>
                        <div className="text-sm text-muted-foreground">2K-Premium-Lack mit Klarlack-Versiegelung</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-8 text-sm leading-relaxed max-w-3xl mx-auto">
                Klassische Modellbauer bleiben überlegen bei Acryl-Klarsicht-Komponenten und absoluten
                Hochglanz-Premium-Yachten. Für 95% aller Industrie-Showcase-Anwendungen liefert 3D-Druck
                bei 1/3 der Kosten und 1/4 der Zeit ein vergleichbares Ergebnis.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PROCESS — Wie wir arbeiten (5 Schritte)
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                  Vom CAD zum Stand-Eyecatcher
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                  Unser Prozess in 5 Schritten
                </h2>
              </div>

              <div className="grid md:grid-cols-5 gap-4 relative">
                {/* Connecting line decoration (desktop only) */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10" />

                {[
                  {
                    step: '01',
                    title: 'Anfrage + NDA',
                    desc: 'CAD-Übergabe verschlüsselt. NDA mit vertraglicher Datenlöschung. Festpreis-Angebot binnen 6h.',
                    Icon: Phone,
                  },
                  {
                    step: '02',
                    title: 'Konstruktions-Review',
                    desc: 'Maßstab-Bestätigung, Material-Wahl, Brennstoffklassen-Anforderung, Lackier-Schema.',
                    Icon: BookOpen,
                  },
                  {
                    step: '03',
                    title: 'Druck-Phase',
                    desc: 'Parallel-Druck auf 3 Industriedruckern (2× Bambulab P1S + Prusa XL 5T). Tagaufträge möglich.',
                    Icon: Layers,
                  },
                  {
                    step: '04',
                    title: 'Lackierung + Finish',
                    desc: '2K-Premium-Lackierung, Aceton-Glättung wo nötig, Magnet-Verbindungen, bewegliche Komponenten.',
                    Icon: Sparkles,
                  },
                  {
                    step: '05',
                    title: 'Versand',
                    desc: 'Maßgefertigte Holzkiste mit Schaumstoff-Inserts. DACH-Versand inklusive, internationale Versendung möglich.',
                    Icon: Target,
                  },
                ].map((s, i) => {
                  const StepIcon = s.Icon
                  return (
                    <div
                      key={s.step}
                      className="group relative p-6 bg-card rounded-2xl border-2 border-border hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4 font-bold text-lg group-hover:scale-110 transition-transform">
                        {s.step}
                      </div>
                      <StepIcon className="w-6 h-6 text-primary mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <h3 className="font-bold mb-2 tracking-tight">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            TRUST BLOCK — Cases preview + Authority
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3">
                    Echte Cases aus 2024-2026
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Vertrauen entsteht aus Beweisen
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Mittelspannungs-Anlagen für Dubai-Messen, Werkzeugmaschinen-Schnittmodelle für EMO,
                    Pumpen-Schnittmodelle für POWTECH, Schiffsantriebs-Modelle für SMM. Jeder Case
                    mit Tech-Specs, Lieferzeit, Outcome.
                  </p>
                  <Link
                    href="/cases"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                  >
                    Alle Cases ansehen <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-1">300+</div>
                    <div className="text-sm text-muted-foreground">Projekte realisiert</div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-1">★5,0</div>
                    <div className="text-sm text-muted-foreground">31 Google-Bewertungen</div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Industrie-FDM-Drucker</div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors">
                    <div className="text-3xl font-bold text-primary mb-1">2024</div>
                    <div className="text-sm text-muted-foreground">Gründungsjahr ekdruck</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Andere Branche?<br />
                <span className="text-primary">Wir drucken auch das.</span>
              </h2>
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Bauwesen, Luftfahrt, Medizintechnik, Pharma-Verpackung — wenn Ihre Branche oben nicht
                gelistet ist, schicken Sie kurz CAD oder Skizze. Wir prüfen die Machbarkeit ehrlich
                und sagen auch klar, wenn FDM-Druck nicht passt.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kostenrechner"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all hover:gap-3"
                >
                  <Calculator className="w-5 h-5" />
                  STL hochladen — Preis sofort
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all"
                >
                  Branche anfragen →
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-background/60">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  +43 676 5517197
                </span>
                <span className="w-1 h-1 rounded-full bg-background/40" />
                <span>office@ek-druck.at</span>
                <span className="w-1 h-1 rounded-full bg-background/40" />
                <span>Festpreis-Angebot binnen 6h</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
