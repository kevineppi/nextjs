import { Leaf, Thermometer, Zap, Shield, Droplet, Sun } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AIChatWidget from "@/components/AIChatWidget";
import HowToSchema from "@/components/HowToSchema";
import ConversionBanner from "@/components/ConversionBanner";
const MaterialGuide = () => {
  const materialComparison = [{
    property: "Zugfestigkeit",
    pla: "50-70 MPa",
    petg: "50-60 MPa",
    asa: "40-50 MPa",
    unit: "Höher = fester"
  }, {
    property: "E-Modul",
    pla: "3.5 GPa",
    petg: "2.1 GPa",
    asa: "2.0 GPa",
    unit: "Steifigkeit"
  }, {
    property: "Bruchdehnung",
    pla: "2-5%",
    petg: "30-100%",
    asa: "25-50%",
    unit: "Flexibilität"
  }, {
    property: "Glasübergangstemperatur",
    pla: "60-65°C",
    petg: "75-80°C",
    asa: "95-105°C",
    unit: "Max. Einsatztemp."
  }, {
    property: "Drucktemperatur",
    pla: "190-220°C",
    petg: "230-250°C",
    asa: "240-260°C",
    unit: "Extruder"
  }, {
    property: "UV-Beständigkeit",
    pla: "Gering",
    petg: "Mittel",
    asa: "Sehr gut",
    unit: "Außeneinsatz"
  }, {
    property: "Chemikalienbeständigkeit",
    pla: "Gering",
    petg: "Gut",
    asa: "Sehr gut",
    unit: "Öle, Säuren"
  }, {
    property: "Preis",
    pla: "20-30€/kg",
    petg: "25-35€/kg",
    asa: "35-50€/kg",
    unit: "Pro Kilogramm"
  }];
  return <>
      <SEOHead title="PLA vs PETG vs ASA: Filament Vergleich [2026 Guide]" description="Falsches Filament = weggeworfenes Geld. PLA (Modellbau), PETG (Outdoor & technisch), ASA (UV-beständig) – Vergleich mit Temperaturen, Kosten & klarer Materialempfehlung." keywords="pla vs petg, asa vs pla, asa vs petg, filament vergleich, 3d-druck materialien, pla vs asa, welches filament" path="/ratgeber/material-guide" schemaType="article" datePublished="2025-10-15" dateModified="2026-05-01" />
      <HowToSchema
        name="Das richtige 3D-Druck Material wählen"
        description="In 4 Schritten zum optimalen Filament für Ihr 3D-Druck-Projekt."
        totalTime="PT5M"
        steps={[
          { name: "Einsatzort bestimmen", text: "Indoor-Modelle → PLA. Outdoor oder UV-Belastung → ASA. Lebensmittelkontakt oder Transparenz → PETG." },
          { name: "Temperaturanforderung prüfen", text: "PLA verträgt bis 60°C. PETG bis 80°C. ASA bis 105°C. Wählen Sie das Material passend zur maximalen Einsatztemperatur." },
          { name: "Optik & Finish definieren", text: "Matte weiße Oberfläche für Architekturmodelle → PLA Premium Weiß. Hochglanz oder transparent → PETG. Lackierbar & schleifbar → ABS oder ASA." },
          { name: "Budget kalkulieren", text: "PLA: €20–30/kg (günstigst). PETG: €25–35/kg (Mittelklasse). ASA: €35–50/kg (Premium). Tipp: PLA deckt 80% aller Modellbau-Anwendungen optimal ab." }
        ]}
      />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "Ratgeber",
      url: "/ratgeber"
    }, {
      name: "Material Guide",
      url: "/ratgeber/material-guide"
    }]} />

      <div className="min-h-screen bg-background">
        <Navigation />

        <article className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link href="/ratgeber" className="hover:text-primary">Ratgeber</Link>
                <span>/</span>
                <span>Material Guide</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Materialkunde</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                PLA, PETG oder ASA? Der wissenschaftliche Material-Guide
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>Zuletzt aktualisiert: Januar 2025</span>
                <span>•</span>
                <span>10 Min. Lesezeit</span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Die Wahl des richtigen Materials ist entscheidend für den Erfolg Ihres 3D-Druck-Projekts. In diesem wissenschaftlich fundierten Guide vergleichen wir die drei wichtigsten FDM-Materialien anhand ihrer mechanischen Eigenschaften, Temperaturbeständigkeit und praktischen Anwendungsfälle.
              </p>
            </div>

            {/* Conversion Banner – User mit Buying-Intent direkt zum Rechner */}
            <ConversionBanner
              headline="Material schon gewählt? Direkt 3D drucken lassen."
              subline="Wenn Sie Ihr Material kennen: Material wählen, STL-Datei hochladen, Festpreis erhalten – Angebot in 6 Stunden."
              primaryLabel="Jetzt anfragen"
              primaryHref="/kostenrechner"
              secondaryLabel="B2B-Konditionen"
              secondaryHref="/firmenkunden"
            />

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-3xl font-bold mb-6 text-foreground">Thermoplastische Kunststoffe im FDM-Druck</p>
              <p className="text-muted-foreground mb-4">
                FDM-3D-Druck verwendet thermoplastische Polymere, die sich bei Erwärmung verformen lassen und beim Abkühlen ihre Form behalten. Die drei am häufigsten verwendeten Materialien – PLA (Polylactid), PETG (Polyethylenterephthalat-Glycol) und ASA (Acrylnitril-Styrol-Acrylat) – unterscheiden sich fundamental in ihrer chemischen Struktur und damit in ihren physikalischen Eigenschaften.
              </p>
              <p className="text-muted-foreground mb-6">
                Wissenschaftliche Studien zeigen, dass die Wahl des Materials die mechanischen Eigenschaften eines gedruckten Bauteils um bis zu 300% beeinflussen kann. Daher ist fundiertes Wissen über Materialeigenschaften essentiell für erfolgreiche Projekte.
              </p>
            </section>

            {/* Material Comparison Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Wissenschaftlicher Materialvergleich</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Eigenschaft</TableHead>
                      <TableHead className="font-bold">PLA</TableHead>
                      <TableHead className="font-bold">PETG</TableHead>
                      <TableHead className="font-bold">ASA</TableHead>
                      <TableHead className="font-bold text-muted-foreground">Info</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {materialComparison.map((row, index) => <TableRow key={index}>
                        <TableCell className="font-medium">{row.property}</TableCell>
                        <TableCell>{row.pla}</TableCell>
                        <TableCell>{row.petg}</TableCell>
                        <TableCell>{row.asa}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{row.unit}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Quellen: ASTM D638 Zugprüfung, ISO 178 Biegeprüfung, verschiedene wissenschaftliche Studien (2023-2025)
              </p>
            </section>

            {/* PLA Section */}
            <section className="mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">PLA (Polylactid)</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Chemische Struktur & Eigenschaften</h3>
                <p className="text-muted-foreground mb-4">
                  PLA ist ein biobasierter, biologisch abbaubarer Polyester, der aus nachwachsenden Rohstoffen wie Maisstärke oder Zuckerrohr hergestellt wird. Die chemische Formel (C₃H₄O₂)ₙ zeigt eine einfache Struktur mit Ester-Bindungen, die für gute Steifigkeit aber begrenzte Flexibilität sorgt.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Fakt:</strong> Studien zeigen, dass PLA eine Zugfestigkeit von 50-70 MPa erreicht, vergleichbar mit technischen Kunststoffen wie ABS. Der E-Modul von 3.5 GPa macht PLA zum steifsten der drei Standardmaterialien, was sich ideal für stabile Strukturen eignet.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vorteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>✓ Biobasiert und kompostierbar (industriell)</p>
                    <p>✓ Geruchsneutral beim Drucken</p>
                    <p>✓ Ausgezeichnete Maßhaltigkeit</p>
                    <p>✓ Keine beheizte Druckplatte erforderlich</p>
                    <p>✓ Niedrigster Energieverbrauch beim Druck</p>
                    <p>✓ Günstigster Preis (20-30€/kg)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nachteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>− Niedrige Temperaturbeständigkeit (max. 60°C)</p>
                    <p>− Spröde bei Schlagbelastung</p>
                    <p>− UV-degradation über Zeit</p>
                    <p>− Nicht für Außenanwendungen geeignet</p>
                    <p>− Feuchtigkeitsempfindlich (hydrolytischer Abbau)</p>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Ideale Anwendungen für PLA:</h4>
                <p className="text-muted-foreground">
                  Prototypen, Anschauungsmodelle, Innenanwendungen, dekorative Objekte, nicht belastete Gehäuse, Bildungsbereich, Kunst und Design
                </p>
              </div>
            </section>

            {/* PETG Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">PETG (Polyethylenterephthalat-Glycol)</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Chemische Struktur & Eigenschaften</h3>
                <p className="text-muted-foreground mb-4">
                  PETG ist eine modifizierte Form von PET (bekannt aus Plastikflaschen), bei der Glycol hinzugefügt wurde, um die Kristallisation zu verhindern und Druckbarkeit zu verbessern. Diese Modifikation erhöht die Schlagzähigkeit dramatisch im Vergleich zu PLA.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Fakt:</strong> PETG zeigt eine Bruchdehnung von 30-100% (vs. 2-5% bei PLA), was auf seine semi-kristalline Struktur zurückzuführen ist. Die Glasübergangstemperatur von 75-80°C macht es für Anwendungen bis 70°C geeignet. Studien belegen eine exzellente Schlagfestigkeit von 8-10 kJ/m² (Charpy-Test).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vorteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>✓ Exzellente Schlagfestigkeit</p>
                    <p>✓ Gute chemische Beständigkeit</p>
                    <p>✓ Lebensmittelecht (FDA-approved)</p>
                    <p>✓ Geruchsneutral</p>
                    <p>✓ UV-beständiger als PLA</p>
                    <p>✓ Hohe Transparenz möglich</p>
                    <p>✓ Recycelbar</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nachteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>− Neigung zu Stringing (Fädenbildung)</p>
                    <p>− Höhere Drucktemperatur erforderlich</p>
                    <p>− Anfälliger für Warping als PLA</p>
                    <p>− Schwieriger zu schleifen</p>
                    <p>− Etwas teurer (25-35€/kg)</p>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Ideale Anwendungen für PETG:</h4>
                <p className="text-muted-foreground">
                  Robuste Dekorationsobjekte, Gehäuse-Modelle, transparente Anschauungsobjekte, Halterungen und Befestigungen, Vitrinen, Lichteffekte, robuste Modelle
                </p>
              </div>
            </section>

            {/* ASA Section */}
            <section className="mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">ASA (Acrylnitril-Styrol-Acrylat)</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Chemische Struktur & Eigenschaften</h3>
                <p className="text-muted-foreground mb-4">
                  ASA ist ein Terpolymer, strukturell ähnlich zu ABS, aber mit überlegener UV- und Witterungsbeständigkeit durch die Acrylat-Komponente. Diese Modifikation macht ASA zur ersten Wahl für Außenanwendungen.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Fakt:</strong> Langzeit-Bewitterungstests zeigen, dass ASA nach 1000 Stunden UV-Exposition nur 5-10% seiner mechanischen Festigkeit verliert, während PLA bis zu 80% verliert. Die Glasübergangstemperatur von 95-105°C ermöglicht Anwendungen bis 90°C. ASA zeigt exzellente Beständigkeit gegen Säuren, Laugen und Öle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vorteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>✓ Hervorragende UV-Beständigkeit</p>
                    <p>✓ Hohe Witterungsbeständigkeit</p>
                    <p>✓ Höchste Temperaturbeständigkeit (bis 90°C)</p>
                    <p>✓ Exzellente Chemikalienbeständigkeit</p>
                    <p>✓ Gute mechanische Festigkeit</p>
                    <p>✓ Matte, hochwertige Oberfläche</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Nachteile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-sm">
                    <p>− Höchster Preis (35-50€/kg)</p>
                    <p>− Geruchsbelästigung beim Drucken (Styroldämpfe)</p>
                    <p>− Beheizte Druckplatte erforderlich</p>
                    <p>− Geschlossene Druckkammer empfohlen</p>
                    <p>− Höherer Energieverbrauch</p>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Ideale Anwendungen für ASA:</h4>
                <p className="text-muted-foreground">
                  Außen-Modelle, Gartendekoration, UV-belastete Präsentationsobjekte, witterungsbeständige Anschauungsmodelle, Outdoor-Messeexponate
                </p>
              </div>
            </section>

            {/* Decision Tree */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Entscheidungsbaum: Welches Material für Ihr Projekt?</h2>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      Wird das Teil Temperaturen über 60°C ausgesetzt?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2"><strong>Ja, bis 70°C:</strong> → PETG</p>
                    <p className="text-muted-foreground mb-2"><strong>Ja, bis 90°C:</strong> → ASA</p>
                    <p className="text-muted-foreground"><strong>Nein:</strong> → PLA möglich</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="w-5 h-5 text-primary" />
                      Wird das Teil im Außenbereich verwendet?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2"><strong>Ja, dauerhaft:</strong> → ASA (einzige Option)</p>
                    <p className="text-muted-foreground mb-2"><strong>Ja, gelegentlich:</strong> → PETG (1-2 Jahre haltbar)</p>
                    <p className="text-muted-foreground"><strong>Nein:</strong> → PLA oder PETG</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Wird das Teil mechanisch belastet (Stöße, Biegung)?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2"><strong>Ja, stark:</strong> → PETG (beste Schlagfestigkeit)</p>
                    <p className="text-muted-foreground mb-2"><strong>Ja, moderat:</strong> → PETG oder ASA</p>
                    <p className="text-muted-foreground"><strong>Nein:</strong> → PLA (steifer)</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplet className="w-5 h-5 text-primary" />
                      Kommt das Teil mit Chemikalien in Kontakt?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2"><strong>Ja, Öle/Benzin/Säuren:</strong> → ASA (beste Beständigkeit)</p>
                    <p className="text-muted-foreground mb-2"><strong>Ja, Wasser/Reiniger:</strong> → PETG</p>
                    <p className="text-muted-foreground"><strong>Nein:</strong> → PLA möglich</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sustainability */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Nachhaltigkeit & Umweltaspekte</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    Wissenschaftliche Fakten zur Nachhaltigkeit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">PLA - Der biobasierte Champion:</p>
                    <p>Studien zeigen einen CO₂-Fußabdruck von 0.5-1.5 kg CO₂/kg Material (vs. 3-4 kg bei ABS/ASA). PLA ist industriell kompostierbar (EN 13432) und baut sich bei 60°C und hoher Feuchtigkeit innerhalb 90 Tagen zu Wasser und CO₂ ab. Bei ekdruck verwenden wir ausschließlich österreichisches PLA-Filament.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">PETG - Recycling-Potential:</p>
                    <p>PETG ist vollständig recycelbar (Recycling-Code 1). Es kann mechanisch recycelt werden, wobei die Eigenschaften nach 2-3 Recycling-Zyklen nur minimal degradieren. Neueste Forschung zeigt, dass recyceltes PETG bis zu 90% der ursprünglichen Festigkeit behält.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">ASA - Langlebigkeit = Nachhaltigkeit:</p>
                    <p>Obwohl ASA erdölbasiert ist, macht seine extreme Langlebigkeit (20+ Jahre im Außenbereich) es nachhaltig für dauerhafte Anwendungen. Ein ASA-Teil, das 20 Jahre hält, ist nachhaltiger als 10 PLA-Teile, die alle 2 Jahre ersetzt werden müssen.</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            

            {/* Related Articles */}
            <section className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Weitere hilfreiche Artikel</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Verfahrensvergleich</CardTitle>
                    <CardDescription>FDM vs. SLA vs. SLS</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/ratgeber/verfahrens-vergleich">Mehr erfahren →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Kosten-Guide</CardTitle>
                    <CardDescription>Was kostet 3D-Druck?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/ratgeber/kosten-guide">Mehr erfahren →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Nachhaltigkeit</CardTitle>
                    <CardDescription>Umweltaspekte im 3D-Druck</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/ratgeber/nachhaltigkeit-guide">Demnächst →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </article>

        <AIChatWidget />
        <Footer />
      </div>
    </>;
  };
export default MaterialGuide;