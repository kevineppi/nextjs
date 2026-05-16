'use client'

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MagneticCard from "@/components/MagneticCard";
import { Check, X, Sparkles, ArrowRight, Zap, Trophy, Briefcase, Cpu } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    icon: Cpu,
    price: "290",
    subtitle: "Für Hardware-Maker und kleine Konstruktionsbüros",
    target: "Ideal für Einzelentwickler und kleine Teams mit gelegentlichem Bedarf",
    features: [
      { text: "Bis zu 3 FDM-Prototypen pro Monat inklusive", included: true },
      { text: "Maximale Druckfläche: 25×25×25 cm pro Modell", included: true },
      { text: "Standard-Materialien: PLA+, PETG, ABS", included: true },
      { text: "Express 48h-Lieferung inklusive", included: true },
      { text: "Persönlicher Ansprechpartner", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität", included: false },
      { text: "Premium-Materialien (Carbon-PA, ASA)", included: false },
      { text: "SLA / SLS über Partner", included: false },
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    icon: Briefcase,
    price: "690",
    subtitle: "Für aktive Entwicklungsteams und Hardware-Startups",
    target: "Wenn Sie regelmäßig iterieren und planbare Kosten brauchen",
    features: [
      { text: "Bis zu 8 Prototypen pro Monat (FDM + 2× SLA/SLS)", included: true },
      { text: "Maximale Druckfläche: 40×40×40 cm pro Modell", included: true },
      { text: "Alle Materialien inkl. Carbon-PA, ASA, Tough-Resin", included: true },
      { text: "Express 24h-Lieferung inklusive", included: true },
      { text: "Persönlicher Ansprechpartner", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität (vor Einzelaufträgen)", included: true },
      { text: "Premium-Materialien (Carbon-PA, ASA)", included: true },
      { text: "Konstruktionsoptimierung 2h/Monat inklusive", included: true },
    ],
    highlighted: true,
    badge: "Beliebteste Wahl",
  },
  {
    name: "Studio",
    icon: Trophy,
    price: "1.490",
    subtitle: "Für Designagenturen und Mittelstand mit konstantem Bedarf",
    target: "Volle Flexibilität für Teams mit hohem Iterationsaufkommen",
    features: [
      { text: "Bis zu 20 Prototypen pro Monat (FDM/SLA/SLS frei kombinierbar)", included: true },
      { text: "Maximale Druckfläche: bis 1.500 mm Großformat", included: true },
      { text: "Alle Materialien inkl. SLS PA12 glasgefüllt", included: true },
      { text: "Express 24h-Lieferung mit höchster Priorität", included: true },
      { text: "Persönlicher Ansprechpartner direkt mit Inhaber", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität (höchste Stufe)", included: true },
      { text: "DfAM-Beratung 8h/Monat inklusive", included: true },
      { text: "Persönliche Zustellung in OÖ inklusive", included: true },
    ],
    highlighted: false,
  },
];

const PrototypingAboSection = () => (
  <section id="prototyping-abo" className="py-32 scroll-mt-20">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 sticker border-primary text-primary mb-6">
            <Sparkles className="w-3 h-3" />
            <span className="mono text-[10px] font-bold uppercase tracking-[0.2em]">Neu · Money-Saver</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] mb-6">
            Prototyping<br/>
            <span className="text-gradient">im Abo.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Fixpreis pro Monat statt schwankender Einzelrechnungen. Mit Produktionspriorität,
            Express-Lieferung und persönlichem Ansprechpartner. Monatlich kündbar.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} animation="slide-up" delay={i * 120}>
              <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${tier.highlighted ? 'border-primary shadow-2xl shadow-primary/10 bg-card relative' : 'border-border bg-card hover:border-primary/30'}`}>
                <div className="p-8 md:p-10 relative">
                  {tier.highlighted && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" />
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 mono text-[10px] font-bold bg-primary text-primary-foreground px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        {tier.badge}
                      </span>
                    </>
                  )}

                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${tier.highlighted ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center`}>
                      <tier.icon className={`w-6 h-6 ${tier.highlighted ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                  </div>

                  <p className="font-bold text-2xl tracking-tight mb-1">{tier.name}</p>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">{tier.subtitle}</p>

                  <div className="mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-primary tracking-tight">€{tier.price}</span>
                      <span className="mono text-xs text-muted-foreground">/Monat</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 italic">{tier.target}</p>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs">
                        {f.included ? (
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                        )}
                        <span className={f.included ? 'text-foreground/80 leading-relaxed' : 'text-muted-foreground/50 leading-relaxed line-through'}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full py-6 text-sm font-semibold ${tier.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                  >
                    <Link href="#kontakt">{tier.highlighted ? 'Beratungstermin vereinbaren' : `${tier.name} starten`} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </MagneticCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Info-Banner */}
        <AnimatedSection animation="fade-in" delay={500}>
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/[0.02] p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Erstes Modell kostenlos</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Neue Abo-Kunden erhalten ihr erstes Modell zum Qualitätstest gratis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Monatlich kündbar</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keine Mindestlaufzeit, keine versteckten Klauseln. Upgrade jederzeit möglich.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">UID-Rechnung & NDA</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    B2B-konditioniert. NDA auf Wunsch, vertrauliche Abwicklung garantiert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrototypingAboSection;
