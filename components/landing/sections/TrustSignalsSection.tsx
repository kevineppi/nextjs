import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Award, Users, Clock, ThumbsUp } from "lucide-react";
import type { TrustSignalData } from "@/data/druckSectionData";

const defaultIcons = [Star, Users, Clock, Shield, Award, ThumbsUp];

interface TrustSignalsSectionProps {
  regionName: string;
  data?: TrustSignalData[];
}

const TrustSignalsSection = ({ regionName, data }: TrustSignalsSectionProps) => {
  // If no data, render nothing (no hardcoded fallback)
  if (!data) return null;

  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 text-primary" />
            Vertrauen & Qualität
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Warum Kunden in {regionName} uns vertrauen
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {data.map((signal, index) => {
            const Icon = defaultIcons[index % defaultIcons.length];
            return (
              <AnimatedSection key={index} animation="scale-in" delay={index * 60}>
                <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{signal.value}</div>
                    <div className="font-semibold text-sm mb-1">{signal.label}</div>
                    <div className="text-xs text-muted-foreground">{signal.detail}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
