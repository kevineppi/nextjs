'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { CheckCircle2, Download, ArrowRight, Calculator, Phone, MessageCircle, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/**
 * /checkliste/danke
 * ──────────────────────────────────────────────────────────────────
 * Nach Form-Submit:
 *  - file=<pdfPath> Param: PDF-Pfad
 *  - magnet=<slug> Param: tracking
 *  - Prüft via HEAD-Request ob PDF existiert bevor Auto-Download
 *  - Fallback: "PDF kommt per Mail"-Variante wenn PDF noch nicht im /public/
 *  - Klare Next-Steps (Cases, Branchen, Kontakt)
 */
function DankeContent() {
  const params = useSearchParams()
  const file = params.get('file')
  const magnet = params.get('magnet')

  // pdfStatus: 'checking' → 'available' → 'pending-email' (PDF noch nicht hochgeladen)
  const [pdfStatus, setPdfStatus] = useState<'checking' | 'available' | 'pending-email'>('checking')

  // Sanfter Check ob PDF tatsächlich verfügbar ist — kein blinder Auto-Download
  useEffect(() => {
    if (!file) {
      setPdfStatus('pending-email')
      return
    }

    let cancelled = false
    fetch(file, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return
        if (res.ok) {
          setPdfStatus('available')
          // Auto-Download nur wenn Datei wirklich da ist
          const timer = setTimeout(() => {
            if (cancelled) return
            const link = document.createElement('a')
            link.href = file
            link.download = ''
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }, 1500)
          return () => clearTimeout(timer)
        } else {
          setPdfStatus('pending-email')
        }
      })
      .catch(() => {
        if (!cancelled) setPdfStatus('pending-email')
      })

    return () => {
      cancelled = true
    }
  }, [file])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
              Danke. Ihre Anfrage<br />ist <span className="text-primary">angekommen.</span>
            </h1>

            {pdfStatus === 'available' && (
              <>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                  Der Download startet automatisch in wenigen Sekunden. Parallel kommt das PDF an Ihre E-Mail-Adresse,
                  damit Sie es jederzeit wiederfinden.
                </p>
                <div className="mb-12">
                  <a
                    href={file!}
                    download
                    className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold text-lg hover:opacity-90 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    PDF jetzt herunterladen
                  </a>
                  <p className="text-xs text-muted-foreground mt-3">
                    Falls der Download nicht startet, klicken Sie hier manuell.
                  </p>
                </div>
              </>
            )}

            {pdfStatus === 'pending-email' && (
              <>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                  Sie bekommen das PDF in Kürze persönlich von Kevin per E-Mail — meist innerhalb von 30 Minuten werktags.
                  So habe ich die Möglichkeit, Ihrer Branche zusätzlich passende Hinweise mitzuschicken.
                </p>
                <div className="mb-12 bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 max-w-xl mx-auto">
                  <div className="flex items-center gap-3 justify-center mb-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <p className="font-bold text-base">Was Sie jetzt machen können</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schauen Sie kurz in Ihr Mail-Postfach. Falls in 30 Min werktags nichts ankommt:
                    Spam-Ordner checken oder direkt an{' '}
                    <a href="mailto:office@ek-druck.at" className="text-primary font-bold underline-offset-2 hover:underline">
                      office@ek-druck.at
                    </a>{' '}
                    schreiben.
                  </p>
                </div>
              </>
            )}

            {pdfStatus === 'checking' && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                Wird vorbereitet …
              </p>
            )}

            {/* Was Sie jetzt machen können */}
            <div className="bg-muted/30 border-2 border-border rounded-3xl p-6 md:p-10 text-left mb-10">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Was als Nächstes
              </p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-6">
                Während Sie die Checkliste durchgehen — hier sind 3 relevante Ressourcen:
              </h2>

              <div className="space-y-3">
                <Link
                  href="/cases"
                  className="group flex items-center justify-between gap-4 p-5 bg-background border-2 border-border rounded-2xl hover:border-primary/40 transition-all"
                >
                  <div>
                    <p className="font-bold text-base mb-1">Echte Cases zum Vergleichen</p>
                    <p className="text-sm text-muted-foreground">
                      5 Projekt-Stories aus der Werkstatt mit Specs, Lead-Time und Lessons
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/preise"
                  className="group flex items-center justify-between gap-4 p-5 bg-background border-2 border-border rounded-2xl hover:border-primary/40 transition-all"
                >
                  <div>
                    <p className="font-bold text-base mb-1">Konkrete Preisbereiche</p>
                    <p className="text-sm text-muted-foreground">
                      Was kosten Modelle in Ihrer Größenordnung — mit Beispielen und Preis-Treibern
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/branchen"
                  className="group flex items-center justify-between gap-4 p-5 bg-background border-2 border-border rounded-2xl hover:border-primary/40 transition-all"
                >
                  <div>
                    <p className="font-bold text-base mb-1">Branchen-Spezial-Seiten</p>
                    <p className="text-sm text-muted-foreground">
                      6 Industriebranchen mit typischen Modell-Anfragen und Material-Empfehlungen
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* CTA: Konkretes Projekt */}
            <div className="bg-foreground text-background rounded-3xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] mb-3">
                Schon ein konkretes Projekt im Kopf?
              </h2>
              <p className="text-base text-background/70 leading-relaxed mb-6 max-w-xl mx-auto">
                Schicken Sie CAD oder kurze Beschreibung — Sie bekommen das Festpreisangebot in 6h direkt von mir.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kostenrechner"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-bold hover:opacity-90 transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  Sofort-Preis berechnen
                </Link>
                <a
                  href="tel:+436765517197"
                  className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-6 py-3 font-bold hover:bg-background/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +43 676 5517197
                </a>
                <a
                  href="https://wa.me/436765517197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-6 py-3 font-bold hover:bg-background/10 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/**
 * Sinnvoller Suspense-Fallback — User sieht sofort "Danke" statt leerer Page,
 * auch bevor useSearchParams() den File-Param liest und HEAD-Request startet.
 */
function DankeFallback() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.04em] mb-6">
              Danke. Ihre Anfrage<br />ist <span className="text-primary">angekommen.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Wird vorbereitet …
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default function DankePage() {
  return (
    <Suspense fallback={<DankeFallback />}>
      <DankeContent />
    </Suspense>
  )
}
