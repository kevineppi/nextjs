import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { CommonMistakeData } from "@/data/druckSectionData";

interface CommonMistakesSectionProps {
  regionName: string;
  data?: CommonMistakeData[];
}

const CommonMistakesSection = ({ regionName, data }: CommonMistakesSectionProps) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.03),transparent_50%)]" />
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 text-destructive px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              Typische Fehler vermeiden
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Häufige Fehler bei 3D-Druck Projekten
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Und wie wir sie für Kunden in {regionName} vermeiden
            </p>
          </div>

          <div className="space-y-5">
            {data.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
                <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6 bg-destructive/5 border-b md:border-b-0 md:border-r border-border/30">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-sm mb-1.5">Fehler: {item.mistake}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.explanation}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-primary/5">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-sm mb-1.5">Unsere Lösung</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.prevention}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CommonMistakesSection;
