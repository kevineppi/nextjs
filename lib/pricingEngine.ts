/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Pricing Engine (Baseline)
 * ═══════════════════════════════════════════════════════════════
 *
 * Exakte Umsetzung der manuell gegengeprüften Preislogik.
 * Keine kreativen Interpretationen – 1:1 Baseline.
 *
 * Intern wird mit voller Genauigkeit gerechnet.
 * Rundung auf 2 Nachkommastellen erfolgt nur für die Anzeige.
 */

import { pricingConfig } from '@/data/pricingConfig';

// ── Typen ───────────────────────────────────────────────────

export interface GeometryData {
  volumeCm3: number;
  surfaceCm2: number;
  boundingBoxMm: {
    x: number;
    y: number;
    z: number;
  };
}

export interface PricingInput {
  geometry: GeometryData;
  materialKey: string;
  layerHeight: number;
  wallThickness: number;
  infillPercent: number;
  quantity: number;
}

export interface PricingResult {
  // Geometrie (Eingabe)
  volumeCm3: number;
  surfaceCm2: number;
  boundingBoxMm: { x: number; y: number; z: number };
  maxDimensionMm: number;

  // Schritt 1: Materialkosten
  wallThicknessCm: number;
  wallVolumeCm3: number;
  wallFraction: number;
  effectiveVolumeFactor: number;
  effectiveVolume: number;
  materialWeightG: number;
  materialCostRaw: number;
  materialCost: number;

  // Schritt 2: Druckzeit
  layerCount: number;
  rawTime: number;
  printTimeMin: number;

  // Schritt 3: Druckkosten
  hourlyPrintRate: number;
  printCost: number;

  // Schritt 4: Setup
  setupCost: number;

  // Schritt 5: Größenzuschlag
  sizeFactor: number;
  scaledUnitCost: number;

  // Schritt 6: Mengenrabatt
  quantity: number;
  discountRate: number;
  subtotalNet: number;
  quantityDiscount: number;
  netAfterDiscount: number;

  // Schritt 7: Mindermengenzuschlag
  surcharge: number;

  // Schritt 8: Endpreis
  finalNet: number;
  vatAmount: number;
  finalGross: number;
}

// ── Hilfsfunktion: Schichtdickenfaktor ─────────────────────

function getLayerHeightFactor(layerHeight: number): number {
  const factors = pricingConfig.layerHeightFactor;
  if (layerHeight in factors) {
    return factors[layerHeight as keyof typeof factors];
  }
  // Fallback: nächstliegenden Wert nehmen
  const heights = Object.keys(factors).map(Number).sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (layerHeight <= heights[i]) return factors[heights[i] as keyof typeof factors];
  }
  return factors[heights[heights.length - 1] as keyof typeof factors];
}

// ── Hauptfunktion ───────────────────────────────────────────

