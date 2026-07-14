import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/landing/CTASection";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import AnimatedSection from "@/components/AnimatedSection";
import { FileCode, AlertTriangle, Ruler, XCircle, CheckCircle, ExternalLink, Info, Wrench } from "lucide-react";

/**
 * Ratgeber: Datenaufbereitung CAD/GIS -> druckbares Architekturmodell.
 *
 * Referenz-Artikel. Enthält die Maßstabs-Tabelle, die FDM-Grenzen und die
 * Umkehrrechnung. Alle Zahlen belegt, Ableitungen als solche gekennzeichnet.
 */
const DatenaufbereitungGuide = () => {
  const faqs = [
    {
      question: "Warum lässt sich mein amtlicher LoD2-Download nicht drucken?",
      answer:
        "Weil amtliche Geodaten für Analyse gemacht sind, nicht für den Druck. Eine Untersuchung von Biljecki, Ledoux und Kollegen (2016) hat 37 Datensätze aus 9 Ländern mit 3,6 Millionen Gebäuden geprüft. Kein einziger war fehlerfrei. Der häufigste Fehler sind nicht-planare Polygone, und 85,5 Prozent dieser Abweichungen liegen unter 5 cm. Optisch unsichtbar, aber sie brechen die Volumenlogik und damit den Slicer.",
    },
    {
      question: "Was heißt wasserdicht bei einem 3D-Modell?",
      answer:
        "Wasserdicht (watertight) heißt: das Modell umschließt ein geschlossenes Volumen, ohne Löcher, ohne offene Kanten, ohne doppelte oder fehlende Flächen. Nur dann kann ein Slicer entscheiden, was innen und was außen ist. Ein häufiger Fall aus GIS-Daten: die Grundfläche fehlt, das Gebäude ist unten offen. Formal gültig, praktisch nicht druckbar.",
    },
    {
      question: "Kann ich mit QGIS2threejs ein STL exportieren?",
      answer:
        "Nein, nicht mehr. Der STL-, OBJ- und COLLADA-Export existierte in Version 1.4 und wurde in Version 2.0 entfernt. Heute exportiert das Plugin glTF. Viele Blogposts und Kursseiten empfehlen den Weg trotzdem noch. Das richtige Werkzeug für den Weg von einem Raster-Geländemodell zu einem druckfertigen STL ist DEMto3D.",
    },
    {
      question: "Wie exportiere ich aus Revit oder ArchiCAD?",
      answer:
        "Revit: das kostenlose STL-Exporter-Add-in von Autodesk (nicht in Revit LT). In der Praxis lohnt sich eine eigene 3D-Ansicht nur für den Export, Detailgrad fein, und alles ausschalten, was nicht gedruckt werden soll (Möbel, Haustechnik, Beschriftung, Raster, Schnittboxen). ArchiCAD exportiert nativ nach STL und OBJ, Einheiten vorher auf Millimeter stellen. Rhino und SketchUp gehen ebenfalls über STL oder OBJ.",
    },
    {
      question: "Wie fein darf ein Detail bei 1:500 sein?",
      answer:
        "Bei 1:500 entspricht 1 m Realität 2 mm im Modell. Eine Dachrinne von 10 cm ist damit 0,20 mm, das liegt unter einer einzigen Extrusionsbahn (rund 0,45 mm bei einer 0,4-mm-Düse). Sie kann physikalisch nicht gedruckt werden. Als Faustregel gilt eine Mindestwandstärke von etwa 0,8 mm, das entspricht bei 1:500 rund 40 cm realer Wandstärke.",
    },
    {
      question: "Muss ich die Daten selbst aufbereiten?",
      answer:
        "Nein. Schicken Sie uns, was Sie haben: IFC, Revit, ArchiCAD, Rhino, SketchUp, CityGML, DXF oder ein GeoTIFF-Geländemodell. Wir prüfen die Datei und melden uns, wenn etwas fehlt. Die Aufbereitung ist Teil der Arbeit an einem Modell, nicht Ihre Hausaufgabe.",
    },
  ];

  const massstabTable = [
    { el: "Geschosshöhe 3,00 m", a: "3,00", b: "6,00", c: "15,00", d: "30,00", e: "60,00", crit: false },
    { el: "Fensterbreite 1,20 m", a: "1,20", b: "2,40", c: "6,00", d: "12,00", e: "24,00", crit: false },
    { el: "Balkon-Tiefe 1,50 m", a: "1,50", b: "3,00", c: "7,50", d: "15,00", e: "30,00", crit: false },
    { el: "Mauerstärke 0,30 m", a: "0,30", b: "0,60", c: "1,50", d: "3,00", e: "6,00", crit: true },
    { el: "Gehsteigkante 0,12 m", a: "0,12", b: "0,24", c: "0,60", d: "1,20", e: "2,40", crit: true },
    { el: "Dachrinne 0,10 m", a: "0,10", b: "0,20", c: "0,50", d: "1,00", e: "2,00", crit: true },
    { el: "Fenstersprosse 0,02 m", a: "0,02", b: "0,04", c: "0,10", d: "0,20", e: "0,40", crit: true },
  ];

  const umkehr = [
    { s: "1:1000", wall: "80 cm", single: "45 cm" },
    { s: "1:500", wall: "40 cm", single: "22,5 cm" },
    { s: "1:200", wall: "16 cm", single: "9 cm" },
    { s: "1:100", wall: "8 cm", single: "4,5 cm" },
    { s: "1:50", wall: "4 cm", single: "2,3 cm" },
  ];

  const fehler = [
    { t: "Nicht-planare Polygone", d: "Der mit Abstand häufigste Fehler. Die Eckpunkte einer Fläche liegen nicht exakt in einer Ebene. 85,5 Prozent dieser Abweichungen liegen unter 5 cm, sind also unsichtbar, brechen aber die Volumenlogik." },
    { t: "Nicht geschlossene Volumenkörper", d: "Löcher in der Hülle. Der Klassiker: die Grundfläche fehlt, das Gebäude ist nach unten offen." },
    { t: "Non-manifold-Kanten", d: "Eine Kante gehört zu mehr oder weniger als zwei Flächen. Der Slicer kann innen und außen nicht mehr unterscheiden." },
    { t: "Invertierte Normalen", d: "Flächen zeigen nach innen statt nach außen. Das Modell wirkt korrekt, wird aber falsch oder gar nicht gefüllt." },
    { t: "Selbstverschneidungen", d: "Flächen durchdringen einander. Häufig bei zusammengesetzten Gebäudeteilen." },
    { t: "Duplikate", d: "Dieselbe Fläche oder derselbe Punkt mehrfach vorhanden." },
    { t: "MultiSurface statt Solid", d: "Die Datei enthält nur eine Sammlung von Flächen, kein Volumen. Formal gültig, aber ohne Volumen gibt es nichts zu drucken." },
    { t: "Gemeinsame Grundfläche über mehrere Gebäudeteile", d: "Eine einzige Modellierungskonvention. In einem geprüften Datensatz hat genau sie 92 Prozent aller Volumenkörper unbrauchbar gemacht." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Datenaufbereitung: von CAD und GIS zum druckbaren Architekturmodell | ekdruck"
        description="Wie aus IFC, Revit, ArchiCAD, CityGML oder einem DGM ein druckbares Modell wird. Mit Maßstabs-Tabelle, FDM-Grenzen und den acht Fehlern, an denen amtliche Geodaten scheitern."
        keywords="Datenaufbereitung Architekturmodell, CityGML drucken, STL Export Revit ArchiCAD, DEMto3D, wasserdichtes Modell, Maßstab Tabelle 3D-Druck, Mindestwandstärke FDM"
        path="/ratgeber/datenaufbereitung-architekturmodell"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          { name: "Datenaufbereitung", url: "/ratgeber/datenaufbereitung-architekturmodell" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Ratgeber, Daten und Maßstab
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.03em] mb-6">
              Von CAD und GIS zum druckbaren Architekturmodell
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Amtliche Geodaten sind für Analyse gemacht, nicht für den Druck. Deshalb scheitert der erste
              Versuch fast immer. Dieser Artikel zeigt die Wege aus IFC, Revit, ArchiCAD, CityGML und
              Geländedaten ins druckfertige Modell, die acht Fehler, an denen es typischerweise hängt, und die
              Rechnung, die vorher klärt, welches Detail im gewählten Maßstab überhaupt existieren kann.
            </p>
          </div>
        </div>
      </section>

      {/* DIE DREI WEGE */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-8">
                <FileCode className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">Die drei Wege ins Modell</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <Card>
                  <CardContent className="p-6">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">Weg 1</p>
                    <h3 className="text-lg font-bold mb-3">Aus BIM und CAD</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Revit:</strong> kostenloses STL-Exporter-Add-in von
                      Autodesk (nicht in Revit LT). In der Praxis eine eigene 3D-Ansicht nur für den Export
                      anlegen, Detailgrad fein, alles Nicht-Druckbare ausschalten.
                      <br />
                      <br />
                      <strong className="text-foreground">ArchiCAD:</strong> exportiert nativ nach STL und OBJ.
                      Einheiten vorher auf Millimeter stellen.
                      <br />
                      <br />
                      <strong className="text-foreground">Rhino, SketchUp:</strong> über STL oder OBJ.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/40">
                  <CardContent className="p-6">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">Weg 2</p>
                    <h3 className="text-lg font-bold mb-3">Aus GIS und Geländedaten</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ein Raster-Geländemodell (GeoTIFF) in QGIS laden, auf das Gebiet zuschneiden,
                      reprojizieren, Maßstab und Höhenüberhöhung festlegen. Dann{" "}
                      <strong className="text-foreground">DEMto3D</strong>: das Plugin erzeugt daraus direkt ein
                      STL, inklusive Sockel, also mit geschlossenen Seitenwänden und Boden. Der offizielle
                      Plugin-Text nennt es &bdquo;the first tool that links GIS and 3D printing&ldquo;.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">Weg 3</p>
                    <h3 className="text-lg font-bold mb-3">Ueber Blender</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">BlenderGIS</strong> importiert Shapefile, GeoTIFF,
                      OSM-XML und georeferenzierte Raster. Danach die Kernwerkzeuge: der{" "}
                      <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Displace</code>-Modifier
                      verschiebt die Punkte anhand der Höhenkarte, der{" "}
                      <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Solidify</code>-Modifier
                      macht daraus einen geschlossenen Körper mit gleichmäßiger Wandstärke.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 border-amber-500/40 bg-amber-500/5">
                <CardContent className="p-6 flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2">
                      Korrektur eines weit verbreiteten Irrtums: QGIS2threejs kann kein STL mehr
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Der Export nach STL, OBJ und COLLADA existierte in{" "}
                      <strong className="text-foreground">Version 1.4</strong> und wurde in{" "}
                      <strong className="text-foreground">Version 2.0 entfernt</strong>. Heute exportiert das
                      Plugin glTF. Zahlreiche Blogposts und Universitäts-Kursseiten empfehlen bis heute
                      QGIS2threejs für den 3D-Druck. Das ist veraltet. Der Beleg steht im{" "}
                      <a
                        href="https://github.com/minorua/Qgis2threejs/blob/master/CHANGELOG.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        Changelog des Projekts
                      </a>
                      . Für Gelände zu STL ist{" "}
                      <a
                        href="https://plugins.qgis.org/plugins/DEMto3D/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        DEMto3D
                      </a>{" "}
                      das richtige Werkzeug.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WARUM AMTLICHE DATEN NICHT DRUCKBAR SIND */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
                  Warum amtliche Daten fast nie direkt druckbar sind
                </h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-6">
                Das ist keine Vermutung, sondern gemessen. Biljecki, Ledoux, Du, Stoter, Soon und Khoo haben 2016
                in der Studie &bdquo;The most common geometric and semantic errors in CityGML datasets&ldquo;{" "}
                <strong className="text-foreground">
                  37 Datensätze aus 9 Ländern mit 3,6 Millionen Gebäuden und 40 Millionen Polygonen
                </strong>{" "}
                geprüft.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { n: "0", l: "fehlerfreie Datensätze", s: "Wörtlich: keiner der geprüften Datensätze war perfekt" },
                  { n: "85,5 %", l: "der häufigsten Fehler sind unsichtbar", s: "Planaritäts-Abweichungen unter 5 cm. Optisch egal, für den Slicer tödlich" },
                  { n: "92 %", l: "kaputte Volumenkörper im Extremfall", s: "In einem Datensatz, verursacht durch eine einzige Modellierungskonvention" },
                ].map((k) => (
                  <Card key={k.l} className="bg-muted/40">
                    <CardContent className="p-6 text-center">
                      <p className="text-4xl font-bold text-primary mb-2">{k.n}</p>
                      <p className="font-bold text-sm mb-2">{k.l}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{k.s}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-5">Die acht Fehler, an denen es hängt</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {fehler.map((f, i) => (
                  <Card key={f.t}>
                    <CardContent className="p-5">
                      <div className="flex gap-3">
                        <span className="mono text-xs font-bold text-primary shrink-0 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-bold text-sm mb-1">{f.t}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{f.d}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6 flex gap-4">
                  <Wrench className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Prüfen, bevor Sie drucken: val3dity</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <a
                        href="https://val3dity.readthedocs.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        val3dity
                      </a>{" "}
                      (TU Delft, Open Source) validiert 3D-Primitive gegen ISO 19107 und findet genau diese
                      Fehler: nicht geschlossene Volumenkörper, nicht-planare Polygone, Selbstverschneidungen,
                      falsche Ringorientierung. Es liefert einen Report pro Objekt. Wer seinen CityGML-Download
                      damit prüft, weiß vor dem Slicer, woran er ist.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MASSSTABS-TABELLE */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
                  Was im Maßstab überhaupt noch existieren kann
                </h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-2">
                Die Formel ist simpel:{" "}
                <strong className="text-foreground">Modellmaß [mm] = Realmaß [m] x 1000 / Maßstabszahl</strong>.
                Bei 1:500 entspricht 1 m Realität also 2 mm im Modell.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Alle Werte in Millimeter. Rot markiert, was unter der FDM-Grenze liegt.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border bg-background">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60">
                    <tr className="text-left">
                      <th className="p-4 font-bold">Element (real)</th>
                      <th className="p-4 font-bold text-right">1:1000</th>
                      <th className="p-4 font-bold text-right">1:500</th>
                      <th className="p-4 font-bold text-right">1:200</th>
                      <th className="p-4 font-bold text-right">1:100</th>
                      <th className="p-4 font-bold text-right">1:50</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {massstabTable.map((r) => (
                      <tr key={r.el} className="border-t border-border">
                        <td className="p-4 font-sans text-muted-foreground">{r.el}</td>
                        <td className={`p-4 text-right ${r.crit ? "text-red-500 font-bold" : ""}`}>{r.a}</td>
                        <td className={`p-4 text-right ${r.crit ? "text-red-500 font-bold" : ""}`}>{r.b}</td>
                        <td className="p-4 text-right">{r.c}</td>
                        <td className="p-4 text-right">{r.d}</td>
                        <td className="p-4 text-right">{r.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">Die FDM-Grenzen (0,4 mm Düse)</h3>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          Eine <strong className="text-foreground">Extrusionsbahn</strong> ist rund{" "}
                          <strong className="text-foreground">0,45 mm</strong> breit. Das ist die absolute
                          Untergrenze.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          Wände dünner als eine einzige Bahn werden vom Slicer{" "}
                          <strong className="text-foreground">schlicht ignoriert</strong>. Sie verschwinden.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          Praxis-Faustregel:{" "}
                          <strong className="text-foreground">Mindestwandstärke rund 0,8 mm</strong>, also zwei
                          Bahnen. Keine Herstellernorm, aber breit anerkannt.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          Die Düse begrenzt das Detail fast ausschließlich in der{" "}
                          <strong className="text-foreground">horizontalen Ebene</strong>. Die Schichthöhe (max.
                          rund 0,32 mm bei 0,4 mm Düse) steuert die vertikale Feinheit.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/40">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3">Die Umkehrrechnung</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Was bedeuten die Druckgrenzen, zurückgerechnet in die reale Welt? Was muss ein Element
                      mindestens messen, damit es im Modell existieren kann?
                    </p>
                    <div className="overflow-hidden rounded-xl border border-border">
                      <table className="w-full text-xs">
                        <thead className="bg-muted/60">
                          <tr className="text-left">
                            <th className="p-3 font-bold">Maßstab</th>
                            <th className="p-3 font-bold">0,8 mm Wand entspricht</th>
                            <th className="p-3 font-bold">1 Bahn entspricht</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono">
                          {umkehr.map((u) => (
                            <tr key={u.s} className="border-t border-border">
                              <td className="p-3 font-bold text-primary">{u.s}</td>
                              <td className="p-3">{u.wall}</td>
                              <td className="p-3 text-muted-foreground">{u.single}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6 flex gap-4">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Was daraus zwangsläufig folgt</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Bei <strong className="text-foreground">1:500</strong> ist eine Dachrinne (10 cm real) im
                      Modell <strong className="text-foreground">0,20 mm</strong> stark. Das liegt unter einer
                      einzigen Extrusionsbahn. Sie fehlt im Modell nicht, weil jemand geschlampt hat, sondern{" "}
                      <strong className="text-foreground">weil sie physikalisch nicht existieren kann</strong>.
                      Dasselbe gilt für die Gehsteigkante mit 0,24 mm. Eine normale 30-cm-Mauer landet bei 0,60 mm,
                      also unter der 0,8-mm-Empfehlung: eine einzige Bahn, entsprechend fragil.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Und jetzt der Punkt, an dem sich Daten und Physik treffen: CityGML{" "}
                      <strong className="text-foreground">LoD2 enthält ohnehin keine Objekte unter 4 x 4 m</strong>,
                      das sind bei 1:500 gerade einmal 8 x 8 mm. Die FDM-Untergrenze liegt bei 1:500 bei rund 22
                      bis 40 cm real.{" "}
                      <strong className="text-foreground">
                        Datenlimit und Drucklimit begrenzen sich bei 1:500 auf demselben Niveau.
                      </strong>{" "}
                      Bessere Daten zu kaufen bringt bei diesem Maßstab nichts. Umgekehrt: wer 1:200 oder feiner
                      arbeitet, muss aus den Geodaten raus und in CAD, BIM oder LoD3 rein, sonst kauft er
                      Auflösung, die die Daten nie hergeben. (Diese Schlussfolgerung ist unsere Ableitung aus den
                      Einzelwerten, keine Aussage einer Norm. Die Datengrundlagen dazu stehen im{" "}
                      <Link
                        href="/ratgeber/massenmodell-lod-gebaeudedaten"
                        className="text-primary hover:underline font-semibold"
                      >
                        Ratgeber zu Massenmodell und LoD
                      </Link>
                      .)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* QUELLEN */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">Quellen</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { t: "Biljecki, Ledoux, Du, Stoter, Soon, Khoo (2016): The most common geometric and semantic errors in CityGML datasets. ISPRS Annals IV-2/W1, 13-22", u: "https://isprs-annals.copernicus.org/articles/IV-2-W1/13/2016/" },
                { t: "Gao, Peters, Ledoux, Stoter (2024): Filling holes in LoD2 building models. ISPRS Annals X-4/W5-2024", u: "https://isprs-annals.copernicus.org/articles/X-4-W5-2024/171/2024/" },
                { t: "val3dity, Validierung von 3D-Primitiven nach ISO 19107 (TU Delft)", u: "https://val3dity.readthedocs.io/" },
                { t: "QGIS-Plugin DEMto3D", u: "https://plugins.qgis.org/plugins/DEMto3D/" },
                { t: "QGIS2threejs, Changelog (STL-Export in v2.0 entfernt)", u: "https://github.com/minorua/Qgis2threejs/blob/master/CHANGELOG.md" },
                { t: "BlenderGIS", u: "https://github.com/domlysz/BlenderGIS" },
                { t: "Prusa Knowledge Base: Layers and perimeters", u: "https://help.prusa3d.com/article/layers-and-perimeters_1748" },
                { t: "Prusa Blog: Everything about nozzles with a different diameter", u: "https://blog.prusa3d.com/everything-about-nozzles-with-a-different-diameter_8344/" },
                { t: "Formlabs: Minimum wall thickness in 3D printing", u: "https://formlabs.com/blog/minimum-wall-thickness-3d-printing/" },
                { t: "Graphisoft: ArchiCAD Interoperability (STL, OBJ)", u: "https://help.graphisoft.com/AC/27/INT/_AC27_Help/120_Interoperability/120_Interoperability-12.htm" },
              ].map((s) => (
                <li key={s.u} className="flex gap-2">
                  <span className="text-primary">&middot;</span>
                  <a href={s.u} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                    {s.t}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-6 leading-relaxed">
              Die Maßstabs-Tabelle und die Umkehrrechnung sind von uns gerechnet, die Eingangswerte sind belegt.
              Die 0,8-mm-Faustregel ist eine breit anerkannte Empfehlung, keine Herstellernorm. Die Angabe zur
              Extrusionsbreite von rund 0,45 mm entspricht dem PrusaSlicer-Standardwert bei einer 0,4-mm-Düse.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-[-0.02em]">Häufige Fragen</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <Card key={f.question}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{f.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default DatenaufbereitungGuide;
