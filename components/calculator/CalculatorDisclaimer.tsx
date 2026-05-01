import { ShieldCheck, UserCheck, AlertTriangle } from "lucide-react";

const CalculatorDisclaimer = () => (
  <section className="py-12 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="bg-background border border-border rounded-xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <ShieldCheck className="h-5 w-5" />
          Wichtige Hinweise zur Preiskalkulation
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            Die dargestellten Preise sind <strong className="text-foreground">unverbindliche Richtwerte</strong> und dienen ausschließlich als Orientierung.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            Die tatsächliche Kalkulation kann je nach Geometrie, Bauteilorientierung, Toleranzen, Materialverfügbarkeit, Nachbearbeitung und Prüfaufwand abweichen.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            <span>
              <strong className="text-foreground flex items-center gap-1"><UserCheck className="h-3.5 w-3.5 inline" /> Jede Anfrage wird persönlich geprüft.</strong> Ein verbindliches Angebot wird erst nach individueller technischer Begutachtung erstellt.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
            Es erfolgt über diese Seite <strong className="text-foreground">keine direkte Bestellung</strong> und kein Vertragsabschluss.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 flex-shrink-0" />
            <span className="flex items-start gap-1">
              <AlertTriangle className="h-3.5 w-3.5 text-destructive/70 shrink-0 mt-0.5" />
              <span>Wir fertigen ausschließlich <strong className="text-foreground">nicht-technische Modelle</strong> – Präsentationsmodelle, Designstudien, Schaumodelle und Ausstellungsobjekte. Keine mechanischen Bauteile, keine Ersatzteile.</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default CalculatorDisclaimer;
