import AnimatedSection from "@/components/AnimatedSection";
import { AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import type { ProblemSolutionData } from "@/data/druckSectionData";

interface ProblemSolutionSectionProps {
  regionName: string;
  category: 'architektur' | 'messe' | 'druck';
  data?: ProblemSolutionData;
}

const ProblemSolutionSection = ({ regionName, category, data }: ProblemSolutionSectionProps) => {
  // Data-driven mode
  if (data) {
    return (
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{data.problemTitle}</h2>
              </div>
              <ul className="space-y-4">
                {data.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 text-destructive/60 mt-1 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={150}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{data.solutionTitle}</h2>
              </div>
              <ul className="space-y-4">
                {data.solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  // Legacy mode for architektur/messe
  const content = category === 'architektur' ? {
    problemTitle: 'Das Dilemma vieler Architekturbüros',
    problems: [
      `Wettbewerbstermin in 5 Tagen – lokaler Modellbauer in ${regionName} braucht 3 Wochen`,
      'Handgefertigte Modelle kosten schnell €500+ für einfache Studienmodelle',
      'Änderungen am Entwurf = komplett neues Modell = doppelte Kosten',
      'Maßstabstreue ist bei Handarbeit schwer reproduzierbar',
    ],
    solutionTitle: 'Unsere Antwort: Digitaler Modellbau',
    solutions: [
      'Express-Fertigung in 24h – auch für kurzfristige Wettbewerbstermine',
      'Ab €20 für Studienmodelle – CAD-basiert, reproduzierbar, präzise',
      'Änderungen? Neuer Druck in Stunden, nicht Wochen',
      'Digitale Präzision: ±0.2mm Toleranz, maßstabsgetreu aus der CAD-Datei',
    ],
  } : {
    problemTitle: 'Typische Probleme bei der Messe-Vorbereitung',
    problems: [
      `Modellbauer in ${regionName} liefern oft zu spät – Stress vor der Messe`,
      'Klassische Modelle sind schwer und brechen beim Transport',
      'Spontane Design-Änderungen kurz vor der Messe unmöglich',
      'Hohe Kosten bei traditionellem Modellbau für einmalige Messe-Auftritte',
    ],
    solutionTitle: '3D-Druck löst diese Probleme',
    solutions: [
      'Express-Fertigung in 24h – auch Last-Minute-Bestellungen möglich',
      'Bis 70% leichter als Holz/Metall – einfacher Transport, kein Bruchrisiko',
      'Digitale Datei = schnelle Varianten in Stunden statt Wochen',
      'Ab €30 für professionelle Display-Modelle – effizient produziert',
    ],
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <AnimatedSection animation="fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{content.problemTitle}</h2>
            </div>
            <ul className="space-y-4">
              {content.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <AlertTriangle className="w-4 h-4 text-destructive/60 mt-1 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={150}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{content.solutionTitle}</h2>
            </div>
            <ul className="space-y-4">
              {content.solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
