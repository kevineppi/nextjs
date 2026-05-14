'use client'

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import StickyCTA from "@/components/landing/StickyCTA";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import OrganizationSchema from "@/components/OrganizationSchema";
import FAQSchema from "@/components/FAQSchema";
import AggregateRatingSchema from "@/components/AggregateRatingSchema";
import SEOHead from "@/components/SEOHead";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TrustBadges from "@/components/TrustBadges";
import TrustBarSocialProof from "@/components/TrustBarSocialProof";
import QuickContactBar from "@/components/QuickContactBar";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import AnimatedSection from "@/components/AnimatedSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import BranchenShowcase from "@/components/BranchenShowcase";
import ContextualLinks from "@/components/ContextualLinks";
import LiveProductionBanner from "@/components/LiveProductionBanner";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextReveal from "@/components/TextReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {
  Building2, Presentation, Users,
  Check, X, Clock, Repeat2, Layers,
  TrendingDown, ArrowRight, Zap, Leaf, Star,
  ChevronRight, Phone,
  Award, Wrench, Calculator, MapPin, FlaskConical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticCard from "@/components/MagneticCard";

const Index = () => {
  return <>
    <SEOHead
      title="3D-Druck Österreich ★5,0 – Architekturmodelle & Messemodelle | ekdruck"
      description="Österreichs Spezialist für Architekturmodelle & Messemodelle. ★ 5,0 Google (31 Bewertungen) · Angebot in 6 h · Express 24 h · ab €20 · Flatrate für Architekturbüros ab €199/Mon."
      keywords="3d druck, 3d druck österreich, 3d druck service, 3d druck firma, 3d druck anbieter, 3d druck dienstleister, 3d druck oberösterreich, 3d druck prototypen"
      path="/"
    />
    <OrganizationSchema />
    <StructuredData type="organization" />
    <StructuredData type="service" />
    <AggregateRatingSchema ratingValue={5.0} ratingCount={31} bestRating={5} worstRating={1} />
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

      {/* Trust Bar – Sozial-Proof + Aktivierung Multi-Channel direkt unter Hero */}
      <TrustBarSocialProof />

      {/* ══════════════════════════════════════════════════════
          LEISTUNGEN — Bold editorial cards
         ══════════════════════════════════════════════════════ */}
      <section id="leistungen" className="py-32 bg-background relative" aria-label="3D-Druck Leistungen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <AnimatedSection animation="fade-in" className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Services</p>
                  <TextReveal
                    text="Was wir für Sie drucken."
                    className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]"
                  />
                </div>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Von der ersten Idee bis zum fertigen Modell – alles aus einer Hand. Kein Outsourcing, kein Callcenter.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 1: Architekturmodelle — full-width hero card */}
            <AnimatedSection animation="slide-up" className="mb-4">
              <Link href="/architekturmodelle" className="group block">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/40 transition-all duration-500 overflow-hidden group-hover:-translate-y-1" data-cursor="Entdecken">
                  <div className="grid md:grid-cols-2">
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                      <div className="flex gap-3 mb-6">
                        <span className="sticker border-primary text-primary">Express 24h</span>
                        <span className="mono text-xs font-bold text-muted-foreground tracking-wider">ab €20</span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-[-0.03em] group-hover:text-primary transition-colors">
                        Architektur­modelle
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                        Maßstabsgetreue 3D-gedruckte Modelle 1:50 bis 1:500 für Wettbewerbe, Baueinreichungen und Kundenpräsentationen.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {["1:50–1:500", "CAD-Import", "Wettbewerbsmodelle", "ArchiCAD & Revit"].map(t =>
                          <span key={t} className="mono text-[10px] font-bold text-foreground/50 uppercase tracking-wider bg-muted px-3 py-1.5 rounded-full">{t}</span>
                        )}
                      </div>
                      <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="bg-muted/50 p-10 md:p-16 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-32 h-32 text-primary/[0.06]" />
                      </div>
                      <div className="relative text-center">
                        <p className="mono text-8xl md:text-9xl font-bold text-foreground/[0.06] leading-none">01</p>
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </Link>
            </AnimatedSection>

            {/* Service 2+3: Side by side */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <AnimatedSection animation="slide-up" delay={100}>
                <Link href="/messemodelle" className="group block h-full">
                  <MagneticCard className="h-full rounded-3xl bg-foreground p-10 md:p-12 relative overflow-hidden
                    border-2 border-foreground hover:border-primary transition-all duration-500 group-hover:-translate-y-1" glowColor="hsl(var(--primary) / 0.15)">
                    <p className="mono text-7xl font-bold text-background/[0.05] absolute top-6 right-8 leading-none z-[3]">02</p>
                    <span className="sticker border-primary text-primary mb-6 inline-flex">ab €30</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-background mb-3 tracking-tight group-hover:text-primary transition-colors">
                      Messemodelle & Exponate
                    </h3>
                    <p className="text-background/40 leading-relaxed mb-6 text-sm">
                      Express-Fertigung für Wien, München, Hannover. Angebot heute – Modell morgen. Bis 2m+.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Express 24h", "Bis 2m+", "Segmentiert"].map(t =>
                        <span key={t} className="mono text-[10px] font-bold text-background/30 uppercase tracking-wider">{t}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                      Messemodelle <ArrowRight className="w-4 h-4" />
                    </span>
                  </MagneticCard>
                </Link>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <Link href="/einzelanfertigungen" className="group block h-full">
                  <MagneticCard className="h-full rounded-3xl border-2 border-border hover:border-primary/40 p-10 md:p-12 relative overflow-hidden
                    transition-all duration-500 group-hover:-translate-y-1">
                    <p className="mono text-7xl font-bold text-foreground/[0.04] absolute top-6 right-8 leading-none z-[3]">03</p>
                    <span className="sticker border-foreground text-foreground mb-6 inline-flex">ab 1 Stück</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                      Einzelanfertigungen
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                      Maßgefertigt nach Ihren Vorgaben – aus Skizzen, Fotos oder CAD. Keine Mindestmenge.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Unikate", "Nach Skizze", "Alle Größen"].map(t =>
                        <span key={t} className="mono text-[10px] font-bold text-foreground/30 uppercase tracking-wider">{t}</span>
                      )}
                    </div>
                    <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                      Einzelanfertigungen <ArrowRight className="w-4 h-4" />
                    </span>
                  </MagneticCard>
                </Link>
              </AnimatedSection>
            </div>

            {/* Quick service links */}
            <AnimatedSection animation="fade-in" delay={250} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {[
                  { to: "/firmenkunden", label: "Firmenkunden & B2B" },
                  { to: "/rapid-prototyping", label: "Rapid Prototyping" },
                  { to: "/fdm-3d-druck", label: "FDM Technologie" },
                  { to: "/3d-druck-materialien", label: "Materialien" },
                  { to: "/kostenrechner", label: "Kostenrechner" },
                  { to: "/architekturmodelle-abo", label: "Architektur-Flatrate" },
                ].map(({ to, label }) =>
                  <Link key={to} href={to}
                    className="group flex items-center gap-2 border-2 border-border hover:border-foreground rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium">
                    <span className="group-hover:text-foreground transition-colors">{label}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                )}
              </div>
            </AnimatedSection>
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
          KOSTENRECHNER CTA — Bold strip
         ══════════════════════════════════════════════════════ */}
      <section className="border-y-2 border-foreground" aria-label="3D-Druck Kostenrechner">
        <Link href="/kostenrechner" className="group block">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Calculator className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors">
                    Was kostet Ihr 3D-Modell?
                  </h2>
                  <p className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">
                    STL hochladen → Material wählen → Richtpreis erhalten
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foreground font-bold text-sm group-hover:gap-4 transition-all shrink-0 mono uppercase tracking-wider">
                Öffnen <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 SCHRITTE
         ══════════════════════════════════════════════════════ */}
      <ThreeStepProcess />

      {/* ══════════════════════════════════════════════════════
          LIVE PRODUCTION BANNER
         ══════════════════════════════════════════════════════ */}
      <LiveProductionBanner />

      {/* ══════════════════════════════════════════════════════
          REVERSE MARQUEE
         ══════════════════════════════════════════════════════ */}
      <div className="border-y border-border py-4 bg-background">
        <MarqueeTicker reverse />
      </div>

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
          ZIELGRUPPEN
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-muted/30 relative" aria-label="Zielgruppen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Branchen</p>
              <TextReveal
                text="Für wen wir drucken."
                className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]"
              />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Building2, title: "Architekten & Planer",
                  headline: "Wettbewerbsmodell in 24h statt 3 Wochen",
                  desc: "Maßstabsgetreue Modelle 1:50–1:500. ArchiCAD, Revit & SolidWorks kompatibel.",
                  link: "/architekturmodelle", num: "01",
                },
                {
                  icon: Presentation, title: "Messeaussteller",
                  headline: "3 Tage vor der Messe? Kein Problem.",
                  desc: "Express 24–48h österreichweit. Modelle & Exponate bis 2m+.",
                  link: "/messemodelle", num: "02",
                },
                {
                  icon: FlaskConical, title: "Produktentwickler",
                  headline: "Prototyp morgen, nicht in 3 Wochen",
                  desc: "Rapid Prototyping ab €20. Keine Mindestmenge.",
                  link: "/rapid-prototyping", num: "03",
                },
                {
                  icon: Users, title: "Firmenkunden & B2B",
                  headline: "UID-Rechnung, NDA, Mengenrabatt",
                  desc: "Professionelle B2B-Konditionen ab 5 Stück.",
                  link: "/firmenkunden", num: "04",
                },
              ].map(({ icon: Icon, title, headline, desc, link, num }, i) =>
                <AnimatedSection key={title} animation="slide-up" delay={i * 80}>
                  <Link href={link} className="group block h-full">
                    <div className="h-full rounded-3xl border-2 border-border hover:border-primary/40 p-8 md:p-10 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                      <p className="mono text-6xl font-bold text-foreground/[0.04] absolute top-4 right-6 leading-none">{num}</p>
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{title}</p>
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl leading-tight mb-3 tracking-tight group-hover:text-primary transition-colors">{headline}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                        <span className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                          Mehr erfahren <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MATERIALIEN
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-background relative" aria-label="3D-Druck Materialien">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Materialien</p>
                  <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
                    FDM-Präzision,<br />
                    <span className="text-gradient">made in Austria.</span>
                  </h2>
                </div>
                <div className="max-w-sm">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Ausschließlich österreichische Filamente aus recycelten Industrieabfällen. Ökostrom-Produktion, 80% weniger CO₂.
                  </p>
                  <Link href="/3d-druck-materialien" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-4 transition-all">
                    Alle Materialien <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { name: "PLA", badge: "Bestseller", primary: true, desc: "Biologisch abbaubar. Ideal für Architektur & Präsentation.", props: ["Biologisch abbaubar", "0,1 mm Auflösung", "20+ Farben"] },
                { name: "PETG", badge: "Outdoor", primary: false, desc: "UV-beständig und langlebig – für Außen-Exponate.", props: ["UV-beständig", "80°C beständig", "Schlagfest"] },
                { name: "ABS", badge: "Robust", primary: false, desc: "Industriestandard. Schleifbar und lackierbar.", props: ["100°C beständig", "Lackierbar", "Schleifbar"] },
                { name: "TPU", badge: "Flexibel", primary: false, desc: "Elastisch für spezielle Anwendungen.", props: ["Shore 95A", "500% dehnbar", "Abriebfest"] },
              ].map(({ name, badge, primary, desc, props }) =>
                <div key={name} className="rounded-3xl border-2 border-border hover:border-primary/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-3xl font-bold tracking-tight">{name}</p>
                    <span className={`mono text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full ${primary ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{desc}</p>
                  <div className="space-y-2">
                    {props.map(p =>
                      <div key={p} className="flex items-center gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{p}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRANCHEN SHOWCASE
         ══════════════════════════════════════════════════════ */}
      <BranchenShowcase />

      {/* ══════════════════════════════════════════════════════
          REFERENZEN
         ══════════════════════════════════════════════════════ */}
      <ReferencesTeaser />

      {/* ══════════════════════════════════════════════════════
          GOOGLE BEWERTUNGEN
         ══════════════════════════════════════════════════════ */}
      <GoogleReviewsSection />

      {/* ══════════════════════════════════════════════════════
          QUICK-CONTACT — Multi-Channel B2B Direktkontakt
          (nach Reviews = Vertrauen aufgebaut → jetzt aktivieren)
         ══════════════════════════════════════════════════════ */}
      <QuickContactBar
        title="Bereit zu starten? Sie wählen den Weg."
        subtitle="Anrufen, WhatsApp, Termin oder Detail-Anfrage – alle Wege landen direkt beim Inhaber. Kein Vertrieb, kein Callcenter."
      />

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
                    { q: "Für welche Branchen?", a: "Architekten (1:50–1:500), Messeaussteller (Express 24h), Produktentwickler, Firmenkunden (UID, NDA, Rabatte).", link: null },
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

      {/* ══════════════════════════════════════════════════════
          KONTEXTUELLE INTERNE VERLINKUNG (SEO Internal Linking)
          → Verteilt Link-Juice der Homepage auf Money-Pages
         ══════════════════════════════════════════════════════ */}
      <ContextualLinks
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
                href: "/3d-druck-graz",
                after: " und ",
              },
              {
                anchor: "Linz",
                href: "/3d-druck-linz",
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
                after: " bieten wir UID-Rechnung, Mengenrabatte ab 5 Stück, NDA-fähige Projektabwicklung und persönliche Ansprechpartner. Wählen Sie aus über zehn ",
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
          { label: "B2B-Konditionen anfragen", href: "/firmenkunden", description: "UID-Rechnung, Rabatte, NDA, persönlicher Ansprechpartner" },
          { label: "Architekturmodelle ansehen", href: "/architekturmodelle", description: "Maßstab 1:50–1:500 für Wettbewerb & Präsentation" },
          { label: "Express für Messen", href: "/messemodelle", description: "Modell in 24–48h für Wien, München, Hannover" },
        ]}
        variant="muted"
      />

      {/* ══════════════════════════════════════════════════════
          REGIONALE LINKS
         ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background relative" aria-label="3D-Druck Standorte">
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
                { n: "Wien", u: "/3d-druck-wien" }, { n: "Linz", u: "/3d-druck-linz" }, { n: "Graz", u: "/3d-druck-graz" },
                { n: "Salzburg", u: "/3d-druck-salzburg" }, { n: "Innsbruck", u: "/3d-druck-innsbruck" }, { n: "Klagenfurt", u: "/3d-druck-klagenfurt" },
                { n: "Wels", u: "/3d-druck-wels" }, { n: "St. Pölten", u: "/3d-druck-st-poelten" },
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
      </section>

      {/* ══════════════════════════════════════════════════════
          FINALER CTA
         ══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-foreground relative overflow-hidden" aria-label="Jetzt anfragen">
        <div className="container mx-auto px-4 relative">
          <AnimatedSection animation="scale-in">
            <div className="max-w-5xl mx-auto text-center">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8">Let's go</p>
              <h2 className="text-5xl md:text-8xl font-bold text-background leading-[0.9] tracking-[-0.04em] mb-4">
                Bereit für Ihr<br />nächstes Modell<span className="text-primary">?</span>
              </h2>
              <p className="text-background/40 text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                Angebot in 6 Stunden. Direkte Ansprechperson aus Gunskirchen. Kein Callcenter.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                <Button asChild size="lg" variant="cta" className="group rounded-full px-12 py-7 text-base">
                  <Link href="/kontakt">
                    Kostenloses Angebot
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-full px-8 py-7 text-base bg-background/10 border-2 border-background/20 text-background hover:bg-background/20 font-semibold">
                  <Link href="/kostenrechner">
                    <Calculator className="mr-2 w-4 h-4" /> Preis berechnen
                  </Link>
                </Button>
              </div>
              <p className="mono text-[10px] text-background/20 uppercase tracking-[0.2em]">
                Keine Mindestbestellung · Express 24h · Made in Austria
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
