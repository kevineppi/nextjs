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
import ArchitekturComparisonSection from "@/components/landing/ArchitekturComparisonSection";
import ArchitekturROISection from "@/components/landing/ArchitekturROISection";
import ArchitekturScaleSection from "@/components/landing/ArchitekturScaleSection";
import ArchitekturFallbeispieleSection from "@/components/landing/ArchitekturFallbeispieleSection";
import ArchitekturFormatSection from "@/components/landing/ArchitekturFormatSection";
import ReferencesTeaser from "@/components/ReferencesTeaser";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import {
  ArrowRight, Phone, Trophy, Building2, Home, MapPin, Users, Palette,
  Layers, Zap, Check, Ruler
} from "lucide-react";

const branchen = [
  {
    icon: Trophy,
    branche: "Wettbewerbsarchitektur",
    titel: "Wenn die Deadline morgen ist",
    text: "Architekturbüros vertrauen uns bei Wettbewerbsabgaben weil wir liefern. Mehrere Varianten parallel im selben Maßstab, weiße matte Optik nach klassischer Jurypräsentations-Manier, Express in 24h verfügbar. Modelle sind direkt auf dem Standardsockel präsentationsfertig.",
    typisch: "Schul-, Sport-, Kultur- und öffentliche Bauten",
  },
  {
    icon: Building2,
    branche: "Bauträger & Wohnbau",
    titel: "Vermarktungs-Modelle die verkaufen",
    text: "Für Bauträger fertigen wir Schauraum-Modelle die Reservierungen beschleunigen. Auch große Modelle bis 1,5 m segmentiert, einzeln entnehmbare Stiegen für Geschossansichten, Sonnenstand-Visualisierung möglich. Auf Wunsch mit farbiger Differenzierung verkaufter Einheiten.",
    typisch: "Wohnhausanlagen, Reihenhausprojekte, Quartiersentwicklungen",
  },
  {
    icon: Home,
    branche: "Privatkunden",
    titel: "Das Haus zum Anfassen",
    text: "Bauherrengespräche werden anders wenn das Haus auf dem Tisch steht. Wir fertigen Einfamilienhaus-Modelle aus ArchiCAD oder Revit – mit abnehmbarem Dach, möblierten Geschossen, optional sogar beleuchtet. Geschenkidee oder Planungs-Hilfsmittel in einem.",
    typisch: "Einfamilienhaus 1:50, Hausplanungs-Beratung, Pensions-Geschenke",
  },
  {
    icon: MapPin,
    branche: "Stadtplanung",
    titel: "Quartier und Stadtmodelle",
    text: "Quartiersentwicklungen, Verkehrsplanungs-Modelle, Stadtteil-Visualisierungen für Bürgerbeteiligungen oder Aufsichtsratspräsentationen. Auch große Modelle bis 1,2×1,5 m durch segmentierten Druck mit unsichtbaren Stoßkanten möglich. Topografie wird aus DGM-Daten extrahiert.",
    typisch: "Quartiersmodelle, Bebauungspläne, Verkehrsplanung",
  },
  {
    icon: Palette,
    branche: "Innenarchitektur",
    titel: "Raum- und Materialstudien",
    text: "Innenraum-Modelle für Showrooms, Material-Bemusterungs-Studien, Möblierungs-Variantenstudien. Maßstab 1:25 oder 1:50 mit eingearbeiteter Oberflächentextur – Marmor, Holz, Beton-Optik realistisch nachgebildet. Auch einzelne Möbelstücke als Anschauungsobjekt für Endkundengespräche.",
    typisch: "Showroom-Modelle, Material-Bemusterung, Möblierungs-Studien",
  },
  {
    icon: Users,
    branche: "Bildung & Kultur",
    titel: "Modelle für Lehre und Ausstellung",
    text: "Architekturschulen, Tourismusbüros, Stadtmuseen, Heimatmuseen: wir fertigen Anschauungsmodelle für Lehre und kulturelle Vermittlung. Robust genug für Schüler-Hände, präzise genug für Fach-Audiences. Auf Wunsch mit haptischen Höhenlinien für inklusive Vermittlung.",
    typisch: "Lehrmodelle, Museums-Exponate, Touristenmodelle",
  },
];

