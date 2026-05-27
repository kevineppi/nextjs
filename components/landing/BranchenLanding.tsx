/**
 * BranchenLanding — Server Component für Branchen-Cluster-Landing-Pages
 * ────────────────────────────────────────────────────────────────────
 *
 * Wird verwendet von:
 *   - app/branchen/<slug>/page.tsx (für 6 Branchen)
 *
 * Pflicht:
 *   - Server Component (kein 'use client'!) für SEO-Performance + LCP
 *   - JSON-LD inline gerendert (FAQPage + Service + BreadcrumbList)
 *
 * Nimmt Branche-Datensatz aus data/branchenData.ts und rendert komplette
 * Landing mit Hero, Pain-Section, Use-Cases, Material-Empfehlung, FAQs,
 * Cross-Links und mehrfachen CTAs.
 */

import Link from 'next/link'
import {
  Check,
  ArrowRight,
  Calculator,
  Phone,
  Calendar,
  MessageCircle,
  Building2,
  Wrench,
  Star,
  Clock,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import type { Branche } from '@/data/branchenData'
import { branchenMap } from '@/data/branchenData'
import { BRAND } from '@/data/brandVoice'

interface BranchenLandingProps {
  branche: Branche
}

const BranchenLanding = ({ branche }: BranchenLandingProps) => {
  // ─── JSON-LD Schemas (Server-side, inline) ──────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: branche.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: branche.primaryKeyword,
    name: branche.h1,
    description: branche.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'ekdruck e.U.',
      url: 'https://www.ek-druck.at',
      telephone: '+436765517197',
      email: 'office@ek-druck.at',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Negrellistraße 15',
        addressLocality: 'Gunskirchen',
        postalCode: '4623',
        addressRegion: 'Oberösterreich',
        addressCountry: 'AT',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '31',
        bestRating: '5',
      },
    },
    areaServed: ['AT', 'DE', 'CH'],
    offers: branche.useCases.map((uc) => ({
      '@type': 'Offer',
      name: uc.title,
      description: uc.description,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        minPrice: '30',
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ek-druck.at/' },
      { '@type': 'ListItem', position: 2, name: 'Branchen', item: 'https://www.ek-druck.at/branchen' },
      {
        '@type': 'ListItem',
        position: 3,
        name: branche.eyebrow.replace('Branche · ', ''),
        item: `https://www.ek-druck.at/branchen/${branche.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <Breadcrumbs
          items={[
            { name: 'Branchen', url: '/branchen' },
            { name: branche.eyebrow.replace('Branche · ', ''), url: `/branchen/${branche.slug}` },
          ]}
        />

        {/* ══════════════════════════════════════════════════════
            HERO — Pain-First Hook
           ══════════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-32 bg-background overflow-hidden" aria-label="Hero">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                {branche.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                {branche.h1}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
                {branche.subline}
              </p>

              {/* Author-Byline für E-E-A-T-Boost (K9) */}
              <div className="mb-8 max-w-3xl">
                <AuthorByline showDate updatedAt="2026-05-26" />
              </div>

              {/* Quick-Trust-Bar */}
              <div className="flex flex-wrap gap-4 mb-10 items-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">★5,0 · 31 Bewertungen</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">Express 24–48h</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">Made in Austria</span>
                </div>
              </div>

              {/* Hero-CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kostenrechner"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  STL hochladen — Preis in 60 Sek.
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all"
                >
                  Festpreis-Angebot in 6h
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            SEO LONG-TAIL BODY — Keyword-reicher Prose-Block
            (semantisch eingestreut, 3-5× pro Secondary-Keyword)
           ══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background" aria-label="Branchen-Detail">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                {branche.seoLongTailBody.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-8">
                {branche.seoLongTailBody.h2}
              </h2>
              <div className="prose prose-lg max-w-none space-y-5">
                {branche.seoLongTailBody.paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PAIN-SOLUTION SECTION — Branchen-spezifisch
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-muted/30 border-y border-border" aria-label="Typische Probleme">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Typische Pain-Points
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em]">
                  Warum {branche.eyebrow.replace('Branche · ', '')}-Aussteller bei uns landen.
                </h2>
              </div>

              <div className="space-y-6">
                {branche.pains.map((pain, i) => (
                  <article
                    key={i}
                    className="grid md:grid-cols-12 gap-6 bg-background rounded-3xl border-2 border-border p-8 md:p-12 hover:border-primary/30 transition-all"
                  >
                    <div className="md:col-span-1">
                      <span className="mono text-5xl md:text-6xl font-bold text-primary/30 leading-none">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <p className="mono text-[10px] font-bold uppercase tracking-wider text-destructive/70 mb-3">
                        Problem
                      </p>
                      <p className="font-bold text-lg md:text-xl leading-snug">{pain.problem}</p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                        Unsere Lösung
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {pain.solution}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            INHABER-AUTHORITY-BLOCK — Persönlicher Anker (gegen KI-Look)
           ══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-background" aria-label="Wer hier druckt">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-4">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                    Wer hier druckt
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.03em] mb-4">
                    Kevin Eppensteiner.<br />
                    <span className="text-primary">Selbst.</span>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Werkstatt in {BRAND.location}. {BRAND.printers.fdm} Industrie-FDM-Drucker im Dauerbetrieb.
                  </p>
                </div>
                <div className="md:col-span-8 space-y-4 text-base md:text-lg leading-relaxed">
                  <p>
                    Ich bin {BRAND.founderAge}, gegründet habe ich ekdruck {new Date().getFullYear() - BRAND.yearFounded} Jahre vor diesem Text — neben einem Vollzeitjob in der Eventbranche. Im Oktober beginnt mein Maschinenbau-Studium und ek-druck wird Vollzeit.
                  </p>
                  <p className="text-muted-foreground">
                    Was das für Sie heißt: Wenn Sie hier eine Anfrage stellen, landet sie in <strong>meinem Posteingang</strong>. Nicht bei einem Vertriebsteam, nicht in einer Hotline-Queue. Sie schreiben — ich antworte. Sie senden CAD — ich kalkuliere. Ich drucke. Ich verpacke. Ich versende. Wenn etwas nicht passt: Sie haben einen einzigen Ansprechpartner.
                  </p>
                  <p className="text-muted-foreground">
                    Klare Grenze: <strong>Mechanische Funktionsbauteile</strong> mache ich aktuell nicht — meine WKO-Gewerbeberechtigung dafür kommt erst mit dem Maschinenbau-Abschluss. Was ich mache: <strong>Modelle, Anschauungsobjekte, Designstudien, Prototypen, Messemodelle, Architekturmodelle</strong>. Wenn Ihre Anfrage in der Grauzone liegt, sag ich's offen statt ein Phantasieangebot zu schicken.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3">
                    <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-muted/50">
                      <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                      {BRAND.reviews.rating} · {BRAND.reviews.count} Google-Bewertungen
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-muted/50">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      Antwort &lt; 2h werktags
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-muted/50">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <a href={`tel:${BRAND.phone}`} className="hover:text-primary">{BRAND.phoneDisplay}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            USE CASES — Modell-Typen für diese Branche
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-background" aria-label="Use-Cases">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Modell-Typen
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Was wir konkret drucken.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Diese {branche.useCases.length} Modell-Typen fragen Kunden aus dieser Branche bei mir am häufigsten an. Realistisch beschrieben — mit Maßstab und Material-Empfehlung, nicht in Marketing-Sprech.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {branche.useCases.map((uc, i) => (
                  <article
                    key={i}
                    className="bg-background border-2 border-border rounded-3xl p-8 md:p-10 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Wrench className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          Use-Case {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-bold text-xl md:text-2xl tracking-tight mt-1">{uc.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                    <div className="space-y-2 pt-4 border-t border-border">
                      {uc.scaleHint && (
                        <div className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>
                            <strong className="font-bold">Größe:</strong> {uc.scaleHint}
                          </span>
                        </div>
                      )}
                      {uc.materialHint && (
                        <div className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>
                            <strong className="font-bold">Material:</strong> {uc.materialHint}
                          </span>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            MATERIAL-EMPFEHLUNG — Branchen-spezifisch
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-muted/30 border-y border-border" aria-label="Material-Empfehlung">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Material-Empfehlung
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Welches Material für {branche.eyebrow.replace('Branche · ', '')}?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Aus unserer Erfahrung mit dieser Branche — die richtige Wahl entscheidet über Lebensdauer und Look.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {branche.materialEmpfehlung.map((m, i) => (
                  <div
                    key={i}
                    className="bg-background border-2 border-border rounded-3xl p-8 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="font-bold text-2xl tracking-tight">{m.name}</h3>
                      <span className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{m.why}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/3d-druck-materialien"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                >
                  Alle Materialien im Vergleich
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            BEISPIEL-MESSEN — Trust + Branchen-Relevanz
           ══════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background" aria-label="Branchen-Messen">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Wo Ihre Modelle landen
                </p>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                  Typische {branche.eyebrow.replace('Branche · ', '')}-Messen, für die wir bereits geliefert haben:
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {branche.beispielMessen.map((m, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30 text-sm font-medium"
                  >
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PROZESS — 4-Schritte (Reassurance)
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-foreground text-background" aria-label="Prozess">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  So läuft's
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  Von der Anfrage zum Modell — in 4 Schritten.
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    step: '01',
                    title: 'CAD oder Skizze',
                    body: 'STL, STEP, IGES — oder einfach Skizze und Bilder. Wir modellieren falls nötig.',
                  },
                  {
                    step: '02',
                    title: 'Festpreis in 6h',
                    body: 'Sie bekommen verbindliches Festpreisangebot inkl. Material, Lieferzeit, Nachbearbeitung.',
                  },
                  {
                    step: '03',
                    title: 'Produktion 24-48h',
                    body: 'Drucken in Gunskirchen/OÖ. Schleifen, Lackieren, QA. Wir senden Fotos vor Versand.',
                  },
                  {
                    step: '04',
                    title: 'DACH-weiter Versand',
                    body: 'Per ÖPOST / DPD / DHL. Direkter Messeversand möglich. AT 24h, DE 2-3 Tage.',
                  },
                ].map((s) => (
                  <div key={s.step} className="border-2 border-background/10 rounded-3xl p-8">
                    <p className="mono text-5xl font-bold text-primary mb-4">{s.step}</p>
                    <h3 className="font-bold text-lg mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-background/70 leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FAQ — Branchen-spezifisch (mit FAQSchema)
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-background" aria-label="FAQ">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-16 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Häufige Fragen
                </p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em]">
                  Fragen aus {branche.eyebrow.replace('Branche · ', '')}-Anfragen.
                </h2>
              </div>

              <div className="space-y-3">
                {branche.faqs.map((f, i) => (
                  <details
                    key={i}
                    className="group border-2 border-border rounded-2xl p-6 hover:border-primary/30 transition-all open:border-primary/30"
                  >
                    <summary className="font-bold text-base md:text-lg cursor-pointer flex items-start gap-3 list-none">
                      <span className="mono text-sm font-bold text-primary shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
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

        {/* ══════════════════════════════════════════════════════
            CROSS-LINKS — verwandte Branchen
           ══════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-24 bg-muted/30 border-y border-border" aria-label="Verwandte Branchen">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Verwandte Branchen
                </p>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                  Auch für andere Industrie-Branchen drucken wir.
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {branche.relatedBranchen.map((slug) => {
                  const related = branchenMap[slug]
                  if (!related) return null
                  return (
                    <Link
                      key={slug}
                      href={`/branchen/${slug}`}
                      className="group block bg-background border-2 border-border rounded-3xl p-6 hover:border-primary/30 transition-all"
                    >
                      <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                        {related.eyebrow}
                      </p>
                      <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                        {related.primaryKeyword}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  )
                })}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/branchen"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                >
                  Alle Branchen im Überblick
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FINAL CTA
           ══════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden" aria-label="CTA">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                Bereit für Ihr nächstes Messe-Modell?
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                {branche.primaryKeyword.split(' ')[0]} 3D-Druck —<br />
                <span className="text-primary">Festpreis in 6 Stunden.</span>
              </h2>
              <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schicken Sie CAD (STEP/STL) oder eine kurze Skizze an <a href={`mailto:${BRAND.email}`} className="text-primary underline-offset-4 hover:underline">{BRAND.email}</a>. Sie bekommen das Festpreisangebot binnen 6h direkt von mir — Kevin, dem Inhaber. Kein Vertriebsfilter, keine Hierarchie dazwischen.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                <Link
                  href="/kostenrechner"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
                >
                  <Calculator className="w-5 h-5" />
                  Preis online berechnen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  Termin vereinbaren
                </Link>
                <a
                  href="https://wa.me/436765517197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-background/10">
                <div className="text-center">
                  <p className="mono text-2xl md:text-3xl font-bold text-primary leading-none">★5,0</p>
                  <p className="mono text-[9px] text-background/60 mt-2 font-bold uppercase tracking-[0.2em]">
                    31 Google-Reviews
                  </p>
                </div>
                <div className="text-center">
                  <p className="mono text-2xl md:text-3xl font-bold text-primary leading-none">6h</p>
                  <p className="mono text-[9px] text-background/60 mt-2 font-bold uppercase tracking-[0.2em]">
                    Angebots-Garantie
                  </p>
                </div>
                <div className="text-center">
                  <p className="mono text-2xl md:text-3xl font-bold text-primary leading-none">24h</p>
                  <p className="mono text-[9px] text-background/60 mt-2 font-bold uppercase tracking-[0.2em]">
                    Express möglich
                  </p>
                </div>
                <div className="text-center">
                  <p className="mono text-2xl md:text-3xl font-bold text-primary leading-none">€30</p>
                  <p className="mono text-[9px] text-background/60 mt-2 font-bold uppercase tracking-[0.2em]">
                    ab Preis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BranchenLanding
