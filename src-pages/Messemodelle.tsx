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
  Sparkles, Award, Target, Eye, Calendar, Briefcase, TrendingUp,
  Factory, Shield, Truck, Star, Building2, Wrench,
  Lightbulb, Users, Globe, Timer, Calculator, X
} from "lucide-react";

const messeKalender = [
  { name: "BAUEN & WOHNEN Wien", ort: "Wien", land: "AT", datum: "Nov 2026", branche: "Bau & Immobilien", bestellDeadline: "Sep 2026" },
  { name: "VIENNA AUTOSHOW", ort: "Wien", land: "AT", datum: "Jan 2027", branche: "Automotive", bestellDeadline: "Nov 2026" },
  { name: "Welser Messe (Herbst)", ort: "Wels", land: "AT", datum: "Sep 2026", branche: "Industrie & Gewerbe", bestellDeadline: "Jul 2026" },
  { name: "Häuslbauermesse", ort: "Graz", land: "AT", datum: "Jan 2027", branche: "Bau & Wohnen", bestellDeadline: "Nov 2026" },
  { name: "AGRARIA", ort: "Wels", land: "AT", datum: "Nov 2026", branche: "Landwirtschaft", bestellDeadline: "Sep 2026" },
  { name: "Power-Days", ort: "Salzburg", land: "AT", datum: "Mär 2027", branche: "Elektrotechnik", bestellDeadline: "Jan 2027" },
  { name: "Hannover Messe", ort: "Hannover", land: "DE", datum: "Apr 2027", branche: "Industrie & Automation", bestellDeadline: "Feb 2027" },
  { name: "BAU München", ort: "München", land: "DE", datum: "Jan 2027", branche: "Bau & Architektur", bestellDeadline: "Nov 2026" },
  { name: "MEDICA", ort: "Düsseldorf", land: "DE", datum: "Nov 2026", branche: "Medizintechnik", bestellDeadline: "Sep 2026" },
  { name: "SPS", ort: "Nürnberg", land: "DE", datum: "Nov 2026", branche: "Automatisierung", bestellDeadline: "Sep 2026" },
  { name: "electronica", ort: "München", land: "DE", datum: "Nov 2026", branche: "Elektronik", bestellDeadline: "Sep 2026" },
  { name: "IFAT", ort: "München", land: "DE", datum: "Mai 2026", branche: "Umwelttechnik", bestellDeadline: "Mär 2026" },
  { name: "Automechanika", ort: "Frankfurt", land: "DE", datum: "Sep 2026", branche: "Automotive Aftermarket", bestellDeadline: "Jul 2026" },
  { name: "LIGNA", ort: "Hannover", land: "DE", datum: "Mai 2027", branche: "Holzverarbeitung", bestellDeadline: "Mär 2027" },
  { name: "OLMA", ort: "St. Gallen", land: "CH", datum: "Okt 2026", branche: "Landwirtschaft & Ernährung", bestellDeadline: "Aug 2026" },
  { name: "BEA Bern", ort: "Bern", land: "CH", datum: "Apr 2027", branche: "Gewerbe & Landwirtschaft", bestellDeadline: "Feb 2027" },
  { name: "Swissbau", ort: "Basel", land: "CH", datum: "Jan 2027", branche: "Bau & Immobilien", bestellDeadline: "Nov 2026" },
  { name: "PRODEX", ort: "Basel", land: "CH", datum: "Nov 2026", branche: "Fertigungsindustrie", bestellDeadline: "Sep 2026" },
  { name: "LUGA", ort: "Luzern", land: "CH", datum: "Apr 2027", branche: "Gewerbe & Lifestyle", bestellDeadline: "Feb 2027" },
];

