/**
 * Spoke: Messemodelle Anlagenbau
 * /ratgeber/messemodell-anlagenbau
 *
 * Hauptmessen: Achema Frankfurt, POWTECH Nürnberg, IFAT München, K Düsseldorf.
 * Spitze: Segmentierbare Module für Multi-Stand-Strategie, Schnittmodelle
 * mit farblicher Materialfluss-Markierung.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Factory, Activity, Layers,
  Droplets, Beaker, Package, Target, Clock, TrendingUp,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Anlagenbau — Verfahrenstechnik, Pumpen, Reaktoren [Guide]'
const DESCRIPTION =
  'Messemodelle für Anlagenbau-Aussteller: Verpackungsanlagen, Förderbänder, Reaktoren, Pumpen-Schnittmodelle. Achema Frankfurt, POWTECH Nürnberg, IFAT München. Segmentierbare Module, ROI-Rechnungen.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-anlagenbau'),
  keywords: [
    'messemodell anlagenbau', 'verpackungsanlage modell', 'förderanlage messemodell',
    'reaktor modell 3d druck', 'pumpe schnittmodell messe', 'achema frankfurt messemodell',
    'powtech messemodell', 'ifat münchen messemodell', 'k düsseldorf anlagenbau',
    'verfahrenstechnik showcase', 'industrieanlage modell', 'prozessanlage messe',
  ].join(', '),
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-anlagenbau',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z', modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Anlagenbau — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Messemodelle für Anlagenbau-Aussteller — Verfahrenstechnik, Pumpen, Reaktoren',
  description: DESCRIPTION, datePublished: '2026-05-31', dateModified: '2026-05-31',
  author: { '@type': 'Person', name: BRAND.founderName, url: 'https://www.ek-druck.at/ueber-uns', jobTitle: 'Inhaber & Gründer ekdruck e.U.' },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-anlagenbau',
  about: [
    { '@type': 'Thing', name: 'Verfahrenstechnik-Modelle' },
    { '@type': 'Thing', name: 'Anlagen-Schnittmodelle' },
    { '@type': 'Thing', name: 'Achema Frankfurt' },
    { '@type': 'Thing', name: 'POWTECH Nürnberg' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Welche Maßstäbe funktionieren für Verfahrenstechnik-Anlagen?',
    answer: '1:10 bis 1:25 sind Standard. Pumpen-Schnittmodelle: 1:5 — Detail-Bauteile (Laufrad, Lagerschalen, Wellendichtung) gut sichtbar. Komplette Förderanlagen mit Behälter und Steuerung: 1:10. Reaktoren mit Rohrleitungs-System: 1:15 oder 1:20. Vollständige Prozessanlagen (Misch- bis Befüll-Strecke): 1:25 mit Segmentierung in Module.',
  },
  {
    question: 'Können Sie Materialfluss-Wege im Modell sichtbar machen?',
    answer: 'Ja — das ist eines der häufigsten Sonderwünsche bei Anlagenbau-Modellen. Über farblich differenzierte Rohrleitungen nach DIN 2403 (Edukte, Produkte, Hilfsmedien, Kühlung). Bei Förderanlagen über farbige Materialfluss-Indikatoren am Sockel (z.B. blaue Linien = Rohstoffe, grün = Endprodukt). Wir gravieren oder lackieren die Indikatoren — beides hält Multi-Messen-Einsatz problemlos durch.',
  },
  {
    question: 'Welche Brennstoffklasse fordert die Achema Frankfurt?',
    answer: 'Achema folgt der DECHEMA + Messe Frankfurt Standabnahme: B1 für alle Stand-Komponenten Pflicht, auch für Modell-Exponate. Bei den Großständen der Achema (häufig 100+ m² für Anlagenbau-Konzerne) wird der Material-Nachweis fast immer angefordert. Wir empfehlen Polycarbonat-FR für die Hauptkorpus-Komponenten und additiviertes PLA für die Detail-Aufbauten. Material-Zertifikat liegt jedem Auftrag bei.',
  },
  {
    question: 'Lohnt sich Segmentierung in einzelne Anlagen-Module?',
    answer: 'Bei Multi-Standort-Strategien klar ja. Wir konstruieren komplexe Prozessanlagen-Modelle in modulare Segmente (z.B. Aufbereitung-Modul + Reaktor-Modul + Abfüll-Modul). Jedes Modul ist eigenständig demonstrierbar. Vorteile: (1) parallele Ausstellung an mehreren Messeständen, (2) zukünftige Erweiterungen — neues Modul für neue Anlagen-Variante einfach dazu drucken, (3) Reparatur einzelner beschädigter Module ohne Komplettverlust.',
  },
  {
    question: 'Können Sie Pumpen-Schnittmodelle mit drehendem Laufrad bauen?',
    answer: 'Ja — eines der häufigsten Anfragen für Pumpen-Hersteller. Laufrad dreht über kleinen USB-Servomotor (von der Unterseite unsichtbar versteckt). Realistisches Drehzahl-Reduce auf 10-30 U/min für den visuellen Eyecatcher-Effekt. Gehäuse als Schnittansicht mit eingebauten Schaufeln, Wellendichtung sichtbar, Lagerschalen detailliert. PA-CF für die belasteten Drehkomponenten. Standzeit bei normaler Messe-Demonstration: 50-100 Bewegungs-Zyklen pro Tag ohne Verschleiß.',
  },
  {
    question: 'Wie zeigt man Steuerungs-Systeme und Sensorik am Modell?',
    answer: 'Über lasergravierte Beschriftungen direkt am Modell und dezente Mini-LED-Indikatoren. Konkret: an Reaktor-Modellen Anzeigen für Druck/Temperatur als gravierte Skalen oder kleine OLED-Mini-Displays (USB-powered). Sensor-Positionen werden mit Mini-LEDs markiert (3mm-LED, USB-Strang). Schaltschränke separat als Modul mit Front-Tür zum Öffnen — innen sind Klemmen und Logos der Steuerung-Komponenten.',
  },
  {
    question: 'Was kostet eine typische Anlagenbau-Modell-Aufstellung?',
    answer: 'Pumpen-Schnittmodell 1:5 mit drehendem Laufrad: €3.000-5.500. Mittlere Förderanlage 1:10 (~80 cm) mit beweglichen Komponenten: €4.500-9.000. Vollständige Prozessanlage 1:25 (segmentiert, mit Beleuchtung und Materialfluss-Markierung): €8.500-18.000. Premium-Vollanlagen mit interaktiver Touch-Bedienung und Animation: €15.000-35.000. Vergleich klassische Modellbauer: 2-4x höhere Preise bei 3-4x Lieferzeit.',
  },
]

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Anlagenbau', item: 'https://www.ek-druck.at/ratgeber/messemodell-anlagenbau' },
  ],
}

export default function MesseModellAnlagenbauPage() {
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
              { name: 'Messemodell Anlagenbau', url: '/ratgeber/messemodell-anlagenbau' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Factory className="w-4 h-4" /> Branchen-Spoke: Anlagenbau
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Anlagenbau-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Verfahrenstechnik-Schnittmodelle mit drehenden Laufrädern, segmentierbare Prozessanlagen für Multi-Standort-Strategien,
              farbcodierte Materialfluss-Markierung nach DIN 2403. Für Achema Frankfurt, POWTECH Nürnberg, IFAT München, K Düsseldorf.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Hauptattraktor:</strong> drehende Laufräder + Materialfluss-Sichtbarkeit über farbige Rohrleitungs-Codierung.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:5 für Pumpen-Schnitte, 1:10 für mittlere Anlagen, 1:25 für Vollprozessanlagen.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Modularität:</strong> Multi-Stand-Strategien durch Segmentierung in eigenständige Anlagen-Module.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €3.000-18.000 für Standard-Anlagenbau-Showcase je nach Komplexität.</span></li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Verfahrenstechnik-Showcase-Dilemma</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eine komplette Pharma-Befüll-Linie ist 18 m lang, 4 Module hintereinander, mehrere Tonnen schwer. Auf die Achema
              Frankfurt zu transportieren? Logistisch möglich, wirtschaftlich grenzwertig. Was wirklich passiert: Anlagenbauer
              stellen einzelne Komponenten aus — eine Befüll-Düse, ein Reaktor-Detail, ein Sektion-Querschnitt. Der Pharma-Einkäufer
              muss sich die komplette Linie aus diesen Einzelteilen <em>vorstellen</em>.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Genau hier entscheidet sich der Deal — oder eben nicht. Wer sich den Materialfluss visuell vorstellen kann, fragt
              nach Durchsatz-Werten. Wer ihn nicht sieht, zieht weiter. Ein 1:10-Vollanlagen-Modell mit farbcodierten Rohrleitungen
              zeigt den Materialfluss komplett. Vom Eingang bis zum Befüll-Ende.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Originalkomponenten am Stand</h3>
                <p className="text-sm text-muted-foreground">Einzelne Düse, ein Reaktor-Detail. Einkäufer muss sich Vollanlage gedanklich zusammenbauen.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">CAD-Animation am Bildschirm</h3>
                <p className="text-sm text-muted-foreground">Glatt, geschönt. Materialfluss-Annahme stimmt nie genau mit Realität überein. Einkäufer-Misstrauen.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">1:10-Vollanlage mit farbcodierten Linien</h3>
                <p className="text-sm text-muted-foreground">Kompletter Materialfluss sichtbar. Pumpe dreht. Reaktor-Schnitt offen. Einkäufer fragt nach Durchsatz.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die Anlagenbau-Leitmessen in DACH + Europa</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Achema Frankfurt</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Weltforum Verfahrenstechnik</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 3 Jahre, ~3.800 Aussteller, ~140.000 Fachbesucher. Pharma, Chemie, Bio, Lebensmittel-Verfahrenstechnik.
                  Großstände 100+ m² die Norm — entsprechend strenge Standabnahme über DECHEMA. B1 zwingend für alle Stand-
                  Komponenten inkl. Modell-Exponate. Modelle hier sind oft Premium-Investitionen für die 3-Jahres-Cycle bis zur nächsten Achema.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">POWTECH Nürnberg</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Pulver- + Schüttgut-Technik</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich, Fokus auf Pulver- und Schüttgut-Verarbeitung — Misch-, Trenn-, Förder-, Lager-Technik. Mittelstands-fokussiert,
                  Engineering-Publikum. B2 oft ausreichend, B1 bei Großständen. Modelle mit Förder-Schnecken-Bewegung sind hier
                  besondere Eyecatcher.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">IFAT München</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Umwelttechnik + Wasseraufbereitung</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, weltweit größte Umwelt-Tech-Messe. Wasseraufbereitung, Abfall-Recycling, Kreislaufwirtschaft, Bioenergie.
                  Modelle mit blau-grünen Materialfluss-Akzenten (Wasser, Reststoffe) gut visualisiert. B1 bei Stand über 30 m².
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">K Düsseldorf</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Kunststoff- + Kautschuk-Industrie</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 3 Jahre, die größte Kunststoff-Messe der Welt. Extrusionsanlagen, Spritzgusss, Folien-Extruder, Compoundier-Maschinen.
                  Für Anlagenbauer eine Goldgrube für Premium-Anfragen — hohe Standabnahme-Anforderungen, B1 strikt durchgesetzt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welche Anlagen-Typen besonders gut zeigbar sind</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-lg p-6">
                <Droplets className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Pumpen-Schnittmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Premium-Showcase. Laufrad rotierbar, Wellendichtung sichtbar, Gehäuse als Querschnitt. Eyecatcher der Pumpen-Branche.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:5</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Layers className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Förder- + Misch-Anlagen</h3>
                <p className="text-sm text-muted-foreground mb-3">Schnecken drehen, Behälter mit Schnittansicht-Innenraum, farbcodierte Materialfluss-Linien.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:10</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Beaker className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Reaktoren + Behälter</h3>
                <p className="text-sm text-muted-foreground mb-3">Rührwerk-Bewegung, Heiz-/Kühl-Mantel als Detail, Rohrleitungs-Anschlüsse farbcodiert.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:15</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Package className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Verpackungs- + Befüll-Linien</h3>
                <p className="text-sm text-muted-foreground mb-3">Komplette Befüll-Strecke, segmentiert in Module. Multi-Stand-Strategie möglich.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:20 bis 1:25</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Modulares Anlagen-Design — Multi-Stand-Strategie</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Wenn Sie an mehreren Messen parallel ausstellen oder bei Kunden-Vor-Ort-Demonstrationen unabhängig vom Hauptstand
              präsentieren wollen, ist Modularität der entscheidende Hebel. Wir konstruieren Anlagen-Modelle bewusst segmentiert:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">Logische Anlagen-Sektionen als eigenständige Module</div>
                    <p className="text-sm text-muted-foreground">Aufbereitung-Modul, Reaktor-Modul, Trenn-Modul, Befüll-Modul — jedes selbst-stehend, mit eigenem Sockel, eigener Beschriftung.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">Magnetische Anschluss-Stellen zwischen Modulen</div>
                    <p className="text-sm text-muted-foreground">Rohrleitungs-Übergänge werden über Neodym-Magnete verbunden. Komplettes Wiederaufbauen für Vollanlagen-Demo am Hauptstand in 10-15 Min.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">Erweiterbarkeit für zukünftige Anlagen-Varianten</div>
                    <p className="text-sm text-muted-foreground">Wenn Sie nächstes Jahr eine neue Modul-Variante (z.B. Pulver-Aufbereitung statt Granulat) entwickeln — wir drucken nur das neue Modul, der Rest bleibt.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">Reparatur einzelner Module ohne Komplettverlust</div>
                    <p className="text-sm text-muted-foreground">Bei Transport-Schaden eines Moduls — Neudruck des einzelnen Moduls in 5-10 Werktagen. Komplettes Vollanlagen-Modell wäre 5-8 Wochen Re-Produktion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case: Pumpen-Schnittmodell für Anlagenbauer OÖ</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Pumpen-Hersteller aus der OÖ-Industrieregion. Industrielle Kreiselpumpe, Hauptanwendung in der Verfahrenstechnik
              (Chemie-Anlagen, Pharma-Linien). Showcase-Bedarf für POWTECH und Achema sowie für Hausmesse-Auftritte.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Projekt-Specs</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:5</strong></div>
                <div><span className="text-muted-foreground">Modell-Größe:</span> <strong>~45×30×35 cm</strong></div>
                <div><span className="text-muted-foreground">Schnittansicht:</span> <strong>Halbseitig — Detail innen + Außen-Designlinie</strong></div>
                <div><span className="text-muted-foreground">Bewegliches Element:</span> <strong>Laufrad rotierbar (USB-Servo)</strong></div>
                <div><span className="text-muted-foreground">Material:</span> <strong>PETG + PA-CF Laufrad + ABS-Lack-Detail</strong></div>
                <div><span className="text-muted-foreground">Lackierung:</span> <strong>2K Premium, Aceton-geglättet</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B2 (Standardmessen)</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit:</span> <strong>3 Wochen ab CAD</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Lehre aus dem Projekt:</strong> die halbseitige Schnittansicht (eine Seite geschlossen
                  + lackiert = Verkaufs-Optik, andere Seite offen = Engineering-Detail) ist die optimale Lösung für Pumpen-Showcase.
                  Marketing-Manager bekommt das schöne Foto für Pressematerial, Engineer kann das technische Innenleben sehen.
                </p>
              </div>
            </div>
            <Link href="/cases/anlagenbau-pumpen-schnittmodell" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-6">
              Vollständige Case-Story lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Was Sie konkret davon haben</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Activity className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Materialfluss-Visualisierung</h3>
                <p className="text-sm text-muted-foreground">Komplette Prozess-Linien werden vom Bildschirm-Konzept zu anfassbarer Realität. Einkäufer versteht das System in Sekunden, nicht Minuten.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Layers className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Multi-Standort-Strategie</h3>
                <p className="text-sm text-muted-foreground">Segmentierte Module → an mehreren Messen gleichzeitig oder im Wechsel zwischen Hauptmesse, Hausmesse, Kunden-Demos. ROI-Multiplier-Effekt.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Engineer-Trust durch Detail-Tiefe</h3>
                <p className="text-sm text-muted-foreground">Bewegliche Komponenten + korrekte Rohrleitungs-Codierung = Engineering-Glaubwürdigkeit. Pharma-Einkäufer kaufen kein Vertrauen, sie testen es am Detail.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">3-Jahres-Achema-Cycle nutzen</h3>
                <p className="text-sm text-muted-foreground">Achema findet nur alle 3 Jahre statt. Ein Premium-Modell, das die nächsten 3 Jahre alle Messen abdeckt, ist die wirtschaftlichste Investition.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> ein €4.500-Schnittmodell für Pumpen-Hersteller über 3 Messen pro Jahr × 3 Jahre =
                9 Messeauftritte. Anfrage-Steigerung von 8 auf 18 pro Messe = 90 zusätzliche Anfragen über die Modell-Lebenszeit.
                Bei 22%-Konversion und €105k Ø-Auftragswert: 20 zusätzliche Abschlüsse = <strong className="text-primary">+€2,1 Mio Mehrumsatz</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Anlagenbau-Messemodelle</h2>
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
              <Link href="/branchen/anlagenbau" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Anlagenbau</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Anlagenbau-Modell anfragen</h2>
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
