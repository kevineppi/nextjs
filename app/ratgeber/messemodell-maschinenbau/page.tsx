/**
 * Spoke: Messemodelle Maschinenbau
 * /ratgeber/messemodell-maschinenbau
 *
 * Branchen-spezifischer Inhalt: Werkzeugmaschinen, CNC-Fräsen, Spindeln.
 * Hauptmessen: EMO Hannover, AMB Stuttgart, Intec Leipzig.
 * Spitze: bewegliche Spindel als Eyecatcher.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Cog, Wrench, Settings,
  Gauge, Activity, Target, Clock, TrendingUp, Hand, Ruler, Calculator,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Maschinenbau — Werkzeugmaschinen, CNC, Spindeln [Guide]'
const DESCRIPTION =
  'Messemodelle für Maschinenbau-Aussteller: Werkzeugmaschinen-Schnittmodelle, bewegliche Spindeln, EMO/AMB-Spezifika. Maßstab 1:8 bis 1:10, Materialwahl PETG/PA-CF, konkrete ROI-Beispiele.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-maschinenbau'),
  keywords: [
    'messemodell maschinenbau', 'werkzeugmaschine messemodell', 'cnc fräse modell',
    'spindel modell 3d druck', 'emo hannover messemodell', 'amb stuttgart messemodell',
    'maschinenbau showcase modell', 'werkzeugmaschinen schnittmodell',
    'intec leipzig messemodell', 'cnc messemodell', 'drehmaschine modell',
    'industriemodell werkzeugmaschinen', '3d druck maschinenbau messe',
  ].join(', '),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-maschinenbau',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z',
    modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Maschinenbau — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Messemodelle für Maschinenbau-Aussteller — Werkzeugmaschinen, CNC, Spindeln',
  description: DESCRIPTION,
  datePublished: '2026-05-31',
  dateModified: '2026-05-31',
  author: {
    '@type': 'Person',
    name: BRAND.founderName,
    url: 'https://www.ek-druck.at/ueber-uns',
    jobTitle: 'Inhaber & Gründer ekdruck e.U.',
  },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-maschinenbau',
  about: [
    { '@type': 'Thing', name: 'Werkzeugmaschinen-Messemodelle' },
    { '@type': 'Thing', name: 'CNC-Fräs-Modelle' },
    { '@type': 'Thing', name: 'EMO Hannover' },
    { '@type': 'Thing', name: 'AMB Stuttgart' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Welcher Maßstab ist optimal für Werkzeugmaschinen-Messemodelle?',
    answer: '1:8 bis 1:10 ist Sweet-Spot. Eine Standard-CNC-Fräse mit Originalmaßen 2,5×1,8×2,2 m wird im Maßstab 1:10 zu einem Modell mit 25×18×22 cm — passt auf jeden Stand-Tisch, lässt aber die Spindel-Bewegung erkennbar. Bei sehr großen 5-Achs-Fräsen (über 4 m Originalbreite) wechseln wir zu 1:15 oder 1:20, sonst wird das Modell zu groß für Standard-Vitrinen.',
  },
  {
    question: 'Können Sie bewegliche Spindeln und Werkzeugwechsler einbauen?',
    answer: 'Ja, das ist DAS Standard-Feature für Werkzeugmaschinen-Modelle. Spindel-Bewegung über Y/Z-Achse als per Drehknopf steuerbarer Mechanismus, Werkzeugmagazin-Karussell rotierbar, manchmal mit Servo-Motor angetrieben. Wir setzen PA-CF (Carbon-Faser-Polyamid) für die belasteten Komponenten ein — Lebensdauer bei normaler Messe-Demonstration: 50-100+ Bewegungs-Zyklen pro Tag ohne Verschleiß.',
  },
  {
    question: 'Welche Brennstoffklasse ist auf der EMO Hannover erforderlich?',
    answer: 'EMO Hannover folgt der Hannover-Messe-Standabnahme: B1 ist für Stand-Komponenten über 1m² Pflicht, kleinere Exponate (Tisch-Modelle unter 30×30 cm) sind B2-tolerant. Für Werkzeugmaschinen-Modelle mit typischen 25-40 cm Aufbau-Höhe empfehlen wir B1-fähiges PLA (mit Flammschutz-Additiv) oder Polycarbonat-FR. Wir liefern das Hersteller-Material-Zertifikat zur Standabnahme mit.',
  },
  {
    question: 'Lohnt sich ein Schnittmodell oder lieber komplett geschlossen?',
    answer: 'Schnittmodelle ziehen Engineers 3-5x länger an den Stand als geschlossene Modelle. Mein Vorschlag für Werkzeugmaschinen: halb-geschlossen — eine Seite zeigt die Außen-Designlinie (Verkaufs-Aspekt), die andere ist als Schnitt aufgebaut und zeigt Antrieb, Spindel-Aufnahme, Werkzeug-Wechsler. So bekommt der Marketing-Mensch das schöne Bild für das Standort-Foto UND der Ingenieur die technische Tiefe.',
  },
  {
    question: 'Wie zeigen Sie die typischen Genauigkeiten und Toleranzen am Modell?',
    answer: 'Über laser-gravierte Inlays oder dezente Beschriftungen am Sockel. Konkret: typische Werkzeugmaschinen-Genauigkeiten von ±0,003 mm Positionier-Toleranz als gravierte Zahl am Sockel, Spindel-Drehzahl-Range (1-24.000 U/min) als Beschriftung, Maschinen-Bett-Material als Mini-Tafel. Das ist Engineering-Glaubwürdigkeit ohne den Hauptkorpus zu verunstalten.',
  },
  {
    question: 'Welche Material-Kombination ist für Multi-Messen-Strategie ideal?',
    answer: 'PETG für Hauptkorpus (Verschalung, Gehäuse), PA-CF für bewegliche Komponenten (Spindel-Aufnahme, Werkzeug-Wechsler), ABS für lackierte Detail-Inlays (Logos, farbliche Akzente). Diese Kombi hält 15-25 Messeauftritte ohne sichtbare Abnutzung. Bei Outdoor-Showrooms im Werk dazu ASA-UV-Stabilisator für sonnenexponierte Komponenten.',
  },
  {
    question: 'Was kostet ein typisches Werkzeugmaschinen-Modell?',
    answer: 'Standard-Range: €3.500-7.500 für ein 1:10-CNC-Fräs-Modell (60-80 cm Aufbau) mit beweglicher Spindel, Schnittansicht und 2K-Lackierung. Bei zusätzlichem Werkzeugmagazin-Karussell und LED-Beleuchtung +€800-1.500. Bei Modellen von Drehmaschinen oder Schleifmaschinen ähnliche Preisbereiche. Vergleichsweise klassische Modellbauer für gleiche Komplexität: €18.000-35.000 und 12-16 Wochen Lieferzeit.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Maschinenbau', item: 'https://www.ek-druck.at/ratgeber/messemodell-maschinenbau' },
  ],
}

export default function MesseModellMaschinenbauPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-background text-foreground">
        {/* HERO */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { name: 'Ratgeber', url: '/ratgeber' },
              { name: 'Messemodell Maschinenbau', url: '/ratgeber/messemodell-maschinenbau' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Cog className="w-4 h-4" /> Branchen-Spoke: Maschinenbau
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Maschinenbau-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wie wir Werkzeugmaschinen, CNC-Fräsen und Bearbeitungszentren für EMO, AMB und Intec
              als bewegliche, anfassbare Stand-Eyecatcher übersetzen — Spindel-Bewegung, Schnittansicht
              Antriebsbereich, lackierte Verschalung in Original-RAL.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        {/* TLDR */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:8 bis 1:10 für Standard-Werkzeugmaschinen, 1:15 für 5-Achs-Großbearbeitungszentren.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Hauptattraktor:</strong> bewegliche Spindel — zieht Engineers an den Stand, hält sie 3-5x länger als statische Modelle.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Material:</strong> PETG-Hauptkorpus, PA-CF-Spindel, ABS-Detail-Inlays.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €3.500-7.500 für 1:10-Modell mit beweglicher Spindel und Schnittansicht.</span></li>
            </ul>
          </div>
        </section>

        {/* PAIN: warum Maschinenbau-Aussteller Modelle brauchen */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Werkzeugmaschinen-Showcase-Problem</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eine moderne 5-Achs-Fräse wiegt 8-15 Tonnen. Der Transport zur Messe kostet pro Veranstaltung €12.000-25.000.
              Aufbau und Inbetriebnahme am Stand 2 Tage. Versicherung pro Transport €3.000-8.000. Eine durchschnittliche
              Maschinenbau-Messe-Saison von 4 Messen pro Jahr kommt schnell auf <strong>€80.000-150.000 reine Logistik-Kosten</strong>{' '}
              für ein einzelnes Demonstrationsobjekt.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Das Frustrierende: am Stand selbst kann die Maschine die echte Bewegung nicht zeigen. Aus Sicherheitsgründen
              ist die Spindel stillgelegt. Die Werkzeuge sind ausgebaut. Engineers stehen vor einem stillen Stahl-Block
              und fragen: <em>"Und wie sieht das aus, wenn sie arbeitet?"</em>
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Original-Maschine vor Ort</h3>
                <p className="text-sm text-muted-foreground">€80k-150k/Saison Logistik. Stillgelegt. Keine Bewegung sichtbar. Engineer-Frust.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Video-Loop auf Tablet</h3>
                <p className="text-sm text-muted-foreground">Konkurriert mit Hallen-Lärm. 3-5 Sek Aufmerksamkeit. Kein Detail-Talking-Point für Verkauf.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">1:10-Modell mit Spindel-Bewegung</h3>
                <p className="text-sm text-muted-foreground">Anfassbar, drehbar. Engineer bleibt 3-8 Min. Fachgespräch entsteht am Modell-Detail.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HAUPTMESSEN */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die wichtigen Maschinenbau-Messen in DACH + Europa</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir kennen die Standabnahme-Anforderungen der DACH-Maschinenbau-Messen aus erster Hand —
              hier die Spezifika pro Leitmesse:
            </p>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">EMO Hannover</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Weltleitmesse Metallbearbeitung</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, ~2.200 Aussteller, ~120.000 Fachbesucher. Standabnahme über Hannover-Messe AG — B1 ist Pflicht
                  für Standbau-Komponenten, Modell-Exponate über 1m² brauchen Material-Nachweis. Engineering-Publikum dominant,
                  Spindel-Bewegung ist Standard-Attraktor.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">AMB Stuttgart</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Internationale Werkzeugmaschinen-Messe</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre (Zwischen-EMO), Standabnahme über Messe Stuttgart. B2 für die meisten Modell-Exponate ausreichend.
                  Mehr Mittelstand-Publikum als EMO — ROI-orientierte Gespräche, Pricing-Talks häufig direkt am Modell.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Intec Leipzig</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Zuliefer-Messe Maschinenbau</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, Schwerpunkt Subcontracting + Komponenten-Zulieferer. Modell-Anforderungen tendenziell kleiner
                  (Komponenten-Schnittmodelle), B2 verbreitet. Hier glänzen Spindel-Detail-Modelle oder Werkzeugaufnahme-Schnitte.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">METAV Düsseldorf</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Metallbearbeitungs-Spezialmesse</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NRW-fokussiert, mittelständische Aussteller-Basis. Standabnahme moderat — B2 reicht meist, B1 bei größeren Ständen.
                  Pricing-Klasse Modelle ähnlich AMB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MASCHINENBAU-VOKABULAR & PRODUKT-TYPEN */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welche Werkzeugmaschinen lassen sich als Modell besonders gut zeigen</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nicht jedes Maschinenkonzept übersetzt sich gleich gut in ein Showcase-Modell. Hier die Top-Kandidaten
              aus unserer 2024-2025 Erfahrung:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-lg p-6">
                <Settings className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">5-Achs-Bearbeitungszentren</h3>
                <p className="text-sm text-muted-foreground mb-3">Das Premium-Showcase-Objekt. Spindel-Schwenk plus Tisch-Rotation = visuelle Bewegung in 5 Dimensionen.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:10 bis 1:12</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Cog className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">CNC-Drehmaschinen mit Y-Achse</h3>
                <p className="text-sm text-muted-foreground mb-3">Hauptspindel rotierbar, Gegenspindel als Schnittansicht, Werkzeug-Revolver demonstrierbar.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:8</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Activity className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Schleifmaschinen</h3>
                <p className="text-sm text-muted-foreground mb-3">Schleifscheibe-Wechsler als rotierende Komponente, Kühlmittel-System als farblicher Akzent.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:10</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Wrench className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Werkzeugaufnahmen / Spindel-Schnittmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Eigenständiges Showcase-Modell für Komponenten-Hersteller. HSK, SK, Capto-Schnittstellen explodiert dargestellt.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:1 bis 2:1</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIAL-EMPFEHLUNG SPEZIFISCH */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Material-Empfehlung für Werkzeugmaschinen-Modelle</h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Die Material-Schichtung (Standard-Empfehlung)</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">PETG für Hauptkorpus</div>
                    <p className="text-sm text-muted-foreground">Verschalung, Maschinen-Gehäuse, Sockel. Daueranfass-resistent, hält 15+ Messen, schlagzäh bei Transport-Stoß.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">PA-CF für bewegliche Komponenten</div>
                    <p className="text-sm text-muted-foreground">Spindel, Spindel-Aufnahme, Werkzeug-Wechsler-Karussell. Carbon-Faser-Verstärkung = mechanische Belastbarkeit, 50-100+ Bewegungs-Zyklen/Tag ohne Verschleiß.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">ABS für Detail-Inlays + Lackier-Akzente</div>
                    <p className="text-sm text-muted-foreground">Bedienpanel, Logos, farbige Akzent-Komponenten. Aceton-glättbar für Spritzguss-Look. 2K-Lackierung im Original-RAL.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">Optional: PLA mit Flammschutz für EMO/Hannover-Standabnahme</div>
                    <p className="text-sm text-muted-foreground">Wenn Modell-Größe über 1m² Standfläche: B1-fähiges PLA als Außen-Komponenten, Material-Nachweis liegt bei.</p>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/ratgeber/fdm-material-vergleich" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              Vertiefung: vollständiger Material-Vergleich nach ISO-Normen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CASE-STORY */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case: Werkzeugmaschinen-Schnittmodell 1:8</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Werkzeugmaschinen-Hersteller aus dem Industrieviertel NÖ. Original-CNC-Fräse 2,8×1,9×2,3 m,
              Auftragswert in Standardausstattung €180-280k. Showcase-Bedarf für EMO Hannover und METAV
              Düsseldorf gleichzeitig.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Projekt-Specs</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:8</strong></div>
                <div><span className="text-muted-foreground">Modell-Größe:</span> <strong>35×24×29 cm</strong></div>
                <div><span className="text-muted-foreground">Material:</span> <strong>PETG + PA-CF + ABS-Inlays</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B1-fähig (für EMO)</strong></div>
                <div><span className="text-muted-foreground">Bewegliche Komponenten:</span> <strong>Spindel + Werkzeug-Wechsler</strong></div>
                <div><span className="text-muted-foreground">Lackierung:</span> <strong>2K im Original-RAL 7035</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit:</span> <strong>4 Wochen ab CAD</strong></div>
                <div><span className="text-muted-foreground">Auftragswert:</span> <strong>€4.800</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-bold mb-2">Ergebnis nach 4 Messen (EMO + METAV + AMB + Hausmesse)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Stand-Verweildauer auf 4-6 Minuten gestiegen (vorher 1-2 Min), Anfrage-Quote für Standard-Maschinen +85%,
                  davon ~30% in qualifizierte Sales-Calls überführt. ROI nach erster Messe-Saison: amortisiert plus +€340k Mehrumsatz.
                </p>
              </div>
            </div>
            <Link href="/cases/maschinenbau-werkzeugmaschine-schnitt" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-6">
              Vollständige Case-Story lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* WARUM JETZT: Sales-Drive-Block */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Was Sie konkret davon haben</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Engineer-Magnet am Stand</h3>
                <p className="text-sm text-muted-foreground">Fachpublikum bleibt 3-8 Minuten am Modell. Genug Zeit für die Spec-Tiefe, die ein Verkaufs-Gespräch braucht. Tablet-Demo schafft das nicht.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Gauge className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Multi-Messen-Investition</h3>
                <p className="text-sm text-muted-foreground">Ein €4.800-Modell hält 15-20 Messen durch. Pro Messe entstehen €240-320 Modell-Kosten — bei 4 Messen/Jahr × 3 Jahre = 12 Einsätze.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Pricing-Talk am Modell</h3>
                <p className="text-sm text-muted-foreground">Engineer fragt "was kostet die Standard-Version?" → der Stand-Mitarbeiter hat das Modell als visuellen Anker für die Antwort. Pricing-Gespräche werden konkreter.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Schnell verfügbar</h3>
                <p className="text-sm text-muted-foreground">4-5 Wochen ab CAD-Eingang ist Standard. Klassische Modellbauer brauchen 12-16 Wochen. Wenn Ihre nächste Messe in 8 Wochen ist — wir liefern. Sie nicht.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> wenn Sie pro Messe-Saison 4 Messen besuchen und das Modell
                Ihre durchschnittliche Anfrage-Quote von 6 auf 12 hebt — das sind 24 zusätzliche qualifizierte
                Anfragen/Jahr. Bei einer typischen 25% Konversionsrate und €120k Ø-Auftragswert: 6 zusätzliche
                Abschlüsse × €120k = <strong className="text-primary">+€720k Mehrumsatz/Jahr</strong>. ROI eines €5.000-Modells:
                <strong className="text-primary"> 14.300% im ersten Jahr</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Maschinenbau-Messemodelle</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-lg">
                  <summary className="px-6 py-4 cursor-pointer font-bold flex items-start justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-primary group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 mb-6">
              <h3 className="text-2xl font-bold mb-3">Mehr Branchen-Showcase-Strategien</h3>
              <p className="text-muted-foreground mb-6">Im übergeordneten Messemodell-Guide finden Sie Brennstoffklassen-Tabellen, Maßstab-Strategien und ROI-Rechnungen für alle 6 Industrie-Cluster.</p>
              <Link href="/ratgeber/messemodell-guide" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                Zum Master-Guide Messemodelle <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/branchen/maschinenbau" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Maschinenbau</div>
                <div className="text-sm text-muted-foreground">Service-Übersicht, Auftrag direkt anfragen</div>
              </Link>
              <Link href="/messemodelle" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Service Messemodelle</div>
                <div className="text-sm text-muted-foreground">Preise, Liefer-Optionen, Festpreis-Angebot</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Werkzeugmaschinen-Modell anfragen</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Festpreis-Angebot binnen 6 Stunden nach CAD-Eingang. NDA-konforme Projektabwicklung.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/kontakt" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Festpreis-Angebot anfragen <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+436765517197" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium">
                <Phone className="w-4 h-4" /> +43 676 5517197
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
