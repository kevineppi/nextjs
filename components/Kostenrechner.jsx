import { useState, useCallback, useRef, useEffect } from "react";

// ─── PRICING CONFIG ───────────────────────────────────────────────
const MATERIALS = [
  { id: "pla", name: "PLA", price: 25, label: "Glatte Oberfläche, ideal für Präsentationsmodelle", color: "#2563eb" },
  { id: "petg", name: "PETG", price: 30, label: "UV-stabil & schlagfest — perfekt für Messemodelle", color: "#059669" },
  { id: "abs", name: "ABS", price: 28, label: "Glätt- und lackierbar für Ausstellungsobjekte", color: "#d97706" },
  { id: "pla-plus", name: "PLA+", price: 28, label: "Verstärkt, höhere Schlagzähigkeit als Standard-PLA", color: "#4f46e5" },
  { id: "asa", name: "ASA", price: 32, label: "Wetterfest & UV-beständig für Außenanwendungen", color: "#0891b2" },
  { id: "tpu", name: "TPU", price: 38, label: "Flexibel & gummiartig — für biegbare Teile", color: "#e11d48" },
  { id: "pc", name: "PC", price: 45, label: "Polycarbonat — extrem schlagfest & hitzebeständig", color: "#7c3aed" },
  { id: "pa6cf", name: "PA6-CF", price: 120, label: "Carbon-Look, ultraleicht — Premium-Showmodelle", color: "#1e293b" },
];

const QUALITIES = [
  { id: "standard", name: "Standard", layer: 0.20, timeMultiplier: 1.0, desc: "Schnell & günstig" },
  { id: "fein", name: "Fein", layer: 0.12, timeMultiplier: 1.25, desc: "Glattere Oberfläche" },
  { id: "premium", name: "Premium", layer: 0.08, timeMultiplier: 1.55, desc: "Höchste Detailtreue" },
];

const SETUP_FEE = 12.99;

const VOLUME_DISCOUNTS = [
  { min: 100, pct: 10 },
  { min: 50, pct: 8 },
  { min: 25, pct: 7 },
  { min: 10, pct: 5 },
];

// ─── STL PARSER ───────────────────────────────────────────────────
function parseSTL(buffer) {
  const view = new DataView(buffer);
  let triangleCount = 0;
  let volume = 0;
  let surfaceArea = 0;
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

  // Check if ASCII
  const header = new Uint8Array(buffer, 0, Math.min(80, buffer.byteLength));
  const headerStr = String.fromCharCode(...header).trim();
  const isAscii = headerStr.startsWith("solid") && buffer.byteLength > 84 &&
    new TextDecoder().decode(new Uint8Array(buffer, 0, 300)).includes("facet");

  if (!isAscii && buffer.byteLength >= 84) {
    triangleCount = view.getUint32(80, true);
    const expectedSize = 84 + triangleCount * 50;
    if (Math.abs(buffer.byteLength - expectedSize) > 100) return null;

    for (let i = 0; i < triangleCount; i++) {
      const offset = 84 + i * 50;
      const v1x = view.getFloat32(offset + 12, true), v1y = view.getFloat32(offset + 16, true), v1z = view.getFloat32(offset + 20, true);
      const v2x = view.getFloat32(offset + 24, true), v2y = view.getFloat32(offset + 28, true), v2z = view.getFloat32(offset + 32, true);
      const v3x = view.getFloat32(offset + 36, true), v3y = view.getFloat32(offset + 40, true), v3z = view.getFloat32(offset + 44, true);

      // Signed volume of tetrahedron
      volume += (v1x * (v2y * v3z - v3y * v2z) - v2x * (v1y * v3z - v3y * v1z) + v3x * (v1y * v2z - v2y * v1z)) / 6;

      // Surface area
      const ax = v2x - v1x, ay = v2y - v1y, az = v2z - v1z;
      const bx = v3x - v1x, by = v3y - v1y, bz = v3z - v1z;
      const cx = ay * bz - az * by, cy = az * bx - ax * bz, cz = ax * by - ay * bx;
      surfaceArea += Math.sqrt(cx * cx + cy * cy + cz * cz) / 2;

      for (const [x, y, z] of [[v1x, v1y, v1z], [v2x, v2y, v2z], [v3x, v3y, v3z]]) {
        minX = Math.min(minX, x); minY = Math.min(minY, y); minZ = Math.min(minZ, z);
        maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); maxZ = Math.max(maxZ, z);
      }
    }
  } else {
    return null; // ASCII STLs: fallback to manual dimensions
  }

  volume = Math.abs(volume) / 1000; // mm³ → cm³
  surfaceArea = surfaceArea / 100;   // mm² → cm²
  const dims = { x: maxX - minX, y: maxY - minY, z: maxZ - minZ };

  return { volume, surfaceArea, dims, triangleCount };
}

