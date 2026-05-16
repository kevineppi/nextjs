'use client'

import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticCard from "@/components/MagneticCard";
import FAQSection from "@/components/landing/FAQSection";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import StickyCTA from "@/components/landing/StickyCTA";
import PrototypingComparisonSection from "@/components/landing/PrototypingComparisonSection";
import PrototypingROISection from "@/components/landing/PrototypingROISection";
import PrototypingProcessSection from "@/components/landing/PrototypingProcessSection";
import PrototypingTimelineSection from "@/components/landing/PrototypingTimelineSection";
import PrototypingStammkundenSection from "@/components/landing/PrototypingStammkundenSection";
import PrototypingFallbeispieleSection from "@/components/landing/PrototypingFallbeispieleSection";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import {
  Zap, Clock, Package, ArrowRight,
  Briefcase, Factory, Wrench,
  Lightbulb, Phone,
  Scan, Truck, TrendingUp,
  Cpu, FlaskConical, Beaker, Layers
} from "lucide-react";

const branchenUseCases = [
  { icon: Factory, branche: "Maschinenbau & Konstruktion", titel: "Funktionsprototypen für reale Belastungstests", text: "Vor dem Werkzeugbau das Bauteil in der Hand halten: Passungen prüfen, Schraubpunkte testen, Toleranzen validieren. Wir drucken Konstruktionsprototypen aus Carbon-PA und ASA – mechanisch belastbar genug für echte Funktionstests, nicht nur für die Schreibtisch-Ansicht.", beispiel: "Greiferarm aus Carbon-PA für einen Sondermaschinenbauer – 5 Iterationen in 2 Wochen" },
  { icon: Lightbulb, branche: "Produktentwicklung & Konsumgüter", titel: "Designmuster für Marktforschung & Investoren", text: "Vom 3D-Rendering zum greifbaren Objekt: Designprototypen für Fokusgruppen, Investorenpitches und Crowdfunding-Vorbereitung. Lackierbare Oberflächen, Materialnachbildungen, fertig zum Vorzeigen. Aus PLA+ oder SLA-Resin – je nach Detailanforderung.", beispiel: "Smart-Home-Gerät: 12 Farbvarianten für A/B-Tests bei Endkunden" },
  { icon: Cpu, branche: "Elektronik & Gehäusebau", titel: "Custom-Gehäuse und Adapter ab Stückzahl 1", text: "Sonderlösungen für Maker, Hardware-Startups und Elektronik-Entwickler: passgenaue Gehäuse für Sensorik, Adapterplatten, Steckergehäuse. Iteration in Tagen statt Wochen. PETG für robusten Innenraum-Einsatz, ASA für Outdoor-Anwendungen.", beispiel: "IoT-Sensor-Gehäuse: 3 Iterationen, fertiges Design in 9 Tagen" },
  { icon: FlaskConical, branche: "Medizintechnik & Forschung", titel: "Anschauungsmodelle und Labor-Tools", text: "Demonstrationsmodelle für Vertrieb und Training, ergonomische Studien, Halterungen für Laboraufbauten. Bei Bedarf biokompatible SLA-Resine über Partner. NDA-fähige Projektabwicklung, diskrete Bearbeitung vertraulicher Entwicklungsprojekte.", beispiel: "Trainingsmodell für Chirurgen: anatomisch korrektes 1:1-Modell mit aufklappbarer Struktur" },
  { icon: Wrench, branche: "Automotive & Aftermarket", titel: "Sonderteile, Adapter und Vorrichtungen", text: "Halterungen für Werkstattvorrichtungen, Adapter für Diagnose-Equipment, kleine Sonderteile für Restauration. Vorserien bis 50 Stück. ABS für hitzebeständige Anwendungen im Motorraum.", beispiel: "Lüftungsadapter für Oldtimer-Restauration – Einzelstück nach historischer Zeichnung" },
  { icon: Briefcase, branche: "Industriedesign & Agenturen", titel: "Studienmodelle und Mock-ups in 48h", text: "Wenn Deadlines drücken: 3D-Modelle aus dem CAD direkt in die Kundenbesprechung. Studienmodelle für ergonomische Tests, Mock-ups für Pitch-Termine, Designstudien in mehreren Varianten parallel.", beispiel: "Handgerät-Design: 4 ergonomische Varianten für eine Kundenpräsentation in 72h" },
];

