"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { pricingConfig } from "@/data/pricingConfig";
import { calculatePrice as calcPriceEngine } from "@/lib/pricingEngine";
import type { PricingInput, PricingResult } from "@/lib/pricingEngine";
import { parseSTL } from "@/lib/stlParser";
import type { GeometryData } from "@/lib/stlParser";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Upload, FileText, Trash2, Shield, Zap, MapPin, Leaf,
  ChevronDown, CheckCircle2, Plus, Minus, Phone,
  Send, Star, Clock, Package, Layers, Box, Scale,
  Wrench, Users, Building2, GraduationCap, Palette,
  MessageCircle, Calendar, ExternalLink,
} from "lucide-react";

// ─── MATERIAL UI CONFIG ──────────────────────────────────────────
const MATERIAL_META: Record<string, { desc: string; color: string }> = {
  PLA:      { desc: "Glatte Oberfläche, ideal für Präsentationsmodelle", color: "bg-blue-500" },
  "PLA+":   { desc: "Verstärkt, höhere Schlagzähigkeit als Standard-PLA", color: "bg-indigo-500" },
  PETG:     { desc: "UV-stabil & schlagfest — perfekt für Messemodelle", color: "bg-emerald-500" },
  ABS:      { desc: "Glätt- und lackierbar für Ausstellungsobjekte", color: "bg-amber-500" },
  ASA:      { desc: "Wetterfest & UV-beständig für Außenanwendungen", color: "bg-cyan-500" },
  TPU:      { desc: "Flexibel & gummiartig — für biegbare Teile", color: "bg-rose-500" },
  "PA6-CF": { desc: "Carbon-Look, ultraleicht — Premium-Showmodelle", color: "bg-slate-800" },
  PC:       { desc: "Polycarbonat — extrem schlagfest & hitzebeständig", color: "bg-violet-500" },
};

const QUALITY_PRESETS = [
  { label: "Standard", layer: 0.20, desc: "Schnell & günstig" },
  { label: "Fein",     layer: 0.12, desc: "Glattere Oberfläche" },
  { label: "Premium",  layer: 0.08, desc: "Höchste Detailtreue" },
];

// ─── HELPERS ─────────────────────────────────────────────────────
const fmt = (n: number) => n.toFixed(2).replace(".", ",") + " €";
const mins = (n: number) => {
  if (n < 60) return `${Math.round(n)} Min.`;
  const h = Math.floor(n / 60);
  const m = Math.round(n % 60);
  return m > 0 ? `${h} Std. ${m} Min.` : `${h} Std.`;
};

// ─── PART STATE ──────────────────────────────────────────────────
interface Part {
  id: string;
  fileName: string | null;
  geometry: GeometryData | null;
  materialKey: string;
  layerHeight: number;
  wallThickness: number;
  infillPercent: number;
  qty: number;
}

const cfg = pricingConfig;

const createPart = (overrides: Partial<Part> = {}): Part => ({
  id: Math.random().toString(36).slice(2, 9),
  fileName: null,
  geometry: null,
  materialKey: "PLA",
  layerHeight: cfg.defaultLayerHeight,
  wallThickness: cfg.defaultWallThickness,
  infillPercent: cfg.defaultInfillPercent,
  qty: 1,
  ...overrides,
});

function getGeometry(part: Part): GeometryData {
  return part.geometry ?? {
    volumeCm3: cfg.placeholderGeometry.volumeCm3,
    surfaceCm2: cfg.placeholderGeometry.surfaceCm2,
    boundingBoxMm: { ...cfg.placeholderGeometry.boundingBoxMm },
    triangleCount: 0,
  };
}