const faqs = [
  { question: "Was kostet ein Architekturmodell aus dem 3D-Druck?", answer: "Einfamilienhaus 1:100: ab €280. Mehrfamilienhaus 1:200: ab €420. Quartiersmodell 1:500: ab €780. Stadtmodell 1:1000: ab €1.890. Detailmodelle 1:50 (Innenraum / Möbliert): ab €450. Sie erhalten innerhalb von 6 Stunden ein verbindliches Festpreisangebot – kostenlos und unverbindlich, inklusive Materialempfehlung und Lieferdatum." },
  { question: "Welche CAD-Datei muss ich liefern?", answer: "Wir verarbeiten alle gängigen Formate: ArchiCAD (.pln, .ifc), Revit (.rvt, .ifc), Rhino (.3dm), SketchUp (.skp), AutoCAD (.dwg, .dxf), Vectorworks (.vwx), Allplan (.pln, .ifc) sowie Standardformate (.stl, .step, .obj, .3mf). Sie müssen Ihre Datei nicht in STL konvertieren oder druckfertig aufbereiten – das übernehmen wir." },
  { question: "Welcher Maßstab ist der richtige?", answer: "Für Einfamilienhäuser empfehlen wir 1:100, für Detail- und Raumstudien 1:50. Wettbewerbsmodelle sind meist 1:200 (oder die in den Wettbewerbsunterlagen vorgeschriebene Größe), Wohnbauprojekte 1:100 bis 1:200, Quartiersmodelle 1:500 und Stadtmodelle 1:1000. Wir beraten Sie kostenfrei vor der Anfrage zum optimalen Maßstab für Ihr Anwendungsziel." },
  { question: "Wie lange dauert die Fertigung?", answer: "Standard 3–5 Werktage für Modelle bis Maßstab 1:100, 5–10 Werktage für größere Maßstäbe. Express in 24h möglich gegen Aufpreis (+50%) – insbesondere für Wettbewerbsabgaben am Folgetag. Bei dringenden Projekten rufen Sie an: +43 676 5517197." },
  { question: "Können Sie auch sehr große Modelle drucken?", answer: "Ja. Einzelteile bis 350 × 350 × 350 mm in einem Stück, größere Modelle durch segmentierten Druck mit unsichtbaren Stoßkanten ohne Größenbegrenzung. Wir haben Modelle bis 1,5 × 1,2 m gefertigt – die Segmentierung erfolgt entlang von Gebäudefugen oder Straßenverläufen, sodass sie auf dem fertigen Modell nicht sichtbar ist." },
  { question: "Welche Oberflächen sind möglich?", answer: "Weiße matte Standardoberfläche (Klassiker für Wettbewerbsmodelle), Schwarz matt (modern, kontrastreich), Holzdielen-Optik für Innenraum, Beton-Optik mit Strukturoberfläche, Marmor-Optik für Premium-Modelle. Auf Wunsch RAL-Lackierung in jeder Farbe, mehrfarbige Modelle für verkauft/reserviert/verfügbar-Differenzierung." },
  { question: "Können Sie mehrere Varianten gleichzeitig fertigen?", answer: "Ja, das ist sogar einer der größten Vorteile gegenüber klassischem Modellbau. Parallel-Fertigung mehrerer Varianten zu denselben Stückkosten – kein Aufpreis für 'die zweite Variante'. Häufig genutzt bei Wettbewerbsabgaben (4 Konzepte in einem Modellsatz) und Vermarktungs-Modellen (Bestand vs Neubau)." },
  { question: "Bieten Sie persönliche Lieferung an?", answer: "Ja. Innerhalb Oberösterreichs (Linz, Wels, Vöcklabruck, Steyr und Umgebung) liefern wir auf Wunsch persönlich gegen Aufwandsentschädigung ab €40. Wien und Salzburg gegen entsprechenden Aufpreis möglich. Sinnvoll für große, empfindliche Modelle oder Wettbewerbsabgaben mit kurzer Übergabefrist." },
  { question: "Können Sie das CAD-Modell auch für mich erstellen?", answer: "Ja. Reverse Engineering ab €120 pro Stunde: Wir erstellen Ihr 3D-Modell nach Plan, Foto oder Skizze. Auch Bestandsgebäude können wir nach Aufmaß oder vorhandenen Plänen modellieren. Für Restaurierungs- und Sanierungsprojekte besonders interessant: historische Pläne werden zum modernen 3D-Modell." },
  { question: "Wie steht es um die Maßstabs-Genauigkeit?", answer: "FDM-Druck: ±0,2 mm absolute Toleranz bzw. ±0,3% bei Bauteilen über 50 mm. SLA-Druck (für Detailmodelle): ±0,1 mm bzw. ±0,2%. Bei kritischen Maßen (etwa Wettbewerbsabgaben mit vorgeschriebener Modellgröße) messen wir vor dem Versand mit digitalem Messschieber und dokumentieren auf Wunsch." },
  { question: "Sind die Modelle beschriftbar oder bemalbar?", answer: "Ja. Standardoberfläche ist schleifbar, spachtelbar, lackierbar – alle gängigen Künstlerfarben, Acryl, Lack haftet. Beschriftungen auf Wunsch direkt eingelasert (z.B. Straßennamen bei Stadtmodellen) oder als gravierte Plexiglas-Plaketten am Sockel. Auch UV-Druck direkt auf das Modell möglich." },
  { question: "Bekomme ich eine Garantie auf das Modell?", answer: "Ja. 12 Monate Material- und Verarbeitungsgarantie. Bei Wettbewerbsabgaben mit harter Deadline geben wir eine zusätzliche Liefer-Termin-Garantie: wird der zugesagte Liefertermin nicht eingehalten, übernehmen wir 100% der nachweisbaren Folgekosten. Diese Garantie wird schriftlich im Angebot festgehalten." },
  { question: "Wie ist die Vertraulichkeit bei Wettbewerbsprojekten?", answer: "Auf Wunsch unterzeichnen wir eine NDA vor Datenaustausch. Direkte Kommunikation mit dem Inhaber, keine Zwischeninstanzen. Keine Weitergabe an Subunternehmer ohne Ihre Zustimmung. Datenarchivierung optional – auf Wunsch löschen wir Ihre CAD-Daten sofort nach Lieferung des Modells. Wichtig insbesondere für laufende Wettbewerbe wo Vertraulichkeit zwingend ist." },
];

