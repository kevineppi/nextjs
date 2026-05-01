'use client'

import { useState, useCallback } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import CalculatorHero from "@/components/calculator/CalculatorHero";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import PriceSummary from "@/components/calculator/PriceSummary";
import CalculatorDisclaimer from "@/components/calculator/CalculatorDisclaimer";
import CalculatorInfoSection from "@/components/calculator/CalculatorInfoSection";
import MaterialOverviewCompact from "@/components/calculator/MaterialOverviewCompact";
import SEOContentSection from "@/components/calculator/SEOContentSection";
import DebugPanel from "@/components/calculator/DebugPanel";
import STLViewer from "@/components/calculator/STLViewer";
import ProcessSection from "@/components/calculator/ProcessSection";
import { useModelAnalysis } from "@/hooks/useModelAnalysis";
import { type PricingInput, type PricingResult, calculatePrice } from "@/lib/pricingEngine";
import FAQSection from "@/components/landing/FAQSection";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HowToSchema from "@/components/HowToSchema";
import Link from "next/link";
import {
  Box, ArrowRight, ShieldCheck, Clock, UserCheck,
  MessageSquare, Star
} from "lucide-react";

const calculatorFaqs = [
  {
    question: "Wie genau ist der Richtpreis?",
    answer: "Der Richtpreis basiert auf unserer Kalkulationsformel und gibt eine realistische Orientierung. Der endgültige Preis wird nach persönlicher technischer Prüfung Ihrer Datei individuell festgelegt. Wir garantieren weder den Richtpreis noch die Machbarkeit – beides wird erst nach Begutachtung bestätigt."
  },
  {
    question: "Welche Dateiformate werden unterstützt?",
    answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet und als 3D-Vorschau angezeigt. Für andere Formate (OBJ, STEP, 3MF) senden Sie uns bitte eine Anfrage über unser Kontaktformular."
  },
  {
    question: "Was bedeutet Infill (Füllung)?",
    answer: "Der Infill-Wert bestimmt, wie dicht das Innere Ihres Modells gedruckt wird. 10–15 % reicht für leichte Präsentationsmodelle, 30–50 % für stabile Showmodelle, 100 % für massive Vollkörper. Die optimale Einstellung besprechen wir gerne individuell."
  },
  {
    question: "Welche Materialien bietet ihr an?",
    answer: "Wir drucken mit PLA, PLA+, PETG, ABS, ASA, TPU (flexibel), PA6-CF (Carbonfaser-verstärkt) und Polycarbonat. Jedes Material hat spezifische Eigenschaften – von günstigem PLA für Designstudien bis zu Premium-Carbon für hochwertige Showmodelle."
  },
  {
    question: "Kann ich direkt über den Rechner bestellen?",
    answer: "Nein. Der Rechner dient ausschließlich zur unverbindlichen Preisindikation. Über das integrierte Formular können Sie eine Anfrage senden – Ihr Projekt wird dann persönlich von uns geprüft. Erst nach individueller Begutachtung erhalten Sie ein verbindliches Angebot."
  },
  {
    question: "Sind auch größere Stückzahlen möglich?",
    answer: "Ja, wir fertigen regelmäßig Kleinauflagen und größere Projektmengen – ob 10 Messemodelle, 50 Schulungsmodelle oder 200+ Exemplare für eine Produktpräsentation. Ab 10 Stück erhalten Sie automatisch Mengenvorteile. Für individuelle Chargen erstellen wir gerne ein maßgeschneidertes Angebot."
  },
  {
    question: "Wie lange dauert die Fertigung?",
    answer: "Die geschätzte Druckzeit wird im Rechner angezeigt. Die tatsächliche Lieferzeit hängt von der Auftragslage und Nachbearbeitung ab – in der Regel 3–7 Werktage nach Auftragsbestätigung. Für eilige Projekte bieten wir nach persönlicher Absprache auch Express-Fertigung an."
  },
  {
    question: "Fertigt ihr auch mechanische Bauteile?",
    answer: "Nein. Wir sind auf nicht-technische Modelle spezialisiert – Präsentationsmodelle, Designstudien und Showmodelle. Anfragen für mechanische Bauteile oder Ersatzteile können wir leider nicht bearbeiten."
  },
  {
    question: "Was passiert nach dem Absenden meiner Anfrage?",
    answer: "Unser Team prüft Ihr 3D-Modell persönlich auf Druckbarkeit, optimale Orientierung und Materialeignung. Innerhalb von 6 Stunden erhalten Sie eine Rückmeldung mit einer individuellen Einschätzung – inklusive verbindlichem Angebot, sofern Ihr Projekt in unseren Leistungsbereich fällt."
  },
];

const breadcrumbs = [
  { name: "Startseite", url: "/" },
  { name: "Kostenrechner", url: "/kostenrechner" },
];

