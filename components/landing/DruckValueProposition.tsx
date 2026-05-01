import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Cpu, Layers, Cog, Clock, Recycle, DollarSign, Zap, TrendingUp,
  MapPin, Eye, Users, Palette, Shield, Sun, Leaf, Globe, Repeat,
  Wrench, Hotel, GraduationCap, Package, Home, Factory, Grape,
  Film, Truck, Mountain
} from "lucide-react";
import type { ValuePropositionData } from "@/data/druckSectionData";

const iconMap: Record<string, any> = {
  Cpu, Layers, Cog, Clock, Recycle, DollarSign, Zap, TrendingUp,
  MapPin, Eye, Users, Palette, Shield, Sun, Leaf, Globe, Repeat,
  Wrench, Hotel, GraduationCap, Package, Home, Factory, Grape,
  Film, Truck, Mountain,
};

interface DruckValuePropositionProps {
  regionName: string;
  data?: ValuePropositionData;
}

const DruckValueProposition = ({ regionName, data }: DruckValuePropositionProps) => {
  // If no data provided, render nothing (NO fallbacks)
  if (!data) return null;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                FDM 3D-Druck Technologie
              </div>
            </AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {data.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {data.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.advantages.map((item, index) => {
              const Icon = iconMap[item.icon] || Cpu;
              return (
                <AnimatedSection key={index} animation="slide-up" delay={100 + index * 80}>
                  <Card className="group border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="font-bold text-sm">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DruckValueProposition;