const verfahren = [
  {
    name: "FDM",
    typ: "In-House",
    typColor: "bg-primary/10 text-primary",
    untertitel: "Fused Deposition Modeling",
    text: "Das wirtschaftlichste Verfahren für Funktionsprototypen, robuste Konstruktionsteile und Kleinserien. Direkt in unserer Werkstatt in Gunskirchen – schnellste Reaktionszeit, Express in 24h möglich.",
    ideal: "Funktionsprototypen · Vorrichtungen · Halterungen · Kleinserien",
    features: [
      { label: "Bauraum", value: "bis 350 × 350 × 350 mm" },
      { label: "Schichtstärke", value: "0,1 – 0,3 mm" },
      { label: "Toleranz", value: "±0,2 mm / ±0,3%" },
      { label: "Materialien", value: "8 Optionen verfügbar" },
    ],
    lieferzeit: "1–5 Werktage · Express 24h",
    icon: Layers,
    popular: true,
  },
  {
    name: "SLA",
    typ: "Partner",
    typColor: "bg-secondary/10 text-secondary",
    untertitel: "Stereolithographie · Resin",
    text: "Höchste Detailauflösung für Designprototypen und Modelle mit anspruchsvollen Oberflächen. Glatt, präzise, fast wie spritzgegossen. Über eingespielte Partner-Druckereien – eine Rechnung, ein Ansprechpartner.",
    ideal: "Designmuster · Sichtteile · Schmuck · Medizinmodelle",
    features: [
      { label: "Schichtstärke", value: "0,025 – 0,1 mm" },
      { label: "Toleranz", value: "±0,1 mm / ±0,2%" },
      { label: "Oberfläche", value: "polierfähig, transparent" },
      { label: "Materialien", value: "Standard, Tough, Flex, Bio" },
    ],
    lieferzeit: "5–7 Werktage",
    icon: Beaker,
  },
  {
    name: "SLS",
    typ: "Partner",
    typColor: "bg-secondary/10 text-secondary",
    untertitel: "Selective Laser Sintering · Pulver",
    text: "Industrielle Kunststoffteile mit hoher mechanischer Belastbarkeit und ohne Stützstrukturen. Geeignet für Vorserien, Funktionsbaugruppen und seriennahe Bauteile mit isotropen Eigenschaften.",
    ideal: "Funktionsbaugruppen · Vorserien · Endteile · Maschinenbauteile",
    features: [
      { label: "Bauraum", value: "bis 700 × 380 × 380 mm" },
      { label: "Schichtstärke", value: "0,1 – 0,12 mm" },
      { label: "Toleranz", value: "±0,3 mm / ±0,3%" },
      { label: "Materialien", value: "PA12, PA11, GF, TPU" },
    ],
    lieferzeit: "7–10 Werktage",
    icon: Cpu,
  },
];

const prototypTypen = [
  { num: "01", title: "Designprototyp", text: "Form, Ergonomie und Erscheinungsbild prüfen. Oberfläche lackierbar, fertig zur Bemusterung in Fokusgruppen.", material: "PLA+ · SLA-Resin", lieferzeit: "2–5 Tage", preis: "ab €20" },
  { num: "02", title: "Geometrischer Prototyp", text: "Maßgenaue Fertigung zur Passungsprüfung. Erste Aussagen zu Montierbarkeit und Materialwahl.", material: "PETG · ABS · PA12", lieferzeit: "3–7 Tage", preis: "ab €35" },
  { num: "03", title: "Funktionsprototyp", text: "Mechanische Tests unter realen Bedingungen. Belastung, Bewegung, Temperaturverhalten prüfen.", material: "Carbon-PA · ASA · PA12", lieferzeit: "5–10 Tage", preis: "ab €60" },
  { num: "04", title: "Technischer Prototyp", text: "Letzter Validierungsschritt vor der Serie. Entspricht weitgehend dem Endprodukt in Material und Verhalten.", material: "SLS PA12 glasgefüllt", lieferzeit: "7–14 Tage", preis: "ab €120" },
  { num: "05", title: "Vorserie / Kleinserie", text: "Bis zu 200 Stück additiv gefertigt. Reproduzierbarkeit prüfen, Markttests, Kleinauflagen ohne Werkzeug.", material: "FDM PETG/ASA · SLS PA12", lieferzeit: "2–4 Wochen", preis: "Mengenrabatt ab 5 Stk." },
];

const materialGuide = [
  { material: "PETG", temp: "75°C", zugfest: "50 MPa", schlag: "8 kJ/m²", empfehlung: "Standard-Funktionsprototyp", einsatz: "Vorrichtungen, Halterungen, Gehäuse", preis: "€€", farben: "15+", color: "text-primary", bg: "bg-primary/10", best: true },
  { material: "Carbon-PA", temp: "120°C", zugfest: "85 MPa", schlag: "12 kJ/m²", empfehlung: "Hochbelastete Funktionsteile", einsatz: "Konstruktionsteile, Lasttests", preis: "€€€", farben: "Schwarz", color: "text-foreground", bg: "bg-foreground/10" },
  { material: "ASA", temp: "95°C", zugfest: "45 MPa", schlag: "10 kJ/m²", empfehlung: "Outdoor & UV-Exposition", einsatz: "Außenanwendungen, Spotlights", preis: "€€€", farben: "10+", color: "text-amber-500", bg: "bg-amber-500/10" },
];

const techSpecs = [
  { label: "Kleinste Detailgröße", fdm: "0,4 mm", sla: "0,025 mm", sls: "0,3 mm" },
  { label: "Wandstärke (min.)", fdm: "0,8 mm", sla: "0,4 mm", sls: "0,7 mm" },
  { label: "Bohrungen (min. Ø)", fdm: "2,0 mm", sla: "0,5 mm", sls: "1,5 mm" },
  { label: "Schraubgewinde", fdm: "ab M3", sla: "ab M2", sls: "ab M2" },
  { label: "Lebensmittelecht", fdm: "PETG-Kontakt", sla: "Bio-Resin", sls: "nicht standard" },
  { label: "Outdoor-tauglich", fdm: "ASA, ABS", sla: "Tough-Resin", sls: "PA12 ja" },
];

