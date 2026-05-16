import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { label: "Time-to-Market", value: "−65%", detail: "Konstruktionsfehler vor dem Werkzeugbau erkennen. 5 Monate Markteinführungszeit gewonnen statt verloren." },
  { label: "Iterationskosten pro Zyklus", value: "−92%", detail: "FDM-Iteration ab €30 statt Werkzeugkorrektur ab €5.000. Mehr Iterationen, schnellere Konvergenz zum optimalen Design." },
  { label: "Werkzeug-Erstkorrekturen", value: "−80%", detail: "Validierte Konstruktion vor Werkzeugbau bedeutet: das Werkzeug greift im ersten Schuss. Werkzeugkorrekturen werden zur Ausnahme." },
  { label: "Marktrisiko vor Launch", value: "messbar", detail: "Designprototypen ermöglichen echte Nutzerfeedbacks lange vor der Serie. Featuredecisions auf Daten, nicht auf Bauchgefühl." },
];

const PrototypingROISection = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Return on Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">Was Rapid Prototyping wirklich spart.</h2>
          <p className="text-background/50 max-w-lg">Konstruktionsfehler frühzeitig erkennen statt nach dem Werkzeugbau ausbaden. Eine Beispielrechnung.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} animation="slide-up" delay={i * 80}>
              <div className="border border-background/[0.08] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent pointer-events-none" />
                <p className="mono text-[10px] font-bold uppercase tracking-[0.15em] text-background/40 mb-3 relative">{s.label}</p>
                <p className="text-4xl font-bold text-primary relative">{s.value}</p>
                <p className="text-xs text-background/50 mt-2 leading-relaxed relative">{s.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="slide-up" delay={400}>
          <div className="border border-primary/20 rounded-2xl p-6 md:p-8 bg-primary/[0.03]">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.15em] text-background/40 mb-4 text-center">Beispielrechnung: Neues Spritzgussteil</p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-4">
              {[
                { v: "€32.500", l: "Ohne Prototyping", neg: true },
                { op: "vs" },
                { v: "€4.800", l: "Mit Prototyping" },
                { op: "=" },
                { v: "€27.700", l: "Ersparnis" },
              ].map((item, i) =>
                'op' in item ? (
                  <span key={i} className="text-xl text-background/20 font-light">{item.op}</span>
                ) : (
                  <div key={i} className={`border rounded-xl px-4 py-3 text-center ${(item as any).neg ? 'bg-destructive/[0.08] border-destructive/20' : 'bg-background/[0.05] border-background/10'}`}>
                    <p className={`text-lg md:text-xl font-bold ${(item as any).neg ? 'text-destructive' : 'text-primary'}`}>{item.v}</p>
                    <p className="mono text-[9px] text-background/40 uppercase tracking-wider">{item.l}</p>
                  </div>
                )
              )}
            </div>
            <p className="text-sm text-background/60 text-center max-w-3xl mx-auto">Drei FDM-Iterationen à €120, eine SLS-Vorserie à 30 Stück. Konstruktion validiert vor Werkzeugbau – das Werkzeug greift im ersten Schuss. Bei kritischen Bauteilen mit Sicherheitsanforderungen: <strong className="text-primary">ROI nach einem einzigen vermiedenen Werkzeug-Eingriff</strong>.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrototypingROISection;
