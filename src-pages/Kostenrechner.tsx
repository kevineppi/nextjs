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
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Box, ArrowRight, ShieldCheck, Clock, UserCheck,
  MessageSquare, Star, Plus, Trash2, ChevronDown, ChevronUp, Package
} from "lucide-react";

/* ── Types ────────────────────────────────────────────── */
interface Part {
  id: string;
  result: PricingResult | null;
  input: PricingInput | null;
  modelState: ReturnType<typeof useModelAnalysis>;
}

/* ── FAQs ─────────────────────────────────────────────── */
const calculatorFaqs = [
  { question: "Wie genau ist der Richtpreis?", answer: "Der Richtpreis basiert auf unserer Kalkulationsformel und gibt eine realistische Orientierung. Der endgültige Preis wird nach persönlicher technischer Prüfung Ihrer Datei individuell festgelegt. Wir garantieren weder den Richtpreis noch die Machbarkeit – beides wird erst nach Begutachtung bestätigt." },
  { question: "Welche Dateiformate werden unterstützt?", answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet und als 3D-Vorschau angezeigt. Für andere Formate (OBJ, STEP, 3MF) senden Sie uns bitte eine Anfrage über unser Kontaktformular." },
  { question: "Was bedeutet Infill (Füllung)?", answer: "Der Infill-Wert bestimmt, wie dicht das Innere Ihres Modells gedruckt wird. 10–15 % reicht für leichte Präsentationsmodelle, 30–50 % für stabile Showmodelle, 100 % für massive Vollkörper. Die optimale Einstellung besprechen wir gerne individuell." },
  { question: "Welche Materialien bietet ihr an?", answer: "Wir drucken mit PLA, PLA+, PETG, ABS, ASA, TPU (flexibel), PA6-CF (Carbonfaser-verstärkt) und Polycarbonat. Jedes Material hat spezifische Eigenschaften – von günstigem PLA für Designstudien bis zu Premium-Carbon für hochwertige Showmodelle." },
  { question: "Kann ich direkt über den Rechner bestellen?", answer: "Nein. Der Rechner dient ausschließlich zur unverbindlichen Preisindikation. Über das integrierte Formular können Sie eine Anfrage senden – Ihr Projekt wird dann persönlich von uns geprüft. Erst nach individueller Begutachtung erhalten Sie ein verbindliches Angebot." },
  { question: "Sind auch größere Stückzahlen möglich?", answer: "Ja, wir fertigen regelmäßig Kleinauflagen und größere Projektmengen – ob 10 Messemodelle, 50 Schulungsmodelle oder 200+ Exemplare für eine Produktpräsentation. Ab 10 Stück erhalten Sie automatisch Mengenvorteile. Für individuelle Chargen erstellen wir gerne ein maßgeschneidertes Angebot." },
  { question: "Wie lange dauert die Fertigung?", answer: "Die geschätzte Druckzeit wird im Rechner angezeigt. Die tatsächliche Lieferzeit hängt von der Auftragslage und Nachbearbeitung ab – in der Regel 3–7 Werktage nach Auftragsbestätigung. Für eilige Projekte bieten wir nach persönlicher Absprache auch Express-Fertigung an." },
  { question: "Kann ich mehrere Teile gleichzeitig kalkulieren?", answer: "Ja! Sie können beliebig viele STL-Dateien hochladen und für jedes Teil individuelle Parameter (Material, Infill, Schichtdicke) einstellen. Der Rechner zeigt den Stückpreis pro Teil und den Gesamtpreis über alle Teile an." },
  { question: "Was passiert nach dem Absenden meiner Anfrage?", answer: "Unser Team prüft Ihr 3D-Modell persönlich auf Druckbarkeit, optimale Orientierung und Materialeignung. Innerhalb von 6 Stunden erhalten Sie eine Rückmeldung mit einer individuellen Einschätzung – inklusive verbindlichem Angebot, sofern Ihr Projekt in unseren Leistungsbereich fällt." },
];

const breadcrumbs = [
  { name: "Startseite", url: "/" },
  { name: "Kostenrechner", url: "/kostenrechner" },
];

/* ── Single Part Component ────────────────────────────── */
const PartCalculator = ({
  partIndex,
  partCount,
  onResultChange,
  onRemove,
}: {
  partIndex: number;
  partCount: number;
  onResultChange: (index: number, result: PricingResult | null, input: PricingInput | null, file: File | null) => void;
  onRemove: (index: number) => void;
}) => {
  const [result, setResult] = useState<PricingResult | null>(null);
  const [currentInput, setCurrentInput] = useState<PricingInput | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const model = useModelAnalysis();

  const handleCalculate = useCallback((input: PricingInput) => {
    setCurrentInput(input);
    const r = calculatePrice(input);
    setResult(r);
    onResultChange(partIndex, r, input, model.file);
  }, [partIndex, onResultChange, model.file]);

  return (
    <div className="border-2 border-border rounded-2xl overflow-hidden bg-card">
      {/* Part Header */}
      <div
        className="flex items-center justify-between px-5 py-3 bg-muted/30 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="mono text-xs font-bold text-primary">{partIndex + 1}</span>
          </div>
          <div>
            <p className="text-sm font-bold">
              Teil {partIndex + 1}
              {model.fileName && <span className="text-muted-foreground font-normal ml-2">– {model.fileName}</span>}
            </p>
            {result && (
              <p className="text-xs text-primary font-semibold">
                {result.finalPrice.toFixed(2).replace(".", ",")} € {currentInput && currentInput.quantity > 1 ? `(${currentInput.quantity}× à ${result.unitPrice.toFixed(2).replace(".", ",")} €)` : 'Stückpreis'}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {partCount > 1 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
              onClick={(e) => { e.stopPropagation(); onRemove(partIndex); }}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
          {isCollapsed ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronUp className="w-4 h-4 text-muted-foreground" />}
        </div>
      </div>

      {/* Part Content */}
      {!isCollapsed && (
        <div className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Form */}
            <div className="lg:col-span-7 p-5 space-y-5 border-r border-border/50">
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

              {model.arrayBuffer && (
                <div className="border border-border/60 rounded-xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-border/40 bg-muted/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold">3D-Vorschau</span>
                  </div>
                  <STLViewer buffer={model.arrayBuffer} className="h-[250px] rounded-none border-0" />
                </div>
              )}
            </div>

            {/* Price for this part */}
            <div className="lg:col-span-5 p-5">
              <PriceSummary result={result} input={currentInput} stlFile={model.file} hideInquiry />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Main Kostenrechner ───────────────────────────────── */
const Kostenrechner = () => {
  const [parts, setParts] = useState<{ id: string; result: PricingResult | null; input: PricingInput | null; file: File | null }[]>([
    { id: crypto.randomUUID(), result: null, input: null, file: null },
  ]);

  const handleResultChange = useCallback((index: number, result: PricingResult | null, input: PricingInput | null, file: File | null) => {
    setParts(prev => prev.map((p, i) => i === index ? { ...p, result, input, file } : p));
  }, []);

  const addPart = useCallback(() => {
    setParts(prev => [...prev, { id: crypto.randomUUID(), result: null, input: null, file: null }]);
  }, []);

  const removePart = useCallback((index: number) => {
    setParts(prev => prev.filter((_, i) => i !== index));
  }, []);

  // Calculate totals
  const partsWithResults = parts.filter(p => p.result);
  const totalPrice = partsWithResults.reduce((sum, p) => sum + (p.result?.finalPrice || 0), 0);
  const totalPrintTime = partsWithResults.reduce((sum, p) => sum + (p.result?.printTimeMin || 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0"
        description="STL hochladen → Richtpreis sofort. Mehrere Teile kalkulieren. Kein Account nötig. Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen) | ekdruck"
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
          { name: "STL-Datei hochladen", text: "Laden Sie Ihre 3D-Datei (STL-Format, bis 100 MB) hoch. Volumen, Oberfläche und Abmessungen werden sekundenschnell im Browser analysiert." },
          { name: "Material und Parameter wählen", text: "Wählen Sie aus 8 FDM-Materialien und stellen Sie Schichtdicke, Infill und Wandstärke ein. Der Richtpreis aktualisiert sich in Echtzeit." },
          { name: "Weitere Teile hinzufügen", text: "Laden Sie beliebig viele STL-Dateien hoch und konfigurieren Sie jedes Teil individuell. Der Gesamtpreis wird automatisch berechnet." },
          { name: "Persönliches Angebot anfordern", text: "Senden Sie eine unverbindliche Anfrage. Unser Team meldet sich innerhalb von 6 Stunden mit einem individuellen Angebot." },
        ]}
      />
      <Navigation />

      <main className="pt-20">
        <CalculatorHero />

        {/* ── Calculator Section ────────────────────── */}
        <section id="calculator" className="py-6 md:py-12 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Parts List */}
              <div className="space-y-4">
                {parts.map((part, index) => (
                  <PartCalculator
                    key={part.id}
                    partIndex={index}
                    partCount={parts.length}
                    onResultChange={handleResultChange}
                    onRemove={removePart}
                  />
                ))}
              </div>

              {/* Add Part Button */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  onClick={addPart}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Weiteres Teil hinzufügen
                </Button>
              </div>

              {/* ── Total Summary (shows when multiple parts) ─── */}
              {partsWithResults.length > 0 && (
                <AnimatedSection animation="slide-up">
                  <div className="mt-6 border-2 border-primary rounded-2xl overflow-hidden bg-primary/[0.02]">
                    <div className="px-6 py-4 bg-primary/5 border-b border-primary/10 flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary" />
                      <p className="font-bold">Gesamtübersicht</p>
                      <span className="mono text-xs text-muted-foreground">{partsWithResults.length} {partsWithResults.length === 1 ? 'Teil' : 'Teile'} kalkuliert</span>
                    </div>
                    <div className="p-6">
                      {/* Per-part breakdown */}
                      <div className="space-y-2 mb-4">
                        {parts.map((part, i) => {
                          if (!part.result) return null;
                          const qty = part.input?.quantity || 1;
                          return (
                            <div key={part.id} className="flex items-center justify-between text-sm py-2 border-b border-border/30 last:border-b-0">
                              <div className="flex items-center gap-3">
                                <span className="mono text-xs font-bold text-primary bg-primary/10 w-6 h-6 rounded flex items-center justify-center">{i + 1}</span>
                                <span className="text-muted-foreground">{part.file?.name || `Teil ${i + 1}`}</span>
                                {qty > 1 && <span className="mono text-[10px] bg-muted px-2 py-0.5 rounded">{qty}×</span>}
                              </div>
                              <div className="text-right">
                                <span className="font-bold">{part.result.finalPrice.toFixed(2).replace(".", ",")} €</span>
                                {qty > 1 && <span className="text-xs text-muted-foreground ml-2">(à {part.result.unitPrice.toFixed(2).replace(".", ",")} €)</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Total */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-primary/20">
                        <div>
                          <p className="text-lg font-bold">Gesamtpreis (Richtpreis)</p>
                          <p className="text-xs text-muted-foreground">
                            {partsWithResults.length} {partsWithResults.length === 1 ? 'Teil' : 'Teile'} · Geschätzte Druckzeit: {
                              totalPrintTime < 60 ? `${Math.round(totalPrintTime)} Min.` :
                              `${Math.floor(totalPrintTime / 60)} Std. ${Math.round(totalPrintTime % 60)} Min.`
                            }
                          </p>
                        </div>
                        <p className="text-3xl font-bold text-primary">{totalPrice.toFixed(2).replace(".", ",")} €</p>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="flex-1 rounded-full py-6" asChild>
                          <Link href="#kontakt">Angebot für alle Teile anfragen <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full py-6" asChild>
                          <a href="tel:+436765517197">Anrufen</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>

        {/* ── Trust Strip ──────────── */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" />Kein Webshop – keine Bestellung</span>
            <span className="flex items-center gap-1.5"><UserCheck className="h-4 w-4 text-primary" />Persönliche Prüfung jeder Anfrage</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />Angebot in 6 Stunden</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" />5,0 ★ Google (31 Bewertungen)</span>
          </div>
        </div>

        {/* ── Info Sections ────────── */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Preistransparenz</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
                    5 Faktoren, die Ihren<br />Richtpreis bestimmen
                  </h2>
                  <CalculatorInfoSection />
                </div>
                <MaterialOverviewCompact />
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <SEOContentSection />

        <FAQSection
          faqs={calculatorFaqs}
          title="Häufige Fragen zum 3D-Druck Kostenrechner"
          subtitle="Alles was Sie vor der Kalkulation wissen sollten"
          schemaId="calculator-faq"
        />

        <section id="kontakt" className="scroll-mt-20">
          <CalculatorDisclaimer />
        </section>
      </main>

      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Kostenrechner;
