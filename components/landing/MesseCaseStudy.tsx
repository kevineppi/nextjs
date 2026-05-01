import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  ArrowRight, 
  Clock, 
  Ruler, 
  Package,
  Quote,
  Star,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export interface CaseStudyData {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  specs: {
    size: string;
    material: string;
    time: string;
  };
  quote?: string;
}

interface MesseCaseStudyProps {
  caseStudy: CaseStudyData;
  regionName: string;
}

const MesseCaseStudy = ({ caseStudy, regionName }: MesseCaseStudyProps) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-muted/20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Erfolgsgeschichte aus der Praxis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              So überzeugen unsere Kunden
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Ein Blick hinter die Kulissen erfolgreicher Messeprojekte in {regionName}
            </p>
          </AnimatedSection>

          {/* Main case study card */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Left column - Main content */}
            <AnimatedSection animation="slide-up" delay={100} className="lg:col-span-7">
              <Card className="border border-border/50 shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
                {/* Industry badge header */}
                <div className="bg-muted/50 px-8 py-4 border-b border-border/50">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                    {caseStudy.title}
                  </h3>
                  
                  {/* Challenge-Solution-Result flow */}
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-muted-foreground/30">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                      </div>
                      <h4 className="font-bold text-muted-foreground mb-2 text-sm uppercase tracking-wider">
                        Die Herausforderung
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/50">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">
                        Unsere Lösung
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">
                        Das Ergebnis
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Right column - Specs & Quote */}
            <div className="lg:col-span-5 space-y-6">
              {/* Specs card */}
              <AnimatedSection animation="slide-up" delay={200}>
                <Card className="border-0 shadow-xl bg-primary text-primary-foreground overflow-hidden">
                  <CardContent className="p-8">
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Projektdetails
                    </h4>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Ruler, label: "Dimension", value: caseStudy.specs.size },
                        { icon: Package, label: "Material", value: caseStudy.specs.material },
                        { icon: Clock, label: "Lieferzeit", value: caseStudy.specs.time }
                      ].map((spec, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
                        >
                          <spec.icon className="w-6 h-6 text-primary-foreground/80" />
                          <div>
                            <div className="text-xs text-primary-foreground/70">{spec.label}</div>
                            <div className="font-bold">{spec.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Quote card */}
              {caseStudy.quote && (
                <AnimatedSection animation="slide-up" delay={300}>
                  <Card className="border border-border/50 shadow-lg bg-card overflow-hidden">
                    <CardContent className="p-8 relative">
                      {/* Large decorative quote mark */}
                      <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                      
                      <p className="text-lg italic leading-relaxed mb-4 relative z-10">
                        "{caseStudy.quote}"
                      </p>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}

              {/* CTA */}
              <AnimatedSection animation="fade-in" delay={400}>
                <Button asChild size="lg" className="w-full shadow-lg">
                  <Link href="/kontakt">
                    Ähnliches Projekt starten
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MesseCaseStudy;
