'use client'

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/landing/FAQSection";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import StickyCTA from "@/components/landing/StickyCTA";
import { 
  Zap, Clock, Package, CheckCircle, ArrowRight, MapPin,
  Sparkles, Award, Target, Calendar, Briefcase,
  Factory, Shield, Truck, Star, Building2, Wrench,
  Lightbulb, Globe, Timer, Calculator, Phone,
  ChevronRight, AlertTriangle, Palette, Ruler,
  ThermometerSun, Weight, Repeat, Eye, Box, Layers,
  Scan, MessageSquareQuote, TrendingUp, BadgeCheck
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const messeKalenderAT = [
  { name: "IFAT", ort: "München", datum: "Mai 2026", branche: "Umwelttechnik", bestellStart: "März 2026", status: "bald" as const },
  { name: "Automechanika", ort: "Frankfurt", datum: "Sep 2026", branche: "Automotive", bestellStart: "Juli 2026", status: "offen" as const },
  { name: "Welser Messe", ort: "Wels", datum: "Sep 2026", branche: "Industrie", bestellStart: "Juli 2026", status: "offen" as const },
  { name: "OLMA", ort: "St. Gallen 🇨🇭", datum: "Okt 2026", branche: "Landwirtschaft", bestellStart: "Aug 2026", status: "offen" as const },
  { name: "MEDICA", ort: "Düsseldorf", datum: "Nov 2026", branche: "Medizintechnik", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "SPS", ort: "Nürnberg", datum: "Nov 2026", branche: "Automation", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "electronica", ort: "München", datum: "Nov 2026", branche: "Elektronik", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "BAUEN & WOHNEN", ort: "Wien", datum: "Nov 2026", branche: "Bau & Immobilien", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "AGRARIA", ort: "Wels", datum: "Nov 2026", branche: "Landwirtschaft", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "PRODEX", ort: "Basel 🇨🇭", datum: "Nov 2026", branche: "Fertigung", bestellStart: "Sep 2026", status: "offen" as const },
  { name: "BAU", ort: "München", datum: "Jan 2027", branche: "Bau & Architektur", bestellStart: "Nov 2026", status: "offen" as const },
  { name: "Swissbau", ort: "Basel 🇨🇭", datum: "Jan 2027", branche: "Bau & Immobilien", bestellStart: "Nov 2026", status: "offen" as const },
  { name: "VIENNA AUTOSHOW", ort: "Wien", datum: "Jan 2027", branche: "Automotive", bestellStart: "Nov 2026", status: "offen" as const },
  { name: "Häuslbauermesse", ort: "Graz", datum: "Jan 2027", branche: "Bau & Wohnen", bestellStart: "Nov 2026", status: "offen" as const },
  { name: "Power-Days", ort: "Salzburg", datum: "Mär 2027", branche: "Elektrotechnik", bestellStart: "Jan 2027", status: "offen" as const },
  { name: "Hannover Messe", ort: "Hannover", datum: "Apr 2027", branche: "Industrie", bestellStart: "Feb 2027", status: "offen" as const },
  { name: "BEA", ort: "Bern 🇨🇭", datum: "Apr 2027", branche: "Gewerbe", bestellStart: "Feb 2027", status: "offen" as const },
  { name: "LUGA", ort: "Luzern 🇨🇭", datum: "Apr 2027", branche: "Gewerbe", bestellStart: "Feb 2027", status: "offen" as const },
  { name: "LIGNA", ort: "Hannover", datum: "Mai 2027", branche: "Holzverarbeitung", bestellStart: "Mär 2027", status: "offen" as const },
];

const branchenUseCases = [
  { icon: Factory, branche: "Maschinenbau & Industrie", titel: "Industrieanlage als Anschauungsmodell", text: "Ihre Maschine wiegt 8 Tonnen und passt in keine Messehalle? Wir fertigen maßstabsgetreue Industriemodelle, die komplexe Anlagen auf Tischgröße bringen. Schnittmodelle zeigen das Innenleben, bewegliche Teile verdeutlichen Funktionsabläufe. Von der Fräsmaschine bis zur kompletten Produktionslinie – jede Anlage wird zum transportablen Exponat.", beispiel: "Sägeanlage 1:20 für die LIGNA – 47 Einzelteile, funktionsfähige Kanzel", keywords: "Industriemodell, Anlagenmodell, Maschinenmodell, Schnittmodell" },
  { icon: Building2, branche: "Immobilien & Bau", titel: "Immobilienprojekt als Präsentationsmodell", text: "Bauträger, Projektentwickler und Architekten nutzen unsere Präsentationsmodelle für Verkaufsgespräche, Baueinreichungen und Messeauftritte. Maßstab 1:50 bis 1:500, mit Geländemodellierung und optionaler Beleuchtung. Abnehmbares Dach oder aufklappbare Fassaden zeigen den Grundriss von innen.", beispiel: "Wohnbauprojekt 1:100 für BAUEN & WOHNEN Wien – 3 Gebäude mit Umgebung", keywords: "Präsentationsmodell, Architekturmodell, Immobilienmodell" },
  { icon: Wrench, branche: "Automotive & Zulieferer", titel: "Fahrzeugkomponenten als Exponat", text: "Von der Einzelkomponente bis zum Cutaway-Modell: Wir drucken Ausstellungsmodelle für den Automotive-Bereich. Vergrößerte Darstellungen machen filigrane Bauteile sichtbar, verkleinerte Gesamtfahrzeuge sparen Standfläche. Farbcodierung nach CI-Richtlinien ist Standard.", beispiel: "Bremsanlage 3:1 für die Automechanika Frankfurt – Schnittdarstellung mit CI-Farben", keywords: "Cutaway-Modell, Fahrzeugmodell, Exponat, Showmodell" },
  { icon: Lightbulb, branche: "Medizintechnik & Pharma", titel: "Medizinprodukt greifbar machen", text: "Erklärungsbedürftige Medizingeräte werden als Demonstrationsmodell sofort verständlich. Chirurgische Instrumente, Diagnostikgeräte oder Implantate in vergrößerter Darstellung erzeugen den entscheidenden Aha-Effekt am Messestand. Aufklappbare Gehäuse zeigen das Innenleben.", beispiel: "Insulinpumpe 5:1 für die MEDICA Düsseldorf – mit aufklappbarem Gehäuse", keywords: "Demonstrationsmodell, Medizinmodell, Funktionsmodell" },
  { icon: Globe, branche: "Energie & Umwelttechnik", titel: "Infrastrukturprojekt visualisieren", text: "Windparks, Solaranlagen, Kläranlagen oder Wasserkraftwerke: Wir erstellen Schaumodelle, die komplexe Infrastrukturprojekte auf einen Blick verständlich machen. Farbige Markierungen zeigen Flussrichtungen, Energieströme oder Reinigungsstufen – ideal für Fachmessen wie die IFAT.", beispiel: "Kläranlage 1:50 für die IFAT München – mit Fließrichtungspfeilen", keywords: "Schaumodell, Infrastrukturmodell, Anschauungsmodell" },
  { icon: Briefcase, branche: "Start-ups & Dienstleister", titel: "Abstrakte Produkte physisch erlebbar", text: "Kein physisches Produkt? Kein Problem. Wir übersetzen Software, Prozesse oder Dienstleistungen in symbolische Exponatmodelle, die als Gesprächsstarter am Messestand funktionieren. Modulare Bauweise lädt Besucher zum Interagieren ein – und macht Ihre Innovation greifbar.", beispiel: "Symbolisches Prozessmodell für ein FinTech – modularer Aufbau zum Zusammenstecken", keywords: "Messeexponat, Produktmodell, Standmodell, Blickfang" },
];

const preisstufen = [
  { typ: "Display-Modell", preis: "ab €30", groesse: "bis 15 cm", beschreibung: "Tischmodelle für Besprechungsräume, POS oder als Geschenk für Messebesucher. Ideal als Visitenkarten-Ergänzung oder Regalmodell.", lieferzeit: "3–5 Tage", material: "PLA / PLA+", icon: Box },
  { typ: "Standmodell", preis: "ab €80", groesse: "15–40 cm", beschreibung: "Aufmerksamkeitsstarke Produktmodelle, verkleinerte Maschinen oder Architekturmodelle für den Messestand. Robust genug für mehrere Messen.", lieferzeit: "5–7 Tage", material: "PETG / ASA", icon: Layers },
  { typ: "Eyecatcher-Exponat", preis: "ab €180", groesse: "40–80 cm", beschreibung: "Großformatige Präsentationsmodelle als Blickfang. Segmentiert gedruckt, lackierbar, mit Sockelplatte. Die meistbestellte Kategorie.", lieferzeit: "7–10 Tage", material: "PETG / ASA / ABS", icon: Eye },
  { typ: "Großmodell / Anlage", preis: "auf Anfrage", groesse: "80 cm – 2m+", beschreibung: "Maßstabsgetreue Industriemodelle, Anlagenmodelle oder Infrastrukturprojekte mit Aufbauanleitung und Transportkiste.", lieferzeit: "2–4 Wochen", material: "nach Anforderung", icon: Factory },
];

const materialGuide = [
  { material: "PLA", temp: "55°C", empfehlung: "Innenräume ohne Spotlights", haltbarkeit: "1–3 Messen", preis: "€", farben: "20+", icon: Palette, color: "text-blue-500" },
  { material: "PETG", temp: "75°C", empfehlung: "Standard-Messeeinsatz", haltbarkeit: "5–10 Messen", preis: "€€", farben: "15+", icon: Shield, color: "text-emerald-500" },
  { material: "ASA", temp: "95°C", empfehlung: "Spotlights & Outdoor", haltbarkeit: "10+ Messen", preis: "€€€", farben: "10+", icon: ThermometerSun, color: "text-amber-500" },
];

const vergleich = [
  { k: "Kosten", ek: "ab €30", kl: "ab €1.000", w: "ek" },
  { k: "Lieferzeit", ek: "24h Express möglich", kl: "3–6 Wochen", w: "ek" },
  { k: "Geometrische Komplexität", ek: "Unbegrenzt", kl: "Stark limitiert", w: "ek" },
  { k: "Reproduzierbarkeit", ek: "1:1 identisch, digital", kl: "Jedes Stück Unikat", w: "ek" },
  { k: "Korrekturen", ek: "Dateiänderung → Neudruck", kl: "Komplett neuer Bau", w: "ek" },
  { k: "Transportgewicht", ek: "70–90% leichter", kl: "Schwer (Holz, Metall)", w: "ek" },
  { k: "Haptik & Oberfläche", ek: "Gut (lackierbar)", kl: "Exzellent (Handarbeit)", w: "kl" },
];

const testimonials = [
  { text: "Das Modell war der absolute Eyecatcher. So viele Standbesucher wie dieses Jahr hatten wir noch nie.", name: "Ing. M. Weber", firma: "Anlagenbau, Linz", messe: "Hannover Messe 2025" },
  { text: "Freitag bestellt, Montag auf der Messe. Hätte ich nicht für möglich gehalten.", name: "S. Berger", firma: "Medizintechnik, Graz", messe: "MEDICA 2024" },
  { text: "Die Qualität ist überraschend gut. Unsere Kunden glauben nicht, dass das gedruckt ist.", name: "DI K. Hofmann", firma: "Architektur, Salzburg", messe: "BAUEN & WOHNEN Wien" },
];

const messeChecklist = [
  { item: "3D-Datei oder Skizze bereitstellen", detail: "STL, STEP, OBJ – oder einfach eine Skizze auf Papier fotografieren" },
  { item: "Maßstab & Größe festlegen", detail: "Wie groß soll das Modell sein? Wie viel Platz haben Sie am Stand?" },
  { item: "Farbwunsch mitteilen", detail: "RAL-Nummer, Pantone-Code oder Hex-Wert aus Ihrem CI-Manual" },
  { item: "Messetermin nennen", detail: "Wann und wo ist Ihre Messe? Wir planen den Zeitrahmen rückwärts" },
  { item: "Lieferadresse angeben", detail: "Direkt zum Messestand? Dann Halle + Standnummer angeben" },
  { item: "Transportbox klären", detail: "Einweg-Verpackung reicht, oder brauchen Sie eine Mehrweg-Transportkiste?" },
];

const faqs = [
  { question: "Was kostet ein 3D-gedrucktes Messemodell?", answer: "Display-Modelle starten ab €30, Standmodelle ab €80, Eyecatcher-Exponate ab €180. Großmodelle und Anlagenmodelle werden individuell kalkuliert. Sie erhalten ein verbindliches Festpreisangebot innerhalb von 6 Stunden – kostenlos und unverbindlich." },
  { question: "Wie schnell kann ein Messemodell gefertigt werden?", answer: "Express-Fertigung in 24–48 Stunden ist möglich. Standard-Lieferzeit beträgt 5–10 Werktage, bei Großmodellen 2–4 Wochen. Wir empfehlen, 4–6 Wochen vor der Messe zu bestellen." },
  { question: "Welche Dateiformate werden für Messemodelle akzeptiert?", answer: "Wir verarbeiten STL, OBJ, STEP, IGES und 3MF. Auch native CAD-Formate aus SolidWorks, Inventor, Fusion 360 und Rhino sind möglich. Kein 3D-Modell vorhanden? Wir erstellen Ihr Exponat auch nach Skizze, Foto oder technischer Zeichnung." },
  { question: "Kann ich mein Messeexponat in unserer CI-Farbe erhalten?", answer: "Ja. Über 20 Filamentfarben ab Lager, oder professionelle Lackierung nach RAL-, Pantone- oder HEX-Farbwerten – exakt nach Ihrem Corporate Design." },
  { question: "Wie wird das Exponat bruchsicher zur Messe geliefert?", answer: "Individuelle Schaumstoffverpackung mit doppelwandigem Karton. Großmodelle in verstärkten Holzkisten. Lieferung direkt zum Messestand in Wien, München, Düsseldorf, Basel und weiteren Messestädten." },
  { question: "Was unterscheidet 3D-Druck vom klassischen Modellbau für Messen?", answer: "3D-Druck ist 5–10× schneller (Express 24h statt 3–6 Wochen), 60–80% günstiger und erlaubt unbegrenzte geometrische Komplexität. Digital reproduzierbar – Korrekturen kosten nur eine Dateiänderung." },
  { question: "Bieten Sie Express-Service für kurzfristige Messetermine?", answer: "Ja. 24–48h Express-Fertigung ohne Qualitätseinbußen. Selbst bei Bestellung am Freitag kann Ihr Messemodell am Montag auf dem Stand stehen. Rufen Sie an: +43 676 5517197." },
  { question: "Für welche Messen in Österreich, Deutschland und der Schweiz liefern Sie?", answer: "Alle Messen im DACH-Raum: Wien (Reed Messe), München (BAU, IFAT), Düsseldorf (MEDICA), Hannover (Hannover Messe), Frankfurt (Automechanika), Nürnberg (SPS), Basel (Swissbau), St. Gallen (OLMA), Zürich und viele weitere." },
  { question: "Kann ein Messemodell für mehrere Messen wiederverwendet werden?", answer: "Ja. Modelle aus PETG oder ASA sind extrem robust und überstehen 5–10 Messeeinsätze. Wir empfehlen eine Transportbox für sichere Lagerung zwischen den Einsätzen." },
  { question: "Welches Material eignet sich für Messemodelle bei Spotbeleuchtung?", answer: "PLA wird ab 55°C weich. Wir empfehlen PETG (bis 75°C) oder ASA (bis 95°C) für beleuchtete Stände. ASA ist zudem UV-beständig für Outdoor-Messen und Freiluft-Events." },
  { question: "Wie groß kann ein 3D-gedrucktes Messemodell maximal sein?", answer: "Unsere Drucker fertigen Einzelteile bis 60 cm Kantenlänge. Durch segmentierten Druck und passgenaue Verbindungen sind Gesamtgrößen bis 2 Meter und darüber hinaus möglich. Die einzelnen Segmente werden so gefertigt, dass die Nahtstellen nach dem Zusammenbau unsichtbar sind." },
  { question: "Bieten Sie auch die Montage vor Ort am Messestand an?", answer: "In Wien, Wels und Salzburg bieten wir persönliche Lieferung und Aufbauunterstützung an. Für andere Standorte liefern wir detaillierte Aufbauanleitungen mit nummerierten Teilen, sodass der Zusammenbau in wenigen Minuten gelingt." },
];

const Messemodelle = () => (
  <>
    <SEOHead title="Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express | ekdruck" description="Messemodelle drucken lassen: Ausstellungsmodelle, Exponate & Schaumodelle für DACH-Messen. Express 24h · ab €30 · bruchsicher · ★5,0 (31 Bewertungen)" keywords="messemodelle, messemodell drucken lassen, messeexponat, ausstellungsmodell, präsentationsmodell, exponat, schaumodell, anschauungsmodell, industriemodell, messemodelle kosten, 3d druck messe, messestand modell, produktmodell messe, demonstrationsmodell, standmodell, eyecatcher messestand" path="/messemodelle" />
    <ProductOfferSchema name="Messemodelle & Exponate 3D-Druck" description="3D-gedruckte Messemodelle, Exponate und Präsentationsmodelle für Fachmessen in Österreich, Deutschland und der Schweiz. Express 24h." price="30" image="https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png" />
    <Navigation />
    <main className="min-h-screen bg-background">

      {/* ════════════════════════════════════════════
          HERO – Immersiver Einstieg
          ════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(hsl(var(--border)/0.4) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="sticker border-primary text-primary w-fit mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Angebot in 6 Stunden · Express 24h
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-[-0.04em] mb-6">
                Messemodelle &<br />
                <span className="text-gradient">Exponate drucken lassen</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
                Ihr Produkt ist zu groß, zu schwer oder zu teuer für den Messetransport? Wir fertigen
                maßstabsgetreue Ausstellungsmodelle, Schaumodelle und Präsentationsmodelle aus dem 3D-Druck –
                pünktlich zu Ihrer nächsten Messe in Wien, München, Düsseldorf, Zürich oder Basel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-14">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg" asChild>
                  <Link href="#kontakt">Messemodell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base font-semibold" asChild>
                  <Link href="#preise"><Calculator className="mr-2 w-4 h-4" /> Preise ansehen</Link>
                </Button>
                <Button size="lg" variant="ghost" className="rounded-full px-8 py-7 text-base" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Direkt anrufen</a>
                </Button>
              </div>
            </AnimatedSection>

            {/* Hero Stats – Groß, visuell stark */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { v: "24h", l: "Express-Fertigung", sub: "Über-Nacht-Service" },
                  { v: "2m+", l: "Maximale Modellgröße", sub: "Segmentierter Druck" },
                  { v: "50+", l: "Messen beliefert", sub: "AT · DE · CH" },
                  { v: "5.0★", l: "Google Rating", sub: "31 Bewertungen" },
                ].map(s => (
                  <div key={s.l} className="text-center p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/20 transition-colors">
                    <p className="mono text-3xl md:text-4xl font-bold text-foreground tracking-tight">{s.v}</p>
                    <p className="mono text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-[0.15em]">{s.l}</p>
                    <p className="text-[11px] text-muted-foreground/60 mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SOCIAL PROOF – Testimonials Band
          ════════════════════════════════════════════ */}
      <section className="py-6 border-y border-border bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="fade-in" delay={i * 150}>
                <div className="flex gap-4 items-start">
                  <MessageSquareQuote className="w-8 h-8 text-primary/30 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground/80 leading-relaxed italic mb-2">"{t.text}"</p>
                    <p className="mono text-[10px] font-bold text-foreground uppercase tracking-[0.1em]">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t.firma} · {t.messe}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BRANCHEN USE-CASES – Erweitert
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16 max-w-3xl">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Branchen & Anwendungen</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
                Ihr Produkt als Exponat –<br />
                <span className="text-gradient">für jede Branche die passende Lösung</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ob Industrieanlage, Medizinprodukt oder Immobilienprojekt: Wir übersetzen komplexe Produkte
                in greifbare Messemodelle, Demonstrationsmodelle und Ausstellungsmodelle.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {branchenUseCases.map((uc, i) => (
                <AnimatedSection key={uc.branche} animation="slide-up" delay={i * 80}>
                  <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 group">
                    <CardContent className="p-6 md:p-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <uc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{uc.branche}</p>
                      <h3 className="text-lg font-bold mb-3 tracking-tight">{uc.titel}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.text}</p>
                      <div className="border-t border-border/50 pt-3 space-y-1">
                        <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Referenz:</span> {uc.beispiel}</p>
                        <p className="text-[10px] text-muted-foreground/60">Keywords: {uc.keywords}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PREISE – Visuell aufgewertet
          ════════════════════════════════════════════ */}
      <section id="preise" className="py-20 md:py-28 bg-muted/30 border-y border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Transparent kalkuliert</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Was kostet ein Messemodell?</h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                Keine versteckten Kosten. Verbindliches Festpreisangebot innerhalb von 6 Stunden – kostenlos und unverbindlich.
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {preisstufen.map((p, i) => (
                <AnimatedSection key={p.typ} animation="slide-up" delay={i * 100}>
                  <Card className={`h-full border-2 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${i === 2 ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' : 'border-border hover:border-primary/30'}`}>
                    {i === 2 && <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />}
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <p.icon className="w-5 h-5 text-primary" />
                        </div>
                        {i === 2 && <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-wider">Beliebt</span>}
                      </div>
                      <p className="text-xl font-bold">{p.typ}</p>
                      <p className="text-3xl font-bold text-primary mt-1">{p.preis}</p>
                      <p className="mono text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                        <Ruler className="w-3 h-3" /> {p.groesse}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.beschreibung}</p>
                      <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                        <div className="flex items-center gap-2 text-xs"><Clock className="w-3.5 h-3.5 text-primary" /><span>{p.lieferzeit}</span></div>
                        <div className="flex items-center gap-2 text-xs"><Package className="w-3.5 h-3.5 text-primary" /><span>{p.material}</span></div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Express & ROI Hinweis */}
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedSection animation="fade-in">
                <div className="rounded-2xl p-6 border-2 border-primary/20 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Express-Fertigung: +50% Aufpreis</p>
                      <p className="text-sm text-muted-foreground mb-3">Lieferung in 24–48h. Wir fertigen über Nacht und liefern direkt zum Messegelände.</p>
                      <a href="tel:+436765517197" className="mono text-sm font-bold text-primary hover:underline flex items-center gap-1.5">
                        <Phone className="w-4 h-4" /> +43 676 5517197
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="rounded-2xl p-6 border border-border/50 bg-card">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold mb-1">Ihr ROI: Das Modell rechnet sich</p>
                      <p className="text-sm text-muted-foreground">Ein Eyecatcher-Exponat ab €180 generiert im Schnitt 30–50% mehr Standgespräche. Bei einem durchschnittlichen Lead-Wert von €500+ ist der Return on Investment nach einem einzigen qualifizierten Kontakt erreicht.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MATERIAL-RATGEBER – Visuell stark
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Material-Ratgeber</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
                Welches Material für <span className="text-gradient">Ihren Messeeinsatz?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                Die Materialwahl entscheidet über Haltbarkeit, Optik und Kosten Ihres Messemodells.
                Hier unser Schnellberater – oder lesen Sie den ausführlichen <Link href="/ratgeber/material-guide" className="text-primary font-semibold hover:underline">Material-Guide</Link>.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-4">
              {materialGuide.map((m, i) => (
                <AnimatedSection key={m.material} animation="slide-up" delay={i * 100}>
                  <div className={`rounded-2xl border-2 p-6 h-full transition-all hover:-translate-y-1 ${i === 1 ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'}`}>
                    {i === 1 && <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Empfehlung</span>}
                    <div className="flex items-center gap-3 mb-4">
                      <m.icon className={`w-8 h-8 ${m.color}`} />
                      <div>
                        <p className="text-2xl font-bold">{m.material}</p>
                        <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider">{m.empfehlung}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="mono text-lg font-bold">{m.temp}</p>
                        <p className="text-[10px] text-muted-foreground">Max. Temperatur</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="mono text-lg font-bold">{m.haltbarkeit}</p>
                        <p className="text-[10px] text-muted-foreground">Haltbarkeit</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="mono text-lg font-bold">{m.farben}</p>
                        <p className="text-[10px] text-muted-foreground">Farben</p>
                      </div>
                      <div className="rounded-lg bg-muted/50 p-3 text-center">
                        <p className="mono text-lg font-bold">{m.preis}</p>
                        <p className="text-[10px] text-muted-foreground">Preislevel</p>
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
          VERGLEICH – Dark Section
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Vergleich</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">3D-Druck vs. klassischer Modellbau</h2>
              <p className="text-background/60 max-w-2xl text-base">Warum entscheiden sich über 80% unserer Kunden für 3D-Druck statt traditionellen Modellbau?</p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up">
              <div className="rounded-2xl overflow-hidden border border-background/10">
                <div className="grid grid-cols-3 bg-background/5 border-b border-background/10">
                  <div className="p-4 mono text-[10px] font-bold text-background/50 uppercase tracking-[0.2em]">Kriterium</div>
                  <div className="p-4 text-center font-bold text-primary text-sm flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> ekdruck 3D-Druck
                  </div>
                  <div className="p-4 mono text-[10px] font-bold text-background/50 uppercase tracking-[0.2em] text-center">Handmodellbau</div>
                </div>
                {vergleich.map(r => (
                  <div key={r.k} className="grid grid-cols-3 border-b border-background/10 last:border-b-0 hover:bg-background/5 transition-colors">
                    <div className="p-4 font-medium text-sm text-background/80">{r.k}</div>
                    <div className="p-4 text-center border-x border-background/10">
                      <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${r.w === 'ek' ? 'text-primary' : 'text-background/60'}`}>
                        {r.w === 'ek' && <CheckCircle className="w-4 h-4" />} {r.ek}
                      </span>
                    </div>
                    <div className="p-4 text-center">
                      <span className={`text-sm ${r.w === 'kl' ? 'text-primary font-bold' : 'text-background/40'}`}>
                        {r.w === 'kl' && <CheckCircle className="w-4 h-4 inline mr-1" />} {r.kl}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ABLAUF + CHECKLISTE – Side by Side
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ihr Weg zum Messemodell</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Vom Standkonzept zum fertigen Exponat</h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                Idealerweise bestellen Sie 4–6 Wochen vor der Messe. Aber auch Last-Minute-Anfragen meistern wir – bis 48h vor Aufbautag.
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* 4 Schritte */}
              <div className="lg:col-span-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { s: "01", t: "Anfrage senden", tx: "CAD-Datei, Skizze oder Produktbeschreibung – wir brauchen nur eine grobe Idee und Ihren Messetermin. Antwort garantiert am selben Tag.", tm: "2 Min", ic: Target },
                    { s: "02", t: "Angebot erhalten", tx: "Verbindlicher Festpreis mit Material- und Größenempfehlung, Visualisierung und Zeitplan. Kostenlos, innerhalb von 6 Stunden.", tm: "< 6h", ic: Calculator },
                    { s: "03", t: "Fertigung & QA", tx: "Druck, Nachbearbeitung, Qualitätskontrolle. Bei Bedarf Zwischenfoto zur Freigabe. Express: Über-Nacht-Fertigung möglich.", tm: "1–14 Tage", ic: Wrench },
                    { s: "04", t: "Lieferung zur Messe", tx: "Bruchsichere Individualverpackung, Versand mit Tracking und Versicherung. Direkte Standlieferung mit Hallen- und Standnummer.", tm: "1–3 Tage", ic: Truck },
                  ].map((st, i) => (
                    <AnimatedSection key={st.s} animation="slide-up" delay={i * 100}>
                      <div className="relative p-6 rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 h-full">
                        <p className="mono text-6xl font-bold text-foreground/[0.04] absolute top-2 right-4">{st.s}</p>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <st.ic className="w-5 h-5 text-primary" />
                          </div>
                          <span className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{st.tm}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 tracking-tight">{st.t}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{st.tx}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Checkliste */}
              <div className="lg:col-span-2">
                <AnimatedSection animation="slide-up" delay={200}>
                  <div className="rounded-2xl border-2 border-border bg-muted/30 p-6 h-full">
                    <div className="flex items-center gap-2 mb-6">
                      <BadgeCheck className="w-5 h-5 text-primary" />
                      <p className="font-bold">Checkliste: Was wir von Ihnen brauchen</p>
                    </div>
                    <div className="space-y-4">
                      {messeChecklist.map((c, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="mono text-[10px] font-bold text-primary">{i + 1}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">{c.item}</p>
                            <p className="text-xs text-muted-foreground">{c.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 rounded-full" asChild>
                      <Link href="#kontakt">Jetzt Anfrage starten <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          MESSE-KALENDER – Visuell hochwertiger Timeline-Stil
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messekalender DACH 2026/2027</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
                Ihre nächste Messe –<br />
                <span className="text-gradient">wann Sie bestellen sollten</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
                Optimale Vorlaufzeit: 4–6 Wochen. Express bis 48h. Finden Sie Ihre Messe und den idealen Bestellzeitpunkt.
              </p>
            </AnimatedSection>

            {/* Timeline-artiger Kalender */}
            <AnimatedSection animation="slide-up">
              <div className="rounded-2xl border-2 border-border overflow-hidden bg-card">
                {/* Header */}
                <div className="grid grid-cols-12 gap-0 border-b border-border bg-muted/50 px-4 py-3 text-[10px]">
                  <div className="col-span-3 md:col-span-3 mono font-bold uppercase tracking-wider text-muted-foreground">Messe</div>
                  <div className="col-span-3 md:col-span-2 mono font-bold uppercase tracking-wider text-muted-foreground">Ort</div>
                  <div className="col-span-2 md:col-span-2 mono font-bold uppercase tracking-wider text-muted-foreground">Termin</div>
                  <div className="col-span-2 md:col-span-2 mono font-bold uppercase tracking-wider text-muted-foreground hidden md:block">Branche</div>
                  <div className="col-span-4 md:col-span-3 mono font-bold uppercase tracking-wider text-primary">Bestellen ab</div>
                </div>
                {/* Rows */}
                {messeKalenderAT.map((m, i) => (
                  <div key={m.name} className={`grid grid-cols-12 gap-0 px-4 py-3 border-b border-border/50 last:border-b-0 hover:bg-primary/[0.02] transition-colors items-center text-sm ${m.status === 'bald' ? 'bg-primary/[0.04]' : ''}`}>
                    <div className="col-span-3 md:col-span-3 font-semibold text-foreground truncate pr-2 flex items-center gap-2">
                      {m.status === 'bald' && <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />}
                      {m.name}
                    </div>
                    <div className="col-span-3 md:col-span-2 text-muted-foreground text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 shrink-0" /> {m.ort}
                    </div>
                    <div className="col-span-2 md:col-span-2 mono text-xs font-medium">{m.datum}</div>
                    <div className="col-span-2 md:col-span-2 text-xs text-muted-foreground hidden md:block">{m.branche}</div>
                    <div className="col-span-4 md:col-span-3">
                      <span className={`inline-flex items-center gap-1.5 mono text-xs font-bold px-2.5 py-1 rounded-full ${m.status === 'bald' ? 'bg-amber-500/10 text-amber-600' : 'bg-primary/10 text-primary'}`}>
                        <Timer className="w-3 h-3" /> {m.bestellStart}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Bestellfenster öffnet bald
                </div>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <p className="text-sm text-muted-foreground">Ihre Messe fehlt? <Link href="#kontakt" className="text-primary font-semibold hover:underline">Messetermin mitteilen →</Link></p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SEO CONTENT – Tiefer, keyword-reicher Fließtext
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="mb-10">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messemodelle im Detail</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
                  Warum 3D-gedruckte Exponate Ihren Messeauftritt verändern
                </h2>
              </div>
              <div className="space-y-8 text-base leading-[1.85] text-foreground/85">
                <p>
                  Ein physisches Modell am Messestand erzeugt mehr Aufmerksamkeit als jeder Bildschirm. Besucher bleiben stehen,
                  greifen zu, stellen Fragen – und erinnern sich. Studien zeigen: Haptische Erlebnisse bleiben bis zu 6× länger im
                  Gedächtnis als rein visuelle Reize. <strong>Messemodelle und Exponate aus dem 3D-Druck</strong> machen genau das möglich –
                  schnell, präzise und wirtschaftlich.
                </p>
                <p>
                  Ob maßstabsgetreues{' '}
                  <Link href="/messemodelle/muenchen" className="text-primary font-semibold hover:underline">Anschauungsmodell für die BAU München</Link>,
                  ein Produktmodell als Blickfang am Messestand, ein technisches Schnittmodell für die{' '}
                  <Link href="/messemodelle/hannover" className="text-primary font-semibold hover:underline">Hannover Messe</Link>{' '}
                  oder ein Exponat für die{' '}
                  <Link href="/messemodelle/zuerich" className="text-primary font-semibold hover:underline">FINANZ Zürich</Link>{' '}
                  – wir fertigen Ihr Messemodell termingerecht und bruchsicher.
                </p>

                <div className="rounded-2xl bg-muted/40 border border-border/50 p-6 md:p-8 not-prose">
                  <h3 className="font-bold text-xl mb-3 text-foreground">Ausstellungsmodelle für den gesamten DACH-Raum</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Von unserem Standort in Gunskirchen (Oberösterreich) beliefern wir <strong className="text-foreground">alle Messen in Österreich, Deutschland
                    und der Schweiz</strong>. In{' '}
                    <Link href="/messemodelle/wien" className="text-primary hover:underline">Wien</Link>,{' '}
                    <Link href="/messemodelle/linz" className="text-primary hover:underline">Linz/Wels</Link> und{' '}
                    <Link href="/messemodelle/salzburg" className="text-primary hover:underline">Salzburg</Link>{' '}
                    bieten wir persönliche Lieferung und Aufbauunterstützung an. Nach{' '}
                    <Link href="/messemodelle/muenchen" className="text-primary hover:underline">München</Link>,{' '}
                    <Link href="/messemodelle/nuernberg" className="text-primary hover:underline">Nürnberg</Link> und{' '}
                    <Link href="/messemodelle/stuttgart" className="text-primary hover:underline">Stuttgart</Link>{' '}
                    liefern wir innerhalb von 3–5 Werktagen über die Autobahnachse A8/A93. Die Schweizer Messestädte{' '}
                    <Link href="/messemodelle/basel" className="text-primary hover:underline">Basel</Link>,{' '}
                    <Link href="/messemodelle/zuerich" className="text-primary hover:underline">Zürich</Link>,{' '}
                    <Link href="/messemodelle/bern" className="text-primary hover:underline">Bern</Link> und{' '}
                    <Link href="/messemodelle/st-gallen" className="text-primary hover:underline">St. Gallen</Link>{' '}
                    erreichen wir zuverlässig – inklusive vollständiger Zolldokumentation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Vom Standmodell zum Eyecatcher – unser Leistungsspektrum</h3>
                  <p>
                    Wir fertigen alle Arten von Messemodellen: <strong>Produktmodelle</strong> in Originalgröße oder
                    verkleinert, <strong>Industriemodelle</strong> von Anlagen und Maschinen, <strong>Präsentationsmodelle</strong> für
                    Immobilien und Architektur, <strong>Demonstrationsmodelle</strong> mit aufklappbaren Gehäusen oder Schnittdarstellungen,
                    sowie großformatige <strong>Schaumodelle</strong> als Eyecatcher. Modelle bis 2 Meter Höhe werden segmentiert
                    gedruckt und vor Ort zusammengesetzt – die Nahtstellen sind nach professioneller Nachbearbeitung unsichtbar.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Mehr als nur ein Modell: Ihr strategisches Messewerkzeug</h3>
                  <p>
                    Ein hochwertiges Messeexponat ist kein Deko-Objekt – es ist ein <strong>Vertriebswerkzeug</strong>. Ein gut platziertes
                    Anschauungsmodell reduziert die Erklärzeit um bis zu 70%, erhöht die Verweildauer am Stand und qualifiziert
                    Leads: Wer sich für das Modell interessiert, interessiert sich für Ihr Produkt. Deshalb bestellen viele unserer
                    Kunden nach der ersten Messe direkt Modelle für die nächsten Veranstaltungen – oft in verschiedenen Maßstäben
                    für unterschiedliche Zielgruppen.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Wer bestellt Messemodelle bei ekdruck?</h3>
                  <p>
                    Unsere Kunden sind <strong>Messeaussteller, Eventagenturen, Produktmanager und Marketing-Abteilungen</strong> aus
                    dem DACH-Raum – aus Maschinenbau, Baubranche, Medizintechnik, Automotive und Energiesektor. Was sie verbindet:
                    Sie brauchen ein physisches Modell, das ihr Produkt am Messestand greifbar macht – und zwar pünktlich,
                    professionell und bezahlbar. Mehr zu unseren B2B-Konditionen unter{' '}
                    <Link href="/firmenkunden" className="text-primary font-semibold hover:underline">Firmenkunden</Link>.
                    Informationen zu unseren <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodellen</Link>{' '}
                    finden Sie auf der separaten Serviceseite.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ – Erweitert auf 12
          ════════════════════════════════════════════ */}
      <FAQSection faqs={faqs} title="Häufige Fragen zu Messemodellen & Exponaten" subtitle="Alles was Sie vor der Bestellung wissen sollten" schemaId="messemodelle-faq" />

      {/* ════════════════════════════════════════════
          REGIONEN
          ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">
              Messemodelle für <span className="text-primary">ganz Österreich, Deutschland & Schweiz</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Standort Gunskirchen (OÖ) – Express AT 24h, DE 2–5 Tage, CH 3–5 Tage.
            </p>
          </AnimatedSection>
          <RegionalCoverage serviceName="Messemodelle" baseUrl="messemodelle" />
          <AllRegionsLinks currentSlug="" type="messe" />
        </div>
      </section>

      {/* ════════════════════════════════════════════
          KONTAKT
          ════════════════════════════════════════════ */}
      <section id="kontakt" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Messemodelle;
