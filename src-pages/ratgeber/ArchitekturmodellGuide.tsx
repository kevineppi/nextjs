import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/landing/CTASection";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  ArrowRight, CheckCircle, Clock, Building2, Ruler, ChevronRight, 
  Layers, Trophy, Users, AlertTriangle, Lightbulb, Leaf, FileCode,
  Quote, Star, TrendingUp
} from "lucide-react";
import HowToSchema from "@/components/HowToSchema";

const ArchitekturmodellGuide = () => {
  const faqs = [
    {
      question: "Was kostet ein 3D-gedrucktes Architekturmodell?",
      answer: "Einfache Studienmodelle (Baukörperstudie, Maßstab 1:500) starten ab ca. €20–50. Präsentationsmodelle im Maßstab 1:100 kosten typischerweise €80–200. Wettbewerbsmodelle mit Umgebung €150–400. Städtebauliche Modelle mit mehreren Gebäuden €300–1.000+. Der genaue Preis hängt von Volumen, Detailgrad und Material ab – wir erstellen in 6h ein kostenfreies Angebot."
    },
    {
      question: "Welcher Maßstab eignet sich am besten für Architekturmodelle?",
      answer: "1:50 für detaillierte Innenraumdarstellungen und Schnittmodelle. 1:100 für Gesamtgebäude und Bauherren-Präsentationen – das universell beliebteste Format. 1:200 bis 1:500 für städtebauliche Quartiersentwicklungen und Wettbewerbe mit Umgebung. Für Wettbewerbe empfehlen wir oft 1:200, um die Umgebungsbebauung einzubeziehen."
    },
    {
      question: "Wie exportiere ich mein CAD-Modell für den 3D-Druck?",
      answer: "ArchiCAD: Datei → Speichern unter → Format STL, Qualitätsstufe 'Fein'. Revit: kostenloses STL Exporter Add-In → Exportieren → STL. SketchUp: Datei → Exportieren → 3D-Modell → STL (Einheiten auf mm). Rhino: Datei → Export selected → STL, Toleranz 0.01mm. Bei Problemen schicken Sie uns Ihre native Datei – wir helfen kostenlos beim Export."
    },
    {
      question: "Wie schnell liefern Sie für Wettbewerbs-Deadlines?",
      answer: "Express-Service: 24–48h nach Auftragsbestätigung (50% Aufpreis). Standard: 3–5 Werktage. Wir empfehlen mindestens 7 Tage Vorlauf für entspannte Planung – für einen Puffer bei Revisionen. Persönliche Abholung in Gunskirchen, OÖ ist jederzeit möglich."
    },
    {
      question: "Können Glasfassaden und transparente Elemente dargestellt werden?",
      answer: "Ja – mit PETG Transparent können Glasfassaden, Fenster, Glasdächer und Atrien halbtransparent dargestellt werden. Typischerweise werden Glaselemente separat gedruckt und nachträglich eingesetzt. Das Ergebnis ist bei modernen Gebäuden mit großen Glasflächen besonders überzeugend."
    },
    {
      question: "Kann ich mehrere Entwurfsvarianten gleichzeitig bestellen?",
      answer: "Ja, das ist einer der größten Vorteile gegenüber traditionellem Modellbau. Wir drucken mehrere Varianten parallel – für direkten Vergleich beim Bauherrn oder bei der Wettbewerbspräsentation. Bei Mehrfachbestellungen bieten wir Mengenrabatt an."
    },
    {
      question: "Was ist bei der Dateivorbereitung zu beachten?",
      answer: "Das 3D-Modell sollte 'wasserdicht' (keine offenen Flächen) und in mm skaliert sein. Fassadendetails sollten mindestens 0.8mm stark sein, um druckbar zu bleiben. Wir prüfen Ihre Datei kostenlos vor der Produktion und melden uns bei Problemen. Empfehlung: Glas- und Betonelemente als separate Objekte exportieren."
    },
    {
      question: "Wie funktionieren Geländemodelle?",
      answer: "Basierend auf Höhendaten (Digitalem Geländemodell, GIS-Daten oder Ihren eigenen Geländeplänen) erstellen wir ein maßstabsgetreues Geländemodell. Das Gebäude kann abnehmbar gestaltet werden, um die Einbettung in die Topografie zu demonstrieren. Besonders geeignet für alpine Architektur, Hangbauten und Baueinreichungen."
    },
  ];

  const masstabsGuide = [
    { scale: "1:20", use: "Innenraum-Detail", example: "Einzelner Raum, Treppe, Fassadenausschnitt", size: "EFH: 50×40 cm", tipp: "Für Detail-Pitches, selten bei Wettbewerben" },
    { scale: "1:50", use: "Innenarchitektur", example: "Wohnung, Einzelgeschoss, Schnittmodell", size: "EFH: 20×16 cm", tipp: "Ideal für Bauherren-Präsentation, sichtbare Details" },
    { scale: "1:100", use: "Gebäudepräsentation", example: "Gesamtgebäude – häufigstes Format", size: "EFH: 10×8 cm", tipp: "Universell: Wettbewerb, Bauherr, Behörde" },
    { scale: "1:200", use: "Quartier / Wettbewerb", example: "Mehrere Gebäude, Umgebung", size: "EFH: 5×4 cm", tipp: "Für Wettbewerbe mit Kontextdarstellung" },
    { scale: "1:500", use: "Städtebau / Masterplan", example: "Ganzes Quartier, Stadtentwicklung", size: "EFH: 2×1,6 cm", tipp: "Konzeptstudien, Bürgerbeteiligung" },
  ];

  const commonMistakes = [
    {
      mistake: "Maßstab zu groß gewählt",
      consequence: "Modell wird zu groß, teuer, schwer zu transportieren",
      solution: "Für Wettbewerbe oft 1:200 statt 1:100 – Jury sieht dann auch den Kontext"
    },
    {
      mistake: "Zu feine Details (<0.8mm)",
      consequence: "Feine Stäbe, Geländer oder Zierleisten brechen ab oder werden nicht sauber gedruckt",
      solution: "Details unter 0.8mm in der CAD-Datei leicht aufdicken – wirkt im Modell trotzdem zart"
    },
    {
      mistake: "Einzel-STL statt separate Teile",
      consequence: "Glasflächen können nicht zweifarbig/transparent umgesetzt werden",
      solution: "Gebäudekörper und Glaselemente als separate STL-Dateien exportieren"
    },
    {
      mistake: "Keine Varianten geplant",
      consequence: "Nach Bauherrengespräch beginnt teurer Modellbau-Kreislauf von vorne",
      solution: "2–3 Varianten parallel bestellen – kostet 20% mehr, spart 80% an Zeit"
    },
    {
      mistake: "Zu spät bestellt",
      consequence: "Express-Service nötig: 50% Aufpreis, Stress für alle Beteiligten",
      solution: "7 Tage Vorlauf als Standard einplanen – dann Standard-Service, kein Stress"
    }
  ];

  const materialGuide = [
    {
      name: "PLA Premium Weiß",
      use: "Wettbewerbsmodelle, Studienmodelle",
      pros: ["Saubere matte Oberfläche", "Einfach nachzubearbeiten", "Klassische Jurypräsentation"],
      cons: ["Keine Transparenz möglich"],
      popular: true
    },
    {
      name: "PETG Transparent",
      use: "Glasfassaden, Fenster, Dachverglasungen",
      pros: ["Halbtransparent für Glasoptik", "Temperaturstabil", "Kombination mit PLA ideal"],
      cons: ["Etwas sichtbarere Schichten"],
      popular: true
    },
    {
      name: "PLA Grau",
      use: "Bestandsbebauung, Rohbauoptik",
      pros: ["Kontrast zu weißem Neubau", "Betonstruktur-Optik", "Städtebauliche Modelle"],
      cons: ["Weniger Details sichtbar als Weiß"],
      popular: false
    },
    {
      name: "PLA Holzoptik",
      use: "Holzbau, alpine Architektur",
      pros: ["Authentische Holzmaserung", "Naturnahes Erscheinungsbild", "Beliebt in Vorarlberg/Tirol"],
      cons: ["Etwas rauere Oberfläche"],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Architekturmodell 3D-Druck: Kosten, Maßstäbe & CAD [2026]"
        description="Alles für Architekturbüros: Welcher Maßstab, welches Material, CAD-Export (ArchiCAD, Revit, SketchUp) – plus 5 teure Fehler beim Bestellen vermeiden."
        keywords="architekturmodell 3d druck kosten, architekturmodell maßstab, architekturmodell cad export, architekturmodell bestellen, wettbewerbsmodell 3d druck, architekturmodell revit export"
        path="/ratgeber/architekturmodell-guide"
        type="article"
        schemaType="article"
        datePublished="2025-11-15"
        dateModified="2026-04-26"
      />

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Architekturmodell Guide", url: "/ratgeber/architekturmodell-guide" }
      ]} />

      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="Architekturmodell per 3D-Druck bestellen"
        description="So bestellen Sie ein maßstabsgetreues Architekturmodell per 3D-Druck – von der CAD-Datei bis zum fertigen Modell."
        totalTime="PT15M"
        steps={[
          { name: "Maßstab wählen", text: "1:50 für Innenraum, 1:100 für Gesamtgebäude (beliebtester Maßstab), 1:200–1:500 für Städtebau und Wettbewerbe mit Umgebung." },
          { name: "CAD-Datei exportieren", text: "ArchiCAD: Speichern als STL (Qualität 'Fein'). Revit: STL Exporter Add-In. SketchUp: Export → 3D-Modell → STL. Einheiten auf mm setzen." },
          { name: "Glas & Beton trennen", text: "Glasfassaden und Betonkörper als separate STL-Dateien exportieren. So können transparente PETG-Elemente separat gedruckt werden." },
          { name: "Angebot anfordern", text: "STL-Datei an office@ek-druck.at senden. Kostenloses Festpreisangebot in 6 Stunden mit Material- und Maßstabsempfehlung." },
          { name: "Fertigung & Lieferung", text: "Standard 3–5 Werktage, Express 24h für Wettbewerbstermine. Persönliche Abholung in Gunskirchen (OÖ) möglich." }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* ── HERO ── */}
        <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Architekturmodell Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              18 Min. Lesezeit · März 2026 · Aktualisiert
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Architekturmodelle 3D-Druck:<br />
              <span className="text-primary">Der komplette Guide für Architekten</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Maßstäbe, Kosten, CAD-Export aus ArchiCAD & Revit, Materialwahl, 5 typische Fehler – 
              alles was Architekten und Planer wissen müssen, um das Maximum aus 3D-gedruckten Modellen herauszuholen.
            </p>

            {/* Inhaltsverzeichnis */}
            <Card className="mb-8 bg-muted/40">
              <CardContent className="p-5">
                <p className="text-sm font-semibold mb-3">Inhalt dieses Guides:</p>
                <div className="grid sm:grid-cols-2 gap-1.5">
                  {[
                    "1. Maßstabs-Guide: Welcher Maßstab für welchen Zweck?",
                    "2. Kosten: Was kostet welches Modell?",
                    "3. CAD-Export: Schritt-für-Schritt für ArchiCAD, Revit & Co.",
                    "4. Materialwahl: PLA, PETG, Holzoptik",
                    "5. Typische Fehler (und wie man sie vermeidet)",
                    "6. Workflow-Optimierung für Architekturbüros",
                    "7. Geländemodelle & Topografie",
                    "8. FAQ",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="hero">
                <Link href="/kontakt">
                  Kostenloses Angebot in 6h
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/architekturmodelle">Architekturmodelle ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-20">

            {/* ── 1. MASSSTAB ── */}
            <section id="massstab">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">01</span>
                  <h2 className="text-3xl font-bold">Der Maßstabs-Guide für Architekten</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Die Wahl des richtigen Maßstabs ist die wichtigste Entscheidung vor dem Druck. 
                  Zu groß: Modell teuer und schwer zu transportieren. Zu klein: Details nicht mehr lesbar, Jury nicht beeindruckt.
                </p>
                <Card className="overflow-hidden mb-6">
                  <div className="bg-muted/50 grid grid-cols-5 p-4 font-semibold text-sm border-b border-border">
                    <div>Maßstab</div>
                    <div>Verwendung</div>
                    <div className="hidden md:block">Beispiel</div>
                    <div>Modellgröße EFH</div>
                    <div className="text-primary">Tipp</div>
                  </div>
                  {masstabsGuide.map((item, i) => (
                    <div key={i} className={`grid grid-cols-5 p-4 items-start gap-2 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                      <div className="font-bold text-primary text-lg">{item.scale}</div>
                      <div className="text-sm font-medium">{item.use}</div>
                      <div className="hidden md:block text-xs text-muted-foreground">{item.example}</div>
                      <div className="text-xs text-muted-foreground">{item.size}</div>
                      <div className="text-xs text-muted-foreground italic">{item.tipp}</div>
                    </div>
                  ))}
                </Card>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">Profi-Empfehlung</p>
                      <p className="text-sm text-muted-foreground">
                        Für die meisten Bauherren-Präsentationen: <strong className="text-foreground">1:100</strong> – groß genug für Details, klein genug für den Tisch. 
                        Für Wettbewerbe mit Kontext: <strong className="text-foreground">1:200</strong> – zeigt das Gebäude in seiner Umgebung, was Jurys schätzen. 
                        Für interne Entwurfsstudien: <strong className="text-foreground">1:500</strong> – günstig, schnell, ideal für frühe Iterationen.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* ── 2. KOSTEN ── */}
            <section id="kosten">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">02</span>
                  <h2 className="text-3xl font-bold">Kosten: Was kostet welches Modell?</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transparente Preisgestaltung ist uns wichtig. Hier sind realistische Preisspannen – basierend auf hunderten Aufträgen von Architekten:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { 
                      type: "Studienmodell", 
                      desc: "Einfache Baukörperstudie, weiß, ohne Umgebung", 
                      price: "Ab €20–50", 
                      scale: "1:500 bis 1:200",
                      details: ["Schnell produziert", "Ideal für frühe Entwurfsphasen", "Mehrere Varianten günstig"]
                    },
                    { 
                      type: "Präsentationsmodell", 
                      desc: "Detailliert, farbig, ggf. Umgebungsdarstellung", 
                      price: "€80–250", 
                      scale: "1:100",
                      details: ["Fassadendetails sichtbar", "PETG Glaselemente möglich", "Für Bauherren & Investoren"]
                    },
                    { 
                      type: "Wettbewerbsmodell", 
                      desc: "Hochwertig, Umgebung, Express verfügbar", 
                      price: "€150–500", 
                      scale: "1:200 bis 1:100",
                      details: ["Jurytaugliche Qualität", "Express 24h möglich", "Mit Landschaftselementen"]
                    },
                    { 
                      type: "Städtebauliches Modell", 
                      desc: "Modulares Quartiermodell, mehrere Gebäude", 
                      price: "€300–1.200+", 
                      scale: "1:500 bis 1:200",
                      details: ["Herausnehmbare Gebäude", "Phasendarstellung möglich", "Für Gemeinden & Bürgerbeteiligung"]
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-2 hover:border-primary/40 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-bold">{item.type}</div>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground shrink-0 ml-2">{item.scale}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                        <div className="text-primary font-semibold text-lg mb-3">{item.price}</div>
                        <ul className="space-y-1">
                          {item.details.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="bg-muted/50 rounded-xl p-5 text-sm text-muted-foreground">
                  Alle Preise netto, für österreichische Adressen. Exaktes Angebot basierend auf Ihrer Datei:{" "}
                  <Link href="/kontakt" className="text-primary hover:underline font-medium">Jetzt kostenlos anfragen →</Link>
                  {" "}– Antwort in unter 6 Stunden.
                </div>
              </AnimatedSection>
            </section>

            {/* ── 3. CAD EXPORT ── */}
            <section id="cad-export">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">03</span>
                  <h2 className="text-3xl font-bold">CAD-Export: Schritt-für-Schritt</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Wir verarbeiten STL, OBJ und 3MF Dateien. So exportieren Sie aus den gängigsten Architektursoftware-Programmen:
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    {
                      prog: "ArchiCAD",
                      badge: "Häufig",
                      steps: [
                        "3D-Fenster öffnen – nur die Elemente sichtbar, die gedruckt werden sollen",
                        "Datei → Speichern unter → Format: STL",
                        "Qualitätsstufe: 'Fein', Maßstab: 1:1 (original), Einheit: mm",
                        "Datei prüfen: sollte zwischen 1–50 MB sein"
                      ],
                      tip: "Tipp: Innenausbau, Möbel und Haustechnik ausblenden – nur Rohbau und Fassade exportieren"
                    },
                    {
                      prog: "Autodesk Revit",
                      badge: "Häufig",
                      steps: [
                        "Kostenloses 'STL Exporter' Add-In installieren (Autodesk App Store)",
                        "3D-Ansicht auf relevante Bauteile beschränken",
                        "Add-Ins → Export → STL → Einheiten: mm",
                        "Alternativ: IFC exportieren, wir konvertieren auf Anfrage"
                      ],
                      tip: "Tipp: Separate STL für Glaselemente exportieren, damit diese transparent gedruckt werden können"
                    },
                    {
                      prog: "SketchUp",
                      badge: "",
                      steps: [
                        "Extension Warehouse → 'SketchUp STL' Plugin installieren",
                        "Alle zu druckenden Gruppen/Komponenten selektieren",
                        "Datei → Exportieren → 3D-Modell → STL",
                        "Einheit auf Millimeter setzen vor dem Export"
                      ],
                      tip: "Tipp: 'Stray edges' (einzelne Linien ohne Fläche) vor dem Export bereinigen"
                    },
                    {
                      prog: "Rhino 3D",
                      badge: "",
                      steps: [
                        "Objekte die gedruckt werden sollen selektieren",
                        "Datei → Export Selected → STL",
                        "Render-Polygonnetz verwenden (nicht Analysenetz)",
                        "Toleranz: 0.01mm für präzise Ergebnisse"
                      ],
                      tip: "Tipp: Alle Flächen zu einem soliden Polysurface joinen bevor Export"
                    },
                    {
                      prog: "Vectorworks",
                      badge: "",
                      steps: [
                        "3D-Objekte in der Zeichnung selektieren",
                        "Datei → Exportieren → STL",
                        "Einheiten: mm, NURBS zu Polygonen konvertieren"
                      ],
                      tip: "Tipp: Komplexe NURBS-Geometrien können groß werden – ggf. Polygonanzahl reduzieren"
                    },
                  ].map((item, i) => (
                    <Card key={i}>
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm shrink-0">
                            {item.prog.substring(0, 2).toUpperCase()}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{item.prog}</span>
                            {item.badge && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{item.badge}</span>
                            )}
                          </div>
                        </div>
                        <ol className="space-y-2 mb-4">
                          {item.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{j+1}</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                        <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                          <Lightbulb className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          {item.tip}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Kein 3D-Modell vorhanden?</strong> Wir erstellen das 3D-Modell basierend auf Grundrissen, 
                    Ansichten oder PDFs. Oder schicken Sie uns Ihr natives Dateiformat – wir konvertieren kostenlos.{" "}
                    <Link href="/kontakt" className="text-primary hover:underline font-medium">Jetzt fragen →</Link>
                  </p>
                </div>
              </AnimatedSection>
            </section>

            {/* ── 4. MATERIALWAHL ── */}
            <section id="material">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">04</span>
                  <h2 className="text-3xl font-bold">Materialwahl für Architekturmodelle</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Das Material bestimmt nicht nur die Optik, sondern auch Bearbeitbarkeit und den Gesamteindruck.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {materialGuide.map((mat, i) => (
                    <Card key={i} className={`relative ${mat.popular ? 'border-primary/40 border-2' : ''}`}>
                      {mat.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-xl rounded-tr-xl font-medium">
                          Empfohlen
                        </div>
                      )}
                      <CardContent className="p-5">
                        <div className="font-bold text-lg mb-1">{mat.name}</div>
                        <div className="text-xs text-primary font-medium mb-3">{mat.use}</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <div className="text-xs font-semibold text-foreground mb-1.5">Vorteile</div>
                            <ul className="space-y-1">
                              {mat.pros.map((p, j) => (
                                <li key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-foreground mb-1.5">Beachten</div>
                            <ul className="space-y-1">
                              {mat.cons.map((c, j) => (
                                <li key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                  <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* ── 5. HÄUFIGE FEHLER ── */}
            <section id="fehler">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">05</span>
                  <h2 className="text-3xl font-bold">5 typische Fehler – und wie man sie vermeidet</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Aus hunderten Aufträgen von Architekten wissen wir, welche Fehler immer wieder passieren – und wie teuer sie werden können:
                </p>
                <div className="space-y-4">
                  {commonMistakes.map((item, i) => (
                    <Card key={i} className="border-l-4 border-l-amber-400 border-border/40">
                      <CardContent className="p-5">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <AlertTriangle className="w-4 h-4 text-amber-500" />
                              <span className="font-semibold text-sm">Fehler {i+1}</span>
                            </div>
                            <p className="text-sm font-medium">{item.mistake}</p>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground font-semibold mb-1">Konsequenz</div>
                            <p className="text-sm text-muted-foreground">{item.consequence}</p>
                          </div>
                          <div className="bg-primary/5 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <CheckCircle className="w-3.5 h-3.5 text-primary" />
                              <span className="text-xs font-semibold text-primary">Lösung</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* ── 6. WORKFLOW-OPTIMIERUNG ── */}
            <section id="workflow">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">06</span>
                  <h2 className="text-3xl font-bold">Workflow-Optimierung für Architekturbüros</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Büros, die regelmäßig 3D-Druckmodelle einsetzen, entwickeln einen Standardprozess der ihnen Zeit und Kosten spart. Unsere Empfehlungen:
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    {
                      title: "STL-Export als Routine einbauen",
                      desc: "Definieren Sie eine interne Exportvorlage (Maßstab, Detailgrad, Schichten) für ArchiCAD/Revit. Nach 2–3 Projekten läuft der Export in 5 Minuten.",
                      icon: FileCode
                    },
                    {
                      title: "Varianten parallel bestellen",
                      desc: "Drei Entwurfsvarianten kosten 20% mehr als eine – ermöglichen aber direkten Vergleich beim Bauherrn. Entscheidungen fallen schneller, Feedback-Schleifen werden kürzer.",
                      icon: Layers
                    },
                    {
                      title: "7-Tage-Puffer einplanen",
                      desc: "Standard-Service: 3–5 Werktage. Mit 7 Tagen Puffer haben Sie Spielraum für Revisionen ohne Express-Aufpreis. Das spart bis zu 50% der Modellkosten über ein Jahr.",
                      icon: Clock
                    },
                    {
                      title: "Modelle mehrfach verwenden",
                      desc: "Ein Wettbewerbsmodell kann nach Einreichung für Bauherrengespräche, Pressepräsentationen und Ausstellungen genutzt werden. Amortisation oft nach 2–3 Einsätzen.",
                      icon: TrendingUp
                    },
                    {
                      title: "Bestand + Neubau zweifarbig",
                      desc: "Bestandsbebauung in Grau, Neubau in Weiß – dieser Klassiker funktioniert immer für Städtebaumodelle und Bebauungsplandarstellungen. Kein Mehrpreis, maximale Klarheit.",
                      icon: Building2
                    },
                    {
                      title: "Sockel standardisieren",
                      desc: "Ein einheitlicher Sockel (A3-Format, 3cm hoch) macht alle Ihre Modelle transportierbar und präsentierbar. Kann wiederverwendet werden – Gebäude einfach tauschen.",
                      icon: Ruler
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* ── FLATRATE CALLOUT ── */}
              <div className="mt-8 p-6 rounded-2xl border-2 border-primary/30 bg-primary/5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Tipp für regelmäßige Auftraggeber</div>
                    <h3 className="text-xl font-bold mb-2">Architekturmodell-Flatrate – Fixpreis statt Einzelkalkulation</h3>
                    <p className="text-sm text-muted-foreground">Büros, die mehr als 1–2 Modelle pro Monat beauftragen, sparen mit der Flatrate bis zu 40% gegenüber Einzelpreisen. Kein Vertrag, monatlich kündbar. <strong>Erstes Modell kostenlos testen.</strong></p>
                  </div>
                  <Link href="/architekturmodelle-abo" className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
                    Ab €199/Monat →
                  </Link>
                </div>
              </div>
            </section>

            {/* ── 7. GELÄNDEMODELLE ── */}
            <section id="gelaende">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">07</span>
                  <h2 className="text-3xl font-bold">Geländemodelle & Topografie</h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Geländemodelle sind besonders wertvoll für alpine Architektur, Hangbauten und Baueinreichungen bei Behörden. Sie zeigen auf einen Blick, wie sich ein Gebäude in die Topografie einbettet – etwas, das kein Grundriss und keine Visualisierung so überzeugend leisten kann.
                </p>
                <div className="bg-muted/40 rounded-xl p-6 space-y-3">
                  {[
                    { q: "Welche Datengrundlage?", a: "Digitales Geländemodell (DGM/DEM), GIS-Daten, eigene Geländepläne oder Vermessungsdaten. Wir helfen bei der Beschaffung freier Höhendaten." },
                    { q: "Kann das Gebäude abnehmbar sein?", a: "Ja – das ist bei Baueinreichungen oft sehr wertvoll. Das Geländemodell kann ohne Gebäude gezeigt werden, um die Topografie vor und nach dem Eingriff zu vergleichen." },
                    { q: "Wie groß werden Geländemodelle?", a: "Typischerweise A3 (30×42 cm) bis A1 (60×84 cm) als Sockel. Das aufgesetzte Gebäude kommt je nach Maßstab dazu. Mehrteilige Modelle für größere Areale sind möglich." },
                    { q: "Für welche Regionen besonders relevant?", a: "Besonders für alpine Regionen (Tirol, Vorarlberg, Salzburg, Steiermark, Kärnten) – aber auch für Hangbauten in Wien, NÖ oder Bayern ist ein Geländemodell oft überzeugender als jede Visualisierung." },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-border/40 last:border-0 pb-3 last:pb-0">
                      <div className="font-semibold text-sm mb-1">{item.q}</div>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section>
              <AnimatedSection animation="fade-in">
                <h2 className="text-2xl font-bold mb-6">Was Architekten berichten</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { quote: "Das Modell hat sich in der Wettbewerbspräsentation sofort bezahlt gemacht. Die Jury konnte das Projekt greifen.", author: "Architekturbüro, Wien", project: "Wohnbau-Wettbewerb 1:200" },
                    { quote: "Drei Varianten parallel bestellt, in 5 Tagen alle auf dem Tisch. Beim Modellbauer hätten wir 6 Wochen gewartet.", author: "Stadtplanungsbüro, Linz", project: "Städtebauliche Studie 1:500" },
                    { quote: "Der Bauherr hat nach der Modellpräsentation sofort zugestimmt. Das Modell war €150 wert – die Entscheidung Millionen.", author: "Planungsbüro, Graz", project: "EFH Präsentationsmodell 1:50" },
                  ].map((t, i) => (
                    <Card key={i} className="border-border/50">
                      <CardContent className="p-5">
                        <Quote className="w-6 h-6 text-primary/30 mb-3" />
                        <p className="text-sm text-muted-foreground italic mb-4">"{t.quote}"</p>
                        <div className="border-t border-border pt-3">
                          <div className="font-semibold text-xs">{t.author}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{t.project}</div>
                          <div className="flex mt-1.5">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} className="w-3 h-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* ── FAQ ── */}
            <section id="faq">
              <AnimatedSection animation="fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-black text-primary/20">08</span>
                  <h2 className="text-3xl font-bold">Häufige Fragen</h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-base mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* ── RELATED ── */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Weitere Ratgeber</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Messemodell Guide", link: "/ratgeber/messemodell-guide", desc: "Kosten, Timing & Tipps für Messeaussteller" },
                  { title: "Material-Guide", link: "/ratgeber/material-guide", desc: "PLA vs. PETG – welches Material wofür?" },
                  { title: "Kosten-Guide", link: "/ratgeber/kosten-guide", desc: "3D-Druck Preise in Österreich erklärt" },
                ].map((r, i) => (
                  <Link key={i} href={r.link} className="block border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-sm transition-all group">
                    <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{r.title}</div>
                    <p className="text-xs text-muted-foreground">{r.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </article>

        <CTASection
          headline="Architekturmodell anfragen – Angebot in 6h"
          subline="Schicken Sie uns Ihre CAD-Datei (STL, OBJ, 3MF) oder beschreiben Sie Ihr Projekt kurz. Wir antworten persönlich mit einem verbindlichen Angebot – kostenlos und unverbindlich."
          ctaLabel="Kostenlos anfragen"
          ctaHref="/kontakt"
          secondaryLabel="Architektur-Flatrate ab €199/Monat"
          secondaryHref="/architekturmodelle-abo"
          badge="Für Architekten & Planer"
          urgencyText="⚡ Flatrate: Erstes Modell kostenlos · Kein Vertrag, monatlich kündbar"
        />

        <StickyCTA context="Architekturmodell-Guide" />
        <Footer />
      </div>
    </>
  );
};

export default ArchitekturmodellGuide;
