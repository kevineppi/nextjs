/**
 * Spoke: Messemodelle Schiffbau
 * /ratgeber/messemodell-schiffbau
 *
 * Branchen-spezifisch: Vollschiff-Modelle, Antriebe, Propeller.
 * Hauptmessen: SMM Hamburg, Europort Rotterdam, Posidonia Athen.
 * Spitze: 1:50-1:100 Vollschiffmodelle mit segmentierten Magnetverbindungen.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Ship, Anchor, Compass,
  Waves, Wind, Globe, Target, Clock, TrendingUp,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Schiffbau — Vollschiff, Antriebe, Propeller [Guide]'
const DESCRIPTION =
  'Messemodelle für Schiffbau-Aussteller: Vollschiff 1:50-1:100, Propeller-Detail, Antriebs-Schnittmodelle, segmentiert mit Magnetverbindungen. SMM Hamburg, Europort Rotterdam, Posidonia. Konkrete Cases + ROI.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-schiffbau'),
  keywords: [
    'messemodell schiffbau', 'vollschiffmodell 3d druck', 'schiffsantrieb modell',
    'propeller modell messe', 'smm hamburg messemodell', 'europort messemodell',
    'schiffsmodell maßstabsgetreu', 'maritime messe modell', 'schiff modellbau 3d druck',
    'antrieb messemodell', 'azimuth thruster modell', 'schiffsdiesel modell',
  ].join(', '),
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-schiffbau',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z', modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Schiffbau — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Messemodelle für Schiffbau-Aussteller — Vollschiff, Antriebe, Propeller',
  description: DESCRIPTION, datePublished: '2026-05-31', dateModified: '2026-05-31',
  author: { '@type': 'Person', name: BRAND.founderName, url: 'https://www.ek-druck.at/ueber-uns', jobTitle: 'Inhaber & Gründer ekdruck e.U.' },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-schiffbau',
  about: [
    { '@type': 'Thing', name: 'Vollschiffmodelle' },
    { '@type': 'Thing', name: 'Schiffsantriebe' },
    { '@type': 'Thing', name: 'SMM Hamburg' },
    { '@type': 'Thing', name: 'Europort Rotterdam' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Welcher Maßstab passt für ein Vollschiff-Modell?',
    answer: 'Bei Standardschiffen 80-120 m Länge (Container-Feeder, Schlepper, Bulker) sind 1:50 bis 1:100 üblich. Das ergibt Modell-Längen von 80 cm bis 2,4 m. Bei längeren Schiffen (Tanker, Cruise-Liner über 200 m) gehen wir auf 1:150 oder 1:200, sonst wird das Modell nicht transportabel. Für Komponenten-Modelle (nur Heck, nur Antrieb) sind 1:25 bis 1:50 sinnvoll — Detail bleibt sichtbar, Standfläche begrenzt.',
  },
  {
    question: 'Wie werden 2-m-Vollschiffmodelle transportiert?',
    answer: 'Segmentiert mit Magnetverbindungen. Wir konstruieren Modelle ab ~1,5 m bewusst in 3-5 Hauptsegmente — Bug, Vorderschiff, Mittelschiff, Achterschiff, Aufbau. Trennstellen entlang natürlicher Schiffslinien (Brücken-Front, Schott-Übergänge) und mit Magnet-Verbindungen die im Stand-Aufbau zusammenrasten. Transport in maßgefertigter Holzkiste mit Schaumstoff-Inserts pro Segment. Aufbauzeit am Messestand: 10-20 Minuten.',
  },
  {
    question: 'Welche Brennstoffklasse ist auf der SMM Hamburg Pflicht?',
    answer: 'SMM Hamburg (Hamburg Messe) verlangt B1 für tragende Stand-Komponenten und für Modell-Exponate über 1 m² Standfläche. Vollschiffmodelle über ~80 cm Länge fallen typisch darunter. Wir empfehlen Polycarbonat-FR für die belasteten Außen-Hüllen und additiviertes PLA für die Detail-Aufbauten. Material-Zertifikat wird auf Anfrage vor Standabnahme bereitgestellt.',
  },
  {
    question: 'Können Propeller und Ruder bewegliche Komponenten sein?',
    answer: 'Ja — bewegliche Propeller und Ruder sind eines der häufigsten Sonderwünsche bei Schiff-Modellen. Bei Azimuth-Thrustern: rotierende 360°-Schwenk-Mechanik mit POM-Lagern oder Messing-Buchsen. Bei Festpropellern: drehbare Achse mit kleinem Servo-Motor (USB-powered). Bei Ruderblättern: manueller Schwenk-Mechanismus über Drehknopf am Sockel. PA-CF für die belasteten Drehkomponenten — hält 50-100 Demonstrations-Zyklen pro Messetag durch.',
  },
  {
    question: 'Eignen sich 3D-Druck-Modelle für Premium-Schiffbau-Aussteller wie Meyer Werft oder Lürssen?',
    answer: 'Für Komponenten und Detail-Showcases klar ja — Antriebsmodelle, Propeller-Detail, Schnittmodelle Schiffsdiesel. Für Premium-Vollschiff-Modelle (Yachten, Cruise-Liner) mit Spritzguss-Look und Glanz-Lackierung ist die Kombination 3D-Druck + manuelle Veredelung (Aceton-Glättung, mehrlagige Premium-Lackierung) Standard — aber Lieferzeit verlängert sich auf 6-9 Wochen. Für absolute Showcase-Spitze (Werfteröffnungs-Modelle, Konzern-Repräsentation) sind klassische Modellbauer mit Acryl-Klarsicht-Glas-Elementen oft noch überlegen.',
  },
  {
    question: 'Was kostet ein Vollschiff-Modell mit Antrieb-Detail?',
    answer: 'Standard-Range für 1:100-Vollschiff (1,0-1,2 m, segmentiert): €5.500-9.500 inkl. Lackierung in Reederei-Farbgebung. Mit beweglichem Azimuth-Propeller +€1.200-2.000. Bei 1:50 (2-3 m Länge, segmentiert in 5-7 Module): €9.000-18.000. Komponentenmodelle (nur Antrieb 1:25, ~50 cm): €3.500-6.500. Vergleichswerte klassische Modellbauer für gleiche Komplexität: €25.000-60.000 bei 14-22 Wochen Lieferzeit.',
  },
  {
    question: 'Können Sie auch Hafenmodelle oder Werft-Layouts bauen?',
    answer: 'Ja, das ist ein eigener Teilbereich — Hafenmodelle mit Anlegestellen, Kran-Anlagen, Container-Stapel, Wasserflächen-Andeutung. Maßstäbe 1:200 bis 1:500. Wasserflächen werden über farbig lasiertes Acrylglas simuliert (3-5 mm Dicke). Stilisierte Kran-Anlagen mit drehbaren Auslegern, Container in verschiedenen Reederei-Farben. Preisbereich €8.000-22.000 je nach Detail-Tiefe und Modell-Größe. Typische Kundengruppe: Hafenbetreiber, Werft-Betreiber, Logistik-Anbieter.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Schiffbau', item: 'https://www.ek-druck.at/ratgeber/messemodell-schiffbau' },
  ],
}

export default function MesseModellSchiffbauPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="bg-background text-foreground">
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[
              { name: 'Ratgeber', url: '/ratgeber' },
              { name: 'Messemodell Schiffbau', url: '/ratgeber/messemodell-schiffbau' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Ship className="w-4 h-4" /> Branchen-Spoke: Schiffbau
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Schiffbau-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maßstabsgetreue Vollschiffmodelle, Antriebs-Schnittmodelle und Propeller-Details für SMM Hamburg,
              Europort Rotterdam und Posidonia Athen. Segmentiert mit Magnetverbindungen, lackiert in Reederei-Farbgebung,
              bewegliche Azimuth-Thruster auf Wunsch.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:50 bis 1:100 für Standard-Schiffe (80-120 m Original), 1:150 bei Großschiffen.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Segmentierung:</strong> Modelle über 1,5 m grundsätzlich in 3-5 Magnet-Module aufgeteilt für Transport.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Brennstoffklasse:</strong> B1 international Standard auf maritimen Messen — wir liefern Material-Zertifikat.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €5.500-18.000 für Vollschiff je nach Maßstab und Komponenten-Detail.</span></li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Schiffbau-Showcase-Dilemma</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eine 12.000-DWT-Bulker-Werft präsentiert auf der SMM ihre neue Schiffsklasse. Das Original-Schiff ist 145 m lang,
              wiegt leer 4.800 Tonnen, kostet €28-35 Mio. Es kommt nicht in die Hamburger Messehalle. Was den Stand der Werft
              ausmacht, sind Renderings, ein paar Bauteile aus dem Antriebsstrang — und seit 2019 zunehmend maßstabsgetreue
              3D-gedruckte Vollschiffmodelle.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Der Reeder-Einkäufer geht nicht zum Modell wegen der Optik. Er geht hin, weil er die <em>Hydrodynamik-Linien</em>{' '}
              sehen will, die <em>Wulstbug-Form</em>, die <em>Heck-Geometrie für den Propeller-Tunnel</em>. Genau das was Renderings
              nicht zeigen, weil sie aus jeder Perspektive geschönt sind. Das physische Modell zeigt die Wahrheit.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Renderings als Stand-Backdrop</h3>
                <p className="text-sm text-muted-foreground">Bildschirm-Loop, geschönte Perspektiven. Reeder will Linien-Wahrheit, sieht Marketing-Bild.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Bauteile aus dem Antriebsstrang</h3>
                <p className="text-sm text-muted-foreground">Lagerschalen, Wellen-Stücke. Engineer-relevant, aber Reeder-Einkäufer braucht Schiff-Kontext.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">1:100-Vollschiff mit Antriebs-Schnitt</h3>
                <p className="text-sm text-muted-foreground">Linien sichtbar, Antriebs-Bereich aufklappbar, Propeller drehbar. Reeder bleibt 8-15 Minuten.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die maritimen Leitmessen — was wo verlangt wird</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">SMM Hamburg</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Weltleitmesse Maritime</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, ~2.200 Aussteller aus 70 Nationen, ~50.000 Fachbesucher. Internationale Reeder-Einkäufer-Basis,
                  Schiffsklassifikations-Gesellschaften (DNV, Lloyd's, BV) als Auditoren mit am Stand. B1-Standard, Material-Nachweis
                  zwingend. Modell-Qualität wird hier mit dem höchsten Maßstab gemessen — Schraubendetails, Propeller-Geometrie,
                  Brücken-Aufbau müssen exakt sein.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Europort Rotterdam</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Spezialschiff-Messe</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre (Zwischenjahr zu SMM), Fokus auf Offshore, Workboats, Specialized Vessels. Standabnahme über Ahoy
                  Rotterdam — niederländischer Brandschutz-Standard, B1 für tragende Komponenten. Stark technisches Publikum,
                  Antriebs- und Manövriersystem-Details sind hier die Diskussions-Themen.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Posidonia Athen</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Reederei-Konzentration</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, höchste Konzentration internationaler Reederei-Entscheidungsträger weltweit (griechische Reeder
                  besitzen ~17% der weltweiten Handelsflotte). Standabnahme moderater als Hamburg, B2 mit Material-Nachweis akzeptiert.
                  Hier zählt visuelle Premium-Wirkung — Lackier-Qualität entscheidet.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Nor-Shipping Oslo</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Nordeuropa-Maritime</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, Fokus auf nordische Schiffstechnik — Offshore, Fishing, Green-Shipping. Hohe Innovations-Erwartung,
                  Modelle für Hybrid- und E-Antriebe besonders nachgefragt. B1-Standard, strenger Brandschutz wegen norwegischer
                  Bauvorschriften.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welche Schiffstypen lassen sich besonders gut zeigen</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-lg p-6">
                <Ship className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Container-Feeder + Bulker</h3>
                <p className="text-sm text-muted-foreground mb-3">Klare Linien, sichtbarer Aufbau, drehbare Propeller-Achse. Standard-Maßstab 1:100.</p>
                <div className="text-xs text-muted-foreground">Original-Länge: <strong className="text-foreground">80-150 m</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Anchor className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Schlepper + Offshore-Workboats</h3>
                <p className="text-sm text-muted-foreground mb-3">Premium-Showcase. Azimuth-Thruster als Eyecatcher (rotierbar), kompakte Modell-Größe.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:50</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Compass className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Yachten (Refit + Newbuild)</h3>
                <p className="text-sm text-muted-foreground mb-3">Premium-Lackier-Look. Aceton-glättete ABS-Hülle für Spritzguss-Glanz. Detail-Hardware separat.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:25 bis 1:50</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Waves className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Antriebs-Komponentenmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Eigenständig: Diesel-Schnittmodell, Azimuth-Thruster 1:25, Propeller-Detail. Engineering-Detail-Tiefe.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:10 bis 1:25</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Material- und Lackier-Strategie für maritime Modelle</h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">PLA für Vollschiff-Außenhülle (Detail-Optimum)</div>
                    <p className="text-sm text-muted-foreground">Höchste Detailtreue für Linien-Genauigkeit. Indoor-Messen unkritisch. Bei B1-Anforderung: additiviertes PLA mit Flammschutz.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">PETG für Robust-Anwendung + Transport-Tauglichkeit</div>
                    <p className="text-sm text-muted-foreground">Multi-Messen-Strategie. Segmentierungs-Verbindungen aus PETG halten Transport-Stöße ohne Bruch.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">PA-CF für Azimuth-Thruster + bewegliche Propeller</div>
                    <p className="text-sm text-muted-foreground">Carbon-Faser-verstärkt für Drehbewegungs-Belastung. 100+ Schwenk-Zyklen/Messetag ohne Verschleiß.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">ABS + Aceton-Glättung für Premium-Hülle (Yachten)</div>
                    <p className="text-sm text-muted-foreground">Spritzguss-Optik durch Aceton-Dampf-Glättung. 2K-Premium-Lack in Reederei-Hausfarbe. Indoor-Premium-Showcase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case: Aktiv in Arbeit — Querschnitt-Schiffsmodell für Hamburger Eventagentur</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aktuell in unserer Werkstatt: Querschnitt-Schiffsmodell mit Antriebsbereich (Schottel-Antrieb) und
              Elektronik-Steuerung (Elkon-Komponenten) für eine Hamburger Eventagentur. Auftragswert ~€30.000. Fertigstellung
              August 2026 für Multi-Messen-Strategie der Endkunden.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Projekt-Specs</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:50</strong></div>
                <div><span className="text-muted-foreground">Modell-Größe:</span> <strong>~1,4 m × 60 cm</strong></div>
                <div><span className="text-muted-foreground">Segmentierung:</span> <strong>3-teilig magnetisch</strong></div>
                <div><span className="text-muted-foreground">Highlight:</span> <strong>Antriebs-Schnitt + Elektronik-Bereich</strong></div>
                <div><span className="text-muted-foreground">Material:</span> <strong>PETG + PLA-Detail + PA-CF Propeller</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B1 (Hamburger Messe-Standard)</strong></div>
                <div><span className="text-muted-foreground">Lackierung:</span> <strong>2K-Premium in Hauptkunde-Farbgebung</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit gesamt:</span> <strong>~12 Wochen</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Lehre aus dem Projekt:</strong> bei Mehrkomponenten-Modellen (Schottel + Elkon
                  = zwei Hersteller integriert) ist die Koordinations-Tiefe in der CAD-Konstruktion der größte Aufwands-Treiber.
                  Die reine Drucker-Zeit ist ~30% der Lieferzeit, der Rest entfällt auf 3-Wege-Abstimmung mit den Komponenten-Lieferanten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Was Sie konkret davon haben</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Linien-Wahrheit am Stand</h3>
                <p className="text-sm text-muted-foreground">Reeder-Einkäufer sehen die echte Hydrodynamik-Form, den Wulstbug, die Propeller-Tunnel-Geometrie. Renderings können das nicht — physische Modelle schon.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Internationale Reichweite</h3>
                <p className="text-sm text-muted-foreground">Modelle reisen mit nach Hamburg, Rotterdam, Athen, Oslo. Eine Investition × 4 internationale Leitmessen über 2 Jahre.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Wind className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Premium-Wirkung</h3>
                <p className="text-sm text-muted-foreground">Yacht- und Cruise-Aussteller setzen aufeinem Premium-Bild auf. 2K-Lack mit Aceton-Glättung erreicht Spritzguss-Optik ohne Spritzguss-Investment.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Geschwindigkeits-Vorteil</h3>
                <p className="text-sm text-muted-foreground">5-7 Wochen Lieferzeit für Vollschiff-Modelle inkl. Premium-Lackierung. Klassische Modellbauer: 14-22 Wochen. Wenn die SMM in 10 Wochen startet — wir liefern.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> ein €8.500-Vollschiff-Modell für 4 internationale Leitmessen über
                2 Jahre. Wenn die Anfrage-Quote von 8 auf 15 pro Messe steigt — das sind 28 zusätzliche qualifizierte
                Reeder-Anfragen über die Lebenszeit. Bei einem 15%-Konversions-Schnitt und €4-12 Mio Ø-Schiffspreis:
                4 zusätzliche Abschlüsse = <strong className="text-primary">+€16-48 Mio Mehrumsatz</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Schiffbau-Messemodelle</h2>
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
              <Link href="/branchen/schiffbau" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Schiffbau</div>
                <div className="text-sm text-muted-foreground">Service-Übersicht, Auftrag direkt anfragen</div>
              </Link>
              <Link href="/messemodelle" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Service Messemodelle</div>
                <div className="text-sm text-muted-foreground">Preise, Liefer-Optionen, Festpreis-Angebot</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schiffbau-Modell anfragen</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Festpreis-Angebot binnen 6 Stunden nach CAD-Eingang. NDA-konforme Projektabwicklung.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/kontakt" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">Festpreis-Angebot anfragen <ArrowRight className="w-5 h-5" /></Link>
              <a href="tel:+436765517197" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-medium"><Phone className="w-4 h-4" /> +43 676 5517197</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
