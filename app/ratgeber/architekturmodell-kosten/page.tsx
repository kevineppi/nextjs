/**
 * Preis-Fachartikel · /ratgeber/architekturmodell-kosten
 * ──────────────────────────────────────────────────────────────────
 * 2026-09-09: Der Markt veröffentlicht keine Architekturmodell-Preise
 * (verifizierte Recherche 09/2026) — dieser Artikel besetzt als einzige
 * Quelle die Kosten-Suchanfragen + KI-Zitate (AI Overviews, Perplexity).
 * Zahlen: ausschließlich die öffentliche FAQ-Staffel. KEINE internen
 * Kalkulationsgrößen (kein €/dm³, keine Druckzeiten, kein Material-Gramm).
 * Freigabe: Kevin, 09.09.2026.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Euro, Clock, Layers, Ruler, Paintbrush, Puzzle, Zap,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ConversionBanner from '@/components/ConversionBanner'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Was kostet ein Architekturmodell? Echte Preise 2026 | ekdruck'
const DESCRIPTION =
  'Einfamilienhaus 1:100 ab 280 €, Quartier 1:500 ab 780 €, Stadtmodell ab 1.890 €. Echte Preise und die 6 Preistreiber für Architekturmodelle aus dem 3D-Druck, offen erklärt.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/ratgeber/architekturmodell-kosten', ...buildDachAlternates('/ratgeber/architekturmodell-kosten') },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/architekturmodell-kosten',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg', width: 1200, height: 801 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const preise = [
  { typ: 'Einfamilienhaus', massstab: '1:100', preis: 'ab 280 €' },
  { typ: 'Mehrfamilienhaus', massstab: '1:200', preis: 'ab 420 €' },
  { typ: 'Detailmodell, Innenraum / möbliert', massstab: '1:50', preis: 'ab 450 €' },
  { typ: 'Quartiersmodell', massstab: '1:500', preis: 'ab 780 €' },
  { typ: 'Stadtmodell', massstab: '1:1000', preis: 'ab 1.890 €' },
]

const treiber = [
  {
    icon: Ruler,
    titel: '1. Das Volumen, nicht die Grundfläche',
    text: 'Zwei Modelle mit gleicher Grundplatte können sich im Preis deutlich unterscheiden, wenn eines flach ist und das andere hoch bebaut. Entscheidend ist, wie viel Raum das Modell tatsächlich einnimmt. Wer Vergleichsangebote einholt, sollte deshalb immer Länge, Breite und Höhe angeben, nicht nur das Plattenmaß.',
  },
  {
    icon: Layers,
    titel: '2. Der Maßstab und der Umgriff',
    text: 'Ein Einfamilienhaus in 1:100 ist überschaubar. Dasselbe Haus mit Nachbarbebauung, Straßenzug und Gelände in 1:500 ist ein anderes Projekt. Die Frage "wie viel Umgebung kommt mit aufs Modell" hat oft mehr Preiswirkung als das Gebäude selbst.',
  },
  {
    icon: Puzzle,
    titel: '3. Der Detailgrad',
    text: 'Für ein Massenmodell im Maßstab 1:500 tragen Baukörper die Aussage, nicht Fensterprofile. Mehr Detail heißt nicht automatisch mehr Wirkung, es heißt aber immer mehr Preis. Welcher Detailgrad zu welchem Maßstab passt, steht im Ratgeber zu Massenmodellen und LoD-Stufen.',
  },
  {
    icon: Paintbrush,
    titel: '4. Sichtbare Handarbeit',
    text: 'Farbliche Absetzungen, gespachtelte Übergänge, Lackierung: alles machbar, alles eigene Positionen. Ein Modell im weißen Rohzustand, das der Kunde selbst fasst, ist die günstigste Variante.',
  },
  {
    icon: Zap,
    titel: '5. Sonderfunktionen',
    text: 'Herausnehmbare Baukörper für Varianten, Magnetaufnahmen, gravierte Sockel, Trägerplatten in Grundstückskontur. Solche Extras machen ein Modell zum Werkzeug, stehen aber als eigene Punkte im Angebot.',
  },
  {
    icon: Clock,
    titel: '6. Der Termin',
    text: 'Standard sind 3 bis 5 Werktage ab Datenfreigabe. Muss es schneller gehen, kostet der Express-Vorrang 50 % Aufschlag, dafür steht das Modell auch mal in 24 Stunden auf dem Tisch. Zum Vergleich: Klassischer Modellbau rechnet in Wochen.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet ein Architekturmodell aus dem 3D-Druck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einfamilienhaus 1:100: ab 280 €. Mehrfamilienhaus 1:200: ab 420 €. Detailmodell 1:50: ab 450 €. Quartiersmodell 1:500: ab 780 €. Stadtmodell 1:1000: ab 1.890 €. Alle Preise als geprüfter Festpreis vor Fertigungsbeginn, in weißer matter Präsentationsoptik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was treibt den Preis eines Architekturmodells?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die sechs wichtigsten Preistreiber sind das eingenommene Volumen (nicht die Grundfläche), Maßstab und Umgriff, der Detailgrad, sichtbare Handarbeit wie Lackierung, Sonderfunktionen wie herausnehmbare Baukörper sowie der Liefertermin (Express in 24 Stunden gegen 50 % Aufschlag).',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum ist ein 3D-gedrucktes Architekturmodell günstiger als klassischer Modellbau?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nach der Datenaufbereitung läuft die Fertigung weitgehend ohne Handarbeit, und mehrere Entwurfsvarianten desselben Projekts entstehen parallel zu fast denselben Stückkosten. Klassischer handgebauter Modellbau kostet zu Recht vierstellig aufwärts und rechnet in Wochen statt Tagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet es, wenn kein 3D-CAD-Modell vorliegt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Datenmodellierung nach Plänen, Fotos oder Skizzen kostet ab 120 € pro Stunde. Für Projekte mit vorhandenen CAD-Daten aus ArchiCAD, Revit, Rhino oder SketchUp entfällt dieser Posten weitgehend.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navigation />
      <main className="min-h-screen bg-background pt-28 md:pt-32">
        {/* HERO */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Ratgeber', url: '/ratgeber' },
                { name: 'Was kostet ein Architekturmodell?', url: '/ratgeber/architekturmodell-kosten' },
              ]}
            />
            <div className="max-w-4xl mt-8">
              <p className="mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Preise & Kosten · Stand 2026
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.03em] mb-6">
                Was kostet ein Architekturmodell? Echte Preise und Preistreiber.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Wer wissen will, was ein Architekturmodell kostet, findet im deutschsprachigen Raum vor allem
                eines: Ausweichmanöver. Etablierte Manufakturen beantworten die Kostenfrage mit{' '}
                <em>&bdquo;pauschal nicht zu beantworten&ldquo;</em>, andere nennen Spannen von unter hundert
                bis zu vielen tausend Euro. Für Architekturbüros, Bauträger und Gemeinden, die ein Budget
                planen müssen, ist das unbrauchbar. Deshalb hier echte Zahlen aus unserer Werkstatt.
              </p>
              <AuthorByline variant="card" showDate publishedAt="2026-09-09" />
            </div>
          </div>
        </section>

        {/* PREISTABELLE */}
        <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Euro className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">Die Preisübersicht</h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-8">
                Die Preise gelten für Architekturmodelle aus dem 3D-Druck in weißer, matter
                Präsentationsoptik, wie sie für Wettbewerbe, Bauherrenpräsentationen und Gemeindetermine
                üblich sind. Jedes Angebot ist ein geprüfter Festpreis vor Fertigungsbeginn. Das sind ehrliche
                Einstiegspreise für den jeweils typischen Projektumfang, keine Lockangebote mit Sternchen.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-background">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-5 py-4 text-sm font-bold">Modelltyp</th>
                      <th className="px-5 py-4 text-sm font-bold">Maßstab</th>
                      <th className="px-5 py-4 text-sm font-bold">Preis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preise.map((p) => (
                      <tr key={p.typ} className="border-b border-border last:border-0">
                        <td className="px-5 py-4 text-sm">{p.typ}</td>
                        <td className="px-5 py-4 text-sm mono">{p.massstab}</td>
                        <td className="px-5 py-4 text-sm font-bold text-primary whitespace-nowrap">{p.preis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mt-8">
                Dazu kommen bei Bedarf: <strong>Express-Fertigung in 24 Stunden gegen 50 % Aufschlag</strong>{' '}
                (der Klassiker vor Wettbewerbsabgaben) und <strong>Datenmodellierung ab 120 € pro Stunde</strong>,
                falls kein 3D-CAD-Modell vorliegt, sondern nur Pläne, Fotos oder Skizzen.
              </p>
            </div>
          </div>
        </section>

        {/* PREISTREIBER */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-10">
                Was den Preis wirklich treibt
              </h2>
              <div className="space-y-8">
                {treiber.map((t) => (
                  <div key={t.titel} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <t.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{t.titel}</h3>
                      <p className="text-base leading-[1.85] text-foreground/85">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Vertiefung zum Detailgrad:{' '}
                <Link href="/ratgeber/massenmodell-lod-gebaeudedaten" className="text-primary underline underline-offset-4">
                  Massenmodell, LoD1, LoD2: welche Gebäudedaten brauche ich?
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* EINORDNUNG */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
                  Warum der 3D-Druck die Preise verschoben hat
                </h2>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Der klassische, handgebaute Architekturmodellbau hat seinen Preis zu Recht, ein Meisterstück
                  in Handarbeit kostet vierstellig aufwärts. Der 3D-Druck ändert die Rechnung an zwei Stellen:
                  Die Fertigung läuft nach der Datenaufbereitung weitgehend ohne Handarbeit, und mehrere
                  Varianten desselben Projekts entstehen parallel zu fast denselben Stückkosten. Für
                  Wettbewerbe, bei denen vier Konzeptvarianten im selben Maßstab gefragt sind, ist das der
                  eigentliche Unterschied: Die zweite bis vierte Variante kostet keinen Variantenzuschlag.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">Ehrliche Abgrenzung</h2>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Nicht jedes Modell gehört in den 3D-Drucker. Filigrane Fassadendetails in 1:50 mit Echtholz
                  und Messing sind Handwerksarbeit für den klassischen Modellbau. Unsere Stärke sind saubere
                  Baukörper, Gelände, Bebauungsstudien und Präsentationsmodelle mit kurzer Lieferzeit,
                  gefertigt aus Filamenten österreichischer Produktion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <ConversionBanner
            headline="Preis in 60 Sekunden statt in drei Angebotsrunden."
            subline="STL-Datei in den Kostenrechner laden, Richtpreis ablesen. Das geprüfte Festpreisangebot kommt in 6 Stunden. Für Architekturbüros mit laufendem Bedarf: Flatrate ab 490 € im Monat, erstes Modell kostenlos."
            primaryLabel="Zum Kostenrechner"
            primaryHref="/kostenrechner"
            secondaryLabel="Flatrate ansehen"
            secondaryHref="/architekturmodelle-abo"
          />
          <p className="text-xs text-muted-foreground mt-8">
            Quellenhinweise für die Marktaussagen: Modellmanufaktur André Rossol (FAQ zur Kostenfrage),
            3duss.de (Kostenrechner-Seite), danstec.de (Preisliste Privatkundenmodelle). Stand der Recherche:
            September 2026.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
