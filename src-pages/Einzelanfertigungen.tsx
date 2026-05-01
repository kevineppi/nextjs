import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import CTASection from "@/components/landing/CTASection";
import AIChatWidget from "@/components/AIChatWidget";
import StickyCTA from "@/components/landing/StickyCTA";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import SpeakableSchema from "@/components/SpeakableSchema";
import {
  Sparkles, Lightbulb, Target, CheckCircle, ArrowRight, Clock,
  Home, Palette, MapPin, Package, Star, Layers, Ruler, Truck,
  Cpu, Eye, Building, Users
} from "lucide-react";

const faqs = [
  {
    question: "Was ist der Unterschied zwischen Einzelanfertigung und Seriendruck?",
    answer: "Einzelanfertigungen sind individuell gestaltete Anschauungsmodelle oder Unikate ab 1 Stück – maßgeschneidert für Ihren genauen Zweck. Im Gegensatz zur Serie geht jedes Projekt durch eine persönliche Beratung, bei der Material, Maßstab, Farbe und Nachbearbeitung optimal abgestimmt werden. Für Messemodelle, Architekturmodelle und spezielle Präsentationsobjekte ist die Einzelanfertigung meist die optimale Wahl."
  },
  {
    question: "Welche Dateiformate werden für Einzelanfertigungen akzeptiert?",
    answer: "Wir verarbeiten STL, STEP, OBJ, 3MF und alle gängigen 3D-CAD-Exportformate aus ArchiCAD, Revit, Rhino, SolidWorks und Fusion 360. Haben Sie nur eine Skizze, ein Foto oder eine Idee? Unser Team unterstützt auf Anfrage auch bei der 3D-Modellierung Ihres Entwurfs. Senden Sie uns Ihre Idee – wir finden gemeinsam die beste Umsetzung."
  },
  {
    question: "Wie lange dauert die Fertigung einer Einzelanfertigung?",
    answer: "Standardmäßig liefern wir in 3–7 Werktagen. Bei Express-Bedarf auch in 24–48 Stunden möglich. Nach Eingang Ihrer Datei erhalten Sie innerhalb von 6 Arbeitsstunden ein kostenloses Angebot mit konkretem Liefertermin. Der Express-Aufschlag beträgt pauschal 50% – ideal für kurzfristige Messetermine."
  },
  {
    question: "Ab welcher Größe sind Einzelanfertigungen möglich?",
    answer: "Wir fertigen Objekte von wenigen Zentimetern bis zu über 2 Metern Größe. Größere Objekte werden modular konstruiert und nahtlos zusammengefügt. Für XXL-Anschauungsmodelle, Messeblickfänger oder Architekturmodelle im Maßstab 1:50 haben wir die passende Segmentierungsstrategie – unsichtbare Verbindungen und optimierte Fügekanten."
  },
  {
    question: "Welche Materialien sind für Einzelanfertigungen verfügbar?",
    answer: "PLA, PLA+, PETG, ASA und Spezialfilamente wie Holz-Optik, Marmor-Look, Metallic oder Glow-in-the-dark stehen zur Wahl. PLA ist das meistgenutzte Material für Architektur- und Messemodelle: über 20 Farben verfügbar, gut lackierbar und biologisch abbaubar. Wir beraten Sie zum optimalen Material für Optik, Haptik und Einsatzzweck."
  },
  {
    question: "Sind Nachbearbeitungen wie Lackierung oder Beschriftung möglich?",
    answer: "Ja. Auf Anfrage bieten wir Schleifen, Grundieren und Lackierung in Wunschfarbe an. Beschriftungen können direkt eingedruckt oder aufgebracht werden. Besonders für Messemodelle und Architekturmodelle ist eine professionelle Nachbearbeitung oft der letzte Schliff, der den Unterschied macht. Sprechen Sie uns auf Ihre spezifischen Anforderungen an."
  },
  {
    question: "Gibt es Mindestbestellmengen?",
    answer: "Nein – wir fertigen bereits ab 1 Stück. Das macht uns besonders attraktiv für Unikate, Präsentationsmodelle, Messeexponate und individuelle Ausstellungsstücke. Auch für Kleinstserien von 2–20 Stück sind wir die wirtschaftlichste Wahl – keine Rüstkosten, keine Mindestbestellmengen."
  },
  {
    question: "Wie werden Maßstäbe bei Architekturmodellen umgesetzt?",
    answer: "Wir fertigen Architekturmodelle in allen gängigen Maßstäben: 1:50, 1:100, 1:200, 1:500 und darüber hinaus. Bei CAD-Daten aus ArchiCAD oder Revit exportieren Sie idealerweise im Maßstab 1:1 als STL – wir skalieren dann präzise auf den gewünschten Ausgabemaßstab. Fassadendetails, Fenster, Balkone und Dachkonstruktionen werden bis ins Detail abgebildet."
  }
];

