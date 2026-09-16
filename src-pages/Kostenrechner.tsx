'use client'

import { useState, useCallback, useRef, useEffect } from "react";
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
import { trackLeadConversion } from "@/lib/consent";
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
import { holeHerkunft } from "@/lib/attribution";
import FotoMarquee from "@/components/FotoMarquee";
import { pruefeRabatt, mitRabatt, rabattZeile, RABATT_PROZENT } from "@/lib/studentenrabatt";

// ─── MATERIAL UI META ────────────────────────────────────────────
// Texte bewusst auf Optik/Einsatzzweck, keine Festigkeits-Versprechen (WKO-Wortliste, 16.09.)
const MATERIAL_META: Record<string, { desc: string; color: string; colorBg: string }> = {
  PLA:      { desc: "Glatte Oberfläche, ideal für Präsentationsmodelle", color: "text-blue-600", colorBg: "bg-blue-500" },
  "PLA+":   { desc: "Verstärktes PLA mit satterer Oberfläche", color: "text-indigo-600", colorBg: "bg-indigo-500" },
  PETG:     { desc: "UV-stabil, perfekt für Messemodelle", color: "text-emerald-600", colorBg: "bg-emerald-500" },
  ABS:      { desc: "Glätt- und lackierbar für Ausstellungsobjekte", color: "text-amber-600", colorBg: "bg-amber-500" },
  ASA:      { desc: "Wetterfest & UV-beständig für den Außenbereich", color: "text-cyan-600", colorBg: "bg-cyan-500" },
  TPU:      { desc: "Weiche, gummiartige Haptik", color: "text-rose-600", colorBg: "bg-rose-500" },
  "PA6-CF": { desc: "Carbon-Look, ultraleicht, Premium-Showmodelle", color: "text-slate-700", colorBg: "bg-slate-800" },
  PC:       { desc: "Technische Optik für Premium-Showobjekte", color: "text-violet-600", colorBg: "bg-violet-500" },
};

/** Die drei Materialien, die real fast jede Anfrage abdecken — Rest hinter Aufklapper (16.09.) */
const HAUPT_MATERIALIEN = ["PLA", "PETG", "ASA"];

/** Echte Google-Rezensionen (aus GoogleReviewsSection-Bestand, 5,0★).
 *  Silvio T. bewusst ausgelassen („exakter Clone") — WKO-Außenwirkung. */
const REVIEW_ZITATE = [
  { text: "Die Qualität ist erstklassig, jedes Detail wird sehr detailgetreu und sauber umgesetzt.", autor: "Christian Steller" },
  { text: "Sehr schnelle Abwicklung, Kommunikation war ausgezeichnet.", autor: "Klaus F." },
  { text: "Mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen.", autor: "Hannah E." },
  { text: "Antwortet schnell, Preis-Leistung extrem fair. Empfehlenswert!", autor: "Simone G." },
];