export function calculatePrice(input: PricingInput): PricingResult {
  const cfg = pricingConfig;
  const geo = input.geometry;

  const volumeCm3 = geo.volumeCm3;
  const surfaceCm2 = geo.surfaceCm2;
  const boundingBoxMm = geo.boundingBoxMm;
  const maxDimensionMm = Math.max(boundingBoxMm.x, boundingBoxMm.y, boundingBoxMm.z);

  // ── Schritt 1: Materialkosten ─────────────────────────────

  const wallThicknessCm = input.wallThickness / 10;
  const wallVolumeCm3 = surfaceCm2 * wallThicknessCm;
  const wallFraction = Math.min(wallVolumeCm3 / volumeCm3, 0.95);

  const effectiveVolumeFactor =
    wallFraction + (1 - wallFraction) * (input.infillPercent / 100);

  const effectiveVolume = volumeCm3 * effectiveVolumeFactor;

  const density = cfg.density[input.materialKey];
  const pricePerKg = cfg.pricePerKg[input.materialKey];

  const materialWeightG = effectiveVolume * density;
  const materialCostRaw = (materialWeightG / 1000) * pricePerKg;
  const materialCost = materialCostRaw * cfg.materialSafetyFactor;

  // ── Schritt 2: Druckzeit ──────────────────────────────────

  const layerCount = Math.ceil(boundingBoxMm.z / input.layerHeight);

  const rawTime =
    (volumeCm3 * cfg.printTime.volumeFactor) +
    (surfaceCm2 * cfg.printTime.surfaceFactor) +
    (layerCount * cfg.printTime.layerFactor) +
    cfg.printTime.baseMinutes;

  // Infill beeinflusst die Druckzeit: mehr Füllung = mehr Fahrwege = mehr Zeit
  // Basis: 15% Infill = Faktor 1.0, 100% = Faktor ~1.35
  const infillTimeFactor = 1 + ((input.infillPercent - 15) / 100) * 0.4;
  const clampedInfillFactor = Math.max(0.85, Math.min(infillTimeFactor, 1.4));

  const printTimeMin = rawTime * getLayerHeightFactor(input.layerHeight) * cfg.printTime.fdmFactor * clampedInfillFactor;

  // ── Schritt 3: Druckkosten ────────────────────────────────

  const hourlyPrintRate =
    maxDimensionMm >= cfg.hourlyRate.largeFromMm ? cfg.hourlyRate.large : cfg.hourlyRate.small;

  const printCost = (printTimeMin / 60) * hourlyPrintRate;

  // ── Schritt 4: Setup ──────────────────────────────────────

  const setupCost = cfg.setupCost;

  // ── Schritt 5: Größenzuschlag ─────────────────────────────

  let sizeFactor: number;
  if (maxDimensionMm < cfg.sizeFactor.startFromMm) {
    sizeFactor = cfg.sizeFactor.min;
  } else {
    const oversize = maxDimensionMm - cfg.sizeFactor.startFromMm;
    sizeFactor = 1 + (oversize / cfg.sizeFactor.divisor) * cfg.sizeFactor.slope;
  }

  const scaledUnitCost = (materialCost + printCost + setupCost) * sizeFactor;

  // ── Schritt 6: Mengenrabatt ───────────────────────────────

  let discountRate = 0;
  if (input.quantity >= 100) discountRate = 0.10;
  else if (input.quantity >= 50) discountRate = 0.08;
  else if (input.quantity >= 10) discountRate = 0.05;

  const subtotalNet = scaledUnitCost * input.quantity;
  const quantityDiscount = subtotalNet * discountRate;
  const netAfterDiscount = subtotalNet - quantityDiscount;

  // ── Schritt 7: Mindermengenzuschlag ───────────────────────

  let surcharge: number;
  if (netAfterDiscount < cfg.minimumOrder.thresholdNet) {
    surcharge = cfg.minimumOrder.surcharge;
  } else {
    surcharge = 0;
  }

  // ── Schritt 8: Endpreis ───────────────────────────────────

  const finalNet = netAfterDiscount + surcharge;
  const vatAmount = finalNet * cfg.vatRate;
  const finalGross = finalNet + vatAmount;

  return {
    volumeCm3,
    surfaceCm2,
    boundingBoxMm,
    maxDimensionMm,

    wallThicknessCm,
    wallVolumeCm3,
    wallFraction,
    effectiveVolumeFactor,
    effectiveVolume,

    materialWeightG,
    materialCostRaw,
    materialCost,

    layerCount,
    rawTime,
    printTimeMin,
    hourlyPrintRate,
    printCost,

    setupCost,
    sizeFactor,
    scaledUnitCost,

    quantity: input.quantity,
    discountRate,
    subtotalNet,
    quantityDiscount,
    netAfterDiscount,

    surcharge,
    finalNet,
    vatAmount,
    finalGross,
  };
}

// ── Testfälle ───────────────────────────────────────────────

export interface TestCase {
  label: string;
  input: PricingInput;
}

export const TEST_CASES: TestCase[] = [
  {
    label: 'Ref: Lion of St. Mark – klein.stl',
    input: {
      geometry: {
        volumeCm3: 16.02,
        surfaceCm2: 75.88,
        boundingBoxMm: { x: 19.58, y: 61.62, z: 50.00 },
      },
      materialKey: 'PLA',
      layerHeight: 0.2,
      wallThickness: 1.2,
      infillPercent: 10,
      quantity: 1,
    },
  },
  {
    label: 'Ref: Henk-Final-v3.stl',
    input: {
      geometry: {
        volumeCm3: 271.15,
        surfaceCm2: 1280.97,
        boundingBoxMm: { x: 348, y: 201, z: 30 },
      },
      materialKey: 'PLA',
      layerHeight: 0.2,
      wallThickness: 1.2,
      infillPercent: 10,
      quantity: 1,
    },
  },
  {
    label: 'PLA / 0.12mm / 15% Infill / 1 Stk (Placeholder)',
    input: {
      geometry: {
        volumeCm3: 25,
        surfaceCm2: 100,
        boundingBoxMm: { x: 50, y: 50, z: 50 },
      },
      materialKey: 'PLA',
      layerHeight: 0.12,
      wallThickness: 1.2,
      infillPercent: 15,
      quantity: 1,
    },
  },
  {
    label: 'PETG / 0.20mm / 20% Infill / 1 Stk (Placeholder)',
    input: {
      geometry: {
        volumeCm3: 25,
        surfaceCm2: 100,
        boundingBoxMm: { x: 50, y: 50, z: 50 },
      },
      materialKey: 'PETG',
      layerHeight: 0.20,
      wallThickness: 1.6,
      infillPercent: 20,
      quantity: 1,
    },
  },
  {
    label: 'ABS / 0.20mm / 30% Infill / 5 Stk (Placeholder)',
    input: {
      geometry: {
        volumeCm3: 25,
        surfaceCm2: 100,
        boundingBoxMm: { x: 50, y: 50, z: 50 },
      },
      materialKey: 'ABS',
      layerHeight: 0.20,
      wallThickness: 1.2,
      infillPercent: 30,
      quantity: 5,
    },
  },
  {
    label: 'PA6-CF / 0.12mm / 50% Infill / 10 Stk (Placeholder)',
    input: {
      geometry: {
        volumeCm3: 25,
        surfaceCm2: 100,
        boundingBoxMm: { x: 50, y: 50, z: 50 },
      },
      materialKey: 'PA6-CF',
      layerHeight: 0.12,
      wallThickness: 1.6,
      infillPercent: 50,
      quantity: 10,
    },
  },
];
