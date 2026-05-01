'use client'

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Presentation, Wrench } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const showcases = [
  {
    num: "01",
    industry: "Architektur",
    title: "Wettbewerbsmodell 1:100 in 18 Stunden",
    desc: "Ein Wiener Architekturbüro benötigte ein maßstabsgetreues Wettbewerbsmodell über Nacht. 3 Gebäude, 2 Brücken, Geländemodellierung – alles in 18h gedruckt und geliefert.",
    stats: [
      { val: "18h", label: "Lieferzeit" },
      { val: "1:100", label: "Maßstab" },
      { val: "3", label: "Gebäude" },
    ],
    link: "/architekturmodelle",
    icon: Building2,
  },
  {
    num: "02",
    industry: "Messe",
    title: "47 Exponate für die VIENNA AUTOSHOW",
    desc: "Messeaussteller brauchte 47 identische Produktmodelle in Weiß, lackiert und nummeriert. Lieferung 48h vor Messestart – alle 47 Stück identisch.",
    stats: [
      { val: "47", label: "Stück" },
      { val: "48h", label: "vor Messe" },
      { val: "100%", label: "identisch" },
    ],
    link: "/messemodelle",
    icon: Presentation,
  },
  {
    num: "03",
    industry: "Produktentwicklung",
    title: "Prototyp-Serie: 12 Iterationen in 3 Wochen",
    desc: "Ein Startup testete 12 Gehäuse-Varianten für ihr IoT-Device. Jede Iteration in unter 24h gedruckt, getestet, angepasst. Vom Konzept zum finalen Design in 3 Wochen.",
    stats: [
      { val: "12", label: "Iterationen" },
      { val: "<24h", label: "pro Iteration" },
      { val: "3", label: "Wochen gesamt" },
    ],
    link: "/rapid-prototyping",
    icon: Wrench,
  },
];

const BranchenShowcase = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % showcases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [visible]);

  const current = showcases[active];
  const Icon = current.icon;

  return (
    <section ref={ref} className="py-32 bg-muted/30 relative" aria-label="Branchen-Showcase">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Case Studies</p>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-16">
              Echte Projekte,<br />
              <span className="text-gradient">echte Ergebnisse.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Tab selectors */}
            <div className="lg:col-span-2 space-y-2">
              {showcases.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                    active === i
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                  data-cursor="View"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{s.num}</span>
                    <span className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">{s.industry}</span>
                  </div>
                  <p className={`font-bold text-sm tracking-tight transition-colors ${active === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.title}
                  </p>
                  {/* Progress bar */}
                  {active === i && (
                    <div className="mt-3 h-0.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-reveal-line" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Right: Active showcase content */}
            <div className="lg:col-span-3">
              <div
                key={active}
                className="rounded-3xl border-2 border-foreground p-10 md:p-14"
                style={{
                  animation: "fade-in 0.5s ease-out",
                }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{current.industry}</p>
                    <p className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Case Study {current.num}</p>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {current.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  {current.desc}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                  {current.stats.map(({ val, label }) => (
                    <div key={label} className="text-center p-4 rounded-2xl bg-muted/50">
                      <p className="mono text-2xl md:text-3xl font-bold text-foreground leading-none">{val}</p>
                      <p className="mono text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-2">{label}</p>
                    </div>
                  ))}
                </div>

                <Link href={current.link}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all"
                >
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchenShowcase;
