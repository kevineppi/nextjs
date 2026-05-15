'use client'

import { useState, useCallback, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SEOContentSection from "@/components/calculator/SEOContentSection";
import ProcessSection from "@/components/calculator/ProcessSection";
import CalculatorDisclaimer from "@/components/calculator/CalculatorDisclaimer";
import STLViewer from "@/components/calculator/STLViewer";
import FAQSection from "@/components/landing/FAQSection";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HowToSchema from "@/components/HowToSchema";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticCard from "@/components/MagneticCard";
import { useModelAnalysis } from "@/hooks/useModelAnalysis";
import { type PricingInput, type PricingResult, calculatePrice } from "@/lib/pricingEngine";
import { pricingConfig } from "@/data/pricingConfig";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Upload, FileText, Trash2, Shield, Zap, MapPin, Leaf, Send,
  ChevronDown, CheckCircle2, Plus, Minus, Phone, Star, Clock,
  Package, Layers, Scale, Wrench, Users, Building2, GraduationCap,
  Palette, MessageCircle, Calendar, ExternalLink, ArrowDown,
  Calculator, ShieldCheck, UserCheck, Box, ArrowRight,
  FlaskConical, Sparkles, Eye, TrendingDown,
} from "lucide-react";

// ─── MATERIAL UI META ────────────────────────────────────────────
const MATERIAL_META: Record<string, { desc: string; color: string; colorBg: string }> = {
  PLA:      { desc: "Glatte Oberfläche, ideal für Präsentationsmodelle", color: "text-blue-600", colorBg: "bg-blue-500" },
  "PLA+":   { desc: "Verstärkt, höhere Schlagzähigkeit als Standard-PLA", color: "text-indigo-600", colorBg: "bg-indigo-500" },
  PETG:     { desc: "UV-stabil & schlagfest — perfekt für Messemodelle", color: "text-emerald-600", colorBg: "bg-emerald-500" },
  ABS:      { desc: "Glätt- und lackierbar für Ausstellungsobjekte", color: "text-amber-600", colorBg: "bg-amber-500" },
  ASA:      { desc: "Wetterfest & UV-beständig für Außenanwendungen", color: "text-cyan-600", colorBg: "bg-cyan-500" },
  TPU:      { desc: "Flexibel & gummiartig — für biegbare Teile", color: "text-rose-600", colorBg: "bg-rose-500" },
  "PA6-CF": { desc: "Carbon-Look, ultraleicht — Premium-Showmodelle", color: "text-slate-700", colorBg: "bg-slate-800" },
  PC:       { desc: "Polycarbonat — extrem schlagfest & hitzebeständig", color: "text-violet-600", colorBg: "bg-violet-500" },
};

const QUALITY_PRESETS = [
  { label: "Standard", layer: 0.20, desc: "Schnell & günstig" },
  { label: "Fein",     layer: 0.12, desc: "Glattere Oberfläche" },
  { label: "Premium",  layer: 0.08, desc: "Höchste Detailtreue" },
];

// ─── HELPERS ─────────────────────────────────────────────────────
const fmt = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const fmtMin = (n: number) => {
  if (n < 60) return `${Math.round(n)} Min.`;
  const h = Math.floor(n / 60);
  const m = Math.round(n % 60);
  return m > 0 ? `${h} Std. ${m} Min.` : `${h} Std.`;
};

// ─── PART TYPE ───────────────────────────────────────────────────
interface PartState {
  id: string;
  fileName: string | null;
  fileSize: number | null;
  geometry: import("@/lib/stlParser").GeometryData | null;
  arrayBuffer: ArrayBuffer | null;
  file: File | null;
  materialKey: string;
  layerHeight: number;
  wallThickness: number;
  infillPercent: number;
  qty: number;
}

const cfg = pricingConfig;

