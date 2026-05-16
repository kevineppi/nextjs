import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, X, Minus } from "lucide-react";

const alternatives = [
  {
    name: "CNC-Fräsen",
    icon: "🔩",
    sub: "Subtraktiv, präzise",
    price: "€500–5k",
    priceSub: "pro Teil",
    items: [
      { text: "Sehr präzise", status: "yes" },
      { text: "Hohe Werkzeugkosten", status: "no" },
      { text: "Geometrie eingeschränkt", status: "no" },
      { text: "Materialverlust", status: "no" },
      { text: "Lange Vorlaufzeit", status: "no" },
    ],
  },
  {
    name: "Spritzguss-Prototyp",
    icon: "🛠",
    sub: "Werkzeuggebunden",
    price: "€5–50k",
    priceSub: "Werkzeug + Teil",
    items: [
      { text: "Serien-Material", status: "yes" },
      { text: "Werkzeug nötig", status: "no" },
      { text: "Nur bei Mengen", status: "mid" },
      { text: "Änderungen teuer", status: "no" },
      { text: "8+ Wochen Vorlauf", status: "no" },
    ],
  },
  {
    name: "Vakuumguss",
    icon: "🧪",
    sub: "Silikonform, Kleinserien",
    price: "€800–3k",
    priceSub: "+ Silikonform",
    items: [
      { text: "Gute Oberfläche", status: "yes" },
      { text: "Form-Vorlauf nötig", status: "mid" },
      { text: "Kleinserien sinnvoll", status: "yes" },
      { text: "Begrenzte Materialien", status: "mid" },
      { text: "2–4 Wochen", status: "mid" },
    ],
  },
];

const winner = {
  name: "3D-Druck Prototyp",
  icon: "🎯",
  sub: "ekdruck · FDM, SLA, SLS",
  price: "ab €20",
  priceSub: "Express 24h · Festpreis",
  items: [
    { text: "Volle Geometrie-Freiheit", status: "yes" },
    { text: "Keine Werkzeugkosten", status: "yes" },
    { text: "Ab Stückzahl 1", status: "yes" },
    { text: "Änderung = neue Datei", status: "yes" },
    { text: "Express 24h möglich", status: "yes" },
  ],
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "yes") return <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><CheckCircle className="w-3 h-3 text-primary" /></span>;
  if (status === "no") return <span className="w-4 h-4 rounded-full bg-destructive/10 flex items-center justify-center shrink-0"><X className="w-3 h-3 text-destructive" /></span>;
  return <span className="w-4 h-4 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0"><Minus className="w-3 h-3 text-amber-600" /></span>;
};

const PrototypingComparisonSection = () => (
  <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Warum 3D-Druck für Prototypen?</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">3D-Druck vs. CNC, Spritzguss & Vakuumguss</h2>
          <p className="text-muted-foreground max-w-lg">Was zählt: Geschwindigkeit, Iteration und Kosten ab Stückzahl 1.</p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {alternatives.map((alt, i) => (
              <div key={alt.name} className={`p-5 text-center ${i < 3 ? 'border-r border-border/50' : ''}`}>
                <div className="text-3xl mb-3">{alt.icon}</div>
                <p className="font-bold text-sm mb-0.5">{alt.name}</p>
                <p className="mono text-[10px] text-muted-foreground mb-4">{alt.sub}</p>
                <div className="space-y-2.5 text-left">
                  {alt.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs"><StatusIcon status={item.status} />{item.text}</div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/50">
                  <p className="text-xl font-bold">{alt.price}</p>
                  <p className="mono text-[9px] text-muted-foreground">{alt.priceSub}</p>
                </div>
              </div>
            ))}
            <div className="p-5 text-center border-2 border-primary rounded-2xl bg-primary/[0.02] -my-2 relative z-10 shadow-lg shadow-primary/5">
              <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full uppercase tracking-wider">Empfehlung</span>
              <div className="text-3xl mb-3 mt-3">{winner.icon}</div>
              <p className="font-bold text-sm mb-0.5">{winner.name}</p>
              <p className="mono text-[10px] text-muted-foreground mb-4">{winner.sub}</p>
              <div className="space-y-2.5 text-left">
                {winner.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs"><StatusIcon status={item.status} />{item.text}</div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-primary/20">
                <p className="text-xl font-bold text-primary">{winner.price}</p>
                <p className="mono text-[9px] text-muted-foreground">{winner.priceSub}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrototypingComparisonSection;
