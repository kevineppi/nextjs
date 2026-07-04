'use client'

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, ArrowRight } from "lucide-react";
import { regionalMesseData } from "@/data/regionalMesseData";
import { germanMesseData } from "@/data/germanMesseData";
import { swissMesseData } from "@/data/swissMesseData";
import { regionalArchitekturData } from "@/data/regionalArchitekturData";
import { germanArchitekturData } from "@/data/germanArchitekturData";
import { regionalDruckData } from "@/data/regionalDruckData";

interface AllRegionsLinksProps {
  currentSlug: string;
  type: 'messe' | 'architektur' | 'druck';
}

// 2026-07-04 SEO Task 4: Regional-Seiten konsolidiert.
//  - Messe: ALLE Stadtseiten -> 301 auf /messemodelle, daher hier keine Messe-Regionen mehr.
//  - Architektur: nur diese 6 bleiben als indexierte Standortseiten.
const KEPT_MESSE_REGIONS = new Set<string>([]);
const KEPT_ARCHITEKTUR_REGIONS = new Set<string>([
  'wien', 'linz', 'graz', 'salzburg', 'muenchen', 'stuttgart',
]);

const AllRegionsLinks = ({ currentSlug, type }: AllRegionsLinksProps) => {
  const basePath = type === 'messe' ? '/messemodelle' : type === 'architektur' ? '/architekturmodelle' : '/3d-druck';

  const atData = type === 'messe' ? regionalMesseData : type === 'architektur' ? regionalArchitekturData : regionalDruckData;
  const deData = type === 'messe' ? germanMesseData : type === 'architektur' ? germanArchitekturData : {};
  const chData = type === 'messe' ? swissMesseData : {};

  // Nur behaltene, indexierbare Regionen verlinken (keine 301-Ziele -> keine internen Redirect-Hops).
  const keptFilter = (slug: string) => {
    if (type === 'messe') return KEPT_MESSE_REGIONS.has(slug);
    if (type === 'architektur') return KEPT_ARCHITEKTUR_REGIONS.has(slug);
    return true; // druck: Bundesland-Seiten bleiben vollstaendig erhalten
  };

  const atRegions = Object.values(atData).filter(r => r.slug !== currentSlug && keptFilter(r.slug));
  const deRegions = Object.values(deData).filter(r => r.slug !== currentSlug && keptFilter(r.slug));
  const chRegions = Object.values(chData).filter((r: any) => r.slug !== currentSlug && keptFilter(r.slug));

  const atTop = atRegions;
  const deTop = deRegions;
  const chTop = chRegions;

  // Nichts zu zeigen (z.B. auf /messemodelle nach der Konsolidierung) -> Sektion ausblenden.
  if (atTop.length + deTop.length + chTop.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {type === 'messe' ? 'Messemodelle' : 'Architekturmodelle'} in allen Regionen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Wir liefern in ganz Österreich, Deutschland und die Schweiz. Finden Sie Ihre Region:
          </p>
        </AnimatedSection>

        {/* Austria */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
            🇦🇹 Österreich
          </p>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {atTop.map((region) => (
              <Link
                key={region.slug}
                href={type === 'druck' ? `${basePath}-${region.slug}` : `${basePath}/${region.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary text-sm font-medium transition-all duration-200"
              >
                <MapPin className="w-3 h-3" />
                {region.name}
                <span className="text-xs text-muted-foreground">({region.stats.lieferzeit})</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Germany - only show if deData has entries */}
        {deTop.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
              🇩🇪 Deutschland
            </p>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {deTop.map((region) => (
                <Link
                  key={region.slug}
                  href={type === 'druck' ? `${basePath}-${region.slug}` : `${basePath}/${region.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary text-sm font-medium transition-all duration-200"
                >
                  <MapPin className="w-3 h-3" />
                  {region.name}
                  <span className="text-xs text-muted-foreground">({region.stats.lieferzeit})</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Switzerland - only show for messe type */}
        {chTop.length > 0 && (
          <div className="mt-8">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
              🇨🇭 Schweiz
            </p>
            <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
              {chTop.map((region: any) => (
                <Link
                  key={region.slug}
                  href={`${basePath}/${region.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary text-sm font-medium transition-all duration-200"
                >
                  <MapPin className="w-3 h-3" />
                  {region.name}
                  <span className="text-xs text-muted-foreground">({region.stats.lieferzeit})</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllRegionsLinks;
