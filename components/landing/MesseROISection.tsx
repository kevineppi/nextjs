'use client'

import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { label: "Verweildauer am Stand", value: "+340%", detail: "Besucher verbringen 3,4× mehr Zeit an Ständen mit physischen Modellen als an reinen Screen-Ständen." },
  { label: "Erinnerungsrate nach 7 Tagen", value: "6× höher", detail: "Haptische Erlebnisse bleiben 6× länger im Gedächtnis als rein visuelle Reize." },
  { label: "Qualifizierte Standgespräche", value: "+47%", detail: "Wer ein Modell anfasst, stellt Fragen. Wer Fragen stellt, ist ein qualifizierter Lead." },
  { label: "Wiedereinsätze pro Modell", value: "5–10×", detail: "PETG/ASA-Modelle überstehen 5–10 Messen. Kosten pro Einsatz: €18–36." },
];

const MesseROISection = () => (
  <section className="py-20 md:py-28 bg-foreground text-background">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Return on Investment</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">Ein Modell. Hunderte Gespräche.</h2>
          <p className="text-background/50 max-w-lg">Was bringt ein 3D-Exponat wirtschaftlich? Die Zahlen unserer Kunden sprechen für sich.</p>
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

        {/* Formula */}
        <AnimatedSection animation="slide-up" delay={400}>
          <div className="border border-primary/20 rounded-2xl p-6 md:p-8 bg-primary/[0.03] text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-4">
              {[
                { v: "€180", l: "Eyecatcher" },
                { op: "÷" },
                { v: "8", l: "Messen" },
                { op: "=" },
                { v: "€22,50", l: "Pro Messe" },
                { op: "→" },
                { v: "1 Lead", l: "Amortisiert" },
              ].map((item, i) =>
                'op' in item ? (
                  <span key={i} className="text-xl text-background/20 font-light">{item.op}</span>
                ) : (
                  <div key={i} className="bg-background/[0.05] border border-background/10 rounded-xl px-4 py-2 text-center">
                    <p className="text-lg md:text-xl font-bold text-primary">{item.v}</p>
                    <p className="mono text-[9px] text-background/40 uppercase tracking-wider">{item.l}</p>
                  </div>
                )
              )}
            </div>
            <p className="text-sm text-background/60">Bei einem B2B-Lead-Wert von <strong className="text-primary">€500+</strong> rechnet sich Ihr Messemodell nach <strong className="text-primary">einem einzigen qualifizierten Kontakt</strong>.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default MesseROISection;
