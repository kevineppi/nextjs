/**
 * Studenten-Landingpage · /architekturmodelle/studenten
 * ──────────────────────────────────────────────────────────────────
 * 2026-09-09, Kevin: Voller Architektur-Fokus, Studierende als
 * wiederkehrende Panik-Zielgruppe (Frist verpasst) + Langfrist-Invest
 * (heutige Studis = morgige Büro-Entscheider).
 * Konditionen (Kevin): 20% mit Studierendenausweis, 25% für
 * Hochschulen in Oberösterreich. KEINE Fixpreise je Maßstab
 * (individuell bester Preis). Ansprache: Du.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Clock, BadgePercent, Upload, CheckCircle2, Star, MessageCircle, Phone,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Architekturmodell für Studierende · 20% Rabatt, garantiert pünktlich | ekdruck'
const DESCRIPTION =
  'Abgabe bald und noch kein Modell? Schick uns deine Deadline, wir sagen dir sofort, ob es sich ausgeht. 20% Studierendenrabatt, 25% für Hochschulen in OÖ. Express in 24-48h.'

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

const schritte = [
  {
    icon: Upload,
    titel: '1 · Schick uns Deadline + Daten',
    text: 'CAD-Datei (ArchiCAD, Rhino, SketchUp, STL) oder auch nur Pläne und Skizzen, dazu deine Abgabe-Deadline. Per Mail, WhatsApp oder über den Kostenrechner.',
  },
  {
    icon: Clock,
    titel: '2 · Sofortige Ja/Nein-Antwort',
    text: 'Du bekommst innerhalb weniger Stunden einen Fixpreis und die klare Ansage, ob sich deine Deadline ausgeht. Kein Vielleicht, keine Überraschung am Ende.',
  },
  {
    icon: CheckCircle2,
    titel: '3 · Pünktlich zur Abgabe',
    text: 'Standard in 3 bis 5 Werktagen, Express in 24 bis 48 Stunden. Bisher haben wir jede zugesagte Abgabe pünktlich geliefert. Abholung in Gunskirchen oder Versand.',
  },
]

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-28 md:pt-32">
        {/* HERO */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { name: 'Architekturmodelle', url: '/architekturmodelle' },
                { name: 'Für Studierende', url: '/architekturmodelle/studenten' },
              ]}
            />
            <div className="max-w-4xl mt-8">
              <p className="mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Für Architektur-Studierende
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
                {"Abgabe in ein paar Tagen und noch kein Modell?"}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Schick uns deine Deadline, wir sagen dir <strong className="text-foreground">sofort, ob es
                sich ausgeht</strong>. Wir drucken dein Abgabemodell direkt aus deinen CAD-Daten,
                Express in 24 bis 48 Stunden, und liefern garantiert pünktlich. Damit deine Abgabe
                leistbar bleibt, bekommst du mit Studierendenausweis <strong className="text-foreground">20 %
                Rabatt</strong>, an Hochschulen in Oberösterreich sogar <strong className="text-foreground">25 %</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:office@ek-druck.at?subject=Abgabemodell%20%2B%20Deadline"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Deadline schicken <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/436765517197?text=Hallo%20Kevin%2C%20meine%20Abgabe%20ist%20am%20..."
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Per WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RABATT */}
        <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border-2 border-primary/30 bg-background p-8">
                <BadgePercent className="w-8 h-8 text-primary mb-4" />
                <p className="mono text-4xl font-bold mb-2">20 %</p>
                <p className="font-bold mb-2">Studierendenrabatt</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Auf jedes Abgabe- und Semestermodell, mit gültigem Studierendenausweis. Einfach ein Foto
                  vom Ausweis zur Anfrage dazulegen.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-primary bg-background p-8">
                <BadgePercent className="w-8 h-8 text-primary mb-4" />
                <p className="mono text-4xl font-bold mb-2">25 %</p>
                <p className="font-bold mb-2">Für Hochschulen in Oberösterreich</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Du studierst in Linz, Wels oder Umgebung? Dann bist du praktisch Nachbarschaft, unsere
                  Werkstatt steht in Gunskirchen bei Wels. Abholen geht auch, dann sparst du dir den Versand.
                </p>
              </div>
            </div>
            <p className="max-w-4xl text-sm text-muted-foreground mt-6">
              Keine Pauschalpreise nach Schema: Wir kalkulieren jedes Modell einzeln, damit du wirklich den
              günstigsten Preis für genau deine Abgabe bekommst. Einen ersten Richtwert liefert dir der{' '}
              <Link href="/kostenrechner" className="text-primary underline underline-offset-4">Kostenrechner</Link>,
              der Rabatt kommt dann noch obendrauf.
            </p>
          </div>
        </section>

        {/* ABLAUF */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-10">So läuft das ab</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {schritte.map((s) => (
                  <div key={s.titel} className="rounded-2xl border border-border p-6">
                    <s.icon className="w-7 h-7 text-primary mb-4" />
                    <h3 className="font-bold mb-2">{s.titel}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-muted/40 border border-border p-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> ★5,0 aus 31 Google-Bewertungen</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Noch nie eine zugesagte Abgabe verpasst</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Direkter Draht: 0676 5517197</span>
              </div>
            </div>
          </div>
        </section>

        {/* HÄUFIGE FRAGEN KOMPAKT */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">Kurz beantwortet</h2>
              <div>
                <h3 className="font-bold mb-2">Ich habe nur Pläne, kein 3D-Modell. Geht das trotzdem?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ja. Schick, was du hast, wir sagen dir ehrlich, was daraus machbar ist und was die
                  Aufbereitung kostet. Bei knapper Deadline sagen wir dir auch ehrlich, wenn es sich nicht
                  mehr ausgeht, dann verlierst du keine Zeit.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Welche Maßstäbe und welches Material?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Üblich sind 1:200 bis 1:500 für Entwurfs- und Städtebauabgaben, gedruckt in weißem,
                  mattem Material in klassischer Präsentationsoptik. Details wie Gelände, Umgebung und
                  Sockel besprechen wir an deiner Aufgabenstellung.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Wie schnell geht es wirklich?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard 3 bis 5 Werktage ab Datenfreigabe. Wenn es brennt: Express in 24 bis 48 Stunden.
                  Ein komplettes Ortsmodell haben wir schon von Sonntagabend auf Dienstagmittag geliefert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCHLUSS-CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
                Deine Deadline entscheidet. Frag jetzt.
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Je früher du schreibst, desto entspannter wird deine Abgabe. Und wenn es schon eng ist:
                Genau dafür gibt es den Express.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:office@ek-druck.at?subject=Abgabemodell%20%2B%20Deadline"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Deadline schicken <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/kostenrechner"
                  className="inline-flex items-center justify-center gap-2 border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary/40 transition-all"
                >
                  Richtpreis berechnen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
