import { FileCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LegalDisclaimerProps {
  variant?: "full" | "compact";
  className?: string;
}

const LegalDisclaimer = ({ variant = "full", className = "" }: LegalDisclaimerProps) => {
  if (variant === "compact") {
    return (
      <div className={`bg-primary/5 border border-primary/20 rounded-lg p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <FileCheck className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Hinweis:</span> Ausschließlich Anschauungsmodelle für 
            Messen, Architektur & Präsentationen. <span className="font-medium text-foreground">Keine Funktionsteile.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Alert className={`border-primary/20 bg-primary/5 ${className}`}>
      <FileCheck className="h-4 w-4 text-primary" />
      <AlertTitle className="text-foreground font-semibold">
        Leistungsumfang
      </AlertTitle>
      <AlertDescription className="text-muted-foreground mt-3 space-y-3">
        <p>
          Gemäß unserer Gewerbeberechtigung fertigen wir <strong className="text-foreground">ausschließlich</strong>:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong className="text-foreground">Messemodelle & Präsentationsobjekte</strong> – Exponate, Showpieces, Standdekorationen</li>
          <li><strong className="text-foreground">Architekturmodelle</strong> – Maßstabsmodelle, Gebäudemodelle, Stadtmodelle</li>
          <li><strong className="text-foreground">Industrielle Anschauungsmodelle</strong> – Produktvisualisierungen, Konzeptdarstellungen</li>
          <li><strong className="text-foreground">Kunst- und Ziergegenstände</strong> – Skulpturen, künstlerische Objekte, Unikate</li>
        </ul>
        <div className="bg-muted/50 rounded-lg p-3 mt-4">
          <p className="font-semibold text-foreground">
            Folgende Produkte können wir nicht fertigen:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-muted-foreground">
            <li>Funktionsteile oder technische Bauteile</li>
            <li>Ersatzteile für Maschinen, Geräte oder Fahrzeuge</li>
            <li>Medizinische Produkte oder Hilfsmittel</li>
            <li>Sicherheitsrelevante Komponenten</li>
          </ul>
        </div>
        <p className="text-sm italic mt-3">
          Bei Fragen zur Machbarkeit Ihres Projekts beraten wir Sie gerne vorab kostenlos.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default LegalDisclaimer;
