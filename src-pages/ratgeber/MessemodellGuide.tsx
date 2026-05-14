import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import { ArrowRight, CheckCircle, Clock, Euro, Package, Zap, ChevronRight } from "lucide-react";
import HowToSchema from "@/components/HowToSchema";
import StickyCTA from "@/components/landing/StickyCTA";

const MessemodellGuide = () => {
  const faqs = [
    {
      question: "Was kostet ein 3D-gedrucktes Messemodell?",
      answer: "Kleine Produktmodelle (unter 20cm) starten ab ca. €30–80. Mittlere Messemodelle (20–50cm) liegen zwischen €80–250. Große Eyecatcher-Objekte (50cm–2m) kosten €200–1.000+, je nach Komplexität und Nachbearbeitung. Ein kostenloses Angebot erhalten Sie innerhalb von 6 Stunden."
    },
    {
      question: "Wie lange dauert die Produktion eines Messemodells?",
      answer: "Express-Service: 24–48h nach Auftragsbestätigung. Standard: 3–5 Werktage. Großprojekte (über 1m, mehrteilig): 5–10 Tage. Bei kurzfristigen Messeterminen immer Express-Option anfragen."
    },
    {
      question: "Welche Dateiformate brauche ich für ein Messemodell?",
      answer: "STL, OBJ, STEP oder 3MF. Diese können aus allen gängigen CAD-Programmen exportiert werden: SolidWorks, Fusion 360, Cinema 4D, Blender. Kein 3D-Modell vorhanden? Wir erstellen es auf Basis von Zeichnungen oder Fotos."
    },
    {
      question: "Können Messemodelle transportiert werden?",
      answer: "Ja – PLA und PETG-Modelle sind bis zu 70% leichter als Holz oder Metall. Große Objekte werden mehrteilig gefertigt und lassen sich einfach demontieren. Wir verwenden bruchsichere Verpackung für den Versand."
    },
    {
      question: "Wie exakt können Firmenfarben umgesetzt werden?",
      answer: "Wir bieten über 20 Standard-Filamentfarben. Corporate-Farben können durch Sonderfilamente oder professionelle Lackierung nach RAL/Pantone exakt erreicht werden. Für große Projekte empfehlen wir eine Farbprobe vorab."
    }
  ];

  return (
    <>
      <SEOHead
        title="Messemodell planen: Kosten, Timeline & Material [2026]"
        description="Wie früh bestellen, welches Material, was Express kostet: die Checkliste für die Messevorbereitung. Messemodell ab €30 – pünktlich zur Messe."
        keywords="messemodell kosten, messemodell planen, messemodell 3d druck, messemodell erstellen lassen, messemodell material, 3d druck messe guide"
        path="/ratgeber/messemodell-guide"
        type="article"
        schemaType="article"
        datePublished="2025-10-10"
        dateModified="2026-04-26"
      />

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Messemodell Guide", url: "/ratgeber/messemodell-guide" }
      ]} />

      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="Messemodell im 3D-Druck bestellen – Schritt für Schritt"
        description="So planen und bestellen Sie Ihr 3D-gedrucktes Messemodell rechtzeitig und stressfrei."
        totalTime="PT15M"
        steps={[
          { name: "Messetermin & Modellgröße festlegen", text: "Bestimmen Sie den Messetermin und die gewünschte Modellgröße. Planen Sie mindestens 7 Tage Vorlauf ein (Express 24h möglich)." },
          { name: "3D-Datei vorbereiten oder anfragen", text: "Exportieren Sie Ihr 3D-Modell als STL, OBJ oder STEP. Kein 3D-Modell? Wir erstellen es auf Basis von Fotos oder Zeichnungen." },
          { name: "Material und Farbe wählen", text: "PLA für leichte Indoor-Modelle, PETG für transparente Elemente oder Outdoor. Corporate-Farben durch Speziallackierung möglich." },
          { name: "Angebot anfordern", text: "Senden Sie Ihre Datei an office@ek-druck.at. Sie erhalten in 6 Stunden ein kostenloses Festpreisangebot mit Liefertermin." },
          { name: "Fertigung und Lieferung", text: "Nach Bestätigung starten wir sofort. Standard 3–5 Tage, Express 24–48h. Bruchsichere Verpackung für den Messetransport." }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-28 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Messemodell Guide</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              10 Min. Lesezeit · Oktober 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Messemodelle im 3D-Druck:<br />
              <span className="text-primary">Kosten, Planung & Tipps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Wie plane ich ein Messemodell? Was kostet es? Und wie bekomme ich es rechtzeitig zur Messe? 
              Dieser Guide beantwortet alle Fragen – inklusive echter Preisbeispiele aus der Praxis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Kostenloses Angebot in 6h
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/messemodelle">Messemodelle ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 border-y border-border bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground mb-3">Inhalt:</p>
            <div className="flex flex-wrap gap-2">
              {["Warum 3D-Druck?", "Kosten & Preise", "Planung & Timing", "Materialwahl", "FAQ"].map((item) => (
                <span key={item} className="text-sm bg-background border border-border px-3 py-1.5 rounded-full hover:border-primary/50 cursor-pointer transition-colors">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <article className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-16">

            {/* Section 1 */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Warum 3D-Druck für Messemodelle?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Auf Messen zählt der erste Eindruck. Physische Modelle ziehen Blicke an, bleiben im Gedächtnis und ermöglichen es Besuchern, Produkte und Konzepte zu erleben – nicht nur auf Bildschirmen zu sehen.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: "70% leichter", desc: "als Holz- oder Metallmodelle – ideal für Messetransport und Aufbau" },
                  { title: "24h möglich", desc: "Express-Fertigung auch bei kurzfristigen Messeterminen" },
                  { title: "Ab €30", desc: "Kleine Produktmodelle deutlich günstiger als beim traditionellen Modellbauer" },
                  { title: "Identische Kopien", desc: "Mehrere Messestandorte? Digitale Fertigung ermöglicht exakte Reproduktionen" }
                ].map((item, i) => (
                  <Card key={i} className="border-primary/20">
                    <CardContent className="p-5">
                      <div className="text-2xl font-bold text-primary mb-1">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Gegenüber traditionellen Methoden (Schreiner, Formenbau) spart 3D-Druck typischerweise 50–80% der Kosten und 60–80% der Zeit. 
                Besonders für <Link href="/messemodelle" className="text-primary hover:underline font-medium">Express-Messemodelle</Link> gibt es keine vergleichbare Alternative.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Kosten: Was kostet ein Messemodell?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Die Kosten hängen von drei Faktoren ab: Größe, Komplexität und Nachbearbeitung. Hier sind realistische Preisspannen:
              </p>
              <Card className="mb-6 overflow-hidden">
                <div className="bg-muted/50 grid grid-cols-3 p-4 font-semibold text-sm border-b border-border">
                  <div>Kategorie</div>
                  <div>Größe</div>
                  <div className="text-primary">Preis</div>
                </div>
                {[
                  ["Kleines Produktmodell", "Bis 20cm", "€30–80"],
                  ["Mittleres Modell", "20–50cm", "€80–250"],
                  ["Großes Eyecatcher-Objekt", "50cm–1m", "€200–500"],
                  ["XXL Messeinstallation", "Über 1m", "€500–1.500+"],
                  ["3D-Logo / Schriftzug", "Nach Größe", "Ab €50"],
                ].map(([cat, size, price], i) => (
                  <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <div className="font-medium text-sm">{cat}</div>
                    <div className="text-muted-foreground text-sm">{size}</div>
                    <div className="font-semibold text-primary">{price}</div>
                  </div>
                ))}
              </Card>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-3">
                <Euro className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Tipp:</strong> Für ein genaues Angebot laden Sie Ihre 3D-Datei hoch oder beschreiben Sie Ihr Projekt. 
                  Wir erstellen Ihnen <strong className="text-foreground">kostenlos ein Angebot innerhalb von 6 Stunden</strong>.{" "}
                  <Link href="/kontakt" className="text-primary hover:underline font-medium">Jetzt anfragen →</Link>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Planung & Timing: So vermeiden Sie Stress</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Das häufigste Problem bei Messemodellen: zu wenig Zeit. Mit diesem Zeitplan sind Sie auf der sicheren Seite:
              </p>
              <div className="space-y-4">
                {[
                  { time: "4+ Wochen vor Messe", action: "Planung starten, Konzept und Größe festlegen, 3D-Datei erstellen lassen", color: "bg-green-500/10 border-green-500/30" },
                  { time: "2–3 Wochen vorher", action: "Angebot einholen, Auftrag bestätigen, Standard-Produktion startet", color: "bg-primary/10 border-primary/30" },
                  { time: "1 Woche vorher", action: "Letzte Chance für Standard-Service – oder Express mit Aufpreis", color: "bg-destructive/10 border-destructive/30" },
                  { time: "3–5 Tage vorher", action: "Nur noch Express 24–48h möglich (50% Aufpreis)", color: "bg-red-500/10 border-red-500/30" },
                ].map((item, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                    <div className="flex items-start gap-3">
                      <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-foreground" />
                      <div>
                        <div className="font-semibold text-sm mb-0.5">{item.time}</div>
                        <p className="text-sm text-muted-foreground">{item.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Materialwahl für Messemodelle</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Das richtige Material entscheidet über Optik, Gewicht und Stabilität Ihres Messemodells:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { mat: "PLA", use: "Allrounder – leicht, günstig, viele Farben", best: "Produktmodelle, Logos, Dekorationen", icon: Package },
                  { mat: "PETG", use: "Robuster, etwas flexibler als PLA", best: "Modelle mit beweglichen Teilen, häufige Handhabung", icon: CheckCircle },
                  { mat: "PLA+ / Tough PLA", use: "Verbesserte Schlagfestigkeit", best: "Modelle die oft angefasst werden", icon: Zap },
                  { mat: "Holz-/Metallfüllung", use: "Optisch edel, besonderes Finish", best: "Hochwertige Präsentation, Premium-Anmutung", icon: CheckCircle },
                ].map((item, i) => (
                  <Card key={i} className="border-2 hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="font-bold text-lg mb-1">{item.mat}</div>
                      <p className="text-sm text-muted-foreground mb-2">{item.use}</p>
                      <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md inline-block">
                        Ideal für: {item.best}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Häufige Fragen zu Messemodellen</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Bereit für Ihr Messemodell?</h2>
              <p className="text-muted-foreground mb-6">
                Kostenlose Beratung · Angebot innerhalb von 6 Stunden · Express 24h möglich
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/kontakt">
                    Kostenloses Angebot anfragen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/messemodelle">Alle Messemodell-Infos</Link>
                </Button>
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Weitere Ratgeber</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Architekturmodell Guide", link: "/ratgeber/architekturmodell-guide", desc: "Kosten, Maßstäbe & Materialien für Architekten" },
                  { title: "Material-Guide", link: "/ratgeber/material-guide", desc: "PLA vs. PETG vs. ASA – wissenschaftlich erklärt" },
                  { title: "Kosten-Guide", link: "/ratgeber/kosten-guide", desc: "Was kostet 3D-Druck wirklich?" },
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

        <StickyCTA context="Messemodell-Guide" />
        <Footer />
      </div>
    </>
  );
};

export default MessemodellGuide;
