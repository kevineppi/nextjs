'use client'

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import StickyCTA from "@/components/landing/StickyCTA";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
// 2026-06-02: OrganizationSchema, StructuredData & AggregateRatingSchema entfernt —
// orgSchema() in lib/seo.ts (eingebunden via app/layout.tsx) ist jetzt die einzige Quelle
// für LocalBusiness + Organization + AggregateRating + Reviews. Dadurch reduzieren sich
// die LocalBusiness-Duplikate von 5 auf 1 im Rich-Results-Test.
import SEOHead from "@/components/SEOHead";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TrustBadges from "@/components/TrustBadges";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import AnimatedSection from "@/components/AnimatedSection";
import ContextualLinks from "@/components/ContextualLinks";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextReveal from "@/components/TextReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {
  Building2, Presentation, Users,
  Check, X, Clock, Repeat2,
  TrendingDown, ArrowRight, Zap, Leaf, Star,
  ChevronRight, Phone,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticCard from "@/components/MagneticCard";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Österreich ★5,0 – Architekturmodelle & Messemodelle | ekdruck"
      description="Österreichs Spezialist für Architekturmodelle & Messemodelle. ★ 5,0 Google (31 Bewertungen) · Angebot in 6h · Express 24h · ab €20 · Flatrate für Architekturbüros ab €199/Mon."
      keywords="3d druck, 3d druck österreich, 3d druck service, 3d druck firma, 3d druck anbieter, 3d druck dienstleister, 3d druck oberösterreich, 3d druck prototypen"
      path="/"
    />
    {/* Site-wide LocalBusiness + Organization + Reviews + AggregateRating sind jetzt
        in app/layout.tsx via orgSchema() aus lib/seo.ts — hier nur noch FAQ + Breadcrumb. */}
    <FAQSchema faqs={[
      { question: "Was kostet 3D-Druck bei ekdruck?", answer: "Ab €20 pro Modell. Der Preis hängt von Material, Volumen und Qualitätsstufe ab. Festpreisangebot in unter 6 Stunden." },
      { question: "Wie schnell erhalte ich mein 3D-Modell?", answer: "Standard: 3–5 Werktage. Express: 24–48 Stunden. Versandkostenfrei ab €100." },
      { question: "Welche Dateiformate werden akzeptiert?", answer: "STL, OBJ, STEP, 3MF, ArchiCAD, Revit, SolidWorks. Keine Datei? Wir modellieren kostenlos nach Skizze." },
      { question: "Für welche Branchen eignet sich ekdruck?", answer: "Architekten, Messeaussteller, Produktentwickler und Firmenkunden mit B2B-Konditionen." },
      { question: "Warum österreichisches Filament?", answer: "Recycelte Industrieabfälle, Ökostrom, 80% weniger CO₂. Extrusionstoleranz ±0,02 mm." },
      { question: "Welche Nachbearbeitungs-Optionen gibt es?", answer: "Schleifen, Grundierung, Lackierung RAL/Pantone, Aceton-Dampfglättung, Segmentierung." },
    ]} />
    <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />

    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* ══ Customer-Logo-Strip direkt unter Hero — Trust-Signal ══ */}
      <CustomerLogoStrip />

      {/* ══════════════════════════════════════════════════════
          ZIELGRUPPEN — 3 gleichwertige Säulen (Funnel-Stufe: INTEREST)
          User entscheidet hier zu welcher Page er weiter will.
         ══════════════════════════════════════════════════════ */}
      <section id="zielgruppen" className="py-24 md:py-32 bg-background relative" aria-label="3D-Druck Lösungen für Architekten, Messeaussteller, Industriekunden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <AnimatedSection animation="fade-in" className="mb-14 md:mb-16 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Für wen wir drucken</p>
              <TextReveal
                text="Drei Welten. Drei Lösungen."
                className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5"
              />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Architekten, Industrie-Messeaussteller und Firmenkunden — jede Gruppe hat andere Anforderungen,
                andere Maßstäbe, andere Lead-Times. Wählen Sie Ihre Welt:
              </p>
            </AnimatedSection>

            {/* 3 gleichwertige Säulen */}
            <div className="grid md:grid-cols-3 gap-4">

              {/* Säule 1: Architekten */}
              <AnimatedSection animation="slide-up" delay={0}>
                <Link href="/architekturmodelle" className="group block h-full">
                  <MagneticCard className="h-full rounded-3xl border-2 border-border hover:border-primary/40 p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-6 right-6">
                      <Building2 className="w-10 h-10 text-primary/15" />
                    </div>
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Säule 01 · Architekten &amp; Planer</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.02em] group-hover:text-primary transition-colors">
                      Architektur­modelle 1:50–1:500
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Wettbewerbsmodelle, Bauherrenpräsentationen, Stadtmodelle. Direkt-Import aus ArchiCAD, Revit, Rhino, SketchUp.
                      Express-Lieferung 24h möglich.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["1:50–1:500", "CAD-Import", "Express 24h", "ab €20"].map(t =>
                        <span key={t} className="mono text-[10px] font-bold text-foreground/60 uppercase tracking-wider bg-muted px-2.5 py-1 rounded-full">{t}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 pt-4 border-t border-border">
                      <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                        Zur Architektur-Lösung <ArrowRight className="w-4 h-4" />
                      </span>
                      <Link href="/architekturmodelle-abo" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        oder: Flatrate für Büros ab €199/Mon →
                      </Link>
                    </div>
                  </MagneticCard>
                </Link>
              </AnimatedSection>

              {/* Säule 2: Messeaussteller / Industrie */}
              <AnimatedSection animation="slide-up" delay={100}>
                <Link href="/branchen" className="group block h-full">
                  <MagneticCard className="h-full rounded-3xl bg-foreground p-8 md:p-10 relative overflow-hidden
                    border-2 border-foreground hover:border-primary transition-all duration-500 group-hover:-translate-y-1" glowColor="hsl(var(--primary) / 0.15)">
                    <div className="absolute top-6 right-6">
                      <Presentation className="w-10 h-10 text-primary/30" />
                    </div>
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Säule 02 · Messeaussteller &amp; Industrie</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-background mb-4 tracking-[-0.02em] group-hover:text-primary transition-colors">
                      Messemodelle für 6 Branchen
                    </h3>
                    <p className="text-background/60 leading-relaxed mb-6 text-sm">
                      Maschinenbau, Schiffbau, Energietechnik, Automotive, Anlagenbau, Elektrotechnik.
                      8-Tonnen-Maschine als Tisch-Exponat in 24-48h, segmentiert, bruchsicher, Versand DACH-weit.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["6 Branchen", "Express 24h", "Bis 2m+", "ab €30"].map(t =>
                        <span key={t} className="mono text-[10px] font-bold text-background/40 uppercase tracking-wider">{t}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 pt-4 border-t border-background/10">
                      <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                        Zu Ihrer Branche <ArrowRight className="w-4 h-4" />
                      </span>
                      <Link href="/messemodelle" className="text-xs text-background/50 hover:text-primary transition-colors">
                        oder: Messemodelle allgemein →
                      </Link>
                    </div>
                  </MagneticCard>
                </Link>
              </AnimatedSection>

              {/* Säule 3: B2B Firmenkunden */}
              <AnimatedSection animation="slide-up" delay={200}>
                <Link href="/firmenkunden" className="group block h-full">
                  <MagneticCard className="h-full rounded-3xl border-2 border-border hover:border-primary/40 p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute top-6 right-6">
                      <Users className="w-10 h-10 text-primary/15" />
                    </div>
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Säule 03 · B2B-Firmenkunden</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.02em] group-hover:text-primary transition-colors">
                      Rahmenverträge, NDA, Mengenrabatt
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Funktionsmuster, Vorserien, Klein-Serien 5-5.000 Stück. Zahlungsziel 30 Tage, NDA-Workflow,
                      Stammkunden-Rabatte ab 5 Stück.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["NDA-fähig", "30 Tage Ziel", "Rabatt ab 5 Stk", "Rahmenvertrag"].map(t =>
                        <span key={t} className="mono text-[10px] font-bold text-foreground/60 uppercase tracking-wider bg-muted px-2.5 py-1 rounded-full">{t}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 pt-4 border-t border-border">
                      <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                        Zu B2B-Konditionen <ArrowRight className="w-4 h-4" />
                      </span>
                      <Link href="/einzelanfertigungen" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                        oder: Einzelanfertigung ab 1 Stück →
                      </Link>
                    </div>
                  </MagneticCard>
                </Link>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ARCHITEKTUR-FLATRATE CALLOUT — Höchster LTV, eigene Sektion
         ══════════════════════════════════════════════════════ */}
      <section className="bg-primary/[0.04] border-y border-border py-12" aria-label="Architekturmodell Flatrate">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Link href="/architekturmodelle-abo" className="group block">
              <div className="rounded-3xl border-2 border-primary/20 hover:border-primary/60 bg-background p-8 md:p-12 transition-all duration-500 group-hover:-translate-y-0.5 overflow-hidden relative">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="relative grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                        <Zap className="w-3 h-3" /> NEU – Für Architekturbüros
                      </span>
                      <span className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">ab €199/Monat</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-[-0.03em] mb-3 group-hover:text-primary transition-colors">
                      Architekturmodelle im Fixpreis-Abo –<br />
                      <span className="text-primary">Erstes Modell kostenlos testen</span>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                      Schluss mit Einzelanfragen und unkalkulierbaren Kosten. Die ekdruck Büro-Flatrate: bis zu 15 Modelle/Monat, 48h-Lieferung, persönlicher Ansprechpartner – monatlich kündbar.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Starter", price: "€199/Monat", detail: "bis 3 Modelle" },
                      { label: "Professional", price: "€349/Monat", detail: "bis 7 Modelle · Beliebteste Wahl", highlight: true },
                      { label: "Studio", price: "€549/Monat", detail: "bis 15 Modelle" },
                    ].map(({ label, price, detail, highlight }) => (
                      <div key={label} className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${highlight ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                        <span className="font-bold">{label}</span>
                        <div className="text-right">
                          <span className="font-bold">{price}</span>
                          <span className={`block text-xs ${highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{detail}</span>
                        </div>
                      </div>
                    ))}
                    <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all mt-2">
                      Flatrate entdecken <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PLAN — 3 SCHRITTE (Funnel-Stufe: PLAN — "So läuft's ab")
         ══════════════════════════════════════════════════════ */}
      <ThreeStepProcess />

      {/* ══════════════════════════════════════════════════════
          WARUM EKDRUCK — Big numbers + comparison
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-background relative" aria-label="Vorteile 3D-Druck">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Warum ekdruck?</p>
              <TextReveal
                text="Zahlen, die überzeugen."
                className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-16"
              />
              {/* Giant stats with animated counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { val: "95%", label: "günstiger als Handmodellbau" },
                  { val: "24h", label: "Express österreichweit" },
                  { val: "0.1mm", label: "Schichtauflösung" },
                  { val: "5.0", label: "Google Rating" },
                ].map(({ val, label }) =>
                  <div key={val}>
                    <AnimatedCounter target={val} className="mono text-5xl md:text-7xl font-bold text-foreground leading-none tracking-tighter" />
                    <p className="text-sm text-muted-foreground mt-3 max-w-[160px]">{label}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Advantages */}
            <AnimatedSection animation="slide-up" delay={100} className="grid md:grid-cols-2 gap-3 mb-16">
              {[
                { icon: TrendingDown, title: "Keine Werkzeugkosten", desc: "Spritzguss ab €10.000. Bei ekdruck ab €20." },
                { icon: Clock, title: "10x schneller", desc: "Handmodellbau: 1–4 Wochen. ekdruck Express: 24h." },
                { icon: Repeat2, title: "Digital reproduzierbar", desc: "Jede Kopie identisch. Korrekturen = Dateiänderung." },
                { icon: Leaf, title: "Nachhaltig aus Österreich", desc: "Filament aus Industrieabfällen, 80% weniger CO₂." },
              ].map(({ icon: Icon, title, desc }) =>
                <div key={title} className="flex gap-4 p-6 rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1 tracking-tight">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              )}
            </AnimatedSection>

            {/* Comparison table */}
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="rounded-3xl overflow-hidden border-2 border-foreground">
                <div className="grid grid-cols-3 bg-foreground">
                  <div className="p-5 mono text-[10px] font-bold text-background/40 uppercase tracking-[0.2em]">Kriterium</div>
                  <div className="p-5 font-bold text-primary flex items-center justify-center gap-2 text-sm border-x border-background/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> ekdruck
                  </div>
                  <div className="p-5 mono text-[10px] font-bold text-background/40 uppercase tracking-[0.2em] text-center">Traditionell</div>
                </div>
                {[
                  { label: "Kosten", good: "ab €20", bad: "€200–€10.000+" },
                  { label: "Lieferzeit", good: "24h Express", bad: "1–4 Wochen" },
                  { label: "Geometrien", good: "Unbegrenzt", bad: "Stark limitiert" },
                  { label: "Reproduzierbarkeit", good: "1:1 identisch", bad: "Variiert" },
                ].map(({ label, good, bad }) =>
                  <div key={label} className="grid grid-cols-3 border-t border-border hover:bg-muted/30 transition-colors">
                    <div className="p-5 font-medium text-sm">{label}</div>
                    <div className="p-5 text-center border-x border-border/30">
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                        <Check className="w-4 h-4" />{good}
                      </span>
                    </div>
                    <div className="p-5 text-center">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm">
                        <X className="w-4 h-4 text-destructive/50" />{bad}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROOF — REFERENZEN (Funnel-Stufe: PROOF)
         ══════════════════════════════════════════════════════ */}
      <ReferencesTeaser />

      {/* ══════════════════════════════════════════════════════
          EDITORIAL — "Was 3D-Druck bei ek-druck konkret bedeutet"
          (2026-06-04 SEO-Pass: erhöht Content-Tiefe von 620 auf ~1.300 Wörter,
           hebt Hauptkeyword "3D-Druck Österreich" 4× natürlich, schafft 7 Internal-Links zu Service- und Branchen-Seiten)
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-background relative" aria-label="3D-Druck Österreich — Werkstatt, Materialien, Branchen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was wir konkret tun</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-10">
                3D-Druck Österreich.<br/>
                <span className="text-muted-foreground/70">Aus Gunskirchen für ganz DACH.</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
              <AnimatedSection animation="slide-up" delay={0.1}>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-[-0.02em]">Werkstatt &amp; Maschinenpark.</h3>
                <p className="text-base leading-[1.85] text-foreground/85 mb-4">
                  Unser <strong>3D-Druck Service in Österreich</strong> läuft auf drei industriellen FDM-Druckern: zwei <strong>Bambulab P1S</strong> für schnelle Standard-Aufträge und ein <strong>Prusa XL 5-Toolhead</strong> für Multi-Material-Drucke bis 360×360×360&nbsp;mm. Maschinen, Material und Service kontrollieren wir komplett selbst — kein White-Label, kein Sublieferant, kein „wir geben das weiter".
                </p>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Werkstatt in Gunskirchen, Oberösterreich. Anrufe nimmt <Link href="/ueber-uns" className="text-primary hover:underline font-semibold">Kevin Eppensteiner</Link> persönlich ab. Anfragen beantworten wir innerhalb von 6 Stunden mit Festpreis. Lieferung in ganz Österreich in 24–48&nbsp;Stunden, nach Deutschland 2–4 Werktage, in die Schweiz mit DHL-Express-Zollabwicklung.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-[-0.02em]">Acht Materialien für jeden Einsatz.</h3>
                <p className="text-base leading-[1.85] text-foreground/85 mb-4">
                  <strong>PLA</strong> für Anschauungsmodelle, <strong>PETG</strong> für Funktionsteile, <strong>ASA</strong> für UV-beständige Außenanwendungen, <strong>ABS</strong> mit Aceton-Glättung für Spritzguss-Optik, <strong>TPU</strong> für flexible Dichtungen, <strong>PETG-CF</strong> und <strong>PA-CF</strong> mit Carbonfaser für mechanisch belastbare Bauteile sowie <strong>SLA-Resin</strong> für hochfeine Detailmodelle und Schmuckguss.
                </p>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Welches Material wann — ehrlich beraten, nicht verkauft. Wenn ein Wunsch nicht zum Bauteil passt, weisen wir vor dem Auftrag auf die bessere Alternative hin. Der <Link href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">Detailvergleich aller Materialien</Link> zeigt Festigkeit, Temperaturverhalten und Preis pro Gramm.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
              <AnimatedSection animation="slide-up" delay={0.1}>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-[-0.02em]">Sechs Branchen, sechs Sprachen.</h3>
                <p className="text-base leading-[1.85] text-foreground/85 mb-4">
                  Ein Maschinenbau-Konstrukteur fragt anders als ein Bauträger, eine Werbeagentur anders als ein Anlagenbauer. Wir kennen die Spezifika für <Link href="/branchen/maschinenbau" className="text-primary hover:underline font-semibold">Maschinenbau</Link> (Messemodelle, Funktionsprototypen), <Link href="/branchen/schiffbau" className="text-primary hover:underline font-semibold">Schiffbau</Link> (Antriebs-Schnittmodelle), <Link href="/branchen/energietechnik" className="text-primary hover:underline font-semibold">Energietechnik</Link> (Schaltanlagen-Demonstrationen), <Link href="/branchen/anlagenbau" className="text-primary hover:underline font-semibold">Anlagenbau</Link>, <Link href="/branchen/automotive" className="text-primary hover:underline font-semibold">Automotive</Link> und <Link href="/branchen/elektrotechnik" className="text-primary hover:underline font-semibold">Elektrotechnik</Link>.
                </p>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Pro Branche eine eigene Seite mit echten Cases, Material-Empfehlungen für die jeweiligen Anforderungen, Brennstoffklassen-Hinweisen wo relevant und Mess-Toleranzen, die im Fertigungsalltag wirklich zählen — nicht nur auf dem Datenblatt.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-[-0.02em]">Was wir nicht machen.</h3>
                <p className="text-base leading-[1.85] text-foreground/85 mb-4">
                  Mechanisch lasttragende Bauteile mit Personensicherheits-Anspruch — dafür fehlt aktuell die WKO-Gewerbeberechtigung. Das ändert sich mit dem Maschinenbau-Studium-Abschluss. Spritzguss-Großserien über 5.000 Stück — ab dieser Stückzahl ist 3D-Druck wirtschaftlich nicht mehr sinnvoll, wir verweisen ehrlich an Spritzgießer.
                </p>
                <p className="text-base leading-[1.85] text-foreground/85">
                  Lieber „nein, das passt nicht zu uns" als ein halbgares Ja. Das ist keine Marketing-Phrase — wir lehnen ungefähr 10 % der Anfragen aktiv ab. Mehr Transparenz dazu auf <Link href="/ueber-uns" className="text-primary hover:underline font-semibold">Über uns</Link> und in der <Link href="/qualitaet" className="text-primary hover:underline font-semibold">Qualitäts-Selbstverpflichtung</Link>.
                </p>
              </AnimatedSection>
            </div>

            {/* CTA-Strip am Ende des Editorial-Blocks */}
            <AnimatedSection animation="fade-in" delay={0.3}>
              <div className="border-t border-border pt-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">Bereit?</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-[-0.02em]">3D-Druck Österreich — STL hoch, Preis in 60 Sekunden.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button size="lg" variant="cta" className="rounded-full px-8 py-7 font-semibold" asChild>
                    <Link href="/kostenrechner">3D-Druck-Preis berechnen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-7 font-semibold" asChild>
                    <Link href="/kontakt">Persönlich anfragen</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DECISION — PRICING-INDIKATOR + KOSTENRECHNER-CTA
          (Funnel-Stufe: DECISION — "Was kostet's")
         ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border" aria-label="Preise & Kostenrechner">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was kostet's</p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
                Zwei Wege zum Preis.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Wenn Sie das Modell schon konkret im Kopf haben — Sofort-Preis berechnen.
                Wenn Sie erst Orientierung wollen — Preisbeispiele aus echten Aufträgen.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Pfad 1: Kostenrechner — schnell, transaktional */}
              <AnimatedSection animation="slide-up">
                <Link href="/kostenrechner" className="group block h-full">
                  <div className="h-full rounded-3xl bg-background border-2 border-foreground p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                        <Calculator className="w-6 h-6" />
                      </div>
                      <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Pfad A · Sofort</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.02em] group-hover:text-primary transition-colors">
                      Preis in 60 Sekunden
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      STL hochladen, Material wählen, Richtpreis erhalten. Kostenlos, ohne Anmeldung,
                      ohne E-Mail. Anschließend Festpreis-Angebot in 6h.
                    </p>
                    <ul className="space-y-2 mb-8">
                      {["Multi-File-Upload", "8 Materialien", "Mengenrabatt ab 10 Stück"].map(t =>
                        <li key={t} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{t}</span>
                        </li>
                      )}
                    </ul>
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 font-bold text-sm group-hover:gap-4 transition-all">
                      STL hochladen <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>

              {/* Pfad 2: Preise-Seite — Orientierung */}
              <AnimatedSection animation="slide-up" delay={100}>
                <Link href="/preise" className="group block h-full">
                  <div className="h-full rounded-3xl border-2 border-border bg-background p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/40 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 text-foreground" />
                      </div>
                      <p className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Pfad B · Orientierung</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-[-0.02em] group-hover:text-primary transition-colors">
                      Preisbeispiele pro Projekt-Typ
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Was kostet ein Architekturmodell? Ein Messemodell? Ein Funktionsmuster?
                      Konkrete Preisbereiche, Treiber-Übersicht, Rabattstaffel.
                    </p>
                    <ul className="space-y-2 mb-8">
                      {["6 Projekt-Kategorien", "Realistische Bereiche", "Was treibt den Preis"].map(t =>
                        <li key={t} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-muted-foreground">{t}</span>
                        </li>
                      )}
                    </ul>
                    <span className="inline-flex items-center gap-2 border-2 border-foreground text-foreground rounded-full px-5 py-2.5 font-bold text-sm group-hover:gap-4 group-hover:bg-foreground group-hover:text-background transition-all">
                      Preise &amp; Beispiele <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOCIAL PROOF — TESTIMONIALS mit Quotes (K2)
          (Funnel-Stufe: TRUST-VERSTÄRKUNG nach Pricing)
         ══════════════════════════════════════════════════════ */}
      <TestimonialsSection
        limit={3}
        title="Stimmen aus echten Projekten."
        subtitle="Quotes aus dem letzten Jahr — direkt von Auftraggebern, anonymisiert wo nötig."
      />

      {/* Google-Reviews entfernt am 2026-05-31 — Trust kommt über Testimonials oben */}

      {/* ══════════════════════════════════════════════════════
          FAQ
         ══════════════════════════════════════════════════════ */}
      <section id="faq" className="py-32 bg-background relative" aria-label="Häufige Fragen zum 3D-Druck">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-in">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em] mb-5">
                  Häufige<br />Fragen.
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Nicht gefunden? Rufen Sie uns an.
                </p>
                <div className="space-y-1.5">
                  <p className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3">Ratgeber</p>
                  {[
                    { to: "/ratgeber/kosten-guide", label: "Kosten & Preise" },
                    { to: "/ratgeber/material-guide", label: "Materialien" },
                    { to: "/ratgeber/architekturmodell-guide", label: "Architekturmodell" },
                    { to: "/ratgeber/messemodell-guide", label: "Messemodell" },
                    { to: "/ratgeber/verfahrens-vergleich", label: "3D-Druck vs. Modellbau" },
                  ].map(({ to, label }) =>
                    <Link key={to} href={to} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" /> {label}
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-up" delay={100}>
                <Accordion type="single" collapsible className="space-y-2">
                  {[
                    { q: "Was kostet 3D-Druck bei ekdruck?", a: "Ab €20 pro Modell. Preis hängt von Material, Volumen und Qualitätsstufe ab. Festpreis in unter 6h.", link: { to: "/ratgeber/kosten-guide", text: "Preis-Ratgeber →" } },
                    { q: "Wie schnell bekomme ich mein Modell?", a: "Standard: 3–5 Werktage (versandkostenfrei ab €100). Express: 24–48h.", link: null },
                    { q: "Welche Dateiformate?", a: "STL, OBJ, STEP, 3MF, ArchiCAD, Revit, SolidWorks, Rhino, Fusion 360. Oder wir modellieren nach Skizze – kostenlos.", link: null },
                    { q: "Für welche Branchen?", a: "Architekten (1:50–1:500), Messeaussteller (Express 24h), Produktentwickler, Firmenkunden (NDA, Mengenrabatte, Rahmenverträge).", link: null },
                    { q: "Welche Nachbearbeitung?", a: "Schleifen, Grundierung, Lackierung RAL/Pantone, Aceton-Dampfglättung, Segmentierung. Manuelle QA.", link: null },
                    { q: "Warum österreichisches Filament?", a: "Recycelte Industrieabfälle, Ökostrom. 80% weniger CO₂. Toleranz ±0,02 mm.", link: { to: "/ratgeber/material-guide", text: "Material-Guide →" } },
                  ].map((item, i) =>
                    <AccordionItem key={i} value={`faq-${i}`}
                      className="border-2 border-border rounded-2xl px-6 hover:border-primary/30 transition-all data-[state=open]:border-primary/30">
                      <AccordionTrigger className="text-left font-bold hover:text-primary py-5 text-sm tracking-tight">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                        {item.a}{item.link && <> <Link href={item.link.to} className="text-primary font-bold hover:underline ml-1">{item.link.text}</Link></>}
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST
         ══════════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-border" aria-label="Vertrauen">
        <div className="container mx-auto px-4">
          <TrustBadges variant="full" />
        </div>
      </section>

      {/* "Welche Lösung passt zu Ihrem Projekt?" — komplett entfernt am 2026-05-31 (redundant mit Services-Übersicht) */}
      {false && (<ContextualLinks
        eyebrow="3D-Druck im Detail"
        heading="Welche Lösung passt zu Ihrem Projekt?"
        description="Ob Architekturmodell, Messeexponat oder Prototyp – jedes Projekt beginnt mit der richtigen Strategie. Hier finden Sie den direkten Einstieg."
        paragraphs={[
          {
            title: "Sofort den Preis berechnen",
            parts: [
              {
                before: "Sie wissen bereits, was Sie brauchen? Mit unserem ",
                anchor: "3D-Druck Kostenrechner",
                href: "/kostenrechner",
                after: " ermitteln Sie in unter 60 Sekunden den Richtpreis Ihres Modells. STL-Datei hochladen, Material wählen, Preisindikation erhalten – ohne Anmeldung. Anschließend können Sie über das integrierte Formular direkt eine ",
              },
              {
                anchor: "verbindliche 3D-Druck Anfrage",
                href: "/kontakt",
                after: " stellen.",
              },
            ],
          },
          {
            title: "Für Architekten und Planungsbüros",
            parts: [
              {
                before: "Wir fertigen ",
                anchor: "Architekturmodelle im Maßstab 1:50 bis 1:500",
                href: "/architekturmodelle",
                after: " für Wettbewerbe, Baueinreichungen und Kundenpräsentationen. Direkter CAD-Import aus ArchiCAD, Revit und SolidWorks. Speziell in ",
              },
              {
                anchor: "Wien",
                href: "/3d-druck-wien",
                after: ", ",
              },
              {
                anchor: "Graz",
                href: "/3d-druck-steiermark",
                after: " und ",
              },
              {
                anchor: "Linz",
                href: "/3d-druck-oberoesterreich",
                after: " betreuen wir zahlreiche Architekturbüros mit Express-Lieferung in 24 Stunden.",
              },
            ],
          },
          {
            title: "Für Messeaussteller und Eventagenturen",
            parts: [
              {
                before: "Last-Minute vor der Messe? Unsere ",
                anchor: "Messemodelle und Exponate",
                href: "/messemodelle",
                after: " sind in 24–48 Stunden fertig – inklusive Versand österreichweit. Auch für ",
              },
              {
                anchor: "Rapid Prototyping",
                href: "/rapid-prototyping",
                after: " im Designprozess die schnellste Lösung am Markt.",
              },
            ],
          },
          {
            title: "Für Unternehmen und B2B",
            parts: [
              {
                before: "Als ",
                anchor: "B2B-Partner für Firmenkunden",
                href: "/firmenkunden",
                after: " bieten wir Mengenrabatte ab 5 Stück, NDA möglich, NDA-fähige Projektabwicklung und persönliche Ansprechpartner. Wählen Sie aus über zehn ",
              },
              {
                anchor: "professionellen 3D-Druck Materialien",
                href: "/3d-druck-materialien",
                after: " – von PLA über PETG bis Carbon-PA.",
              },
            ],
          },
        ]}
        actions={[
          { label: "Preis online berechnen", href: "/kostenrechner", description: "STL hochladen → Richtpreis in 60 Sekunden" },
          { label: "B2B-Konditionen anfragen", href: "/firmenkunden", description: "Rahmenverträge, Rabatte, NDA, persönlicher Ansprechpartner" },
          { label: "Architekturmodelle ansehen", href: "/architekturmodelle", description: "Maßstab 1:50–1:500 für Wettbewerb & Präsentation" },
          { label: "Express für Messen", href: "/messemodelle", description: "Modell in 24–48h für Wien, München, Hannover" },
        ]}
        variant="muted"
      />)}

      {/* Regionale-Links-Sektion entfernt am 2026-05-31 */}
      {false && (<section className="py-20 bg-background relative" aria-label="3D-Druck Standorte">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">
              3D-Druck für <span className="text-primary">ganz Österreich & Deutschland</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Standort Gunskirchen (OÖ) – Express österreichweit 24–48h, Deutschland 2–4 Tage.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Städte", links: [
                { n: "Wien", u: "/3d-druck-wien" }, { n: "Linz", u: "/3d-druck-oberoesterreich" }, { n: "Graz", u: "/3d-druck-steiermark" },
                { n: "Salzburg", u: "/3d-druck-salzburg" }, { n: "Innsbruck", u: "/3d-druck-vorarlberg" }, { n: "Klagenfurt", u: "/3d-druck-kaernten" },
                { n: "Wels", u: "/3d-druck-oberoesterreich" }, { n: "St. Pölten", u: "/3d-druck-niederoesterreich" },
              ]},
              { title: "Bundesländer", links: [
                { n: "Oberösterreich", u: "/3d-druck-oberoesterreich" }, { n: "Niederösterreich", u: "/3d-druck-niederoesterreich" },
                { n: "Steiermark", u: "/3d-druck-steiermark" }, { n: "Kärnten", u: "/3d-druck-kaernten" },
                { n: "Vorarlberg", u: "/3d-druck-vorarlberg" }, { n: "Burgenland", u: "/3d-druck-burgenland" },
              ]},
              { title: "Deutschland", links: [
                { n: "München", u: "/messemodelle/muenchen" }, { n: "Stuttgart", u: "/messemodelle/stuttgart" },
                { n: "Nürnberg", u: "/messemodelle/nuernberg" }, { n: "Frankfurt", u: "/messemodelle/frankfurt" },
              ]},
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {links.map(({ n, u }) =>
                    <Link key={u} href={u} onClick={() => window.scrollTo(0, 0)}
                      className="border-2 border-border hover:border-primary/30 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-all duration-200 font-medium hover:-translate-y-0.5">
                      {n}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* ══════════════════════════════════════════════════════
          ACTION — FINALER CTA mit 2-Pfad-Logik
          (Funnel-Stufe: ACTION — klare Entscheidungs-Hilfe)
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-foreground relative overflow-hidden" aria-label="Jetzt anfragen">
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="scale-in">
            <div className="max-w-5xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Let's go</p>
              <h2 className="text-5xl md:text-8xl font-bold text-background leading-[0.9] tracking-[-0.04em] mb-4">
                Bereit für Ihr<br />nächstes Modell<span className="text-primary">?</span>
              </h2>
              <p className="text-background/50 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Zwei Wege — Sie entscheiden, welcher passt. Beide landen direkt beim Inhaber.
              </p>

              {/* 2-Pfad-Logik klar getrennt */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto text-left">
                {/* Pfad A: schnell + transaktional */}
                <Link href="/kostenrechner" className="group block">
                  <div className="bg-primary text-primary-foreground rounded-3xl p-7 hover:opacity-95 hover:-translate-y-0.5 transition-all">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.25em] opacity-80 mb-3">Pfad A · schnell</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                      STL hochladen → Preis sofort
                    </h3>
                    <p className="text-sm opacity-90 mb-5 leading-relaxed">
                      Wenn das Modell schon klar ist und Sie einen Richtpreis brauchen.
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                      <Calculator className="w-4 h-4" />
                      Zum Kostenrechner
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                {/* Pfad B: persönlich + Beratung */}
                <Link href="/kontakt" className="group block">
                  <div className="bg-background/10 border-2 border-background/20 text-background rounded-3xl p-7 hover:bg-background/15 hover:border-background/30 hover:-translate-y-0.5 transition-all">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-3">Pfad B · persönlich</p>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                      Kurz besprechen — Festpreis in 6h
                    </h3>
                    <p className="text-sm text-background/70 mb-5 leading-relaxed">
                      Wenn Sie noch unsicher sind oder NDA/Sonderfall haben — rufen Sie an.
                    </p>
                    <span className="inline-flex items-center gap-2 font-bold text-sm text-background group-hover:gap-4 transition-all">
                      <Phone className="w-4 h-4" />
                      Anrufen oder Anfrage
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>

              <p className="mono text-[10px] text-background/30 uppercase tracking-[0.2em]">
                Keine Mindestbestellung · Express 24h möglich · Made in Austria
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-10 mt-16 pt-10 border-t border-background/10">
                {[
                  { val: "31", label: "Google Reviews" },
                  { val: "6h", label: "Angebots-Garantie" },
                  { val: "24h", label: "Express" },
                  { val: "€20", label: "ab Preis" },
                ].map(({ val, label }) =>
                  <div key={label} className="text-center">
                    <p className="mono text-3xl font-bold text-primary leading-none tracking-tight">{val}</p>
                    <p className="mono text-[9px] text-background/50 mt-2 font-bold uppercase tracking-[0.2em]">{label}</p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <StickyCTA />
      <ExitIntentPopup />
    </div>
  </>;
};

export default Index;
