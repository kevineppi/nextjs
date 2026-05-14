import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";

interface IndustryShowcaseSectionProps {
  regionName: string;
  industries: { name: string; sector?: string; application?: string; location?: string; type?: string }[];
  category: 'architektur' | 'messe' | 'druck';
}

const IndustryShowcaseSection = ({ regionName, industries, category }: IndustryShowcaseSectionProps) => {
  const title = category === 'architektur'
    ? `Architektur-Kontexte in ${regionName}`
    : category === 'messe'
    ? `Branchen & Messen in ${regionName}`
    : `3D-Druck Anwendungen in ${regionName}`;

  const subtitle = category === 'architektur'
    ? `Typische Architekturprojekte und -kontexte in ${regionName}`
    : category === 'messe'
    ? `So nutzen Aussteller in ${regionName} unsere Messemodelle`
    : `So setzen Unternehmen in ${regionName} 3D-Druck ein`;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            Regionale Anwendungen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {industries.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
              <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base">{item.name}</h3>
                      <span className="text-xs text-primary font-medium">
                        {item.sector || item.location || item.type || ''}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.application || item.type || ''}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcaseSection;
