'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { getKevinAnchor } from '@/data/regionalDruckLocalAnchor'
import { branchenMap } from '@/data/branchenData'

interface DominantBranchenSectionProps {
  regionSlug: string
  regionName: string
}

/**
 * DominantBranchenSection — Cross-Link Bundesland → Branchen-Cluster
 * ───────────────────────────────────────────────────────────────────
 * Bringt die SEO-relevantesten Branchen-Cluster pro Region prominent
 * ins Spiel. Verteilt Bundesland-Link-Juice auf die dominanten Branchen-
 * Pages und gibt Long-Tail-User die Möglichkeit, direkt zur passenden
 * Cluster-Page zu springen.
 *
 * Wenn keine Anchor-Daten oder keine matchenden Branchen → null.
 */
const DominantBranchenSection = ({ regionSlug, regionName }: DominantBranchenSectionProps) => {
  const anchor = getKevinAnchor(regionSlug)

  if (!anchor || !anchor.dominantBranchen.length) return null

  const matchingBranchen = anchor.dominantBranchen
    .map((slug) => branchenMap[slug])
    .filter(Boolean)

  if (!matchingBranchen.length) return null

  return (
    <section className="py-16 md:py-20 bg-background" aria-label={`Dominante Branchen in ${regionName}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-8 max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
              Branchen-Schwerpunkt in {regionName}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.03em] mb-3">
              Industrien, die in {regionName} am häufigsten Modelle bei mir bestellen.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Pro Branche eine eigene Cluster-Page mit typischen Modell-Typen, Pain-Points, Material-Empfehlung und Beispiel-Cases. Direkt zu Ihrer Branche springen:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-3">
            {matchingBranchen.map((branche) => (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group block bg-background border-2 border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                  {branche.eyebrow}
                </p>
                <h3 className="font-bold text-lg leading-snug mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {branche.primaryKeyword}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  Branchen-Page öffnen <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/branchen"
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              Alle 6 Branchen-Cluster im Überblick →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DominantBranchenSection