function calcPart(part: Part): PricingResult {
  const geo = getGeometry(part);
  const input: PricingInput = {
    geometry: geo,
    materialKey: part.materialKey,
    layerHeight: part.layerHeight,
    wallThickness: part.wallThickness,
    infillPercent: part.infillPercent,
    quantity: part.qty,
  };
  return calcPriceEngine(input);
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function Kostenrechner() {
  const [parts, setParts] = useState<Part[]>([createPart()]);
  const [activePart, setActivePart] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const current = parts[activePart] || parts[0];

  // Pricing for all parts
  const partResults = parts.map(calcPart);
  const totalNet = partResults.reduce((s, r) => s + r.finalNet, 0);
  const totalQty = parts.reduce((s, p) => s + p.qty, 0);

  // ── File handling ──
  const handleFiles = useCallback(async (files: FileList) => {
    const stlFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith(".stl"));
    if (stlFiles.length === 0) {
      toast.error("Bitte eine .stl-Datei hochladen.");
      return;
    }

    const newParts: Part[] = [];
    for (const file of stlFiles) {
      try {
        const buffer = await file.arrayBuffer();
        const geometry = parseSTL(buffer);
        newParts.push(createPart({ fileName: file.name, geometry }));
      } catch (err) {
        toast.error(`Fehler beim Parsen von ${file.name}`);
        newParts.push(createPart({ fileName: file.name }));
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

  const updatePart = (key: keyof Part, value: any) => {
    setParts(prev => prev.map((p, i) => i === activePart ? { ...p, [key]: value } : p));
  };

  const removePart = (idx: number) => {
    if (parts.length <= 1) return;
    setParts(prev => prev.filter((_, i) => i !== idx));
    setActivePart(prev => Math.min(prev, parts.length - 2));
  };

  const addEmptyPart = () => {
    setParts(prev => [...prev, createPart()]);
    setActivePart(parts.length);
  };

  // ── Contact form submit ──
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
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Current part pricing ──
  const currentResult = partResults[activePart];
  const geo = getGeometry(current);

  // ── FAQ data ──
  const faqs = [
    { q: "Was kostet ein 3D-Druck Modell bei ekdruck?", a: "Die 3D-Druck Kosten beginnen bei ekdruck ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung — kostenlos und ohne Anmeldung. Für jedes Projekt erstellen wir zusätzlich ein persönlich geprüftes Festpreisangebot innerhalb von 6 Stunden." },
    { q: "Welche 3D-Druck Materialien kann ich wählen?", a: "Wir bieten 8 FDM-Materialien an: PLA (ideal für Präsentationsmodelle), PETG (UV-beständig, perfekt für Messemodelle), ABS (glätt- und lackierbar), PLA+ (verstärkt), ASA (wetterfest), TPU (flexibel), Polycarbonat (extrem schlagfest) und PA6-CF mit Carbonfaser für Premium-Showmodelle. Alle Filamente stammen aus österreichischer Produktion." },
    { q: "Wie genau ist der Richtpreis aus dem Kostenrechner?", a: "Der Richtpreis basiert auf der realen Geometrie Ihrer STL-Datei und berücksichtigt Materialverbrauch, Druckzeit, Baugröße und Setup-Aufwand. Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt und per E-Mail zugesendet." },
    { q: "Kann ich mehrere 3D-Modelle gleichzeitig kalkulieren?", a: "Ja, unser Kostenrechner unterstützt Multi-File-Upload. Sie können beliebig viele STL-Dateien hochladen, jeweils mit eigenem Material und eigener Stückzahl konfigurieren und erhalten einen Gesamtrichtpreis mit automatischem Mengenvorteil ab 10 Stück." },
    { q: "Wie schnell ist die Lieferung?", a: "Standardaufträge fertigen wir in 3 bis 5 Werktagen. Im Express-Service erhalten Sie Ihr 3D-Druck Modell bereits in 24 bis 48 Stunden. Wir liefern versichert per Post in ganz Österreich. Persönliche Abholung in Gunskirchen (Bezirk Wels-Land) ist ebenfalls möglich." },
    { q: "Wofür eignet sich euer 3D-Druck Service?", a: "Wir sind spezialisiert auf nicht-technische Präsentationsmodelle: Messemodelle und Standexponate, Architekturmodelle für Wettbewerbe und Kundenpräsentationen, Designstudien und Formentwürfe, Schulungs- und Lehrmodelle sowie Kleinserien ab 10 Stück." },
    { q: "Muss ich einen Account erstellen?", a: "Nein. Der Kostenrechner funktioniert ohne Anmeldung und ohne Account. Ihre STL-Datei wird ausschließlich lokal in Ihrem Browser analysiert und verlässt nie Ihren Rechner." },
    { q: "Gibt es Mengenrabatte für größere Projekte?", a: "Ja. Ab 10 Teilen erhalten Sie automatisch 5 % Mengenvorteil, ab 50 Teilen 8 % und ab 100 Teilen 10 % Rabatt auf den Gesamtpreis. Für größere Projektmengen erstellen wir gerne ein individuelles Angebot." },
  ];

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <header className="text-center pt-12 pb-8 px-4 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
          Was kostet Ihr 3D-Druck?
        </h1>
        <p className="text-base text-muted-foreground">
          STL-Datei hochladen, Material wählen — Richtpreis in Echtzeit.
          Verbindliches Festpreisangebot in 6 Stunden.
        </p>
        <div className="flex gap-2 justify-center flex-wrap mt-4">
          <Badge variant="outline" className="gap-1"><Star className="w-3 h-3" /> 5,0 Google (31)</Badge>
          <Badge variant="outline">Ab 20 € pro Teil</Badge>
          <Badge variant="outline" className="gap-1"><Zap className="w-3 h-3" /> Express 24–48 h</Badge>
          <Badge variant="outline" className="gap-1"><Leaf className="w-3 h-3" /> AT Filament</Badge>
        </div>
      </header>

      {/* ── CALCULATOR ── */}
      <div id="calculator" className="max-w-5xl mx-auto px-4 pb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
        {/* LEFT: Config */}
        <div className="space-y-4">
          {/* Upload / File list */}
          <div className="bg-card border border-border rounded-xl p-5">
            {parts.length <= 1 && !parts[0]?.fileName ? (
              <>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">Datei hochladen</p>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-muted/30"}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                >
                  <Upload className="w-7 h-7 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">STL-Dateien hierher ziehen oder klicken</p>
                  <p className="text-xs text-muted-foreground mt-1">Binär & ASCII · max. 100 MB · Mehrere Dateien möglich</p>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Ohne Datei wird mit einem Standardwürfel (50 × 50 × 50 mm) kalkuliert.
                </p>
              </>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
                    {parts.length} {parts.length === 1 ? "Teil" : "Teile"} konfiguriert
                  </p>
                </div>

                {parts.map((p, i) => {
                  const r = partResults[i];
                  const meta = MATERIAL_META[p.materialKey];
                  const g = getGeometry(p);
                  return (
                    <div
                      key={p.id}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer mb-1 transition-colors border ${i === activePart ? "bg-primary/5 border-primary" : "border-transparent hover:bg-muted/50"}`}
                      onClick={() => setActivePart(i)}
                    >
                      <FileText className={`w-4 h-4 flex-shrink-0 ${i === activePart ? "text-primary" : "text-muted-foreground"}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{p.fileName || `Teil ${i + 1} (Standard)`}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {g.volumeCm3.toFixed(1)} cm³ — {Math.round(g.boundingBoxMm.x)}×{Math.round(g.boundingBoxMm.y)}×{Math.round(g.boundingBoxMm.z)} mm · {p.materialKey}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-[11px]">{p.qty}×</Badge>
                      <span className="text-sm font-medium min-w-[60px] text-right">{fmt(r.finalNet)}</span>
                      {parts.length > 1 && (
                        <button className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors" onClick={(e) => { e.stopPropagation(); removePart(i); }}>
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}

                {currentResult.discountRate > 0 && (
                  <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg px-3 py-2 mt-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      Mengenvorteil: {(currentResult.discountRate * 100).toFixed(0)} % auf {totalQty} Teile
                    </span>
                  </div>
                )}

                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="text-xs">
                    <Plus className="w-3 h-3 mr-1" /> STL hochladen
                  </Button>
                  <Button variant="outline" size="sm" onClick={addEmptyPart} className="text-xs">
                    <Plus className="w-3 h-3 mr-1" /> Ohne Datei
                  </Button>
                </div>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept=".stl" multiple className="hidden" onChange={(e) => e.target.files && handleFiles(e.target.files)} />
          </div>

          {/* Material */}
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3 font-medium">
              Material{parts.length > 1 ? ` für ${current.fileName || `Teil ${activePart + 1}`}` : ""}
            </p>
            <div className="grid grid-cols-2 gap-1.5 mb-5">
              {cfg.materialKeys.map(key => {
                const meta = MATERIAL_META[key] ?? { desc: "", color: "bg-gray-500" };
                const sel = current.materialKey === key;
                return (
                  <button
                    key={key}
                    className={`text-left p-3 rounded-lg border transition-all ${sel ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30"}`}
                    onClick={() => updatePart("materialKey", key)}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`w-2 h-2 rounded-full ${meta.color}`} />
                      <span className="text-sm font-medium">{cfg.materialLabels[key] ?? key}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">{meta.desc}</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-0.5">ab {cfg.pricePerKg[key]} €/kg</p>
                  </button>
                );
              })}
            </div>

            {/* Quality presets */}
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">Qualitätsstufe</p>
            <div className="flex gap-1.5 mb-4">
              {QUALITY_PRESETS.map(q => {
                const sel = current.layerHeight === q.layer;
                return (
                  <button
                    key={q.layer}
                    className={`flex-1 py-2.5 px-2 rounded-lg border text-center transition-all ${sel ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30"}`}
                    onClick={() => updatePart("layerHeight", q.layer)}
                  >
                    <p className={`text-sm ${sel ? "font-medium text-primary" : "text-foreground"}`}>{q.label}</p>
                    <p className={`text-[11px] ${sel ? "text-primary/70" : "text-muted-foreground"}`}>{q.layer} mm · {q.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Quantity */}
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2 font-medium">Stückzahl</p>
            <div className="flex items-center gap-3 mb-4">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updatePart("qty", Math.max(1, current.qty - 1))}>
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-lg font-medium min-w-[28px] text-center">{current.qty}</span>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updatePart("qty", current.qty + 1)}>
                <Plus className="w-4 h-4" />
              </Button>
              {current.qty >= 10 && (
                <span className="text-xs text-muted-foreground">Mengenvorteil aktiv</span>
              )}
            </div>

            {/* Advanced toggle */}
            <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowAdvanced(!showAdvanced)}>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} />
              Erweiterte Parameter
            </button>
            {showAdvanced && (
              <div className="grid grid-cols-2 gap-4 pt-3">
                <div>
                  <Label className="text-xs text-muted-foreground">Infill (Füllung)</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Slider value={[current.infillPercent]} min={10} max={100} step={5} onValueChange={([v]) => updatePart("infillPercent", v)} className="flex-1" />
                    <span className="text-xs font-medium min-w-[36px] text-right">{current.infillPercent} %</span>
                  </div>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Wandstärke</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Slider value={[current.wallThickness * 10]} min={8} max={24} step={4} onValueChange={([v]) => updatePart("wallThickness", v / 10)} className="flex-1" />
                    <span className="text-xs font-medium min-w-[36px] text-right">{current.wallThickness.toFixed(1)} mm</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Price */}
        <div className="lg:sticky lg:top-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1 font-medium">Ihr Richtpreis</p>

            <div className="text-center py-5">
              <p className="text-4xl font-bold tracking-tight">{fmt(totalNet)}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {totalQty > 1 ? `${totalQty} Teile · ` : ""}exkl. MwSt. & Nachbearbeitung
              </p>
            </div>

            <Separator className="mb-3" />

            {/* Breakdown */}
            <div className="space-y-1 mb-4">
              {parts.length === 1 ? (
                <>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Material ({current.materialKey}, {Math.round(currentResult.materialWeightG)} g)</span>
                    <span>{fmt(currentResult.materialCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Druckzeit ({mins(currentResult.printTimeMin)})</span>
                    <span>{fmt(currentResult.printCost)}</span>
                  </div>
                  {currentResult.sizeFactor > 1 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Größenzuschlag</span>
                      <span>×{currentResult.sizeFactor.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Setup-Pauschale</span>
                    <span>{fmt(currentResult.setupCost)}</span>
                  </div>
                  {current.qty > 1 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>× {current.qty} Stück</span>
                      <span>{fmt(currentResult.subtotalNet)}</span>
                    </div>
                  )}
                  {currentResult.discountRate > 0 && (
                    <div className="flex justify-between text-sm text-emerald-600">
                      <span>Mengenvorteil ({(currentResult.discountRate * 100).toFixed(0)} %)</span>
                      <span>− {fmt(currentResult.quantityDiscount)}</span>
                    </div>
                  )}
                  {currentResult.surcharge > 0 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Mindermengenzuschlag</span>
                      <span>{fmt(currentResult.surcharge)}</span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {parts.map((p, i) => (
                    <div key={p.id} className="flex justify-between text-sm text-muted-foreground">
                      <span className="truncate max-w-[180px]">{p.fileName?.replace(/\.stl$/i, "") || `Teil ${i + 1}`} ({p.qty}×)</span>
                      <span>{fmt(partResults[i].finalNet)}</span>
                    </div>
                  ))}
                </>
              )}

              <Separator className="my-2" />
              <div className="flex justify-between text-sm font-medium">
                <span>Richtpreis {totalQty > 1 ? `(${totalQty} Teile)` : ""}</span>
                <span>{fmt(totalNet)}</span>
              </div>
            </div>

            {/* CTA / Form */}
            {formSubmitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 text-center">
                <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-emerald-600" />
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Anfrage gesendet</p>
                <p className="text-xs text-emerald-600/80">Wir melden uns innerhalb von 6 Stunden mit Ihrem Festpreisangebot.</p>
              </div>
            ) : showContactForm ? (
              <div className="space-y-2">
                <Input placeholder="Name *" value={contactForm.name} onChange={(e) => setContactForm(f => ({ ...f, name: e.target.value }))} />
                <Input placeholder="E-Mail *" type="email" value={contactForm.email} onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))} />
                <Input placeholder="Firma (optional)" value={contactForm.company} onChange={(e) => setContactForm(f => ({ ...f, company: e.target.value }))} />
                <Input placeholder="Telefon (optional)" value={contactForm.phone} onChange={(e) => setContactForm(f => ({ ...f, phone: e.target.value }))} />
                <Textarea placeholder="Anmerkungen (optional)" value={contactForm.message} onChange={(e) => setContactForm(f => ({ ...f, message: e.target.value }))} className="min-h-[60px]" />
                <Button className="w-full" onClick={handleSubmit} disabled={!contactForm.name || !contactForm.email || isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Wird gesendet..." : "Unverbindliches Angebot anfordern"}
                </Button>
                <button className="block mx-auto text-xs text-muted-foreground hover:text-foreground" onClick={() => setShowContactForm(false)}>
                  Zurück
                </button>
              </div>
            ) : (
              <>
                <Button className="w-full" size="lg" onClick={() => setShowContactForm(true)}>
                  <Send className="w-4 h-4 mr-2" />
                  Unverbindliches Angebot anfordern
                </Button>
                <p className="text-center text-[11px] text-muted-foreground mt-2">
                  Persönliche Prüfung — Antwort in 6 h — kein Account nötig
                </p>
              </>
            )}

            {/* Trust */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Shield className="w-3.5 h-3.5" /> Datei bleibt lokal</span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Zap className="w-3.5 h-3.5" /> Express 24–48 h</span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><MapPin className="w-3.5 h-3.5" /> Gunskirchen, OÖ</span>
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Leaf className="w-3.5 h-3.5" /> AT Filament</span>
            </div>
          </div>

          {/* Contact alternatives */}
          <div className="flex gap-2 justify-center mt-3 text-xs text-muted-foreground">
            <span>Oder direkt:</span>
            <a href="https://wa.me/436765517197" target="_blank" rel="noopener" className="text-primary hover:underline flex items-center gap-0.5"><MessageCircle className="w-3 h-3" /> WhatsApp</a>
            <a href="tel:+436765517197" className="text-primary hover:underline flex items-center gap-0.5"><Phone className="w-3 h-3" /> Anrufen</a>
            <a href="https://cal.com/kevin-eppensteiner-nktcfi/15min" target="_blank" rel="noopener" className="text-primary hover:underline flex items-center gap-0.5"><Calendar className="w-3 h-3" /> 15-Min-Termin</a>
          </div>
        </div>
      </div>

      {/* ── SEO CONTENT ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        {/* Factors */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">3D-Druck Kosten berechnen — transparent & fair</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">5 Faktoren bestimmen den Preis Ihres Modells. So kalkulieren wir — und so behalten Sie die Kontrolle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { icon: Package, n: "01", t: "Materialverbrauch", d: "Volumen × Infill × Materialpreis. PLA ab 25 €/kg, PA6-CF mit Carbonfaser ab 120 €/kg. Ein Modell mit 15 % Infill verbraucht deutlich weniger als mit voller Füllung." },
            { icon: Clock, n: "02", t: "Druckzeit", d: "Je länger der FDM-Drucker arbeitet, desto höher die Kosten. Premium-Qualität (0,08 mm Schichtdicke) dauert rund 25 % länger als Standard." },
            { icon: Scale, n: "03", t: "Baugröße", d: "Große Modelle ab 170 mm erhalten einen Zuschlag: mehr Plattenbelegung, längere Aufwärmphase und erhöhtes Fehlerrisiko." },
            { icon: Wrench, n: "04", t: "Setup & Vorbereitung", d: `Jedes Projekt wird manuell vorbereitet: Slicing, Druckoptimierung, Bauteilorientierung. Setup-Pauschale: ${fmt(cfg.setupCost)}.` },
            { icon: Layers, n: "05", t: "Nachbearbeitung", d: "Stützstrukturen entfernen, Oberflächen glätten oder lackieren — diese Arbeiten werden separat im Festpreisangebot kalkuliert." },
            { icon: Users, n: "+", t: "Mengenvorteil", d: "Ab 10 Teilen 5 %, ab 50 Teilen 8 %, ab 100 Teilen 10 % Rabatt. Ideal für Messemodelle in Serie oder Schulungsmodelle." },
          ].map(({ icon: Icon, n, t, d }) => (
            <div key={n} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-light text-muted-foreground/50">{n}</span>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{t}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <Separator className="max-w-[48px] mx-auto mb-12" />

        {/* Use cases */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Für wen ist der 3D-Druck Kostenrechner?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { icon: Building2, t: "Architektur & Planung", d: "Sofortige Kosteneinschätzung für maßstabsgetreue Architekturmodelle und städtebauliche Studien. Ob Wettbewerbsmodell 1:200 oder Detailmodell 1:50 — der Rechner kalkuliert auf Basis der realen STL-Geometrie.", link: "/architekturmodelle" },
            { icon: Star, t: "Messe & Ausstellung", d: "Budgetplanung für 3D-gedruckte Messemodelle und Standexponate — auch in größeren Auflagen. Wir beraten bei Materialwahl und Oberflächenfinish für den Messestand.", link: "/messemodelle" },
            { icon: Palette, t: "Design & Produktentwicklung", d: "Richtpreise für haptische Designstudien, Formentwürfe und Proportionsmodelle. PA6-CF für Premium-Look, TPU für flexible Modelle.", link: null },
            { icon: GraduationCap, t: "Schulung & Lehre", d: "Transparente Preisübersicht für Lehr- und Schulungsmodelle — ideal bei größeren Projektmengen für Klassen, Kurse oder Workshops.", link: null },
          ].map(({ icon: Icon, t, d, link }) => (
            <div key={t} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">{t}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
              {link && (
                <Link href={link} className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline">
                  Mehr erfahren <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <Separator className="max-w-[48px] mx-auto mb-12" />

        {/* Long-form SEO prose */}
        <article className="max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-2xl font-bold">3D-Druck Preise in Österreich — was kosten Modelle wirklich?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die Frage „Was kostet ein 3D-Druck?" steht am Anfang jedes Projekts. Anders als bei standardisierten Fertigungsverfahren hängen die 3D-Druck Kosten von zahlreichen Faktoren ab: Modellgröße, Materialwahl, Druckqualität, Geometriekomplexität und gewünschte Stückzahl. Unser Online-Kostenrechner analysiert die tatsächliche Geometrie Ihrer STL-Datei direkt in Ihrem Browser und berechnet daraus einen fundierten Richtpreis — kostenlos, ohne Anmeldung und in Echtzeit.
          </p>

          <h3 className="text-lg font-semibold pt-2">Warum kein Sofortkauf? Warum persönliche Prüfung?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Viele 3D-Druck Dienstleister bieten vollautomatisierte Bestellprozesse an. Bei ekdruck haben wir uns bewusst dagegen entschieden — aus Qualitätsgründen. Nicht jedes 3D-Modell ist ohne weiteres druckbar. Überhänge, zu dünne Wandstärken oder geschlossene Hohlräume verursachen Probleme, die kein Algorithmus zuverlässig erkennt. Die Bauteilorientierung auf der Druckplatte beeinflusst Oberfläche, Stabilität und Stützstruktur-Aufwand erheblich.
          </p>

          <h3 className="text-lg font-semibold pt-2">FDM 3D-Druck: Das Verfahren hinter unseren Modellen</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir arbeiten ausschließlich mit FDM-Technologie (Fused Deposition Modeling), dem bewährtesten additiven Fertigungsverfahren für großformatige Präsentationsmodelle. Thermoplastisches Filament wird schichtweise aufgetragen und verschmilzt zu einem stabilen Objekt. Unsere Drucker erreichen Schichtauflösungen bis 0,08 mm für feinste Detailtreue. Das Ergebnis: maßstabsgetreue{" "}
            <Link href="/architekturmodelle" className="text-primary hover:underline">Architekturmodelle</Link>, überzeugende{" "}
            <Link href="/messemodelle" className="text-primary hover:underline">Messemodelle</Link>{" "}
            und hochwertige Designstudien — gefertigt aus nachhaltigen Materialien österreichischer Produktion.
          </p>

          <h3 className="text-lg font-semibold pt-2">3D-Druck aus Oberösterreich — persönlich, regional, verlässlich</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            ekdruck fertigt in Gunskirchen (Bezirk Wels-Land) mit 100 % österreichischem Filament aus recycelten Industrieabfällen. Wir versenden versichert per Post in ganz Österreich — nach{" "}
            <Link href="/3d-druck-wien" className="text-primary hover:underline">Wien</Link>,{" "}
            <Link href="/3d-druck-oberoesterreich" className="text-primary hover:underline">Oberösterreich</Link>,{" "}
            <Link href="/3d-druck-steiermark" className="text-primary hover:underline">Steiermark</Link>,{" "}
            <Link href="/3d-druck-salzburg" className="text-primary hover:underline">Salzburg</Link>{" "}
            und alle weiteren Bundesländer. Persönliche Beratung vor Ort ist jederzeit möglich.
          </p>
        </article>

        <Separator className="max-w-[48px] mx-auto mb-12" />

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Häufige Fragen zum 3D-Druck Kostenrechner</h2>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full flex justify-between items-center py-4 text-left text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`} />
                </button>
                {expandedFaq === i && (
                  <p className="text-sm text-muted-foreground leading-relaxed pb-4">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
