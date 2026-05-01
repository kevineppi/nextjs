import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, ArrowRight } from "lucide-react";
import type { TypicalProjectData } from "@/data/druckSectionData";

interface TypicalProjectsSectionProps {
  regionName: string;
  data?: TypicalProjectData[];
}

const TypicalProjectsSection = ({ regionName, data }: TypicalProjectsSectionProps) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Lightbulb className="w-4 h-4" />
              Projekte aus {regionName}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Typische Projekte in {regionName}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              So setzen Kunden in {regionName} unseren 3D-Druck Service ein
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.map((project, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 120}>
                <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-foreground">Warum 3D-Druck?</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.whyPrint}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Anforderungen</p>
                      <ul className="space-y-1.5">
                        {project.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
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

export default TypicalProjectsSection;
