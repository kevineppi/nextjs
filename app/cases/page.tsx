import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, Building2, Calendar, Star } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { cases } from '@/data/realCases'
import { branchenMap } from '@/data/branchenData'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Cases ★5,0 · Echte 3D-Druck-Aufträge | ekdruck'
const DESCRIPTION =
  'Projekt-Stories aus der ekdruck-Werkstatt: Maschinenbau-Schnittmodell EMO, MV-Schaltanlage Dubai, 3.500 Custom-Ausstecher Großkunde. Mit Specs.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/cases'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/cases',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: cases.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: c.title,
      url: `https://www.ek-druck.at/cases/${c.slug}`,
      about: c.primaryKeyword,
    },
  })),
}

export default function CasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={[{ name: 'Cases', url: '/cases' }]} />

        {/* HERO */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Projekt-Stories</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Was ich wirklich gedruckt habe.<br />
                <span className="text-primary">Mit Specs, Lessons & ehrlichen Zahlen.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
                Marketing zeigt Hochglanz-Renderings. Ich zeige Ihnen die echten Projekte: was war der Pain, wie hab ich's gelöst, was hab ich technisch entschieden, was ist rausgekommen · und manchmal auch was beim nächsten Mal besser geht. So sehen Sie, ob ekdruck zu Ihrem Projekt passt.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">★5,0 · 31 Bewertungen</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">{cases.length} ausgewählte Cases</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASES LIST */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-6">
              {cases.map((c) => {
                const branchen = c.branchen.map((b) => branchenMap[b]).filter(Boolean)
                return (
                  <article
                    key={c.slug}
                    className="bg-background border-2 border-border rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all"
                  >
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-7">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                            Case {String(cases.indexOf(c) + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs font-bold text-muted-foreground">{c.year}</span>
                          {branchen.map((b) => (
                            <span key={b.slug} className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                              {b.eyebrow.replace('Branche · ', '')}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-3">
                          {c.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4">
                          <strong className="text-foreground">Kunde:</strong> {c.customerLabel}
                        </p>
                        <p className="text-base leading-relaxed text-foreground/80 mb-5">
                          {c.challenge}
                        </p>
                        {c.customerQuote && (
                          <blockquote className="border-l-4 border-primary pl-5 my-5 italic text-base text-foreground/80">
                            "{c.customerQuote.text}"
                            <footer className="not-italic mt-2 text-xs text-muted-foreground uppercase tracking-wider font-bold">
                              · {c.customerQuote.attribution}
                            </footer>
                          </blockquote>
                        )}
                        <Link
                          href={`/cases/${c.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                        >
                          Vollständige Story lesen <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="md:col-span-5">
                        <div className="bg-muted/40 rounded-2xl p-6">
                          <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-4">Tech-Specs</p>
                          <dl className="space-y-2 text-sm">
                            {c.technicalSpecs.slice(0, 5).map((spec, i) => (
                              <div key={i} className="grid grid-cols-2 gap-3">
                                <dt className="text-muted-foreground">{spec.label}</dt>
                                <dd className="font-bold text-foreground">{spec.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Ihr Projekt · nächstes Case</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                Was ist Ihr<br />
                <span className="text-primary">Modellbau-Pain?</span>
              </h2>
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schicken Sie CAD, Skizze oder beschreiben Sie Ihr Vorhaben. Sie bekommen das Festpreisangebot in 6h · direkt von mir.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kostenrechner" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  <Calculator className="w-5 h-5" />
                  STL hochladen · Preis sofort
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/kontakt" className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all">
                  CAD-Anfrage stellen →
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
