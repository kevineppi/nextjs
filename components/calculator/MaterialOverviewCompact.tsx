import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

const topMaterials = [
  { name: "PLA", desc: "Günstig, glatte Oberfläche", use: "Präsentationsmodelle" },
  { name: "PETG", desc: "UV-beständig, robust", use: "Messemodelle" },
  { name: "ABS", desc: "Glätt- & lackierbar", use: "Ausstellungsobjekte" },
  { name: "PA6-CF", desc: "Carbon-Look, ultraleicht", use: "Premium-Modelle" },
];

const MaterialOverviewCompact = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">8 FDM-Materialien verfügbar</h2>
            <p className="text-sm text-muted-foreground">Von der Designstudie bis zum Premium-Showmodell</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {topMaterials.map((m) => (
            <div
              key={m.name}
              className="border border-border/60 rounded-xl p-4 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <p className="text-sm font-bold text-foreground mb-1">{m.name}</p>
              <p className="text-xs text-muted-foreground leading-snug mb-1.5">{m.desc}</p>
              <p className="text-[11px] text-primary font-medium">{m.use}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between bg-muted/30 border border-border/60 rounded-xl px-5 py-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">+ 4 weitere Materialien:</span>{" "}
            PLA+, ASA, TPU (flexibel), Polycarbonat
          </p>
          <Link href="/3d-druck-materialien"
            className="shrink-0 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all"
          >
            Alle Materialien <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default MaterialOverviewCompact;
