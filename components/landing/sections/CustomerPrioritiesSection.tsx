import AnimatedSection from "@/components/AnimatedSection";
import { Heart } from "lucide-react";
import type { CustomerPriorityData } from "@/data/druckSectionData";

interface CustomerPrioritiesSectionProps {
  regionName: string;
  data?: CustomerPriorityData[];
}

const CustomerPrioritiesSection = ({ regionName, data }: CustomerPrioritiesSectionProps) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-muted/10" />
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              Kundenfeedback
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Was Kunden aus {regionName} besonders wichtig ist
            </h2>
          </div>

          <div className="space-y-5">
            {data.map((priority, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
                <div className="flex items-start gap-5 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5">{priority.statement}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{priority.explanation}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomerPrioritiesSection;
