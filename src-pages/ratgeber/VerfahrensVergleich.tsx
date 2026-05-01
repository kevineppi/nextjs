import { Zap, Target, DollarSign, Settings, Award, AlertCircle } from "lucide-react";
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
const VerfahrensVergleich = () => {
  const comparisonData = [{
    aspect: "Schichthöhe / Auflösung",
    fdm: "0.1 - 0.4 mm",
    sla: "0.025 - 0.1 mm",
    sls: "0.06 - 0.15 mm"
  }, {
    aspect: "Genauigkeit",
    fdm: "±0.5% (min. ±0.5mm)",
    sla: "±0.1mm",
    sls: "±0.3%"
  }, {
    aspect: "Oberflächengüte",
    fdm: "Sichtbare Schichten",
    sla: "Glatte Oberfläche",
    sls: "Leicht körnig"
  }, {
    aspect: "Stützstrukturen",
    fdm: "Erforderlich",
    sla: "Erforderlich",
    sls: "Nicht erforderlich"
  }, {
    aspect: "Materialauswahl",
    fdm: "Sehr breit",
    sla: "Photopolymere",
    sls: "Nylon, TPU"
  }, {
    aspect: "Kosten (Gerät)",
    fdm: "500€ - 5.000€",
    sla: "2.000€ - 10.000€",
    sls: "10.000€ - 100.000€+"
  }, {
    aspect: "Kosten (Material)",
    fdm: "20-50€/kg",
    sla: "100-200€/L",
    sls: "60-100€/kg"
  }];
  const fdmAdvantages = ["Niedrigste Anschaffungs- und Betriebskosten", "Breite Materialvielfalt (PLA, PETG, ASA, TPU, Composites)", "Einfache Bedienung und Wartung", "Ideal für Designstudien und Anschauungsmodelle", "Nachhaltige Materialien verfügbar (recyceltes Filament)"];
  const fdmDisadvantages = ["Geringere Oberflächenqualität (sichtbare Schichten)", "Niedrigere Detailauflösung als SLA", "Anisotrope Festigkeit (Schwächere Z-Achse)", "Stützstrukturen hinterlassen Spuren"];
  const slaAdvantages = ["Höchste Detailgenauigkeit (0.025mm Schichthöhe)", "Glatte Oberflächen ohne sichtbare Schichten", "Ideal für feine Details und komplexe Geometrien", "Isotrope mechanische Eigenschaften"];
  const slaDisadvantages = ["Höhere Material- und Gerätekosten", "Aufwendige Nachbearbeitung (Waschen, Aushärten)", "Begrenzte Materialauswahl", "Gesundheits- und Sicherheitsaspekte bei Resinhandhabung"];
  const slsAdvantages = ["Keine Stützstrukturen erforderlich", "Hohe mechanische Festigkeit", "Exzellente Oberflächenqualität", "Geeignet für Anschauungsmodelle und hochwertige Einzelstücke"];
  const slsDisadvantages = ["Sehr hohe Anschaffungskosten", "Höherer Energieverbrauch", "Begrenzte Materialauswahl", "Pulverentsorgung und -handhabung komplex"];
  return <>
      <SEOHead title="FDM vs SLA vs SLS – Welches Verfahren passt? [2026]" description="Falsches Verfahren kostet doppelt. FDM (günstig, robust), SLA (glatt, präzise), SLS (komplex, stark) – Vergleichstabelle und Empfehlung für Ihren konkreten Projekttyp." keywords="fdm vs sla, 3d druckverfahren vergleich, fdm vs sls, sla vs sls, welches 3d druckverfahren, 3d druck verfahren auswählen" path="/ratgeber/verfahrens-vergleich" schemaType="article" datePublished="2025-10-20" dateModified="2026-05-01" />
      <HowToSchema
        name="Das richtige 3D-Druckverfahren wählen"
        description="So finden Sie das optimale 3D-Druckverfahren für Ihr Projekt."
        totalTime="PT5M"
        steps={[
          { name: "Anforderungen definieren", text: "Brauchen Sie hohe Detailgenauigkeit (→ SLA), robuste Anschauungsmodelle (→ FDM), oder komplexe Geometrien ohne Stützstrukturen (→ SLS)?" },
          { name: "Budget bestimmen", text: "FDM: günstigste Option (Material ab €20/kg). SLA: mittlere Kosten (Resin ab €100/L). SLS: höchste Kosten (Pulver ab €60/kg + teure Maschinen)." },
          { name: "Oberfläche bewerten", text: "Glatte Oberfläche nötig? → SLA. Sichtbare Schichten akzeptabel? → FDM (nachbearbeitbar). Leicht körnig OK? → SLS." },
          { name: "Anbieter kontaktieren", text: "Für Anschauungsmodelle, Messemodelle und Architekturmodelle ist FDM die wirtschaftlichste Wahl. Kontaktieren Sie uns für ein kostenloses Angebot." }
        ]}
      />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "Ratgeber",
      url: "/ratgeber"
    }, {
      name: "Verfahrensvergleich",
      url: "/ratgeber/verfahrens-vergleich"
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
                <span>Verfahrensvergleich</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Technologie-Vergleich</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                FDM vs. SLA vs. SLS: Welches 3D-Druckverfahren ist das richtige?
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>Zuletzt aktualisiert: Januar 2025</span>
                <span>•</span>
                <span>12 Min. Lesezeit</span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Die Wahl des richtigen 3D-Druckverfahrens entscheidet über Erfolg oder Misserfolg Ihres Projekts. In diesem wissenschaftlich fundierten Vergleich erklären wir die technischen Unterschiede zwischen FDM, SLA und SLS und helfen Ihnen, die optimale Technologie für Ihre Anforderungen zu finden.
              </p>
            </div>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-3xl font-bold mb-6 text-foreground">Die drei wichtigsten 3D-Druckverfahren im Überblick</p>
              <p className="text-muted-foreground mb-4">
                Additive Fertigung, allgemein als 3D-Druck bekannt, beschreibt Verfahren, bei denen dreidimensionale Objekte durch schichtweises Auftragen von Material erstellt werden. Im Gegensatz zu subtraktiven Fertigungsverfahren wie Fräsen oder Drehen wird Material gezielt hinzugefügt statt abgetragen, was Materialverschwendung reduziert und komplexe Geometrien ermöglicht.
              </p>
              <p className="text-muted-foreground mb-6">
                Die drei verbreitetsten Technologien – FDM (Fused Deposition Modeling), SLA (Stereolithography) und SLS (Selective Laser Sintering) – nutzen unterschiedliche Materialien und physikalische Prozesse, was zu erheblichen Unterschieden in Detailgenauigkeit, mechanischer Festigkeit und Kosten führt.
              </p>
            </section>

            {/* Technical Comparison Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Technischer Vergleich der Verfahren</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Kriterium</TableHead>
                      <TableHead className="font-bold">FDM</TableHead>
                      <TableHead className="font-bold">SLA</TableHead>
                      <TableHead className="font-bold">SLS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => <TableRow key={index}>
                        <TableCell className="font-medium">{row.aspect}</TableCell>
                        <TableCell>{row.fdm}</TableCell>
                        <TableCell>{row.sla}</TableCell>
                        <TableCell>{row.sls}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* FDM Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">FDM (Fused Deposition Modeling)</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Wie funktioniert FDM?</h3>
                <p className="text-muted-foreground mb-4">
                  Beim FDM-Verfahren wird thermoplastisches Filament durch eine beheizte Düse geschmolzen und präzise auf einer Bauplattform abgelegt. Der Extruder bewegt sich entlang der X-, Y- und Z-Achse und trägt Material Schicht für Schicht auf, wobei jede neue Schicht mit der vorherigen verschmilzt.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Hintergrund:</strong> Die Schichtadhäsion bei FDM basiert auf der Interdiffusion von Polymerketten bei Temperaturen knapp über der Glasübergangstemperatur (Tg) des Materials. Bei PLA liegt diese bei ca. 60°C, bei PETG bei 80°C und bei ASA bei 100°C.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Vorteile von FDM
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fdmAdvantages.map((adv, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{adv}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Nachteile von FDM
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fdmDisadvantages.map((dis, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">−</span>
                          <span className="text-muted-foreground">{dis}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* SLA Section */}
            <section className="mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-foreground">SLA (Stereolithography)</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Wie funktioniert SLA?</h3>
                <p className="text-muted-foreground mb-4">
                  SLA nutzt einen UV-Laser oder eine LCD-Lichtquelle, um flüssiges Photopolymer-Harz schichtweise auszuhärten. Die Bauplattform taucht in ein Harzbad und wird nach jeder ausgehärteten Schicht minimal angehoben, sodass eine neue Harzschicht über die vorherige fließen kann.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Hintergrund:</strong> Die Aushärtung basiert auf UV-initiierter radikalischer Polymerisation. Photoinitiator-Moleküle im Harz absorbieren UV-Licht (typischerweise 405nm Wellenlänge) und erzeugen freie Radikale, die Monomerketten vernetzen und ein festes Polymer bilden.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Vorteile von SLA
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slaAdvantages.map((adv, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{adv}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Nachteile von SLA
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slaDisadvantages.map((dis, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">−</span>
                          <span className="text-muted-foreground">{dis}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* SLS Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">SLS (Selective Laser Sintering)</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Wie funktioniert SLS?</h3>
                <p className="text-muted-foreground mb-4">
                  SLS verwendet einen Hochleistungslaser, um Pulverpartikel (meist Nylon/Polyamid) selektiv zu verschmelzen. Eine dünne Pulverschicht wird auf der Bauplattform verteilt, der Laser sintert das Material nach dem digitalen Modell, dann wird eine neue Pulverschicht aufgetragen.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Wissenschaftlicher Hintergrund:</strong> Der Sinterprozess erhitzt das Pulver knapp unter den Schmelzpunkt (ca. 170-180°C bei PA12), wodurch Partikeloberflächen verschmelzen ohne vollständig zu schmelzen. Dies ermöglicht hohe Festigkeit bei geringem Verzug.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Vorteile von SLS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slsAdvantages.map((adv, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{adv}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Nachteile von SLS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {slsDisadvantages.map((dis, i) => <li key={i} className="flex items-start gap-2">
                          <span className="text-muted-foreground mt-1">−</span>
                          <span className="text-muted-foreground">{dis}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Decision Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Welches Verfahren für welchen Anwendungsfall?</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Wählen Sie FDM wenn...</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>✓ Kosteneffizienz im Vordergrund steht</p>
                    <p>✓ Robuste Anschauungsmodelle oder Designstudien benötigt werden</p>
                    <p>✓ Mechanische Belastbarkeit wichtiger ist als Oberflächenqualität</p>
                    <p>✓ Große Bauteile (20x20x20cm+) gedruckt werden sollen</p>
                    <p>✓ Nachhaltige, recycelbare Materialien verwendet werden sollen</p>
                    <p className="pt-4 font-semibold text-foreground">Beispiele: Architekturmodelle, Messeexponate, Präsentationsmodelle, Designstudien</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Wählen Sie SLA wenn...</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>✓ Höchste Detailgenauigkeit erforderlich ist</p>
                    <p>✓ Glatte Oberflächen ohne Nachbearbeitung benötigt werden</p>
                    <p>✓ Kleine, komplexe Geometrien gedruckt werden</p>
                    <p>✓ Visuelle Prototypen oder Präsentationsmodelle erstellt werden</p>
                    <p className="pt-4 font-semibold text-foreground">Beispiele: Schmuck, Dentalmodelle, Architekturmodelle, Miniaturen, Master-Modelle</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Wählen Sie SLS wenn...</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                    <p>✓ Höchste mechanische Festigkeit erforderlich ist</p>
                    <p>✓ Keine Stützstrukturen gewünscht sind</p>
                    <p>✓ Besonders detaillierte Modelle gefertigt werden</p>
                    <p>✓ Budget für professionelle Fertigung vorhanden ist</p>
                    <p className="pt-4 font-semibold text-foreground">Beispiele: Hochwertige Architekturmodelle, detaillierte Messeexponate, komplexe Designobjekte</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA */}
            

            {/* Related Articles */}
            <section className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Weitere hilfreiche Artikel</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Kosten-Guide</CardTitle>
                    <CardDescription>Was kostet 3D-Druck wirklich?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/ratgeber/kosten-guide">Mehr erfahren →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Materialien</CardTitle>
                    <CardDescription>PLA, PETG oder ASA?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/3d-druck-materialien">Mehr erfahren →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">FDM 3D-Druck</CardTitle>
                    <CardDescription>Alles über das FDM-Verfahren</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/fdm-3d-druck">Mehr erfahren →</Link>
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
export default VerfahrensVergleich;