const faqs = [
  { question: "Was kostet ein 3D-gedruckter Prototyp?", answer: "Einfache Designprototypen starten ab €20, robuste Funktionsteile aus Carbon-PA oder SLS PA12 ab €60–120. Sie erhalten innerhalb von 6 Stunden ein verbindliches Festpreisangebot – kostenlos und unverbindlich, mit Materialempfehlung und Lieferdatum. Ab dem 5. Auftrag pro Quartal erhalten Stammkunden automatisch 10% Rabatt." },
  { question: "Wie schnell ist mein Prototyp lieferbar?", answer: "FDM-Prototypen in 1–5 Werktagen, Express-Fertigung in 24h möglich (+50% Aufpreis). SLA über Partner in 5–7 Werktagen, SLS in 7–10 Werktagen. Bei dringenden Projekten rufen Sie an: +43 676 5517197 – wir reservieren einen Express-Slot direkt am Telefon." },
  { question: "Welche Toleranzen werden eingehalten?", answer: "FDM: ±0,2 mm bzw. ±0,3% bei Bauteilen über 50 mm. SLA: ±0,1 mm bzw. ±0,2% bei Bauteilen über 25 mm – das präziseste Verfahren. SLS: ±0,3 mm bzw. ±0,3%. Diese Werte gelten nach Standardkalibrierung. Bei kritischen Funktionsmaßen messen wir vor dem Versand mit digitalem Messschieber und dokumentieren auf Wunsch." },
  { question: "Welche 3D-Druck Verfahren bietet ihr an?", answer: "FDM (Fused Deposition Modeling) führen wir direkt in unserer Werkstatt in Gunskirchen aus – schnellste Reaktionszeit, Express in 24h möglich. SLA (Stereolithographie für hochauflösende Resin-Drucke) und SLS (Selective Laser Sintering für lasersinternde Pulver-Drucke) bieten wir über eingespielte Partner-Druckereien an. Die gesamte Abwicklung läuft über uns – ein Ansprechpartner, eine Rechnung, eine NDA." },
  { question: "Welche Materialien sind verfügbar?", answer: "Im FDM-Verfahren: PLA, PLA+, PETG, PETG transparent, ABS, ASA, TPU flexibel, Carbon-PA. Im SLA-Verfahren über Partner: Standard-Resin, ABS-like Resin, Tough Resin, Flexible Resin, biokompatible Resine. Im SLS-Verfahren über Partner: PA12, PA11, glasgefülltes PA, TPU-Pulver. Auf Wunsch auch metallisch beschichtete Oberflächen." },
  { question: "Gibt es eine Mindestbestellmenge?", answer: "Nein. Einzelstücke ohne Aufpreis, transparente Kalkulation ab Stückzahl 1. Mengenrabatte ab 5 Stück, attraktive Konditionen für Vorserien ab 20 Stück. Ab 5 Aufträgen pro Quartal werden Sie automatisch Stammkunde mit 10% Rabatt." },
  { question: "Welche Dateiformate werden akzeptiert?", answer: "STL, STEP, IGES, 3MF, OBJ und alle gängigen CAD-Formate aus SolidWorks, Fusion 360, Inventor, Rhino, CATIA, NX, Creo oder OnShape. Kein 3D-Modell vorhanden? Wir erstellen Ihr CAD nach Skizze, Foto oder technischer Zeichnung – Reverse Engineering ab €120." },
  { question: "Wie ist die Vertraulichkeit bei Entwicklungsprojekten geregelt?", answer: "Auf Wunsch unterzeichnen wir eine NDA, bevor Daten ausgetauscht werden. Direkte Kommunikation mit dem Inhaber ohne Zwischeninstanzen. Keine Weitergabe an Subunternehmer ohne Ihre ausdrückliche Zustimmung. Datenarchivierung nach Projektabschluss optional – auf Wunsch löschen wir CAD-Daten sofort nach Lieferung." },
  { question: "FDM, SLA oder SLS – welches Verfahren ist richtig?", answer: "FDM für robuste Funktionsteile, Vorrichtungen und Konstruktionsprototypen – das wirtschaftlichste Verfahren mit der größten Materialvielfalt. SLA für höchste Detailauflösung, glatte Oberflächen, Designmuster und Sichtteile. SLS für Vorserien, industrielle Funktionsbaugruppen und Bauteile mit isotropen Materialeigenschaften ohne Stützstrukturen." },
  { question: "Wie groß kann ein Prototyp maximal sein?", answer: "FDM-Einzelteile bis 350 × 350 × 350 mm in einem Stück. Größere Bauteile durch segmentierten Druck mit unsichtbaren Verbindungsstellen ohne Größenbegrenzung. SLS-Bauraum bei Partnern bis 700 × 380 × 380 mm." },
  { question: "Bietet ihr persönliche Zustellung an?", answer: "Ja. Innerhalb Oberösterreichs (Linz, Wels, Vöcklabruck, Steyr und Umgebung) liefern wir auf Wunsch persönlich – kostenfrei ab Auftragswert €200, sonst gegen Aufwandsentschädigung ab €40. Auch in Wien und Salzburg gegen Aufpreis möglich. Sinnvoll bei sehr empfindlichen Modellen, dringenden Wettbewerbsabgaben oder wenn eine kurze technische Einweisung gewünscht ist." },
  { question: "Bietet ihr Konstruktionsoptimierung an?", answer: "Ja. Wir prüfen Ihre Bauteile vor dem Druck auf Wandstärken, Stützstrukturen, Auflagepunkte und Anisotropie-Richtung. Bei Optimierungspotenzial melden wir uns mit konkreten Vorschlägen, bevor irgendetwas gedruckt wird. Für komplexere DfAM-Beratung (Design for Additive Manufacturing) ab €80/Stunde." },
  { question: "Gibt es Rabatte für Stammkunden?", answer: "Ja, automatisch: Ab 5 Aufträgen pro Quartal 10% Rabatt, ab 10 Aufträgen 15%, ab 20 Aufträgen 20% plus direkten Inhaber-Kontakt. Keine Mitgliedschaft, keine Karte – wir erkennen Sie über Ihre Auftraggeber-Daten und rechnen automatisch an. Zusätzlich gibt es das Hardware-Sprint-Paket (10 Iterationen in 3 Monaten zum Festpreis €1.490) und Express-Slot-Vorverträge." },
  { question: "Bietet ihr Nachbearbeitung an?", answer: "Standard: Stützstrukturen entfernen, Druckkante glätten, kritische Toleranzen messen. Auf Wunsch: Schleifen, Spachteln, Lackieren nach RAL/Pantone/HEX, Heat-Treatment für höhere Festigkeit, Gewinde-Einsätze (M3–M10), Glätten der Oberfläche durch Acetondampf bei ABS. Preise auf Anfrage." },
  { question: "Welche Branchen betreut ihr typischerweise?", answer: "Maschinenbau und Konstruktion, Produktentwicklung und Konsumgüter, Elektronik und Hardware-Startups, Medizintechnik und Laborausstattung, Automotive und Aftermarket, Industriedesign und Designagenturen. Auftraggeber aus ganz Österreich, Deutschland und der Schweiz – vom Ein-Personen-Maker bis zum mittelständischen Industriebetrieb." },
];

