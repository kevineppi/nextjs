import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Clock, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import LeadMagnetForm from '@/components/LeadMagnetForm'
import { checklisteMessemodell } from '@/data/leadMagnets'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'

const TITLE = 'Messemodell-Checkliste (PDF) — 10 Punkte vor jedem Auftrag | ekdruck'
const DESCRIPTION =
  'Kostenloses PDF: 10-Punkte-Checkliste für Marketing- und Vertriebsverantwortliche, die ein 3D-gedrucktes Messemodell planen. Maßstab, Material, Lead-Time, CAD-Übergabe.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/checkliste'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/checkliste',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
        width: 1200,
        height: 630,
        alt: 'Messemodell-Checkliste PDF Download',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: checklisteMessemodell.title,
  description: checklisteMessemodell.subtitle,
  brand: { '@type': 'Brand', name: 'ekdruck' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

export default function ChecklistePage() {
  const m = checklisteMessemodell

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={[{ name: 'Checkliste', url: '/checkliste' }]} />

        {/* HERO + FORM */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">

              {/* Linke Spalte: Story */}
              <div className="lg:col-span-7">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                  Kostenloses PDF · {m.pdfPages} Seiten
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
                  {m.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {m.subtitle}
                </p>

                {/* Für wen */}
                <div className="bg-muted/30 border-l-4 border-primary p-5 rounded-r-2xl mb-8">
                  <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Für wen</p>
                  <p className="text-base leading-relaxed text-foreground/80">
                    {m.targetAudience}
                  </p>
                </div>

                {/* Was drinsteht */}
                <h2 className="font-bold text-xl mb-4 tracking-tight">Was Sie konkret im PDF finden:</h2>
                <ul className="space-y-3 mb-8">
                  {m.contents.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-base leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>

                {/* Preview-Auszug */}
                <div className="border-2 border-border rounded-2xl overflow-hidden mb-8">
                  <div className="bg-muted/30 px-6 py-3 border-b border-border">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      Auszug aus dem PDF
                    </p>
                  </div>
                  <div className="p-6 space-y-5">
                    {m.preview.map((p, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-base mb-2 flex items-start gap-2">
                          <span className="mono text-xs font-bold text-primary mt-1">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          {p.point}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed ml-7">
                          {p.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why-Kevin-Schreibt-Das */}
                <div className="bg-foreground text-background rounded-2xl p-6 md:p-8">
                  <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                    Warum ich diese Checkliste schreibe
                  </p>
                  <p className="text-base leading-relaxed text-background/90 mb-3">
                    Ich bekomme jede Woche Anfragen wie *"wir brauchen ein Messemodell von einer Maschine".*
                    Was meist fehlt: Maßstab, Material-Vorstellung, Lead-Time-Realismus, CAD-Status. Dann
                    geht Iteration los, die unnötig Zeit und Geld kostet.
                  </p>
                  <p className="text-base leading-relaxed text-background/90">
                    Diese Checkliste ist die Pre-Flight-Liste, die ich mir wünsche, dass Sie vor der Anfrage
                    durchgehen. Spart Ihnen Wochen und mir Rückfragen. Win-Win.
                  </p>
                  <p className="mt-4 mono text-xs uppercase tracking-wider text-primary font-bold">
                    — Kevin Eppensteiner, ekdruck e.U.
                  </p>
                </div>
              </div>

              {/* Rechte Spalte: Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      PDF-Download · sofort
                    </p>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <strong>{m.pdfSize}</strong> · {m.pdfPages} Seiten · sofort verfügbar nach Eintragung.
                    Sie bekommen den Download-Link auf der Folge-Seite und parallel per E-Mail.
                  </p>
                </div>

                <LeadMagnetForm
                  magnetSlug={m.slug}
                  magnetTitle={m.title}
                  pdfDownloadPath={m.pdfFile}
                />

                {/* Trust-Signale unter Form */}
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground justify-center">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Kein Spam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Sofort verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border" aria-label="Häufige Fragen zur Checkliste">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.03em] mb-8">
                Häufige Fragen zur Checkliste.
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'Was kostet das PDF?',
                    a: 'Nichts. Komplett kostenlos. Sie hinterlassen nur Ihre E-Mail-Adresse, damit ich Ihnen den Download-Link sicher zustelle.',
                  },
                  {
                    q: 'Bekomme ich danach Werbe-Spam?',
                    a: 'Nein. Genau 3 Folge-Mails an Tag 3 und 7 mit Zusatz-Tipps zu Ihrem Projekt. Danach Stille. Sie können jederzeit mit 1 Klick im Mail-Footer abbestellen.',
                  },
                  {
                    q: 'Wer hat die Checkliste geschrieben?',
                    a: 'Kevin Eppensteiner, Inhaber von ekdruck e.U. — die Liste basiert auf den Fragen, die ich seit Gründung 2024 immer wieder von Kunden bekomme. Keine generische Vorlage aus dem Internet.',
                  },
                  {
                    q: 'Für welche Branchen ist die Checkliste relevant?',
                    a: 'Alle Industriegüter-Hersteller: Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau, Elektrotechnik. Architekturbüros profitieren auch — viele Punkte gelten gleichermaßen für Architekturmodelle.',
                  },
                  {
                    q: 'Wie aktuell ist die Checkliste?',
                    a: 'Stand 2026. Die enthaltenen Material-Empfehlungen, Preisbereiche und Lead-Time-Realitäten reflektieren die aktuelle Werkstatt-Praxis bei ekdruck.',
                  },
                ].map((f, i) => (
                  <details key={i} className="group border-2 border-border bg-background rounded-2xl p-5 hover:border-primary/30 transition-all open:border-primary/30">
                    <summary className="font-bold text-base cursor-pointer flex items-start gap-3 list-none">
                      <span className="mono text-sm font-bold text-primary shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1 leading-snug">{f.q}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 ml-8 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
