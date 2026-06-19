import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowRight, Calculator, Calendar, Phone, MessageCircle,
  CheckCircle2, Quote, Lightbulb, ListChecks,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import { cases, getCaseBySlug } from '@/data/realCases'
import { branchenMap } from '@/data/branchenData'
import { BRAND } from '@/data/brandVoice'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) return { title: 'Case nicht gefunden' }

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildDachAlternates(`/cases/${c.slug}`),
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `https://www.ek-druck.at/cases/${c.slug}`,
      siteName: 'ekdruck · 3D-Druck Österreich',
      locale: 'de_AT',
      type: 'article',
      images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: c.metaTitle, description: c.metaDescription },
    robots: STANDARD_ROBOTS,
  }
}

export default async function CaseDetailPage({ params }: CasePageProps) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  const branchen = c.branchen.map((b) => branchenMap[b]).filter(Boolean)
  const related = (c.relatedCases || []).map((s) => getCaseBySlug(s)).filter(Boolean)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.metaDescription,
    author: { '@type': 'Person', name: BRAND.founderName },
    publisher: {
      '@type': 'Organization',
      name: BRAND.companyName,
      logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' },
    },
    datePublished: `${c.year}-12-01`,
    about: c.primaryKeyword,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs
          items={[
            { name: 'Cases', url: '/cases' },
            { name: c.title.slice(0, 40) + '…', url: `/cases/${c.slug}` },
          ]}
        />

        {/* HERO */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Case-Story · {c.year}
                </span>
                {branchen.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/branchen/${b.slug}`}
                    className="text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 px-2.5 py-1 rounded-full transition-colors"
                  >
                    {b.eyebrow.replace('Branche · ', '')}
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] mb-6">
                {c.title}
              </h1>
              <p className="text-base text-muted-foreground mb-2">
                <strong className="text-foreground">Kunde:</strong> {c.customerLabel}
              </p>
            </div>
          </div>
        </section>

        {/* CHALLENGE + SPECS */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
              <div className="md:col-span-7">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Die Herausforderung
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-6">
                  Was war das Problem?
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {c.challenge}
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="bg-background border-2 border-border rounded-2xl p-6 sticky top-24">
                  <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-4">Technische Daten</p>
                  <dl className="space-y-3 text-sm">
                    {c.technicalSpecs.map((spec, i) => (
                      <div key={i} className="grid grid-cols-2 gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                        <dt className="text-muted-foreground">{spec.label}</dt>
                        <dd className="font-bold text-foreground">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-20 md:py-28 bg-background" aria-label="Ansatz">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Mein Ansatz</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  So bin ich vorgegangen.
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {c.approach.length} überprüfbare Schritte · von CAD-Eingang bis zur Anlieferung.
                </p>
              </div>

              <div className="space-y-3">
                {c.approach.map((step, i) => (
                  <div key={i} className="grid md:grid-cols-12 gap-6 bg-muted/30 border-2 border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all">
                    <div className="md:col-span-2">
                      <p className="mono text-5xl font-bold text-primary/20 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-bold text-lg leading-tight tracking-tight">{step.label}</h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-base text-foreground/80 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="py-20 md:py-28 bg-foreground text-background border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Das Ergebnis
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                  Was ist rausgekommen.
                </h2>
              </div>

              <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 mb-8">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <p className="text-base md:text-lg leading-relaxed text-background/95">
                  {c.outcome}
                </p>
              </div>

              {c.customerQuote && (
                <blockquote className="bg-background/5 border-l-4 border-primary p-8 rounded-r-2xl mb-8">
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <p className="text-lg md:text-xl italic leading-relaxed mb-3">
                    "{c.customerQuote.text}"
                  </p>
                  <footer className="text-xs text-background/60 uppercase tracking-wider font-bold">
                    · {c.customerQuote.attribution}
                  </footer>
                </blockquote>
              )}

              {c.lessons && (
                <div className="bg-background/5 border-2 border-background/10 rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      Lessons · was ich gelernt habe
                    </p>
                  </div>
                  <p className="text-base text-background/80 leading-relaxed">{c.lessons}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* RELATED CASES */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 bg-muted/30 border-y border-border" aria-label="Verwandte Cases">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
                  Mehr in dieser Liga
                </p>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8">
                  Verwandte Projekte aus der Werkstatt.
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {related.map((r) =>
                    r ? (
                      <Link
                        key={r.slug}
                        href={`/cases/${r.slug}`}
                        className="group block bg-background border-2 border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
                      >
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                          {r.year}
                        </p>
                        <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors tracking-tight">
                          {r.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                          Story lesen <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Ihr Projekt
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                Sieht das nach Ihrem Vorhaben aus?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Schicken Sie CAD oder kurze Beschreibung · Sie bekommen das Festpreis-Angebot in 6h, direkt von mir, Kevin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/kostenrechner" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all">
                  <Calculator className="w-5 h-5" />
                  Preis sofort berechnen
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
