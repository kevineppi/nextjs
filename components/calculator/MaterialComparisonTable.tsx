import { pricingConfig } from "@/data/pricingConfig";
import { Badge } from "@/components/ui/badge";

interface MaterialInfo {
  key: string;
  label: string;
  use: string;
  pros: string;
  temp: string;
  highlight?: boolean;
}

const materials: MaterialInfo[] = [
  { key: "PLA", label: "PLA", use: "Präsentationsmodelle, Designstudien, Architekturmodelle", pros: "Günstig, gute Oberfläche, leicht zu drucken", temp: "bis 60°C", highlight: true },
  { key: "PLA+", label: "PLA+", use: "Robustere Schaumodelle, Transportmodelle", pros: "Höhere Schlagfestigkeit als PLA", temp: "bis 65°C" },
  { key: "PETG", label: "PETG", use: "Messemodelle, Outdoor-Exponate", pros: "UV-beständig, chemisch resistent", temp: "bis 80°C" },
  { key: "ABS", label: "ABS", use: "Ausstellungsobjekte mit Oberflächenveredelung", pros: "Glätt- und lackierbar, stabil", temp: "bis 100°C" },
  { key: "ASA", label: "ASA", use: "Modelle für den Außenbereich", pros: "UV- und witterungsbeständig", temp: "bis 100°C" },
  { key: "TPU", label: "TPU (flexibel)", use: "Flexible Designmodelle, haptische Muster", pros: "Gummiartig, biegsam, stoßfest", temp: "bis 80°C" },
  { key: "PA6-CF", label: "PA6-CF (Carbon)", use: "Premium-Modelle mit Leichtbau-Optik", pros: "Extrem leicht und steif, Carbon-Look", temp: "bis 150°C" },
  { key: "PC", label: "Polycarbonat", use: "Transparente Modelle, Durchsicht-Studien", pros: "Transparent, hitzebeständig", temp: "bis 130°C" },
];

const MaterialComparisonTable = () => (
  <section className="py-16 md:py-24 bg-muted/15">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Materialvergleich – das richtige Material für Ihr Modell
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          8 verschiedene FDM-Materialien für unterschiedliche Anforderungen – von der
          kostengünstigen Designstudie bis zum Premium-Showmodell mit Carbon-Optik.
          Welches Material optimal passt, besprechen wir gerne persönlich.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left py-3.5 px-4 font-semibold text-foreground">Material</th>
              <th className="text-left py-3.5 px-4 font-semibold text-foreground hidden md:table-cell">Einsatzgebiet</th>
              <th className="text-left py-3.5 px-4 font-semibold text-foreground">Vorteile</th>
              <th className="text-right py-3.5 px-4 font-semibold text-foreground">Preis/kg</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m, i) => (
              <tr
                key={m.key}
                className={`border-b border-border/30 hover:bg-muted/30 transition-colors
                  ${m.highlight ? "bg-primary/[0.03]" : ""}
                  ${i === materials.length - 1 ? "border-b-0" : ""}`}
              >
                <td className="py-3.5 px-4">
                  <span className="font-semibold text-foreground">{m.label}</span>
                  {m.highlight && <Badge className="ml-2 text-[10px]" variant="secondary">Beliebt</Badge>}
                  <p className="text-xs text-muted-foreground mt-0.5 md:hidden">{m.use}</p>
                </td>
                <td className="py-3.5 px-4 text-muted-foreground hidden md:table-cell">{m.use}</td>
                <td className="py-3.5 px-4 text-muted-foreground">{m.pros}</td>
                <td className="py-3.5 px-4 text-right font-semibold text-foreground whitespace-nowrap">
                  €{pricingConfig.pricePerKg[m.key]}/kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-6">
        Alle Materialpreise sind Richtwerte. Die Materialempfehlung besprechen wir nach persönlicher Prüfung Ihres Modells.
      </p>
    </div>
  </section>
);

export default MaterialComparisonTable;