const keywordContent = {
  title: "3D-Druck Einzelanfertigungen: Vom Konzept zur Realität",
  intro: "Ob Messemodell für Wien, Architekturmodell für ein Wettbewerbsprojekt in Graz oder ein individuelles Präsentationsobjekt für Linz – als österreichischer Spezialist für 3D-Druck Einzelanfertigungen realisieren wir Projekte, die von der Stange nicht erhältlich sind. Jedes Anschauungsmodell entsteht nach Ihren genauen Vorgaben – in Maßstab, Material, Farbe und Oberfläche.",
  blocks: [
    {
      title: "Vorteile gegenüber klassischem Modellbau",
      content: "Traditioneller Modellbau ist teuer, zeitaufwändig und schwer skalierbar. 3D-Druck Einzelanfertigungen starten ab €20, sind in 24h lieferbar und ermöglichen beliebige Geometrien. Änderungswünsche kosten nur eine neue Datei – keine teuren Nachjustierungen an Werkzeugen oder Formen. Für Architekten bedeutet das: Wettbewerbsmodell heute bestellt, übermorgen auf dem Tisch."
    },
    {
      title: "Präzision für anspruchsvolle Projekte",
      content: "Unsere FDM-Drucker erreichen Schichtauflösungen bis 0,1mm und Maßgenauigkeiten von ±0,2mm. Das ist ausreichend für detaillierte Architekturmodelle im Maßstab 1:100, technische Anschauungsobjekte und hochwertige Messepräsentationen. Fassadendetails wie Fensterrahmen, Geländer und Reliefstrukturen werden klar abgebildet."
    },
    {
      title: "Nachhaltigkeit durch lokale Fertigung",
      content: "Unsere Einzelanfertigungen entstehen in Gunskirchen, Oberösterreich – mit regionalem Filament aus Europa. Kurze Transportwege schonen die Umwelt. PLA-Materialien sind biologisch abbaubar. Nachhaltiges Wirtschaften ist für uns als österreichisches Unternehmen kein Marketingversprechen, sondern gelebte Praxis: Keine Lagerware, kein Überproduktionsverschnitt."
    },
    {
      title: "Vertraulichkeit & professionelle Abwicklung",
      content: "NDA auf Anfrage, sichere Datenhaltung und diskreter Umgang mit Ihren Konstruktionsdaten ist für uns selbstverständlich. Firmenkunden erhalten Rechnung mit ausgewiesener Mehrwertsteuer für den Vorsteuerabzug. Rahmenverträge für regelmäßige Auftraggeber auf Anfrage."
    }
  ]
};

const useCases = [
  {
    icon: Building,
    title: "Architekturmodelle",
    description: "Maßstabsgetreue Wettbewerbsmodelle, Konzeptstudien und städtebauliche Modelle für Architekten und Planungsbüros. Maßstäbe 1:50 bis 1:500.",
    details: ["CAD-Export aus ArchiCAD/Revit", "Maßstab 1:50 – 1:500", "Fassadendetails präzise", "Weiß, Grau oder Farbig"],
    link: "/architekturmodelle"
  },
  {
    icon: Users,
    title: "Messemodelle & Exponate",
    description: "Großformatige Blickfänger für Messestände, Showpieces, Produktnachbildungen und Standdekorationen. Express in 24h für kurzfristige Messetermine.",
    details: ["Objekte bis 2m+ durch Segmentierung", "Express 24h Service", "Robust & transportabel", "Jede Farbe & Finish"],
    link: "/messemodelle"
  },
  {
    icon: Eye,
    title: "Industrielle Anschauungsmodelle",
    description: "Produktvisualisierungen, Konzeptdarstellungen und Maßstabsmodelle für Kundenpräsentationen und Schulungsunterlagen. Ausschließlich zu Anschauungszwecken.",
    details: ["Produktvisualisierungen", "Konzeptmodelle", "Schulungsmodelle", "Kundenpräsentationen"],
    link: "/einzelanfertigungen"
  },
  {
    icon: Palette,
    title: "Kunstobjekte & Skulpturen",
    description: "Skulpturen, Kunstinstallationen und einzigartige Objekte für Künstler, Galerien und Innenarchitekten. Holz-Filament, Marmor-Look, Metallic.",
    details: ["Organische Formen", "Holz-/Marmor-Optik", "Limitierte Editionen", "Gussformen"],
    link: "/kunstobjekte"
  }
];

