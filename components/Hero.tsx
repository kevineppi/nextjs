'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import MarqueeTicker from "@/components/MarqueeTicker";

const useTypewriter = (text: string, delay: number, speed = 60) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return { displayed, done: displayed.length === text.length };
};

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { setLoaded(true); }, []);

  // Parallax scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const line1 = useTypewriter("Architektur- &", 600, 55);
  const line2 = useTypewriter("Messemodelle.", 600 + 14 * 55 + 200, 65);

  const t = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  const parallax = (factor: number) => ({
    transform: `translateY(${scrollY * factor}px)`,
  });

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-end bg-background overflow-hidden pt-24">
      {/* Background grid pattern — with parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          ...parallax(0.05),
          backgroundImage: `
            linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
        {/* Accent blobs — with deeper parallax */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]" style={parallax(-0.08)} />
        <div className="absolute bottom-[30%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px]" style={parallax(-0.12)} />
      </div>

      {/* Corner label */}
      <div className="absolute top-24 right-6 md:right-12 z-10" style={t(0.6)}>
        <div className="mono text-[10px] font-bold tracking-[0.3em] text-foreground/30 uppercase text-right leading-relaxed">
          3D-Druck<br />Service<br />Österreich
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Sticker badge */}
          <div style={t(0.1)} className="mb-8">
            <div className="sticker border-primary text-primary w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Angebot in 6 Stunden
            </div>
          </div>

          {/* Massive headline — typewriter */}
          <div style={t(0.2)}>
            <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-bold leading-[0.9] tracking-[-0.05em] mb-4">
              <span className="block">
                {line1.displayed}
                {!line1.done && <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse align-baseline" />}
              </span>
              <span className="block text-gradient">
                {line2.displayed}
                {line1.done && !line2.done && <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse align-baseline" />}
              </span>
            </h1>
          </div>

          {/* Subline + CTAs */}
          <div style={t(0.4)} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-8 mb-12">
            <div className="max-w-md">
              <p className="text-muted-foreground text-base leading-relaxed">
                Österreichs Spezialist für Architektur- & Messemodelle aus dem 3D-Druck.
                Express in 24h · AT-weite Lieferung · persönliche Antwort in 6 Stunden.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" className="group text-base px-10 py-7 rounded-full" asChild>
                  <Link href="/kontakt">
                    Angebot anfordern
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" className="group text-base px-8 py-7 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold" asChild>
                  <Link href="/kostenrechner">
                    <Calculator className="mr-2 w-4 h-4" />
                    Preis berechnen
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Für Architekturbüros:{" "}
                <Link href="/architekturmodelle-abo" className="text-primary hover:underline font-semibold">
                  Flatrate ab €199/Mon. · Erstes Modell kostenlos →
                </Link>
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={t(0.5)} className="flex items-center gap-10 lg:gap-16 mb-12 flex-wrap">
            {[
              { val: "5.0", label: "Google Rating" },
              { val: "24h", label: "Express" },
              { val: "€20", label: "Ab Preis" },
              { val: "31", label: "Reviews" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-bold text-foreground leading-none tracking-tight mono">{val}</p>
                <p className="mono text-[10px] text-foreground/30 mt-2 font-bold uppercase tracking-[0.2em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10 border-t border-border py-4 bg-background">
        <MarqueeTicker />
      </div>
    </section>
  );
};

export default Hero;
