/**
 * ═══════════════════════════════════════════════════════════════
 * 3D-Druck Kostenrechner – Zentrale Preiskonfiguration
 * ═══════════════════════════════════════════════════════════════
 *
 * Hybrides Kalkulationsmodell – Baseline-Konfiguration.
 * Alle Parameter werden von pricingEngine.ts konsumiert.
 */

export const pricingConfig = {
  vatRate: 0,

  density: {
    PLA: 1.24,
    "PLA+": 1.24,
    PETG: 1.27,
    ABS: 1.04,
    ASA: 1.07,
    TPU: 1.21,
    "PA6-CF": 1.15,
    PC: 1.2,
  } as Record<string, number>,

  pricePerKg: {
    PLA: 25,
    "PLA+": 30,
    PETG: 30,
    ABS: 35,
    ASA: 40,
    TPU: 80,
    "PA6-CF": 120,
    PC: 65,
  } as Record<string, number>,

  layerHeightFactor: {
    0.08: 1.25,
    0.12: 1.1,
    0.2: 1.0,
    0.28: 0.9,
  } as Record<number, number>,

  materialSafetyFactor: 1.15,

  printTime: {
    volumeFactor: 2.5,
    surfaceFactor: 0.08,
    layerFactor: 0.06,
    baseMinutes: 8,
    fdmFactor: 1.0,
  },

  hourlyRate: {
    small: 3,
    large: 6,
    largeFromMm: 260,
  },

  setupCost: 12.99,

  sizeFactor: {
    startFromMm: 170,
    divisor: 300,
    slope: 0.5,
    min: 1.0,
  },

  quantityDiscounts: [
    { minQty: 100, rate: 0.10 },
    { minQty: 50, rate: 0.08 },
    { minQty: 10, rate: 0.05 },
  ],

  minimumOrder: {
    thresholdNet: 40,
    surcharge: 8.9,
  },

  // ── UI-Konfiguration ──────────────────────────────────────

  /** Platzhalter-Geometriedaten (wenn keine STL hochgeladen) */
  placeholderGeometry: {
    volumeCm3: 25,
    surfaceCm2: 100,
    boundingBoxMm: { x: 50, y: 50, z: 50 },
  },

  /** Standard-Infill */
  defaultInfillPercent: 15,

  /** Verfügbare Infill-Stufen in % */
  infillOptions: [10, 15, 20, 30, 50, 75, 100],

  /** Verfügbare Materialien (FDM) */
  materialKeys: ['PLA', 'PLA+', 'PETG', 'ABS', 'ASA', 'TPU', 'PA6-CF', 'PC'] as string[],

  /** Verfügbare Farben pro Material */
  materialColors: {
    PLA:      ['Schwarz', 'Weiß', 'Grau', 'Natur', 'Rot', 'Blau', 'Grün'],
    "PLA+":   ['Schwarz', 'Weiß', 'Grau', 'Natur'],
    PETG:     ['Schwarz', 'Weiß', 'Grau', 'Transparent'],
    ABS:      ['Schwarz', 'Weiß', 'Grau'],
    ASA:      ['Schwarz', 'Weiß', 'Grau'],
    TPU:      ['Schwarz', 'Weiß', 'Natur'],
    "PA6-CF": ['Schwarz'],
    PC:       ['Transparent', 'Schwarz'],
  } as Record<string, string[]>,

  /** Verfügbare Schichtdicken (mm) */
  layerHeights: [0.08, 0.12, 0.20, 0.28],

  /** Default Schichtdicke */
  defaultLayerHeight: 0.20,

  /** Verfügbare Wandstärken (mm) */
  wallThicknesses: [0.8, 1.2, 1.6, 2.0, 2.4],

  /** Default Wandstärke */
  defaultWallThickness: 1.2,

  /** Material-Labels für die UI */
  materialLabels: {
    PLA: 'PLA',
    "PLA+": 'PLA+',
    PETG: 'PETG',
    ABS: 'ABS',
    ASA: 'ASA (UV-beständig)',
    TPU: 'TPU (flexibel)',
    "PA6-CF": 'PA6-CF (Carbonfaser)',
    PC: 'Polycarbonat',
  } as Record<string, string>,
} as const;

export type PricingConfig = typeof pricingConfig;