const materials = [
  {
    name: "PLA / PLA+",
    badge: "Meistgenutzt",
    color: "bg-primary/10 text-primary",
    props: ["20+ Farben", "0,1mm Auflösung", "Biologisch abbaubar", "Gut lackierbar"],
    use: "Architektur- und Messemodelle"
  },
  {
    name: "PETG",
    badge: "Transparent",
    color: "bg-accent/10 text-accent-foreground",
    props: ["Klar/transluzent", "UV-beständig", "Schlagzäh", "Hochglanz"],
    use: "Schaufenster, Lichtinstallationen"
  },
  {
    name: "ASA",
    badge: "Outdoor",
    color: "bg-muted text-foreground",
    props: ["UV-stabil", "Witterungsfest", "Lackierbar", "Schleifbar"],
    use: "Außenexponate, Outdoor-Messen"
  },
  {
    name: "Spezialfilamente",
    badge: "Premium",
    color: "bg-primary/10 text-primary",
    props: ["Holz-Optik", "Marmor-Look", "Metallic", "Glow-in-Dark"],
    use: "Kunstobjekte, Premium-Präsentationen"
  }
];

const process = [
  { step: "01", icon: Lightbulb, title: "Anfrage & Beratung", desc: "Datei senden oder Projekt beschreiben – per E-Mail, Telefon oder Kontaktformular. Kostenlose Erstberatung zur Machbarkeit." },
  { step: "02", icon: Ruler, title: "Angebot in 6h", desc: "Sie erhalten innerhalb von 6 Arbeitsstunden ein verbindliches Angebot mit Preis, Liefertermin und Materialempfehlung." },
  { step: "03", icon: Cpu, title: "Fertigung", desc: "Nach Bestätigung beginnt die Produktion. Moderne Druckfarm mit parallelen Druckern für kurze Durchlaufzeiten." },
  { step: "04", icon: Truck, title: "Lieferung österreichweit", desc: "Sichere Verpackung, DHL/GLS-Versand mit Tracking. Expresslieferung Wien 24h, ganz Österreich 1–2 Werktage." }
];

