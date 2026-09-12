/**
 * Studenten-Funnel v2 · /architekturmodelle/studenten
 * ──────────────────────────────────────────────────────────────────
 * Rebuild 12.09.2026 nach Rollen-Panel (Webdesigner/CEO/CMO/Student),
 * Protokoll: Vault "03 Projects/Website Conversion/(C) Studenten-Funnel".
 * - KEINE Site-Navigation (Funnel ohne Ausstiege), Mini-Header/-Footer
 * - GEO-first: zitierfähiger Faktenblock, Frage-H2s, FAQPage-Schema,
 *   sichtbares Stand-Datum (ai-seo-Playbook: 40-60-Wort-Antworten)
 * - Konditionen (Kevin, 12.09.): 10% Studierende, 15% österr. Unis/FHs
 * - Beweisfotos: Piding-Modell (freigegeben, Case ortsmodell-*)
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, Clock, BadgePercent, MapPin, Star } from 'lucide-react'
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Funnel: bewusst OHNE Site-Navigation */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-black tracking-tight text-lg">EK DRUCK</Link>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/436765517197" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="tel:+436765517197" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> 0676 5517197
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-background">
        {/* HERO + zitierfähiger Faktenblock */}
        <section className="pt-12 md:pt-16 pb-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Für Architektur-Studierende · Stand: September 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em] mb-6 break-words">
              {"Abgabe bald? Dein Modell kommt pünktlich."}
            </h1>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-3xl">
              ekdruck druckt Architektur-Abgabemodelle für Studierende in ganz Österreich: Standard in{' '}
              <strong>3 bis 5 Werktagen</strong>, Express in <strong>24 bis 48 Stunden</strong>, aus der
              Werkstatt in Gunskirchen bei Wels. Mit Studierendenausweis bekommst du <strong>10 % Rabatt</strong>,
              an österreichischen Unis und FHs <strong>15 %</strong>. Bisher wurde jede zugesagte Abgabe
              pünktlich geliefert.
            </p>
          </div>
        </section>

        {/* FORMULAR + BEWEISFOTO */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8 items-start">
            <StudentenDeadlineForm />
            <figure>
              <img
                src="/cases/ortsmodell-uebersicht.jpg"
                alt="Weißes Ortsmodell im Maßstab 1:500 aus dem 3D-Druck, Abgabequalität"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-2xl border border-border object-cover aspect-[4/3]"
              />
              <figcaption className="text-xs text-muted-foreground mt-2">
                Ortsmodell 1:500, komplett gefertigt in 2 Tagen: Auftrag Sonntagabend, Versand Dienstagmittag.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* RABATTE kompakt */}
        <section className="py-10 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-background border border-border p-6">
                <BadgePercent className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="mono text-3xl font-bold">10 %</p>
                <p className="text-sm text-muted-foreground mt-1">Rabatt mit Studierendenausweis</p>
              </div>
              <div className="rounded-2xl bg-background border-2 border-primary p-6">
                <BadgePercent className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="mono text-3xl font-bold">15 %</p>
                <p className="text-sm text-muted-foreground mt-1">für österreichische Unis &amp; FHs</p>
              </div>
              <div className="rounded-2xl bg-background border border-border p-6">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="mono text-3xl font-bold">24–48 h</p>
                <p className="text-sm text-muted-foreground mt-1">Express, wenn es brennt</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 max-w-2xl mx-auto">
              Kein Pauschalpreis-Schema: Jedes Modell wird einzeln kalkuliert, damit du den günstigsten Preis
              für genau deine Abgabe bekommst. Richtwert vorab? Der{' '}
              <Link href="/kostenrechner" className="text-primary underline underline-offset-4">Kostenrechner</Link>{' '}
              braucht 60 Sekunden.
            </p>
          </div>
        </section>

        {/* PIDING-GALERIE */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-2">
              So sieht Abgabequalität aus
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Ortsmodell 1:500 aus weißem Material, klassische Präsentationsoptik, direkt aus den Planungsdaten.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <img src="/cases/ortsmodell-kirche.jpg" alt="Detail eines 3D-gedruckten Ortsmodells 1:500: Kirche und umliegende Gebäude" loading="lazy" decoding="async" className="w-full rounded-xl border border-border object-cover aspect-square" />
              <img src="/cases/ortsmodell-hoehenlinien.jpg" alt="Geländemodell mit Höhenlinien und Straßenverlauf aus dem 3D-Druck" loading="lazy" decoding="async" className="w-full rounded-xl border border-border object-cover aspect-square" />
              <img src="/cases/ortsmodell-tiefe.jpg" alt="Blick über ein weißes Architekturmodell im Maßstab 1:500" loading="lazy" decoding="async" className="w-full rounded-xl border border-border object-cover aspect-square col-span-2 md:col-span-1" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> ★5,0 aus 31 Google-Bewertungen</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Gunskirchen bei Wels · Abholung möglich</span>
            </div>
          </div>
        </section>

        {/* GEO-FAQ */}
        <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-8">Kurz beantwortet</h2>
            <div className="space-y-7">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCHLUSS-CTA → Formular-Anker */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
              Deine Deadline entscheidet. Frag jetzt.
            </h2>
            <p className="text-muted-foreground mb-8">
              30 Sekunden ausfüllen, in wenigen Stunden weißt du Preis und Termin. Ehrlich, auch wenn es sich
              nicht mehr ausgeht.
            </p>
            <a
              href="#deadline-check"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all"
            >
              Zum Deadline-Check
            </a>
          </div>
        </section>
      </main>

      {/* Mini-Footer: nur Pflichtlinks */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 ekdruck e.U. · Gunskirchen · Stand: 12.09.2026</span>
          <span className="flex gap-4">
            <Link href="/impressum" className="hover:text-foreground">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
          </span>
        </div>
      </footer>
    </>
  )
}
