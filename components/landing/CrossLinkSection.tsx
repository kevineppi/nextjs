'use client'

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Presentation, ArrowRight, Printer } from "lucide-react";

interface CrossLinkSectionProps {
  regionName: string;
  regionSlug: string;
  currentType: 'druck' | 'messe' | 'architektur';
}

const CrossLinkSection = ({ regionName, regionSlug, currentType }: CrossLinkSectionProps) => {
  const links = [
    {
      type: 'druck' as const,
      icon: Printer,
      title: `3D-Druck ${regionName}`,
      description: "Designstudien, Präsentationsmodelle und Einzelstücke für alle Branchen – von der Konzeptstudie bis zur Projektmenge.",
      href: `/3d-druck-${regionSlug}`,
      keywords: "Designstudien · Modelle · Einzelstücke"
    },
    {
      type: 'messe' as const,
      icon: Presentation,
      title: `Messemodelle ${regionName}`,
      description: "Beeindruckende 3D-Modelle für Ihren Messestand – leicht, robust und maßgefertigt für Events.",
      href: `/messemodelle/${regionSlug}`,
      keywords: "Messestand · Events · Exponate"
    },
    {
      type: 'architektur' as const,
      icon: Building2,
      title: `Architekturmodelle ${regionName}`,
      description: "Maßstabsgetreue Modelle für Wettbewerbe, Bauherren-Präsentationen und Behördengespräche.",
      href: `/architekturmodelle/${regionSlug}`,
      keywords: "Wettbewerbe · Maßstäbe · Bauherren"
    }
  ].filter(link => link.type !== currentType);

  return (
    <section className="py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Weitere Services in {regionName}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Neben {currentType === 'druck' ? 'allgemeinem 3D-Druck' : currentType === 'messe' ? 'Messemodellen' : 'Architekturmodellen'} bieten wir in {regionName} auch:
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
              <Link href={link.href} onClick={() => window.scrollTo(0, 0)} className="block group">
                <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                        <link.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{link.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{link.keywords}</span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossLinkSection;