const Einzelanfertigungen = () => {
  return (
    <>
      <SEOHead
        title="3D-Druck Einzelanfertigung ab €20 | Unikat in 24h | ekdruck"
        description="Nur 1 Stück nötig? Einzelanfertigungen ab €20 per 3D-Druck ✓ Messemodelle, Architekturmodelle, Sonderformen ✓ CAD oder Skizze reicht ✓ Express 24h → Jetzt anfragen"
        keywords="3d-druck einzelanfertigung, unikat 3d-druck, einzelstück drucken lassen, maßanfertigung 3d-druck, individuelle 3d-druck modelle"
        path="/einzelanfertigungen"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Einzelanfertigungen", url: "/einzelanfertigungen" }
        ]}
      />
      <ServiceSchema
        serviceName="Individuelle Anschauungsobjekte"
        description="Individuelle Anschauungsmodelle für Messen, Architektur und Industriepräsentationen, gefertigt in Oberösterreich."
        serviceType="Service"
        offers={{ price: "20.00", priceCurrency: "EUR", description: "Einzelanfertigungen ab €20, individuell kalkuliert nach Projekt" }}
      />
      <ProductOfferSchema
        name="3D-Druck Einzelanfertigungen"
        description="Individuelle Anschauungsmodelle und Unikate per 3D-Druck. Messemodelle, Architekturmodelle, Sonderformen – ab 1 Stück."
        url="https://www.ek-druck.at/einzelanfertigungen"
        lowPrice="20"
        highPrice="500"
        category="Einzelanfertigungen 3D-Druck"
      />
      <SpeakableSchema url="https://www.ek-druck.at/einzelanfertigungen" />
      <StructuredData type="organization" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Einzelanfertigungen", url: "/einzelanfertigungen" }]} />

      <Navigation />
      <Breadcrumbs items={[{ name: "Services", url: "#" }, { name: "Einzelanfertigungen", url: "/einzelanfertigungen" }]} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Jedes Modell ein Unikat – ab 1 Stück
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Anschauungsmodelle<br />
                  <span className="text-primary">nach Maß</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                  Messemodelle, Architekturmodelle, Präsentationsmodelle – wir fertigen Ihre
                  individuellen Anschauungsobjekte präzise und termingerecht. Angebot in 6 Stunden,
                  kostenlos & unverbindlich.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: Clock, text: "Angebot in 6h" },
                    { icon: Package, text: "Ab 1 Stück" },
                    { icon: Star, text: "5.0 Google" },
                    { icon: MapPin, text: "Made in Austria" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <item.icon className="w-4 h-4 text-primary shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link href="/kontakt">Projekt besprechen <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/referenzen">Referenzen ansehen</Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "ab €20", label: "Einstiegspreis", sub: "Keine Mindestmenge" },
                  { value: "6h", label: "Angebot", sub: "Kostenlos & verbindlich", primary: true },
                  { value: "24h", label: "Express", sub: "Für dringende Termine" },
                  { value: "2m+", label: "Maximalgröße", sub: "Modular gefertigt" }
                ].map((stat, i) => (
                  <Card key={i} className={`${stat.primary ? "bg-primary text-primary-foreground" : "bg-card"} border-0 shadow-lg`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl font-bold mb-1 ${!stat.primary ? "text-primary" : ""}`}>{stat.value}</div>
                      <div className={`font-semibold mb-1 ${stat.primary ? "text-primary-foreground/90" : ""}`}>{stat.label}</div>
                      <div className={`text-sm ${stat.primary ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{stat.sub}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Legal Disclaimer ───────────────────────────────────────────── */}
        <section className="py-6">
          <div className="container mx-auto px-4 max-w-4xl mx-auto"><LegalDisclaimer /></div>
        </section>

        {/* ── Anwendungsbereiche ─────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Für welche Projekte wir da sind</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Individuelle Anschauungsmodelle für vier Kernbereiche – alle zu Anschauungszwecken
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {useCases.map((uc, i) => (
                  <Card key={i} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <uc.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{uc.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{uc.description}</p>
                          <ul className="grid grid-cols-2 gap-1">
                            {uc.details.map((d, j) => (
                              <li key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-primary shrink-0" />{d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link href={uc.link} className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1">
                          Mehr erfahren <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Prozess ───────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Von der Idee zum fertigen Modell</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">In 4 Schritten zum präsentationsreifen Anschauungsobjekt</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {process.map((step, i) => (
                  <div key={i} className="relative">
                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="text-4xl font-black text-primary/20 mb-3">{step.step}</div>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold mb-2 text-sm">{step.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                      </CardContent>
                    </Card>
                    {i < process.length - 1 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-primary/10 rounded-full items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Materialien ───────────────────────────────────────────────── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien für jede Anforderung</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Von klassischem PLA bis zu Spezialfilamenten – wir beraten Sie zum optimalen Material
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {materials.map((mat, i) => (
                  <Card key={i} className="hover:shadow-lg hover:border-primary/40 transition-all group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{mat.name}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${mat.color}`}>{mat.badge}</span>
                      </div>
                      <ul className="space-y-1.5 mb-4">
                        {mat.props.map((p, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" />{p}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-primary font-medium bg-primary/8 px-2 py-1.5 rounded-md">{mat.use}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Keyword Content ───────────────────────────────────────────── */}
        <KeywordRichContent
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* ── Liefergebiet ──────────────────────────────────────────────── */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Österreichweit & nach Deutschland</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Gefertigt in Gunskirchen, Oberösterreich – Expresslieferung in ganz Österreich und Deutschland. Persönliche Abholung möglich.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {["Wien", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Wels", "St. Pölten", "Dornbirn", "München", "Berlin"].map((city) => (
                  <span key={city} className="bg-background border border-border px-3 py-1.5 rounded-full font-medium">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <FAQSection
          faqs={faqs}
          title="Häufige Fragen zu Einzelanfertigungen"
          subtitle="Alles was Sie über individuelle Anschauungsmodelle wissen müssen"
          schemaId="einzelanfertigungen"
        />

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <CTASection
          headline="Ihr Anschauungsmodell in 6 Stunden kalkuliert"
          subline="Senden Sie uns Ihre Datei oder beschreiben Sie Ihr Projekt – wir antworten persönlich mit einem verbindlichen Angebot. Kostenlos & unverbindlich."
          ctaLabel="Jetzt Anfrage stellen"
          secondaryLabel="Referenzen ansehen"
          urgencyText="⚡ Express 24h verfügbar · Keine Mindestmenge · Made in Austria"
          legalNote="Wir fertigen ausschließlich Anschauungsmodelle zu Präsentationszwecken – keine Funktionsteile, keine Ersatzteile."
        />

        <RelatedPages currentPage="/einzelanfertigungen" title="Weitere Services" />

      </main>

      <StickyCTA context="Einzelanfertigung" />
      <AIChatWidget />
      <Footer />
    </>
  );
};

export default Einzelanfertigungen;
