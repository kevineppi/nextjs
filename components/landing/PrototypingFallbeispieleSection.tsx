import AnimatedSection from "@/components/AnimatedSection";
import { Quote, ArrowRight, Clock, Package, TrendingUp } from "lucide-react";

const fallbeispiele = [
  {
    branche: "Produktdesign",
    titel: "Formstudie für ein Consumer-Produkt in fünf Varianten",
    challenge: "Ein oberösterreichischer Produktentwickler wollte Form, Proportion und Haptik eines neuen Consumer-Produkts am echten Modell festlegen. Am Bildschirm blieb die Ergonomie unsicher, eine falsche Formentscheidung vor der Produktion hätte 4–6 Wochen und €8.000 gekostet.",
    loesung: "Fünf Design-Varianten aus Carbon-PA in 14 Tagen. Jede Variante in der Hand geprüft, in Form und Haptik optimiert, neu gedruckt. Die finale Version ging direkt in Mehrfachfertigung (12 Anschauungsmuster fürs Vertriebsteam, SLS PA12).",
    ergebnis: [
      { label: "Iterationen", value: "5×" },
      { label: "Gesamtdauer", value: "14 Tage" },
      { label: "Kostenersparnis", value: "€6.200" },
      { label: "Material", value: "Carbon-PA → SLS PA12" },
    ],
    quote: "Wir konnten zweimal die Form ändern, ohne dass es weh tut. Nach dem Produktionsstart wäre das undenkbar gewesen.",
  },
  {
    branche: "Hardware-Startup",
    titel: "Smart-Home-Produkt: 12 Designvarianten für A/B-Test",
    challenge: "Ein Wiener Hardware-Startup wollte vor dem Crowdfunding-Launch testen, welche Produktform und Farbe beim Endkunden am besten ankommt. Klassisch unmöglich ohne fünfstellige Werkzeuginvestition.",
    loesung: "12 Varianten aus PLA+ in drei Wochen. Drei Grundformen × vier Farbschemata. Alle wurden in einer Fokusgruppe mit 30 Probanden beurteilt, das Gewinner-Design ging in die finale Umsetzung.",
    ergebnis: [
      { label: "Designvarianten", value: "12" },
      { label: "Gesamtdauer", value: "3 Wochen" },
      { label: "Stückpreis", value: "€48" },
      { label: "Material", value: "PLA+ matt, lackiert" },
    ],
    quote: "Vor dem Crowdfunding zu wissen, welches Design wirklich überzeugt – unbezahlbar. Die Kampagne war 280% überfinanziert.",
  },
  {
    branche: "Möbel-Design",
    titel: "Anschauungsmodelle einer Leuchten-Kollektion für die Messe",
    challenge: "Ein Wiener Designstudio wollte eine neue Leuchten-Kollektion auf einer Messe zeigen, bevor die Produktion steht. Renderings reichten dem Vertrieb nicht, Kunden wollten Form und Oberfläche in der Hand sehen. NDA-Pflicht.",
    loesung: "Hybride Fertigung: Grundkörper aus FDM-PETG für formstabile Modelle, feine Sichtflächen aus SLA-Resin, weiche Akzente aus TPU. Nach drei Wochen Entwicklung wurde die Kollektion in einer Auflage von 8 Stück gedruckt und für die Messe lackiert.",
    ergebnis: [
      { label: "Materialkombination", value: "3 Verfahren" },
      { label: "Entwicklung", value: "3 Wochen" },
      { label: "Auflage", value: "8 Stück" },
      { label: "NDA", value: "Vertraulichkeit gewahrt" },
    ],
    quote: "Diskrete Abwicklung, ein tolles Auge fürs Detail und ein wirklich beeindruckendes Endergebnis. Wir bestellen jetzt regelmäßig nach.",
  },
];

const PrototypingFallbeispieleSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Aus der Praxis</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95]">Drei Projekte.<br/><span className="text-gradient">Drei Resultate.</span></h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Konkrete Beispiele aus dem Tagesgeschäft – mit Zahlen, Material­wahl und realer Lieferzeit. Branchen und Namen anonymisiert auf Wunsch der Auftraggeber.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {fallbeispiele.map((f, i) => (
            <AnimatedSection key={f.titel} animation="slide-up" delay={i * 100}>
              <div className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 bg-card overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Linke Spalte: Branche + Titel */}
                  <div className="md:col-span-2 p-8 md:p-10 bg-muted/30 border-r border-border flex flex-col justify-between min-h-[280px]">
                    <div>
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">{f.branche}</p>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-6">{f.titel}</h3>
                    </div>
                    <div className="relative pl-4 border-l-2 border-primary/30">
                      <Quote className="w-4 h-4 text-primary/40 absolute -left-[10px] top-0 bg-card" />
                      <p className="text-sm text-foreground/70 italic leading-relaxed">"{f.quote}"</p>
                    </div>
                  </div>

                  {/* Rechte Spalte: Challenge + Lösung + Zahlen */}
                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="mb-6">
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Ausgangssituation</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{f.challenge}</p>
                    </div>
                    <div className="mb-8">
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Unsere Lösung</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">{f.loesung}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-border/50">
                      {f.ergebnis.map((r, j) => (
                        <div key={r.label} className="text-left">
                          <p className="mono text-base md:text-lg font-bold text-primary tracking-tight">{r.value}</p>
                          <p className="mono text-[9px] text-muted-foreground uppercase tracking-wider mt-1">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PrototypingFallbeispieleSection;