const createPart = (overrides: Partial<PartState> = {}): PartState => ({
  id: crypto.randomUUID(),
  fileName: null,
  fileSize: null,
  geometry: null,
  arrayBuffer: null,
  file: null,
  materialKey: "PLA",
  layerHeight: cfg.defaultLayerHeight,
  wallThickness: cfg.defaultWallThickness,
  infillPercent: cfg.defaultInfillPercent,
  qty: 1,
  ...overrides,
});

function getGeo(p: PartState) {
  return p.geometry ?? {
    volumeCm3: cfg.placeholderGeometry.volumeCm3,
    surfaceCm2: cfg.placeholderGeometry.surfaceCm2,
    boundingBoxMm: { ...cfg.placeholderGeometry.boundingBoxMm },
    triangleCount: 0,
  };
}

function calcPart(p: PartState): PricingResult {
  const geo = getGeo(p);
  return calculatePrice({
    geometry: geo,
    materialKey: p.materialKey,
    layerHeight: p.layerHeight,
    wallThickness: p.wallThickness,
    infillPercent: p.infillPercent,
    quantity: p.qty,
  });
}

// ─── FAQS ────────────────────────────────────────────────────────
const calculatorFaqs = [
  { question: "Was kostet ein 3D-Druck Modell bei ekdruck?", answer: "Die 3D-Druck Kosten beginnen ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung — kostenlos und ohne Anmeldung. Für jedes Projekt erstellen wir ein persönlich geprüftes Festpreisangebot innerhalb von 6 Stunden." },
  { question: "Wie genau ist der Richtpreis aus dem Kostenrechner?", answer: "Der Richtpreis basiert auf der realen Geometrie Ihrer STL-Datei und berücksichtigt Materialverbrauch, Druckzeit, Baugröße und Setup-Aufwand. Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt und per E-Mail zugesendet." },
  { question: "Welche Dateiformate werden unterstützt?", answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet. Für andere Formate (OBJ, STEP, 3MF) kontaktieren Sie uns bitte direkt." },
  { question: "Welche 3D-Druck Materialien kann ich wählen?", answer: "Wir bieten 8 FDM-Materialien an: PLA (ideal für Präsentationsmodelle), PETG (UV-beständig, perfekt für Messemodelle), ABS (glätt- und lackierbar), PLA+ (verstärkt), ASA (wetterfest), TPU (flexibel), Polycarbonat (extrem schlagfest) und PA6-CF mit Carbonfaser für Premium-Showmodelle. Alle Filamente stammen aus österreichischer Produktion." },
  { question: "Was bedeutet Infill (Füllung)?", answer: "Der Infill-Wert bestimmt, wie dicht das Innere Ihres Modells gedruckt wird. 10–15 % reicht für leichte Präsentationsmodelle, 30–50 % für stabile Showmodelle, 100 % für massive Vollkörper." },
  { question: "Kann ich mehrere Teile gleichzeitig kalkulieren?", answer: "Ja, unser Kostenrechner unterstützt Multi-File-Upload. Sie können beliebig viele STL-Dateien hochladen, jeweils mit eigenem Material und eigener Stückzahl konfigurieren und erhalten einen Gesamtrichtpreis mit automatischem Mengenvorteil ab 10 Stück." },
  { question: "Kann ich direkt über den Rechner bestellen?", answer: "Nein. Der Rechner dient ausschließlich zur unverbindlichen Preisindikation. Über das integrierte Formular können Sie eine Anfrage senden – Ihr Projekt wird persönlich von uns geprüft. Erst nach individueller Begutachtung erhalten Sie ein verbindliches Angebot." },
  { question: "Wie schnell ist die Lieferung?", answer: "Standardaufträge fertigen wir in 3 bis 5 Werktagen. Im Express-Service erhalten Sie Ihr 3D-Druck Modell bereits in 24 bis 48 Stunden. Wir liefern versichert per Post in ganz Österreich." },
  { question: "Gibt es Mengenrabatte für größere Projekte?", answer: "Ja. Ab 10 Teilen erhalten Sie automatisch 5 % Mengenvorteil, ab 50 Teilen 8 % und ab 100 Teilen 10 % Rabatt auf den Gesamtpreis. Für größere Projektmengen erstellen wir gerne ein individuelles Angebot." },
];

const breadcrumbs = [
  { name: "Startseite", url: "/" },
  { name: "Kostenrechner", url: "/kostenrechner" },
];

// ═════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════════
const Kostenrechner = () => {
  const [parts, setParts] = useState<PartState[]>([createPart()]);
  const [activePart, setActivePart] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const current = parts[activePart] || parts[0];
  const partResults = parts.map(calcPart);
  const totalNet = partResults.reduce((s, r) => s + r.finalNet, 0);
  const totalQty = parts.reduce((s, p) => s + p.qty, 0);
  const totalPrintTime = partResults.reduce((s, r) => s + r.printTimeMin, 0);
  const currentResult = partResults[activePart];
  const geo = getGeo(current);

  // ── File handling ──
  const handleFiles = useCallback(async (files: FileList) => {
    const { parseSTL } = await import("@/lib/stlParser");
    const stlFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith(".stl"));
    if (stlFiles.length === 0) {
      toast.error("Bitte eine .stl-Datei hochladen.");
      return;
    }

    const newParts: PartState[] = [];
    for (const file of stlFiles) {
      try {
        const buffer = await file.arrayBuffer();
        const geometry = parseSTL(buffer);
        newParts.push(createPart({ fileName: file.name, fileSize: file.size, geometry, arrayBuffer: buffer, file }));
      } catch (err) {
        toast.error(`Fehler beim Parsen von ${file.name}`);
        newParts.push(createPart({ fileName: file.name, fileSize: file.size }));
      }
    }

    setParts(prev => {
      if (prev.length === 1 && !prev[0].fileName) {
        setActivePart(0);
        return newParts.length > 0 ? newParts : prev;
      }
      setActivePart(prev.length);
      return [...prev, ...newParts];
    });
  }, []);

  const updatePart = (key: keyof PartState, value: any) => {
    setParts(prev => prev.map((p, i) => i === activePart ? { ...p, [key]: value } : p));
  };

  const removePart = (idx: number) => {
    if (parts.length <= 1) return;
    setParts(prev => prev.filter((_, i) => i !== idx));
    setActivePart(a => Math.min(a, parts.length - 2));
  };

  const addEmptyPart = () => {
    setParts(prev => [...prev, createPart()]);
    setActivePart(parts.length);
  };

  // ── Submit ──
  const handleSubmit = async () => {
    if (!contactForm.name.trim() || !contactForm.email.trim()) {
      toast.error("Bitte Name und E-Mail angeben.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("anfragen").insert({
        name: contactForm.name,
        email: contactForm.email,
        firma: contactForm.company || null,
        telefon: contactForm.phone || null,
        nachricht: contactForm.message || null,
        konfiguration: JSON.stringify(parts.map((p, i) => ({
          fileName: p.fileName,
          material: p.materialKey,
          layerHeight: p.layerHeight,
          infill: p.infillPercent,
          wallThickness: p.wallThickness,
          qty: p.qty,
          price: partResults[i]?.finalNet,
        }))),
        gesamtpreis: totalNet,
      });
      if (error) throw error;
      setFormSubmitted(true);
      toast.success("Anfrage erfolgreich gesendet!");
    } catch {
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0"
        description="STL hochladen → Richtpreis sofort. Mehrere Teile kalkulieren. Kein Account nötig. Angebot in 6h · ab €20 · ★5,0 (31 Bewertungen) | ekdruck"
        path="/kostenrechner"
        keywords="3d drucken lassen, 3d drucken lassen kosten, 3d druck preis berechnen, 3d druck online bestellen, 3d druck kosten österreich, 3d modell drucken lassen, 3d druck anbieter österreich, kostenrechner 3d druck, 3d druck online rechner"
        breadcrumbs={breadcrumbs}
        schemaType="service"
      />
      <HowToSchema
        name="3D-Druck Richtpreis berechnen – In 3 Schritten zum Angebot"
        description="So berechnen Sie unverbindlich den Richtpreis für Ihr 3D-gedrucktes Modell und fordern ein persönliches Angebot an."
        totalTime="PT2M"
        steps={[
          { name: "STL-Datei hochladen", text: "Laden Sie Ihre 3D-Datei (STL-Format, bis 100 MB) hoch. Volumen, Oberfläche und Abmessungen werden sekundenschnell im Browser analysiert." },
          { name: "Material und Qualität wählen", text: "Wählen Sie aus 8 FDM-Materialien und 3 Qualitätsstufen. Der Richtpreis aktualisiert sich in Echtzeit." },
          { name: "Persönliches Angebot anfordern", text: "Senden Sie eine unverbindliche Anfrage. Unser Team meldet sich innerhalb von 6 Stunden mit einem individuellen Festpreisangebot." },
        ]}
      />
      <Navigation />

      <main className="pt-20">
        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/6 via-background to-background py-16 md:py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

          <div className="container mx-auto px-4 text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/15">
              <Calculator className="h-4 w-4" />
              3D drucken lassen – Online-Kostenrechner
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.1]">
              3D drucken lassen –<br />
              <span className="text-primary">Kosten in 60 Sekunden</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              STL-Datei hochladen, Material wählen –{" "}
              <strong className="text-foreground">Richtpreis erscheint in Echtzeit</strong>.
              Jede Anfrage wird persönlich geprüft, Festpreisangebot innerhalb von 6 Stunden.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 text-primary" /> 5,0 ★ Google (31)
              </Badge>
              <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
                <Package className="h-3.5 w-3.5 text-primary" /> Ab €20 pro Teil
              </Badge>
              <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
                <Zap className="h-3.5 w-3.5 text-primary" /> Express 24–48 h
              </Badge>
              <Badge variant="outline" className="border-border/80 text-foreground gap-1.5 px-3.5 py-2 text-sm bg-background/60 backdrop-blur-sm">
                <Leaf className="h-3.5 w-3.5 text-primary" /> AT Filament
              </Badge>
            </div>

            <a href="#calculator" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium group">
              <ArrowDown className="h-4 w-4 animate-bounce group-hover:animate-none" />
              Direkt zum Rechner
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CALCULATOR — Single-Page Layout
        ══════════════════════════════════════════════════════ */}
        <section id="calculator" className="py-8 md:py-14 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">

              {/* ── LEFT: Upload + Config ── */}
              <div className="space-y-4">
                {/* Upload / File list card */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  {parts.length <= 1 && !parts[0]?.fileName ? (
                    <>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">Datei hochladen</p>
                      <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${dragOver ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/50 bg-muted/20"}`}
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                      >
                        <Upload className="w-7 h-7 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm font-medium">STL-Dateien hierher ziehen oder klicken</p>
                        <p className="text-xs text-muted-foreground mt-1">Binär & ASCII · max. 100 MB · Mehrere Dateien möglich</p>
                      </div>
                      <p className="text-[11px] text-muted-foreground text-center mt-2">
                        Ohne Datei wird mit einem Standardwürfel (50 × 50 × 50 mm) kalkuliert.
                      </p>
                    </>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                          {parts.length} {parts.length === 1 ? "Teil" : "Teile"} konfiguriert
                        </p>
                      </div>

                      {parts.map((p, i) => {
                        const r = partResults[i];
                        const meta = MATERIAL_META[p.materialKey];
                        const g = getGeo(p);
                        return (
                          <div
                            key={p.id}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer mb-1 transition-all border ${i === activePart ? "bg-primary/5 border-primary shadow-sm" : "border-transparent hover:bg-muted/50"}`}
                            onClick={() => setActivePart(i)}
                          >
                            <FileText className={`w-4 h-4 flex-shrink-0 ${i === activePart ? "text-primary" : "text-muted-foreground"}`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{p.fileName || `Teil ${i + 1} (Standard)`}</p>
                              <p className="text-[11px] text-muted-foreground">
                                {g.volumeCm3.toFixed(1)} cm³ — {Math.round(g.boundingBoxMm.x)}×{Math.round(g.boundingBoxMm.y)}×{Math.round(g.boundingBoxMm.z)} mm · {p.materialKey}
                              </p>
                            </div>
                            <Badge variant="secondary" className="text-[11px] font-semibold">{p.qty}×</Badge>
                            <span className="text-sm font-bold min-w-[65px] text-right">{fmt(r.finalNet)}</span>
                            {parts.length > 1 && (
                              <button className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors" onClick={(e) => { e.stopPropagation(); removePart(i); }}>
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        );
                      })}

                      {partResults.some(r => r.discountRate > 0) && (
                        <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl px-3 py-2 mt-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                            Mengenvorteil aktiv auf {totalQty} Teile
                          </span>
                        </div>
                      )}

                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="text-xs rounded-lg">
                          <Plus className="w-3 h-3 mr-1" /> STL hochladen
                        </Button>
                        <Button variant="outline" size="sm" onClick={addEmptyPart} className="text-xs rounded-lg">
                          <Plus className="w-3 h-3 mr-1" /> Ohne Datei
                        </Button>
                      </div>
                    </div>
                  )}
                  <input ref={fileInputRef} type="file" accept=".stl" multiple className="hidden" onChange={(e) => e.target.files && handleFiles(e.target.files)} />
                </div>

                {/* 3D Preview (if file loaded) */}
                {current.arrayBuffer && (
                  <AnimatedSection animation="fade-in">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                      <div className="px-4 py-2 border-b border-border bg-muted/20 flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold">3D-Vorschau</span>
                        <span className="text-[10px] text-muted-foreground ml-auto">{current.fileName}</span>
                      </div>
                      <STLViewer buffer={current.arrayBuffer} className="h-[220px] rounded-none border-0" />
                    </div>
                  </AnimatedSection>
                )}

                {/* Material + Quality + Qty */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-3 font-semibold">
                    Material{parts.length > 1 ? ` — ${current.fileName || `Teil ${activePart + 1}`}` : ""}
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 mb-5">
                    {cfg.materialKeys.map(key => {
                      const meta = MATERIAL_META[key] ?? { desc: "", color: "text-gray-600", colorBg: "bg-gray-500" };
                      const sel = current.materialKey === key;
                      return (
                        <button
                          key={key}
                          className={`text-left p-3 rounded-xl border transition-all duration-150 ${sel ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30 hover:shadow-sm"}`}
                          onClick={() => updatePart("materialKey", key)}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`w-2 h-2 rounded-full ${meta.colorBg}`} />
                            <span className="text-sm font-medium">{cfg.materialLabels[key] ?? key}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-snug">{meta.desc}</p>
                          <p className="text-[11px] text-muted-foreground/60 mt-0.5">ab {cfg.pricePerKg[key]} €/kg</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Quality */}
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">Qualitätsstufe</p>
                  <div className="flex gap-1.5 mb-4">
                    {QUALITY_PRESETS.map(q => {
                      const sel = current.layerHeight === q.layer;
                      return (
                        <button
                          key={q.layer}
                          className={`flex-1 py-2.5 px-2 rounded-xl border text-center transition-all duration-150 ${sel ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30"}`}
                          onClick={() => updatePart("layerHeight", q.layer)}
                        >
                          <p className={`text-sm ${sel ? "font-semibold text-primary" : "text-foreground"}`}>{q.label}</p>
                          <p className={`text-[11px] ${sel ? "text-primary/70" : "text-muted-foreground"}`}>{q.layer} mm · {q.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* Quantity */}
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-semibold">Stückzahl</p>
                  <div className="flex items-center gap-3 mb-4">
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" onClick={() => updatePart("qty", Math.max(1, current.qty - 1))}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-xl font-bold min-w-[32px] text-center">{current.qty}</span>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" onClick={() => updatePart("qty", current.qty + 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                    {current.qty >= 10 && (
                      <Badge variant="secondary" className="text-[11px] bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                        <TrendingDown className="w-3 h-3 mr-1" /> Mengenvorteil aktiv
                      </Badge>
                    )}
                  </div>

                  {/* Advanced */}
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowAdvanced(!showAdvanced)}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAdvanced ? "rotate-180" : ""}`} />
                    Erweiterte Parameter (Infill, Wandstärke)
                  </button>
                  {showAdvanced && (
                    <div className="grid grid-cols-2 gap-5 pt-4">
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Infill (Füllung)</label>
                        <div className="flex items-center gap-3">
                          <Slider value={[current.infillPercent]} min={10} max={100} step={5} onValueChange={([v]) => updatePart("infillPercent", v)} className="flex-1" />
                          <span className="text-xs font-bold min-w-[36px] text-right">{current.infillPercent} %</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Wandstärke</label>
                        <div className="flex items-center gap-3">
                          <Slider value={[current.wallThickness * 10]} min={8} max={24} step={4} onValueChange={([v]) => updatePart("wallThickness", v / 10)} className="flex-1" />
                          <span className="text-xs font-bold min-w-[36px] text-right">{current.wallThickness.toFixed(1)} mm</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── RIGHT: Price Panel ── */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-card border-2 border-primary/20 rounded-2xl p-5 shadow-lg shadow-primary/5">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">Ihr Richtpreis</p>

                  <div className="text-center py-6">
                    <p className="text-5xl font-bold tracking-tight text-primary">{fmt(totalNet)}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {totalQty > 1 ? `${totalQty} Teile · ` : ""}exkl. MwSt. · Druckzeit ~{fmtMin(totalPrintTime)}
                    </p>
                  </div>

                  <Separator className="mb-3" />

                  {/* Breakdown */}
                  <div className="space-y-1 mb-4">
                    {parts.length === 1 ? (
                      <>
                        <div className="flex justify-between text-sm text-muted-foreground"><span>Material ({current.materialKey}, {Math.round(currentResult.materialWeightG)} g)</span><span>{fmt(currentResult.materialCost)}</span></div>
                        <div className="flex justify-between text-sm text-muted-foreground"><span>Druckzeit ({fmtMin(currentResult.printTimeMin)})</span><span>{fmt(currentResult.printCost)}</span></div>
                        {currentResult.sizeFactor > 1 && <div className="flex justify-between text-sm text-muted-foreground"><span>Größenzuschlag (×{currentResult.sizeFactor.toFixed(2)})</span><span>{fmt((currentResult.scaledUnitCost - currentResult.materialCost - currentResult.printCost - currentResult.setupCost))}</span></div>}
                        <div className="flex justify-between text-sm text-muted-foreground"><span>Setup-Pauschale</span><span>{fmt(currentResult.setupCost)}</span></div>
                        {current.qty > 1 && <div className="flex justify-between text-sm text-muted-foreground"><span>× {current.qty} Stück</span><span>{fmt(currentResult.subtotalNet)}</span></div>}
                        {currentResult.discountRate > 0 && <div className="flex justify-between text-sm text-emerald-600 font-medium"><span>Mengenvorteil ({(currentResult.discountRate * 100).toFixed(0)} %)</span><span>− {fmt(currentResult.quantityDiscount)}</span></div>}
                        {currentResult.surcharge > 0 && <div className="flex justify-between text-sm text-muted-foreground"><span>Mindermengenzuschlag</span><span>{fmt(currentResult.surcharge)}</span></div>}
                      </>
                    ) : (
                      parts.map((p, i) => (
                        <div key={p.id} className="flex justify-between text-sm text-muted-foreground">
                          <span className="truncate max-w-[180px]">{p.fileName?.replace(/\.stl$/i, "") || `Teil ${i + 1}`} ({p.qty}×)</span>
                          <span className="font-medium">{fmt(partResults[i].finalNet)}</span>
                        </div>
                      ))
                    )}
                    <Separator className="my-2" />
                    <div className="flex justify-between text-base font-bold">
                      <span>Richtpreis {totalQty > 1 ? `(${totalQty} Teile)` : ""}</span>
                      <span className="text-primary">{fmt(totalNet)}</span>
                    </div>
                  </div>

                  {/* CTA / Form */}
                  {formSubmitted ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-5 text-center">
                      <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Anfrage gesendet!</p>
                      <p className="text-xs text-emerald-600/80 mt-1">Wir melden uns innerhalb von 6 Stunden mit Ihrem persönlichen Festpreisangebot.</p>
                    </div>
                  ) : showContactForm ? (
                    <div className="space-y-2">
                      <Input placeholder="Name *" value={contactForm.name} onChange={(e) => setContactForm(f => ({ ...f, name: e.target.value }))} />
                      <Input placeholder="E-Mail *" type="email" value={contactForm.email} onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))} />
                      <Input placeholder="Firma (optional)" value={contactForm.company} onChange={(e) => setContactForm(f => ({ ...f, company: e.target.value }))} />
                      <Input placeholder="Telefon (optional)" value={contactForm.phone} onChange={(e) => setContactForm(f => ({ ...f, phone: e.target.value }))} />
                      <Textarea placeholder="Anmerkungen zum Projekt (optional)" value={contactForm.message} onChange={(e) => setContactForm(f => ({ ...f, message: e.target.value }))} className="min-h-[60px]" />
                      <Button className="w-full rounded-xl py-5" onClick={handleSubmit} disabled={!contactForm.name || !contactForm.email || isSubmitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Wird gesendet..." : "Unverbindliches Angebot anfordern"}
                      </Button>
                      <button className="block mx-auto text-xs text-muted-foreground hover:text-foreground mt-1" onClick={() => setShowContactForm(false)}>Zurück</button>
                    </div>
                  ) : (
                    <>
                      <Button className="w-full rounded-xl py-5 text-base" size="lg" onClick={() => setShowContactForm(true)}>
                        <Send className="w-4 h-4 mr-2" />
                        Unverbindliches Angebot anfordern
                      </Button>
                      <p className="text-center text-[11px] text-muted-foreground mt-2">
                        Persönliche Prüfung — Antwort in 6 h — kein Account nötig
                      </p>
                    </>
                  )}

                  {/* Trust */}
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Shield className="w-3.5 h-3.5" /> Datei bleibt lokal</span>
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Zap className="w-3.5 h-3.5" /> Express 24–48 h</span>
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><MapPin className="w-3.5 h-3.5" /> Gunskirchen, OÖ</span>
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Leaf className="w-3.5 h-3.5" /> AT Filament</span>
                  </div>
                </div>

                {/* Contact alternatives */}
                <div className="flex gap-3 justify-center mt-3 text-xs text-muted-foreground flex-wrap">
                  <span>Oder direkt:</span>
                  <a href="https://wa.me/436765517197" target="_blank" rel="noopener" className="text-primary hover:underline inline-flex items-center gap-0.5"><MessageCircle className="w-3 h-3" /> WhatsApp</a>
                  <a href="tel:+436765517197" className="text-primary hover:underline inline-flex items-center gap-0.5"><Phone className="w-3 h-3" /> Anrufen</a>
                  <a href="https://cal.com/kevin-eppensteiner-nktcfi/15min" target="_blank" rel="noopener" className="text-primary hover:underline inline-flex items-center gap-0.5"><Calendar className="w-3 h-3" /> 15-Min-Termin</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" />Kein Webshop – keine Bestellung</span>
            <span className="flex items-center gap-1.5"><UserCheck className="h-4 w-4 text-primary" />Persönliche Prüfung jeder Anfrage</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />Angebot in 6 Stunden</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" />5,0 ★ Google (31 Bewertungen)</span>
          </div>
        </div>

        {/* ── Existing content sections ── */}
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
