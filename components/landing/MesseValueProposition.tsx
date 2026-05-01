import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  TrendingUp, 
  Weight, 
  Sparkles, 
  Clock,
  RefreshCcw,
  Banknote,
  Zap
} from "lucide-react";

interface MesseValuePropositionProps {
  regionName: string;
}

const MesseValueProposition = ({ regionName }: MesseValuePropositionProps) => {
  const comparisons = [
    {
      metric: "Gewicht",
      traditional: "10-50 kg",
      printed: "2-10 kg",
      advantage: "80% leichter",
      icon: Weight
    },
    {
      metric: "Lieferzeit",
      traditional: "4-8 Wochen",
      printed: "3-7 Tage",
      advantage: "Express 24h",
      icon: Clock
    },
    {
      metric: "Komplexität",
      traditional: "Eingeschränkt",
      printed: "Unbegrenzt",
      advantage: "Filigrane Details",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <AnimatedSection animation="scale-in" delay={100}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                Revolutionäre Technologie
              </div>
            </AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Warum 3D-Druck?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Der entscheidende Vorteil für Aussteller in {regionName}
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {comparisons.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={index} animation="slide-up" delay={150 + index * 100}>
                  <Card className="group relative overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Subtle accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 to-accent/60" />
                    
                    <CardContent className="p-8 relative">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-6">{item.metric}</h3>
                      
                      <div className="space-y-4">
                        {/* Traditional */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-muted/50 border border-border/30">
                          <span className="text-sm text-muted-foreground">Traditionell</span>
                          <span className="font-medium text-muted-foreground/70 line-through">{item.traditional}</span>
                        </div>
                        
                        {/* 3D Print */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/20">
                          <span className="text-sm font-medium text-primary">3D-Druck</span>
                          <span className="font-bold text-primary text-lg">{item.printed}</span>
                        </div>
                        
                        {/* Advantage badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          {item.advantage}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom stats bar */}
          <AnimatedSection animation="fade-in" delay={500}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Änderungen", value: "Blitzschnell", icon: RefreshCcw },
                { label: "Transport", value: "Kostengünstig", icon: Banknote },
                { label: "Skalierung", value: "Jede Größe", icon: TrendingUp },
                { label: "Details", value: "Mikro-Präzision", icon: Sparkles }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
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

export default MesseValueProposition;
