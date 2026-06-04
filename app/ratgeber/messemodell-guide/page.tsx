/**
 * Messemodell-Guide Skyscraper — /ratgeber/messemodell-guide
 * ──────────────────────────────────────────────────────────────────
 *
 * 2026-05-31: Komplett-Replacement des minimalen 28-Zeilen-Vorläufers.
 * Wissenschaftlich fundiert, Brennstoffklassen-tabelliert, ROI-berechnet.
 *
 * Ziele:
 * - Ranking-Hub für "messemodell", "industriemodell messe", branchenspezifische Long-Tails
 * - Trust-Asset für LinkedIn-Akquise (HeyReach-Audience verlinkt diesen Guide in DMs)
 * - AI-Citation-Optimiert für ChatGPT/Gemini/Perplexity
 * - Vorbereitet für Hub-and-Spoke-Skalierung (Branchen-Spokes in Wave B)
 *
 * Schema-Stack: TechArticle + FAQPage + BreadcrumbList + Person + SpeakableSpecification
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Flame, Clock, TrendingUp,
  Hand, Sun, Wrench, Ship, Cog, Zap, Factory, Building2, Car, Lightbulb,
  Calculator, ShieldCheck, Ruler, Package, AlertTriangle, Star,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import {
  messemodellMaterials,
  scaleStrategies,
  roiExamples,
  calculateROI,
  brancheStrategies,
  messeFAQs,
  standzeitFaktoren,
} from '@/data/messemodellContent'
import { BRAND } from '@/data/brandVoice'

// ─────────────────────────────────────────────────────────────────
//   METADATA & SEO
// ─────────────────────────────────────────────────────────────────

const TITLE =
  'Messemodelle Industrie — Brennstoffklasse · Standzeit · ROI'
const DESCRIPTION =
  'Vollständiger Industrie-Messemodell-Guide: DIN 4102 Brennstoffklassen-Tabelle, Material-Standzeit-Vergleich, Maßstab-Strategie 1:5 bis 1:100, konkrete ROI-Rechnungen aus 2025-Aufträgen. Aus der ekdruck-Werkstatt.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-guide'),
  keywords: [
    'messemodell', 'industriemodell messe', 'messemodell 3d druck', 'messemodelle industrie',
    'messemodell brennstoffklasse', 'b1 b2 messemodell', 'din 4102 messemodell',
    'messemodell standzeit', 'messemodell material', 'industriemodell roi',
    'messemodell maschinenbau', 'messemodell schiffbau', 'messemodell energietechnik',
    'messemodell anlagenbau', 'messemodell automotive', 'messemodell elektrotechnik',
    '3d druck messestand', 'showcase modell industriegüter', 'maßstabsgetreues messemodell',
    'schnittmodell messe', 'industriemodellbau dach', 'messemodell festpreis',
  ].join(', '),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-guide',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z',
    modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'Messemodelle Industrie 3D-Druck Guide — ekdruck',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

// ─────────────────────────────────────────────────────────────────
//   STRUKTURIERTE DATEN — Schema.org Master-Stack
// ─────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Messemodelle für Industrie-Aussteller — Der vollständige Guide 2026',
  description: DESCRIPTION,
  image: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
  author: {
    '@type': 'Person',
    name: BRAND.founderName,
    url: 'https://www.ek-druck.at/ueber-uns',
    jobTitle: 'Inhaber & Gründer ekdruck e.U.',
    knowsAbout: [
      'Industrie-Messemodellbau',
      'FDM-3D-Druck für Großbauteile',
      'DIN 4102 Brennstoffklassen',
      'Industriegüter-Showcase-Strategien',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: BRAND.companyName,
    logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' },
  },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-guide',
  about: [
    { '@type': 'Thing', name: 'Industrie-Messemodelle' },
    { '@type': 'Thing', name: 'DIN 4102 Brennstoffklassen' },
    { '@type': 'Thing', name: 'DIN EN 13501 Brandverhalten' },
    { '@type': 'Thing', name: 'Maßstabsgetreuer Modellbau' },
    { '@type': 'Thing', name: 'Schnittmodelle Industrieanlagen' },
    { '@type': 'Thing', name: 'FDM-3D-Druck für Showcase-Modelle' },
  ],
  citation: [
    'DIN 4102-1:1998 Brandverhalten von Baustoffen und Bauteilen — Begriffe, Anforderungen, Prüfungen',
    'DIN EN 13501-1:2019 Klassifizierung von Bauprodukten zu ihrem Brandverhalten',
    'VDI 3404:2014 Additive Fertigungsverfahren — Rapid-Technologien',
    'ISO 527-2:2012 Plastics — Determination of tensile properties',
    'ISO 178:2019 Plastics — Determination of flexural properties',
  ],
  inLanguage: 'de-AT',
  isAccessibleForFree: true,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: messeFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Start',
      item: 'https://www.ek-druck.at/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ratgeber',
      item: 'https://www.ek-druck.at/ratgeber',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Messemodell-Guide',
      item: 'https://www.ek-druck.at/ratgeber/messemodell-guide',
    },
  ],
}

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#tldr', '#brennstoffklasse-summary'],
  },
}

// ─────────────────────────────────────────────────────────────────
//   ICON MAPPING für Branchen
// ─────────────────────────────────────────────────────────────────

const brancheIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  maschinenbau: Cog,
  anlagenbau: Factory,
  schiffbau: Ship,
  energietechnik: Zap,
  automotive: Car,
  elektrotechnik: Lightbulb,
}

// ─────────────────────────────────────────────────────────────────
//   COMPONENT
// ─────────────────────────────────────────────────────────────────

export default function MessemodellGuidePage() {
  return (
    <>
      <Navigation />

      {/* Strukturierte Daten — alle 4 Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <main className="bg-background text-foreground">
        {/* ─────────────────────────────────────────────────────────────
            HERO + TLDR
        ───────────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { name: 'Ratgeber', url: '/ratgeber' },
                { name: 'Messemodell-Guide', url: '/ratgeber/messemodell-guide' },
              ]}
            />

            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="w-4 h-4" /> Industrie-Showcase-Guide 2026
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Industrie-Aussteller
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Brennstoffklassen-Tabelle nach DIN 4102, Material-Standzeit-Vergleich,
              Maßstabs-Strategie 1:5 bis 1:100, konkrete ROI-Rechnungen aus aktuellen
              Industriegüter-Aufträgen. Der vollständige Guide für Marketing- und
              Messe-Manager im DACH-Mittelstand.
            </p>

            <AuthorByline
              variant="card"
              showDate
              publishedAt="2026-05-31"
              updatedAt="2026-05-31"
            />
          </div>
        </section>

        {/* TLDR-Box (Speakable für Voice-Search) */}
        <section className="px-4 mb-16">
          <div id="tldr" className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              Kurzfassung — in 30 Sekunden
            </h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  <strong>Brennstoffklasse:</strong> Standard-PETG ist B2 (für die meisten
                  DACH-Messen ausreichend). B1 ist Pflicht auf Großmessen wie Hannover Messe
                  oder Bauma — erreichbar mit Polycarbonat-FR oder additiviertem PLA.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  <strong>Standzeit:</strong> PETG schlägt PLA um Faktor 2-3 für
                  Multi-Messen-Einsätze. Modelle aus PETG halten 10-15 Messeauftritte
                  ohne Reparatur durch.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  <strong>ROI:</strong> Bei realistischen €4.500-Modellen über 3 Jahre
                  Multi-Messen-Einsatz sehen unsere Kunden ROI-Raten von 800-1.500%
                  durch gesteigerte Stand-Anfragequote.
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  <strong>Lieferzeit:</strong> 3-5 Wochen ab CAD-Eingang Standard,
                  Express 2-3 Wochen möglich. Empfehlung: 8 Wochen vor Messestart
                  starten.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Warum Industrie-Aussteller Messemodelle einsetzen
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Warum Industrie-Aussteller Messemodelle einsetzen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Im Industriegüter-Vertrieb gibt es ein wiederkehrendes Showcase-Problem: das
              Hauptprodukt — die 8-Tonnen-Maschine, die 3-stöckige Schaltanlage, der
              12-Meter-Schiffsantrieb — kann auf einer Messe physisch nicht gezeigt werden.
              Drei Wege werden typisch versucht. Zwei davon funktionieren nicht.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Banner & 2D-Drucke</h3>
                <p className="text-sm text-muted-foreground">
                  Visuell flach, kein Stop-Faktor im hektischen Messe-Verkehr.
                  Durchschnittliche Stand-Verweildauer: 6-12 Sekunden bei reinen
                  Banner-Auftritten.
                </p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Tablet-Demo-Videos</h3>
                <p className="text-sm text-muted-foreground">
                  Konkurrieren mit dem ganzen Hallen-Lärm. Besucher schauen
                  3-5 Sekunden, scrollen weiter. Kein haptisches Erlebnis,
                  kein Engineering-Talking-Point.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Maßstabsgetreues Modell</h3>
                <p className="text-sm text-muted-foreground">
                  Anfassbar, drehbar, mit beweglichen Komponenten. Engineers
                  bleiben 3-8 Minuten am Stand. Fachgespräche entstehen am
                  Modell-Detail.
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Das Ziel ist nicht "schönes Exponat" — das Ziel ist <strong>Fachgespräch</strong>.
              Wer am Schnittmodell die rotierende Spindel sieht, das aufklappbare Schaltgehäuse
              berührt, die maßstabsgetreue Anlage von allen Seiten umrunden kann, der bleibt
              stehen. Und wer stehenbleibt, fragt nach Specs. Und wer nach Specs fragt, kommt
              in den Sales-Funnel.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Brennstoffklasse — DIN 4102 Realität auf Messen
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Brennstoffklasse — DIN 4102 Realität auf Messen
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Die meisten Messe-Verordnungen verweisen auf DIN 4102-1 (deutscher Standard)
              oder DIN EN 13501-1 (europäische Klassifikation). Für Industriemessemodelle
              relevant sind die Klassen B1 (schwer entflammbar) und B2 (normal entflammbar).
            </p>

            <div id="brennstoffklasse-summary" className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">Die wichtigste Faustregel</h3>
              <ul className="space-y-2 text-base">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">B2 reicht</span>
                  <span className="text-muted-foreground">
                    für DACH-Standardmessen mit Stand-Größen unter 30 m² und Indoor-Setup.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">B1 ist Pflicht</span>
                  <span className="text-muted-foreground">
                    auf Großmessen (Hannover Messe Industrial, Bauma München, IAA),
                    bei strenger Standabnahme oder bei behördlichen Auflagen.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-4">Material-Brennstoffklassen-Übersicht</h3>

            <div className="overflow-x-auto -mx-4 px-4 mb-8">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-3 px-4 font-bold">Material</th>
                    <th className="text-left py-3 px-4 font-bold">DIN 4102</th>
                    <th className="text-left py-3 px-4 font-bold">DIN EN 13501</th>
                    <th className="text-left py-3 px-4 font-bold">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {messemodellMaterials.map((mat) => (
                    <tr key={mat.name} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="py-3 px-4 font-bold text-primary">{mat.name}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-mono ${
                            mat.brennstoffklasseDIN4102 === 'B1'
                              ? 'bg-green-500/20 text-green-700'
                              : mat.brennstoffklasseDIN4102 === 'B1-fähig*'
                              ? 'bg-yellow-500/20 text-yellow-700'
                              : 'bg-blue-500/20 text-blue-700'
                          }`}
                        >
                          {mat.brennstoffklasseDIN4102}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-sm">{mat.brennstoffklasseEN13501}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{mat.brennstoffklasseNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">B1-Nachweis bei Standabnahme</h4>
                  <p className="text-sm leading-relaxed">
                    Bei strenger Standabnahme (TÜV-Prüfer, Brandschutz-Beauftragter der Messe)
                    wird das Hersteller-Material-Zertifikat des Filaments verlangt. Wir liefern
                    auf Anfrage das Original-Zertifikat des Filament-Herstellers — eigene
                    Brand-Tests durch ekdruck sind nicht erforderlich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Standzeit — was 4-7 Messetage aushält
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Hand className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Standzeit — was 4-7 Messetage aushält
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Standzeit ist der zweitgrößte Hebel nach Brennstoffklasse. Wer 1-2 Messen
              plant, kann mit PLA arbeiten. Wer eine Multi-Messen-Strategie über 3-5 Jahre
              fährt, braucht PETG, ASA oder PA-CF.
            </p>

            <h3 className="text-xl font-bold mb-4">Material-Standzeit-Index (1-10 Skala)</h3>

            <div className="space-y-3 mb-10">
              {messemodellMaterials.map((mat) => (
                <div key={mat.name} className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg text-primary">{mat.name}</span>
                      <span className="text-sm text-muted-foreground">{mat.fullName}</span>
                    </div>
                    <span className="font-mono text-2xl font-bold">
                      {mat.standzeitIndex}<span className="text-sm text-muted-foreground">/10</span>
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${mat.standzeitIndex * 10}%` }}
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Daueranfass:</span>{' '}
                      <strong>{mat.daueranfassResistenz}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground">UV-Stabilität:</span>{' '}
                      <strong>{mat.uvStabilitaet}</strong>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lackierbarkeit:</span>{' '}
                      <strong>{mat.lackierbarkeit}</strong>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    <strong className="text-foreground">Empfehlung:</strong>{' '}
                    {mat.empfehlungMesseEinsatz}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Standzeit-Faktoren (was die Lebensdauer beeinflusst)</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {standzeitFaktoren.map((f) => (
                <div key={f.faktor} className="bg-card border border-border rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{f.faktor}</h4>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        f.impact === 'Höchster Hebel'
                          ? 'bg-primary text-primary-foreground'
                          : f.impact === 'Hoch'
                          ? 'bg-primary/20 text-primary'
                          : f.impact === 'Mittel'
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-muted/50 text-muted-foreground'
                      }`}
                    >
                      {f.impact}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{f.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Maßstab-Strategie 1:5 bis 1:100
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Maßstab-Strategie 1:5 bis 1:100</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Der richtige Maßstab balanciert drei Faktoren: <strong>Sichtbarkeit</strong>{' '}
              (das Modell muss aus 2-3 m Entfernung erkennbar sein), <strong>Detailgrad</strong>{' '}
              (Engineers wollen Komponenten erkennen) und <strong>Transportabilität</strong>{' '}
              (das Modell muss aus dem Container raus und in den Stand rein).
            </p>

            <div className="space-y-5">
              {scaleStrategies.map((s) => (
                <div key={s.scale} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="text-3xl font-bold text-primary mb-1">{s.scale}</div>
                      <div className="text-sm text-muted-foreground">
                        {s.modelSize}<br />
                        <span className="text-xs">aus {s.originalSize}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-bold mb-1">Typische Use-Cases</h3>
                        <p className="text-sm text-muted-foreground">{s.useCases.join(' · ')}</p>
                      </div>
                      <div className="mb-3">
                        <h3 className="font-bold mb-1">Beispiel-Produkte</h3>
                        <p className="text-sm text-muted-foreground">{s.exampleProducts.join(', ')}</p>
                      </div>
                      <div className="flex items-center gap-4 flex-wrap">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Preisbereich:</span>{' '}
                          <strong className="text-primary">{s.pricerange}</strong>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mt-3 italic">{s.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: ROI von Messemodellen — konkrete Zahlen
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                ROI von Messemodellen — konkrete Zahlen
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Industriegüter-Marketing ist oft anekdotisch ("der Stand mit dem Modell hatte
              mehr Besucher"). Konkret heißt das: Stand-Anfrage-Steigerung von +50% bis +180%,
              Konversionsraten-Verbesserung von +30% bis +80%. Diese Beispiel-Rechnungen
              basieren auf realen ekdruck-Projekten 2024-2025.
            </p>

            <div className="space-y-8">
              {roiExamples.map((ex, i) => {
                const roi = calculateROI(ex)
                return (
                  <div key={i} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">
                          {ex.branche}
                        </span>
                        <h3 className="text-xl font-bold">{ex.produkt}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">
                          {roi.roiPercent.toLocaleString('de-AT')}%
                        </div>
                        <div className="text-xs text-muted-foreground">ROI über {ex.jahreEinsatz} Jahre</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          Vorher (ohne Modell)
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Anfragen/Messe:</span>
                            <strong>{ex.vorherAnfragenProMesse}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Konversion:</span>
                            <strong>{(ex.vorherKonversionsrate * 100).toFixed(0)}%</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Ø Auftragswert:</span>
                            <strong>
                              €{(ex.vorherAvgAuftragswert / 1000).toFixed(0)}k
                            </strong>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-border mt-2 text-base">
                            <span className="font-bold">Umsatz {ex.jahreEinsatz} J.:</span>
                            <strong>
                              €{(roi.vorherTotalAuftraege / 1000).toLocaleString('de-AT')}k
                            </strong>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                          Nachher (mit Modell)
                        </h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Anfragen/Messe:</span>
                            <strong className="text-primary">
                              {ex.nachherAnfragenProMesse}
                            </strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Konversion:</span>
                            <strong className="text-primary">
                              {(ex.nachherKonversionsrate * 100).toFixed(0)}%
                            </strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Ø Auftragswert:</span>
                            <strong className="text-primary">
                              €{(ex.nachherAvgAuftragswert / 1000).toFixed(0)}k
                            </strong>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-primary/20 mt-2 text-base">
                            <span className="font-bold">Umsatz {ex.jahreEinsatz} J.:</span>
                            <strong className="text-primary">
                              €{(roi.nachherTotalAuftraege / 1000).toLocaleString('de-AT')}k
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-xs text-muted-foreground">Modell-Investition</div>
                        <div className="text-lg font-bold">
                          €{ex.modellInvestition.toLocaleString('de-AT')}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Mehrumsatz</div>
                        <div className="text-lg font-bold text-primary">
                          +€{(roi.mehrumsatz / 1000).toLocaleString('de-AT')}k
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Payback nach</div>
                        <div className="text-lg font-bold">
                          {roi.paybackMessen} Messe{roi.paybackMessen === 1 ? '' : 'n'}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 italic leading-relaxed">
                      {ex.hinweis}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="bg-muted/30 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-2">Wichtige Einordnung</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diese Rechnungen sind Best-Case-Beispiele aus tatsächlichen ekdruck-Aufträgen
                mit qualifiziertem Anfragesteigerungs-Tracking durch die Kunden. Branchen-Variabilität
                ist hoch: Maschinenbau und Anlagenbau zeigen typischerweise höhere Multiplikatoren,
                weil das Modell konkrete Kaufentscheidungs-Argumente liefert (bewegliche Komponenten,
                Schnittansichten). In Branchen mit kürzeren Sales-Cycles (Konsumgüter, kleinere
                Komponenten) sind die ROI-Werte tendenziell niedriger.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Echte Case-Studies aus 2025
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Echte Case-Studies aus aktuellen Aufträgen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Drei konkrete Projekte aus den letzten 12 Monaten — anonymisiert wo NDA-relevant,
              aber technisch und ergebnis-orientiert konkret.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/cases/industriemodell-mittelspannungs-anlage-dubai"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
                  Energietechnik
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  MV-Schaltanlage 1:25 für Dubai-Messe
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  3-stöckige Mittelspannungs-Schaltanlage als Tisch-Exponat. ABS mit
                  2K-Lackierung RAL 7035, Magnetverbindungen für Segmentierung.
                </p>
                <div className="flex items-center gap-1 text-sm text-primary font-bold">
                  Case lesen <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/cases/maschinenbau-werkzeugmaschine-schnitt"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
                  Maschinenbau
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Werkzeugmaschinen-Schnittmodell 1:8
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  CNC-Fräse mit beweglicher Spindel und Schnittansicht des Antriebsbereichs.
                  PA-CF für bewegliche Komponenten, PETG für Hauptkorpus.
                </p>
                <div className="flex items-center gap-1 text-sm text-primary font-bold">
                  Case lesen <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/cases/anlagenbau-pumpen-schnittmodell"
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
                  Anlagenbau
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Pumpen-Schnittmodell 1:5
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Industrielle Kreiselpumpe mit aufklappbarem Gehäuse. Materialfluss-Markierung,
                  bewegliches Laufrad. Premium-Lackierung mit Aceton-Glättung.
                </p>
                <div className="flex items-center gap-1 text-sm text-primary font-bold">
                  Case lesen <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Branchen-spezifische Showcase-Strategien
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Branchen-spezifische Showcase-Strategien
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Jede Branche hat eigene Konventionen — von Hauptmessen über typische Maßstäbe
              bis zu Brennstoffklassen-Anforderungen. Übersicht der 6 Industrie-Cluster die
              wir betreuen:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {brancheStrategies.map((b) => {
                const Icon = brancheIcons[b.slug] || Cog
                return (
                  <div key={b.slug} className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{b.branche}</h3>
                    </div>

                    <div className="space-y-3 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground font-medium">Hauptmessen: </span>
                        {b.hauptmessen.join(', ')}
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">Typische Produkte: </span>
                        {b.typischeProdukte.join(', ')}
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">Empfohlener Maßstab: </span>
                        <strong>{b.empfohlenerMassstab}</strong>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">Material: </span>
                        {b.empfohlenesMaterial}
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">Brennstoffklasse: </span>
                        {b.brennstoffklasseAnforderung}
                      </div>
                    </div>

                    <p className="text-sm italic mb-4 leading-relaxed text-foreground">
                      <strong>Besonderheit:</strong> {b.besonderheit}
                    </p>

                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/ratgeber/messemodell-${b.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                      >
                        Vollständiger Guide {b.branche} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/branchen/${b.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        Service-Seite {b.branche} →
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Timeline — wann Bestellung starten
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Timeline — wann mit der Bestellung starten
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Industriemessemodelle sind Custom-Aufträge — die Lieferzeit hängt von Komplexität,
              CAD-Verfügbarkeit und Lackier-Aufwand ab. Realistische Planungs-Faustregel:
              <strong> 8 Wochen vor Messestart starten</strong>.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold mb-4">Standard-Timeline (8 Wochen vor Messe starten)</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-8
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Anfrage + CAD-Eingang</h4>
                    <p className="text-sm text-muted-foreground">
                      Festpreis-Angebot binnen 6 Stunden, NDA-Unterzeichnung, CAD-Datei-Eingang.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-6
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Konstruktions-Review + Material-Freigabe</h4>
                    <p className="text-sm text-muted-foreground">
                      Maßstab, Material, Brennstoffklassen-Auswahl bestätigt. Lackierung-Schema
                      definiert.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-5
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hauptdruck-Phase</h4>
                    <p className="text-sm text-muted-foreground">
                      Druck der Hauptkorpus-Komponenten parallel auf 3 Industriedruckern
                      (2× Bambulab P1S, 1× Prusa XL 5T).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Lackierung + Montage</h4>
                    <p className="text-sm text-muted-foreground">
                      2K-Lackierung, Detail-Inserts, Magnetverbindungen, bewegliche Komponenten
                      eingebaut.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">QA + Approval-Iteration</h4>
                    <p className="text-sm text-muted-foreground">
                      Foto-Review durch Kunde, eventuelle Korrekturen, Final-Approval.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    W-1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Verpackung + Versand</h4>
                    <p className="text-sm text-muted-foreground">
                      Maßgefertigte Schaumstoff-Inserts, Holzkiste, Versand-Vorlauf 3-5
                      Werktage je nach Ziel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-5">
                <h4 className="font-bold mb-2 text-amber-700">Express möglich</h4>
                <p className="text-sm">
                  2-3 Wochen Express bei verfügbarer Druckerkapazität.
                  Aufpreis 30-50%. Empfohlen nur wenn keine Alternative.
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h4 className="font-bold mb-2">Folge-Modelle aus CAD</h4>
                <p className="text-sm">
                  Wenn die CAD-Konstruktion bereits steht (aus früherem Auftrag), Folge-Modelle
                  10-15 Werktage. Ideal für Multi-Messen-Strategie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Pricing — was Messemodelle kosten
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Pricing — was Messemodelle kosten</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ekdruck-Preise sind <strong>transparent und festpreis-basiert</strong>:
              binnen 6 Stunden nach CAD-Eingang gibt es ein verbindliches Angebot.
              Kein "ab"-Preis, kein Stundensatz, keine versteckten Aufschläge für Lackierung.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h3 className="font-bold mb-4">Preisbereich nach Modell-Komplexität</h3>
              <div className="overflow-x-auto -mx-4 px-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4 font-bold">Modell-Klasse</th>
                      <th className="text-left py-3 px-4 font-bold">Maßstab</th>
                      <th className="text-left py-3 px-4 font-bold">Größe</th>
                      <th className="text-right py-3 px-4 font-bold">Preisbereich</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Klein-Schnittmodell</td>
                      <td className="py-3 px-4">1:5</td>
                      <td className="py-3 px-4">25-45 cm</td>
                      <td className="py-3 px-4 text-right font-mono">€1.500-3.000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Mittlere Schnittmodelle</td>
                      <td className="py-3 px-4">1:10</td>
                      <td className="py-3 px-4">50-80 cm</td>
                      <td className="py-3 px-4 text-right font-mono">€2.500-6.000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Großmodelle</td>
                      <td className="py-3 px-4">1:25</td>
                      <td className="py-3 px-4">80-150 cm</td>
                      <td className="py-3 px-4 text-right font-mono">€4.500-9.000</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Vollanlagen / Vollschiff</td>
                      <td className="py-3 px-4">1:50</td>
                      <td className="py-3 px-4">100-200 cm</td>
                      <td className="py-3 px-4 text-right font-mono">€6.000-15.000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Stadtmodelle / Industrieparks</td>
                      <td className="py-3 px-4">1:100</td>
                      <td className="py-3 px-4">150-250 cm</td>
                      <td className="py-3 px-4 text-right font-mono">€8.000-25.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h4 className="font-bold mb-2">Mengenrabatte für Folge-Modelle</h4>
                <ul className="text-sm space-y-1">
                  <li>2. Modell aus gleicher CAD: -15%</li>
                  <li>3.-5. Modell: -25%</li>
                  <li>6+ Modelle: -35%</li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                <h4 className="font-bold mb-2">Im Preis enthalten</h4>
                <ul className="text-sm space-y-1">
                  <li>Konstruktions-Review</li>
                  <li>Material-Wahl-Beratung</li>
                  <li>Standard-Lackierung</li>
                  <li>QA-Foto-Review</li>
                  <li>Verpackung + DACH-Versand</li>
                </ul>
              </div>
            </div>

            <Link
              href="/preise"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Vollständige Preisübersicht <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Zusammenarbeit mit Messebauern vs. Direkt-Bestellung
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Zusammenarbeit mit Messebauern vs. Direkt-Bestellung
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Drei Modelle der Zusammenarbeit haben sich etabliert — jedes hat
              eigene Kosten-Trade-Offs und Koordinations-Anforderungen.
            </p>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Modell 1: Direkt-Bestellung durch Kunde</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Sie als Industrie-Aussteller bestellen das Modell direkt bei ekdruck.
                  Der Messebauer integriert das Modell als zugeliefertes Exponat in den
                  Stand-Aufbau.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="text-green-700">
                    <strong>Vorteil:</strong> Günstigste Variante, keine Messebauer-Marge,
                    direkter Kontakt für Iterations-Reviews.
                  </div>
                  <div className="text-amber-700">
                    <strong>Aufwand:</strong> Sie koordinieren CAD-Übergabe, Stand-Integration,
                    Lieferadresse.
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Modell 2: Bestellung durch Messebauer</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Der Messebauer bestellt als White-Label-Partner bei ekdruck, integriert das
                  Modell in sein Vollservice-Angebot.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="text-green-700">
                    <strong>Vorteil:</strong> Sie haben einen Ansprechpartner für alles,
                    Stand + Modell + Logistik = Vollpaket.
                  </div>
                  <div className="text-amber-700">
                    <strong>Aufpreis:</strong> 15-25% Messebauer-Marge auf das Modell.
                    Indirekter Kontakt für technische Reviews.
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Modell 3: Drei-Wege-Abstimmung</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Sie, der Messebauer und ekdruck arbeiten gemeinsam an Konstruktion,
                  Stand-Integration und Logistik. Üblich bei komplexen Großständen.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="text-green-700">
                    <strong>Vorteil:</strong> Optimale Stand-Integration, technische
                    Reviews mit allen Beteiligten, hohe Qualitäts-Konsistenz.
                  </div>
                  <div className="text-amber-700">
                    <strong>Aufwand:</strong> Mehr Koordinations-Meetings, längere
                    Vorlaufzeit für Abstimmungen.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mt-6">
              <p className="text-sm leading-relaxed">
                <strong>Empfehlung:</strong> Für Modell-Qualität und Lieferzeit-Sicherheit
                empfehlen wir <strong>Modell 1</strong> (Direkt-Bestellung) oder{' '}
                <strong>Modell 3</strong> (Drei-Wege). Modell 2 vereinfacht für Sie, kostet
                aber 15-25% Aufschlag und verringert die technischen Iterations-Möglichkeiten.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: Cross-Link Material-Vergleich-Skyscraper
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-3">
                Tiefer-Tauchen: Material-Vergleich nach ISO-Normen
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Für die wissenschaftliche Material-Bewertung mit Zugfestigkeit nach ISO 527,
                Biegefestigkeit nach ISO 178 und Wärmeformbeständigkeit nach ISO 75 → unser
                vollständiger Materialvergleich-Skyscraper. Inklusive Decision-Matrix
                und Brennstoffklassen-Detail-Daten.
              </p>
              <Link
                href="/ratgeber/fdm-material-vergleich"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Zum FDM-Material-Vergleich <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            H2: FAQ
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Häufige Fragen zu Industrie-Messemodellen
            </h2>

            <div className="space-y-4">
              {messeFAQs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-bold flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-primary group-open:rotate-45 transition-transform flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            CTA-Block
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihr Industrie-Messemodell?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Festpreis-Angebot binnen 6 Stunden nach CAD-Eingang. NDA-fähige
              Projektabwicklung mit vertraglicher Datenlöschung.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Festpreis-Angebot anfragen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/messemodelle"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 px-6 py-3 rounded-lg font-bold hover:bg-primary-foreground/10 transition-colors"
              >
                Service-Übersicht Messemodelle
              </Link>
              <a
                href="tel:+436765517197"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium"
              >
                <Phone className="w-4 h-4" /> +43 676 5517197
              </a>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            FOOTER-AUTHOR + LAST-MODIFIED
        ───────────────────────────────────────────────────────────── */}
        <section className="px-4 py-8 border-t border-border">
          <div className="max-w-4xl mx-auto text-sm text-muted-foreground">
            <p className="leading-relaxed">
              <strong className="text-foreground">Autor:</strong> Kevin Eppensteiner,
              Inhaber & Gründer ekdruck e.U. — Spezialisiert auf Industrie-Messemodellbau,
              FDM-3D-Druck für Großbauteile, NDA-konforme Projekt-Abwicklung. Maschinenbau-Studium
              ab Oktober 2026. Werkstatt: Negrellistraße 15, 4623 Gunskirchen, Oberösterreich.
              <br />
              <br />
              <strong className="text-foreground">Letzte Aktualisierung:</strong> 2026-05-31
              <br />
              <strong className="text-foreground">Quellen:</strong> DIN 4102-1, DIN EN 13501-1,
              VDI 3404, ISO 527-2, ISO 178, sowie Erfahrungswerte aus ekdruck-Aufträgen 2024-2026.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
