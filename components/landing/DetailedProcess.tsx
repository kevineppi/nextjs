import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Upload, Settings, Printer, Package, Truck } from "lucide-react";

interface ProcessStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

interface DetailedProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    icon: Upload,
    title: "3D-Datei hochladen",
    description: "Laden Sie Ihre STL, OBJ oder 3MF Datei in unseren Online-Konfigurator",
    details: [
      "Export aus CAD-Software (ArchiCAD, Revit, SketchUp, Rhino, Blender)",
      "Automatische Prüfung auf Druckbarkeit",
      "Sofortige Preisberechnung basierend auf Volumen"
    ]
  },
  {
    icon: Settings,
    title: "Konfiguration wählen",
    description: "Wählen Sie Material, Farbe, Qualität und Infill nach Ihren Anforderungen",
    details: [
      "Über 20 Farben und verschiedene Materialien",
      "Qualitätsstufen von 0.1mm bis 0.3mm Schichthöhe",
      "Infill-Dichte für Stabilität vs. Gewicht"
    ]
  },
  {
    icon: Printer,
    title: "Produktion",
    description: "Ihre Objekte werden auf professionellen FDM-Druckern gefertigt",
    details: [
      "Moderne Bambu Lab und Prusa Drucker",
      "Qualitätskontrolle bei jedem Druckvorgang",
      "Optimierte Druckparameter für beste Ergebnisse"
    ]
  },
  {
    icon: Package,
    title: "Nachbearbeitung",
    description: "Sorgfältige Entfernung von Stützstrukturen und Qualitätsprüfung",
    details: [
      "Manuelle Nachbearbeitung inklusive",
      "Optionales Schleifen, Lackieren auf Anfrage",
      "Finale Qualitätskontrolle vor Versand"
    ]
  },
  {
    icon: Truck,
    title: "Versand & Lieferung",
    description: "Sichere Verpackung und schneller Versand in ganz Österreich",
    details: [
      "Standard: 3-5 Werktage",
      "Express: 24-48 Stunden",
      "Tracking-Nummer per E-Mail"
    ]
  }
];

const DetailedProcess = ({ 
  title = "Der Weg zu Ihrem 3D-Druck", 
  subtitle = "Von der Datei zum fertigen Objekt – transparent und nachvollziehbar",
  steps = defaultSteps
}: DetailedProcessProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 bg-primary/10 flex items-center justify-center p-4 md:p-0">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4">
                      <step.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProcess;
