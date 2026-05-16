import AnimatedSection from "@/components/AnimatedSection";
import { FileCode, Check, Zap, Shield } from "lucide-react";

const formats = [
  { name: "ArchiCAD", ext: ".pln, .ifc", note: "Geometrie + IFC-Klassen werden korrekt interpretiert" },
  { name: "Revit", ext: ".rvt, .ifc", note: "Familien werden aufgelöst, BIM-Daten optional erhalten" },
  { name: "Rhino / Grasshopper", ext: ".3dm", note: "NURBS-Geometrie wird sauber tesselliert" },
  { name: "SketchUp", ext: ".skp", note: "Auch komplexe Modelle ohne Solid-Konvertierung möglich" },
  { name: "AutoCAD", ext: ".dwg, .dxf", note: "3D-Volumenkörper und Flächenmodelle verarbeitbar" },
  { name: "Vectorworks", ext: ".vwx", note: "Direkt-Import inklusive Materialklassen" },
  { name: "Allplan", ext: ".pln, .ifc", note: "Geschossweise Verarbeitung möglich" },
  { name: "Standardformate", ext: ".stl, .step, .obj, .3mf", note: "Aus jedem CAD-System exportierbar" },
];

const services = [
  {
    icon: Zap,
    title: "Datenaufbereitung inklusive",
    text: "Wir prüfen Ihre CAD-Datei vor dem Druck: wasserdichte Solids, Wandstärken-Optimierung, Auflösung von Konflikten. Bei Optimierungspotenzial melden wir uns mit konkreten Vorschlägen, bevor irgendetwas gedruckt wird.",
  },
  {
    icon: Shield,
    title: "Reverse Engineering bei Bedarf",
    text: "Kein CAD vorhanden? Wir erstellen Ihr 3D-Modell nach Plan, Foto oder Skizze. Auch Bestandsgebäude können wir nach Aufmaß oder vorhandenen Plänen modellieren – ab €120 pro Stunde.",
  },
  {
    icon: FileCode,
    title: "BIM-konforme Bearbeitung",
    text: "Wir behandeln IFC-Daten korrekt: Geschosse, Wände, Fenster, Türen behalten ihre Klassenzuordnung. Auf Wunsch farbliche Differenzierung nach Geschoss oder Bauteilkategorie im fertigen Modell.",
  },
];

const ArchitekturFormatSection = () => (
  <section className="py-32">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">CAD-Format-Unterstützung</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95]">
                Senden Sie<br/><span className="text-gradient">was Sie haben.</span>
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Wir verarbeiten alle gängigen Architektur-CAD-Formate. Sie müssen Ihre Datei nicht in STL konvertieren oder druckfertig aufbereiten – das übernehmen wir.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {formats.map((f, i) => (
            <AnimatedSection key={f.name} animation="slide-up" delay={i * 60}>
              <div className="rounded-2xl border-2 border-border hover:border-primary/30 bg-card p-6 h-full transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-bold text-base tracking-tight">{f.name}</p>
                </div>
                <p className="mono text-[10px] text-primary uppercase tracking-wider mb-3">{f.ext}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} animation="slide-up" delay={i * 100}>
              <div className="rounded-3xl border-2 border-border hover:border-primary/30 bg-card p-8 h-full transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-bold text-lg mb-3 tracking-tight">{s.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default ArchitekturFormatSection;