const Prototyping = () => (
  <>
    <SEOHead
      title="Rapid Prototyping Österreich – 3D-Druck Prototypen ab €20 | ekdruck"
      description="Funktionsprototypen, Designmuster & Kleinserien aus dem 3D-Druck. FDM in-house, SLA/SLS über Partner. Express 24h · Toleranz ±0,1mm · ab €20 · ★5,0 (31 Bewertungen)"
      keywords="rapid prototyping, prototyp drucken lassen, 3d druck prototyp, funktionsprototyp, designprototyp, vorserie 3d druck, kleinserienfertigung, fdm prototyp, sla prototyp, sls prototyp, prototypenbau, prototyping österreich, prototyp express, konstruktionsprototyp, designmuster, technischer prototyp, additive fertigung prototyp, rapid manufacturing, prototyp gunskirchen, prototyp linz, prototyp wien, prototyp wels, carbon pa prototyp, pa12 sls, dfam beratung, reverse engineering, cad service österreich, prototyp toleranz, prototyp ohne mindestmenge, prototyp 24 stunden, nda 3d druck, prototyp hardware startup"
      path="/prototyping"
    />
    <ProductOfferSchema
      name="Rapid Prototyping & 3D-Druck Prototypen"
      description="3D-gedruckte Funktionsprototypen, Designmuster und Kleinserien. FDM in-house, SLA/SLS über Partner. Angebot in 6h, Express in 24h. Toleranzen bis ±0,1 mm."
      url="https://www.ek-druck.at/prototyping"
      lowPrice="20"
      highPrice="2500"
      category="Rapid Prototyping"
    />
    <Navigation />
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(hsl(var(--border)/0.4) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                <span className="sticker border-primary text-primary !px-3 !py-1.5 !text-[10px]"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Angebot in 6h</span>
                <span className="sticker border-foreground/20 text-foreground/60 !px-3 !py-1.5 !text-[10px]">Express 24h</span>
                <span className="sticker border-foreground/20 text-foreground/60 !px-3 !py-1.5 !text-[10px]">FDM · SLA · SLS</span>
                <span className="sticker border-foreground/20 text-foreground/60 !px-3 !py-1.5 !text-[10px]">NDA-fähig</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                Rapid<br/>
                <span className="text-gradient">Prototyping.</span>
                <span className="text-muted-foreground/30 font-light"> Aus Österreich.</span>
              </h1>

              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Vom CAD-Modell zum funktionierenden Prototyp in 24 Stunden.
                  Funktionsprototypen, Designmuster und Vorserien für Produktentwickler,
                  Konstrukteure und Industriedesigner. Toleranzen bis ±0,1 mm.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg" asChild>
                    <Link href="#kontakt">Prototyp anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base" asChild>
                    <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Anrufen</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="mt-20 grid grid-cols-4 gap-0 border-t border-border pt-8">
                {[
                  { v: "24h", l: "Express" },
                  { v: "€20", l: "Ab Preis" },
                  { v: "±0,1", l: "mm Toleranz" },
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

      {/* TICKER */}
      <div className="border-y border-border py-4 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {[...Array(2)].map((_, di) => (
            <span key={di} className="inline-flex whitespace-nowrap">
              {["RAPID PROTOTYPING","FUNKTIONSPROTOTYP","DESIGNPROTOTYP","VORSERIE","KLEINSERIE","FDM IN-HOUSE","SLA","SLS","CARBON-PA","PA12-SLS","TOLERANZ 0,1MM","NDA-FÄHIG","REVERSE ENGINEERING","EXPRESS 24H","ZUSTELLUNG OÖ"].map((w, i) => (
                <span key={`${di}-${i}`} className="inline-flex items-center gap-6 mx-6 whitespace-nowrap">
                  <span className="mono text-xs font-bold tracking-[0.2em] text-foreground/40 whitespace-nowrap">{w}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* BRANCHEN */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wer mit uns prototypisiert</p>
                  <TextReveal text="Ihre Idee als Bauteil." className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]" />
                </div>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Von der ersten Skizze bis zur 200-Stück-Vorserie. Wir begleiten Produktentwicklungen quer durch die Branchen.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <Factory className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[0].branche}</p>
                    <p className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchenUseCases[0].titel}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchenUseCases[0].text}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold"><Scan className="w-4 h-4" /> {branchenUseCases[0].beispiel}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Lightbulb className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[1].branche}</p>
                    <p className="text-xl font-bold mb-3 tracking-tight">{branchenUseCases[1].titel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchenUseCases[1].text}</p>
                    <p className="text-xs text-primary font-semibold">{branchenUseCases[1].beispiel}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" delay={150}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Cpu className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[2].branche}</p>
                    <p className="text-xl font-bold mb-3 tracking-tight">{branchenUseCases[2].titel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchenUseCases[2].text}</p>
                    <p className="text-xs text-primary font-semibold">{branchenUseCases[2].beispiel}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200} className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <FlaskConical className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchenUseCases[3].branche}</p>
                    <p className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchenUseCases[3].titel}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchenUseCases[3].text}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold"><Scan className="w-4 h-4" /> {branchenUseCases[3].beispiel}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {branchenUseCases.slice(4).map((uc, i) => (
                <AnimatedSection key={uc.branche} animation="slide-up" delay={250 + i * 80}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="p-8 md:p-10">
                      <uc.icon className="w-10 h-10 text-primary mb-6" />
                      <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{uc.branche}</p>
                      <p className="text-xl font-bold mb-3 tracking-tight">{uc.titel}</p>
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

      {/* VERFAHREN mit Tech-Specs */}
      <section id="verfahren" className="py-32 bg-muted/30 border-y border-border scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Drei Verfahren · Ein Ansprechpartner</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-4">FDM in-house.<br/><span className="text-gradient">SLA & SLS über Partner.</span></h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">Sie kommunizieren mit einem einzigen Ansprechpartner. Wir wählen für jedes Bauteil das passende Verfahren, kümmern uns um Datenaufbereitung, Qualitätskontrolle und Versand – egal ob auf unseren Druckern oder bei einem Partner gefertigt.</p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-4">
              {verfahren.map((v, i) => (
                <AnimatedSection key={v.name} animation="slide-up" delay={i * 100}>
                  <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${v.popular ? 'border-primary shadow-xl shadow-primary/10 bg-card' : 'border-border bg-card hover:border-primary/30'}`}>
                    <div className="p-8 relative">
                      {v.popular && <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" />}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${v.popular ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center`}>
                          <v.icon className={`w-6 h-6 ${v.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className={`mono text-[9px] font-bold ${v.typColor} px-2.5 py-1 rounded-full uppercase tracking-wider`}>{v.typ}</span>
                      </div>
                      <p className="text-3xl font-bold mb-1">{v.name}</p>
                      <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mb-4">{v.untertitel}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{v.text}</p>

                      <div className="space-y-2.5 mb-6 pb-6 border-b border-border/50">
                        {v.features.map((f, j) => (
                          <div key={j} className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{f.label}</span>
                            <span className="mono font-semibold text-foreground/90">{f.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs"><Clock className="w-3.5 h-3.5 text-primary" />{v.lieferzeit}</div>
                        <div className="flex items-start gap-2 text-xs">
                          <Package className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{v.ideal}</span>
                        </div>
                      </div>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="mt-8 border-2 border-primary/20 rounded-3xl p-6 bg-primary/[0.02] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Zap className="w-6 h-6 text-primary" /></div>
                <div className="text-sm">
                  <strong className="text-foreground">Hinweis zur Partner-Fertigung:</strong>
                  <span className="text-muted-foreground"> Bei SLA und SLS arbeiten wir mit ausgewählten Druckereien in Österreich und Deutschland zusammen. Die Auftragsabwicklung, Qualitätskontrolle und Lieferung läuft vollständig über uns – Sie haben einen Ansprechpartner, eine Rechnung, eine NDA. </span>
                  <Link href="/ratgeber/verfahrens-vergleich" className="text-primary font-semibold hover:underline">Verfahren im Detail →</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* TECH SPECS TABELLE */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Technische Daten im Vergleich</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Was kann wer?<br/><span className="text-gradient">Verfahren im Detail.</span></h2>
              <p className="text-muted-foreground max-w-2xl">Die Spezifikationen, die Konstrukteure wirklich interessieren – ohne Marketing-Geschwurbel.</p>
            </AnimatedSection>

            <AnimatedSection animation="slide-up">
              <div className="rounded-3xl border-2 border-border overflow-hidden bg-card">
                <div className="grid grid-cols-4 bg-muted/50 border-b border-border">
                  <div className="p-4 md:p-5 mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Eigenschaft</div>
                  <div className="p-4 md:p-5 mono text-[10px] font-bold uppercase tracking-wider text-primary border-l border-border">FDM</div>
                  <div className="p-4 md:p-5 mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-l border-border">SLA</div>
                  <div className="p-4 md:p-5 mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-l border-border">SLS</div>
                </div>
                {techSpecs.map((row, i) => (
                  <div key={row.label} className={`grid grid-cols-4 ${i < techSpecs.length - 1 ? 'border-b border-border/50' : ''}`}>
                    <div className="p-4 md:p-5 text-sm font-semibold text-foreground/90">{row.label}</div>
                    <div className="p-4 md:p-5 text-sm mono text-foreground border-l border-border/50">{row.fdm}</div>
                    <div className="p-4 md:p-5 text-sm mono text-foreground border-l border-border/50">{row.sla}</div>
                    <div className="p-4 md:p-5 text-sm mono text-foreground border-l border-border/50">{row.sls}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">Werte gelten für Standard-Material und kalibrierte Druckparameter. Engere Toleranzen auf Anfrage durch Postprocessing möglich.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROTOTYP-TYPEN */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-20">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Fünf Prototyp-Typen</p>
              <TextReveal text="Welcher Prototyp passt zum Projekt?" className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]" />
              <p className="text-muted-foreground max-w-lg mt-6 text-base leading-relaxed">Nicht jeder Prototyp braucht das gleiche. Wir wählen Verfahren, Material und Detailtiefe nach Anwendungsziel.</p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {prototypTypen.map((p, i) => (
                <AnimatedSection key={p.num} animation="slide-up" delay={i * 60}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 bg-card h-full transition-all duration-500">
                    <div className="p-6">
                      <p className="text-5xl font-bold text-foreground/[0.06] mb-3">{p.num}</p>
                      <p className="font-bold text-lg mb-2 tracking-tight">{p.title}</p>
                      <p className="text-2xl font-bold text-primary mb-3 tracking-tight">{p.preis}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.text}</p>
                      <div className="pt-4 border-t border-border/50 space-y-2">
                        <div className="flex items-center gap-2 text-xs"><Package className="w-3.5 h-3.5 text-primary" />{p.material}</div>
                        <div className="flex items-center gap-2 text-xs"><Clock className="w-3.5 h-3.5 text-primary" />{p.lieferzeit}</div>
                      </div>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10">
              <AnimatedSection animation="fade-in">
                <MagneticCard className="rounded-3xl border-2 border-primary/30 bg-primary/[0.03] h-full">
                  <div className="p-8 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"><Zap className="w-7 h-7 text-primary" /></div>
                    <div>
                      <p className="text-xl font-bold mb-2">Express in 24h</p>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-3">Über-Nacht-Fertigung für dringende Iterationen. +50% Aufpreis. Direkt anrufen für Slot-Reservierung.</p>
                      <a href="tel:+436765517197" className="mono text-sm font-bold text-primary hover:underline inline-flex items-center gap-1.5"><Phone className="w-4 h-4" />+43 676 5517197</a>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="fade-in" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border h-full">
                  <div className="p-8 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"><TrendingUp className="w-7 h-7 text-primary" /></div>
                    <div>
                      <p className="text-xl font-bold mb-2">Iteration in Tagen</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">Drei Designvarianten parallel drucken, Belastungstests, Designs vergleichen. Was beim Werkzeugbau Monate kostet, ist hier Tage.</p>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="fade-in" delay={200}>
                <MagneticCard className="rounded-3xl border-2 border-border h-full">
                  <div className="p-8 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0"><Truck className="w-7 h-7 text-primary" /></div>
                    <div>
                      <p className="text-xl font-bold mb-2">Persönliche Zustellung</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">Oberösterreich kostenfrei ab €200. Wien, Salzburg, Linz gegen Aufpreis. Für sehr empfindliche Modelle oder dringende Abgaben.</p>
                    </div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FALLBEISPIELE */}
      <PrototypingFallbeispieleSection />

      {/* MATERIAL-RATGEBER */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Material-Ratgeber</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Welches Material für <span className="text-gradient">Ihren Prototyp?</span></h2>
              <p className="text-muted-foreground max-w-lg">Funktionsprototyp, Designmuster oder Outdoor-Bauteil? Die Wahl entscheidet über Belastbarkeit, Optik und Kosten. <Link href="/ratgeber/material-guide" className="text-primary font-semibold hover:underline">Zum ausführlichen Guide →</Link></p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {materialGuide.map((m, i) => (
                <AnimatedSection key={m.material} animation="slide-up" delay={i * 100}>
                  <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${m.best ? 'border-primary bg-card shadow-lg' : 'border-border bg-card hover:border-primary/30'}`}>
                    <div className="p-8">
                      {m.best && <span className="mono text-[9px] font-bold bg-primary text-primary-foreground px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Unsere Empfehlung</span>}
                      <p className={`text-3xl font-bold mb-1 ${m.color}`}>{m.material}</p>
                      <p className="mono text-[10px] text-muted-foreground uppercase tracking-wider mb-6">{m.empfehlung}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                          { v: m.temp, l: "Max. Temp." },
                          { v: m.zugfest, l: "Zugfestigkeit" },
                          { v: m.schlag, l: "Schlagzähigkeit" },
                          { v: m.preis, l: "Preislevel" },
                        ].map(d => (
                          <div key={d.l} className={`rounded-xl ${m.bg} p-3 text-center`}>
                            <p className="mono text-base font-bold">{d.v}</p>
                            <p className="text-[10px] text-muted-foreground">{d.l}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground italic">{m.einsatz}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <PrototypingComparisonSection />

      {/* ROI */}
      <PrototypingROISection />

      {/* STAMMKUNDEN – statt Abo */}
      <PrototypingStammkundenSection />

      {/* PROCESS-EFFECTS */}
      <PrototypingProcessSection />

      {/* TIMELINE */}
      <PrototypingTimelineSection />

      {/* REFERENZEN */}
      <ReferencesTeaser />

      {/* SEO CONTENT */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Rapid Prototyping im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Warum 3D-Druck-Prototyping moderne Entwicklung beschleunigt</h2>

              <div className="space-y-8 text-base leading-[1.85] text-foreground/85">
                <p>Wer ein neues Produkt entwickelt, kennt die teuersten Fehler: Designs, die erst nach dem Werkzeugbau scheitern. Toleranzen, die auf dem Bildschirm aussehen wie auf dem Datenblatt – im Bauteil aber nicht passen. Investorenpräsentationen mit Renderings, die der Realität nicht standhalten. <strong>Rapid Prototyping mit 3D-Druck</strong> löst genau diese Probleme.</p>

                <p>Ob <strong>Funktionsprototyp aus Carbon-PA</strong> für mechanische Belastungstests, <strong>Designmuster aus SLA-Resin</strong> für die Investorenpräsentation, oder eine <strong>SLS-Vorserie aus PA12</strong> für den Markttest – wir wählen Verfahren und Material präzise nach Anwendungsziel. <Link href="/ratgeber/prototyping-guide" className="text-primary font-semibold hover:underline">Im Prototyping-Guide</Link> finden Sie eine ausführliche Entscheidungshilfe für Konstrukteure.</p>

                <div className="rounded-3xl bg-muted/50 border border-border/50 p-8 md:p-10 not-prose">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Iteration in Tagen statt Wochen</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Der entscheidende Vorteil additiver Fertigung: <strong className="text-foreground">parallele Iteration ohne Werkzeugkosten</strong>. Drei Designvarianten am gleichen Tag drucken, alle drei mechanisch testen, die beste auswählen – und alles zu Kosten, die früher eine einzige Werkzeugkorrektur ausgemacht hätten. Konstrukteure nutzen diesen Geschwindigkeitsvorteil zunehmend strategisch: Statt eine Design-Hypothese ein halbes Jahr lang zu verteidigen, validieren sie sie in zwei Wochen. Das nennt sich <strong className="text-foreground">Design for Additive Manufacturing</strong> (DfAM) – und ist das zentrale Mindset moderner Produktentwicklung.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Toleranzen und Maßhaltigkeit</h3>
                  <p>Die wichtigste Frage in der Prototypenfertigung: wie maßhaltig wird das Bauteil wirklich? Bei FDM erreichen wir <strong>±0,2 mm bzw. ±0,3% bei Bauteilen über 50 mm</strong> – ausreichend für die meisten Konstruktionsprototypen, Vorrichtungen und Funktionsmuster. Bei SLA gehen wir auf <strong>±0,1 mm bzw. ±0,2% bei Bauteilen über 25 mm</strong> – das präziseste Verfahren, ideal für Sichtteile und Schmuckprototypen. SLS liegt mit <strong>±0,3 mm</strong> dazwischen, bietet dafür aber isotrope Materialeigenschaften ohne Stützstrukturen. Bei kritischen Funktionsmaßen messen wir vor dem Versand mit digitalem Messschieber und dokumentieren auf Wunsch.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Unser Leistungsspektrum</h3>
                  <p>Wir fertigen: <strong>Designprototypen</strong> für Bemusterung und Marktforschung, <strong>geometrische Prototypen</strong> für Passungsprüfung und Montierbarkeit, <strong>Funktionsprototypen</strong> für mechanische und thermische Tests, <strong>technische Prototypen</strong> als finalen Validierungsschritt vor Serienproduktion sowie <strong>Vorserien und Kleinserien</strong> bis 200 Stück ohne Werkzeuginvestition. Ergänzend bieten wir <Link href="/messemodelle" className="text-primary font-semibold hover:underline">Messemodelle</Link> und <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link> aus dem gleichen Workflow.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Konstruktion, CAD und Datenhandling</h3>
                  <p>Wir verarbeiten <strong>STL, STEP, IGES, 3MF, OBJ</strong> sowie native CAD-Daten aus SolidWorks, Fusion 360, Inventor, Rhino, CATIA, NX, Creo und OnShape. Vor dem Druck prüfen wir Ihre Bauteile auf Druckbarkeit, Wandstärken, Stützstrukturen und Anisotropie-Richtung – bei Optimierungspotenzial melden wir uns mit konkreten Vorschlägen, bevor irgendetwas gedruckt wird. Kein 3D-Modell vorhanden? Wir <strong>erstellen Ihr CAD nach Skizze, Foto oder technischer Zeichnung</strong> (Reverse Engineering ab €120). Für komplexere DfAM-Beratung – etwa Topologieoptimierung oder Stützstruktur-vermeidende Geometrie – bieten wir Konstruktionsoptimierung ab €80/Stunde.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Express-Fertigung und persönliche Zustellung</h3>
                  <p>Wenn die Deadline drückt: <strong>Express-Fertigung in 24 Stunden</strong> möglich. Über-Nacht-Druck, Nachbearbeitung am Morgen, Versand oder persönliche Zustellung am gleichen Tag. Aufpreis +50%, Slot-Reservierung am besten telefonisch unter <strong>+43 676 5517197</strong>. Innerhalb von Oberösterreich (Wels, Linz, Vöcklabruck, Steyr) bieten wir <strong>persönliche Zustellung</strong> – kostenfrei ab Auftragswert €200, sonst gegen Aufwandsentschädigung ab €40. Sinnvoll bei sehr empfindlichen Modellen, dringenden Wettbewerbsabgaben oder wenn eine kurze technische Einweisung gewünscht ist.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Stammkunden-Konditionen</h3>
                  <p>Wer regelmäßig Prototypen druckt, profitiert von automatischen Stammkunden-Konditionen: Ab dem <strong>5. Auftrag im Quartal</strong> sparen Sie 10%, ab dem 10. Auftrag 15%, ab dem 20. Auftrag 20% plus direkten Inhaber-Kontakt. Keine Karte, keine Mitgliedschaft, keine Kündigung nötig – wir rechnen den Rabatt automatisch auf der Rechnung an. Für intensive Entwicklungsphasen gibt es das <strong>Hardware-Sprint-Paket</strong> (10 Iterationen in 3 Monaten zum Festpreis €1.490) und für Deadline-Sicherheit den <strong>Express-Slot-Vorvertrag</strong> (3 garantierte 24h-Slots für €149). <Link href="#stammkunden" className="text-primary font-semibold hover:underline">Details zu den Stammkunden-Konditionen →</Link></p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Vertraulichkeit bei Entwicklungsprojekten</h3>
                  <p>Auf Wunsch unterzeichnen wir eine <strong>NDA</strong>, bevor Daten ausgetauscht werden. Direkte Kommunikation mit dem Inhaber, keine Zwischeninstanzen. Keine Weitergabe an Subunternehmer ohne Ihre ausdrückliche Zustimmung. Datenarchivierung nach Projektabschluss optional – auf Wunsch löschen wir CAD-Daten sofort nach Lieferung. Diskrete Bearbeitung sensibler Projekte ist für uns Standard, nicht Premium-Feature. Besonders wichtig für Hardware-Startups in der Pre-Patent-Phase, Industriebetriebe mit Wettbewerbsspionage-relevanten Konstruktionen und Auftraggeber im Medizintechnik- und Defense-Sektor.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Standorte und Liefergebiete</h3>
                  <p>Unser Standort ist <strong>Gunskirchen</strong> in Oberösterreich, 20 Minuten von Linz und Wels. Wir bedienen <Link href="/3d-druck-wien" className="text-primary hover:underline">Wien</Link>, <Link href="/3d-druck-oberoesterreich" className="text-primary hover:underline">Linz und Oberösterreich</Link>, <Link href="/3d-druck-salzburg" className="text-primary hover:underline">Salzburg</Link>, <Link href="/3d-druck-steiermark" className="text-primary hover:underline">Graz</Link> und die <Link href="/3d-druck-kaernten" className="text-primary hover:underline">Kärntner Region</Link>. Versand ins gesamte DACH-Gebiet in 2–4 Werktagen, EU-Versand auf Anfrage.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Unsere Auftraggeber</h3>
                  <p><strong>Konstrukteure, Produktentwickler, Designagenturen und Hardware-Startups</strong> aus dem DACH-Raum. Maschinenbau, Konsumgüter, Elektronik, Medizintechnik, Automotive und Industriedesign. B2B-Konditionen mit UID-Rechnung unter <Link href="/firmenkunden" className="text-primary font-semibold hover:underline">Firmenkunden</Link>.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Häufige Fragen zu Rapid Prototyping" subtitle="Alles was Konstrukteure und Produktentwickler wissen wollen" schemaId="prototyping-faq" />

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Prototyping;