const branchenUseCases = [
  { icon: Factory, branche: "Maschinenbau & Industrie", titel: "Industrieanlage als Anschauungsmodell", text: "Ihre Maschine wiegt 8 Tonnen und passt in keine Messehalle? Wir fertigen maßstabsgetreue Industriemodelle, die komplexe Anlagen auf Tischgröße bringen. Schnittmodelle zeigen das Innenleben, bewegliche Teile verdeutlichen Funktionsabläufe.", beispiel: "Sägeanlage 1:20 für die LIGNA – 47 Einzelteile, funktionsfähige Kanzel" },
  { icon: Building2, branche: "Immobilien & Bau", titel: "Immobilienprojekt als Präsentationsmodell", text: "Bauträger, Projektentwickler und Architekten nutzen unsere Präsentationsmodelle für Verkaufsgespräche, Baueinreichungen und Messeauftritte. Maßstab 1:50 bis 1:500, mit Geländemodellierung und optionaler Beleuchtung.", beispiel: "Wohnbauprojekt 1:100 für die BAUEN & WOHNEN Wien – 3 Gebäude mit Umgebung" },
  { icon: Wrench, branche: "Automotive & Zulieferer", titel: "Fahrzeugkomponenten als Exponat", text: "Von der Einzelkomponente bis zum Cutaway-Modell: Wir drucken Ausstellungsmodelle für den Automotive-Bereich. Vergrößerte Darstellungen machen filigrane Bauteile sichtbar, verkleinerte Gesamtfahrzeuge sparen Standfläche.", beispiel: "Bremsanlage 3:1 für die Automechanika Frankfurt – Schnittdarstellung mit CI-Farben" },
  { icon: Lightbulb, branche: "Medizintechnik & Pharma", titel: "Medizinprodukt greifbar machen", text: "Erklärungsbedürftige Medizingeräte werden als Demonstrationsmodell sofort verständlich. Chirurgische Instrumente, Diagnostikgeräte oder Implantate in vergrößerter Darstellung erzeugen den entscheidenden Aha-Effekt am Messestand.", beispiel: "Insulinpumpe 5:1 für die MEDICA Düsseldorf – mit aufklappbarem Gehäuse" },
  { icon: Globe, branche: "Energie & Umwelttechnik", titel: "Infrastrukturprojekt visualisieren", text: "Windparks, Solaranlagen, Kläranlagen oder Wasserkraftwerke: Wir erstellen Schaumodelle, die komplexe Infrastrukturprojekte auf einen Blick verständlich machen. Ideal für Fachmessen wie die IFAT oder die RENEXPO.", beispiel: "Kläranlage 1:50 für die IFAT München – mit Fließrichtungspfeilen" },
  { icon: Briefcase, branche: "Start-ups & Dienstleister", titel: "Abstrakte Produkte physisch erlebbar", text: "Kein physisches Produkt? Kein Problem. Wir übersetzen Software, Prozesse oder Dienstleistungen in symbolische Exponatmodelle, die als Gesprächsstarter am Messestand funktionieren und Ihre Innovation greifbar machen.", beispiel: "Symbolisches Prozessmodell für ein FinTech – modularer Aufbau zum Zusammenstecken" },
];