// ─── PRICING ENGINE ───────────────────────────────────────────────
function calculatePrice(part) {
  const { volume, dims, surfaceArea } = part.geometry;
  const material = MATERIALS.find(m => m.id === part.materialId) || MATERIALS[0];
  const quality = QUALITIES.find(q => q.id === part.qualityId) || QUALITIES[0];
  const infill = part.infill / 100;
  const wallThickness = part.wallThickness;

  // 1. Material cost
  // Effective material volume: shell + infill core
  const shellVolume = Math.min(volume, surfaceArea * wallThickness * 0.1); // approximate shell
  const coreVolume = Math.max(0, volume - shellVolume);
  const effectiveVolume = shellVolume + coreVolume * infill;
  const density = material.id === "tpu" ? 1.21 : material.id === "pa6cf" ? 1.15 : material.id === "pc" ? 1.20 : material.id === "abs" ? 1.04 : material.id === "petg" ? 1.27 : 1.24; // g/cm³
  const weightG = effectiveVolume * density;
  const materialCost = (weightG / 1000) * material.price;

  // 2. Print time estimation
  // Base: ~10 cm³/h for 0.20mm, adjusted by quality
  const baseSpeed = 10; // cm³/h at standard quality
  const printTimeH = (effectiveVolume / baseSpeed) * quality.timeMultiplier;

  // Hourly rate: €6/h standard, €8/h for large parts
  const maxDim = Math.max(dims.x, dims.y, dims.z);
  const hourlyRate = maxDim >= 260 ? 8.00 : 6.00;
  const printCost = printTimeH * hourlyRate;

  // 3. Size surcharge
  let sizeSurcharge = 0;
  if (maxDim >= 260) sizeSurcharge = effectiveVolume * 0.12;
  else if (maxDim >= 170) sizeSurcharge = effectiveVolume * 0.06;

  // 4. Complexity factor (high surface-to-volume = complex geometry)
  const svRatio = volume > 0 ? surfaceArea / volume : 1;
  const complexityFactor = svRatio > 3 ? 1.08 : svRatio > 2 ? 1.04 : 1.0;

  const partPrice = (materialCost + printCost + sizeSurcharge) * complexityFactor;

  return {
    materialCost: Math.round(materialCost * 100) / 100,
    printCost: Math.round(printCost * 100) / 100,
    sizeSurcharge: Math.round(sizeSurcharge * 100) / 100,
    printTimeH: Math.round(printTimeH * 10) / 10,
    weightG: Math.round(weightG),
    partPrice: Math.round(partPrice * 100) / 100,
    effectiveVolume: Math.round(effectiveVolume * 10) / 10,
  };
}

function getTotalPrice(parts) {
  const lineItems = parts.map(p => {
    const calc = calculatePrice(p);
    return { ...calc, qty: p.qty, subtotal: Math.round(calc.partPrice * p.qty * 100) / 100 };
  });
  const totalQty = parts.reduce((s, p) => s + p.qty, 0);
  const subtotal = lineItems.reduce((s, li) => s + li.subtotal, 0);
  const discount = VOLUME_DISCOUNTS.find(d => totalQty >= d.min);
  const discountPct = discount ? discount.pct : 0;
  const discountAmount = Math.round(subtotal * discountPct / 100 * 100) / 100;
  const total = Math.round((subtotal - discountAmount + SETUP_FEE) * 100) / 100;

  return { lineItems, subtotal, discountPct, discountAmount, total, totalQty, setupFee: SETUP_FEE };
}

// ─── DEFAULT PART ─────────────────────────────────────────────────
const defaultGeometry = {
  volume: 25, // cm³  (50x50x50mm cube)
  surfaceArea: 150, // cm²
  dims: { x: 50, y: 50, z: 50 },
};

const createPart = (overrides = {}) => ({
  id: Math.random().toString(36).slice(2, 9),
  fileName: null,
  geometry: { ...defaultGeometry },
  materialId: "pla",
  qualityId: "fein",
  infill: 20,
  wallThickness: 2,
  qty: 1,
  ...overrides,
});

