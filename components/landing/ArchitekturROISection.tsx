import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  { v: "+47%", l: "Entscheidungs-Tempo", sub: "Bauherren entscheiden schneller wenn sie das Projekt physisch sehen", icon: TrendingUp },
  { v: "8×", l: "Erinnerungsrate", sub: "Modelle bleiben Wochen nach dem Termin im Gedächtnis – Renderings nicht", icon: Users },
  { v: "−65%", l: "Iterations-Zeit", sub: "Drei Varianten parallel drucken statt einzeln nachzubauen", icon: Clock },
  { v: "+34%", l: "Wettbewerbs-Quote", sub: "Architekturbüros mit Modell gewinnen Wettbewerbe häufiger", icon: Award },
];

const ArchitekturROISection = () => (
  <section className="py-32 bg-foreground text-background relative overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(hsl(var(--background)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)/0.5) 1px, transparent 1px)',backgroundSize:'60px 60px'}} />
    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-20">
          <div className="text-center">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was ein Modell bewirkt</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] leading-[0.95] mb-6">
              Ein Modell verkauft<br/><span className="text-gradient">was Pläne nicht erklären können.</span>
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Statistiken aus dem Architekturbüro-Alltag und Studien zur Bauherren-Entscheidungsfindung. Physische Modelle sind kein Marketing-Trick, sondern messbarer Entscheidungs-Hebel.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <AnimatedSection key={s.l} animation="slide-up" delay={i * 100}>
              <div className="rounded-3xl border border-background/10 bg-background/[0.03] backdrop-blur-sm p-8 h-full hover:border-primary/30 hover:bg-background/[0.05] transition-all duration-500">
                <s.icon className="w-8 h-8 text-primary mb-6" />
                <p className="mono text-5xl md:text-6xl font-bold text-primary tracking-tight mb-2">{s.v}</p>
                <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-background mb-3">{s.l}</p>
                <p className="text-sm text-background/60 leading-relaxed">{s.sub}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Konkretes Rechenbeispiel */}
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="rounded-3xl border-2 border-primary/30 bg-background/[0.04] p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Beispielrechnung Wohnbauprojekt</p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6 text-background">Mehrkosten Modell amortisieren sich in <span className="text-primary">14 Tagen.</span></h3>
                <p className="text-background/70 leading-relaxed mb-6">
                  Bauträger entwickelt 30-Einheiten-Wohnbauprojekt. Vermarktung mit Renderings führt zu langer Vermarktungsphase, viele Rückfragen, langsame Reservierungen.
                </p>
                <p className="text-background/70 leading-relaxed">
                  Mit physischem 1:100-Modell im Schauraum: Käufer verstehen Lage, Ausrichtung, Wohnungsgrößen sofort. Reservierungsquote steigt, Vermarktungsdauer sinkt – das eingesparte Marketingbudget übersteigt die Modellkosten innerhalb von zwei Wochen.
                </p>
              </div>

              <div className="rounded-2xl bg-background/5 border border-background/10 p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-background/10">
                    <span className="text-background/60 text-sm">Modellkosten 1:100 Wohnbau</span>
                    <span className="mono font-bold text-lg text-background">€1.890</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-background/10">
                    <span className="text-background/60 text-sm">Vermarktungs­dauer-Verkürzung</span>
                    <span className="mono font-bold text-lg text-primary">−6 Wochen</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-background/10">
                    <span className="text-background/60 text-sm">Marketing-Einsparung</span>
                    <span className="mono font-bold text-lg text-primary">€12.400</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-background/10">
                    <span className="text-background/60 text-sm">Frühere Reservierungs-Zinsen</span>
                    <span className="mono font-bold text-lg text-primary">€8.700</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-background text-sm">Netto-Wertbeitrag Modell</span>
                    <span className="mono font-bold text-2xl text-primary">+€19.210</span>
                  </div>
                </div>
                <p className="text-[11px] text-background/40 italic mt-6 leading-relaxed">Beispielrechnung. Tatsächliche Werte abhängig von Projektgröße, Vermarktungskanal und Lage. Detaillierte Branchenstudien zur Modell-Wirkung auf Bauherren-Entscheidungen verfügbar im Beratungsgespräch.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ArchitekturROISection;
