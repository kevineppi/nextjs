/**
 * Spoke: Messemodelle Automotive
 * /ratgeber/messemodell-automotive
 *
 * Hauptmessen: IAA Mobility, Vienna Autoshow, Auto Zürich.
 * Spitze: ABS mit Aceton-Glättung für Spritzguss-Look ohne Spritzguss-Tooling.
 * Karosserie-Details, E-Antriebe, Konzeptfahrzeuge.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, XCircle, Phone, Car, Battery, Wrench,
  Sparkles, Target, Clock, TrendingUp, Cpu,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { BRAND } from '@/data/brandVoice'

const TITLE = 'Messemodelle Automotive — Karosserie, E-Antrieb, Konzeptfahrzeug [Guide]'
const DESCRIPTION =
  'Messemodelle für Automotive-Aussteller: Karosserie-Schnittmodelle, E-Antrieb-Showcase, Konzeptfahrzeuge in Spritzguss-Optik durch ABS + Aceton-Glättung. IAA Mobility, Vienna Autoshow, Auto Zürich.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/messemodell-automotive'),
  keywords: [
    'messemodell automotive', 'karosserie modell 3d druck', 'e-antrieb modell',
    'konzeptfahrzeug messemodell', 'iaa mobility messemodell', 'auto zürich modell',
    'vienna autoshow messemodell', 'fahrzeug modellbau 3d druck', 'aceton glättung modell',
    'spritzguss optik 3d druck', 'automotive showcase', 'fahrzeug schnittmodell',
  ].join(', '),
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messemodell-automotive',
    siteName: 'ekdruck – 3D-Druck Österreich', locale: 'de_AT', type: 'article',
    publishedTime: '2026-05-31T00:00:00.000Z', modifiedTime: '2026-05-31T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Messemodelle Automotive — ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'TechArticle',
  headline: 'Messemodelle für Automotive-Aussteller — Karosserie, E-Antrieb, Konzeptfahrzeuge',
  description: DESCRIPTION, datePublished: '2026-05-31', dateModified: '2026-05-31',
  author: { '@type': 'Person', name: BRAND.founderName, url: 'https://www.ek-druck.at/ueber-uns', jobTitle: 'Inhaber & Gründer ekdruck e.U.' },
  publisher: { '@type': 'Organization', name: BRAND.companyName, logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' } },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/messemodell-automotive',
  about: [
    { '@type': 'Thing', name: 'Karosserie-Modelle' },
    { '@type': 'Thing', name: 'E-Antrieb-Showcases' },
    { '@type': 'Thing', name: 'IAA Mobility' },
    { '@type': 'Thing', name: 'Vienna Autoshow' },
  ],
  inLanguage: 'de-AT',
}

const faqs = [
  {
    question: 'Welcher Maßstab funktioniert für Karosserie-Showcases?',
    answer: 'Für komplette Fahrzeug-Modelle 1:8 bis 1:10 — ergibt Modell-Längen von 45-55 cm bei Standard-PKW. Karosserie-Schnittmodelle für Engineering-Details: 1:5 — zeigt Schweißpunkte, Doppelboden-Struktur, Crash-Zone-Details. Komponenten-Modelle (E-Antrieb-Einheit, Achsbaugruppe, Front-Modul): 1:3 bis 1:5. Für Konzeptfahrzeug-Premieren in Premium-Lackierung: 1:5 für visuelle Wirkung.',
  },
  {
    question: 'Wie erreicht man Spritzguss-Look mit 3D-Druck?',
    answer: 'Aceton-Dampfglättung ist das Standard-Verfahren. ABS-Modelle werden in einer Aceton-gesättigten Atmosphäre 30-90 Minuten geglättet — die Schicht-Struktur des FDM-Drucks verschmilzt, das Ergebnis ist eine homogene Glanzoberfläche die optisch nicht von Spritzguss unterscheidbar ist. Danach 2K-Premium-Lack in der gewünschten Farbgebung. Bei Premium-Konzeptfahrzeug-Modellen kommt Klarlack-Versiegelung hinzu — Hochglanz-Finish wie auf einer echten Karosserie.',
  },
  {
    question: 'Welche Brennstoffklasse ist auf der IAA Mobility erforderlich?',
    answer: 'IAA München (Messe München) verlangt B1 für alle Stand-Komponenten — bei Großständen der Automobil-Hersteller wird das strikt durchgesetzt. Für Modell-Exponate brauchen wir B1-Material. Wir empfehlen B1-fähiges Polycarbonat-FR für die Hauptkarosserie und additiviertes ABS für die Spritzguss-Look-Details. Material-Zertifikat wird vor Standabnahme bereitgestellt.',
  },
  {
    question: 'Sind funktionsfähige Türen oder Hauben am Modell möglich?',
    answer: 'Ja — bewegliche Türen, Hauben, Heckklappen sind häufige Anforderungen. Mini-Scharniere aus POM oder Messing-Buchsen für 200+ Öffnungs-Zyklen pro Messetag ohne Verschleiß. Bei Premium-Konzeptmodellen mit Aceton-Glättung müssen die Scharniere VOR der Glättung eingebaut werden — Glättung der Außenflächen, dann finale Montage. Servo-aktivierte Öffnung (Knopfdruck) ist möglich, aber Aufpreis ~€800-1.500.',
  },
  {
    question: 'Können E-Antriebe und Batterie-Module gut gezeigt werden?',
    answer: 'E-Antrieb-Showcases sind aktuell die häufigsten Anfragen aus dem Automotive-Bereich. Wir bauen Schnittmodelle der Antriebs-Einheit (Elektromotor + Getriebe + Inverter) mit transparenten Hüllen-Sektionen. Batterie-Pack-Module mit einzelnen Zellen sichtbar (entweder 1:1 Detail-Module oder im Fahrzeug-Maßstab integriert). Kühlsystem-Wege farblich differenziert. Die Engineering-Glaubwürdigkeit der E-Antriebs-Modelle entscheidet bei Premium-Buyer-Aufmerksamkeit.',
  },
  {
    question: 'Lohnt sich ein Showcase-Modell für Zulieferer oder nur OEMs?',
    answer: 'Besonders für Zulieferer lohnt es sich. OEMs (BMW, Audi, VW) haben in der Regel klassische Modellbauer als Lieferanten und sind nicht primär unsere Zielgruppe. Tier-1- und Tier-2-Zulieferer (Front-Modul-Hersteller, E-Antrieb-Zulieferer, Innenraum-Komponenten-Spezialisten) zeigen ihre Komponenten oft losgelöst vom Fahrzeug — hier funktionieren 3D-Druck-Modelle besser, kostengünstiger und schneller. Auch Engineering-Dienstleister und Konzept-Studios sind eine wachsende Kundengruppe.',
  },
  {
    question: 'Was kostet ein Premium-Karosserie-Modell mit Spritzguss-Look?',
    answer: 'Standard-Range: Karosserie-Schnittmodell 1:5 mit Aceton-Glättung und 2K-Premium-Lackierung: €5.500-9.500. Komplettes Fahrzeug-Modell 1:8 mit beweglichen Türen, Innenraum-Detail, Premium-Lack: €7.500-15.000. E-Antrieb-Schnittmodell mit transparenten Detail-Sektionen: €4.500-8.500. Konzeptfahrzeug-Premieren-Modell mit Klarlack-Hochglanz: €12.000-25.000. Vergleichswerte klassische Modellbauer: 2-4x höher.',
  },
]

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'Messemodell Automotive', item: 'https://www.ek-druck.at/ratgeber/messemodell-automotive' },
  ],
}

export default function MesseModellAutomotivePage() {
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
              { name: 'Messemodell Automotive', url: '/ratgeber/messemodell-automotive' },
            ]} />
            <div className="mt-6 mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Car className="w-4 h-4" /> Branchen-Spoke: Automotive
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Messemodelle für Automotive-Aussteller
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Karosserie-Schnittmodelle, E-Antrieb-Showcases, Konzeptfahrzeuge in Spritzguss-Optik durch ABS-Aceton-Glättung
              und 2K-Premium-Lackierung. Für IAA Mobility, Vienna Autoshow, Auto Zürich und Tier-1/Tier-2-Zulieferer-Messen.
            </p>
            <AuthorByline variant="card" showDate publishedAt="2026-05-31" updatedAt="2026-05-31" />
          </div>
        </section>

        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">In 30 Sekunden</h2>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Hauptattraktor:</strong> Aceton-Dampfglättung erreicht Spritzguss-Optik ohne Spritzguss-Tooling.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Maßstab:</strong> 1:5 für Schnittmodelle und Detail-Komponenten, 1:8 bis 1:10 für komplette Fahrzeuge.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Zielgruppe:</strong> Tier-1 und Tier-2 Zulieferer, Engineering-Dienstleister, Konzept-Studios.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Preisbereich:</strong> €4.500-15.000 für Premium-Showcase-Modelle mit Spritzguss-Optik.</span></li>
            </ul>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das Automotive-Showcase-Dilemma — visuelle Premium-Erwartung</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Automotive-Buyer sind in puncto visuelle Qualität verwöhnt. Was bei einer Werkzeugmaschinen-Messe als «Engineering-Detail»
              durchgeht, ist auf der IAA das Mindeste. Ein Karosserie-Modell mit sichtbaren FDM-Schichten? Sofort als billig erkannt.
              Die Branche erwartet Spritzguss-Optik oder Vergleichbares.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Genau hier kommt die Aceton-Dampfglättung ins Spiel. Ein ABS-3D-Druck-Modell, in einer aceton-gesättigten Atmosphäre
              90 Minuten geglättet, hat danach eine homogene Glanzoberfläche. Nach 2K-Premium-Lackierung mit Klarlack-Versiegelung
              ist das Ergebnis optisch von einer echten Karosserie kaum unterscheidbar. Und das in 4-6 Wochen statt 14-22 Wochen
              klassischer Modellbau.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Für Tier-1- und Tier-2-Zulieferer ist der Zeitvorteil entscheidend. Eine E-Antrieb-Variante muss zur nächsten IAA — der
              klassische Modellbauer braucht 4 Monate, wir liefern in 6 Wochen. Das ist der Unterschied zwischen «wir zeigen es»
              und «wir verschieben es auf nächstes Jahr».
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">FDM-Rohdruck ohne Glättung</h3>
                <p className="text-sm text-muted-foreground">Schichten sichtbar, billig wirkend, Automotive-Industrie inakzeptabel.</p>
              </div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                <XCircle className="w-8 h-8 text-destructive mb-3" />
                <h3 className="font-bold text-lg mb-2">Klassischer Modellbau in CNC</h3>
                <p className="text-sm text-muted-foreground">Premium-Look, aber 14-22 Wochen Lieferzeit. Für IAA-Premieren-Druck oft zu spät.</p>
              </div>
              <div className="bg-primary/5 border border-primary/30 rounded-lg p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">ABS + Aceton + 2K-Premium-Lack</h3>
                <p className="text-sm text-muted-foreground">Spritzguss-Optik in 6 Wochen. Premium-Wirkung bei Automotive-Standard.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Die Automotive-Messen in DACH + Premium-Europa</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">IAA Mobility München</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Internationale Automobil-Leitmesse</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, ~750.000 Besucher, Premium-Buyer-Konzentration weltweit. Standabnahme über Messe München —
                  B1 zwingend, strikt durchgesetzt. Hier zählt visuelle Premium-Wirkung als Mindeststandard. Tier-1-Zulieferer
                  zeigen häufig Komponenten-Modelle (E-Antrieb-Einheiten, Front-Module, ADAS-Demonstratoren) in Premium-Optik.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Vienna Autoshow</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Österreichs Auto-Salon</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich im Jänner in Wien (Messe Wien). Endkunden-Publikum plus Fachpresse. Standabnahme moderater als IAA,
                  B2 verbreitet, B1 bei Premium-Ständen. Lokale Zulieferer und Engineering-Dienstleister präsent. Modelle mit
                  Aceton-Glättung und Lackierung in Premium-Farben performen besonders.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Auto Zürich</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Schweizer Premium-Auto-Show</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jährlich im November, Schweizer Premium-Buyer-Klientel. Stark auf Premium- und Luxus-Marken fokussiert. Modelle
                  müssen visuell auf höchstem Niveau sein. B1-Standard für Stand-Komponenten, präzise Lackier-Qualität entscheidet.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <h3 className="text-xl font-bold">Automechanika Frankfurt</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Aftermarket + Zulieferer</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alle 2 Jahre, Welt-Leitmesse für Automobil-Aftermarket und Zulieferer-Branche. Werkstatt-Ausrüster, Diagnose-Systeme,
                  Ersatzteil-Hersteller. Engineering-Komponentenmodelle hier sehr willkommen — keine Premium-Hochglanz-Erwartung,
                  Substance über Optik.
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
                <Car className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Karosserie-Schnittmodelle</h3>
                <p className="text-sm text-muted-foreground mb-3">Halbseitiges Schnittmodell — Außenseite Premium-Lack, Schnittseite zeigt Konstruktion (Doppelboden, Crash-Zone, Multi-Material).</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:5</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Battery className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">E-Antriebs-Showcases</h3>
                <p className="text-sm text-muted-foreground mb-3">Elektromotor + Getriebe + Inverter als integrierte Einheit. Transparente Hülle für Komponenten-Sicht.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:3 bis 1:5</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Konzeptfahrzeug-Premieren</h3>
                <p className="text-sm text-muted-foreground mb-3">Hochglanz-Klarlack auf Aceton-geglättetes ABS. Visueller Premium-Eyecatcher für IAA und Auto Zürich.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:5 bis 1:8</strong></div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">ADAS- + Sensorik-Demonstratoren</h3>
                <p className="text-sm text-muted-foreground mb-3">Sensor-Positionen am Fahrzeug-Modell markiert, Sichtfeld-Kegel als transparente Strukturen visualisiert.</p>
                <div className="text-xs text-muted-foreground">Empfohlener Maßstab: <strong className="text-foreground">1:8</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium-Finishing-Stack — wie Spritzguss-Optik entsteht</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <div className="font-bold mb-1">ABS-Druck mit optimierter Schichthöhe</div>
                    <p className="text-sm text-muted-foreground">0,12 mm Schichthöhe (statt Standard 0,2 mm) — feinere Ausgangsfläche für die Aceton-Glättung. Druckzeit ~80% länger, lohnt sich für Premium-Modelle.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <div className="font-bold mb-1">Aceton-Dampfglättung 60-120 Min</div>
                    <p className="text-sm text-muted-foreground">In geschlossener Aceton-gesättigter Atmosphäre. Schicht-Struktur verschmilzt zu homogener Oberfläche. Keine Schleifarbeit nötig — wäre auch nicht so präzise erreichbar.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <div className="font-bold mb-1">2K-Grundierung + Premium-Lack</div>
                    <p className="text-sm text-muted-foreground">Automotive-typische 2K-Polyurethan-Lacke in Originalfarbe. Mehrere Schicht-Aufbauten für Tiefenwirkung wie auf einer echten Karosserie.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <div className="font-bold mb-1">Klarlack-Versiegelung für Hochglanz</div>
                    <p className="text-sm text-muted-foreground">Bei Premium-Konzeptfahrzeug-Modellen: 2-3 Klarlack-Schichten mit Zwischenpolieren. Ergebnis: Tiefenglanz wie auf einer Premium-Karosserie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Case-Pattern — Tier-1-Zulieferer-Strategie</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tier-1-Zulieferer zeigen ihre Komponenten häufig im Kontext eines Fahrzeug-Modells. Beispiel-Pattern aus aktuellen Anfragen:
              ein E-Antriebs-Spezialist will seine integrierte Antriebs-Einheit (Motor + Getriebe + Inverter) demonstrieren. Statt
              eines abstrakten Komponenten-Modells haben wir ein 1:5-Karosserie-Heck mit eingebauter Antriebs-Einheit konstruiert.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Beispiel-Konfiguration für E-Antrieb-Zulieferer</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Maßstab:</span> <strong>1:5</strong></div>
                <div><span className="text-muted-foreground">Aufbau:</span> <strong>Heck-Karosserie + Antriebs-Einheit</strong></div>
                <div><span className="text-muted-foreground">Karosserie:</span> <strong>Aceton-geglättetes ABS + Premium-Lack</strong></div>
                <div><span className="text-muted-foreground">Antrieb sichtbar:</span> <strong>Transparente PETG-Hülle</strong></div>
                <div><span className="text-muted-foreground">Bewegliche Teile:</span> <strong>Differenzial, Achswelle rotierbar</strong></div>
                <div><span className="text-muted-foreground">Brennstoffklasse:</span> <strong>B1 (für IAA-Tauglichkeit)</strong></div>
                <div><span className="text-muted-foreground">Lieferzeit:</span> <strong>6-8 Wochen</strong></div>
                <div><span className="text-muted-foreground">Preisbereich:</span> <strong>€7.500-12.000</strong></div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Vorteil dieses Patterns:</strong> der Buyer sieht die Komponente IM Kontext.
                  Antriebs-Einheit allein wirkt abstrakt — eingebaut in eine erkennbare Heck-Karosserie wird die Integration in
                  ein reales Fahrzeug greifbar. Premium-Lack signalisiert Premium-OEM-Kompatibilität.
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
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Spritzguss-Optik ohne Spritzguss-Tooling</h3>
                <p className="text-sm text-muted-foreground">€5.500-15.000 für Premium-Look statt €60-200k Spritzguss-Werkzeug. Geeignet wenn die Modell-Stückzahl klein bleibt (Messen, Showrooms).</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">6-Wochen-Premiere-Tauglichkeit</h3>
                <p className="text-sm text-muted-foreground">Klassische Modellbauer: 14-22 Wochen. Wenn die IAA-Premiere in 10 Wochen ansteht — wir liefern, sie nicht.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Premium-Buyer-Akzeptanz</h3>
                <p className="text-sm text-muted-foreground">Aceton-geglättete ABS-Modelle sind in der Automotive-Branche als Premium-Modellbau-Variante etabliert. Keine Frage der Glaubwürdigkeit.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Wrench className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">Iterations-Schnelligkeit</h3>
                <p className="text-sm text-muted-foreground">Modell-Variante für Konzeptanpassungen in 2-3 Wochen verfügbar. Klassischer Modellbau: 8-12 Wochen für jede Variante. Bei kurzfristigen Design-Reviews entscheidend.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg leading-relaxed">
                <strong>Konkret kalkuliert:</strong> ein €9.500-Premium-Karosserie-Schnittmodell für 3 internationale Automotive-Messen
                pro Jahr × 2 Jahre = 6 Messeauftritte. Tier-1-Zulieferer-Anfrage-Steigerung von 4 auf 11 pro Messe = 42 zusätzliche
                qualifizierte OEM-Anfragen. Bei 8%-Konversion und €450k Ø-Auftragswert: 3 zusätzliche Abschlüsse =
                <strong className="text-primary"> +€1,35 Mio Mehrumsatz</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Häufige Fragen — Automotive-Messemodelle</h2>
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
              <Link href="/branchen/automotive" className="bg-card border border-border rounded-lg p-5 hover:border-primary transition-colors">
                <div className="font-bold mb-1">Branchen-Seite Automotive</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automotive-Modell anfragen</h2>
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
