'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Truck, Star, Phone, AlertCircle } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { getKevinAnchor } from '@/data/regionalDruckLocalAnchor'
import { BRAND } from '@/data/brandVoice'

interface LocalKevinAnchorSectionProps {
  regionSlug: string
}

/**
 * LocalKevinAnchorSection, Persönlicher Anker pro Bundesland
 * ──────────────────────────────────────────────────────────────
 * Liefert ~300-500 Wörter unique Kevin-Content pro Region.
 * Wenn keine Anchor-Daten für die Region existieren → null (fail-safe).
 *
 * Sections:
 * 1. Why-this-region (Kevin-Statement)
 * 2. Personal-Story (3-4 Absätze in Ich-Perspektive)
 * 3. Real-Cases (anonymisierte Beispiele)
 * 4. Delivery-Reality (ehrlich, mit Persönlich-Lieferung-Status)
 */
const LocalKevinAnchorSection = ({ regionSlug }: LocalKevinAnchorSectionProps) => {
  const anchor = getKevinAnchor(regionSlug)

  if (!anchor) return null

  return (
    <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Lokale Verankerung">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Title + Statement */}
          <AnimatedSection animation="fade-in" className="mb-12">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-4">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Lokal verankert
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
                  {anchor.anchorTitle}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-2 font-medium">
                  {anchor.whyThisRegion}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                 , Kevin Eppensteiner, Inhaber ekdruck e.U.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Personal-Story */}
          <AnimatedSection animation="slide-up" delay={100} className="mb-12">
            <div className="bg-muted/30 border-2 border-border rounded-3xl p-8 md:p-12 space-y-5">
              {anchor.personalStory.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80 first:text-foreground first:font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Real Case Snapshots */}
          {anchor.realCaseSnapshot.length > 0 && (
            <AnimatedSection animation="slide-up" delay={200} className="mb-12">
              <div className="mb-6">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">
                  Beispiele (anonymisiert)
                </p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em]">
                  Reale Aufträge aus dieser Region.
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {anchor.realCaseSnapshot.map((c, i) => (
                  <div key={i} className="bg-background border-2 border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <p className="mono text-xs font-bold uppercase tracking-wider text-primary mb-3">
                      Case {String(i + 1).padStart(2, '0')}
                    </p>
                    <h4 className="font-bold text-base leading-snug mb-3 tracking-tight">
                      {c.customerType}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">Projekt</p>
                        <p className="text-foreground/80 leading-relaxed">{c.project}</p>
                      </div>
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Ergebnis</p>
                        <p className="text-foreground/80 leading-relaxed">{c.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Delivery-Reality (ehrlich) */}
          <AnimatedSection animation="slide-up" delay={300}>
            <div className="bg-foreground text-background rounded-3xl p-8 md:p-10">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Liefer-Realität, ehrlich
              </p>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <p className="font-bold text-sm uppercase tracking-wider">Standard</p>
                  </div>
                  <p className="text-background/80 leading-relaxed text-sm">{anchor.deliveryReality.standardDays}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <p className="font-bold text-sm uppercase tracking-wider">Express</p>
                  </div>
                  <p className="text-background/80 leading-relaxed text-sm">{anchor.deliveryReality.expressOption}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {anchor.deliveryReality.personalDelivery ? (
                      <MapPin className="w-5 h-5 text-primary" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-primary" />
                    )}
                    <p className="font-bold text-sm uppercase tracking-wider">
                      {anchor.deliveryReality.personalDelivery ? 'Persönlich' : 'Nur Versand'}
                    </p>
                  </div>
                  <p className="text-background/80 leading-relaxed text-sm">
                    {anchor.deliveryReality.personalDeliveryNote || (anchor.deliveryReality.personalDelivery ? 'Persönliche Anlieferung möglich' : 'Persönliche Anlieferung in dieser Region nicht standardmäßig')}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-background/10 flex flex-wrap items-center gap-4">
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 font-bold text-sm hover:opacity-90 transition-all">
                  <Phone className="w-4 h-4" />
                  Direkt anrufen: {BRAND.phoneDisplay}
                </a>
                <Link href="/kontakt" className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-5 py-2.5 font-bold text-sm hover:bg-background/10 transition-all">
                  CAD-Anfrage
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}

export default LocalKevinAnchorSection
