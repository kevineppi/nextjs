'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { pricingConfig } from "@/data/pricingConfig";
import type { PricingResult, PricingInput } from "@/lib/pricingEngine";
import { Bug, Save, Trash2 } from "lucide-react";

interface Props {
  result: PricingResult | null;
  input: PricingInput | null;
}

interface ReferenceValues {
  volumeCm3: number;
  surfaceCm2: number;
  widthMm: number;
  depthMm: number;
  heightMm: number;
}

interface SavedReferenceTest {
  id: string;
  label: string;
  timestamp: string;
  geometry: {
    volumeCm3: number;
    surfaceCm2: number;
    boundingBoxMm: { x: number; y: number; z: number };
  };
  reference: ReferenceValues;
}

const STORAGE_KEY = "ekdruck_reference_tests";

function loadSavedTests(): SavedReferenceTest[] {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSavedTests(tests: SavedReferenceTest[]) {
  typeof window !== "undefined" && localStorage.setItem(STORAGE_KEY, JSON.stringify(tests));
}

interface DeviationRowProps {
  label: string;
  actual: number;
  reference: number;
  unit: string;
}

const DeviationRow = ({ label, actual, reference, unit }: DeviationRowProps) => {
  const absDev = actual - reference;
  const pctDev = reference !== 0 ? (absDev / reference) * 100 : 0;
  const absPct = Math.abs(pctDev);

  let colorClass = "text-green-600";
  let bgClass = "bg-green-500/10";
  if (absPct > 10) {
    colorClass = "text-destructive";
    bgClass = "bg-destructive/10";
  } else if (absPct > 3) {
    colorClass = "text-yellow-600";
    bgClass = "bg-yellow-500/10";
  }

  return (
    <div className={`grid grid-cols-5 gap-2 items-center rounded px-2 py-1 text-xs ${bgClass}`}>
      <span className="text-muted-foreground col-span-1">{label}</span>
      <span className="text-foreground text-right">{actual.toFixed(2)} {unit}</span>
      <span className="text-muted-foreground text-right">{reference.toFixed(2)} {unit}</span>
      <span className={`text-right font-medium ${colorClass}`}>
        {absDev >= 0 ? "+" : ""}{absDev.toFixed(2)} {unit}
      </span>
      <span className={`text-right font-semibold ${colorClass}`}>
        {absDev >= 0 ? "+" : ""}{pctDev.toFixed(1)} %
      </span>
    </div>
  );
};

const fmt = (n: number) => n.toFixed(2);
const fmtE = (n: number) => n.toFixed(2) + " €";

const DebugPanel = ({ result, input }: Props) => {
  const [open, setOpen] = useState(false);
  const [refValues, setRefValues] = useState<ReferenceValues>({
    volumeCm3: 0,
    surfaceCm2: 0,
    widthMm: 0,
    depthMm: 0,
    heightMm: 0,
  });
  const [savedTests, setSavedTests] = useState<SavedReferenceTest[]>(loadSavedTests);

  if (!result || !input) return null;

  const cfg = pricingConfig;

  const hasRefValues = refValues.volumeCm3 > 0 || refValues.surfaceCm2 > 0 ||
    refValues.widthMm > 0 || refValues.depthMm > 0 || refValues.heightMm > 0;

  const handleSaveTest = () => {
    const newTest: SavedReferenceTest = {
      id: crypto.randomUUID(),
      label: `Test ${new Date().toLocaleString("de-AT")}`,
      timestamp: new Date().toISOString(),
      geometry: {
        volumeCm3: result.volumeCm3,
        surfaceCm2: result.surfaceCm2,
        boundingBoxMm: { ...result.boundingBoxMm },
      },
      reference: { ...refValues },
    };
    const updated = [...savedTests, newTest];
    setSavedTests(updated);
    saveSavedTests(updated);
  };

  const handleDeleteTest = (id: string) => {
    const updated = savedTests.filter((t) => t.id !== id);
    setSavedTests(updated);
    saveSavedTests(updated);
  };

  const updateRef = (key: keyof ReferenceValues, value: string) => {
    setRefValues((prev) => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        <Bug className="h-3.5 w-3.5" />
        {open ? "Debug ausblenden" : "Debug anzeigen"}
      </button>

      {open && (
        <Card className="mt-3 border-dashed border-muted-foreground/30 bg-muted/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <Bug className="h-4 w-4" />
              Debug / Kalkulations-Aufschlüsselung
              <Badge variant="outline" className="text-[10px]">Intern</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-xs font-mono">
            {/* Geometrie */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">📐 Geometrie</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>Volumen:</span><span className="text-foreground">{fmt(result.volumeCm3)} cm³</span>
                <span>Oberfläche:</span><span className="text-foreground">{fmt(result.surfaceCm2)} cm²</span>
                <span>Maße (X×Y×Z):</span><span className="text-foreground">{fmt(result.boundingBoxMm.x)} × {fmt(result.boundingBoxMm.y)} × {fmt(result.boundingBoxMm.z)} mm</span>
                <span>Max. Dimension:</span><span className="text-foreground">{fmt(result.maxDimensionMm)} mm</span>
              </div>
            </div>

            {/* Wandanteil & Effektives Volumen */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">🧱 Wandanteil & Effektives Volumen</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>Wandstärke (cm):</span><span className="text-foreground">{result.wallThicknessCm.toFixed(4)}</span>
                <span>Wandvolumen:</span><span className="text-foreground">{fmt(result.wallVolumeCm3)} cm³</span>
                <span>wallFraction:</span><span className="text-foreground">{result.wallFraction.toFixed(4)}</span>
                <span>effectiveVolumeFactor:</span><span className="text-foreground">{result.effectiveVolumeFactor.toFixed(4)}</span>
                <span>effectiveVolume:</span><span className="text-foreground">{fmt(result.effectiveVolume)} cm³</span>
              </div>
            </div>

            {/* Materialkosten */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">💎 Materialkosten</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>Materialgewicht:</span><span className="text-foreground">{fmt(result.materialWeightG)} g</span>
                <span>Rohkosten:</span><span className="text-foreground">{fmtE(result.materialCostRaw)}</span>
                <span>× Sicherheitsfaktor ({cfg.materialSafetyFactor}):</span>
                <span className="text-foreground font-medium">{fmtE(result.materialCost)}</span>
              </div>
            </div>

            {/* Druckzeit */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">⏱️ Druckzeit</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>layerCount:</span><span className="text-foreground">{result.layerCount}</span>
                <span>rawTime:</span><span className="text-foreground">{fmt(result.rawTime)} Min.</span>
                <span>printTimeMin:</span><span className="text-foreground">{fmt(result.printTimeMin)} Min. ({fmt(result.printTimeMin / 60)} Std.)</span>
              </div>
            </div>

            {/* Druckkosten */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">🖨️ Druckkosten</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>hourlyPrintRate:</span><span className="text-foreground">{fmtE(result.hourlyPrintRate)}/h {result.maxDimensionMm >= cfg.hourlyRate.largeFromMm ? "(groß)" : "(klein/mittel)"}</span>
                <span>printCost:</span><span className="text-foreground font-medium">{fmtE(result.printCost)}</span>
              </div>
            </div>

            {/* Setupkosten */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">⚙️ Setup-/Handlingkosten</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>setupCost:</span><span className="text-foreground font-medium">{fmtE(result.setupCost)}</span>
              </div>
            </div>

            {/* Größen-Skalierung */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">📊 Größen-Skalierung</h4>
              <div className="bg-background rounded p-2 grid grid-cols-2 gap-x-6 gap-y-1 text-muted-foreground">
                <span>sizeFactor:</span><span className="text-foreground">{result.sizeFactor.toFixed(4)}×</span>
                <span>scaledUnitCost:</span><span className="text-foreground font-medium">{fmtE(result.scaledUnitCost)}</span>
              </div>
            </div>

            {/* Preisaufbau */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">💰 Preisaufbau pro Stück</h4>
              <div className="bg-background rounded p-2 space-y-1 text-muted-foreground">
                <div className="flex justify-between"><span>Material:</span><span className="text-foreground">{fmtE(result.materialCost)}</span></div>
                <div className="flex justify-between"><span>Druckkosten:</span><span className="text-foreground">{fmtE(result.printCost)}</span></div>
                <div className="flex justify-between"><span>Setup:</span><span className="text-foreground">{fmtE(result.setupCost)}</span></div>
                <div className="flex justify-between border-t border-border/50 pt-1"><span>Summe (vor Skalierung):</span><span className="text-foreground">{fmtE(result.materialCost + result.printCost + result.setupCost)}</span></div>
                <div className="flex justify-between"><span>× Größenfaktor ({result.sizeFactor.toFixed(4)}):</span><span className="text-foreground font-medium">{fmtE(result.scaledUnitCost)}</span></div>
              </div>
            </div>

            {/* Rabatte & Zuschläge */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">🏷️ Rabatte & Zuschläge</h4>
              <div className="bg-background rounded p-2 space-y-1 text-muted-foreground">
                <div className="flex justify-between"><span>Zwischensumme ({result.quantity}×):</span><span className="text-foreground">{fmtE(result.subtotalNet)}</span></div>
                {result.discountRate > 0 && (
                  <div className="flex justify-between text-green-600"><span>Mengenrabatt ({(result.discountRate * 100).toFixed(0)}%):</span><span>−{fmtE(result.quantityDiscount)}</span></div>
                )}
                <div className="flex justify-between"><span>Nach Rabatt:</span><span className="text-foreground">{fmtE(result.netAfterDiscount)}</span></div>
                {result.surcharge > 0 && (
                  <div className="flex justify-between text-destructive"><span>Mindermengenzuschlag:</span><span>+{fmtE(result.surcharge)}</span></div>
                )}
              </div>
            </div>

            {/* Endergebnis */}
            <div>
              <h4 className="font-semibold text-foreground mb-1">🧾 Endergebnis</h4>
              <div className="bg-background rounded p-2 space-y-1 text-muted-foreground">
                <div className="flex justify-between font-medium"><span>finalNet:</span><span className="text-foreground">{fmtE(result.finalNet)}</span></div>
                <div className="flex justify-between"><span>vatAmount ({(cfg.vatRate * 100).toFixed(0)}%):</span><span className="text-foreground">{fmtE(result.vatAmount)}</span></div>
                <div className="flex justify-between font-bold text-sm"><span>finalGross:</span><span className="text-foreground">{fmtE(result.finalGross)}</span></div>
              </div>
            </div>

            <Separator />

            {/* ══════════ Referenzvergleich ══════════ */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">
                📐 Referenzvergleich – Geometriedaten
              </h4>
              <p className="text-muted-foreground mb-3 font-sans text-xs">
                Tragen Sie die Referenzwerte eines externen Kalkulators ein, um die Abweichung zu prüfen.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4 font-sans">
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Volumen (cm³)</Label>
                  <Input type="number" step="0.01" min={0} value={refValues.volumeCm3 || ""} onChange={(e) => updateRef("volumeCm3", e.target.value)} placeholder="z.B. 24.5" className="h-8 text-xs" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Oberfläche (cm²)</Label>
                  <Input type="number" step="0.01" min={0} value={refValues.surfaceCm2 || ""} onChange={(e) => updateRef("surfaceCm2", e.target.value)} placeholder="z.B. 98.2" className="h-8 text-xs" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Breite (mm)</Label>
                  <Input type="number" step="0.1" min={0} value={refValues.widthMm || ""} onChange={(e) => updateRef("widthMm", e.target.value)} placeholder="z.B. 50" className="h-8 text-xs" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Tiefe (mm)</Label>
                  <Input type="number" step="0.1" min={0} value={refValues.depthMm || ""} onChange={(e) => updateRef("depthMm", e.target.value)} placeholder="z.B. 50" className="h-8 text-xs" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[11px]">Ref. Höhe (mm)</Label>
                  <Input type="number" step="0.1" min={0} value={refValues.heightMm || ""} onChange={(e) => updateRef("heightMm", e.target.value)} placeholder="z.B. 50" className="h-8 text-xs" />
                </div>
              </div>

              {hasRefValues && (
                <div className="space-y-1 mb-4">
                  <div className="grid grid-cols-5 gap-2 px-2 py-1 text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">
                    <span>Wert</span>
                    <span className="text-right">Berechnet</span>
                    <span className="text-right">Referenz</span>
                    <span className="text-right">Abweichung</span>
                    <span className="text-right">Abw. %</span>
                  </div>
                  {refValues.volumeCm3 > 0 && <DeviationRow label="Volumen" actual={result.volumeCm3} reference={refValues.volumeCm3} unit="cm³" />}
                  {refValues.surfaceCm2 > 0 && <DeviationRow label="Oberfläche" actual={result.surfaceCm2} reference={refValues.surfaceCm2} unit="cm²" />}
                  {refValues.widthMm > 0 && <DeviationRow label="Breite (X)" actual={result.boundingBoxMm.x} reference={refValues.widthMm} unit="mm" />}
                  {refValues.depthMm > 0 && <DeviationRow label="Tiefe (Y)" actual={result.boundingBoxMm.y} reference={refValues.depthMm} unit="mm" />}
                  {refValues.heightMm > 0 && <DeviationRow label="Höhe (Z)" actual={result.boundingBoxMm.z} reference={refValues.heightMm} unit="mm" />}
                </div>
              )}

              {hasRefValues && (
                <Button type="button" variant="outline" size="sm" className="text-xs" onClick={handleSaveTest}>
                  <Save className="h-3.5 w-3.5 mr-1.5" />
                  Aktuelle Datei als Referenztest speichern
                </Button>
              )}
            </div>

            {savedTests.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    💾 Gespeicherte Referenztests ({savedTests.length})
                  </h4>
                  <div className="space-y-2">
                    {savedTests.map((test) => (
                      <div key={test.id} className="bg-background rounded-lg p-3 border border-border/50">
                        <div className="flex items-center justify-between mb-2 font-sans">
                          <span className="text-xs font-medium text-foreground">{test.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground">{new Date(test.timestamp).toLocaleString("de-AT")}</span>
                            <Button type="button" variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleDeleteTest(test.id)}>
                              <Trash2 className="h-3 w-3 text-destructive" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[11px] text-muted-foreground">
                          <span>Volumen: {test.geometry.volumeCm3.toFixed(2)} cm³</span>
                          <span>Ref: {test.reference.volumeCm3.toFixed(2)} cm³</span>
                          <span>Oberfläche: {test.geometry.surfaceCm2.toFixed(2)} cm²</span>
                          <span>Ref: {test.reference.surfaceCm2.toFixed(2)} cm²</span>
                          <span>BB: {test.geometry.boundingBoxMm.x}×{test.geometry.boundingBoxMm.y}×{test.geometry.boundingBoxMm.z} mm</span>
                          <span>Ref: {test.reference.widthMm}×{test.reference.depthMm}×{test.reference.heightMm} mm</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DebugPanel;
