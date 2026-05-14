'use client'

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, Calculator, Wrench, Truck, Zap, Phone, ArrowRight, BadgeCheck } from "lucide-react";

const steps = [
  { num: "01", title: "Anfrage senden", time: "2 Min", icon: Target, desc: "CAD-Datei, Skizze oder Produktbeschreibung – und Ihren Messetermin. Kein 3D-Modell? Wir erstellen es nach Foto oder Zeichnung. Antwort garantiert am selben Tag." },
  { num: "02", title: "Festpreis in 6 Stunden", time: "< 6h", icon: Calculator, desc: "Verbindliches Angebot mit Visualisierung, Materialempfehlung und Zeitplan. Keine versteckten Kosten. Kostenlos und unverbindlich." },
  { num: "03", title: "Fertigung & Qualitätskontrolle", time: "1–14 Tage", icon: Wrench, desc: "Druck, Nachbearbeitung, Farbgebung nach Ihrem CI. Zwischenfoto zur Freigabe. Jedes Modell durchläuft 3-Punkt-Qualitätskontrolle." },
  { num: "04", title: "Lieferung direkt zur Messe", time: "1–3 Tage", icon: Truck, desc: "Bruchsichere Individualverpackung mit Schaumstoff-Inlay. Tracking und Versicherung inklusive. Direkte Standlieferung mit Hallennummer." },
];

const checklist = [
  { item: "3D-Datei oder Skizze", sub: "STL, STEP – oder ein Foto" },
  { item: "Maßstab & Größe", sub: "Wie viel Platz am Stand?" },
  { item: "Farbwunsch", sub: "RAL, Pantone oder Hex" },
  { item: "Messetermin & Ort", sub: "Wir planen rückwärts" },
  { item: "Lieferadresse", sub: "Halle + Standnummer" },
  { item: "Transportbox?", sub: "Einweg oder Mehrweg" },
];

interface Props {
  regionName?: string;
  deliveryTime?: string;
}

const MesseTimelineSection = ({ regionName, deliveryTime }: Props) => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ihr Weg zum Exponat</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">4 Schritte. 1 Ziel: Pünktlich auf der Messe.</h2>
          <p className="text-muted-foreground max-w-lg">Idealerweise 4–6 Wochen vor der Messe{regionName ? ` in ${regionName}` : ''}. Aber auch Last-Minute ist unser Ding.</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

              {steps.map((s, i) => (
                <AnimatedSection key={s.num} animation="slide-up" delay={i * 120}>
                  <div className="flex gap-5 mb-8 relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg tracking-tight">{s.title}</h3>
                        <span className="mono text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{s.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Express banner */}
            <AnimatedSection animation="fade-in" delay={500}>
              <div className="border-2 border-primary/20 rounded-2xl p-5 bg-primary/[0.02] flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm">
                  <strong className="text-primary">Express: Freitag bestellt → Montag auf der Messe.</strong>
                  <span className="text-muted-foreground"> Über-Nacht-Fertigung, +50% Aufpreis. </span>
                  <a href="tel:+436765517197" className="text-primary font-semibold hover:underline inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" />+43 676 5517197</a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Checklist */}
          <AnimatedSection animation="slide-up" delay={300}>
            <div className="border-2 border-primary/20 rounded-2xl p-6 md:p-8 bg-primary/[0.02] h-fit lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <p className="text-lg font-bold">Ihre Checkliste</p>
              </div>
              {checklist.map((c, i) => (
                <div key={i} className="flex gap-3 mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="mono text-[10px] font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{c.item}</p>
                    <p className="text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-6 rounded-full py-6" asChild>
                <Link href="#kontakt">Anfrage starten <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default MesseTimelineSection;