const preisstufen = [
  { typ: "Display-Modell", preis: "ab €30", groesse: "bis 15 cm", beschreibung: "Tischmodelle für Besprechungsräume, POS oder als Geschenk für Messebesucher.", lieferzeit: "3–5 Tage", material: "PLA / PLA+" },
  { typ: "Standmodell", preis: "ab €80", groesse: "15–40 cm", beschreibung: "Aufmerksamkeitsstarke Produktmodelle, verkleinerte Maschinen oder Architekturmodelle für den Messestand.", lieferzeit: "5–7 Tage", material: "PETG / ASA" },
  { typ: "Eyecatcher-Exponat", preis: "ab €180", groesse: "40–80 cm", beschreibung: "Großformatige Präsentationsmodelle als Blickfang. Segmentiert gedruckt, lackierbar, mit Sockelplatte.", lieferzeit: "7–10 Tage", material: "PETG / ASA / ABS" },
  { typ: "Großmodell / Anlage", preis: "auf Anfrage", groesse: "80 cm – 2m+", beschreibung: "Maßstabsgetreue Industriemodelle, Anlagenmodelle oder Infrastrukturprojekte mit Aufbauanleitung.", lieferzeit: "2–4 Wochen", material: "nach Anforderung" },
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

const Messemodelle = () => (
  <>
    <SEOHead title="Messemodelle, Exponate & Präsentationsmodelle | 3D-Druck Express | ekdruck" description="Messemodelle drucken lassen: Ausstellungsmodelle, Exponate & Schaumodelle für DACH-Messen. Express 24h · ab €30 · bruchsicher · ★5,0 (31 Bewertungen)" keywords="messemodelle, messemodell drucken lassen, messeexponat, ausstellungsmodell, präsentationsmodell, exponat, schaumodell, anschauungsmodell, industriemodell, messemodelle kosten, 3d druck messe, messestand modell, produktmodell messe, demonstrationsmodell" path="/messemodelle" />
    <ProductOfferSchema name="Messemodelle & Exponate 3D-Druck" description="3D-gedruckte Messemodelle, Exponate und Präsentationsmodelle für Fachmessen in Österreich, Deutschland und der Schweiz. Express 24h." price="30" image="https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png" />
    <Navigation />
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"><div className="absolute inset-0" style={{backgroundImage:'linear-gradient(hsl(var(--border)/0.3) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--border)/0.3) 1px,transparent 1px)',backgroundSize:'80px 80px'}}/><div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]"/></div>
        <div className="relative z-10 container mx-auto px-4"><div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="sticker border-primary text-primary w-fit mb-8"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>Angebot in 6 Stunden · Express 24h</div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-6">Messemodelle &<br/><span className="text-gradient">Exponate drucken lassen</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">Ihr Produkt ist zu groß, zu schwer oder zu teuer für den Messetransport? Wir fertigen maßstabsgetreue Ausstellungsmodelle, Schaumodelle und Präsentationsmodelle aus dem 3D-Druck – pünktlich zu Ihrer nächsten Messe in Wien, München, Düsseldorf, Zürich oder Basel.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg" asChild><Link href="#kontakt">Messemodell anfragen <ArrowRight className="ml-2 w-5 h-5"/></Link></Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base font-semibold" asChild><Link href="#preise"><Calculator className="mr-2 w-4 h-4"/>Preise & Lieferzeiten</Link></Button>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[{v:"24h",l:"Express-Fertigung"},{v:"2m+",l:"Maximale Modellgröße"},{v:"50+",l:"Messen beliefert"},{v:"5.0★",l:"Google (31 Bew.)"}].map(s=>(
                <div key={s.l} className="text-center p-4 rounded-2xl border border-border/50 bg-muted/30"><p className="mono text-3xl md:text-4xl font-bold text-foreground tracking-tight">{s.v}</p><p className="mono text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-[0.15em]">{s.l}</p></div>
              ))}
            </div>
          </AnimatedSection>
        </div></div>
      </section>

      {/* BRANCHEN */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4"><div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-16">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Branchen & Anwendungen</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Ihr Produkt als Exponat –<br/><span className="text-gradient">für jede Branche die passende Lösung</span></h2>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">Ob Industrieanlage, Medizinprodukt oder Immobilienprojekt: Wir übersetzen komplexe Produkte in greifbare Messemodelle, Demonstrationsmodelle und Ausstellungsmodelle.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branchenUseCases.map((uc,i)=>(
              <AnimatedSection key={uc.branche} animation="slide-up" delay={i*80}>
                <Card className="h-full border-2 border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><uc.icon className="w-6 h-6 text-primary"/></div>
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{uc.branche}</p>
                    <h3 className="text-lg font-bold mb-3 tracking-tight">{uc.titel}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.text}</p>
                    <div className="border-t border-border/50 pt-3"><p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Beispiel:</span> {uc.beispiel}</p></div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div></div>
      </section>

      {/* PREISE */}
      <section id="preise" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4"><div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-14">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Transparent kalkuliert</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Was kostet ein Messemodell?</h2>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">Keine versteckten Kosten. Verbindliches Festpreisangebot innerhalb von 6 Stunden – kostenlos und unverbindlich.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {preisstufen.map((p,i)=>(
              <AnimatedSection key={p.typ} animation="slide-up" delay={i*100}>
                <Card className={`h-full border-2 transition-all duration-300 hover:-translate-y-1 ${i===2?'border-primary bg-primary/5':'border-border hover:border-primary/30'}`}>
                  <CardContent className="p-6">
                    {i===2&&<span className="mono text-[10px] font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full uppercase tracking-wider">Beliebt</span>}
                    <p className="text-2xl font-bold mt-3">{p.typ}</p>
                    <p className="text-3xl font-bold text-primary mt-1">{p.preis}</p>
                    <p className="mono text-xs text-muted-foreground mt-1">{p.groesse}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.beschreibung}</p>
                    <div className="mt-4 pt-4 border-t border-border/50 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs"><Clock className="w-3.5 h-3.5 text-primary"/><span>{p.lieferzeit}</span></div>
                      <div className="flex items-center gap-2 text-xs"><Package className="w-3.5 h-3.5 text-primary"/><span>{p.material}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-in">
            <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-3"><Zap className="w-5 h-5 text-primary mt-0.5 shrink-0"/><div><p className="font-bold text-sm mb-1">Express-Fertigung: +50% Aufpreis, Lieferung in 24–48h</p><p className="text-sm text-muted-foreground">Messe übermorgen? Kein Problem. Wir fertigen über Nacht und liefern direkt zum Messegelände. <a href="tel:+436765517197" className="text-primary font-semibold hover:underline">+43 676 5517197</a></p></div></div>
            </div>
          </AnimatedSection>
        </div></div>
      </section>

      {/* VERGLEICH */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-14">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Vergleich</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">3D-Druck vs. klassischer Modellbau</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up">
            <div className="rounded-2xl overflow-hidden border border-background/10">
              <div className="grid grid-cols-3 bg-background/5 border-b border-background/10">
                <div className="p-4 mono text-[10px] font-bold text-background/50 uppercase tracking-[0.2em]">Kriterium</div>
                <div className="p-4 text-center font-bold text-primary text-sm flex items-center justify-center gap-2"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>ekdruck</div>
                <div className="p-4 mono text-[10px] font-bold text-background/50 uppercase tracking-[0.2em] text-center">Handmodellbau</div>
              </div>
              {vergleich.map(r=>(
                <div key={r.k} className="grid grid-cols-3 border-b border-background/10 hover:bg-background/5 transition-colors">
                  <div className="p-4 font-medium text-sm text-background/80">{r.k}</div>
                  <div className="p-4 text-center border-x border-background/10"><span className={`inline-flex items-center gap-1.5 text-sm font-bold ${r.w==='ek'?'text-primary':'text-background/60'}`}>{r.w==='ek'&&<CheckCircle className="w-4 h-4"/>}{r.ek}</span></div>
                  <div className="p-4 text-center"><span className={`text-sm ${r.w==='kl'?'text-primary font-bold':'text-background/40'}`}>{r.w==='kl'&&<CheckCircle className="w-4 h-4 inline mr-1"/>}{r.kl}</span></div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div></div>
      </section>

      {/* ABLAUF */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4"><div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-14">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">So funktioniert's</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Vom Standkonzept zum fertigen Exponat</h2>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">Idealerweise bestellen Sie 4–6 Wochen vor der Messe. Aber auch Last-Minute-Anfragen meistern wir.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {s:"01",t:"Anfrage senden",tx:"CAD-Datei, Skizze oder Produktbeschreibung – wir brauchen nur eine grobe Idee und Ihren Messetermin.",tm:"2 Min",ic:Target},
              {s:"02",t:"Angebot erhalten",tx:"Verbindlicher Festpreis mit Material- und Größenempfehlung. Kostenlos, innerhalb von 6 Stunden.",tm:"< 6h",ic:Calculator},
              {s:"03",t:"Fertigung & QA",tx:"Druck, Nachbearbeitung, Qualitätskontrolle. Express: Über-Nacht-Fertigung möglich.",tm:"1–14 Tage",ic:Wrench},
              {s:"04",t:"Lieferung zur Messe",tx:"Bruchsichere Verpackung, Versand mit Tracking. Lieferung direkt zum Messestand möglich.",tm:"1–3 Tage",ic:Truck},
            ].map((st,i)=>(
              <AnimatedSection key={st.s} animation="slide-up" delay={i*100}>
                <div className="relative p-6 rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <p className="mono text-5xl font-bold text-foreground/[0.06] absolute top-3 right-4">{st.s}</p>
                  <div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><st.ic className="w-5 h-5 text-primary"/></div><span className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{st.tm}</span></div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{st.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{st.tx}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div></div>
      </section>

      {/* MESSE-KALENDER */}
      <section className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4"><div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in" className="mb-14">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messekalender DACH 2026/2027</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Wichtige Messen –<br/><span className="text-gradient">wann Sie bestellen sollten</span></h2>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">Wir empfehlen, Ihr Messemodell 4–6 Wochen vor Messebeginn zu bestellen. Express-Bestellungen bis 48h vor Aufbautag.</p>
          </AnimatedSection>
          {(["AT","DE","CH"] as const).map(land=>{
            const messen=messeKalender.filter(m=>m.land===land);
            const label=land==="AT"?"🇦🇹 Österreich":land==="DE"?"🇩🇪 Deutschland":"🇨🇭 Schweiz";
            return(<AnimatedSection key={land} animation="slide-up" className="mb-8">
              <h3 className="mono text-sm font-bold text-foreground uppercase tracking-[0.15em] mb-4">{label}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {messen.map(m=>(<div key={m.name} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><Calendar className="w-5 h-5 text-primary"/></div>
                  <div className="min-w-0"><p className="font-bold text-sm truncate">{m.name}</p><p className="text-xs text-muted-foreground">{m.ort} · {m.datum}</p><p className="text-xs text-muted-foreground">{m.branche}</p>
                  {m.bestellDeadline!=="–"&&<p className="text-xs text-primary font-semibold mt-1"><Timer className="w-3 h-3 inline mr-1"/>Bestellen bis: {m.bestellDeadline}</p>}
                  </div></div>))}
              </div>
            </AnimatedSection>);
          })}
          <AnimatedSection animation="fade-in" className="mt-8">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <p className="font-bold mb-2">Ihre Messe ist nicht dabei?</p>
              <p className="text-sm text-muted-foreground mb-4">Wir liefern zu jeder Messe im DACH-Raum und international.</p>
              <Button size="sm" className="rounded-full" asChild><Link href="#kontakt">Messetermin mitteilen <ArrowRight className="ml-2 w-4 h-4"/></Link></Button>
            </div>
          </AnimatedSection>
        </div></div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="mb-10">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Messemodelle im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">Warum 3D-gedruckte Exponate Ihren Messeauftritt verändern</h2>
            </div>
            <div className="space-y-6 text-base leading-[1.8] text-foreground/85">
              <p>Ein physisches Modell am Messestand erzeugt mehr Aufmerksamkeit als jeder Bildschirm. Besucher bleiben stehen, greifen zu, stellen Fragen. <strong>Messemodelle und Exponate aus dem 3D-Druck</strong> machen das möglich – schnell, präzise und wirtschaftlich. Ob maßstabsgetreues <Link href="/messemodelle/muenchen" className="text-primary font-semibold hover:underline">Anschauungsmodell für die BAU München</Link>, ein Produktmodell als Blickfang am Messestand oder ein technisches Schnittmodell für die <Link href="/messemodelle/hannover" className="text-primary font-semibold hover:underline">Hannover Messe</Link> – wir fertigen Ihr Exponat termingerecht und bruchsicher.</p>
              <div><h3 className="font-bold text-xl mb-3">Ausstellungsmodelle für den DACH-Raum</h3><p>Von unserem Standort in Gunskirchen (Oberösterreich) beliefern wir <strong>alle Messen in Österreich, Deutschland und der Schweiz</strong>. In Wien, Wels und Salzburg bieten wir persönliche Lieferung an. Nach München, Nürnberg und Stuttgart liefern wir innerhalb von 3–5 Werktagen. Auch die Schweizer Messestädte Basel, Zürich und St. Gallen erreichen wir zuverlässig – innerhalb der EU fallen keine Zollgebühren an, Schweizer Lieferungen wickeln wir mit vollständiger Zolldokumentation ab.</p></div>
              <div><h3 className="font-bold text-xl mb-3">Vom Standmodell zum Eyecatcher – unser Leistungsspektrum</h3><p>Wir fertigen alle Arten von Messemodellen: <strong>Produktmodelle</strong> in Originalgröße oder verkleinert, <strong>Industriemodelle</strong> von Anlagen und Maschinen, <strong>Präsentationsmodelle</strong> für Immobilien und Architektur, <strong>Demonstrationsmodelle</strong> mit aufklappbaren Gehäusen oder Schnittdarstellungen, sowie großformatige <strong>Schaumodelle</strong> als Eyecatcher. Modelle bis 2 Meter Höhe werden segmentiert gedruckt und vor Ort zusammengesetzt.</p></div>
              <div><h3 className="font-bold text-xl mb-3">Material & Oberfläche für den Messeeinsatz</h3><p>Für den Messeeinsatz empfehlen wir <strong>PETG</strong> (robust, bis 75°C) oder <strong>ASA</strong> (Outdoor-tauglich, bis 95°C). Beide Materialien überstehen Transport und mehrere Messeeinsätze problemlos. Alle Modelle können geschliffen, gespachtelt und nach RAL/Pantone lackiert werden – exakt nach Ihrem Corporate Design. Details in unserem <Link href="/ratgeber/material-guide" className="text-primary font-semibold hover:underline">Material-Guide</Link>.</p></div>
              <div><h3 className="font-bold text-xl mb-3">Wer bestellt Messemodelle bei ekdruck?</h3><p>Unsere Kunden sind <strong>Messeaussteller, Eventagenturen, Produktmanager und Marketing-Abteilungen</strong> aus dem DACH-Raum – aus Maschinenbau, Baubranche, Medizintechnik, Automotive und Energiesektor. Was sie verbindet: Sie brauchen ein physisches Modell, das ihr Produkt am Messestand greifbar macht. Mehr zu unseren B2B-Konditionen unter <Link href="/firmenkunden" className="text-primary font-semibold hover:underline">Firmenkunden</Link>.</p></div>
            </div>
          </AnimatedSection>
        </div></div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Häufige Fragen zu Messemodellen & Exponaten" subtitle="Alles was Sie vor der Bestellung wissen sollten" schemaId="messemodelle-faq"/>

      {/* REGIONEN */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <AnimatedSection animation="fade-in" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">Messemodelle für <span className="text-primary">ganz Österreich, Deutschland & Schweiz</span></h2>
            <p className="text-muted-foreground text-sm">Standort Gunskirchen (OÖ) – Express AT 24h, DE 2–5 Tage, CH 3–5 Tage.</p>
          </AnimatedSection>
          <RegionalCoverage serviceName="Messemodelle" baseUrl="messemodelle"/>
          <AllRegionsLinks currentSlug="" type="messe"/>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact/></section>
    </main>
    <StickyCTA/>
    <Footer/>
  </>
);

export default Messemodelle;
