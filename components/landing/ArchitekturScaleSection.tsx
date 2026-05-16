import AnimatedSection from "@/components/AnimatedSection";
import MagneticCard from "@/components/MagneticCard";
import { Ruler, Building2, Home, MapPin, Trees } from "lucide-react";

const scales = [
  {
    scale: "1:50",
    icon: Home,
    titel: "Detail- und Raummodelle",
    description: "Einzelne Räume, Innenausbau, Materialstudien. Detailtiefe bis zu Türgriffen, Fenstersprossen, Möblierung möglich. Ideal für Bauherrengespräche zu Wohnungsgrundrissen.",
    typicalSize: "Ein Geschoss eines Einfamilienhauses füllt 60×40 cm",
    price: "ab €450",
    bestFor: "Innenraum-Studien · Materialbemusterung · Wohnungs-Grundriss-Modelle",
    deliveryTime: "5–7 Werktage",
  },
  {
    scale: "1:100",
    icon: Building2,
    titel: "Standard Bauherrenmodell",
    description: "Der gängigste Maßstab für Einfamilienhäuser und kleine Mehrfamilienhäuser. Fassadendetails klar erkennbar, Dachform, Fensteranordnung, Gebäudeproportionen.",
    typicalSize: "Einfamilienhaus 12×10 m wird zu 12×10 cm",
    price: "ab €280",
    bestFor: "Bauherrengespräche · Genehmigungsplanung · Architekturpräsentation",
    deliveryTime: "3–5 Werktage",
    popular: true,
  },
  {
    scale: "1:200",
    icon: Building2,
    titel: "Mehrfamilien- & Gewerbebau",
    description: "Größere Wohnhausanlagen, Bürogebäude, Schulen. Mehrere Gebäude zusammen darstellbar, Fassadenstruktur erkennbar, aber keine Detailornamentik mehr.",
    typicalSize: "Wohnhausanlage 60×40 m wird zu 30×20 cm",
    price: "ab €420",
    bestFor: "Wohnbauprojekte · Bürogebäude · Bauträger-Vermarktung",
    deliveryTime: "5–7 Werktage",
  },
  {
    scale: "1:500",
    icon: MapPin,
    titel: "Städtebauliche Modelle",
    description: "Quartiersmodelle, größere Wohnsiedlungen, Bebauungspläne. Gebäudekuben mit groben Proportionen, Straßennetz, Topografie und Grünflächen.",
    typicalSize: "Quartier 250×200 m wird zu 50×40 cm",
    price: "ab €780",
    bestFor: "Quartiersentwicklung · Wettbewerbsabgaben · Stadtteil-Planung",
    deliveryTime: "7–10 Werktage",
  },
  {
    scale: "1:1000",
    icon: Trees,
    titel: "Stadtteil- und Stadtmodelle",
    description: "Stadtteile bis ganze Innenstädte. Einzelgebäude als Kuben, Straßenraster, Plätze, Topografie. Auch für Verkehrsplanung und Stadtentwicklungs-Visualisierungen.",
    typicalSize: "Stadtteil 1×1 km wird zu 100×100 cm",
    price: "ab €1.890",
    bestFor: "Stadtentwicklung · Verkehrsplanung · Großwettbewerbe",
    deliveryTime: "10–14 Werktage",
  },
];

const ArchitekturScaleSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection animation="fade-in" className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Welcher Maßstab passt zum Projekt?</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95]">
                Maßstab macht<br/><span className="text-gradient">den Unterschied.</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Vom Innenraum-Detailmodell bis zum Stadtmodell – jeder Maßstab transportiert andere Information. Wir beraten Sie zum richtigen Maßstab für Ihr Anwendungsziel und kombinieren auf Wunsch mehrere Maßstäbe in einem Projekt.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero: 1:100 als Standard prominent darstellen */}
        <AnimatedSection animation="slide-up" className="mb-4">
          <MagneticCard className="rounded-3xl border-2 border-primary shadow-2xl shadow-primary/10 bg-card overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 p-10 md:p-14 bg-primary/[0.03] flex flex-col justify-center border-r border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-6 h-6 text-primary" />
                  <span className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Häufigster Maßstab</span>
                </div>
                <p className="mono text-7xl md:text-8xl font-bold text-foreground tracking-[-0.04em] leading-none mb-4">1:100</p>
                <p className="text-2xl font-bold tracking-tight mb-3">{scales[1].titel}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{scales[1].description}</p>
                <p className="mono text-3xl font-bold text-primary tracking-tight">{scales[1].price}</p>
                <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Lieferzeit {scales[1].deliveryTime}</p>
              </div>
              <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-center">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Typische Anwendungen</p>
                <p className="text-xl font-semibold leading-relaxed mb-8 text-foreground/90">{scales[1].bestFor}</p>

                <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Größen-Beispiel</p>
                <div className="rounded-xl bg-muted/40 p-6 mb-6">
                  <p className="text-base text-foreground/80 leading-relaxed">{scales[1].typicalSize}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70">Fassadendetails</span>
                  <span className="mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70">Dachform</span>
                  <span className="mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70">Fenster­anordnung</span>
                  <span className="mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-foreground/5 text-foreground/70">Proportionen</span>
                </div>
              </div>
            </div>
          </MagneticCard>
        </AnimatedSection>

        {/* Andere Maßstäbe als 4-er Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[scales[0], scales[2], scales[3], scales[4]].map((s, i) => (
            <AnimatedSection key={s.scale} animation="slide-up" delay={i * 80}>
              <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 bg-card h-full transition-all duration-500">
                <div className="p-7 h-full flex flex-col">
                  <s.icon className="w-7 h-7 text-primary mb-5" />
                  <p className="mono text-5xl font-bold tracking-[-0.04em] leading-none mb-3 text-foreground">{s.scale}</p>
                  <p className="font-bold text-base mb-2 tracking-tight">{s.titel}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.description}</p>

                  <div className="space-y-2 pt-5 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Preis</span>
                      <span className="mono font-bold text-primary">{s.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Lieferzeit</span>
                      <span className="mono font-semibold text-foreground/90">{s.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </MagneticCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Anker-Banner */}
        <AnimatedSection animation="fade-in" delay={500}>
          <div className="mt-10 rounded-3xl border-2 border-primary/20 bg-primary/[0.02] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Ruler className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg mb-2">Sie sind sich nicht sicher welcher Maßstab passt?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Wir prüfen Ihre CAD-Datei, schlagen den optimalen Maßstab nach Anwendungsziel vor (Wettbewerb / Bauherr / Stadtmodell), und kalkulieren auf Wunsch zwei Varianten parallel. Beratung kostenfrei vor der ersten Anfrage.</p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  </section>
);

export default ArchitekturScaleSection;
