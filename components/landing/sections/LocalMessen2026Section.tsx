'use client'

import { Building2, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { getKevinAnchor } from '@/data/regionalDruckLocalAnchor'

interface LocalMessen2026SectionProps {
  regionSlug: string
  regionName: string
}

/**
 * LocalMessen2026Section, Aktuelle Messen pro Region (2026/2027)
 * ──────────────────────────────────────────────────────────────
 * SEO-Wert: Long-Tail-Keywords mit aktuellen Messe-Namen pro Region.
 * Conversion-Wert: triggert "Ich brauche ein Modell für genau diese Messe"-Pain.
 *
 * Wenn keine Anchor-Daten existieren → null.
 */
const LocalMessen2026Section = ({ regionSlug, regionName }: LocalMessen2026SectionProps) => {
  const anchor = getKevinAnchor(regionSlug)

  if (!anchor || !anchor.upcomingMessen2026.length) return null

  return (
    <section className="py-20 md:py-24 bg-muted/30 border-y border-border" aria-label={`Messen ${regionName}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-10 max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Aktuelle Messen
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
              Messen in {regionName}, wo Ihr Modell brillieren kann.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Diese Messen sind in den nächsten 6-18 Monaten relevant. Wenn Sie aussteller sind: rechnen Sie 6-8 Wochen Vorlauf für ein hochwertiges Messemodell ein. Bei Express auch 2-3 Wochen machbar.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {anchor.upcomingMessen2026.map((m, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 60}>
                <div className="h-full bg-background border-2 border-border rounded-2xl p-6 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                      Messe {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-2 tracking-tight">
                    {m.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{m.date}</span>
                    <span>·</span>
                    <span>{m.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-3 border-t border-border">
                    Relevant für: {m.relevance}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocalMessen2026Section
