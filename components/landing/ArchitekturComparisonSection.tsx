import AnimatedSection from "@/components/AnimatedSection";
import { Check, X, Minus } from "lucide-react";

const alternatives = [
  {
    name: "Schaum & Karton",
    badge: "DIY",
    badgeColor: "bg-muted text-muted-foreground",
    eyebrow: "Studio-intern",
    description: "Schnell, günstig, aber unpräzise. Kanten ausgefranst, Maßstabsabweichungen, kein professioneller Eindruck.",
    rows: [
      { label: "Lieferzeit", value: "1–3 Tage", status: "good" },
      { label: "Detailtreue", value: "Sehr gering", status: "bad" },
      { label: "Wettbewerbs­tauglich", value: "Nein", status: "bad" },
      { label: "Bauherren­präsentation", value: "Bedingt", status: "mid" },
      { label: "Maßstab-Genauigkeit", value: "±5%", status: "bad" },
      { label: "Variants-Iteration", value: "Mühsam", status: "bad" },
      { label: "Kosten/Modell", value: "ab €50", status: "good" },
    ],
  },
  {
    name: "Lasercut",
    badge: "Werkstatt",
    badgeColor: "bg-muted text-muted-foreground",
    eyebrow: "MDF / Acryl",
    description: "Gute Kanten, aber zweidimensional. Stapelweise zusammengeklebt – Fassadendetails fehlen, Komplexität limitiert.",
    rows: [
      { label: "Lieferzeit", value: "5–10 Tage", status: "mid" },
      { label: "Detailtreue", value: "Mittel (2,5D)", status: "mid" },
      { label: "Wettbewerbs­tauglich", value: "Eingeschränkt", status: "mid" },
      { label: "Bauherren­präsentation", value: "Ja, abstrakt", status: "mid" },
      { label: "Maßstab-Genauigkeit", value: "±0,5 mm", status: "good" },
      { label: "Variants-Iteration", value: "Kostenintensiv", status: "bad" },
      { label: "Kosten/Modell", value: "€200–800", status: "mid" },
    ],
  },
  {
    name: "Klassischer Modellbau",
    badge: "Manufaktur",
    badgeColor: "bg-muted text-muted-foreground",
    eyebrow: "Handwerklich",
    description: "Höchste Qualität, aber teuer und langsam. Für Premium-Großprojekte – nicht für mehrere Iterationen oder Wettbewerbsabgaben.",
    rows: [
      { label: "Lieferzeit", value: "3–6 Wochen", status: "bad" },
      { label: "Detailtreue", value: "Sehr hoch", status: "good" },
      { label: "Wettbewerbs­tauglich", value: "Ja", status: "good" },
      { label: "Bauherren­präsentation", value: "Premium", status: "good" },
      { label: "Maßstab-Genauigkeit", value: "±0,3 mm", status: "good" },
      { label: "Variants-Iteration", value: "Sehr teuer", status: "bad" },
      { label: "Kosten/Modell", value: "€3.000–15.000", status: "bad" },
    ],
  },
  {
    name: "3D-Druck (ekdruck)",
    badge: "Premium-Preis-Leistung",
    badgeColor: "bg-primary text-primary-foreground",
    eyebrow: "Additive Fertigung",
    description: "Maßstabsgenaue Modelle in 3–5 Werktagen, Express in 24h. Komplexe Fassaden, beliebige Geometrien, Parallel-Fertigung mehrerer Varianten ohne Aufpreis.",
    highlighted: true,
    rows: [
      { label: "Lieferzeit", value: "3–5 Tage · Express 24h", status: "good" },
      { label: "Detailtreue", value: "Sehr hoch (3D)", status: "good" },
      { label: "Wettbewerbs­tauglich", value: "Ja, mit Garantie", status: "good" },
      { label: "Bauherren­präsentation", value: "Premium", status: "good" },
      { label: "Maßstab-Genauigkeit", value: "±0,1–0,3 mm", status: "good" },
      { label: "Variants-Iteration", value: "Parallel-Fertigung", status: "good" },
      { label: "Kosten/Modell", value: "€80–2.500", status: "good" },
    ],
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "good") return <Check className="w-4 h-4 text-primary shrink-0" />;
  if (status === "bad") return <X className="w-4 h-4 text-destructive shrink-0" />;
  return <Minus className="w-4 h-4 text-muted-foreground shrink-0" />;
};

const ArchitekturComparisonSection = () => (
  <section className="py-32 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="text-center">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Vergleich der Fertigungsverfahren</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
              Warum 3D-Druck<br/><span className="text-gradient">den Modellbau revolutioniert.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Vier Wege ein Architekturmodell zu bauen – mit sehr unterschiedlichen Ergebnissen für Bauherren, Wettbewerbsjurys und Ihr Budget.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {alternatives.map((alt, i) => (
            <AnimatedSection key={alt.name} animation="slide-up" delay={i * 100}>
              <div className={`rounded-3xl border-2 h-full transition-all duration-500 ${alt.highlighted ? 'border-primary bg-card shadow-2xl shadow-primary/10 lg:scale-[1.02]' : 'border-border bg-card hover:border-primary/30'}`}>
                <div className="p-6 md:p-7 relative h-full flex flex-col">
                  {alt.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" />
                  )}

                  <span className={`mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 self-start ${alt.badgeColor}`}>{alt.badge}</span>
                  <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{alt.eyebrow}</p>
                  <p className={`font-bold text-2xl tracking-tight mb-4 ${alt.highlighted ? 'text-primary' : ''}`}>{alt.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{alt.description}</p>

                  <div className="space-y-2.5 mt-auto pt-4 border-t border-border/50">
                    {alt.rows.map((row, j) => (
                      <div key={j} className="flex items-start justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <StatusIcon status={row.status} />
                          <span>{row.label}</span>
                        </div>
                        <span className={`mono font-semibold text-right ${row.status === 'good' ? 'text-foreground' : row.status === 'bad' ? 'text-destructive/70' : 'text-muted-foreground'}`}>{row.value}</span>
                      </div>
                    ))}
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

export default ArchitekturComparisonSection;
