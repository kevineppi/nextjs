/**
 * Spoke: Messemodelle Energietechnik
 * /ratgeber/messemodell-energietechnik
 *
 * Hauptmessen: E-world Essen, Hannover Messe, WindEnergy Hamburg.
 * Spitze: MV-Schaltanlagen mit klappbarem Frontteil, Windturbinen 1:50,
 * Trafostationen mit lasergravierten Typenschildern.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Zap, Sun, Battery,
  Lightbulb, Target, Clock, TrendingUp, Wind,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Energietechnik — MV-Schaltanlage, Windturbine, Trafo [Guide]'
const DESCRIPTION =
  'Messemodelle für Energietechnik-Aussteller: Mittelspannungs-Schaltanlagen mit klappbaren Türen, Windturbinen 1:50, Trafostationen, PV-Landschaftsmodelle. E-world Essen, Hannover Messe, WindEnergy. Konkrete Cases + ROI.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-energietechnik'),
  keywords: [
    'messemodell energietechnik', 'mv-schaltanlage modell', 'windturbine modell 3d druck',
    'trafostation modell', 'pv-anlage messemodell', 'mittelspannungs-schaltanlage messe',
    'e-world essen messemodell', 'windenergy hamburg messemodell', 'hannover messe energie',
    'energietechnik showcase', 'umspannwerk modell', 'schaltschrank messemodell',
  ].join(', '),
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-energietechnik',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z', modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Energietechnik — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Messemodelle für Energietechnik-Aussteller — MV-Schaltanlagen, Windturbinen, Trafos',
  description: DESCRIPTION, datePublished: '2026-05-31', dateModified: '2026-05-31',
  author: { '@type': 'Person', name: BRAND.founderName, url: 'https://www.ek-druck.at/ueber-uns', jobTitle: 'Inhaber & Gründer ekdruck e.U.' },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-energietechnik',
  about: [
    { '@type': 'Thing', name: 'Mittelspannungs-Schaltanlagen' },
    { '@type': 'Thing', name: 'Windturbinen-Modelle' },
    { '@type': 'Thing', name: 'E-world Essen' },
    { '@type': 'Thing', name: 'WindEnergy Hamburg' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Welcher Maßstab funktioniert für Mittelspannungs-Schaltanlagen?',
    answer: '1:25 ist Sweet-Spot für 3-stöckige MV-Schaltanlagen (Original ~3,5 m hoch, ~12 m lang). Ergibt Modell-Aufbau von ~14×48×35 cm — tisch-tauglich, alle Schaltfelder unterscheidbar. Bei Trafostationen (kompakter, ~2,5 m) reicht 1:10. Bei Vollumspannwerken mit Schaltanlage + Trafo + Schaltleiste: 1:50, sonst wird das Modell zu groß für Standard-Tische.',
  },
  {
    question: 'Wie zeigen Sie das Innere von Schaltschränken am Stand?',
    answer: 'Über klappbare Front-Türen mit Innenansicht des Sammelschienen-Systems, Leistungsschaltern, Stromwandlern. Wir konstruieren die Türen über Magnetscharniere — Stand-Besucher kann selbst öffnen und schließen, ohne dass etwas kaputt geht. Innen-Komponenten sind farblich nach IEC 60446 codiert (L1 braun, L2 schwarz, L3 grau, N hellblau, PE grüngelb) — Engineering-Glaubwürdigkeit auf einen Blick.',
  },
  {
    question: 'Welche Brennstoffklasse verlangt die E-world Essen?',
    answer: 'E-world Essen folgt der Messe Essen Standabnahme — B1 ist für tragende Stand-Elemente Pflicht, für Modell-Exponate über 1m² Standfläche. Bei MV-Schaltanlagen-Modellen (1:25) sind die typischen Aufbauten 30-50 cm hoch — Material-Nachweis wird verlangt. Wir liefern das Hersteller-Zertifikat des B1-Materials (additiviertes PLA oder Polycarbonat-FR) zur Standabnahme.',
  },
  {
    question: 'Sind Lasergravierte Typenschilder am Modell möglich?',
    answer: 'Ja — wir kombinieren 3D-Druck mit lasergravierten Metall- oder Acryl-Inlays für Typenschilder. Typische Auflösung 0,2 mm Linienbreite, komplette Hersteller-Logos und Typen-Bezeichnungen lesbar. Macht Engineering-Glaubwürdigkeit nochmal eine Stufe besser — der Engineer am Stand erkennt direkt die Komponenten-Typen. Aufpreis pro Typenschild ~€80-150.',
  },
  {
    question: 'Lassen sich Windturbinen mit beweglichen Rotorblättern bauen?',
    answer: 'Ja, ist Standard-Anforderung bei Windturbinen-Modellen. Rotor dreht sich über kleinen 3-V-Servomotor (USB-powered, von hinten unsichtbar), Drehzahl realistisch reduziert auf ~10-20 U/min damit die Bewegung visuell langsam genug für die Aufmerksamkeits-Anker-Wirkung ist. Rotorblätter aus PA-CF für mechanische Belastbarkeit, balanciert für ruhigen Lauf. Mast-Höhe bis ~80 cm im 1:50-Maßstab umsetzbar.',
  },
  {
    question: 'Wie werden PV-Anlagen-Modelle umgesetzt?',
    answer: 'Zwei Typen: (1) Modul-Schnittmodell — eine PV-Zelle 1:1 oder 2:1 als Schnittansicht mit sichtbarer Multilayer-Struktur (Glas, Antireflex, Si-Wafer, Kontakt-Folie, Backsheet). Ideal für Komponenten-Hersteller. (2) Landschaftsmodell — PV-Feld mit 50-200 Modulen auf modellierter Landschaft, 1:200 bis 1:500. Module einzeln, Anordnung nach realer Reihenplanung. Trafostation + Wechselrichter-Container als Detail dazu. Aufstellungsoptionen für Aufdach-PV, Freiflächen-PV, Floating-PV.',
  },
  {
    question: 'Was kostet ein typisches Energietechnik-Showcase-Modell?',
    answer: 'Preisbereich: MV-Schaltanlage 1:25 mit klappbaren Türen und farblich kodierten Innen-Komponenten: €5.500-9.500. Windturbine 1:50 mit beweglichem Rotor: €4.500-7.500. Trafostation 1:10 mit Detail-Aufbauten: €3.500-6.000. PV-Landschaftsmodell (Mittelgröße): €6.500-12.000. Premium-Vollumspannwerk-Modell (Schaltanlage + Trafo + Schalthaus): €12.000-22.000. Vergleichswerte klassische Modellbauer: 2-3x höher bei 3-4x längerer Lieferzeit.',
  },
]

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Energietechnik', item: 'https://www.ek-druck.at/ratgeber/messemodell-energietechnik' },
  ],
}

export default function MesseModellEnergietechnikPage() {
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
              { name: 'Messemodell Energietechnik', url: '/ratgeber/messemodell-energietechnik' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" /> Branchen-Spoke: Energietechnik
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Energietechnik-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mittelspannungs-Schaltanlagen mit klappbaren Türen, Windturbinen mit drehendem Rotor, Trafostationen mit
              lasergravierten Typenschildern, PV-Landschaftsmodelle. Für E-world Essen, Hannover Messe Industrial,
              WindEnergy Hamburg und das gesamte DACH-Energie-Messe-Spektrum.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Hauptattraktor:</strong> klappbare Schaltschrank-Türen — Stand-Besucher öffnet selbst und sieht das Innere.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:25 für MV-Schaltanlagen, 1:50 für Windturbinen, 1:10 für Trafos.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Engineering-Trust:</strong> Farbcodierung nach IEC 60446, lasergravierte Typenschilder, ABS-lackiert in RAL 7035.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €4.500-12.000 für Standard-Energie-Showcase-Modelle.</span></li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Energie-Aussteller-Showcase-Problem</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eine 3-stöckige Mittelspannungs-Schaltanlage ist 12 m breit, 3,5 m hoch, wiegt 2,8 Tonnen, kostet 6-stellig pro Stück.
              Auf eine Energie-Fachmesse zu transportieren? Theoretisch möglich, praktisch sinnlos — Logistik €15-25k pro Veranstaltung,
              Auf-/Abbau-Kosten dazu, Versicherung, Lkw mit Schwerlast-Anmeldung.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Was wirklich passiert auf den Energie-Messen: ein 60-Zoll-Bildschirm zeigt CAD-Renderings im Loop. Daneben stehen
              Datenblätter. Der Energieversorger-Einkäufer geht vorbei, schaut 4 Sekunden, geht weiter. Genau das was wirklich
              interessiert — wie sieht das Sammelschienen-System aus? wo sitzen die Stromwandler? — ist nicht sichtbar.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Das maßstabsgetreue Modell mit klappbarer Front-Tür löst genau das. Der Einkäufer öffnet selbst. Sieht das Innere.
              Erkennt die Komponenten. Stellt qualifizierte Fragen.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Originalanlage</h3>
                <p className="text-sm text-muted-foreground">Logistik €15-25k/Messe. Schwerlast-Transport. Praktisch nie machbar für Industrie-Aussteller.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Bildschirm-Renderings</h3>
                <p className="text-sm text-muted-foreground">Schick anzusehen, aber Engineering-Detail bleibt verborgen. 4 Sek Stand-Zeit beim Vorbeigehen.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">1:25-Modell mit klappbaren Türen</h3>
                <p className="text-sm text-muted-foreground">Engineer öffnet selbst, sieht Sammelschienen-Detail, fragt nach Strom-Bemessung. Sales-Funnel-Start.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die Energietechnik-Messen in DACH</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">E-world Essen</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Energie-Leitmesse</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich, ~25.000 Fachbesucher aus Energieversorgung, Stadtwerken, Industrie. Schwerpunkt Energiehandel, Smart Grid,
                  Erneuerbare. Engineering-Publikum entscheidungsstark. B1-Standard für Stand-Komponenten, Material-Nachweis verlangt.
                  Ideale Bühne für MV-Schaltanlagen- und Trafostations-Modelle.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Hannover Messe Industrial Energy</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Industrie-Energie-Lösungen</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hannover-Messe-Halle 11-12-13. Hyper-internationales Publikum, strenge Standabnahme. B1 strikt durchgesetzt,
                  Material-Zertifikat zwingend. Hier zählt Premium-Optik kombiniert mit Engineering-Glaubwürdigkeit.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">WindEnergy Hamburg</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Onshore + Offshore Wind</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre in Hamburg. Spezialisiert auf Wind-Industrie — Turbinen-Hersteller, Komponenten-Zulieferer, EPC-Contractor,
                  Wartungsdienstleister. Windturbinen-Modelle mit beweglichem Rotor sind hier Standard, kein Sonderfeature.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Intersolar Europe / smarter E München</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">PV + Speicher + E-Mobility</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Größte PV-Messe Europas. Schwerpunkt Solar-Module, Wechselrichter, Speichersysteme, Charging-Infrastruktur. PV-Landschaftsmodelle,
                  Modul-Schnittmodelle, Wechselrichter-Container als Detail. Internationale Aussteller-Basis.
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
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Mittelspannungs-Schaltanlagen</h3>
                <p className="text-sm text-muted-foreground mb-3">Klappbare Frontmodule mit Sammelschienen-Innenbild. Farblich kodiert nach IEC 60446. Premium-Showcase-Objekt der Energie-Industrie.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:20 bis 1:25</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Wind className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Onshore-/Offshore-Windturbinen</h3>
                <p className="text-sm text-muted-foreground mb-3">Beweglicher Rotor mit USB-Servomotor. Gondel-Schnittmodell möglich (Getriebe + Generator sichtbar).</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:50 bis 1:100</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Battery className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Trafostationen + Umspannwerke</h3>
                <p className="text-sm text-muted-foreground mb-3">Detail-Aufbauten mit lasergravierten Typenschildern. Kombiniert mit Abgang-Schaltanlage für Vollumspannwerk-Showcase.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:10 bis 1:25</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Sun className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">PV-Landschaftsmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Freiflächen-Feld, Aufdach, Floating-PV. Module einzeln auf modellierter Landschaft, Wechselrichter als Detail.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:200 bis 1:500</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineering-Glaubwürdigkeits-Stack</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Energie-Engineers haben einen scharfen Blick für Stimmigkeit — Farbcodierung, Komponenten-Anordnung, Typenschild-Konventionen
              müssen passen, sonst verliert das Modell sofort den Trust. Was wir standardmäßig integrieren:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">Farbcodierung nach IEC 60446</div>
                    <p className="text-sm text-muted-foreground">L1 braun, L2 schwarz, L3 grau, N hellblau, PE grüngelb. Engineer erkennt auf 30 cm Entfernung die Phasen-Korrektheit.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">Rohrleitungs-Farbcodierung DIN 2403</div>
                    <p className="text-sm text-muted-foreground">Bei Anlagen mit Kühlsystemen oder Hydraulik (z.B. Trafo-Öl-Kühlung). Verstärkt Engineering-Stimmigkeit.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">Lasergravierte Typenschilder</div>
                    <p className="text-sm text-muted-foreground">Originalbezeichnungen, Bemessungs-Werte, Hersteller-Logos. Auf Acryl- oder Aluminium-Inlays.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">RAL 7035 als Standard-Außenfarbe</div>
                    <p className="text-sm text-muted-foreground">Branchen-Standard für MV-Schaltschränke (Lichtgrau). Sofortige visuelle Wiedererkennbarkeit für Energie-Engineers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case: MV-Schaltanlage 1:25 für Dubai Energy-Messe</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Messwandler-Hersteller, deutscher Konzern. Hauptkunden im internationalen Stromnetz-Ausbau. Showcase-Bedarf für
              Energie-Fachmesse Dubai. Originalanlage 2,8 Tonnen, 3-stöckig, Logistik-Schätzung €18k allein für die 4-Tages-Messe.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Projekt-Specs</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:25</strong></div>
                <div><span className="text-muted-foreground">Modell-Größe:</span> <strong>~14×48×35 cm</strong></div>
                <div><span className="text-muted-foreground">Segmentierung:</span> <strong>4 Module magnetisch</strong></div>
                <div><span className="text-muted-foreground">Material:</span> <strong>ABS lackiert, Polycarbonat-FR Detail</strong></div>
                <div><span className="text-muted-foreground">Lackierung:</span> <strong>2K in RAL 7035 (MV-Standard)</strong></div>
                <div><span className="text-muted-foreground">Highlight:</span> <strong>Klappbare Front, Sammelschienen sichtbar</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B1 (international Standard)</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit:</span> <strong>5 Wochen ab CAD</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Lehre aus dem Projekt:</strong> die lasergravierten Typenschilder waren der
                  entscheidende Trust-Faktor. Internationale Energie-Einkäufer haben das Modell von allen Seiten begutachtet,
                  die Typenbezeichnungen mit den Datenblättern abgeglichen, dann nach der Liefer-Roadmap gefragt.
                </p>
              </div>
            </div>
            <Link href="/cases/industriemodell-mittelspannungs-anlage-dubai" className="inline-flex items-center gap-2 text-primary font-bold hover:underline mt-6">
              Vollständige Case-Story lesen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Was Sie konkret davon haben</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Stand-Interaktivität</h3>
                <p className="text-sm text-muted-foreground">Klappbare Türen → Einkäufer öffnet selbst → fühlt sich beteiligt → bleibt länger. Faktor 3-4x Stand-Verweildauer vs. Renderings.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Lightbulb className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Engineering-Glaubwürdigkeit</h3>
                <p className="text-sm text-muted-foreground">Farbcodierung + Typenschilder + RAL-Korrektheit signalisieren Branchen-Tiefe. Das Modell wird zum Kompetenz-Beweis Ihres Unternehmens.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Premium-Buyer-Magnet</h3>
                <p className="text-sm text-muted-foreground">Energieversorger-Einkäufer suchen Substanz, nicht Marketing. Ein physisches Modell mit Detail-Tiefe öffnet die Tür zu €180-500k+ Aufträgen.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Internationale Reichweite</h3>
                <p className="text-sm text-muted-foreground">Modelle reisen mit nach Essen, Hannover, Hamburg, München, internationale Messen Dubai/Singapore. Eine Investition × 6-10 Messeauftritte über 3 Jahre.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> ein €7.500-MV-Schaltanlagen-Modell für 6 internationale Energie-Messen
                über 3 Jahre. Anfrage-Steigerung von 12 auf 28 pro Messe = 96 zusätzliche qualifizierte Energieversorger-Anfragen.
                Bei 12%-Konversion und €195k Ø-Auftragswert: 11 zusätzliche Abschlüsse = <strong className="text-primary">+€2,1 Mio Mehrumsatz</strong> über die Modell-Lebenszeit.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Energietechnik-Messemodelle</h2>
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
              <Link href="/branchen/energietechnik" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Energietechnik</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Energietechnik-Modell anfragen</h2>
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
