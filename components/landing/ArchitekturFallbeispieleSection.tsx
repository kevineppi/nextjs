import AnimatedSection from "@/components/AnimatedSection";
import MagneticCard from "@/components/MagneticCard";
import { Trophy, Building2, Home, Quote, Clock, Package, Ruler, ArrowRight } from "lucide-react";

const cases = [
  {
    branche: "Wettbewerbsarchitektur",
    icon: Trophy,
    titel: "Schulwettbewerb · 4 Varianten in 6 Tagen",
    challenge: "Architekturbüro mit 8 Mitarbeitern entwickelt vier konzeptionelle Entwürfe für einen Schulneubau-Wettbewerb. Abgabe in 8 Werktagen. Klassische Modellbauwerkstätten brauchen pro Variante 3 Wochen.",
    solution: "Wir fertigen alle vier Modelle parallel im Maßstab 1:200, weiße Optik mit matter Oberfläche. CAD-Dateien aus Vectorworks direkt importiert, Wandstärken-Optimierung von uns, Druck startet noch am selben Tag.",
    result: [
      { l: "Modelle", v: "4 Varianten" },
      { l: "Lieferzeit", v: "6 Werktage" },
      { l: "Maßstab", v: "1:200" },
      { l: "Gesamtkosten", v: "€2.840" },
    ],
    quote: "Mit klassischem Modellbau hätten wir nur eine Variante in der Abgabe gehabt. Vier Varianten parallel haben das Konzept der Jury klar gemacht – wir haben gewonnen.",
    quotePosition: "Wettbewerbsleiter, Architekturbüro Wien",
  },
  {
    branche: "Bauträger / Vermarktung",
    icon: Building2,
    titel: "60-Einheiten-Wohnbauprojekt · Schauraum-Modell",
    challenge: "Bauträger entwickelt Wohnhausanlage mit 60 Einheiten in 5 Stiegen. Vorverkaufsphase startet, Interessenten verstehen die Orientierung der Wohnungen am Rendering nicht. Konversionsrate niedrig.",
    solution: "Modell 1:100 für den Schauraum – 1,2×0,8 m groß, alle Stiegen einzeln entnehmbar zur Geschossansicht. Wohnungen farblich nach Größenklasse markiert. Topografie und Grünflächen mit dargestellt. Sonnenstand-Visualisierung über Markierung an der Modellbasis.",
    result: [
      { l: "Modellgröße", v: "1,2 × 0,8 m" },
      { l: "Lieferzeit", v: "14 Werktage" },
      { l: "Maßstab", v: "1:100 segmentiert" },
      { l: "Investition", v: "€4.890" },
    ],
    quote: "Seit das Modell im Schauraum steht, kommen Interessenten besser vorbereitet ins Gespräch. Sie zeigen direkt auf 'ihre' Wohnung – das verkürzt unsere Beratungsgespräche um die Hälfte.",
    quotePosition: "Vermarktungsleitung Bauträger, Linz",
  },
  {
    branche: "Privatkunde / Einfamilienhaus",
    icon: Home,
    titel: "Pensionsgeschenk · Traumhaus 1:50",
    challenge: "Tochter möchte ihrem Vater zum 60. Geburtstag ein hochwertiges Modell seines selbst geplanten Einfamilienhauses schenken. Hat nur ArchiCAD-Datei vom Architekten und 3 Wochen Zeit.",
    solution: "Modell 1:50 mit abnehmbarem Dach, eingelegte Möblierung auf jedem Geschoss, Holzdielen-Optik im Wohnbereich, Marmor-Optik in den Bädern. Beleuchtbare Variante mit LED-Streifen im Bodenbereich. Lieferung im maßgefertigten Holzkoffer.",
    result: [
      { l: "Modellgröße", v: "32 × 24 cm" },
      { l: "Lieferzeit", v: "12 Werktage" },
      { l: "Detailtiefe", v: "Möbliert + LED" },
      { l: "Investition", v: "€1.680" },
    ],
    quote: "Mein Vater hat das Modell eine halbe Stunde lang von allen Seiten angeschaut. Er hat tatsächlich neue Details an seinem eigenen Haus entdeckt. Das schönste Geschenk das ich ihm je gemacht habe.",
    quotePosition: "Privatkundin, Salzburg",
  },
];

const ArchitekturFallbeispieleSection = () => (
  <section className="py-32 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="text-center">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Drei Projekte. Drei Welten.</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
              Vom Wettbewerb<br/><span className="text-gradient">bis zum Pensionsgeschenk.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Jedes Architekturmodell hat einen anderen Zweck – und braucht eine andere Strategie. Drei reale Konstellationen aus den letzten zwölf Monaten.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <AnimatedSection key={c.branche} animation="slide-up" delay={i * 100}>
              <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 bg-card transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-0">

                  {/* Left: Branche & Quote */}
                  <div className="lg:col-span-4 p-8 md:p-10 lg:border-r border-border bg-muted/20 flex flex-col">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <c.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{c.branche}</p>
                    <p className="font-bold text-xl tracking-tight mb-6">{c.titel}</p>

                    <div className="mt-auto pt-6 border-t border-border/50">
                      <Quote className="w-5 h-5 text-primary/30 mb-3" />
                      <p className="text-sm italic leading-relaxed mb-3 text-foreground/80">"{c.quote}"</p>
                      <p className="text-[11px] text-muted-foreground">— {c.quotePosition}</p>
                    </div>
                  </div>

                  {/* Right: Content & Metrics */}
                  <div className="lg:col-span-8 p-8 md:p-10">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Ausgangslage</p>
                        <p className="text-sm leading-relaxed text-foreground/85">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">Unser Vorgehen</p>
                        <p className="text-sm leading-relaxed text-foreground/85">{c.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50">
                      {c.result.map((r, j) => (
                        <div key={j}>
                          <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{r.l}</p>
                          <p className="font-bold text-lg text-foreground">{r.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </MagneticCard>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default ArchitekturFallbeispieleSection;