/** Rotierende Beispiele in der Dropzone — zeigt, was hier gedruckt wird (16.09.) */
const DRUCK_BEISPIELE = [
  "ein Architekturmodell 1:500",
  "ein Messemodell in Firmenfarben",
  "dein Abgabemodell für die Uni",
  "eine Statue in Museumsqualität",
  "einen Designprototyp",
  "ein Geländemodell mit Höhenlinien",
  "170 Stück für den Messestand",
];

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
  { question: "Was kostet ein 3D-Druck Modell bei ekdruck?", answer: "Die 3D-Druck Kosten beginnen ab €20 pro Teil. Der genaue Preis hängt von Modellgröße, Material und Qualitätsstufe ab. Nutzen Sie unseren Online-Kostenrechner für eine sofortige Richtpreisberechnung, kostenlos und ohne Anmeldung. Für jedes Projekt erstellen wir ein persönlich geprüftes Festpreisangebot innerhalb von 6 Stunden." },
  { question: "Wie genau ist der Richtpreis aus dem Kostenrechner?", answer: "Der Richtpreis basiert auf der realen Geometrie Ihrer STL-Datei und berücksichtigt Materialverbrauch, Druckzeit, Baugröße und Setup-Aufwand. Typische Abweichung zum Endpreis: ±10 bis 15 %. Der verbindliche Festpreis wird nach persönlicher technischer Prüfung festgelegt und per E-Mail zugesendet." },
  { question: "Welche Dateiformate werden unterstützt?", answer: "Aktuell unterstützen wir STL-Dateien bis 100 MB. Die Datei wird direkt im Browser analysiert – Volumen, Oberfläche und Maße werden automatisch berechnet. Beim Absenden einer Anfrage werden Ihre Dateien sicher an uns übertragen, damit wir das Festpreisangebot direkt anhand der Originaldaten erstellen können. Für andere Formate (OBJ, STEP, 3MF) kontaktieren Sie uns bitte direkt." },
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
  // v2 (Kevin, 16.09.): ohne Datei kein Rechner — Start ist leer, kein Standardwürfel.
  const [parts, setParts] = useState<PartState[]>([]);
  const [activePart, setActivePart] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showAllMaterials, setShowAllMaterials] = useState(false);
  const [showMoreFields, setShowMoreFields] = useState(false);
  const [showRabatt, setShowRabatt] = useState(false);
  // Rotierendes Druck-Beispiel in der Dropzone (Leerzustand)
  const [beispiel, setBeispiel] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBeispiel((b) => (b + 1) % DRUCK_BEISPIELE.length), 2400);
    return () => clearInterval(t);
  }, []);
  // Rotierendes Google-Zitat unter dem Werkstatt-Band
  const [zitat, setZitat] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setZitat((z) => (z + 1) % REVIEW_ZITATE.length), 5000);
    return () => clearInterval(t);
  }, []);
  // Autofill-Fallback (siehe Contact.tsx): Browser füllen Felder teils ohne React-Events.
  // Deshalb Submit-Button nie an den State koppeln und beim Absenden DOM-Werte mergen.
  const kfNameRef = useRef<HTMLInputElement>(null);
  const kfEmailRef = useRef<HTMLInputElement>(null);
  const kfCompanyRef = useRef<HTMLInputElement>(null);
  const kfPhoneRef = useRef<HTMLInputElement>(null);
  const kfMessageRef = useRef<HTMLTextAreaElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", company: "", phone: "", message: "" , rabattcode: "" });
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hatDateien = parts.length > 0;
  const current = parts[activePart] || parts[0];
  const partResults = parts.map(calcPart);
  const totalNet = partResults.reduce((s, r) => s + r.finalNet, 0);
  const totalQty = parts.reduce((s, p) => s + p.qty, 0);
  const totalPrintTime = partResults.reduce((s, r) => s + r.printTimeMin, 0);
  const currentResult = partResults[activePart] || partResults[0];
  const geo = current ? getGeo(current) : null;

  // ── File handling ──
  const handleFiles = useCallback(async (files: FileList | File[]) => {
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
        // v2: kein Würfel-Fallback mehr — Datei ohne lesbare Geometrie wird nicht kalkuliert
        toast.error(`${file.name} konnte nicht gelesen werden. Bitte als Binär-STL exportieren oder direkt per Kontaktformular schicken.`);
      }
    }
    if (newParts.length === 0) return;

    // Funnel-Messung (16.09.): Upload-Event, damit Upload→Submit auswertbar wird
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "kostenrechner_upload",
      file_count: newParts.length,
      demo: newParts.some(p => p.fileName?.startsWith("Beispielmodell")),
    });

    setParts(prev => {
      setActivePart(prev.length);
      return [...prev, ...newParts];
    });
  }, []);

  // ── Beispielmodell (16.09.): Flow ohne eigene Datei erlebbar machen ──
  const ladeBeispiel = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch("/demo/beispielmodell.stl");
      if (!res.ok) throw new Error(String(res.status));
      const buf = await res.arrayBuffer();
      const file = new File([buf], "Beispielmodell-Haus.stl", { type: "model/stl" });
      handleFiles([file]);
    } catch {
      toast.error("Beispielmodell konnte nicht geladen werden. Bitte eigene STL hochladen.");
    }
  }, [handleFiles]);

  // ── Drop überall (16.09.): Datei irgendwo auf der Seite loslassen ──
  const [seitenDrag, setSeitenDrag] = useState(false);
  const dragZaehler = useRef(0);
  useEffect(() => {
    const hatFiles = (e: DragEvent) => !!e.dataTransfer?.types?.includes("Files");
    const enter = (e: DragEvent) => { if (!hatFiles(e)) return; e.preventDefault(); dragZaehler.current++; setSeitenDrag(true); };
    const over = (e: DragEvent) => { if (hatFiles(e)) e.preventDefault(); };
    const leave = (e: DragEvent) => { if (!hatFiles(e)) return; dragZaehler.current = Math.max(0, dragZaehler.current - 1); if (dragZaehler.current === 0) setSeitenDrag(false); };
    const drop = (e: DragEvent) => {
      if (!hatFiles(e)) return;
      dragZaehler.current = 0;
      setSeitenDrag(false);
      // Wenn die Dropzone selbst den Drop schon verarbeitet hat (preventDefault), nicht doppelt hinzufügen
      if (e.defaultPrevented) return;
      e.preventDefault();
      if (e.dataTransfer?.files?.length) handleFiles(e.dataTransfer.files);
    };
    window.addEventListener("dragenter", enter);
    window.addEventListener("dragover", over);
    window.addEventListener("dragleave", leave);
    window.addEventListener("drop", drop);
    return () => {
      window.removeEventListener("dragenter", enter);
      window.removeEventListener("dragover", over);
      window.removeEventListener("dragleave", leave);
      window.removeEventListener("drop", drop);
    };
  }, [handleFiles]);

  // ── Preis-Pop (16.09.): Zahl reagiert sichtbar auf jede Konfig-Änderung ──
  const [preisPop, setPreisPop] = useState(0);
  const vorherigerPreis = useRef(totalNet);
  useEffect(() => {
    if (hatDateien && vorherigerPreis.current !== totalNet) setPreisPop(k => k + 1);
    vorherigerPreis.current = totalNet;
  }, [totalNet, hatDateien]);

  const updatePart = (key: keyof PartState, value: any) => {
    setParts(prev => prev.map((p, i) => i === activePart ? { ...p, [key]: value } : p));
  };

  const removePart = (idx: number) => {
    // v2: auch das letzte Teil darf entfernt werden — dann zurück zum leeren Upload-Zustand
    setParts(prev => prev.filter((_, i) => i !== idx));
    setActivePart(a => Math.max(0, Math.min(a, parts.length - 2)));
  };

  // ── Submit ──
  const handleSubmit = async () => {
    const merged = {
      name: kfNameRef.current?.value ?? contactForm.name,
      email: kfEmailRef.current?.value ?? contactForm.email,
      company: kfCompanyRef.current?.value ?? contactForm.company,
      phone: kfPhoneRef.current?.value ?? contactForm.phone,
      message: kfMessageRef.current?.value ?? contactForm.message,
      rabattcode: contactForm.rabattcode,
    };
    if (JSON.stringify(merged) !== JSON.stringify(contactForm)) setContactForm(merged);
    const contactData = merged;
    if (!contactData.name.trim() || !contactData.email.trim()) {
      toast.error("Bitte Name und E-Mail angeben.");
      return;
    }
    setIsSubmitting(true);
    try {
      // STL-Dateien wie im Kontaktformular in den Storage laden (Bucket: contact-files).
      // Best effort: ein fehlgeschlagener Upload (z. B. zu groß) darf die Anfrage nicht blockieren.
      const partFiles = parts.map(p => p.file).filter((f): f is File => f instanceof File);
      const fileUrls: string[] = [];
      const failedUploads: string[] = [];
      const lastName = contactData.name.trim().split(" ").pop() || "Unbekannt";
      for (let i = 0; i < partFiles.length; i++) {
        const file = partFiles[i];
        const fileExt = file.name.split(".").pop();
        const fileNumber = partFiles.length > 1 ? `-${i + 1}` : "";
        const filePath = `contact-files/${Date.now()}-${lastName}${fileNumber}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from("contact-files").upload(filePath, file);
        if (uploadError) {
          console.error("Kostenrechner upload failed:", file.name, uploadError);
          failedUploads.push(`${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)`);
        } else {
          fileUrls.push(filePath);
        }
      }

      const rabatt = pruefeRabatt(contactData.email, contactData.rabattcode);
      const configLines = parts.map((p, i) =>
        `- ${p.fileName || `Teil ${i + 1} (Standard)`} · ${p.materialKey} · ${p.layerHeight} mm · Infill ${p.infillPercent}% · Wand ${p.wallThickness.toFixed(1)} mm · ${p.qty}× · ${fmt(partResults[i]?.finalNet ?? 0)}`
      ).join("\n");
      const message = [
        "Kostenrechner-Anfrage",
        contactData.company ? `Firma: ${contactData.company}` : null,
        contactData.phone ? `Telefon: ${contactData.phone}` : null,
        `Gesamt-Richtpreis: ${fmt(totalNet)} exkl. MwSt. (${totalQty} ${totalQty === 1 ? "Teil" : "Teile"})`,
        rabatt.berechtigt ? `Nach Studentenrabatt: ${fmt(mitRabatt(totalNet, rabatt))} exkl. MwSt.` : null,
        rabattZeile(rabatt),
        "",
        "Konfiguration:",
        configLines,
        contactData.message ? `\nAnmerkungen:\n${contactData.message}` : null,
        failedUploads.length ? `\nNicht übertragene Dateien (Upload fehlgeschlagen, bitte per E-Mail anfordern): ${failedUploads.join(", ")}` : null,
      ].filter(Boolean).join("\n");

      const { error } = await supabase.from("contact_inquiries").insert({
        name: contactData.name,
        email: contactData.email,
        project_type: "Kostenrechner-Anfrage",
        message,
        file_urls: fileUrls.length > 0 ? fileUrls : null,
        status: "new",
        ...holeHerkunft(),
      });
      if (error) throw error;
      // Conversion-Event (analog components/Contact.tsx) — Kostenrechner-Leads messbar machen
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'form_submit_success', form_name: 'kostenrechner_anfrage', project_type: 'Kostenrechner-Anfrage', timeline: 'nicht angegeben' });
      (window as any).dataLayer.push({ event: 'contact_channel_click', contact_channel: 'form', contact_source: 'kostenrechner', contact_context: 'kostenrechner', conversion: true });
      trackLeadConversion("kostenrechner");
      setFormSubmitted(true);
      toast.success("Anfrage erfolgreich gesendet!");
    } catch (err) {
      console.error("Kostenrechner submit failed:", err);
      toast.error("Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Drop-überall-Overlay: erscheint, sobald eine Datei über dem Fenster hängt */}
      {seitenDrag && (
        <div className="fixed inset-0 z-[200] bg-primary/10 backdrop-blur-sm flex items-center justify-center pointer-events-none">
          <div className="bg-background border-2 border-dashed border-primary rounded-2xl px-10 py-8 text-center shadow-2xl">
            <Upload className="w-10 h-10 text-primary mx-auto mb-3 animate-schweben" />
            <p className="text-2xl font-bold tracking-tight">Loslassen, wir rechnen.</p>
            <p className="text-sm text-muted-foreground mt-1">STL-Datei einfach irgendwo fallen lassen</p>
          </div>
        </div>
      )}
      <SEOHead
        title="3D-Druck Kosten berechnen – Richtpreis in 60 Sek. | ★5,0"
        description="STL hochladen → Richtpreis sofort. Mehrere Teile kalkulieren. Kein Account nötig. Angebot in 6h · ab €20 · ★5,0 (35 Bewertungen) | ekdruck"
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
        {/* v2 (Kevin, 16.09.): Hero kompakt — der Rechner beginnt im ersten Viewport,
            keine button-artigen Badges mehr (Dead-Click-Quelle lt. Clarity) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/6 via-background to-background pt-10 pb-6 md:pt-14 md:pb-8">
          <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 tracking-tight leading-[1.1]">
              3D drucken lassen – <span className="text-primary">Kosten in 60 Sekunden</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              STL hochladen, Material wählen, Richtpreis sofort. Festpreisangebot in 6 Stunden.
            </p>
            <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mt-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-primary" /> 5,0 ★ Google (35)</span>
              <span className="inline-flex items-center gap-1"><Package className="h-3.5 w-3.5 text-primary" /> Ab €20 pro Teil</span>
              <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-primary" /> Express 24–48 h</span>
              <span className="inline-flex items-center gap-1"><Leaf className="h-3.5 w-3.5 text-primary" /> AT Filament</span>
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CALCULATOR — Single-Page Layout
        ══════════════════════════════════════════════════════ */}
        <section id="calculator" className="relative overflow-hidden py-8 md:py-14 scroll-mt-20">
          {/* Grid-Hintergrund + Accent-Blobs wie Hero.tsx — füllt den Leerzustand optisch (Kevin, 16.09.) */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }} />
            <div className="absolute top-[10%] right-[8%] w-[420px] h-[420px] rounded-full bg-primary/[0.06] blur-[110px]" />
            <div className="absolute bottom-[10%] left-[5%] w-[280px] h-[280px] rounded-full bg-accent/[0.04] blur-[80px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            {!hatDateien ? (
              /* ── Leerer Zustand (Kevin, 16.09.): ohne Datei kein Rechner ── */
              <div className="max-w-3xl mx-auto">
                <AnimatedSection animation="fade-in">
                  <div className="sticker border-primary text-primary w-fit mx-auto mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Richtpreis in Echtzeit · lokal im Browser
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={100}>
                  <div className="bg-card border border-border rounded-2xl p-5 md:p-6 shadow-lg shadow-primary/5">
                    <div
                      className={`group relative border-2 border-dashed rounded-xl px-8 py-12 md:px-12 md:py-16 text-center cursor-pointer transition-all duration-300 ${dragOver ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/60 bg-muted/20"}`}
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                    >
                      {/* Schwebendes Icon mit Atem-Glow */}
                      <div className={`mx-auto mb-5 w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center animate-atmen ${dragOver ? "scale-110" : "animate-schweben"} transition-transform duration-300`}>
                        <Upload className="w-7 h-7 text-primary" />
                      </div>

                      <p className="text-xl md:text-2xl font-bold tracking-tight mb-2">
                        {dragOver ? "Loslassen, wir rechnen." : "Zieh dein Modell hier rein."}
                      </p>

                      {/* Rotierendes Beispiel — key erzwingt Re-Animation pro Wechsel */}
                      <p className="text-sm md:text-base text-muted-foreground h-6 overflow-hidden">
                        Zum Beispiel{" "}
                        <span key={beispiel} className="inline-block animate-wort-rein text-primary font-semibold">
                          {DRUCK_BEISPIELE[beispiel]}
                        </span>
                      </p>

                      <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mt-6">
                        STL · max. 100 MB · mehrere Dateien · deine Datei bleibt im Browser
                      </p>
                    </div>

                    {/* Mini-Ablauf im Site-Stil, gestaffelt einfliegend */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[
                        { nr: "01", t: "Datei reinziehen", d: "Analyse in Sekunden" },
                        { nr: "02", t: "Material wählen", d: "Preis läuft live mit" },
                        { nr: "03", t: "Angebot anfordern", d: "Fixpreis in 6 Stunden" },
                      ].map(({ nr, t, d }, i) => (
                        <AnimatedSection key={nr} animation="slide-up" delay={200 + i * 150}>
                          <div className="text-center group cursor-default">
                            <p className="mono text-2xl font-bold text-primary/25 leading-none transition-colors duration-300 group-hover:text-primary/60">{nr}</p>
                            <p className="text-xs font-semibold mt-1.5">{t}</p>
                            <p className="text-[11px] text-muted-foreground mt-0.5">{d}</p>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>

                    <div className="flex flex-col items-center gap-2 mt-6">
                      <Button variant="outline" size="sm" className="rounded-full text-xs" onClick={ladeBeispiel}>
                        <FlaskConical className="w-3.5 h-3.5 mr-1.5" />
                        Kein STL zur Hand? Beispielmodell testen
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Oder schick Pläne, Fotos oder Skizzen über das{" "}
                        <a href="/kontakt" className="text-primary font-semibold hover:underline">Kontaktformular</a>, die Datenaufbereitung übernehmen wir.
                      </p>
                    </div>
                    <input ref={fileInputRef} type="file" accept=".stl" multiple className="hidden" onChange={(e) => e.target.files && handleFiles(e.target.files)} />
                  </div>
                </AnimatedSection>

                {/* Laufendes Band echter Projekte: einheitliches Format, ruhiges Tempo */}
                <AnimatedSection animation="fade-in" delay={350}>
                  <div className="mt-10 -mx-4 md:mx-0">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 text-center mb-4">Frisch aus der Werkstatt</p>
                    <FotoMarquee />
                  </div>
                  {/* Rotierendes Google-Zitat (echte Rezensionen, 5,0★ aus 35) */}
                  <div key={zitat} className="animate-fade-slide-in mt-8 text-center px-4">
                    <div className="flex justify-center gap-0.5 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 italic max-w-xl mx-auto">
                      &bdquo;{REVIEW_ZITATE[zitat].text}&ldquo;
                    </p>
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mt-2">
                      {REVIEW_ZITATE[zitat].autor} · Google-Rezension
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            ) : (
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">

              {/* ── LEFT: Dateien + Config ── */}
              <div className="space-y-4">
                {/* File list card */}
                <div className="bg-card border border-border rounded-2xl p-5">
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
                                {g.volumeCm3.toFixed(1)} cm³, {Math.round(g.boundingBoxMm.x)}×{Math.round(g.boundingBoxMm.y)}×{Math.round(g.boundingBoxMm.z)} mm · {p.materialKey}
                              </p>
                            </div>
                            <Badge variant="secondary" className="text-[11px] font-semibold">{p.qty}×</Badge>
                            <span className="text-sm font-bold min-w-[65px] text-right">{fmt(r.finalNet)}</span>
                            <button className="p-1 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors" onClick={(e) => { e.stopPropagation(); removePart(i); }}>
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
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
                          <Plus className="w-3 h-3 mr-1" /> Weitere STL hochladen
                        </Button>
                      </div>
                    </div>
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
                    Material{parts.length > 1 ? `: ${current.fileName || `Teil ${activePart + 1}`}` : ""}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 mb-2">
                    {cfg.materialKeys
                      .filter(key => showAllMaterials || HAUPT_MATERIALIEN.includes(key) || current.materialKey === key)
                      .map(key => {
                      const meta = MATERIAL_META[key] ?? { desc: "", color: "text-gray-600", colorBg: "bg-gray-500" };
                      const sel = current.materialKey === key;
                      return (
                        <button
                          key={key}
                          className={`text-left p-2.5 rounded-xl border transition-all duration-150 ${sel ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border hover:border-muted-foreground/30 hover:shadow-sm"}`}
                          onClick={() => updatePart("materialKey", key)}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`w-2 h-2 rounded-full ${meta.colorBg}`} />
                            <span className="text-sm font-medium">{cfg.materialLabels[key] ?? key}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-snug">{meta.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-5"
                    onClick={() => setShowAllMaterials(!showAllMaterials)}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAllMaterials ? "rotate-180" : ""}`} />
                    {showAllMaterials ? "Weniger Materialien anzeigen" : `Alle ${cfg.materialKeys.length} Materialien anzeigen`}
                  </button>

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

                  {/* v2 (16.09.): keine Kalkulations-Interna mehr (Material-Gramm, Druckzeit,
                      Setup-Pauschale) — nur Richtpreis, Teileliste und Mengenvorteil */}
                  <div className="text-center py-6">
                    <p key={preisPop} className="text-5xl font-bold tracking-tight text-gradient mono animate-preis-pop">{fmt(totalNet)}</p>
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mt-3">
                      {totalQty} {totalQty === 1 ? "Teil" : "Teile"} · exkl. MwSt.
                    </p>
                  </div>

                  <div className="space-y-1 mb-4">
                    {parts.length > 1 && (
                      <>
                        {parts.map((p, i) => (
                          <div key={p.id} className="flex justify-between text-sm text-muted-foreground">
                            <span className="truncate max-w-[180px]">{p.fileName?.replace(/\.stl$/i, "") || `Teil ${i + 1}`} ({p.qty}×)</span>
                            <span className="font-medium">{fmt(partResults[i].finalNet)}</span>
                          </div>
                        ))}
                        <Separator className="my-2" />
                      </>
                    )}
                    {partResults.some(r => r.discountRate > 0) && (
                      <div className="flex justify-between text-sm text-emerald-600 font-medium">
                        <span>Mengenvorteil aktiv</span>
                        <span>− {fmt(partResults.reduce((s, r) => s + r.quantityDiscount, 0))}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA / Form */}
                  {formSubmitted ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-xl p-5 text-center">
                      <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Anfrage gesendet!</p>
                      <p className="text-xs text-emerald-600/80 mt-1">Wir melden uns innerhalb von 6 Stunden mit Ihrem persönlichen Festpreisangebot.</p>
                    </div>
                  ) : (
                    /* v2 (16.09.): kein Zwei-Stufen-Klick mehr — Formular direkt sichtbar,
                       nur Name + E-Mail Pflicht, Rest hinter Aufklappern */
                    <div className="space-y-2">
                      <Input ref={kfNameRef} placeholder="Name *" value={contactForm.name} onChange={(e) => setContactForm(f => ({ ...f, name: e.target.value }))} />
                      <Input ref={kfEmailRef} placeholder="E-Mail *" type="email" value={contactForm.email} onChange={(e) => setContactForm(f => ({ ...f, email: e.target.value }))} />
                      {showMoreFields ? (
                        <>
                          <Input ref={kfCompanyRef} placeholder="Firma (optional)" value={contactForm.company} onChange={(e) => setContactForm(f => ({ ...f, company: e.target.value }))} />
                          <Input ref={kfPhoneRef} placeholder="Telefon (optional)" value={contactForm.phone} onChange={(e) => setContactForm(f => ({ ...f, phone: e.target.value }))} />
                          <Textarea ref={kfMessageRef} placeholder="Anmerkungen zum Projekt (optional)" value={contactForm.message} onChange={(e) => setContactForm(f => ({ ...f, message: e.target.value }))} className="min-h-[60px]" />
                        </>
                      ) : (
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowMoreFields(true)}>
                          <ChevronDown className="w-3.5 h-3.5" /> Firma, Telefon oder Anmerkung ergänzen
                        </button>
                      )}
                      {(() => {
                        const r = pruefeRabatt(contactForm.email, contactForm.rabattcode);
                        if (r.berechtigt) {
                          return (
                            <p className="text-sm text-green-700">
                              Studentenrabatt {r.prozent} % wird berücksichtigt
                              {r.grund === "mailadresse"
                                ? " (bestätigt über deine Hochschul-Mailadresse)"
                                : ` (${r.hochschule})`}.
                            </p>
                          );
                        }
                        if (showRabatt) {
                          return (
                            <>
                              <Input
                                placeholder="Studierenden-Rabattcode"
                                value={contactForm.rabattcode}
                                onChange={(e) => setContactForm(f => ({ ...f, rabattcode: e.target.value }))}
                              />
                              {contactForm.rabattcode.trim() && (
                                <p className="text-xs text-muted-foreground">Code unbekannt. Mit einer Hochschul-Mailadresse geht es auch ohne Code.</p>
                              )}
                            </>
                          );
                        }
                        return (
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors" onClick={() => setShowRabatt(true)}>
                            <ChevronDown className="w-3.5 h-3.5" /> Studierende? Bis zu {RABATT_PROZENT} % Rabatt einlösen
                          </button>
                        );
                      })()}
                      <Button className="w-full rounded-xl py-5" onClick={handleSubmit} disabled={isSubmitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? "Wird gesendet..." : "Unverbindliches Angebot anfordern"}
                      </Button>
                      <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                        Persönliche Prüfung, Antwort in 6 h, kein Account nötig. Angaben und STL-Dateien werden sicher übertragen, Details in der <a href="/datenschutz" className="underline hover:text-foreground">Datenschutzerklärung</a>.
                      </p>
                    </div>
                  )}

                  {/* Trust */}
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Shield className="w-3.5 h-3.5" /> Berechnung lokal im Browser</span>
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
            )}
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" />Kein Webshop – keine Bestellung</span>
            <span className="flex items-center gap-1.5"><UserCheck className="h-4 w-4 text-primary" />Persönliche Prüfung jeder Anfrage</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />Angebot in 6h</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" />5,0 ★ Google (35 Bewertungen)</span>
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
