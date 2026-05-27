import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calculator, ArrowRight, Check, Info, Phone, MessageCircle,
  TrendingUp, Package, Layers, Truck,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { BRAND } from '@/data/brandVoice'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Preise & Beispiele ★5,0 — Was kostet 3D-Druck wirklich? | ekdruck'
const DESCRIPTION =
  'Konkrete Preisbeispiele aus der ekdruck-Werkstatt: was kostet ein Architekturmodell, ein Messemodell, ein Funktionsmuster? Inkl. Treiber-Übersicht & Rabattstaffel.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/preise'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/preise',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const pricingFaqs = [
  {
    question: 'Warum sind 3D-Druck-Modelle so unterschiedlich teuer?',
    answer: 'Drei Hauptfaktoren: (1) Material-Verbrauch in Gramm (Modellgröße × Füllgrad), (2) Druckzeit in Stunden (Detailgrad × Schichthöhe), (3) Nachbearbeitung in Personenstunden (Schleifen, Lackieren, Montieren). Ein 50€-Modell hat ~50g Material + 4h Druckzeit + 0,5h Nachbearbeitung. Ein 5.000€-Modell kann 8kg + 200h + 25h Nachbearbeitung haben — das ist der Spread.',
  },
  {
    question: 'Was kostet ein typisches Messemodell?',
    answer: 'Mini-Komponente (15-25cm, Standard-Material): €150-€500. Mittleres Bauteil-Modell mit Lackierung (30-50cm): €600-€1.800. Größeres Schnittmodell mit beweglichen Teilen (40-70cm): €1.500-€4.500. Komplettanlage segmentiert (1m+): €3.500-€12.000. Premium-Show-Quality mit Beleuchtung und aktiven Funktionen: bis €18.000.',
  },
  {
    question: 'Was kostet ein Architekturmodell?',
    answer: 'Kleinmodell 1:200, einzelner Baukörper, weiß: €120-€400. Mittleres Wettbewerbsmodell 1:200, Sockel + Umgebung: €600-€1.800. Großes Stadtmodell 1:500 bis 1:1000, 60×80cm+: €2.500-€8.000. Premium-Stadtmodell mit Beleuchtung und mehreren Detailebenen: bis €15.000.',
  },
  {
    question: 'Was kostet ein einfaches Funktionsmuster für die Produktentwicklung?',
    answer: 'Kleines Bauteil (Faustgröße, PLA, 1 Stück): €25-€80. Mittleres Bauteil mit Carbon-PA für mechanische Tests: €120-€400 pro Stück. Klein-Serie 10-50 Stück: 15-30% Mengenrabatt. Ab 100 Stück individuelle Kalkulation, oft günstiger durch Druckbett-Optimierung.',
  },
  {
    question: 'Gibt es Mengenrabatte?',
    answer: 'Ab 10 Stück: 10% Rabatt. Ab 50 Stück: 15%. Ab 100 Stück: 20% — oder individueller Projektpreis wenn besseres Druckbett-Layout möglich. Ab 500 Stück immer individuelle Kalkulation, weil Skaleneffekte deutlich werden.',
  },
  {
    question: 'Was ist im Festpreis enthalten?',
    answer: 'CAD-Sichtung (kleine Anpassungen kostenfrei), Material, Druck, manuelle QA, Standard-Verpackung, Versand innerhalb DACH. Lackierung, Sonder-Verpackung, Express-Aufschlag, persönliche Anlieferung kosten extra — werden aber im Festpreis-Angebot transparent ausgewiesen.',
  },
  {
    question: 'Was sind die typischen Aufschläge?',
    answer: 'Express 24h: +30% auf Standardpreis. Express 48h: +15%. Lackierung pro Sektion: ab €40 (kleine Teile) bis €400+ (Großmodelle, 2K-Profi). Persönliche Anlieferung (außerhalb 50km-Radius Gunskirchen): €120-€350 Spesen je nach Distanz. NDA-Sonder-Variante: €150 einmalig.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={[{ name: 'Preise & Beispiele', url: '/preise' }]} />

        {/* HERO */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Pricing — transparent
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Was kostet 3D-Druck<br />
                <span className="text-primary">wirklich?</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Einzelteile starten ab €20 — aber was kostet ein 2m-Messemodell? Hier sehen Sie ehrliche Preis-Bereiche pro Projekt-Typ, die Treiber hinter den Preisen und Beispiel-Kalkulationen aus echten Aufträgen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/kostenrechner" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  <Calculator className="w-5 h-5" />
                  Sofort-Preis berechnen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/kontakt" className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all">
                  Festpreis in 6h
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE RANGES PER PROJECT TYPE */}
        <section className="py-20 md:py-28 bg-muted/30 border-y border-border" aria-label="Preisbereiche">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Preisbereiche</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Realistische Budgets<br />pro Projekt-Typ.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Sie kennen die Untergrenze. Sie kennen die Obergrenze. Was Ihr konkretes Projekt kostet → nach CAD-Sichtung in 6h.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    category: 'Einzelteil / Funktionsmuster',
                    icon: Layers,
                    examples: [
                      { label: 'Klein, PLA, einfach', range: '€25-€80' },
                      { label: 'Mittel, Carbon-PA, belastbar', range: '€120-€400' },
                      { label: 'Groß, Multi-Material', range: '€350-€900' },
                    ],
                    note: 'Pro Stück. Klein-Serie 10-50 Stück: -15-30%',
                  },
                  {
                    category: 'Architekturmodell',
                    icon: Package,
                    examples: [
                      { label: 'Einzelner Baukörper 1:200, weiß', range: '€120-€400' },
                      { label: 'Wettbewerbsmodell mit Sockel + Umgebung', range: '€600-€1.800' },
                      { label: 'Stadtmodell 1:500, 60×80cm+', range: '€2.500-€8.000' },
                      { label: 'Premium mit Beleuchtung', range: '€8.000-€15.000' },
                    ],
                    note: 'Inklusive CAD-Import aus ArchiCAD/Revit/Rhino',
                  },
                  {
                    category: 'Messemodell',
                    icon: TrendingUp,
                    examples: [
                      { label: 'Mini-Komponente (15-25cm)', range: '€150-€500' },
                      { label: 'Bauteil-Modell mit Lackierung', range: '€600-€1.800' },
                      { label: 'Schnittmodell mit beweglichen Teilen', range: '€1.500-€4.500' },
                      { label: 'Komplettanlage segmentiert (1m+)', range: '€3.500-€12.000' },
                      { label: 'Premium-Show-Quality (Licht, aktive Demo)', range: '€8.000-€18.000' },
                    ],
                    note: 'Express 24h: +30%, Express 48h: +15%',
                  },
                  {
                    category: 'Kleinserie',
                    icon: Package,
                    examples: [
                      { label: '25-50 Stück Einzelteil', range: 'ab €15/Stück' },
                      { label: '100-500 Stück Custom-Geometrie', range: 'ab €10/Stück' },
                      { label: '1.000-5.000 Stück Werbeartikel', range: 'ab €6/Stück' },
                    ],
                    note: 'Ab 500 Stück Spritzguss-Vergleich rechnen — ab da kann Spritzguss günstiger sein',
                  },
                  {
                    category: 'Großmodell',
                    icon: Layers,
                    examples: [
                      { label: 'Schiffsmodell 1m segmentiert', range: '€2.500-€8.000' },
                      { label: 'Windturbine 1,5m mit drehbaren Rotoren', range: '€2.500-€5.500' },
                      { label: 'Yacht 2m+ vollständig', range: '€6.000-€15.000' },
                    ],
                    note: 'Persönliche Anlieferung bei Großmodellen empfohlen (Versandrisiko)',
                  },
                  {
                    category: 'Lackierung & Veredelung',
                    icon: Check,
                    examples: [
                      { label: 'Grundlackierung 1 Farbe', range: 'ab €40' },
                      { label: '2K-Profi-Lackierung RAL/Pantone', range: 'ab €120' },
                      { label: 'Aceton-Glättung ABS-Modell', range: 'ab €80' },
                      { label: 'Lasergravierte Inlays', range: 'ab €25' },
                    ],
                    note: 'Pro Sektion. Großmodelle entsprechend mehr.',
                  },
                ].map((cat, i) => (
                  <article key={i} className="bg-background border-2 border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg leading-tight tracking-tight">{cat.category}</h3>
                    </div>
                    <div className="space-y-2 mb-5">
                      {cat.examples.map((ex, j) => (
                        <div key={j} className="flex items-start justify-between gap-3 pb-2 border-b border-border last:border-0">
                          <p className="text-sm text-muted-foreground leading-snug">{ex.label}</p>
                          <p className="text-sm font-bold text-primary whitespace-nowrap">{ex.range}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-muted-foreground pt-3 border-t border-border">
                      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <p className="leading-snug">{cat.note}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING DRIVERS */}
        <section className="py-20 md:py-28 bg-background" aria-label="Preis-Treiber">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Preis-Treiber</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Was Ihr Modell<br />wirklich teurer oder günstiger macht.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Wenn Sie wissen welche Faktoren am stärksten wirken, können Sie das Angebot bewusst beeinflussen. Hier sind die 6 wichtigsten Treiber.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    factor: 'Modellgröße',
                    impact: '×1 bis ×20',
                    detail: 'Material-Verbrauch und Druckzeit skalieren linear mit dem Volumen — verdoppelte Linearabmessung = 8-fache Kosten. Wenn möglich, Maßstab reduzieren (1:50 → 1:100 spart 87% Material). Bei Messe-Hauptmodellen lohnt sich Premium-Maßstab; bei Begleit-Modellen kleinerer Maßstab ausreichend.',
                  },
                  {
                    factor: 'Material-Wahl',
                    impact: '×1 bis ×4',
                    detail: 'PLA (Bestseller): günstig + detailreich. PETG: +20-30% für Robustheit. ABS + Aceton-Glättung: +40% für Spritzguss-ähnliche Oberfläche. Carbon-PA: ×3-4 für mechanisch belastete Funktionsbauteile. Tipp: nur Schauflächen in Premium-Material, Innenstruktur in PLA.',
                  },
                  {
                    factor: 'Detailgrad / Schichthöhe',
                    impact: '×1,5 bis ×3',
                    detail: '0,2mm Schichthöhe (Standard): Material und Zeit minimal. 0,1mm Schichthöhe für sichtbare Detailflächen: +50% Druckzeit. 0,08mm für höchste Detail-Anwendungen: +150%. Bei Schauflächen sinnvoll, bei Innenstrukturen Verschwendung.',
                  },
                  {
                    factor: 'Lackierung',
                    impact: '+€40 bis +€2.000',
                    detail: 'Größter "versteckter" Treiber. Standard-Grundlackierung pro Sektion ab €40. 2K-Profi-Lackierung in RAL ab €120. Mehrfarbige Lackierung mit Maskierung: ×2-3. Bei Großmodellen 30-40% des Gesamtpreises. Frage vor Auftrag: ist Lackierung wirklich nötig oder reicht Material-Originalfarbe?',
                  },
                  {
                    factor: 'Bewegliche Teile',
                    impact: '+€80 bis +€500 pro Mechanismus',
                    detail: 'Drehbare Räder, Magnet-Klappen, Servo-Antriebe — jeder Funktions-Mechanismus kostet zwischen €80 und €500 zusätzlich. Magnetverbindungen sind günstig, Servos teuer. Frage vor Auftrag: welche Teile MÜSSEN beweglich sein?',
                  },
                  {
                    factor: 'Express-Aufschlag',
                    impact: '+15% bis +30%',
                    detail: 'Express 48h: +15%. Express 24h: +30%. Express same-day (selten möglich, nur kleine Modelle): nach Verfügbarkeit. Wenn Lead-Time 3-5 Wochen erlaubt: Standard-Pricing. Wenn unter 2 Wochen: Express-Aufschlag rechnen.',
                  },
                ].map((d, i) => (
                  <div key={i} className="grid md:grid-cols-12 gap-6 bg-muted/30 border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all">
                    <div className="md:col-span-3">
                      <h3 className="font-bold text-lg leading-tight tracking-tight mb-1">{d.factor}</h3>
                      <p className="mono text-xs font-bold uppercase tracking-wider text-primary">{d.impact}</p>
                    </div>
                    <div className="md:col-span-9">
                      <p className="text-base text-muted-foreground leading-relaxed">{d.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DISCOUNT MATRIX */}
        <section className="py-20 md:py-28 bg-foreground text-background border-y border-border" aria-label="Mengenrabatte">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Mengenstaffel</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  Mehr Stück = günstiger pro Stück.
                </h2>
                <p className="text-base text-background/70 leading-relaxed">
                  Druckbett-Optimierung und Material-Bulk-Einkauf werden ab 10 Stück merklich. Volle Transparenz:
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-background/10">
                <div className="grid grid-cols-3 bg-background/10">
                  <div className="p-5 mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/60">Stückzahl</div>
                  <div className="p-5 mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Rabatt</div>
                  <div className="p-5 mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/60">Beispiel-Effekt</div>
                </div>
                {[
                  { range: '1-9 Stück', discount: 'Listenpreis', example: 'Einzelmodell €100 → €100' },
                  { range: '10-49 Stück', discount: '-10%', example: '50 Stück á €100 → €4.500 (statt €5.000)' },
                  { range: '50-99 Stück', discount: '-15%', example: '75 Stück á €100 → €6.375 (statt €7.500)' },
                  { range: '100-499 Stück', discount: '-20%', example: '250 Stück á €100 → €20.000 (statt €25.000)' },
                  { range: 'ab 500 Stück', discount: 'Individuell', example: 'Druckbett-Layout + Bulk-Material = oft -30% bis -50%' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 border-t border-background/10">
                    <div className="p-5 font-bold">{row.range}</div>
                    <div className="p-5 font-bold text-primary">{row.discount}</div>
                    <div className="p-5 text-sm text-background/70">{row.example}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background" aria-label="Pricing FAQ">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Pricing FAQ</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em]">
                  Fragen zu Preisen,<br />die andere vor Ihnen hatten.
                </h2>
              </div>
              <div className="space-y-3">
                {pricingFaqs.map((f, i) => (
                  <details key={i} className="group border-2 border-border rounded-2xl p-6 hover:border-primary/30 transition-all open:border-primary/30">
                    <summary className="font-bold text-base md:text-lg cursor-pointer flex items-start gap-3 list-none">
                      <span className="mono text-sm font-bold text-primary shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1 leading-snug">{f.question}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 ml-8 text-muted-foreground leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Konkret werden
              </p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Was kostet IHR Modell?<br />
                <span className="text-primary">Sofort online berechnen.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                STL hochladen, Material wählen, Richtpreis in 60 Sekunden. Anschließend verbindliches Festpreis-Angebot in 6h direkt von Kevin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kostenrechner" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  <Calculator className="w-5 h-5" />
                  Sofort-Preis berechnen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all">
                  <Phone className="w-4 h-4" /> {BRAND.phoneDisplay}
                </a>
                <a href="https://wa.me/436765517197" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
