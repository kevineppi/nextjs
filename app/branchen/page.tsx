import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Calculator, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { branchen } from '@/data/branchenData'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Branchen-Messemodelle 3D-Druck ★5,0 — Maschinenbau, Schiffbau, Energie & mehr'
const DESCRIPTION =
  '3D-gedruckte Messemodelle für 6 Industrie-Branchen: Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau, Elektrotechnik. ★5,0 (31 Reviews) · Made in Austria →'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/branchen'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/branchen',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'ekdruck – Branchen-Messemodelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Branchen-Messemodelle ek-druck',
  description: DESCRIPTION,
  url: 'https://www.ek-druck.at/branchen',
  hasPart: branchen.map((b) => ({
    '@type': 'WebPage',
    name: b.h1,
    url: `https://www.ek-druck.at/branchen/${b.slug}`,
    about: b.primaryKeyword,
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <Breadcrumbs items={[{ name: 'Branchen', url: '/branchen' }]} />

        {/* Hero */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Branchen-Lösungen
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                3D-Druck-Messemodelle für Industriegüter-Hersteller in DACH.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau, Elektrotechnik —
                für jede Branche gelten andere Maßstäbe, Materialien und Erwartungen. Wir kennen sie.
                Hier finden Sie die typischen Modell-Anfragen und Lösungs-Templates Ihrer Branche.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">★5,0 · 31 Bewertungen</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">Made in Austria</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branchen Grid */}
        <section className="py-20 md:py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {branchen.map((b, i) => (
                  <Link
                    key={b.slug}
                    href={`/branchen/${b.slug}`}
                    className="group block bg-background border-2 border-border rounded-3xl p-8 hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    <p className="mono text-5xl font-bold text-primary/20 leading-none mb-6">
                      0{i + 1}
                    </p>
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                      {b.eyebrow}
                    </p>
                    <h2 className="font-bold text-xl md:text-2xl leading-snug mb-4 group-hover:text-primary transition-colors tracking-tight">
                      {b.primaryKeyword}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {b.subline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                      Branche entdecken <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Andere Branche?<br />
                <span className="text-primary">Wir drucken auch das.</span>
              </h2>
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Bauwesen, Luftfahrt, Medizintechnik, Pharma — wenn Ihre Branche oben nicht gelistet ist, schicken Sie kurz CAD oder Skizze. Wir prüfen die Machbarkeit ehrlich und sagen auch klar, wenn FDM-Druck nicht passt.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kostenrechner"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  STL hochladen — Preis sofort
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all"
                >
                  Branche anfragen →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
