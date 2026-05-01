import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Handshake, 
  UserCheck, 
  Settings, 
  MessageCircle,
  ArrowRight,
  Shield
} from "lucide-react";

interface PersonalDeliveryInfoProps {
  regionName: string;
}

const PersonalDeliveryInfo = ({ regionName }: PersonalDeliveryInfoProps) => {
  const services = [
    {
      icon: Handshake,
      title: "Persönliche Übergabe",
      description: "Wir bringen Ihr Messemodell nach Terminvereinbarung direkt zu Ihnen – für einen reibungslosen Start in die Messewoche."
    },
    {
      icon: Settings,
      title: "Aufbau-Einweisung",
      description: "Bei mehrteiligen oder komplexen Modellen erklären wir den fachgerechten Zusammenbau, Verbindungstechniken und optimale Positionierung."
    },
    {
      icon: Shield,
      title: "Haltevorrichtungen & Montage",
      description: "Wir zeigen Ihnen die integrierten Befestigungspunkte, Magnethalterungen oder Stecksysteme für sicheren Stand während der gesamten Messe."
    },
    {
      icon: MessageCircle,
      title: "Pflegehinweise vor Ort",
      description: "Tipps zur Reinigung, zum Transport zwischen Messehallen und zur Aufbewahrung – damit Ihr Modell auch nach mehreren Einsätzen perfekt aussieht."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <AnimatedSection animation="fade-in" className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <UserCheck className="w-4 h-4" />
              Persönlicher Service
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wir kommen auch persönlich vorbei
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Auf Wunsch liefern wir Ihre Messemodelle persönlich nach {regionName} – 
              und nehmen uns Zeit für eine ausführliche Einweisung vor Ort.
            </p>
          </div>

          {/* Main Card */}
          <Card className="border border-border/50 shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              {/* Intro section */}
              <div className="p-8 md:p-10 border-b border-border/50 bg-muted/30">
                <p className="text-lg leading-relaxed text-foreground/90">
                  <strong className="text-primary">Mehr als nur Lieferung:</strong> Bei komplexen Messemodellen, 
                  großformatigen Objekten oder erstmaligen Kunden bieten wir nach Absprache eine 
                  <strong> persönliche Übergabe mit fachkundiger Einweisung</strong> an. So stellen wir sicher, 
                  dass Ihr Modell perfekt präsentiert wird.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className={`p-6 md:p-8 ${index >= 2 ? 'border-t border-border/50' : ''} hover:bg-muted/20 transition-colors`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Footer */}
              <div className="p-8 md:p-10 bg-muted/30 border-t border-border/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="font-semibold text-lg mb-1">Interesse an persönlicher Lieferung?</p>
                    <p className="text-muted-foreground text-sm">
                      Kontaktieren Sie uns für eine individuelle Terminvereinbarung.
                    </p>
                  </div>
                  <Button asChild className="shrink-0 shadow-md">
                    <Link href="/kontakt">
                      Termin anfragen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Persönliche Lieferung nach {regionName} nach Verfügbarkeit und Terminabsprache. 
            Für Regionen außerhalb von Oberösterreich können Fahrtkosten anfallen.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PersonalDeliveryInfo;
