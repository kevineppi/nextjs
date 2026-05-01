'use client'

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Layers, Zap, Award, CheckCircle, Building2, Ruler, Clock, Users, Trophy } from "lucide-react";

interface RegionalUniqueContentProps {
  regionName: string;
  regionSlug: string;
  deliveryTime: string;
  type: 'messe' | 'architektur' | 'druck';
  localMessen?: { name: string; location: string; type: string }[];
  isGerman?: boolean;
}

const RegionalUniqueContent = ({
  regionName,
  regionSlug,
  deliveryTime,
  type,
  localMessen = [],
  isGerman = false,
}: RegionalUniqueContentProps) => {
  const countryText = isGerman ? "Deutschland" : "Österreich";
  const countryPrep = isGerman ? "in Deutschland" : "in Österreich";

  if (type === 'druck') {
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  3D-Druck für Unternehmen in {regionName} – Alles Wichtige auf einen Blick
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Unternehmen in {regionName} setzen zunehmend auf 3D-Druck, um Designstudien schneller zu realisieren, Präsentationsmodelle kosteneffizient zu fertigen und Konzepte greifbar zu machen. ekdruck e.U. bietet als spezialisierter FDM-Druckservice {countryPrep} die passende Lösung: Von der ersten Idee bis zum fertigen Modell – unkompliziert, schnell und in professioneller Qualität.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Unser Leistungsspektrum umfasst Designstudien, Präsentationsmodelle, Konzeptmodelle, Projektmengen und Einzelanfertigungen. Wir verarbeiten hochwertige Materialien wie PLA+, PETG, ASA und TPU – je nach Anforderung an Oberfläche, Haltbarkeit oder Flexibilität. Die Lieferung nach {regionName} erfolgt innerhalb von {deliveryTime}. Für zeitkritische Projekte steht unser Express-Service mit 24-Stunden-Fertigung bereit.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
                  {[
                    { icon: Zap, title: "Express 24h", desc: `Für dringende Projekte in ${regionName}` },
                    { icon: Layers, title: "4 Materialien", desc: "PLA+, PETG, ASA, TPU – nach Bedarf" },
                    { icon: Award, title: "Ab Stückzahl 1", desc: "Einzelteile bis Kleinserien" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/40">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Der Prozess ist einfach: Sie senden uns Ihre 3D-Datei (STL, OBJ oder STEP), wir prüfen die Druckbarkeit und erstellen innerhalb von 6 Stunden ein Angebot. Nach Freigabe starten wir die Produktion – je nach Modellgröße und Komplexität dauert der Druck wenige Stunden bis maximal 3 Tage. Der Versand nach {regionName} erfolgt versichert mit Sendungsverfolgung.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Besonders für Unternehmen in {regionName}, die regelmäßig Modelle benötigen, bieten wir attraktive Konditionen: kostenloser Versand ab €100 Bestellwert, persönliche Beratung bei Materialwahl und Druckeinstellungen sowie Nachbearbeitung auf Wunsch (Schleifen, Lackieren, Gewindeeinsätze). Über 500 zufriedene Kunden {countryPrep} vertrauen bereits auf unseren Service.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  if (type === 'messe') {
    const topMessen = localMessen.slice(0, 3);
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  3D-Messemodelle für {regionName} – Was Sie wissen sollten
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-foreground space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Der Messestandort {regionName} zählt zu den wichtigen Messeplätzen {countryPrep}. Unternehmen, die auf Fachmessen in {regionName} ausstellen, stehen vor einer zentralen Frage: Wie präsentiert man komplexe Produkte oder Gebäudeprojekte auf engem Raum so, dass Messebesucher sofort verstehen, worum es geht? Die Antwort lautet: mit einem professionellen 3D-gedruckten Messemodell von ekdruck e.U.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Wir produzieren Messemodelle nach Maß – von kleinen Produktmodellen im Tischformat bis zu spektakulären Exponaten mit über einem Meter Kantenlänge. Jedes Modell wird individuell nach Ihren CAD-Daten oder Zeichnungen gefertigt, sodass die Genauigkeit stimmt. Die Lieferung nach {regionName} erfolgt in der Regel innerhalb von {deliveryTime}. Für kurzfristige Messetermine bieten wir Express-Fertigung in 24 Stunden an.
                </p>

                {topMessen.length > 0 && (
                  <p className="text-muted-foreground leading-relaxed">
                    In {regionName} finden regelmäßig bedeutende Fachveranstaltungen statt – darunter{' '}
                    {topMessen.map((m, i) => (
                      <span key={i}>
                        <strong>{m.name}</strong> ({m.type}){i < topMessen.length - 2 ? ', ' : i === topMessen.length - 2 ? ' und ' : ''}
                      </span>
                    ))}
                    . Für all diese Messen liefern wir termingerecht und direkt zum Messegelände.
                  </p>
                )}

                <p className="text-muted-foreground leading-relaxed">
                  Unsere Messemodelle werden aus hochwertigen Materialien wie PLA+, PETG und ASA im FDM-Verfahren gedruckt. Das Ergebnis: leichte, robuste und detailgetreue Modelle, die den Transportbelastungen standhalten und am Messestand professionell wirken. Auf Wunsch lackieren und nachbearbeiten wir die Objekte – für ein messeoptimiertes Finish. Kunden aus {regionName} schätzen besonders die kurzen Reaktionszeiten und die persönliche Betreuung durch unser Team.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6 not-prose">
                  {[
                    { icon: Zap, title: "Express 24h", desc: `Für dringende Messetermine in ${regionName}` },
                    { icon: Layers, title: "Alle Materialien", desc: "PLA+, PETG, ASA – je nach Anforderung" },
                    { icon: Award, title: "Maßgefertigt", desc: "Aus Ihren CAD-Daten, STL oder OBJ-Dateien" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/40">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Der Bestellprozess ist einfach: Sie senden uns Ihre Dateien (STL, OBJ oder CAD-Daten), wir erstellen binnen 6 Stunden ein unverbindliches Angebot. Nach Freigabe beginnen wir sofort mit der Produktion. Der Versand nach {regionName} erfolgt mit Track & Trace – Sie wissen immer, wo Ihr Modell gerade ist. Bei Bestellungen ab €100 entfallen die Versandkosten.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }

  // ── ARCHITEKTUR VERSION ─────────────────────────────────────────────────────
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Block 1: Haupttext */}
          <AnimatedSection animation="fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Architekturmodelle für {regionName}: Was Architekten wirklich brauchen
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Architekten und Planungsbüros in {regionName} stehen im Wettbewerb unter echtem Zeitdruck: Wettbewerbsabgaben, Bauherren-Präsentationen, Behördengespräche – alles will pünktlich und überzeugend sein. Ein maßstabsgetreues 3D-gedrucktes Architekturmodell ist dabei kein Luxus, sondern ein professionelles Arbeitsmittel. Es vermittelt Bauherren, Investoren und Genehmigungsbehörden auf einen Blick, was kein Grundriss und kein Rendering je so klar zeigen kann: das echte Raum- und Proportionsgefühl des Entwurfs.
              </p>
              <p>
                ekdruck e.U. fertigt Architekturmodelle speziell für Architekturbüros in {regionName} – in allen gängigen Maßstäben von 1:500 (städtebauliche Übersichten) bis 1:50 (detaillierte Gebäudeschnitte). Wir verarbeiten direkte CAD-Exporte aus ArchiCAD, Autodesk Revit, SketchUp, Rhino und Vectorworks. Lieferung nach {regionName}: {deliveryTime}. Bei Wettbewerbsabgaben ist Express-Fertigung in 24 Stunden möglich.
              </p>
            </div>
          </AnimatedSection>

          {/* Block 2: Modelltypen als Grid */}
          <AnimatedSection animation="slide-up" delay={100}>
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Die 5 häufigsten Modelltypen für Architekten in {regionName}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  type: "Wettbewerbsmodell",
                  scale: "1:100 bis 1:200",
                  desc: "Weiß, matt, mit Umgebungsmodell. Für Jurys und Wettbewerbsabgaben – Express 24h verfügbar.",
                  icon: Trophy,
                },
                {
                  type: "Bauherren-Präsentation",
                  scale: "1:50 bis 1:100",
                  desc: "Detailliert, farbig, ggf. mit transparenten PETG-Glasflächen. Steigert die Entscheidungsbereitschaft spürbar.",
                  icon: Users,
                },
                {
                  type: "Städtebauliches Modell",
                  scale: "1:200 bis 1:500",
                  desc: "Modularer Aufbau, herausnehmbare Gebäude, Phasendarstellungen. Für Quartiersprojekte und Bürgerbeteiligung.",
                  icon: Building2,
                },
                {
                  type: "Studienmodell",
                  scale: "Ab 1:500",
                  desc: "Schnell und günstig ab €20. Für frühe Entwurfsphasen, Massen- und Kubaturstudien.",
                  icon: Ruler,
                },
                {
                  type: "Baueinreichungsmodell",
                  scale: "1:100 bis 1:200",
                  desc: "Geländeintegration, Kontext, abnehmbares Gebäude. Für Behörden und Gemeinderäte.",
                  icon: CheckCircle,
                },
                {
                  type: "Investorenmodell",
                  scale: "1:50 bis 1:100",
                  desc: "Hochwertige Oberflächen, Beleuchtung integrierbar, Logoprint am Sockel. Für Projektentwickler.",
                  icon: Award,
                },
              ].map((item, i) => (
                <Card key={i} className="border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.type}</div>
                        <div className="text-xs text-primary font-medium">{item.scale}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Block 3: Warum 3D-Druck für Architekten in dieser Region */}
          <AnimatedSection animation="fade-in" delay={150}>
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Warum Architekturbüros in {regionName} auf 3D-Druck setzen
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der klassische Modellbauer ist in {regionName} zunehmend schwer zu finden – und wenn, dann oft mit Vorlaufzeiten von zwei bis vier Wochen. 3D-gedruckte Architekturmodelle schließen diese Lücke: Innerhalb von 3–5 Werktagen liegt das fertige Modell auf dem Tisch. Für Wettbewerbe mit knappen Deadlines: Express-Lieferung in 24 Stunden. Wer heute bestellt, hat das Modell morgen.
              </p>
              <p>
                Die Kostenersparnis gegenüber traditionellem Modellbau beträgt typischerweise 60–80 %. Ein Modell, das beim Modellbauer €800 kostet, liegt bei uns zwischen €100 und €200 – bei gleicher oder besserer Detailgenauigkeit. Das ermöglicht es Büros in {regionName}, auch mehrere Varianten parallel zu bestellen: Drei Entwürfe, drei Modelle, direkter Vergleich beim Bauherrn.
              </p>
              <p>
                Besonders für Büros, die regelmäßig Wettbewerbe einreichen oder viele Bauherrengespräche führen, rechnet sich die Umstellung schnell. Mehrere Architekturbüros {countryPrep} berichten, dass physische Modelle die Abschlussrate bei Bauherren-Präsentationen spürbar gesteigert haben – weil Bauherren Proportionen und Raum im Modell sofort begreifen, was Pläne und Visualisierungen nie leisten können.
              </p>
            </div>
          </AnimatedSection>

          {/* Block 4: Workflow + CTA */}
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Vom CAD-Export zum fertigen Modell in {regionName}
              </h3>
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                {[
                  { step: "1", title: "CAD exportieren", desc: "STL/OBJ aus ArchiCAD, Revit, SketchUp oder Rhino" },
                  { step: "2", title: "Datei senden", desc: "Per E-Mail oder Uploadformular – Angebot in 6h" },
                  { step: "3", title: "Fertigung", desc: "3–5 Werktage Standard, 24h Express möglich" },
                  { step: "4", title: `Lieferung nach ${regionName}`, desc: `${deliveryTime} Lieferzeit, Tracking inklusive` },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{s.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Kein 3D-Modell vorhanden? Wir helfen beim Export oder modellieren nach Grundriss.
                </p>
                <Link href="/kontakt"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors shrink-0"
                >
                  Jetzt anfragen
                  <CheckCircle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Block 5: Material & Qualität */}
          <AnimatedSection animation="fade-in" delay={250}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Materialien & Qualität für Architekturmodelle
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Für Architekturmodelle empfehlen wir je nach Einsatzzweck unterschiedliche Materialien: <strong className="text-foreground">PLA Premium Weiß</strong> ist der Klassiker für Wettbewerbsmodelle – saubere matte Oberfläche, einfach nachzubearbeiten, ideale Grundlage für weitere Lackierung. <strong className="text-foreground">PETG Transparent</strong> eignet sich hervorragend für Glasfassaden, Dachverglasungen und Fensterbänder – der halbtransparente Effekt ist bei modernen Gebäuden äußerst wirkungsvoll.
              </p>
              <p>
                Für alpine Architektur und Holzbau-Projekte – besonders relevant in {regionName} – bieten wir <strong className="text-foreground">PLA Holzoptik</strong> an, das eine authentische Holzmaserung erzeugt. Städtebauliche Modelle mit Bestandsbebauung werden typischerweise zweiteilig gefertigt: Bestand in Grau, Neubau in Weiß – der Klassiker für Gemeinde- und Bebauungsplanpräsentationen.
              </p>
              <p>
                Alle Modelle werden mit 0,1–0,2 mm Schichtauflösung gedruckt. Das entspricht einer Detailgenauigkeit, die selbst filigrane Fassadenelemente, Treppen und Geländer sichtbar macht. Auf Wunsch schleifen, grundieren und lackieren wir die Modelle für ein perfektes Finish.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default RegionalUniqueContent;