const Kostenrechner = () => {
  const [result, setResult] = useState<PricingResult | null>(null);
  const [currentInput, setCurrentInput] = useState<PricingInput | null>(null);

  const model = useModelAnalysis();

  const handleCalculate = useCallback((input: PricingInput) => {
    setCurrentInput(input);
    setResult(calculatePrice(input));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0"
        description="STL hochladen → Richtpreis sofort. Kein Account, kein Anruf nötig. Verbindliches Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen) | ekdruck"
        path="/kostenrechner"
        keywords="3d drucken lassen, 3d drucken lassen kosten, 3d druck preis berechnen, 3d druck online bestellen, 3d druck kosten österreich, 3d modell drucken lassen, 3d druck anbieter österreich"
        breadcrumbs={breadcrumbs}
        schemaType="service"
      />
      <HowToSchema
        name="3D-Druck Richtpreis berechnen – In 4 Schritten zum Angebot"
        description="So berechnen Sie unverbindlich den Richtpreis für Ihr 3D-gedrucktes Modell und fordern ein persönliches Angebot an."
        totalTime="PT5M"
        steps={[
          { name: "STL-Datei hochladen", text: "Laden Sie Ihre 3D-Datei (STL-Format, bis 100 MB) hoch. Volumen, Oberfläche und Abmessungen werden sekundenschnell im Browser analysiert – ohne dass Ihre Datei einen Server verlässt." },
          { name: "Material und Parameter wählen", text: "Wählen Sie aus 8 FDM-Materialien (PLA, PETG, ABS, ASA, TPU, PA6-CF, PC) und stellen Sie Schichtdicke, Infill und Wandstärke ein. Der Richtpreis aktualisiert sich bei jeder Änderung in Echtzeit." },
          { name: "Richtpreis prüfen", text: "Sie sehen sofort eine detaillierte Aufschlüsselung: Materialkosten, Druckkosten, Setup-Pauschale, eventuelle Mengenvorteile und den geschätzten Gesamtpreis." },
          { name: "Persönliches Angebot anfordern", text: "Senden Sie eine unverbindliche Anfrage mit Ihrem Namen und Ihrer E-Mail. Unser Team prüft Ihr 3D-Modell persönlich und meldet sich innerhalb von 6 Stunden mit einem individuellen Angebot." },
        ]}
      />
      <Navigation />

      <main className="pt-20">
        <CalculatorHero />

        {/* ── Calculator Section ────────────────────── */}
        <section id="calculator" className="py-6 md:py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

              {/* ── Left Column: Form + 3D Viewer ──── */}
              <div className="lg:col-span-7 space-y-6">
                <CalculatorForm
                  onCalculate={handleCalculate}
                  geometry={model.geometry}
                  fileName={model.fileName}
                  fileSize={model.fileSize}
                  isAnalyzing={model.isAnalyzing}
                  uploadError={model.error}
                  onFileSelect={model.analyzeFile}
                  onFileClear={model.clearFile}
                />

                {/* 3D Preview */}
                {model.arrayBuffer ? (
                  <div className="bg-card border border-border/60 rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-5 py-3 border-b border-border/40 bg-muted/20 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-semibold text-foreground">3D-Vorschau</span>
                      <span className="text-xs text-muted-foreground ml-auto">{model.fileName}</span>
                    </div>
                    <STLViewer
                      buffer={model.arrayBuffer}
                      className="h-[300px] md:h-[360px] rounded-none border-0"
                    />
                  </div>
                ) : (
                  <div className="bg-card border border-dashed border-border/60 rounded-2xl p-8 md:p-10 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mx-auto mb-4">
                      <Box className="h-7 w-7 text-muted-foreground/50" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      3D-Vorschau verfügbar nach Upload
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Laden Sie eine STL-Datei in Schritt 1 hoch, um Ihr Modell
                      hier interaktiv zu betrachten.
                    </p>
                  </div>
                )}
              </div>

              {/* ── Right Column: Price (sticky) ───── */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
                <PriceSummary result={result} input={currentInput} stlFile={model.file} />
              </div>
            </div>

            <DebugPanel result={result} input={currentInput} />
          </div>
        </section>

        {/* ── Inline Trust Strip — directly after calculator ──────────── */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Kein Webshop – keine Bestellung
            </span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="h-4 w-4 text-primary" />
              Persönliche Prüfung jeder Anfrage
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              Angebot in 6 Stunden
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-primary" />
              5,0 ★ Google (31 Bewertungen)
            </span>
          </div>
        </div>

        {/* ── Kostenfaktoren — woven into the flow ────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left: SEO content about cost factors */}
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Preistransparenz</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
                    5 Faktoren, die Ihren<br />Richtpreis bestimmen
                  </h2>
                  <div className="space-y-4">
                    {[
                      { title: "Materialverbrauch", text: "PLA ab €25/kg bis PA6-CF €120/kg. Wandstärke und Infill bestimmen den tatsächlichen Materialanteil." },
                      { title: "Druckzeit", text: "Volumen, Oberfläche, Schichtdicke und Infill-Dichte beeinflussen die Maschinenzeit." },
                      { title: "Baugröße", text: "Ab 170 mm max. Ausdehnung greift ein Größenzuschlag – größere Drucke brauchen mehr Plattenbelegung." },
                      { title: "Setup & Vorbereitung", text: "€12,99 Pauschale pro Projekt – Slicing, Orientierung und Qualitätskontrolle durch Fachpersonal." },
                      { title: "Nachbearbeitung", text: "Glätten, Grundieren, Lackieren – wird individuell besprochen und separat kalkuliert." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/8 flex items-center justify-center text-xs font-bold text-primary mt-0.5 group-hover:bg-primary/15 transition-colors">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Process steps */}
                <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 space-y-6">
                  <div>
                    <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">So funktioniert's</p>
                    <h3 className="text-xl font-bold text-foreground">In 4 Schritten zum Angebot</h3>
                  </div>
                  {[
                    { step: "01", title: "3D-Datei hochladen", text: "STL-Analyse direkt im Browser – Ihre Datei bleibt lokal." },
                    { step: "02", title: "Material & Parameter wählen", text: "8 FDM-Materialien, Echtzeit-Preisindikation bei jeder Änderung." },
                    { step: "03", title: "Richtpreis prüfen", text: "Detaillierte Aufschlüsselung aller Kostenpositionen." },
                    { step: "04", title: "Angebot anfordern", text: "Unverbindliche Anfrage – persönliche Rückmeldung in 6h." },
                  ].map((s, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="shrink-0 relative">
                        <span className="block w-9 h-9 rounded-full border-2 border-primary/20 flex items-center justify-center text-xs font-bold text-primary bg-primary/5">
                          {s.step}
                        </span>
                        {i < 3 && <div className="absolute top-9 left-1/2 -translate-x-1/2 w-px h-6 bg-border/60" />}
                      </div>
                      <div className="pt-1">
                        <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  ))}
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all mt-2"
                  >
                    Jetzt Richtpreis berechnen <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inline disclaimer – compact ─────────────────────────────── */}
        <CalculatorDisclaimer />

        {/* ── Material Overview ──────────────────────────────────────── */}
        <MaterialOverviewCompact />

        {/* ── Mid-page CTA back to calculator ────────────────────────── */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/8 via-primary/5 to-accent/5 border border-primary/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">Bereit für Ihren Richtpreis?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Laden Sie Ihre STL-Datei hoch, wählen Sie Material und Parameter –
                  der Richtpreis berechnet sich in Echtzeit.
                </p>
              </div>
              <a
                href="#calculator"
                className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                <Box className="h-4 w-4" />
                Zum Rechner
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ — integrated, not distant ───────────────────────────── */}
        <FAQSection
          faqs={calculatorFaqs}
          title="Häufige Fragen zum 3D-Druck Kostenrechner"
          subtitle="Alles Wichtige zu Preiskalkulation, Materialien und dem Ablauf Ihrer Anfrage."
          schemaId="kostenrechner"
        />

        {/* ── Deep SEO content ───────────────────────────────────────── */}
        <SEOContentSection />

        {/* ── Service overview — what we do ───────────────────────────── */}
        <CalculatorInfoSection />

        {/* ── Cross-links — keep visitors on site ────────────────────── */}
        <section className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">Weiterführende Infos</p>
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                Informieren Sie sich vor Ihrer Anfrage
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { to: "/architekturmodelle", title: "Architekturmodelle", desc: "Maßstabsgetreue Modelle 1:50–1:500 für Wettbewerbe und Präsentationen.", tag: "ab €20" },
                  { to: "/messemodelle", title: "Messemodelle", desc: "Showmodelle für Messestand und Ausstellung – auch kurzfristig.", tag: "Express 24h" },
                  { to: "/3d-druck-materialien", title: "Materialien im Detail", desc: "PLA, PETG, ABS, Carbon – alle Eigenschaften im Überblick.", tag: "8 Materialien" },
                  { to: "/rapid-prototyping", title: "Rapid Prototyping", desc: "Designstudien und Iterationen in wenigen Tagen.", tag: "ab 1 Stück" },
                  { to: "/firmenkunden", title: "Firmenkunden & B2B", desc: "UID-Rechnung, NDA, Mengenvorteile für Unternehmen.", tag: "B2B" },
                  { to: "/kontakt", title: "Direkter Kontakt", desc: "Komplexes Projekt? Wir beraten persönlich und unverbindlich.", tag: "Antwort in 6h" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    href={item.to}
                    className="group relative border border-border/60 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card"
                  >
                    <span className="absolute top-4 right-4 text-[10px] font-bold bg-primary/8 text-primary px-2 py-0.5 rounded-full border border-primary/15">
                      {item.tag}
                    </span>
                    <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors pr-16">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Mehr erfahren <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────── */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-xl mx-auto">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">
                Fragen? Komplexeres Projekt?
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Der Rechner gibt eine erste Orientierung. Für individuelle Beratung,
                spezielle Anforderungen oder größere Projektmengen kontaktieren Sie uns direkt.
              </p>
              <Link href="/kontakt"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-semibold text-sm hover:bg-foreground/90 transition-colors"
              >
                Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA context="Preisanfrage" />
      <Footer />
    </div>
  );
};

export default Kostenrechner;
