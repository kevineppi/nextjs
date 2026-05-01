import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  PenTool, 
  FileCheck, 
  Truck, 
  CheckCircle2, 
  Clock,
  Lightbulb,
  ArrowRight
} from "lucide-react";

interface ArchitekturChecklistProps {
  regionName: string;
  deliveryTime: string;
}

const ArchitekturChecklist = ({ regionName, deliveryTime }: ArchitekturChecklistProps) => {
  const checklistItems = [
    {
      week: "Schritt 1",
      title: "CAD-Export",
      icon: PenTool,
      tasks: [
        "3D-Modell in ArchiCAD/Revit/SketchUp erstellen",
        "STL/OBJ/3MF exportieren",
        "Maßstab und Details definieren"
      ],
      tip: "Tipp: Maßstab 1:100 ist der beliebteste für Präsentationen"
    },
    {
      week: "Schritt 2",
      title: "Konfiguration",
      icon: FileCheck,
      tasks: [
        "Material & Farbe wählen",
        "Qualitätsstufe festlegen",
        "Preis sofort berechnet"
      ],
      tip: "PLA Weiß ist ideal für Studienmodelle"
    },
    {
      week: "Schritt 3",
      title: "Fertigung",
      icon: Clock,
      tasks: [
        "3-5 Werktage Standard",
        "Express 24h möglich",
        "Qualitätskontrolle inklusive"
      ],
      tip: "Express für Wettbewerbstermine verfügbar"
    },
    {
      week: "Schritt 4",
      title: "Lieferung",
      icon: Truck,
      tasks: [
        `Sichere Verpackung für ${regionName}`,
        `Lieferzeit: ${deliveryTime}`,
        "Tracking-Nummer inklusive"
      ],
      tip: `Versandkostenfrei ab €100`
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card border border-border shadow-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4 text-primary" />
              So einfach geht's
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vom CAD zum fertigen Modell
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              In 4 einfachen Schritten zu Ihrem Architekturmodell
            </p>
          </AnimatedSection>

          {/* Desktop: Horizontal */}
          <div className="hidden lg:block">
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full -translate-y-1/2" />
              <div className="flex justify-between relative">
                {checklistItems.map((item, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="scale-in" 
                    delay={index * 100}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg z-10">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
              {checklistItems.map((item, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={200 + index * 100}>
                  <Card className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full bg-card">
                    <CardContent className="p-6">
                      <div className="inline-flex px-3 py-1 rounded-full text-xs font-bold mb-4 bg-primary/10 text-primary">
                        {item.week}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <ul className="space-y-2 mb-4">
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm">
                            <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-1" />
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-xs">
                        <Lightbulb className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item.tip}</span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-6">
            {checklistItems.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <Card className="border border-border/50 shadow-sm overflow-hidden">
                  <div className="bg-primary p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-primary-foreground">
                      <div className="text-xs font-medium opacity-80">{item.week}</div>
                      <div className="text-lg font-bold">{item.title}</div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <ul className="space-y-2 mb-4">
                      {item.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-sm">
                      <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item.tip}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitekturChecklist;
