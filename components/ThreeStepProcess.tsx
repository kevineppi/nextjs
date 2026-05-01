'use client'

import { useEffect, useRef, useState } from "react";
import { Upload, FileCheck, Package, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  { icon: Upload, num: "01", title: "Anfrage senden", desc: "CAD-Datei, Skizze oder Beschreibung – wir brauchen nur eine grobe Idee.", time: "2 Min" },
  { icon: FileCheck, num: "02", title: "Festpreis erhalten", desc: "Transparentes Angebot in unter 6 Stunden. Kostenlos und unverbindlich.", time: "< 6h" },
  { icon: Package, num: "03", title: "Modell erhalten", desc: "Express 24h oder Standard 5–7 Tage. Versandkostenfrei ab €100.", time: "Ab 24h" },
];

const ThreeStepProcess = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 bg-foreground relative overflow-hidden" aria-label="So funktioniert 3D-Druck bei ekdruck">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className="mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ablauf</p>
            <h2 className="text-5xl md:text-7xl font-bold text-background leading-[0.95] tracking-[-0.04em]">
              3 Schritte zum<br />
              <span className="text-primary">fertigen Modell.</span>
            </h2>
          </div>

          {/* Steps - horizontal on desktop */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s`,
                  }}
                >
                  <div className="border border-background/10 rounded-3xl p-8 md:p-10 h-full hover:border-primary/30 hover:bg-background/[0.04] transition-all duration-500">
                    {/* Number */}
                    <p className="mono text-6xl md:text-7xl font-bold text-background/[0.08] leading-none mb-6">{step.num}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{step.time}</span>
                    </div>
                    <h3 className="font-bold text-background text-xl mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-background/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA row */}
          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 0.8s",
            }}
          >
            <Button asChild variant="cta" size="lg" className="rounded-full px-10 py-7 group text-base">
              <Link href="/kontakt">
                Jetzt starten <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 py-7 bg-background/10 border border-background/20 text-background hover:bg-background/20 font-semibold text-base">
              <Link href="/kostenrechner">
                <Calculator className="mr-2 w-4 h-4" /> Kostenrechner
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
