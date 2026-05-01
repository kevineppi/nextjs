import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Tag } from "lucide-react";

interface Messe {
  name: string;
  location: string;
  type: string;
  month?: string;
  visitors?: string;
  description?: string;
}

interface LocalMessenSectionProps {
  messen: Messe[];
  regionName: string;
  type: 'messe' | 'architektur';
}

const LocalMessenSection = ({ messen, regionName, type }: LocalMessenSectionProps) => {
  const title = type === 'messe'
    ? `Wichtige Messen in ${regionName}`
    : `Architektur & Projekte in ${regionName}`;
  const subtitle = type === 'messe'
    ? `Diese Fachmessen in ${regionName} beliefern wir regelmäßig mit professionellen 3D-Druckmodellen`
    : `Für diese Veranstaltungen und Projekte fertigen wir Architekturmodelle für ${regionName}`;

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            Regionale Referenzen
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {messen.map((messe, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 60}>
              <Card className="group border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
                        {messe.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{messe.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {messe.type}
                    </Badge>
                    {messe.month && (
                      <Badge variant="outline" className="text-xs">
                        {messe.month}
                      </Badge>
                    )}
                  </div>
                  
                  {messe.visitors && (
                    <p className="text-xs text-muted-foreground mt-3">
                      ca. {messe.visitors} Besucher
                    </p>
                  )}
                  {messe.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {messe.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalMessenSection;
