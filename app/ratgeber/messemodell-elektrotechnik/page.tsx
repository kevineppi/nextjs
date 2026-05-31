/**
 * Spoke: Messemodelle Elektrotechnik
 * /ratgeber/messemodell-elektrotechnik
 *
 * Hauptmessen: Hannover Messe Industrial, electronica München, embedded world,
 * SPS Nürnberg, Light + Building.
 * Spitze: Schaltschränke mit korrekter DIN 2403 / IEC 60446 Farbcodierung,
 * Komponenten-Showcases für Tier-Zulieferer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Lightbulb, Cpu, CircuitBoard,
  Cable, Target, Clock, TrendingUp, ShieldCheck,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Elektrotechnik — Schaltschränke, Messwandler, Komponenten [Guide]'
const DESCRIPTION =
  'Messemodelle für Elektrotechnik-Aussteller: Schaltschränke mit korrekter DIN 2403 / IEC 60446 Farbcodierung, Messwandler-Modelle, Komponenten-Schnittmodelle. Hannover Messe, electronica, embedded world, SPS.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-elektrotechnik'),
  keywords: [
    'messemodell elektrotechnik', 'schaltschrank modell 3d druck', 'messwandler modell',
    'iec 60446 farbcodierung modell', 'hannover messe elektrotechnik', 'electronica münchen messemodell',
    'embedded world messemodell', 'sps nürnberg modell', 'industrieautomation showcase',
    'komponenten messemodell', 'schaltanlage zulieferer modell', 'klemmen industrie modell',
  ].join(', '),
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-elektrotechnik',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z', modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Elektrotechnik — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Messemodelle für Elektrotechnik-Aussteller — Schaltschränke, Messwandler, Komponenten',
  description: DESCRIPTION, datePublished: '2026-05-31', dateModified: '2026-05-31',
  author: { '@type': 'Person', name: BRAND.founderName, url: 'https://www.ek-druck.at/ueber-uns', jobTitle: 'Inhaber & Gründer ekdruck e.U.' },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-elektrotechnik',
  about: [
    { '@type': 'Thing', name: 'Schaltschrank-Modelle' },
    { '@type': 'Thing', name: 'Messwandler-Modelle' },
    { '@type': 'Thing', name: 'electronica München' },
    { '@type': 'Thing', name: 'SPS Nürnberg' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Was unterscheidet Elektrotechnik-Modelle von Energietechnik-Modellen?',
    answer: 'Energietechnik fokussiert auf Strom-Erzeugung und -Verteilung im Großmaßstab (Windturbinen, Trafostationen, Vollumspannwerke für Energieversorger). Elektrotechnik fokussiert auf Komponenten und Schaltanlagen-Hersteller — Schaltschränke, Industrie-PCs, Klemmensysteme, Messwandler. Maßstab tendenziell kleiner (1:5 bis 1:10), Detail-Tiefe wichtiger, Zielgruppe sind Industrie-Einkäufer und Maschinenbauer als Endkunden der Komponenten.',
  },
  {
    question: 'Welche Maßstäbe funktionieren für Schaltschrank-Modelle?',
    answer: '1:5 ist Sweet-Spot für Standard-Industrie-Schaltschränke (Original ~1,8-2,2 m hoch). Ergibt Modell-Höhe 36-45 cm, alle Klemmen und Detail-Komponenten erkennbar. Bei Verteilerschränken (Original ~80 cm hoch): 1:3 für höchste Detail-Tiefe. Bei Großschalt-Anlagen mit mehreren Reihen: 1:10 oder 1:15 für komplette Anlage, mit einzelnem Schrank 1:1 oder 2:1 als Detail-Modell daneben.',
  },
  {
    question: 'Wie kritisch ist die DIN 2403 / IEC 60446 Farbcodierung am Modell?',
    answer: 'Für Elektrotechnik-Engineers ist sie absolut kritisch. Korrekte Farbcodierung am Modell signalisiert sofort: "der versteht unsere Branche". Falsche Codierung signalisiert: "der hat das nur visuell zusammengebaut, nicht verstanden". IEC 60446 für AC: L1 braun, L2 schwarz, L3 grau, N hellblau, PE grüngelb. DC: L+ rot, L- grau, M hellblau. Bei Rohrleitungen DIN 2403 für Hilfsmedien-Codierung. Wir gravieren oder lackieren — beides hält Multi-Messen-Einsatz problemlos durch.',
  },
  {
    question: 'Lassen sich Klemmensystem-Details realistisch darstellen?',
    answer: 'Ja, aber mit Maßstabs-Anpassung. Bei 1:5-Schaltschrank-Modellen ist die einzelne Reihenklemme 1-2 mm — die Form ist dann angedeutet, einzelne Schraubenköpfe als Mini-Details erkennbar. Bei 1:1-Detail-Modellen einzelner Klemmen oder Klemmenreihen kommen wir auf 0,2 mm Detailtreue — alle Funktionsbeschriftungen, Hersteller-Logos, Anschluss-Quirschnitte sind sichtbar. Diese Detail-Modelle sind typisch für Klemmen-Hersteller (Phoenix Contact, Weidmüller, Wago) als Premium-Showcase auf SPS und Hannover Messe.',
  },
  {
    question: 'Welche Brennstoffklasse ist auf der electronica München erforderlich?',
    answer: 'electronica München (Messe München) folgt der Münchner Standabnahme — B1 für tragende Stand-Komponenten Pflicht, für Modell-Exponate über 1m² Standfläche. Bei den Standard-Schaltschrank-Modellen (typisch 30-50 cm Höhe, kleinere Standfläche) wird häufig B2 toleriert, aber B1-Material-Nachweis sollte bereitliegen. Wir empfehlen B1-fähiges PLA mit Flammschutz-Additiv oder Polycarbonat-FR. Material-Zertifikat liegt jedem Auftrag bei.',
  },
  {
    question: 'Sind interaktive Demonstrationen wie LED-Anzeigen oder Schaltbewegungen möglich?',
    answer: 'Ja, das ist sogar einer der Trends in Elektrotechnik-Showcases. Mini-LED-Indikatoren (3mm-LEDs, USB-powered) für Strom-Anzeigen, OLED-Mini-Displays für Mess-Werte, kleine Servo-Motoren für Schalt-Bewegungen (Hauptschalter klappt, Türen öffnen). Komplett-Setup-Kosten ab €600-1.500 je nach Anzahl der interaktiven Elemente. Stromversorgung typisch über USB-Strang von der Sockelunterseite, von oben unsichtbar.',
  },
  {
    question: 'Was kostet ein typisches Elektrotechnik-Showcase-Modell?',
    answer: 'Standard-Range: Schaltschrank 1:5 mit DIN-konformer Farbcodierung und beschrifteten Klemmen-Reihen: €3.500-6.500. Premium-Vollschrank mit klappbaren Türen, Klemmenreihen-Detail, LED-Status-Anzeigen: €6.000-11.000. Messwandler-Schnittmodell mit innenliegenden Wicklungen sichtbar: €2.500-4.500. Komponenten-Detail-Modelle (1:1 Klemmen, Sicherungsautomaten): €1.200-3.000. Vergleich klassische Modellbauer: 2-3x höhere Preise bei 3-4x Lieferzeit.',
  },
]

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Elektrotechnik', item: 'https://www.ek-druck.at/ratgeber/messemodell-elektrotechnik' },
  ],
}

export default function MesseModellElektrotechnikPage() {
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
              { name: 'Messemodell Elektrotechnik', url: '/ratgeber/messemodell-elektrotechnik' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Lightbulb className="w-4 h-4" /> Branchen-Spoke: Elektrotechnik
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Elektrotechnik-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Schaltschränke mit DIN-konformer Farbcodierung nach IEC 60446, Messwandler-Schnittmodelle, Komponenten-Detail-Modelle
              für Klemmenhersteller und Industrie-PC-Zulieferer. Für Hannover Messe, electronica München, embedded world Nürnberg
              und das gesamte DACH-Elektrotechnik-Cluster.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Engineering-Glaubwürdigkeit:</strong> korrekte IEC 60446 Farbcodierung (L1 braun, L2 schwarz, L3 grau, N hellblau, PE grüngelb).</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:5 für Standard-Schaltschränke, 1:3 für Verteilerschränke, 1:1 bis 2:1 für Komponenten-Detail-Modelle.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Zielgruppe:</strong> Schaltschrank-Bauer, Komponenten-Hersteller, Messwandler-Spezialisten, Klemmen-Anbieter.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €1.200-11.000 je nach Komplexität und Detail-Tiefe.</span></li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Elektrotechnik-Showcase-Problem — Detail-Genauigkeit entscheidet</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Im Gegensatz zu Maschinenbau- oder Schiffbau-Messen geht es bei Elektrotechnik nicht um die "8-Tonnen-Maschine
              die nicht in die Halle passt". Schaltschränke kann man mitnehmen. Das eigentliche Problem ist anders: Schaltschränke
              im Original sind <em>geschlossene Kästen</em>. Was den Buyer interessiert — die Innenausstattung, Klemmen-Layout,
              Komponenten-Anordnung — ist im normalen Standzustand nicht sichtbar.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Klar, Sie können einen Schrank auf der Messe offen lassen. Aber jeder Buyer sieht dann GENAU IHREN Schrank.
              Sie können nicht zeigen "hier ist die Standard-Variante, hier die Premium-Variante mit Smart-Grid-Anbindung, hier
              die explosionsgeschützte Version für Chemie-Anwendungen". Modelle ermöglichen Varianten-Showcase parallel.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Plus: 1:5-Modelle mit klappbaren Türen erlauben dem Buyer, selbst zu öffnen und das Innere zu erkunden — ein
              psychologischer Akt der Beteiligung, der die Aufenthaltsdauer am Stand verdreifacht.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Originalschrank geschlossen</h3>
                <p className="text-sm text-muted-foreground">Buyer sieht Außenkasten. Innenausstattung verborgen. Variantenvergleich nicht möglich.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Originalschrank offen</h3>
                <p className="text-sm text-muted-foreground">Nur eine Variante zeigbar. Buyer sieht nicht den Variantenvergleich, der seine Entscheidung treibt.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">3 Modelle nebeneinander, klappbar</h3>
                <p className="text-sm text-muted-foreground">Standard-, Premium-, Sondervariante parallel zeigbar. Buyer öffnet selbst, vergleicht direkt am Stand.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die Elektrotechnik-Messen in DACH + Europa</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Hannover Messe Industrial</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Industrial Automation</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich, Hallen 9-17 fokussiert auf Industrieautomation, Antriebstechnik, Energieübertragung, Smart Grid. Internationales
                  Publikum, B1-Standard, Material-Nachweis verlangt. Schaltschrank-Hersteller wie Rittal, Eaton, Schneider Electric Standard-Aussteller —
                  3D-Druck-Modelle inzwischen etabliert bei Tier-2-Zulieferern und Spezialhersteller.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">electronica München</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Welt-Leitmesse Elektronik</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, ~80.000 Fachbesucher aus weltweiter Elektronik-Industrie. Halbleiter, Komponenten, Embedded Systems,
                  Stromversorgung. Standabnahme Messe München — B1 für Stand-Komponenten Pflicht. Komponenten-Detail-Modelle (1:1, 2:1)
                  performen hier am besten, weniger Schaltschrank-Showcase.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">SPS Nürnberg</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Steuerungstechnik + Industrie 4.0</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich in Nürnberg. Schwerpunkt SPS-Systeme, IPC, Klemmensysteme, Industrieautomation. Mittelstands-orientiert,
                  hohe Engineering-Tiefe der Besucher. Klemmen-Hersteller (Phoenix Contact, Weidmüller, Wago) zeigen hier Premium-Komponenten-Modelle.
                  B2 verbreitet, B1 bei Großständen.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Light + Building Frankfurt</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Gebäude-Elektrotechnik + Smart Home</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre. Fokus auf Gebäude-Automation, Smart Building, Beleuchtungstechnik, Verteiler-Anlagen für Wohn-/Gewerbebau.
                  Schalter-, Steckdosen-, Verteilerschrank-Hersteller dominante Aussteller. Modelle mit funktionsfähigen LED-Demos und
                  beweglichen Schaltern besonders gut performend.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Was sich besonders gut zeigen lässt</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-lg p-6">
                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Industrie-Schaltschränke</h3>
                <p className="text-sm text-muted-foreground mb-3">Komplette Schaltschränke mit Klemmenreihen, Hauptschalter, Sicherungsautomaten. Klappbare Front-Tür für Innenansicht.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:5</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Cable className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Messwandler-Schnittmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Stromwandler, Spannungswandler mit innenliegenden Wicklungen sichtbar. Klassisch für Hersteller von MV-Komponenten.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:3 bis 1:5</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <CircuitBoard className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Klemmenreihen-Detail-Modelle</h3>
                <p className="text-sm text-muted-foreground mb-3">1:1 Klemmen-Reihen mit beschrifteten Funktionen, Anschluss-Querschnitten, Hersteller-Logos. Premium-Showcase für Klemmen-Spezialisten.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:1 bis 2:1</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Industrie-PC + SPS-Showcases</h3>
                <p className="text-sm text-muted-foreground mb-3">IPC-Gehäuse, Hutschienen-Komponenten, vernetzte SPS-Reihen. Funktionsfähige LED-Anzeigen für Live-Demo möglich.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:3</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Norm-Korrektheit als Verkaufsargument</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Elektrotechnik-Engineers haben einen geübten Blick für Norm-Konformität. Ein Modell mit falsch codierten Phasen
              oder vertauschten Farben ist sofort als nicht-fachlich erkennbar — und nimmt dem Aussteller die Glaubwürdigkeit.
              Wir achten standardmäßig auf:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">IEC 60446 AC-Farbcodierung</div>
                    <p className="text-sm text-muted-foreground">L1 braun, L2 schwarz, L3 grau, N hellblau, PE grüngelb. Phasenfolge im Schaltschrank-Layout korrekt von links nach rechts.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">IEC 60446 DC-Codierung (für DC-Systeme)</div>
                    <p className="text-sm text-muted-foreground">L+ rot, L- grau, M hellblau. Wichtig bei Modellen für PV-Wechselrichter, USV-Systeme, Industrie-DC-Verteiler.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">Klemmenreihen-Layout nach IEC 60947</div>
                    <p className="text-sm text-muted-foreground">Korrekte Reihenfolge: Hauptschalter, Sicherung, FI, Klemmenreihe Eingang/Ausgang. Engineer erkennt sofort den korrekten Aufbau.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">Schutzart-Beschriftung (IP-Codes)</div>
                    <p className="text-sm text-muted-foreground">Lasergravierte IP54 / IP65 / IP67-Beschriftung am Modell. Schaltschrank-Buyer prüfen Schutzart als Erstkriterium.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case-Pattern — Variantenvergleich am Stand</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Häufiges Anfrage-Pattern aus dem Elektrotechnik-Cluster: ein Schaltschrank-Hersteller will auf SPS Nürnberg
              drei Konfigurations-Varianten zeigen — Standard-Industrie-Schrank, Premium-Variante mit Smart-Grid-Kommunikation,
              explosionsgeschützte Ex-Variante für Chemie-Anwendungen.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Beispiel-Konfiguration: 3-Varianten-Showcase</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Anzahl Modelle:</span> <strong>3 (Variante S, P, Ex)</strong></div>
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:5 (je 38 cm hoch)</strong></div>
                <div><span className="text-muted-foreground">Material:</span> <strong>PETG mit ABS-Lackier-Detail</strong></div>
                <div><span className="text-muted-foreground">Lackierung:</span> <strong>RAL 7035 (Standard), RAL 9006 (Premium), RAL 2003 Ex-Variante</strong></div>
                <div><span className="text-muted-foreground">Innenausstattung:</span> <strong>Klemmenreihen, Hauptschalter, korrekte Codierung</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B2 (für SPS Nürnberg)</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit:</span> <strong>4-5 Wochen</strong></div>
                <div><span className="text-muted-foreground">Preisbereich:</span> <strong>€9.000-15.000 (3-er Set)</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Vorteil dieses Patterns:</strong> der Industrie-Einkäufer kann seine Anforderung direkt
                  an einem der Modelle abgleichen. «Wir brauchen IP65 mit Smart-Grid» → Buyer zeigt auf das Premium-Modell mit Smart-Grid-Detail.
                  Die Diskussion wird konkret, der Konfigurationsbedarf klar, der Sales-Funnel beschleunigt.
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
                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Variantenvergleich am Stand</h3>
                <p className="text-sm text-muted-foreground">Mehrere Konfigurations-Varianten parallel zeigbar. Buyer wählt direkt am Modell, der Konfigurations-Dialog wird konkret und schnell.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Norm-Glaubwürdigkeit</h3>
                <p className="text-sm text-muted-foreground">Korrekte IEC-Codierung und Klemmen-Layout signalisieren Branchen-Tiefe. Engineer-Buyer akzeptiert Sie als ernstzunehmenden Hersteller.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Komponenten-Detail-Showcase</h3>
                <p className="text-sm text-muted-foreground">1:1-Klemmen-Modelle und 2:1-Schalter-Details zeigen Hersteller-Logos, Anschluss-Querschnitte, Funktions-Beschriftungen — Premium-Glaubwürdigkeit ohne Original-Komponente.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Multi-Messe-Tauglichkeit</h3>
                <p className="text-sm text-muted-foreground">Modelle reisen mit zwischen SPS, Hannover Messe, Light+Building. Eine Investition × 5-8 Messeauftritte über 2-3 Jahre.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> ein €5.500-Schaltschrank-Modell (1:5, mit klappbarer Tür und vollständiger
                Klemmenreihen-Innenausstattung) für 3 Messen pro Jahr × 3 Jahre = 9 Messeauftritte. Industrie-Einkäufer-Anfragen
                steigen von 10 auf 22 pro Messe = 108 zusätzliche qualifizierte Anfragen über die Lebenszeit. Bei 18%-Konversion
                und €85k Ø-Schaltschrank-Auftragswert: 19 zusätzliche Abschlüsse = <strong className="text-primary">+€1,6 Mio Mehrumsatz</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Elektrotechnik-Messemodelle</h2>
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
              <Link href="/branchen/elektrotechnik" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Elektrotechnik</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Elektrotechnik-Modell anfragen</h2>
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
