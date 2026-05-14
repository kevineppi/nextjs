import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import type { ProjectWorkflowData } from "@/data/druckSectionData";

interface ProjectWorkflowSectionProps {
  regionName: string;
  data?: ProjectWorkflowData;
}

const ProjectWorkflowSection = ({ regionName, data }: ProjectWorkflowSectionProps) => {
  if (!data) return null;

  return (
    <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.04),transparent_60%)]" />
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <ClipboardList className="w-4 h-4 text-primary" />
              Projektablauf
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data.headline}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {data.subheadline}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-6">
              {data.steps.map((step, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <div className="flex gap-5 md:gap-7">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md z-10 relative">
                        {index + 1}
                      </div>
                    </div>
                    <Card className="flex-1 border border-border/50 shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-5 md:p-6">
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                        <p className="text-xs text-primary/80 italic">{step.context}</p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectWorkflowSection;
