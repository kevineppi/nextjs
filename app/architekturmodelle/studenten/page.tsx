/**
 * Studenten-Funnel v2.1 · /architekturmodelle/studenten
 * ──────────────────────────────────────────────────────────────────
 * Rebuild 12.09.2026 nach Rollen-Panel (Webdesigner/CEO/CMO/Student),
 * Protokoll: Vault "03 Projects/Website Conversion/(C) Studenten-Funnel".
 * v2.1: Restyling in der ekdruck-Designsprache (Kevin-Feedback 12.09.:
 * v2 sah generisch aus) — Grid-Hintergrund + Accent-Blobs, Sticker-Badge,
 * text-gradient-Headline, Mono-Stats, CTA-Buttons wie Hero.
 * v2.2: normale Site-Navigation + Footer (Kevin, 12.09.: Seite gehört in
 * die Website eingebaut, nicht isoliert — "Navigationsmenü weg" bezog
 * sich nicht auf den Site-Header)
 * - GEO-first: zitierfähiger Faktenblock, Frage-H2s, FAQPage-Schema,
 *   sichtbares Stand-Datum (ai-seo-Playbook: 40-60-Wort-Antworten)
 * - Konditionen (Kevin, 12.09.): 10% Studierende, 15% österr. Unis/FHs
 * - Beweisfotos: Piding-Modell (freigegeben, Case ortsmodell-*)
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, MapPin, ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StudentenDeadlineForm from '@/components/StudentenDeadlineForm'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Architekturmodell für die Uni-Abgabe drucken lassen · Express 24h | ekdruck'
const DESCRIPTION =
  'Abgabemodell in 3-5 Werktagen, Express in 24-48h, aus ganz Österreich. 10% Studierendenrabatt, 15% für österreichische Unis und FHs. Deadline schicken, sofort Ja/Nein-Antwort.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/architekturmodelle/studenten', ...buildDachAlternates('/architekturmodelle/studenten') },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/architekturmodelle/studenten',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg', width: 1200, height: 801 }],
  },
}

const faqs = [
  {
    q: 'Wo kann ich mein Architekturmodell für die Uni-Abgabe in Österreich schnell drucken lassen?',
    a: 'Bei ekdruck in Gunskirchen bei Wels: Abgabemodelle aus deinen CAD-Daten (Rhino, ArchiCAD, SketchUp, STL) in 3 bis 5 Werktagen, Express in 24 bis 48 Stunden. Versicherter Versand in ganz Österreich oder Abholung in der Werkstatt. Bisher wurde jede zugesagte Abgabe pünktlich geliefert.',
  },
  {
    q: 'Was kostet ein Abgabemodell für Studierende?',
    a: 'Jedes Modell wird einzeln kalkuliert, damit du den günstigsten Preis für genau deine Abgabe bekommst, Pauschalpreise gibt es bewusst nicht. Mit Studierendenausweis bekommst du 10 % Rabatt, an österreichischen Universitäten und Fachhochschulen 15 %. Einen Richtwert liefert der Kostenrechner auf ek-druck.at in 60 Sekunden.',
  },
  {
    q: 'Wie schnell kann ein Abgabemodell gedruckt werden?',
    a: 'Standard sind 3 bis 5 Werktage ab Datenfreigabe, im Express 24 bis 48 Stunden. Ein komplettes Ortsmodell im Maßstab 1:500 wurde bereits von Sonntagabend (Auftragseingang) bis Dienstagmittag (Versand) gefertigt. Schick deine Deadline, du bekommst sofort eine ehrliche Ja/Nein-Antwort.',
  },
  {
    q: 'Geht das auch ohne fertiges 3D-Modell, nur mit Plänen?',
    a: 'Ja. Schick Pläne, Screenshots oder Skizzen, du bekommst eine ehrliche Einschätzung, was daraus bis zu deiner Deadline machbar ist und was die Datenaufbereitung kostet. Wenn es sich zeitlich nicht mehr ausgeht, sagen wir dir das sofort, damit du keine Zeit verlierst.',
  },
  {
    q: 'Welcher Maßstab und welches Material sind für Abgabemodelle üblich?',
    a: 'Üblich sind 1:200 bis 1:500 für Entwurfs- und Städtebauabgaben, gedruckt in weißem, mattem Material in klassischer Präsentationsoptik, wie sie Jurys und Professoren erwarten. Gelände, Umgebung und Sockel werden an deiner Aufgabenstellung ausgerichtet.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Architekturmodell-Druck für Studierende',
  provider: { '@type': 'LocalBusiness', name: 'ekdruck e.U.', address: { '@type': 'PostalAddress', streetAddress: 'Negrellistraße 15', postalCode: '4623', addressLocality: 'Gunskirchen', addressCountry: 'AT' }, telephone: '+43 676 5517197' },
  areaServed: 'AT',
  audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
  offers: [
    { '@type': 'Offer', name: '10% Studierendenrabatt', description: 'Für alle Studierenden mit gültigem Studierendenausweis' },
    { '@type': 'Offer', name: '15% Rabatt für österreichische Universitäten und Fachhochschulen', description: 'Für Studierende an österreichischen Unis und FHs, mit Studierendenausweis' },
  ],
}

/** Grid-Hintergrund wie Hero.tsx (statisch, ohne Parallax) */
const gridBg = {
  backgroundImage: `
    linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
  `,
  backgroundSize: '80px 80px',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <Navigation />

      <main className="min-h-screen bg-background">
        {/* HERO + zitierfähiger Faktenblock — Designsprache wie Hero.tsx */}
        <section className="relative overflow-hidden pt-32 md:pt-40 pb-10 md:pb-14 bg-background">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={gridBg} />
            <div className="absolute top-[15%] right-[8%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
            <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px]" />
          </div>

          {/* Corner label wie Startseite */}
          <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10 hidden sm:block">
            <div className="mono text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase text-right leading-relaxed">
              Für Architektur-<br />Studierende<br />Österreich
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="sticker border-primary text-primary w-fit mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Express 24&#8211;48h · Stand: September 2026
              </div>

              <h1 className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-bold leading-[1.02] tracking-[-0.05em] mb-6">
                <span className="block">Abgabe bald?</span>
                <span className="block text-gradient mt-1 md:mt-3 text-[clamp(2rem,5.5vw,5rem)] pt-[0.1em] leading-[1.1]">
                  Dein Modell kommt pünktlich.
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
                ekdruck druckt Architektur-Abgabemodelle für Studierende in ganz Österreich: Standard in{' '}
                <span className="text-foreground font-semibold">3 bis 5 Werktagen</span>, Express in{' '}
                <span className="text-foreground font-semibold">24 bis 48 Stunden</span>, aus der Werkstatt in
                Gunskirchen bei Wels. Mit Studierendenausweis bekommst du{' '}
                <span className="text-primary font-semibold">10 % Rabatt</span>, an österreichischen Unis und FHs{' '}
                <span className="text-primary font-semibold">15 %</span>. Bisher wurde jede zugesagte Abgabe
                pünktlich geliefert.
              </p>

              {/* Stats row im Hero-Stil (Mono-Zahlen) */}
              <div className="flex items-center gap-10 lg:gap-16 flex-wrap">
                {[
                  { val: '10%', label: 'Studierendenausweis' },
                  { val: '15%', label: 'Österr. Unis & FHs' },
                  { val: '24h', label: 'Express' },
                  { val: '5.0', label: 'Google Rating' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight mono">{val}</p>
                    <p className="mono text-[10px] text-foreground/30 mt-2 font-bold uppercase tracking-[0.2em]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAR + BEWEISFOTO */}
        <section className="py-10 md:py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <StudentenDeadlineForm />
              <figure className="md:sticky md:top-28">
                <img
                  src="/cases/ortsmodell-uebersicht.jpg"
                  alt="Weißes Ortsmodell im Maßstab 1:500 aus dem 3D-Druck, Abgabequalität"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full rounded-2xl border border-border object-cover aspect-[4/3]"
                />
                <figcaption className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-3">
                  Ortsmodell 1:500 · Auftrag Sonntagabend, Versand Dienstagmittag
                </figcaption>
              </figure>
            </div>
            <p className="text-sm text-muted-foreground max-w-7xl mx-auto mt-8">
              Kein Pauschalpreis-Schema: Jedes Modell wird einzeln kalkuliert, damit du den günstigsten Preis für
              genau deine Abgabe bekommst. Richtwert vorab? Der{' '}
              <Link href="/kostenrechner" className="text-primary font-semibold hover:underline">Kostenrechner</Link>{' '}
              braucht 60 Sekunden.
            </p>
          </div>
        </section>

        {/* PIDING-GALERIE */}
        <section className="py-16 md:py-24 bg-secondary/30 border-y border-border relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Referenz · Ortsmodell 1:500</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
                So sieht Abgabequalität aus.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                Weißes Material, klassische Präsentationsoptik, direkt aus den Planungsdaten.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                <img src="/cases/ortsmodell-kirche.jpg" alt="Detail eines 3D-gedruckten Ortsmodells 1:500: Kirche und umliegende Gebäude" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square" />
                <img src="/cases/ortsmodell-hoehenlinien.jpg" alt="Geländemodell mit Höhenlinien und Straßenverlauf aus dem 3D-Druck" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square" />
                <img src="/cases/ortsmodell-tiefe.jpg" alt="Blick über ein weißes Architekturmodell im Maßstab 1:500" loading="lazy" decoding="async" className="w-full rounded-2xl border border-border object-cover aspect-square col-span-2 md:col-span-1" />
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-3">
                <span className="flex items-center gap-2 text-sm font-semibold"><Star className="w-4 h-4 text-primary fill-primary" /> 5,0 aus 31 Google-Bewertungen</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-primary" /> Gunskirchen bei Wels · Abholung möglich</span>
              </div>
            </div>
          </div>
        </section>

        {/* GEO-FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-10 md:mb-14">
                Kurz beantwortet.
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-9">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-bold text-lg leading-snug mb-2.5">{f.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SCHLUSS-CTA → Formular-Anker */}
        <section className="relative overflow-hidden py-20 md:py-28 border-t border-border">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={gridBg} />
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
              Deine Deadline<br />
              <span className="text-gradient">entscheidet. Frag jetzt.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl mx-auto">
              30 Sekunden ausfüllen, in wenigen Stunden weißt du Preis und Termin. Ehrlich, auch wenn es sich
              nicht mehr ausgeht.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" className="group text-base px-10 py-7 rounded-full" asChild>
                <a href="#deadline-check">
                  Zum Deadline-Check
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </Button>
              <Button size="lg" className="group text-base px-8 py-7 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold" asChild>
                <Link href="/kostenrechner">
                  <Calculator className="mr-2 w-4 h-4" />
                  Preis berechnen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
