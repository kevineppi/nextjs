'use client'

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticCard from "@/components/MagneticCard";
import FAQSection from "@/components/landing/FAQSection";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import StickyCTA from "@/components/landing/StickyCTA";
import MesseComparisonSection from "@/components/landing/MesseComparisonSection";
import MesseROISection from "@/components/landing/MesseROISection";
import MesseEffectsSection from "@/components/landing/MesseEffectsSection";
import MesseTimelineSection from "@/components/landing/MesseTimelineSection";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import { 
  Zap, Clock, Package, CheckCircle, ArrowRight, MapPin,
  Target, Calendar, Briefcase,
  Factory, Shield, Truck, Building2, Wrench,
  Lightbulb, Globe, Timer, Calculator, Phone,
  Palette, Ruler, ThermometerSun, Eye, Box, Layers,
  MessageSquareQuote, TrendingUp, BadgeCheck, Scan,
  ChevronRight, AlertTriangle, Star
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const messeKalender = [
  { name: "IFAT", ort: "München", datum: "Mai 2026", branche: "Umwelttechnik", bestellStart: "Mär 2026", status: "bald" as const, link: "/messemodelle/muenchen" },
  { name: "Automechanika", ort: "Frankfurt", datum: "Sep 2026", branche: "Automotive", bestellStart: "Jul 2026", status: "offen" as const, link: "/messemodelle/frankfurt" },
  { name: "Welser Messe", ort: "Wels", datum: "Sep 2026", branche: "Industrie", bestellStart: "Jul 2026", status: "offen" as const, link: "/messemodelle/oberoesterreich" },
  { name: "OLMA", ort: "St. Gallen 🇨🇭", datum: "Okt 2026", branche: "Landwirtschaft", bestellStart: "Aug 2026", status: "offen" as const, link: "/messemodelle/st-gallen" },
  { name: "MEDICA", ort: "Düsseldorf", datum: "Nov 2026", branche: "Medizintechnik", bestellStart: "Sep 2026", status: "offen" as const, link: "/messemodelle/duesseldorf" },
  { name: "SPS", ort: "Nürnberg", datum: "Nov 2026", branche: "Automation", bestellStart: "Sep 2026", status: "offen" as const, link: "/messemodelle/nuernberg" },
  { name: "BAUEN & WOHNEN", ort: "Wien", datum: "Nov 2026", branche: "Bau & Immobilien", bestellStart: "Sep 2026", status: "offen" as const, link: "/messemodelle/wien" },
  { name: "BAU", ort: "München", datum: "Jan 2027", branche: "Bau & Architektur", bestellStart: "Nov 2026", status: "offen" as const, link: "/messemodelle/muenchen" },
  { name: "Hannover Messe", ort: "Hannover", datum: "Apr 2027", branche: "Industrie", bestellStart: "Feb 2027", status: "offen" as const, link: "/messemodelle/hannover" },
];

const branchenUseCases = [
  { icon: Factory, branche: "Maschinenbau & Industrie", titel: "Industrieanlage als Anschauungsmodell", text: "Ihre Maschine wiegt 8 Tonnen und passt in keine Messehalle? Wir fertigen maßstabsgetreue Industriemodelle, die komplexe Anlagen auf Tischgröße bringen. Schnittmodelle zeigen das Innenleben, bewegliche Teile verdeutlichen Funktionsabläufe. Von der Fräsmaschine bis zur kompletten Produktionslinie.", beispiel: "Sägeanlage 1:20 für die LIGNA – 47 Einzelteile, funktionsfähige Kanzel" },
  { icon: Building2, branche: "Immobilien & Bau", titel: "Immobilienprojekt als Präsentationsmodell", text: "Bauträger, Projektentwickler und Architekten nutzen unsere Präsentationsmodelle für Verkaufsgespräche, Baueinreichungen und Messeauftritte. Maßstab 1:50 bis 1:500, mit Geländemodellierung und optionaler Beleuchtung. Abnehmbares Dach zeigt den Grundriss.", beispiel: "Wohnbauprojekt 1:100 für BAUEN & WOHNEN Wien – 3 Gebäude mit Umgebung" },
  { icon: Wrench, branche: "Automotive & Zulieferer", titel: "Fahrzeugkomponenten als Exponat", text: "Von der Einzelkomponente bis zum Cutaway-Modell: Vergrößerte Darstellungen machen filigrane Bauteile sichtbar, verkleinerte Gesamtfahrzeuge sparen Standfläche. Farbcodierung nach CI-Richtlinien ist Standard.", beispiel: "Bremsanlage 3:1 für die Automechanika Frankfurt – Schnittdarstellung mit CI-Farben" },
  { icon: Lightbulb, branche: "Medizintechnik & Pharma", titel: "Medizinprodukt greifbar machen", text: "Erklärungsbedürftige Medizingeräte werden als Demonstrationsmodell sofort verständlich. Chirurgische Instrumente, Diagnostikgeräte oder Implantate in vergrößerter Darstellung erzeugen den entscheidenden Aha-Effekt. Aufklappbare Gehäuse zeigen das Innenleben.", beispiel: "Insulinpumpe 5:1 für die MEDICA Düsseldorf – mit aufklappbarem Gehäuse" },
  { icon: Globe, branche: "Energie & Umwelttechnik", titel: "Infrastrukturprojekt visualisieren", text: "Windparks, Solaranlagen, Kläranlagen oder Wasserkraftwerke: Wir erstellen Schaumodelle mit farbigen Markierungen für Flussrichtungen, Energieströme oder Reinigungsstufen – ideal für Fachmessen wie die IFAT.", beispiel: "Kläranlage 1:50 für die IFAT München – mit Fließrichtungspfeilen" },
  { icon: Briefcase, branche: "Start-ups & Dienstleister", titel: "Abstrakte Produkte physisch erlebbar", text: "Kein physisches Produkt? Kein Problem. Wir übersetzen Software, Prozesse oder Dienstleistungen in symbolische Exponatmodelle, die als Gesprächsstarter am Messestand funktionieren. Modulare Bauweise lädt zum Interagieren ein.", beispiel: "Symbolisches Prozessmodell für ein FinTech – modularer Aufbau zum Zusammenstecken" },
];

const preisstufen = [
  { typ: "Display-Modell", preis: "ab €30", groesse: "bis 15 cm", beschreibung: "Tischmodelle für Besprechungsräume, POS oder als Geschenk für Messebesucher.", lieferzeit: "3–5 Tage", material: "PLA / PLA+", icon: Box },
  { typ: "Standmodell", preis: "ab €80", groesse: "15–40 cm", beschreibung: "Produktmodelle, verkleinerte Maschinen oder Architekturmodelle für den Messestand.", lieferzeit: "5–7 Tage", material: "PETG / ASA", icon: Layers },
  { typ: "Eyecatcher", preis: "ab €180", groesse: "40–80 cm", beschreibung: "Großformatige Präsentationsmodelle als Blickfang. Segmentiert gedruckt, lackierbar.", lieferzeit: "7–10 Tage", material: "PETG / ASA / ABS", icon: Eye, popular: true },
  { typ: "Großmodell", preis: "auf Anfrage", groesse: "80 cm – 2m+", beschreibung: "Maßstabsgetreue Industriemodelle und Anlagenmodelle mit Transportkiste.", lieferzeit: "2–4 Wochen", material: "nach Anforderung", icon: Factory },
];

const materialGuide = [
  { material: "PLA", temp: "55°C", empfehlung: "Innenräume ohne Spotlights", haltbarkeit: "1–3 Messen", preis: "€", farben: "20+", color: "text-blue-500", bg: "bg-blue-500/10" },
  { material: "PETG", temp: "75°C", empfehlung: "Standard-Messeeinsatz", haltbarkeit: "5–10 Messen", preis: "€€", farben: "15+", color: "text-emerald-500", bg: "bg-emerald-500/10", best: true },
  { material: "ASA", temp: "95°C", empfehlung: "Spotlights & Outdoor", haltbarkeit: "10+ Messen", preis: "€€€", farben: "10+", color: "text-amber-500", bg: "bg-amber-500/10" },
];

const vergleich = [
  { k: "Kosten", ek: "ab €30", kl: "ab €1.000", w: "ek" },
  { k: "Lieferzeit", ek: "24h Express möglich", kl: "3–6 Wochen", w: "ek" },
  { k: "Geometrie", ek: "Unbegrenzt komplex", kl: "Stark limitiert", w: "ek" },
  { k: "Reproduzierbar", ek: "1:1 identisch, digital", kl: "Jedes Stück Unikat", w: "ek" },
  { k: "Korrekturen", ek: "Datei ändern → Neudruck", kl: "Komplett neuer Bau", w: "ek" },
  { k: "Gewicht", ek: "70–90% leichter", kl: "Schwer (Holz, Metall)", w: "ek" },
  { k: "Oberfläche", ek: "Gut (lackierbar)", kl: "Exzellent", w: "kl" },
];

const testimonials = [
  { text: "Das Modell war der absolute Eyecatcher. So viele Standbesucher wie dieses Jahr hatten wir noch nie.", name: "Ing. M. Weber", firma: "Anlagenbau, Linz", messe: "Hannover Messe 2025" },
  { text: "Freitag bestellt, Montag auf der Messe. Hätte ich nicht für möglich gehalten.", name: "S. Berger", firma: "Medizintechnik, Graz", messe: "MEDICA 2024" },
  { text: "Die Qualität ist überraschend gut. Unsere Kunden glauben nicht, dass das gedruckt ist.", name: "DI K. Hofmann", firma: "Architektur, Salzburg", messe: "BAUEN & WOHNEN Wien" },
];

const faqs = [
  { question: "Was kostet ein 3D-gedrucktes Messemodell?", answer: "Display-Modelle starten ab €30, Standmodelle ab €80, Eyecatcher-Exponate ab €180. Großmodelle werden individuell kalkuliert. Sie erhalten ein verbindliches Festpreisangebot innerhalb von 6 Stunden – kostenlos und unverbindlich." },
  { question: "Wie schnell kann ein Messemodell gefertigt werden?", answer: "Express-Fertigung in 24–48 Stunden ist möglich. Standard-Lieferzeit beträgt 5–10 Werktage, bei Großmodellen 2–4 Wochen. Wir empfehlen, 4–6 Wochen vor der Messe zu bestellen." },
  { question: "Welche Dateiformate werden akzeptiert?", answer: "STL, OBJ, STEP, IGES und 3MF. Auch native CAD-Formate aus SolidWorks, Inventor, Fusion 360 und Rhino. Kein 3D-Modell vorhanden? Wir erstellen Ihr Exponat auch nach Skizze, Foto oder technischer Zeichnung." },
  { question: "Kann ich mein Exponat in unserer CI-Farbe erhalten?", answer: "Ja. Über 20 Filamentfarben ab Lager, oder Lackierung nach RAL-, Pantone- oder HEX-Farbwerten – exakt nach Ihrem Corporate Design." },
  { question: "Wie wird das Exponat bruchsicher geliefert?", answer: "Individuelle Schaumstoffverpackung mit doppelwandigem Karton. Großmodelle in Holzkisten. Lieferung direkt zum Messestand in Wien, München, Düsseldorf, Basel und weiteren Messestädten." },
  { question: "3D-Druck vs. klassischer Modellbau – was ist besser?", answer: "3D-Druck ist 5–10× schneller, 60–80% günstiger und erlaubt unbegrenzte geometrische Komplexität. Digital reproduzierbar – Korrekturen kosten nur eine Dateiänderung. Handmodellbau hat Vorteile bei Oberfläche und Haptik." },
  { question: "Bieten Sie Express für kurzfristige Messetermine?", answer: "Ja. 24–48h Express-Fertigung. Freitag bestellt, Montag auf der Messe. Rufen Sie an: +43 676 5517197." },
  { question: "Für welche DACH-Messen liefern Sie?", answer: "Alle Messen: Wien, München (BAU, IFAT), Düsseldorf (MEDICA), Hannover, Frankfurt (Automechanika), Nürnberg (SPS), Basel (Swissbau), St. Gallen (OLMA), Zürich und viele weitere." },
  { question: "Kann ein Modell mehrfach eingesetzt werden?", answer: "Ja. PETG oder ASA überstehen 5–10 Messeeinsätze. Wir empfehlen eine Transportbox für sichere Lagerung." },
  { question: "Welches Material bei Spotbeleuchtung?", answer: "PLA wird ab 55°C weich. PETG (bis 75°C) oder ASA (bis 95°C) für beleuchtete Stände. ASA ist UV-beständig für Outdoor-Messen." },
  { question: "Wie groß kann ein Messemodell maximal sein?", answer: "Einzelteile bis 60 cm Kantenlänge. Durch segmentierten Druck mit unsichtbaren Nahtstellen sind Gesamtgrößen bis 2 Meter und darüber hinaus möglich." },
  { question: "Bieten Sie Montage vor Ort an?", answer: "In Wien, Wels und Salzburg: persönliche Lieferung und Aufbau. Andere Standorte: detaillierte Aufbauanleitungen mit nummerierten Teilen, Zusammenbau in Minuten." },
];

/* ═══════════════════════════════════════════════════════════ */

const Messemodelle = () => (
  <>
    <SEOHead title="Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express | ekdruck" description="Messemodelle drucken lassen: Ausstellungsmodelle, Exponate & Schaumodelle für DACH-Messen. Express 24h · ab €30 · bruchsicher · ★5,0 (31 Bewertungen)" keywords="messemodelle, messemodell drucken lassen, messeexponat, ausstellungsmodell, präsentationsmodell, exponat, schaumodell, anschauungsmodell, industriemodell, messemodelle kosten, 3d druck messe, messestand modell, produktmodell messe, demonstrationsmodell, standmodell, eyecatcher messestand, modellbau messe, messebau modell" path="/messemodelle" />
    <ProductOfferSchema name="Messemodelle & Exponate 3D-Druck" description="3D-gedruckte Messemodelle, Exponate und Präsentationsmodelle für Fachmessen in Österreich, Deutschland und der Schweiz. Express 24h." price="30" image="https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png" />
    <Navigation />
    <main className="min-h-screen bg-background">

      {/* ════════════════════════════════════════════
          HERO – Editorial, bold, nicht abgeschnitten
          ════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(hsl(var(--border)/0.4) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="flex gap-3 mb-10">
                <span className="sticker border-primary text-primary"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Angebot in 6h</span>
                <span className="sticker border-foreground/20 text-foreground/60">Express 24h</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                Messemodelle &<br/>
                <span className="text-gradient">Exponate</span>
                <span className="text-muted-foreground/30 font-light"> drucken</span>
              </h1>

              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Ihr Produkt ist zu groß, zu schwer oder zu teuer für den Messetransport?
                  Wir fertigen maßstabsgetreue Ausstellungsmodelle, Schaumodelle und
                  Präsentationsmodelle aus dem 3D-Druck.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg" asChild>
                    <Link href="#kontakt">Modell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base" asChild>
                    <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Anrufen</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Big number stats – editorial style */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="mt-20 grid grid-cols-4 gap-0 border-t border-border pt-8">
                {[
                  { v: "24h", l: "Express" },
                  { v: "2m+", l: "Modellgröße" },
                  { v: "50+", l: "Messen" },
                  { v: "5.0★", l: "Google" },
                ].map((s, i) => (
                  <div key={s.l} className={`text-center ${i > 0 ? 'border-l border-border' : ''}`}>
                    <p className="mono text-4xl md:text-5xl font-bold tracking-tight">{s.v}</p>
                    <p className="mono text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-[0.2em]">{s.l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SCROLLING TICKER – Dynamik, Energie
          ════════════════════════════════════════════ */}
      <div className="border-y border-border py-4 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee inline-flex">
          {[...Array(2)].map((_, di) => (
            <span key={di} className="inline-flex">
              {["MESSEMODELLE","EXPONATE","AUSSTELLUNGSMODELLE","SCHAUMODELLE","PRÄSENTATIONSMODELLE","INDUSTRIEMODELLE","SCHNITTMODELLE","DEMONSTRATIONSMODELLE","STANDMODELLE","PRODUKTMODELLE"].map((w, i) => (
                <span key={`${di}-${i}`} className="inline-flex items-center gap-5 mx-5">
                  <span className="mono text-xs font-bold tracking-[0.2em] text-foreground/40">{w}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════
          BRANCHEN – Staggered layout, nicht 3x2 grid
          ════════════════════════════════════════════ */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Branchen</p>
                  <TextReveal text="Ihr Produkt als Exponat." className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]" />
                </div>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Von der 8-Tonnen-Maschine bis zum abstrakten Software-Modell – wir machen jedes Produkt greifbar.
                </p>
              </div>
            </AnimatedSection>

            {/* First row: big + small */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <Factory className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[0].branche}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchenUseCases[0].titel}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchenUseCases[0].text}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold"><Scan className="w-4 h-4" /> {branchenUseCases[0].beispiel}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Building2 className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[1].branche}</p>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">{branchenUseCases[1].titel}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchenUseCases[1].text}</p>
                    <p className="text-xs text-primary font-semibold">{branchenUseCases[1].beispiel}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            {/* Second row: small + big */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" delay={150}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Wrench className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[2].branche}</p>
                    <h3 className="text-xl font-bold mb-3 tracking-tight">{branchenUseCases[2].titel}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchenUseCases[2].text}</p>
                    <p className="text-xs text-primary font-semibold">{branchenUseCases[2].beispiel}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200} className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <Lightbulb className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[3].branche}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchenUseCases[3].titel}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchenUseCases[3].text}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold"><Scan className="w-4 h-4" /> {branchenUseCases[3].beispiel}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            {/* Third row: equal */}
            <div className="grid md:grid-cols-2 gap-4">
              {branchenUseCases.slice(4).map((uc, i) => (
                <AnimatedSection key={uc.branche} animation="slide-up" delay={250 + i * 80}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="p-8 md:p-10">
                      <uc.icon className="w-10 h-10 text-primary mb-6" />
                      <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{uc.branche}</p>
                      <h3 className="text-xl font-bold mb-3 tracking-tight">{uc.titel}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.text}</p>
                      <p className="text-xs text-primary font-semibold">{uc.beispiel}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIALS – Full-width editorial band
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Was unsere Kunden sagen</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 120}>
                  <div className="relative">
                    <span className="text-8xl font-bold text-background/[0.06] absolute -top-6 -left-2 leading-none select-none">"</span>
                    <p className="text-lg text-background/80 leading-relaxed mb-6 relative z-10">{t.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="mono text-xs font-bold text-background tracking-wide">{t.name}</p>
                        <p className="text-xs text-background/50">{t.firma} · {t.messe}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PREISE – Clean pricing cards
          ════════════════════════════════════════════ */}
      <section id="preise" className="py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Transparent kalkuliert</p>
              <TextReveal text="Was kostet ein Messemodell?" className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]" />
              <p className="text-muted-foreground max-w-lg mt-6 text-base leading-relaxed">Festpreisangebot in 6 Stunden. Keine versteckten Kosten.</p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {preisstufen.map((p, i) => (
                <AnimatedSection key={p.typ} animation="slide-up" delay={i * 80}>
                  <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${(p as any).popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border hover:border-primary/30'}`}>
                    <div className="p-6 md:p-8">
                      {(p as any).popular && <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" />}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${(p as any).popular ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center`}>
                          <p.icon className={`w-6 h-6 ${(p as any).popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        {(p as any).popular && <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-wider">Beliebt</span>}
                      </div>
                      <p className="font-bold text-lg">{p.typ}</p>
                      <p className="text-4xl font-bold text-primary mt-1 tracking-tight">{p.preis}</p>
                      <p className="mono text-xs text-muted-foreground mt-2 flex items-center gap-1.5"><Ruler className="w-3 h-3" />{p.groesse}</p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.beschreibung}</p>
                      <div className="mt-6 pt-4 border-t border-border/50 space-y-2">
                        <div className="flex items-center gap-2 text-xs"><Clock className="w-3.5 h-3.5 text-primary" />{p.lieferzeit}</div>
                        <div className="flex items-center gap-2 text-xs"><Package className="w-3.5 h-3.5 text-primary" />{p.material}</div>
                      </div>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>

            {/* Express + ROI */}
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedSection animation="fade-in">
                <MagneticCard className="rounded-3xl border-2 border-primary/30 bg-primary/[0.03] h-full">
                  <div className="p-8 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"><Zap className="w-7 h-7 text-primary" /></div>
                    <div>
                      <p className="text-xl font-bold mb-2">Express-Fertigung</p>
                      <p className="text-muted-foreground leading-relaxed mb-3">Lieferung in 24–48h. +50% Aufpreis. Wir fertigen über Nacht.</p>
                      <a href="tel:+436765517197" className="mono text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5"><Phone className="w-4 h-4" />+43 676 5517197</a>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="fade-in" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border h-full">
                  <div className="p-8 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0"><TrendingUp className="w-7 h-7 text-emerald-500" /></div>
                    <div>
                      <p className="text-xl font-bold mb-2">ROI nach dem ersten Lead</p>
                      <p className="text-muted-foreground leading-relaxed">Ein Eyecatcher ab €180 generiert 30–50% mehr Standgespräche. Bei einem Lead-Wert von €500+ rechnet sich das Modell nach einem einzigen Kontakt.</p>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MATERIAL-RATGEBER – Visual comparison
          ════════════════════════════════════════════ */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Material-Ratgeber</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Welches Material für <span className="text-gradient">Ihren Messeeinsatz?</span></h2>
              <p className="text-muted-foreground max-w-lg">Die Wahl entscheidet über Haltbarkeit, Optik und Kosten. <Link href="/ratgeber/material-guide" className="text-primary font-semibold hover:underline">Zum ausführlichen Guide →</Link></p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {materialGuide.map((m, i) => (
                <AnimatedSection key={m.material} animation="slide-up" delay={i * 100}>
                  <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${m.best ? 'border-primary bg-card shadow-lg' : 'border-border bg-card hover:border-primary/30'}`}>
                    <div className="p-8">
                      {m.best && <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Unsere Empfehlung</span>}
                      <p className={`text-3xl font-bold mb-1 ${m.color}`}>{m.material}</p>
                      <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mb-6">{m.empfehlung}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { v: m.temp, l: "Max. Temp." },
                          { v: m.haltbarkeit, l: "Haltbarkeit" },
                          { v: m.farben, l: "Farben" },
                          { v: m.preis, l: "Preislevel" },
                        ].map(d => (
                          <div key={d.l} className={`rounded-xl ${m.bg} p-3 text-center`}>
                            <p className="mono text-lg font-bold">{d.v}</p>
                            <p className="text-[10px] text-muted-foreground">{d.l}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          VERGLEICH: Messemodell vs. Alternativen
          ════════════════════════════════════════════ */}
      <MesseComparisonSection />

      {/* ════════════════════════════════════════════
          ROI – Warum sich ein Modell rechnet
          ════════════════════════════════════════════ */}
      <MesseROISection />

      {/* ════════════════════════════════════════════
          3 Psychologische Effekte
          ════════════════════════════════════════════ */}
      <MesseEffectsSection />

      {/* ════════════════════════════════════════════
          TIMELINE + CHECKLISTE
          ════════════════════════════════════════════ */}
      <MesseTimelineSection />


      {/* ════════════════════════════════════════════
          MESSEKALENDER – Responsive cards, links to regional pages
          ════════════════════════════════════════════ */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messekalender DACH 2026/2027</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Ihre Messe – <span className="text-gradient">wann bestellen?</span></h2>
              <p className="text-muted-foreground max-w-lg">Optimale Vorlaufzeit: 4–6 Wochen. Express bis 48h vor Aufbau. Alle Messen finden Sie auf den jeweiligen Regionsseiten.</p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {messeKalender.slice(0, 9).map((m, i) => (
                <AnimatedSection key={m.name} animation="slide-up" delay={i * 60}>
                  <Link href={m.link} className="group block">
                    <MagneticCard className={`rounded-2xl border-2 h-full transition-all duration-300 ${m.status === 'bald' ? 'border-amber-500/30 bg-amber-500/[0.03]' : 'border-border hover:border-primary/30 bg-card'}`}>
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-bold text-base group-hover:text-primary transition-colors">{m.name}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{m.ort}</p>
                          </div>
                          <span className="mono text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-lg">{m.datum}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">{m.branche}</p>
                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center gap-1 mono text-[11px] font-bold px-2.5 py-1 rounded-full ${m.status === 'bald' ? 'bg-amber-500/10 text-amber-600' : 'bg-primary/10 text-primary'}`}>
                            <Timer className="w-3 h-3" />Bestellen ab {m.bestellStart}
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </MagneticCard>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-4">Weitere Messen finden Sie auf den regionalen Seiten unten.</p>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="#kontakt">Messetermin mitteilen <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          REFERENZEN
          ════════════════════════════════════════════ */}
      <ReferencesTeaser />

      {/* ════════════════════════════════════════════
          SEO CONTENT – Deep, keyword-rich
          ════════════════════════════════════════════ */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messemodelle im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Warum 3D-gedruckte Exponate Ihren Messeauftritt verändern</h2>

              <div className="space-y-8 text-base leading-[1.85] text-foreground/85">
                <p>Ein physisches Modell am Messestand erzeugt mehr Aufmerksamkeit als jeder Bildschirm. Besucher bleiben stehen, greifen zu, stellen Fragen – und erinnern sich. Studien zeigen: Haptische Erlebnisse bleiben bis zu 6× länger im Gedächtnis als rein visuelle Reize. <strong>Messemodelle und Exponate aus dem 3D-Druck</strong> machen genau das möglich.</p>

                <p>Ob maßstabsgetreues <Link href="/messemodelle/muenchen" className="text-primary font-semibold hover:underline">Anschauungsmodell für die BAU München</Link>, ein Schnittmodell für die <Link href="/messemodelle/hannover" className="text-primary font-semibold hover:underline">Hannover Messe</Link>, ein Exponat für die <Link href="/messemodelle/zuerich" className="text-primary font-semibold hover:underline">FINANZ Zürich</Link> oder ein Demonstrationsmodell für die <Link href="/messemodelle/duesseldorf" className="text-primary font-semibold hover:underline">MEDICA Düsseldorf</Link> – wir fertigen Ihr Messemodell termingerecht und bruchsicher.</p>

                <div className="rounded-3xl bg-muted/50 border border-border/50 p-8 md:p-10 not-prose">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Ausstellungsmodelle für den gesamten DACH-Raum</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Von unserem Standort in Gunskirchen (Oberösterreich) beliefern wir <strong className="text-foreground">alle Messen in Österreich, Deutschland und der Schweiz</strong>. Persönliche Lieferung in <Link href="/messemodelle/wien" className="text-primary hover:underline">Wien</Link>, <Link href="/messemodelle/linz" className="text-primary hover:underline">Linz/Wels</Link> und <Link href="/messemodelle/salzburg" className="text-primary hover:underline">Salzburg</Link>. Versand nach <Link href="/messemodelle/muenchen" className="text-primary hover:underline">München</Link>, <Link href="/messemodelle/nuernberg" className="text-primary hover:underline">Nürnberg</Link>, <Link href="/messemodelle/stuttgart" className="text-primary hover:underline">Stuttgart</Link>, <Link href="/messemodelle/berlin" className="text-primary hover:underline">Berlin</Link> und <Link href="/messemodelle/hamburg" className="text-primary hover:underline">Hamburg</Link> in 3–5 Werktagen. Schweiz (<Link href="/messemodelle/basel" className="text-primary hover:underline">Basel</Link>, <Link href="/messemodelle/zuerich" className="text-primary hover:underline">Zürich</Link>, <Link href="/messemodelle/bern" className="text-primary hover:underline">Bern</Link>, <Link href="/messemodelle/st-gallen" className="text-primary hover:underline">St. Gallen</Link>) inkl. Zolldokumentation.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Unser Leistungsspektrum</h3>
                  <p>Wir fertigen: <strong>Produktmodelle</strong> in Originalgröße oder verkleinert, <strong>Industriemodelle</strong> von Anlagen und Maschinen, <strong>Präsentationsmodelle</strong> für Immobilien und Architektur, <strong>Demonstrationsmodelle</strong> mit aufklappbaren Gehäusen, sowie großformatige <strong>Schaumodelle</strong> als Eyecatcher. Bis 2 Meter Höhe durch segmentierten Druck mit unsichtbaren Nahtstellen.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Ihr strategisches Messewerkzeug</h3>
                  <p>Ein hochwertiges Messeexponat ist ein <strong>Vertriebswerkzeug</strong>. Ein gut platziertes Anschauungsmodell reduziert die Erklärzeit um bis zu 70%, erhöht die Verweildauer am Stand und qualifiziert Leads: Wer sich für das Modell interessiert, interessiert sich für Ihr Produkt.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Unsere Kunden</h3>
                  <p><strong>Messeaussteller, Eventagenturen, Produktmanager und Marketing-Abteilungen</strong> aus dem DACH-Raum. Maschinenbau, Baubranche, Medizintechnik, Automotive, Energiesektor. B2B-Konditionen unter <Link href="/firmenkunden" className="text-primary font-semibold hover:underline">Firmenkunden</Link>. Unsere <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link> finden Sie auf der eigenen Serviceseite.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Häufige Fragen zu Messemodellen & Exponaten" subtitle="Alles was Sie vor der Bestellung wissen sollten" schemaId="messemodelle-faq" />

      {/* ════════════════════════════════════════════
          REGIONEN – Compact, no duplicate coverage
          ════════════════════════════════════════════ */}
      <AllRegionsLinks currentSlug="" type="messe" />

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Messemodelle;
