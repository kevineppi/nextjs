'use client'

import { useState, useEffect, useCallback } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { pricingConfig } from "@/data/pricingConfig";
import type { PricingInput } from "@/lib/pricingEngine";
import { TEST_CASES } from "@/lib/pricingEngine";
import type { GeometryData } from "@/lib/stlParser";
import ModelUpload from "./ModelUpload";
import {
  Info, FlaskConical, Layers, Box, Upload, ChevronRight,
  ChevronLeft, Palette, SlidersHorizontal, Check
} from "lucide-react";

interface Props {
  onCalculate: (input: PricingInput) => void;
  geometry: GeometryData | null;
  fileName: string | null;
  fileSize: number | null;
  isAnalyzing: boolean;
  uploadError: string | null;
  onFileSelect: (file: File) => void;
  onFileClear: () => void;
}

const STEPS = [
  { id: 1, label: "Datei", icon: Upload },
  { id: 2, label: "Material", icon: Box },
  { id: 3, label: "Parameter", icon: SlidersHorizontal },
] as const;

const CalculatorForm = ({
  onCalculate,
  geometry,
  fileName,
  fileSize,
  isAnalyzing,
  uploadError,
  onFileSelect,
  onFileClear,
}: Props) => {
  const cfg = pricingConfig;

  const [step, setStep] = useState(1);
  const [materialKey, setMaterialKey] = useState("PLA");
  const [color, setColor] = useState("Schwarz");
  const [layerHeight, setLayerHeight] = useState<number>(cfg.defaultLayerHeight);
  const [wallThickness, setWallThickness] = useState<number>(cfg.defaultWallThickness);
  const [infillPercent, setInfillPercent] = useState<number>(cfg.defaultInfillPercent);
  const [quantity, setQuantity] = useState(1);
  const [showTests, setShowTests] = useState(false);

  const materials = cfg.materialKeys;
  const colors = cfg.materialColors[materialKey] ?? [];
  const layerHeights = cfg.layerHeights;
  const wallThicknesses = cfg.wallThicknesses;

  const buildInput = useCallback((): PricingInput => ({
    geometry: geometry
      ? {
          volumeCm3: geometry.volumeCm3,
          surfaceCm2: geometry.surfaceCm2,
          boundingBoxMm: geometry.boundingBoxMm,
        }
      : cfg.placeholderGeometry,
    materialKey,
    layerHeight,
    wallThickness,
    infillPercent,
    quantity: Math.max(1, quantity),
  }), [materialKey, layerHeight, wallThickness, infillPercent, quantity, geometry, cfg.placeholderGeometry]);

  useEffect(() => {
    if (quantity < 1 || !Number.isFinite(quantity)) return;
    onCalculate(buildInput());
  }, [buildInput, onCalculate]);

  const handleMaterialChange = (key: string) => {
    setMaterialKey(key);
    const matColors = cfg.materialColors[key] ?? [];
    if (!matColors.includes(color)) {
      setColor(matColors[0] ?? "Schwarz");
    }
  };

  const loadTestCase = (idx: number) => {
    const tc = TEST_CASES[idx].input;
    setMaterialKey(tc.materialKey);
    setLayerHeight(tc.layerHeight);
    setWallThickness(tc.wallThickness);
    setInfillPercent(tc.infillPercent);
    setQuantity(tc.quantity);
    const matColors = cfg.materialColors[tc.materialKey] ?? [];
    setColor(matColors[0] ?? "Schwarz");
  };

  const materialHints: Record<string, string> = {
    PLA: "Ideal für Präsentationsmodelle und Designstudien. Gute Oberfläche, einfach zu drucken.",
    "PLA+": "Etwas zäher als PLA. Gut für Modelle, die transportiert oder oft angefasst werden.",
    PETG: "UV-beständig, chemisch resistent. Für Outdoor-Exponate und Messemodelle.",
    ABS: "Lässt sich glätten und lackieren. Für nachbearbeitete Showmodelle.",
    ASA: "Wie ABS, aber UV-beständig. Für Modelle im Außenbereich.",
    TPU: "Flexibel und stoßfest. Für haptische Muster und biegsame Modelle.",
    "PA6-CF": "Carbonfaser-verstärkt. Leicht, steif, Premium-Optik.",
    PC: "Transparent möglich. Für Modelle, bei denen Durchsicht erwünscht ist.",
  };

  return (
    <div className="bg-card border border-border/60 rounded-2xl shadow-lg overflow-hidden">
      {/* ── Step Indicator ────────────────────────── */}
      <div className="border-b border-border/40 bg-muted/20">
        <div className="flex">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isDone = step > s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStep(s.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-all relative
                  ${isActive 
                    ? "text-primary bg-background shadow-sm" 
                    : isDone 
                      ? "text-primary/70 hover:bg-background/50" 
                      : "text-muted-foreground hover:text-foreground hover:bg-background/30"
                  }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                  ${isActive 
                    ? "bg-primary text-primary-foreground" 
                    : isDone 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                  {isDone ? <Check className="h-3.5 w-3.5" /> : s.id}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
                <Icon className="h-4 w-4 sm:hidden" />
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Step Content ──────────────────────────── */}
      <div className="p-5 md:p-6">

        {/* ── STEP 1: File Upload ──────────────── */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">3D-Datei hochladen</h3>
              <p className="text-sm text-muted-foreground">
                Laden Sie Ihre STL-Datei hoch – Volumen, Oberfläche und Maße werden
                automatisch analysiert. Ohne Datei rechnen wir mit Standardmaßen (50×50×50 mm).
              </p>
            </div>

            <ModelUpload
              geometry={geometry}
              fileName={fileName}
              fileSize={fileSize}
              isAnalyzing={isAnalyzing}
              error={uploadError}
              onFileSelect={onFileSelect}
              onClear={onFileClear}
            />

            {!geometry && !uploadError && (
              <div className="bg-muted/40 rounded-lg px-4 py-3 text-sm text-muted-foreground flex items-start gap-2">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-primary/60" />
                <span>
                  Sie können auch ohne Datei fortfahren. Der Richtpreis wird dann auf
                  Basis eines Standard-Würfels (50×50×50 mm, 25 cm³) berechnet.
                </span>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button onClick={() => setStep(2)} className="gap-2">
                Weiter zu Material
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Material & Color ─────────── */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Material & Farbe wählen</h3>
              <p className="text-sm text-muted-foreground">
                Das Material bestimmt Optik, Haptik und Haltbarkeit Ihres Modells.
                PLA eignet sich für die meisten Präsentationsmodelle und Designstudien.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="material" className="text-sm font-semibold flex items-center gap-1.5">
                <Box className="h-3.5 w-3.5 text-primary" />
                Material
              </Label>
              <Select value={materialKey} onValueChange={handleMaterialChange}>
                <SelectTrigger id="material">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((key) => (
                    <SelectItem key={key} value={key}>
                      {cfg.materialLabels[key]} – €{cfg.pricePerKg[key]}/kg
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {materialHints[materialKey] && (
                <p className="text-xs text-muted-foreground bg-muted/40 rounded-md px-3 py-2">
                  {materialHints[materialKey]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="color" className="text-sm font-semibold flex items-center gap-1.5">
                <Palette className="h-3.5 w-3.5 text-primary" />
                Farbe
              </Label>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`px-3 py-1.5 rounded-lg text-sm border transition-all
                      ${color === c
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(1)} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Zurück
              </Button>
              <Button onClick={() => setStep(3)} className="gap-2">
                Weiter zu Parametern
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Parameters ───────────────── */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Druckparameter & Stückzahl</h3>
              <p className="text-sm text-muted-foreground">
                Feinere Schichten = glattere Oberfläche, aber längere Druckzeit.
                Höherer Infill = stabiler, aber mehr Material.
              </p>
            </div>

            {/* Infill */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-primary" />
                Infill (Füllung)
                <span className="ml-auto text-sm font-bold text-primary">{infillPercent} %</span>
              </Label>
              <Slider
                value={[infillPercent]}
                onValueChange={(v) => setInfillPercent(v[0])}
                min={10}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>10 % – Leicht</span>
                <span>50 % – Stabil</span>
                <span>100 % – Massiv</span>
              </div>
            </div>

            {/* Schichtdicke & Wandstärke */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="layerHeight" className="text-sm font-semibold">Schichtdicke</Label>
                <Select value={String(layerHeight)} onValueChange={(v) => setLayerHeight(Number(v))}>
                  <SelectTrigger id="layerHeight">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {layerHeights.map((h) => (
                      <SelectItem key={h} value={String(h)}>
                        {h} mm {h <= 0.12 ? "– fein" : h >= 0.28 ? "– schnell" : "– standard"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallThickness" className="text-sm font-semibold">Wandstärke</Label>
                <Select value={String(wallThickness)} onValueChange={(v) => setWallThickness(Number(v))}>
                  <SelectTrigger id="wallThickness">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {wallThicknesses.map((w) => (
                      <SelectItem key={w} value={String(w)}>
                        {w} mm {w <= 1.0 ? "– dünn" : w >= 2.0 ? "– massiv" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Anzahl */}
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-sm font-semibold">Anzahl / Projektmenge</Label>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={10000}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
              {quantity >= 10 && (
                <p className="text-xs text-primary">
                  {quantity >= 100 ? "10 % Mengenrabatt" : quantity >= 50 ? "8 % Mengenrabatt" : "5 % Mengenrabatt"} ab dieser Stückzahl.
                </p>
              )}
            </div>

            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={() => setStep(2)} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Zurück
              </Button>
            </div>
          </div>
        )}

        {/* Testkonfigurationen – always visible at bottom */}
        <div className="pt-4 mt-4 border-t border-border/30">
          <button
            type="button"
            onClick={() => setShowTests(!showTests)}
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <FlaskConical className="h-3.5 w-3.5" />
            {showTests ? "Testkonfigurationen ausblenden" : "Testkonfiguration laden"}
          </button>
          {showTests && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TEST_CASES.map((tc, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs justify-start"
                  onClick={() => loadTestCase(i)}
                >
                  {tc.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
