import AnimatedSection from "@/components/AnimatedSection";

const effects = [
  { num: "01", title: "Der Bemusterungs-Effekt", text: "Ein 3D-Rendering überzeugt am Bildschirm. Ein physisches Bauteil überzeugt in der Hand. Wer Investoren, Vorstand oder Kunden mit greifbaren Prototypen abholt, gewinnt die Entscheidung schneller – weil das Produkt schon halb existiert.", stat: "5 Min.", statLabel: "Ø Entscheidungszeit beim Bemustern" },
  { num: "02", title: "Der Iterations-Effekt", text: "Wer drei Designvarianten parallel druckt und alle drei testet, kommt schneller zum optimalen Bauteil als wer eine einzige Hypothese verteidigt. Die Frage verschiebt sich von 'wird es funktionieren?' zu 'welche Variante funktioniert am besten?'.", stat: "3×", statLabel: "schnellere Designkonvergenz" },
  { num: "03", title: "Der Validierungs-Effekt", text: "Toleranzen, die im CAD aussehen wie auf dem Datenblatt, sind im Bauteil oft nicht das, was sie zu sein scheinen. Ein gedruckter geometrischer Prototyp zeigt in 5 Minuten, was die Simulation in 5 Wochen nicht zeigt.", stat: "−80%", statLabel: "Werkzeug-Korrekturen im ersten Schuss" },
];

const PrototypingProcessSection = () => (
  <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was Rapid Prototyping verändert</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">Von "wir testen mal eine Idee"<br/>zu "wir wissen, was funktioniert."</h2>
          <p className="text-muted-foreground max-w-lg">Drei Effekte, die nur physische Prototypen auslösen – kein Rendering, keine Simulation.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4">
          {effects.map((e, i) => (
            <AnimatedSection key={e.num} animation="slide-up" delay={i * 100}>
              <div className="group border-2 border-border rounded-2xl p-6 md:p-8 bg-card relative overflow-hidden h-full hover:border-primary/30 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <p className="text-5xl font-bold text-foreground/[0.04] mb-4">{e.num}</p>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{e.text}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-3xl font-bold text-primary">{e.stat}</p>
                  <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider">{e.statLabel}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PrototypingProcessSection;
