import { TrendingUp, Calculator, Clock, Package, FileText, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HowToSchema from "@/components/HowToSchema";
import ContextualLinks from "@/components/ContextualLinks";
import ConversionBanner from "@/components/ConversionBanner";
import StickyCTA from "@/components/landing/StickyCTA";
const KostenGuide = () => {
  const costFactors = [{
    icon: Package,
    title: "Volumen & Größe",
    description: "Je größer das Bauteil, desto mehr Material und Druckzeit wird benötigt. Ein kleines Teil (5x5x5cm) kostet typischerweise 15-30€, während größere Teile (20x20x20cm) 80-150€ kosten können."
  }, {
    icon: Clock,
    title: "Druckzeit",
    description: "Die Druckzeit ist ein entscheidender Kostenfaktor. Einfache Teile können in 2-4 Stunden gedruckt werden, komplexe Geometrien benötigen 12-48 Stunden. Express-Service (24h) kostet ca. 30% Aufpreis."
  }, {
    icon: FileText,
    title: "Material",
    description: "Standardmaterialien wie PLA kosten 3-5€ pro 100g, während technische Materialien wie Carbon-PETG oder ASA 8-15€ pro 100g kosten. Wir verwenden ausschließlich österreichisches Premium-Filament."
  }, {
    icon: TrendingUp,
    title: "Komplexität",
    description: "Komplexe Geometrien mit vielen Stützstrukturen erhöhen den Materialverbrauch um 20-40%. Nachbearbeitung (Finish, Schleifen, Lackieren) kostet zusätzlich 15-50€ je nach Aufwand."
  }];
  const priceExamples = [{
    title: "Kleines Prototypen-Teil",
    size: "5x5x5cm",
    material: "PLA",
    time: "3 Stunden",
    price: "18-25€",
    description: "Ideal für erste Anschauungsmodelle und Präsentationsmodelle"
  }, {
    title: "Mittleres Präsentationsmodell",
    size: "10x10x8cm",
    material: "PETG",
    time: "8 Stunden",
    price: "45-65€",
    description: "Perfekt für Architekturmodelle, Messeexponate und Designmodelle"
  }, {
    title: "Großes technisches Teil",
    size: "20x15x12cm",
    material: "Carbon-PETG",
    time: "24 Stunden",
    price: "120-180€",
    description: "Für belastbare Modelle, Vorrichtungen und Anschauungsobjekte"
  }, {
    title: "Komplexes Architekturmodell",
    size: "25x25x15cm",
    material: "PLA (weiß)",
    time: "36 Stunden",
    price: "200-280€",
    description: "Detaillierte Architekturmodelle mit Nachbearbeitung und Finish"
  }];
  const savingTips = ["Optimieren Sie Ihr 3D-Modell: Reduzieren Sie unnötige Wandstärken und Vollmaterial", "Wählen Sie die richtige Auflösung: Nicht jedes Teil benötigt 0.1mm Schichthöhe", "Mehrere Teile kombinieren: Bestellen Sie mehrere Teile gleichzeitig für bessere Konditionen", "Standardmaterialien nutzen: PLA und PETG sind günstiger als Spezialmaterialien", "Auf Express verzichten: Standardlieferzeit spart 30% gegenüber 24h-Service", "Eigenfinish: Nachbearbeitung selbst übernehmen kann 30-50€ sparen"];
  return <>
      <SEOHead title="3D-Druck Kosten 2026: Echte Preise + 6 Spartipps [Guide]" description="Was kostet 3D-Druck wirklich? Preisbeispiele: Kleinteil ab €25, Messemodell ab €150 – plus 6 Spartipps für bis zu 30% weniger beim nächsten Auftrag." keywords="3d-druck kosten, was kostet 3d-druck, 3d-druck preise, 3d drucken lassen kosten, fdm 3d-druck kosten, 3d-druck preis pro stück" path="/ratgeber/kosten-guide" schemaType="article" datePublished="2025-11-01" dateModified="2026-05-01" />
      <HowToSchema
        name="3D-Druck Kosten berechnen – Schritt für Schritt"
        description="So ermitteln Sie die Kosten für Ihr 3D-Druck Projekt in Österreich."
        totalTime="PT10M"
        steps={[
          { name: "Projektgröße bestimmen", text: "Messen Sie die Abmessungen Ihres gewünschten 3D-Druck-Objekts (Länge × Breite × Höhe in cm). Größere Objekte benötigen mehr Material und Druckzeit." },
          { name: "Material wählen", text: "Wählen Sie das passende Material: PLA (ab €3/100g, ideal für Modellbau), PETG (ab €5/100g, für Outdoor), oder ASA (ab €7/100g, UV-beständig)." },
          { name: "Qualitätsstufe festlegen", text: "Wählen Sie die Schichthöhe: Standard (0,2mm – günstig), Fine (0,15mm – Präsentation), Ultra Fine (0,1mm – Wettbewerb). Feinere Schichten = längere Druckzeit." },
          { name: "Express oder Standard?", text: "Standard-Lieferung (3–5 Werktage) ist im Basispreis enthalten. Express 24h kostet ca. 50% Aufpreis – lohnt sich bei Messeterminen und Wettbewerbsabgaben." },
          { name: "Kostenloses Angebot anfordern", text: "Senden Sie Ihre 3D-Datei (STL, OBJ, STEP) an office@ek-druck.at oder über das Kontaktformular. Sie erhalten innerhalb von 6 Stunden ein verbindliches Festpreisangebot." }
        ]}
      />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: "/"
    }, {
      name: "Ratgeber",
      url: "/ratgeber"
    }, {
      name: "Kosten Guide",
      url: "/ratgeber/kosten-guide"
    }]} />
      <FAQSchema 
        faqs={[
          {
            question: "Warum ist 3D-Druck günstiger als traditionelle Fertigung?",
            answer: "3D-Druck benötigt keine teuren Werkzeuge, Formen oder Vorrichtungen. Sie zahlen nur für Material und Druckzeit. Bei Prototypen und Einzelanfertigungen ist FDM 3D-Druck oft günstiger als CNC-Fräsen oder Spritzguss."
          },
          {
            question: "Gibt es Mengenrabatte?",
            answer: "Ja! Ab 5 identischen Teilen gewähren wir 10% Rabatt, ab 20 Teilen 15% und ab 50 Teilen 20%. Für Großserien (100+ Teile) erstellen wir individuelle Angebote."
          },
          {
            question: "Was kostet der Versand innerhalb Österreichs?",
            answer: "Der Standardversand (2-3 Werktage) ist bei Bestellungen ab 50€ kostenlos. Darunter berechnen wir 4,90€. Express-Versand (24h) kostet zusätzlich 12,90€."
          },
          {
            question: "Kann ich vor der Bestellung einen Kostenvoranschlag erhalten?",
            answer: "Absolut! Nutzen Sie unseren kostenlosen Online-Kostenrechner oder senden Sie uns Ihre 3D-Datei zu. Innerhalb von 24 Stunden erhalten Sie ein unverbindliches Angebot."
          },
          {
            question: "Was ist der Unterschied zwischen PLA, PETG und ASA?",
            answer: "PLA (3-5€/100g) ist ideal für Prototypen und Anschauungsmodelle. PETG (5-7€/100g) ist robuster und für langlebige Objekte geeignet. ASA (7-10€/100g) ist UV- und witterungsbeständig, perfekt für Außenanwendungen."
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Article Header */}
        <article className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link href="/ratgeber" className="hover:text-primary">Ratgeber</Link>
                <span>/</span>
                <span>Kosten Guide</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Kosten & Preise</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                <span className="text-primary">3D-Druck Kosten</span> in Österreich: Der ultimative Preisguide 2025
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>Zuletzt aktualisiert: Januar 2025</span>
                <span>•</span>
                <span>8 Min. Lesezeit</span>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Sie möchten ein 3D-Druck Projekt umsetzen, aber wissen nicht, mit welchen <strong className="text-foreground">3D-Druck Kosten</strong> Sie rechnen müssen? In diesem umfassenden Guide erklären wir Ihnen alle Kostenfaktoren, zeigen Ihnen reale Preisbeispiele und geben Ihnen praktische Spartipps an die Hand.
              </p>
            </div>

            {/* Conversion Banner – fängt User mit Kaufintention sofort ab */}
            <ConversionBanner
              headline="Sie wollen direkt 3D drucken lassen?"
              subline="STL-Datei hochladen und in 60 Sekunden den exakten Richtpreis für Ihr Modell berechnen – ohne diesen Artikel lesen zu müssen."
              primaryLabel="Zum Kostenrechner"
              primaryHref="/kostenrechner"
              secondaryLabel="Persönliches Angebot"
              secondaryHref="/kontakt"
            />

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Wie setzen sich 3D-Druck Kosten zusammen?</h2>
              <p className="text-muted-foreground mb-6">
                Die Kosten für 3D-gedruckte Teile hängen von mehreren Faktoren ab. Anders als bei traditionellen Fertigungsverfahren spielt die Stückzahl beim FDM 3D-Druck eine untergeordnete Rolle – ein einzelnes Teil kostet pro Stück fast genauso viel wie mehrere Teile. Das macht 3D-Druck besonders attraktiv für Prototypen und Einzelanfertigungen.
              </p>
            </section>

            {/* Cost Factors */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Die 4 wichtigsten Kostenfaktoren</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {costFactors.map((factor, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <factor.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{factor.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{factor.description}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </section>

            {/* Price Examples */}
            <section className="mb-16 bg-muted/30 -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Konkrete Preisbeispiele aus der Praxis</h2>
              <p className="text-muted-foreground mb-8">
                Hier finden Sie reale Preisbeispiele aus unserem täglichen Geschäft. Alle Preise verstehen sich inklusive Material, Druckzeit und Standardversand innerhalb Österreichs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {priceExamples.map((example, index) => <Card key={index} className="relative">
                  <CardHeader>
                      <CardTitle className="text-xl mb-2">{example.title}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground mt-1">
                        <div className="flex justify-between">
                          <span>Größe:</span>
                          <span className="font-medium text-foreground">{example.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Material:</span>
                          <span className="font-medium text-foreground">{example.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Druckzeit:</span>
                          <span className="font-medium text-foreground">{example.time}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary mb-3">{example.price}</div>
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    </CardContent>
                  </Card>)}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Hinweis:</strong> Die angegebenen Preise sind Richtwerte und können je nach genauer Geometrie, Materialwahl und Zusatzleistungen variieren. Für ein exaktes Angebot nutzen Sie unseren kostenlosen Kostenrechner oder kontaktieren Sie uns direkt.
                </p>
              </div>
            </section>

            {/* Savings Tips */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">6 Tipps: So sparen Sie bei Ihrem 3D-Druck Projekt</h2>
              <div className="space-y-4">
                {savingTips.map((tip, index) => <Card key={index}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground pt-1">{tip}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Häufig gestellte Fragen zu 3D-Druck Kosten</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>Warum ist 3D-Druck günstiger als traditionelle Fertigung?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    3D-Druck benötigt keine teuren Werkzeuge, Formen oder Vorrichtungen. Sie zahlen nur für Material und Druckzeit. Bei Prototypen und Einzelanfertigungen ist FDM 3D-Druck oft günstiger als CNC-Fräsen oder Spritzguss.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>Gibt es Mengenrabatte?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ja! Ab 5 identischen Teilen gewähren wir 10% Rabatt, ab 20 Teilen 15% und ab 50 Teilen 20%. Für Großserien (100+ Teile) erstellen wir individuelle Angebote.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>Was kostet der Versand innerhalb Österreichs?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Der Standardversand (2-3 Werktage) ist bei Bestellungen ab 50€ kostenlos. Darunter berechnen wir 4,90€. Express-Versand (24h) kostet zusätzlich 12,90€.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>Kann ich vor der Bestellung einen Kostenvoranschlag erhalten?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolut! Nutzen Sie unseren kostenlosen Online-Kostenrechner oder senden Sie uns Ihre 3D-Datei zu. Innerhalb von 24 Stunden erhalten Sie ein unverbindliches Angebot.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      <span>Was ist der Unterschied zwischen PLA, PETG und ASA?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    PLA (3-5€/100g) ist ideal für Prototypen und Anschauungsmodelle. PETG (5-7€/100g) ist robuster und für langlebige Objekte geeignet. ASA (7-10€/100g) ist UV- und witterungsbeständig, perfekt für Außenanwendungen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* CTA */}
            

            {/* Related Articles */}
            <section className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Weitere hilfreiche Artikel</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">FDM 3D-Druck Verfahren</CardTitle>
                    <CardDescription>Alles über das FDM-Verfahren von ekdruck</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/fdm-3d-druck">FDM-Verfahren entdecken →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">3D-Druck Materialien</CardTitle>
                    <CardDescription>PLA, PETG, ASA und Carbon-PA im Vergleich</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/3d-druck-materialien">Alle Materialien ansehen →</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Rapid Prototyping</CardTitle>
                    <CardDescription>Designprototypen in 24-48h</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href="/rapid-prototyping">Prototyping starten →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </article>

        <StickyCTA context="Kosten-Guide" />
        <Footer />
      </div>

      {/* SEO Internal Linking → Money Pages */}
      <ContextualLinks
        eyebrow="Konkrete nächste Schritte"
        heading="Vom Kostenwissen zur 3D-Druck Anfrage"
        description="Sie kennen jetzt die Preisfaktoren – nutzen Sie dieses Wissen für Ihr Projekt."
        paragraphs={[
          {
            parts: [
              { before: "Um die genauen Kosten Ihres Modells zu berechnen, nutzen Sie unseren ", anchor: "interaktiven 3D-Druck Kostenrechner", href: "/kostenrechner", after: " mit STL-Upload und Live-Preisindikation. Bei Fragen zur Materialwahl hilft Ihnen unser " },
              { anchor: "ausführlicher Material-Guide", href: "/ratgeber/material-guide", after: " mit Vergleichstabellen und Anwendungs-Tipps." },
            ],
          },
          {
            parts: [
              { before: "Architekten finden im ", anchor: "Architekturmodell-Guide", href: "/ratgeber/architekturmodell-guide", after: " konkrete Maßstabs-Empfehlungen, Messeaussteller im " },
              { anchor: "Messemodell-Guide", href: "/ratgeber/messemodell-guide", after: " bewährte Strategien für Last-Minute-Termine. Ein Vergleich aller Verfahren steht im " },
              { anchor: "Verfahrensvergleich 3D-Druck vs. Modellbau", href: "/ratgeber/verfahrens-vergleich", after: " bereit." },
            ],
          },
          {
            parts: [
              { before: "Firmen mit regelmäßigem 3D-Druck-Bedarf erhalten als ", anchor: "B2B-Firmenkunden", href: "/firmenkunden", after: " Mengenrabatte ab 5 Stück, UID-Rechnung und einen festen Ansprechpartner. Persönliche Beratung jederzeit über das " },
              { anchor: "Kontaktformular", href: "/kontakt", after: " – wir antworten innerhalb von 6 Stunden." },
            ],
          },
        ]}
        actions={[
          { label: "Kostenrechner öffnen", href: "/kostenrechner", description: "STL hochladen → Richtpreis in 60 Sekunden" },
          { label: "Anfrage senden", href: "/kontakt", description: "Festpreisangebot binnen 6 Stunden" },
          { label: "B2B-Konditionen", href: "/firmenkunden", description: "Mengenrabatte, UID-Rechnung, NDA" },
          { label: "Material-Guide", href: "/ratgeber/material-guide", description: "PLA, PETG, ASA, Carbon im Detail" },
        ]}
        variant="muted"
      />
    </>;
  };
export default KostenGuide;