// ─── ICONS (inline SVG) ──────────────────────────────────────────
const UploadIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 16V4m0 0l-4 4m4-4l4 4" /><path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
  </svg>
);
const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" /><path d="M14 2v6h6" />
  </svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const MapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34M17 8A13 13 0 002 21.34M17 8c3.5-3.5 5-7 5-7s-3.5 1.5-7 5" />
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" strokeWidth="1.5" />
  </svg>
);
const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export default function Kostenrechner() {
  const [parts, setParts] = useState([createPart()]);
  const [activePart, setActivePart] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const fileInputRef = useRef(null);
  const dropRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const currentPart = parts[activePart] || parts[0];
  const pricing = getTotalPrice(parts);

  // ── File handling ──
  const handleFiles = useCallback(async (files) => {
    const stlFiles = Array.from(files).filter(f => f.name.toLowerCase().endsWith(".stl"));
    if (stlFiles.length === 0) return;

    const newParts = [];
    for (const file of stlFiles) {
      const buffer = await file.arrayBuffer();
      const parsed = parseSTL(buffer);
      const geometry = parsed || { ...defaultGeometry };
      newParts.push(createPart({
        fileName: file.name,
        geometry: {
          volume: parsed ? Math.round(parsed.volume * 10) / 10 : defaultGeometry.volume,
          surfaceArea: parsed ? Math.round(parsed.surfaceArea * 10) / 10 : defaultGeometry.surfaceArea,
          dims: parsed ? {
            x: Math.round(parsed.dims.x * 10) / 10,
            y: Math.round(parsed.dims.y * 10) / 10,
            z: Math.round(parsed.dims.z * 10) / 10,
          } : defaultGeometry.dims,
        },
      }));
    }

    setParts(prev => {
      // If first part is default (no file), replace it
      if (prev.length === 1 && !prev[0].fileName) {
        setActivePart(0);
        return newParts.length > 0 ? newParts : prev;
      }
      setActivePart(prev.length);
      return [...prev, ...newParts];
    });
  }, []);

  const updatePart = (key, value) => {
    setParts(prev => prev.map((p, i) => i === activePart ? { ...p, [key]: value } : p));
  };

  const removePart = (idx) => {
    if (parts.length <= 1) return;
    setParts(prev => prev.filter((_, i) => i !== idx));
    setActivePart(prev => Math.min(prev, parts.length - 2));
  };

  const addEmptyPart = () => {
    setParts(prev => [...prev, createPart()]);
    setActivePart(parts.length);
  };

  // ── Drag & drop ──
  const onDragOver = (e) => { e.preventDefault(); setDragOver(true); };
  const onDragLeave = () => setDragOver(false);
  const onDrop = (e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); };

  // ── SEO FAQ data ──
  const faqs = [
    {
      q: "Was kostet ein 3D-Druck Modell bei ekdruck?",
      a: "Die 3D-Druck Kosten beginnen bei ekdruck ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung — kostenlos und ohne Anmeldung. Für jedes Projekt erstellen wir zusätzlich ein persönlich geprüftes Festpreisangebot innerhalb von 6 Stunden."
    },
    {
      q: "Welche 3D-Druck Materialien kann ich wählen?",
      a: "Wir bieten 8 FDM-Materialien an: PLA (ideal für Präsentationsmodelle), PETG (UV-beständig, perfekt für Messemodelle), ABS (glätt- und lackierbar), PLA+ (verstärkt), ASA (wetterfest), TPU (flexibel), Polycarbonat (extrem schlagfest) und PA6-CF mit Carbonfaser für Premium-Showmodelle. Alle Filamente stammen aus österreichischer Produktion."
    },
    {
      q: "Wie genau ist der Richtpreis aus dem Kostenrechner?",
      a: "Der Richtpreis basiert auf der realen Geometrie Ihrer STL-Datei und berücksichtigt Materialverbrauch, Druckzeit, Baugröße und Setup-Aufwand. Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt und per E-Mail zugesendet."
    },
    {
      q: "Kann ich mehrere 3D-Modelle gleichzeitig kalkulieren lassen?",
      a: "Ja, unser Kostenrechner unterstützt Multi-File-Upload. Sie können beliebig viele STL-Dateien hochladen, jeweils mit eigenem Material und eigener Stückzahl konfigurieren und erhalten einen Gesamtrichtpreis mit automatischem Mengenvorteil ab 10 Stück."
    },
    {
      q: "Wie schnell ist die Lieferung?",
      a: "Standardaufträge fertigen wir in 3 bis 5 Werktagen. Im Express-Service erhalten Sie Ihr 3D-Druck Modell bereits in 24 bis 48 Stunden. Wir liefern versichert per Post in ganz Österreich — nach Wien, Linz, Graz, Salzburg, Innsbruck und alle weiteren Städte. Persönliche Abholung in Gunskirchen (Bezirk Wels-Land) ist ebenfalls möglich."
    },
    {
      q: "Wofür eignet sich euer 3D-Druck Service?",
      a: "Wir sind spezialisiert auf nicht-technische Präsentationsmodelle: Messemodelle und Standexponate, Architekturmodelle für Wettbewerbe und Kundenpräsentationen, Designstudien und Formentwürfe, Schulungs- und Lehrmodelle sowie Kleinserien ab 10 Stück. Mechanische Bauteile oder industrielle Ersatzteile fertigen wir nicht an."
    },
    {
      q: "Muss ich einen Account erstellen?",
      a: "Nein. Der Kostenrechner funktioniert ohne Anmeldung und ohne Account. Ihre STL-Datei wird ausschließlich lokal in Ihrem Browser analysiert und verlässt nie Ihren Rechner. Erst wenn Sie ein unverbindliches Angebot anfordern, benötigen wir Ihre E-Mail-Adresse für die Antwort."
    },
    {
      q: "Gibt es Mengenrabatte für größere Projekte?",
      a: "Ja. Ab 10 Teilen erhalten Sie automatisch 5 % Mengenvorteil, ab 25 Teilen 7 %, ab 50 Teilen 8 % und ab 100 Teilen 10 % Rabatt auf den Gesamtpreis. Der Mengenvorteil wird direkt im Kostenrechner angezeigt. Für größere Projektmengen oder wiederkehrende Aufträge erstellen wir gerne ein individuelles Angebot."
    },
  ];

  // ── Render ──
  return (
    <div className="kr-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap');

        .kr-root {
          --kr-bg: #fafaf8;
          --kr-card: #ffffff;
          --kr-border: #e8e6e1;
          --kr-text: #1a1917;
          --kr-text2: #6b6963;
          --kr-text3: #9c9890;
          --kr-accent: #1a1917;
          --kr-accent-soft: #f0efeb;
          --kr-blue: #2563eb;
          --kr-blue-soft: #eff4ff;
          --kr-green: #059669;
          --kr-green-soft: #ecfdf5;
          --kr-radius: 10px;
          --kr-radius-lg: 14px;
          font-family: 'DM Sans', -apple-system, sans-serif;
          color: var(--kr-text);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        .kr-hero { text-align: center; padding: 48px 24px 32px; max-width: 640px; margin: 0 auto; }
        .kr-hero h1 { font-size: 32px; font-weight: 500; letter-spacing: -0.5px; margin: 0 0 8px; line-height: 1.2; }
        .kr-hero p { font-size: 16px; color: var(--kr-text2); margin: 0; }

        .kr-trust-bar { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
        .kr-trust-pill { font-size: 12px; color: var(--kr-text2); padding: 4px 12px; border: 1px solid var(--kr-border); border-radius: 20px; background: var(--kr-card); display: inline-flex; align-items: center; gap: 4px; }

        .kr-main { max-width: 960px; margin: 0 auto; padding: 0 24px 48px; display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); gap: 24px; align-items: start; }
        @media (max-width: 768px) { .kr-main { grid-template-columns: 1fr; } }

        .kr-card { background: var(--kr-card); border: 1px solid var(--kr-border); border-radius: var(--kr-radius-lg); padding: 24px; }

        .kr-label { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--kr-text3); margin-bottom: 8px; display: block; font-weight: 500; }

        .kr-drop { border: 2px dashed var(--kr-border); border-radius: var(--kr-radius); padding: 28px 16px; text-align: center; cursor: pointer; transition: all 0.2s; background: var(--kr-bg); }
        .kr-drop:hover, .kr-drop.active { border-color: var(--kr-blue); background: var(--kr-blue-soft); }
        .kr-drop h3 { font-size: 14px; font-weight: 500; margin: 8px 0 2px; }
        .kr-drop p { font-size: 12px; color: var(--kr-text3); margin: 0; }

        .kr-files { margin-bottom: 20px; }
        .kr-file-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: var(--kr-radius); margin-bottom: 4px; cursor: pointer; transition: background 0.15s; border: 1px solid transparent; }
        .kr-file-row:hover { background: var(--kr-bg); }
        .kr-file-row.sel { background: var(--kr-blue-soft); border-color: var(--kr-blue); }
        .kr-file-info { flex: 1; min-width: 0; }
        .kr-file-name { font-size: 13px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .kr-file-meta { font-size: 11px; color: var(--kr-text3); }
        .kr-file-badge { font-size: 11px; font-weight: 500; padding: 2px 8px; border-radius: 6px; }
        .kr-file-price { font-size: 13px; font-weight: 500; min-width: 60px; text-align: right; }
        .kr-file-del { padding: 4px; border-radius: 6px; border: none; background: none; cursor: pointer; color: var(--kr-text3); transition: all 0.15s; }
        .kr-file-del:hover { background: #fef2f2; color: #dc2626; }
        .kr-file-actions { display: flex; gap: 6px; margin-top: 8px; }
        .kr-file-actions button { font-size: 12px; padding: 6px 12px; border: 1px solid var(--kr-border); border-radius: var(--kr-radius); background: var(--kr-card); cursor: pointer; font-family: inherit; color: var(--kr-text2); transition: all 0.15s; }
        .kr-file-actions button:hover { border-color: var(--kr-text3); color: var(--kr-text); }

        .kr-mat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 20px; }
        .kr-mat { padding: 10px 12px; border: 1px solid var(--kr-border); border-radius: var(--kr-radius); cursor: pointer; transition: all 0.15s; position: relative; background: var(--kr-card); }
        .kr-mat:hover { border-color: var(--kr-text3); }
        .kr-mat.sel { border: 2px solid var(--kr-blue); background: var(--kr-blue-soft); }
        .kr-mat-head { display: flex; align-items: center; gap: 6px; margin-bottom: 2px; }
        .kr-mat-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .kr-mat-name { font-size: 13px; font-weight: 500; }
        .kr-mat-desc { font-size: 11px; color: var(--kr-text3); line-height: 1.3; }
        .kr-mat-price { font-size: 11px; color: var(--kr-text2); margin-top: 2px; }

        .kr-qual-row { display: flex; gap: 6px; margin-bottom: 16px; }
        .kr-qual { flex: 1; padding: 10px 8px; border: 1px solid var(--kr-border); border-radius: var(--kr-radius); text-align: center; cursor: pointer; background: var(--kr-card); transition: all 0.15s; }
        .kr-qual:hover { border-color: var(--kr-text3); }
        .kr-qual.sel { border: 2px solid var(--kr-blue); background: var(--kr-blue-soft); }
        .kr-qual-name { font-size: 13px; font-weight: 500; }
        .kr-qual-desc { font-size: 11px; color: var(--kr-text3); }

        .kr-qty-row { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .kr-qty-btn { width: 32px; height: 32px; border: 1px solid var(--kr-border); border-radius: var(--kr-radius); background: var(--kr-card); font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-family: inherit; transition: all 0.15s; color: var(--kr-text); }
        .kr-qty-btn:hover { background: var(--kr-bg); border-color: var(--kr-text3); }
        .kr-qty-val { font-size: 18px; font-weight: 500; min-width: 28px; text-align: center; }

        .kr-adv-toggle { font-size: 12px; color: var(--kr-text3); cursor: pointer; display: flex; align-items: center; gap: 4px; border: none; background: none; padding: 4px 0; font-family: inherit; }
        .kr-adv-toggle:hover { color: var(--kr-text2); }
        .kr-adv-panel { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 12px 0 4px; }
        .kr-adv-label { font-size: 12px; color: var(--kr-text2); margin-bottom: 4px; display: block; }
        .kr-adv-slider { display: flex; align-items: center; gap: 8px; }
        .kr-adv-slider input[type="range"] { flex: 1; accent-color: var(--kr-blue); }
        .kr-adv-slider span { font-size: 12px; font-weight: 500; min-width: 36px; text-align: right; }

        .kr-price-card { position: sticky; top: 24px; }
        .kr-price-amount { text-align: center; padding: 20px 0; }
        .kr-price-num { font-size: 42px; font-weight: 500; letter-spacing: -1px; line-height: 1; }
        .kr-price-note { font-size: 12px; color: var(--kr-text3); margin-top: 6px; }

        .kr-breakdown { border-top: 1px solid var(--kr-border); padding-top: 12px; margin-bottom: 16px; }
        .kr-bk-line { display: flex; justify-content: space-between; font-size: 13px; color: var(--kr-text2); padding: 3px 0; }
        .kr-bk-total { display: flex; justify-content: space-between; font-size: 14px; font-weight: 500; border-top: 1px solid var(--kr-border); padding-top: 8px; margin-top: 6px; color: var(--kr-text); }
        .kr-bk-discount { color: var(--kr-green); }

        .kr-cta { display: block; width: 100%; padding: 14px; border: none; border-radius: var(--kr-radius); background: var(--kr-accent); color: white; font-size: 14px; font-weight: 500; cursor: pointer; font-family: inherit; letter-spacing: 0.2px; transition: opacity 0.15s; text-align: center; }
        .kr-cta:hover { opacity: 0.9; }
        .kr-cta-sub { text-align: center; font-size: 11px; color: var(--kr-text3); margin-top: 8px; }

        .kr-trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 16px; }
        .kr-trust-item { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--kr-text3); }

        .kr-contact { display: flex; gap: 8px; justify-content: center; margin-top: 10px; font-size: 12px; color: var(--kr-text3); }
        .kr-contact a { color: var(--kr-blue); text-decoration: none; }
        .kr-contact a:hover { text-decoration: underline; }

        .kr-discount-badge { background: var(--kr-green-soft); border-radius: var(--kr-radius); padding: 8px 12px; display: flex; align-items: center; gap: 6px; margin-top: 6px; }
        .kr-discount-badge span { font-size: 12px; color: var(--kr-green); font-weight: 500; }

        .kr-form { margin-top: 16px; }
        .kr-form input, .kr-form textarea { width: 100%; padding: 10px 12px; border: 1px solid var(--kr-border); border-radius: var(--kr-radius); font-family: inherit; font-size: 13px; margin-bottom: 8px; box-sizing: border-box; background: var(--kr-card); color: var(--kr-text); }
        .kr-form input:focus, .kr-form textarea:focus { outline: none; border-color: var(--kr-blue); }
        .kr-form textarea { resize: vertical; min-height: 60px; }

        .kr-success { background: var(--kr-green-soft); border-radius: var(--kr-radius); padding: 16px; text-align: center; }
        .kr-success h3 { font-size: 15px; font-weight: 500; color: var(--kr-green); margin: 0 0 4px; }
        .kr-success p { font-size: 13px; color: var(--kr-text2); margin: 0; }

        /* ── SEO Content Section ── */
        .kr-seo { max-width: 960px; margin: 0 auto; padding: 48px 24px 64px; }
        .kr-seo-header { text-align: center; margin-bottom: 40px; }
        .kr-seo-header h2 { font-size: 26px; font-weight: 500; letter-spacing: -0.3px; margin: 0 0 8px; }
        .kr-seo-header p { font-size: 15px; color: var(--kr-text2); margin: 0; max-width: 600px; margin: 0 auto; }

        .kr-factors { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 48px; }
        @media (max-width: 768px) { .kr-factors { grid-template-columns: 1fr; } }
        .kr-factor { background: var(--kr-card); border: 1px solid var(--kr-border); border-radius: var(--kr-radius-lg); padding: 20px; }
        .kr-factor-num { font-size: 28px; font-weight: 300; color: var(--kr-text3); margin-bottom: 8px; line-height: 1; }
        .kr-factor h3 { font-size: 15px; font-weight: 500; margin: 0 0 6px; }
        .kr-factor p { font-size: 13px; color: var(--kr-text2); margin: 0; line-height: 1.5; }

        .kr-prose { max-width: 680px; margin: 0 auto 48px; }
        .kr-prose h2 { font-size: 22px; font-weight: 500; margin: 0 0 16px; letter-spacing: -0.3px; }
        .kr-prose h3 { font-size: 17px; font-weight: 500; margin: 24px 0 8px; }
        .kr-prose p { font-size: 14px; color: var(--kr-text2); margin: 0 0 12px; line-height: 1.7; }
        .kr-prose a { color: var(--kr-blue); text-decoration: none; }
        .kr-prose a:hover { text-decoration: underline; }

        .kr-use-cases { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 48px; }
        @media (max-width: 640px) { .kr-use-cases { grid-template-columns: 1fr; } }
        .kr-use-case { background: var(--kr-card); border: 1px solid var(--kr-border); border-radius: var(--kr-radius-lg); padding: 20px; }
        .kr-use-case h3 { font-size: 15px; font-weight: 500; margin: 0 0 6px; }
        .kr-use-case p { font-size: 13px; color: var(--kr-text2); margin: 0; line-height: 1.5; }

        .kr-faq { max-width: 680px; margin: 0 auto; }
        .kr-faq-item { border-bottom: 1px solid var(--kr-border); }
        .kr-faq-q { width: 100%; padding: 16px 0; display: flex; justify-content: space-between; align-items: center; background: none; border: none; cursor: pointer; text-align: left; font-family: inherit; font-size: 14px; font-weight: 500; color: var(--kr-text); }
        .kr-faq-q svg { transition: transform 0.2s; flex-shrink: 0; }
        .kr-faq-q.open svg { transform: rotate(180deg); }
        .kr-faq-a { font-size: 13px; color: var(--kr-text2); line-height: 1.7; padding: 0 0 16px; margin: 0; }

        .kr-divider { width: 48px; height: 2px; background: var(--kr-border); margin: 0 auto 32px; border-radius: 1px; }
      `}</style>

      {/* ── HERO ── */}
      <header className="kr-hero">
        <h1>Was kostet Ihr 3D-Druck?</h1>
        <p>STL-Datei hochladen, Material wählen — Richtpreis in Echtzeit. Verbindliches Festpreisangebot in 6 Stunden.</p>
        <div className="kr-trust-bar">
          <span className="kr-trust-pill">&#9733; 5,0 Google (31)</span>
          <span className="kr-trust-pill">Ab € 20 pro Teil</span>
          <span className="kr-trust-pill">Express 24 – 48 h</span>
          <span className="kr-trust-pill">AT Filament</span>
        </div>
      </header>

      {/* ── CALCULATOR ── */}
      <div className="kr-main" id="calculator">
        {/* LEFT: Config */}
        <div>
          <div className="kr-card" style={{ marginBottom: 16 }}>
            {/* Upload zone */}
            {parts.length <= 1 && !parts[0]?.fileName && (
              <>
                <span className="kr-label">Datei hochladen</span>
                <div
                  ref={dropRef}
                  className={`kr-drop${dragOver ? " active" : ""}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                >
                  <UploadIcon />
                  <h3>STL-Dateien hierher ziehen oder klicken</h3>
                  <p>Binär & ASCII · max. 100 MB · Mehrere Dateien möglich</p>
                </div>
                <p style={{ fontSize: 12, color: "var(--kr-text3)", marginTop: 6, textAlign: "center" }}>
                  Ohne Datei wird mit einem Standardwürfel (50 × 50 × 50 mm) kalkuliert.
                </p>
              </>
            )}

            {/* File list */}
            {(parts.length > 1 || parts[0]?.fileName) && (
              <div className="kr-files">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span className="kr-label" style={{ marginBottom: 0 }}>
                    {parts.length} {parts.length === 1 ? "Teil" : "Teile"} konfiguriert
                  </span>
                </div>

                {parts.map((p, i) => {
                  const calc = calculatePrice(p);
                  const mat = MATERIALS.find(m => m.id === p.materialId);
                  return (
                    <div
                      key={p.id}
                      className={`kr-file-row${i === activePart ? " sel" : ""}`}
                      onClick={() => setActivePart(i)}
                    >
                      <div style={{ color: mat?.color || "var(--kr-text3)" }}><FileIcon /></div>
                      <div className="kr-file-info">
                        <div className="kr-file-name">{p.fileName || `Teil ${i + 1} (Standard)`}</div>
                        <div className="kr-file-meta">
                          {Math.round(p.geometry.volume)} cm³ — {Math.round(p.geometry.dims.x)}×{Math.round(p.geometry.dims.y)}×{Math.round(p.geometry.dims.z)} mm · {mat?.name}
                        </div>
                      </div>
                      <span className="kr-file-badge" style={{ background: `${mat?.color}15`, color: mat?.color }}>
                        {p.qty}×
                      </span>
                      <span className="kr-file-price">€ {(calc.partPrice * p.qty).toFixed(2)}</span>
                      {parts.length > 1 && (
                        <button className="kr-file-del" onClick={(e) => { e.stopPropagation(); removePart(i); }}><TrashIcon /></button>
                      )}
                    </div>
                  );
                })}

                {pricing.discountPct > 0 && (
                  <div className="kr-discount-badge">
                    <CheckIcon />
                    <span>Mengenvorteil: {pricing.discountPct} % auf {pricing.totalQty} Teile</span>
                  </div>
                )}

                <div className="kr-file-actions">
                  <button onClick={() => fileInputRef.current?.click()}>+ STL hochladen</button>
                  <button onClick={addEmptyPart}>+ Ohne Datei</button>
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".stl"
              multiple
              style={{ display: "none" }}
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>

          {/* Material */}
          <div className="kr-card" style={{ marginBottom: 16 }}>
            <span className="kr-label">Material{parts.length > 1 ? ` für ${currentPart.fileName || `Teil ${activePart + 1}`}` : ""}</span>
            <div className="kr-mat-grid">
              {MATERIALS.map(m => (
                <div
                  key={m.id}
                  className={`kr-mat${currentPart.materialId === m.id ? " sel" : ""}`}
                  onClick={() => updatePart("materialId", m.id)}
                >
                  <div className="kr-mat-head">
                    <span className="kr-mat-dot" style={{ background: m.color }} />
                    <span className="kr-mat-name">{m.name}</span>
                  </div>
                  <div className="kr-mat-desc">{m.label}</div>
                  <div className="kr-mat-price">ab {m.price} €/kg</div>
                </div>
              ))}
            </div>

            {/* Quality */}
            <span className="kr-label">Qualitätsstufe</span>
            <div className="kr-qual-row">
              {QUALITIES.map(q => (
                <div
                  key={q.id}
                  className={`kr-qual${currentPart.qualityId === q.id ? " sel" : ""}`}
                  onClick={() => updatePart("qualityId", q.id)}
                >
                  <div className="kr-qual-name">{q.name}</div>
                  <div className="kr-qual-desc">{q.layer} mm · {q.desc}</div>
                </div>
              ))}
            </div>

            {/* Quantity */}
            <span className="kr-label">Stückzahl</span>
            <div className="kr-qty-row">
              <button className="kr-qty-btn" onClick={() => updatePart("qty", Math.max(1, currentPart.qty - 1))}>−</button>
              <span className="kr-qty-val">{currentPart.qty}</span>
              <button className="kr-qty-btn" onClick={() => updatePart("qty", currentPart.qty + 1)}>+</button>
              <span style={{ fontSize: 12, color: "var(--kr-text3)" }}>
                {currentPart.qty >= 10 && `Mengenvorteil ab 10 Stück`}
              </span>
            </div>

            {/* Advanced */}
            <button className="kr-adv-toggle" onClick={() => setShowAdvanced(!showAdvanced)}>
              <span style={{ transform: showAdvanced ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-flex" }}><ChevronDown /></span>
              Erweiterte Parameter
            </button>
            {showAdvanced && (
              <div className="kr-adv-panel">
                <div>
                  <label className="kr-adv-label">Infill (Füllung)</label>
                  <div className="kr-adv-slider">
                    <input type="range" min="10" max="100" step="5" value={currentPart.infill} onChange={(e) => updatePart("infill", parseInt(e.target.value))} />
                    <span>{currentPart.infill} %</span>
                  </div>
                </div>
                <div>
                  <label className="kr-adv-label">Wandstärke</label>
                  <div className="kr-adv-slider">
                    <input type="range" min="1" max="5" step="1" value={currentPart.wallThickness} onChange={(e) => updatePart("wallThickness", parseInt(e.target.value))} />
                    <span>{currentPart.wallThickness} mm</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Price */}
        <div className="kr-price-card">
          <div className="kr-card">
            <span className="kr-label">Ihr Richtpreis</span>
            <div className="kr-price-amount">
              <div className="kr-price-num">€ {pricing.total.toFixed(2)}</div>
              <div className="kr-price-note">
                {pricing.totalQty > 1 ? `${pricing.totalQty} Teile · ` : ""}exkl. MwSt. & Nachbearbeitung
              </div>
            </div>

            <div className="kr-breakdown">
              {parts.length === 1 ? (
                <>
                  <div className="kr-bk-line"><span>Material ({MATERIALS.find(m => m.id === currentPart.materialId)?.name}, {pricing.lineItems[0]?.weightG} g)</span><span>€ {pricing.lineItems[0]?.materialCost.toFixed(2)}</span></div>
                  <div className="kr-bk-line"><span>Druckzeit (~{pricing.lineItems[0]?.printTimeH} h)</span><span>€ {pricing.lineItems[0]?.printCost.toFixed(2)}</span></div>
                  {pricing.lineItems[0]?.sizeSurcharge > 0 && (
                    <div className="kr-bk-line"><span>Größenzuschlag</span><span>€ {pricing.lineItems[0]?.sizeSurcharge.toFixed(2)}</span></div>
                  )}
                  <div className="kr-bk-line"><span>Setup-Pauschale</span><span>€ {SETUP_FEE.toFixed(2)}</span></div>
                  {currentPart.qty > 1 && (
                    <div className="kr-bk-line"><span>× {currentPart.qty} Stück</span><span>€ {pricing.lineItems[0]?.subtotal.toFixed(2)}</span></div>
                  )}
                </>
              ) : (
                <>
                  {parts.map((p, i) => (
                    <div key={p.id} className="kr-bk-line">
                      <span>{p.fileName?.replace(/\.stl$/i, "") || `Teil ${i + 1}`} ({p.qty}×)</span>
                      <span>€ {pricing.lineItems[i]?.subtotal.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="kr-bk-line"><span>Setup-Pauschale</span><span>€ {SETUP_FEE.toFixed(2)}</span></div>
                </>
              )}
              {pricing.discountPct > 0 && (
                <div className="kr-bk-line kr-bk-discount"><span>Mengenvorteil ({pricing.discountPct} %)</span><span>− € {pricing.discountAmount.toFixed(2)}</span></div>
              )}
              <div className="kr-bk-total"><span>Richtpreis {pricing.totalQty > 1 ? `(${pricing.totalQty} Teile)` : ""}</span><span>€ {pricing.total.toFixed(2)}</span></div>
            </div>

            {/* CTA or Form */}
            {formSubmitted ? (
              <div className="kr-success">
                <h3>Anfrage gesendet</h3>
                <p>Wir melden uns innerhalb von 6 Stunden mit Ihrem persönlichen Festpreisangebot.</p>
              </div>
            ) : showContactForm ? (
              <div className="kr-form">
                <input placeholder="Name *" value={contactForm.name} onChange={(e) => setContactForm(f => ({ ...f, name: e.target.value }))} />
                <input placeholder="E-Mail *" type="email" value={contactForm.email} onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))} />
                <input placeholder="Telefon (optional)" value={contactForm.phone} onChange={(e) => setContactForm(f => ({ ...f, phone: e.target.value }))} />
                <textarea placeholder="Anmerkungen zum Projekt (optional)" value={contactForm.message} onChange={(e) => setContactForm(f => ({ ...f, message: e.target.value }))} />
                <button
                  className="kr-cta"
                  onClick={() => {
                    if (contactForm.name && contactForm.email) setFormSubmitted(true);
                  }}
                  disabled={!contactForm.name || !contactForm.email}
                  style={{ opacity: (!contactForm.name || !contactForm.email) ? 0.5 : 1 }}
                >
                  Unverbindliches Angebot anfordern
                </button>
                <button
                  onClick={() => setShowContactForm(false)}
                  style={{ display: "block", margin: "8px auto 0", background: "none", border: "none", fontSize: 12, color: "var(--kr-text3)", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Zurück
                </button>
              </div>
            ) : (
              <>
                <button className="kr-cta" onClick={() => setShowContactForm(true)}>
                  Unverbindliches Angebot anfordern
                </button>
                <p className="kr-cta-sub">Persönliche Prüfung — Antwort in 6 h — kein Account nötig</p>
              </>
            )}

            <div className="kr-trust-grid">
              <span className="kr-trust-item"><ShieldIcon /> Datei bleibt lokal</span>
              <span className="kr-trust-item"><BoltIcon /> Express 24 – 48 h</span>
              <span className="kr-trust-item"><MapIcon /> Gunskirchen, OÖ</span>
              <span className="kr-trust-item"><LeafIcon /> AT Filament</span>
            </div>
          </div>

          <div className="kr-contact">
            <span>Oder direkt:</span>
            <a href="https://wa.me/436765517197" target="_blank" rel="noopener">WhatsApp</a>
            <a href="tel:+436765517197">Anrufen</a>
            <a href="https://cal.com/kevin-eppensteiner-nktcfi/15min" target="_blank" rel="noopener">15-Min-Termin</a>
          </div>
        </div>
      </div>

      {/* ── SEO CONTENT ── */}
      <section className="kr-seo">
        <div className="kr-seo-header">
          <h2>3D-Druck Kosten berechnen — transparent & fair</h2>
          <p>
            5 Faktoren bestimmen den Preis Ihres Modells. So kalkulieren wir — und so behalten Sie die Kontrolle.
          </p>
        </div>

        <div className="kr-factors">
          <div className="kr-factor">
            <div className="kr-factor-num">01</div>
            <h3>Materialverbrauch</h3>
            <p>Der wichtigste Kostentreiber: Volumen × Infill × Materialpreis. PLA beginnt bei 25 €/kg, PA6-CF mit Carbonfaser bei 120 €/kg. Ein Modell mit 15 % Infill verbraucht deutlich weniger als eines mit voller Füllung.</p>
          </div>
          <div className="kr-factor">
            <div className="kr-factor-num">02</div>
            <h3>Druckzeit</h3>
            <p>Je länger der FDM-Drucker arbeitet, desto höher die Kosten. Die Druckzeit hängt von Volumen, Geometriekomplexität, Schichtdicke und Bauhöhe ab. Premium-Qualität (0,08 mm) dauert rund 55 % länger als Standard.</p>
          </div>
          <div className="kr-factor">
            <div className="kr-factor-num">03</div>
            <h3>Baugröße</h3>
            <p>Große Modelle ab 170 mm Ausdehnung erhalten einen Zuschlag. Grund: mehr Plattenbelegung, längere Aufwärmphase und erhöhtes Fehlerrisiko. Ab 260 mm kalkulieren wir mit einem höheren Stundensatz.</p>
          </div>
          <div className="kr-factor">
            <div className="kr-factor-num">04</div>
            <h3>Setup & Vorbereitung</h3>
            <p>Jedes Projekt wird manuell vorbereitet: Slicing, Druckoptimierung, Bauteilorientierung und Qualitätskontrolle. Die Setup-Pauschale von 12,99 € deckt diese persönliche technische Prüfung ab.</p>
          </div>
          <div className="kr-factor">
            <div className="kr-factor-num">05</div>
            <h3>Nachbearbeitung</h3>
            <p>Stützstrukturen entfernen, Oberflächen glätten oder lackieren: Diese Arbeiten werden separat kalkuliert. Im Festpreisangebot sind alle relevanten Nachbearbeitungsschritte transparent aufgeschlüsselt.</p>
          </div>
          <div className="kr-factor">
            <div className="kr-factor-num">+</div>
            <h3>Mengenvorteil</h3>
            <p>Ab 10 Teilen 5 %, ab 25 Teilen 7 %, ab 50 Teilen 8 %, ab 100 Teilen 10 % Rabatt. Ideal für Messemodelle in Serie, Schulungsmodelle oder Projektmengen bei Architekturwettbewerben.</p>
          </div>
        </div>

        <div className="kr-divider" />

        {/* Use cases */}
        <div className="kr-seo-header">
          <h2>Für wen ist der 3D-Druck Kostenrechner?</h2>
        </div>
        <div className="kr-use-cases">
          <div className="kr-use-case">
            <h3>Architektur & Planung</h3>
            <p>Sofortige Kosteneinschätzung für maßstabsgetreue Architekturmodelle und städtebauliche Studien. Ob Wettbewerbsmodell im Maßstab 1:200 oder Detailmodell 1:50 — der Rechner kalkuliert auf Basis der realen STL-Geometrie. Typische Materialien: PLA für Innenmodelle, PETG für Kundenpräsentationen mit höherer Robustheit.</p>
          </div>
          <div className="kr-use-case">
            <h3>Messe & Ausstellung</h3>
            <p>Budgetplanung für 3D-gedruckte Messemodelle und Standexponate — auch in größeren Auflagen. Ob Produktreplik, Schnittmodell oder dreidimensionale Infografik: Wir beraten bei Materialwahl und Oberflächenfinish. Für den Außenbereich empfehlen wir ASA oder PETG als UV-beständige Materialien.</p>
          </div>
          <div className="kr-use-case">
            <h3>Design & Produktentwicklung</h3>
            <p>Richtpreise für haptische Designstudien, Formentwürfe und Proportionsmodelle. PA6-CF mit Carbonfaser für Premium-Look und Ultraleichtbau, TPU für flexible und biegbare Modelle. Ideal in der frühen Designphase zur Validierung von Form, Oberfläche und Haptik.</p>
          </div>
          <div className="kr-use-case">
            <h3>Schulung & Lehre</h3>
            <p>Transparente Preisübersicht für Lehr- und Schulungsmodelle — ideal bei größeren Projektmengen für Klassen, Kurse oder Workshops. Mengenvorteile machen auch Serien ab 10 Stück wirtschaftlich attraktiv für Bildungseinrichtungen und Akademien.</p>
          </div>
        </div>

        <div className="kr-divider" />

        {/* Long-form SEO prose */}
        <div className="kr-prose">
          <h2>3D-Druck Preise in Österreich — was kosten Modelle wirklich?</h2>
          <p>
            Die Frage „Was kostet ein 3D-Druck?" steht am Anfang jedes Projekts. Anders als bei standardisierten Fertigungsverfahren hängen die 3D-Druck Kosten von zahlreichen Faktoren ab, die sich gegenseitig beeinflussen: Modellgröße, Materialwahl, Druckqualität, Geometriekomplexität und gewünschte Stückzahl.
            Unser Online-Kostenrechner analysiert die tatsächliche Geometrie Ihrer STL-Datei direkt in Ihrem Browser und berechnet daraus einen fundierten Richtpreis — kostenlos, ohne Anmeldung und in Echtzeit.
          </p>

          <h3>Warum kein Sofortkauf? Warum persönliche Prüfung?</h3>
          <p>
            Viele 3D-Druck Dienstleister bieten vollautomatisierte Bestellprozesse an. Bei ekdruck haben wir uns bewusst dagegen entschieden — aus Qualitätsgründen. Nicht jedes 3D-Modell ist ohne weiteres druckbar. Überhänge, zu dünne Wandstärken oder geschlossene Hohlräume verursachen Probleme, die kein Algorithmus zuverlässig erkennt.
            Die Bauteilorientierung auf der Druckplatte beeinflusst Oberfläche, Stabilität und Stützstruktur-Aufwand erheblich. Auch die Materialwahl — ob PLA, PETG, ABS oder Carbon — hängt vom Einsatzzweck, den Umgebungsbedingungen und ästhetischen Anforderungen ab. Das klären wir im persönlichen Gespräch.
          </p>

          <h3>FDM 3D-Druck: Das Verfahren hinter unseren Modellen</h3>
          <p>
            Wir arbeiten ausschließlich mit FDM-Technologie (Fused Deposition Modeling), dem bewährtesten additiven Fertigungsverfahren für großformatige Präsentationsmodelle. Thermoplastisches Filament wird schichtweise aufgetragen und verschmilzt zu einem stabilen Objekt. Unsere Drucker erreichen Schichtauflösungen bis 0,08 mm für feinste Detailtreue.
            Das Ergebnis: maßstabsgetreue <a href="/architekturmodelle">Architekturmodelle</a>, überzeugende <a href="/messemodelle">Messemodelle</a> und hochwertige Designstudien — gefertigt aus nachhaltigen Materialien österreichischer Produktion.
          </p>

          <h3>3D-Druck aus Oberösterreich — persönlich, regional, verlässlich</h3>
          <p>
            ekdruck fertigt in Gunskirchen (Bezirk Wels-Land) mit 100 % österreichischem Filament aus recycelten Industrieabfällen. Der Standort ermöglicht persönliche Beratung vor Ort, kurze Lieferwege und flexible Terminabsprachen. Wir versenden versichert per Post in ganz Österreich — nach <a href="/3d-druck-wien">Wien</a>, <a href="/3d-druck-linz">Linz</a>, <a href="/3d-druck-graz">Graz</a>, <a href="/3d-druck-salzburg">Salzburg</a>, <a href="/3d-druck-innsbruck">Innsbruck</a> und alle weiteren Bundesländer.
          </p>
        </div>

        <div className="kr-divider" />

        {/* FAQ */}
        <div className="kr-seo-header">
          <h2>Häufige Fragen zum 3D-Druck Kostenrechner</h2>
        </div>
        <div className="kr-faq">
          {faqs.map((faq, i) => (
            <div key={i} className="kr-faq-item">
              <button className={`kr-faq-q${expandedFaq === i ? " open" : ""}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                {faq.q}
                <ChevronDown />
              </button>
              {expandedFaq === i && <p className="kr-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
