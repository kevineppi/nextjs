import AnimatedSection from "@/components/AnimatedSection";
import { Zap, Clock, Package, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { TimelineStepData } from "@/data/druckSectionData";

const defaultIcons = [Zap, Clock, Package, Truck, Zap, Clock];

interface ExpressTimelineSectionProps {
  regionName: string;
  deliveryTime: string;
  data?: TimelineStepData[];
}

const ExpressTimelineSection = ({ regionName, deliveryTime, data }: ExpressTimelineSectionProps) => {
  // Data-driven mode
  if (data) {
    return (
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="fade-in" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Express-Service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              So schnell geht 3D-Druck für {regionName}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unser Prozess für dringende Projekte in {regionName}
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {data.map((step, index) => {
              const Icon = defaultIcons[index % defaultIcons.length];
              return (
                <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                  <div className="flex gap-6 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                        step.highlight ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card border border-border/50'
                      }`}>
                        <Icon className={`w-6 h-6 ${step.highlight ? '' : 'text-primary'}`} />
                      </div>
                      {index < data.length - 1 && (
                        <div className="w-0.5 h-full min-h-[40px] bg-border/50 mt-2" />
                      )}
                    </div>
                    <div className="pt-2 pb-4">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${step.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                        {step.time}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection animation="fade-in" className="text-center mt-12">
            <Button asChild size="lg" variant="hero">
              <Link href="/kontakt">
                Express jetzt anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  // Legacy mode for architektur/messe
  const steps = [
    { time: '0h', icon: Zap, title: 'Anfrage senden', description: 'CAD-Datei oder Beschreibung per E-Mail oder Kontaktformular senden.', highlight: false },
    { time: '6h', icon: Clock, title: 'Angebot erhalten', description: 'Persönliches Angebot mit Preis, Material und Liefertermin.', highlight: false },
    { time: '12h', icon: Package, title: 'Fertigung startet', description: 'Nach Freigabe starten unsere Drucker sofort mit Ihrem Projekt.', highlight: true },
    { time: '24h', icon: Truck, title: `In ${regionName}`, description: `Express-Versand: Morgen bei Ihnen in ${regionName}. Standard: ${deliveryTime}.`, highlight: true },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-background" />
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Express-Service
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Von der Anfrage zum fertigen Modell – in 24 Stunden
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unser Express-Prozess für dringende Projekte in {regionName}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    step.highlight ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card border border-border/50'
                  }`}>
                    <step.icon className={`w-6 h-6 ${step.highlight ? '' : 'text-primary'}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[40px] bg-border/50 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${step.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.time}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" className="text-center mt-12">
          <Button asChild size="lg" variant="hero">
            <Link href="/kontakt">
              Express jetzt anfragen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExpressTimelineSection;