const Architekturmodelle = () => (
  <>
    <SEOHead
      title="Architekturmodell drucken lassen – 3D-Druck ab €20 ★5,0 | ekdruck"
      description="Architekturmodelle aus dem 3D-Druck: Wettbewerb · Bauherr · Stadtmodell. Maßstab 1:50–1:500 · ArchiCAD, Revit, Rhino, SketchUp · Express 24h · ab €20."
      keywords="architekturmodell, architekturmodell drucken, architekturmodell 3d druck, architekturmodellbau, wettbewerbsmodell, präsentationsmodell architektur, städtebauliches modell, bauherrenmodell, stadtmodell drucken, gebäudemodell, architekturmodell wien, architekturmodell österreich, archicad 3d druck, revit modell drucken, sketchup modell drucken, rhino modell, maßstab 1 100, maßstab 1 200, maßstab 1 500, weißes modell"
      path="/architekturmodelle"
    />
    <ProductOfferSchema
      name="Architekturmodelle aus dem 3D-Druck"
      description="Architekturmodelle drucken lassen: Wettbewerbsmodelle, Bauträger-Modelle, Stadtmodelle. Maßstab 1:50–1:1000. ArchiCAD, Revit, Rhino, SketchUp. Express 24h."
      url="https://www.ek-druck.at/architekturmodelle"
      lowPrice="20"
      highPrice="5000"
      category="Architekturmodelle"
    />
    <Navigation />
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative pt-44 pb-24 md:pt-56 lg:pt-64 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(hsl(var(--border)/0.4) 1px, transparent 1px)',backgroundSize:'24px 24px'}} />
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block">Architektur</span>
              <span className="block text-gradient">modelle.</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-3 text-outline">Aus dem 3D-Druck.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-end mb-20 md:mb-24">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Vom CAD-File zum Modell auf dem Tisch in <strong className="text-foreground">3–5 Werktagen</strong>.
                Wettbewerbsmodelle, Bauträger-Modelle, Stadtmodelle und Privatkunden-Projekte – im Maßstab <span className="mono font-bold text-primary">1:50 bis 1:1000</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="#kontakt">Modell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base border-2" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Anrufen</a>
                </Button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-border">
              <div className="relative py-8 md:py-10 px-2 md:px-6 group">
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                <p className="mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">3–5</p>
                <div className="flex flex-wrap items-baseline gap-x-2 mt-3">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Werktage</p>
                  <p className="text-[10px] text-muted-foreground hidden md:inline">— Standard</p>
                </div>
              </div>
              <div className="relative py-8 md:py-10 px-2 md:px-6 group border-l border-border">
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                <p className="mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">24h</p>
                <div className="flex flex-wrap items-baseline gap-x-2 mt-3">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Express</p>
                  <p className="text-[10px] text-muted-foreground hidden md:inline">— Wettbewerb</p>
                </div>
              </div>
              <div className="relative py-8 md:py-10 px-2 md:px-6 group border-t md:border-t-0 md:border-l border-border">
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                <p className="mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">€280</p>
                <div className="flex flex-wrap items-baseline gap-x-2 mt-3">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Ab Preis</p>
                  <p className="text-[10px] text-muted-foreground hidden md:inline">— EFH 1:100</p>
                </div>
              </div>
              <div className="relative py-8 md:py-10 px-2 md:px-6 group border-t md:border-t-0 border-l md:border-l border-border">
                <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
                <p className="mono text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">5,0★</p>
                <div className="flex flex-wrap items-baseline gap-x-2 mt-3">
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Google</p>
                  <p className="text-[10px] text-muted-foreground hidden md:inline">— 31 Bewertungen</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border py-4 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {[...Array(2)].map((_, di) => (
            <span key={di} className="inline-flex whitespace-nowrap">
              {["ARCHITEKTURMODELL","WETTBEWERBSMODELL","BAUHERRENMODELL","STADTMODELL","WOHNBAUMODELL","MAßSTAB 1:100","MAßSTAB 1:200","MAßSTAB 1:500","ARCHICAD","REVIT","RHINO","SKETCHUP","EXPRESS 24H","WEIßES MODELL","BIM-KONFORM"].map((w, i) => (
                <span key={`${di}-${i}`} className="inline-flex items-center gap-6 mx-6 whitespace-nowrap">
                  <span className="mono text-xs font-bold tracking-[0.2em] text-foreground/40 whitespace-nowrap">{w}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* BRANCHEN BENTO */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wer mit uns modellbaut</p>
                  <TextReveal text="Sechs Welten. Ein Verfahren." className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]" />
                </div>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Von der Wettbewerbsabgabe bis zum Stadtmodell – wir kennen die unterschiedlichen Anforderungen jeder Disziplin.
                </p>
              </div>
            </AnimatedSection>

            {/* Bento: 2 full, 4 small */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <Trophy className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchen[0].branche}</p>
                    <p className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchen[0].titel}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchen[0].text}</p>
                    <div className="inline-flex items-center gap-2 text-xs text-primary font-semibold mono uppercase tracking-wider"><Layers className="w-3.5 h-3.5" /> {branchen[0].typisch}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Building2 className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchen[1].branche}</p>
                    <p className="text-xl font-bold mb-3 tracking-tight">{branchen[1].titel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchen[1].text}</p>
                    <p className="text-xs text-primary font-semibold mono uppercase tracking-wider">{branchen[1].typisch}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <AnimatedSection animation="slide-up" delay={150}>
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-10">
                    <Home className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchen[2].branche}</p>
                    <p className="text-xl font-bold mb-3 tracking-tight">{branchen[2].titel}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{branchen[2].text}</p>
                    <p className="text-xs text-primary font-semibold mono uppercase tracking-wider">{branchen[2].typisch}</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200} className="md:col-span-2">
                <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="p-8 md:p-12">
                    <MapPin className="w-10 h-10 text-primary mb-6" />
                    <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{branchen[3].branche}</p>
                    <p className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{branchen[3].titel}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{branchen[3].text}</p>
                    <div className="inline-flex items-center gap-2 text-xs text-primary font-semibold mono uppercase tracking-wider"><Layers className="w-3.5 h-3.5" /> {branchen[3].typisch}</div>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {branchen.slice(4).map((b, i) => (
                <AnimatedSection key={b.branche} animation="slide-up" delay={250 + i * 80}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="p-8 md:p-10">
                      <b.icon className="w-10 h-10 text-primary mb-6" />
                      <p className="mono text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{b.branche}</p>
                      <p className="text-xl font-bold mb-3 tracking-tight">{b.titel}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{b.text}</p>
                      <p className="text-xs text-primary font-semibold mono uppercase tracking-wider">{b.typisch}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAßSTÄBE */}
      <ArchitekturScaleSection />

      {/* VERGLEICH */}
      <ArchitekturComparisonSection />

      {/* ROI */}
      <ArchitekturROISection />

      {/* FALLBEISPIELE */}
      <ArchitekturFallbeispieleSection />

      {/* CAD-FORMATE */}
      <ArchitekturFormatSection />

      {/* REFERENZEN */}
      <ReferencesTeaser />

      {/* SEO CONTENT */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Architekturmodelle im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Warum 3D-Druck den Architekturmodellbau verändert hat</h2>

              <div className="space-y-8 text-base leading-[1.85] text-foreground/85">
                <p>Wer als Architekt heute auf <strong>Architekturmodelle aus dem 3D-Druck</strong> setzt, hat einen Vorteil gegenüber Konkurrenten die noch auf klassischen Modellbau warten. Klassische Modellbauwerkstätten brauchen drei bis sechs Wochen für ein Modell – wir liefern in drei bis fünf Werktagen, im Express-Verfahren in 24 Stunden. Das verändert wie Architekturbüros mit Wettbewerben, Bauherren und Vermarktung umgehen.</p>

                <p>Wir fertigen <strong>Wettbewerbsmodelle</strong> in klassischer weißer Optik, <strong>Bauherrenmodelle</strong> für Beratungsgespräche, <strong>Vermarktungsmodelle</strong> für Wohnbau-Schauräume, <strong>Quartiers- und Stadtmodelle</strong> für städtebauliche Projekte und <strong>Detail-Innenraummodelle</strong> für Materialstudien. Vom Maßstab 1:50 bis 1:1000, aus PLA, PETG, ASA oder hochauflösendem SLA-Resin – je nach Anwendungsziel.</p>

                <div className="rounded-3xl bg-card border-2 border-border p-8 md:p-10 not-prose">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Parallel-Fertigung ohne Aufpreis</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Der größte Unterschied zwischen klassischem Modellbau und 3D-Druck-Modellbau: <strong className="text-foreground">parallele Iteration mehrerer Varianten zu denselben Stückkosten</strong>. Wo der klassische Modellbauer für vier Wettbewerbsvarianten vier Kalenderwochen und das Vierfache der Kosten ansetzt, drucken wir alle vier Varianten gleichzeitig in derselben Maschine. Sie können sich auf den Entwurf konzentrieren, nicht auf die Logistik.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">CAD-Format-Unterstützung für alle Architektur-Tools</h3>
                  <p>Wir verarbeiten <strong>ArchiCAD (.pln, .ifc), Revit (.rvt, .ifc), Rhino (.3dm), SketchUp (.skp), AutoCAD (.dwg, .dxf), Vectorworks (.vwx), Allplan (.pln, .ifc)</strong> sowie alle Standardformate (.stl, .step, .obj, .3mf). Sie müssen Ihre Datei nicht in STL konvertieren oder druckfertig aufbereiten – das übernehmen wir. Vor dem Druck prüfen wir auf wasserdichte Solids, Wandstärken-Probleme, Anisotropie-Richtung. Bei Optimierungspotenzial melden wir uns mit konkreten Vorschlägen, bevor irgendetwas gedruckt wird.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Maßstäbe – welcher passt zu welchem Projekt?</h3>
                  <p>Für <strong>Einfamilienhäuser</strong> empfehlen wir Maßstab 1:100 (12×10 m Haus wird zu 12×10 cm Modell). Für <strong>Detailmodelle</strong> mit Innenausbau und Möblierung 1:50 (ein Geschoss EFH wird zu 60×40 cm). <strong>Wettbewerbsmodelle</strong> sind meist 1:200, oder der in den Wettbewerbsunterlagen vorgeschriebene Maßstab. <strong>Wohnbauprojekte</strong> für die Vermarktung im Schauraum: 1:100 bis 1:200. <strong>Quartiersmodelle</strong> für städtebauliche Wettbewerbe 1:500. <strong>Stadtmodelle</strong> für Stadtteil-Visualisierungen 1:1000. Wir beraten Sie kostenfrei zum richtigen Maßstab.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Oberflächen-Optionen</h3>
                  <p>Standardoberfläche ist weiße matte Optik – klassisch für Wettbewerbspräsentationen und Jurybewertungen. Auf Wunsch <strong>schwarz matt</strong> (modern, kontrastreich für Bauträger-Vermarktung), <strong>Holzdielen-Optik</strong> für Innenraum-Modelle, <strong>Beton-Optik</strong> mit Strukturoberfläche, <strong>Marmor-Optik</strong> für Premium-Modelle. <strong>RAL-Lackierung</strong> in jeder Farbe möglich, mehrfarbige Modelle für Differenzierung verkaufter Wohnungen, Geschoss-Markierungen, Material-Bemusterungen. Beschriftungen direkt eingelasert oder als gravierte Plexiglas-Plaketten am Sockel.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Express-Service für Wettbewerbsabgaben</h3>
                  <p>Wenn die Deadline morgen ist: <strong>Express-Fertigung in 24 Stunden</strong> möglich. Über-Nacht-Druck, Nachbearbeitung am Morgen, Versand oder persönliche Zustellung am gleichen Tag. Aufpreis +50%, Slot-Reservierung am besten telefonisch unter <strong>+43 676 5517197</strong>. Bei Wettbewerbsabgaben mit harter Deadline geben wir eine <strong>Liefer-Termin-Garantie</strong>: wird der zugesagte Termin nicht eingehalten, übernehmen wir 100% der nachweisbaren Folgekosten. Schriftlich im Angebot festgehalten.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Vertraulichkeit bei Wettbewerbsprojekten</h3>
                  <p>Auf Wunsch unterzeichnen wir eine <strong>NDA</strong>, bevor Daten ausgetauscht werden. Direkte Kommunikation mit dem Inhaber, keine Zwischeninstanzen. Keine Weitergabe an Subunternehmer ohne ausdrückliche Zustimmung. Datenarchivierung nach Projektabschluss optional – auf Wunsch löschen wir CAD-Daten sofort nach Lieferung. Wichtig insbesondere für laufende Wettbewerbe wo Vertraulichkeit zwingend ist, und für Bauträger-Projekte in der Pre-Marketing-Phase.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Reverse Engineering – wenn kein CAD vorhanden ist</h3>
                  <p>Sie haben Pläne, aber kein 3D-CAD-Modell? Wir erstellen Ihr <strong>3D-Modell nach Plan, Foto oder Skizze</strong>. Auch Bestandsgebäude können wir nach Aufmaß oder vorhandenen Plänen modellieren – ab €120 pro Stunde. Für <strong>Restaurierungs- und Sanierungsprojekte</strong> besonders interessant: historische Pläne werden zum modernen 3D-Modell. Auch für Touristenmodelle historischer Stadtkerne oder Museums-Exponate von Altbestand häufig genutzt.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Standorte und Liefergebiete</h3>
                  <p>Unser Standort ist <strong>Gunskirchen</strong> in Oberösterreich, 20 Minuten von Linz und Wels. Wir bedienen <Link href="/3d-druck-wien" className="text-primary hover:underline">Wien</Link>, <Link href="/3d-druck-oberoesterreich" className="text-primary hover:underline">Linz und Oberösterreich</Link>, <Link href="/3d-druck-salzburg" className="text-primary hover:underline">Salzburg</Link>, <Link href="/3d-druck-steiermark" className="text-primary hover:underline">Graz</Link> und die <Link href="/3d-druck-kaernten" className="text-primary hover:underline">Kärntner Region</Link>. Versand ins gesamte DACH-Gebiet in 2–4 Werktagen, EU-Versand auf Anfrage. Persönliche Lieferung in Oberösterreich, Wien und Salzburg gegen Aufwandsentschädigung.</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">Auch interessant</h3>
                  <p>Sie suchen <Link href="/messemodelle" className="text-primary font-semibold hover:underline">Messemodelle</Link> für Ihren Auftritt auf Architektur- oder Bauträger-Messen? <Link href="/prototyping" className="text-primary font-semibold hover:underline">Rapid Prototyping</Link> für nicht-architektonische Bauteile? <Link href="/firmenkunden" className="text-primary font-semibold hover:underline">B2B-Konditionen</Link> für regelmäßigen Modellbedarf? Wir bieten das gesamte 3D-Druck-Spektrum aus einer Hand.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REGIONEN */}
      <AllRegionsLinks />

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Häufige Fragen zu Architekturmodellen"
        subtitle="Alles was Architekten, Bauträger und Privatkunden wissen wollen"
        schemaId="architekturmodelle-faq"
      />

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>
    </main>
    <StickyCTA />
    <Footer />
  </>
);

export default Architekturmodelle;
