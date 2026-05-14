'use client'

import AnimatedSection from "@/components/AnimatedSection";

const effects = [
  { num: "01", title: "Der Stopper-Effekt", text: "Besucher laufen an 90% der Stände vorbei. Ein physisches Modell unterbricht den Gang – das Auge bleibt hängen, die Füße folgen. Kein Rollup der Welt kann das.", stat: "3,2 Sek.", statLabel: "Ø Reaktionszeit bis zum Stopp" },
  { num: "02", title: "Der Anfass-Reflex", text: "Menschen sind hardwired zum Greifen. Wer ein Modell anfasst, investiert emotional. Die Hemmschwelle für ein Gespräch sinkt auf Null – der Besucher stellt die erste Frage.", stat: "70%", statLabel: "kürzere Erklärzeit" },
  { num: "03", title: "Der Anker-Effekt", text: "Ihr Modell bleibt im Kopf. Wenn der Besucher 3 Tage später 200 Visitenkarten durchgeht, erinnert er sich an \"den Stand mit dem Modell\" – nicht an \"den mit dem Rollup\".", stat: "6×", statLabel: "höhere Recall-Rate nach 7 Tagen" },
];

const MesseEffectsSection = () => (
  <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was ein 3D-Exponat am Stand verändert</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">Von "Moment, was machen Sie?"<br/>zu "Das muss ich haben."</h2>
          <p className="text-muted-foreground max-w-lg">Drei Effekte, die nur physische Modelle auslösen können.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4">
          {effects.map((e, i) => (
            <AnimatedSection key={e.num} animation="slide-up" delay={i * 100}>
              <div className="group border-2 border-border rounded-2xl p-6 md:p-8 bg-card relative overflow-hidden h-full hover:border-primary/30 transition-all duration-300">
                {/* Animated bottom bar */}
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

export default MesseEffectsSection;
