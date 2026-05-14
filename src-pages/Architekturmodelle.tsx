import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import CTASection from "@/components/landing/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import FAQSchema from "@/components/FAQSchema";
import SpeakableSchema from "@/components/SpeakableSchema";
import QuickContactBar from "@/components/QuickContactBar";
import TrustBarSocialProof from "@/components/TrustBarSocialProof";
import StickyCTA from "@/components/landing/StickyCTA";
import { 
  Building2, 
  Layers, 
  Clock, 
  Ruler, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  Palette,
  Zap,
  Target,
  Award,
  FileCode,
  Trophy,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Quote
} from "lucide-react";

const Architekturmodelle = () => {

  const architectPainPoints = [
    {
      pain: "Modellbauer braucht 3 Wochen",
      solution: "Wir liefern in 3–5 Werktagen, Express in 24h",
      icon: Clock
    },
    {
      pain: "Wettbewerb-Deadline morgen früh",
      solution: "Express-Service – Bestellung heute, Abholung morgen",
      icon: Trophy
    },
    {
      pain: "Bauherr versteht die Pläne nicht",
      solution: "Physisches Modell: Sofortige Entscheidungsbereitschaft +40%",
      icon: Users
    },
    {
      pain: "3 Varianten – zu teuer für Modellbau",
      solution: "Parallel-Fertigung: Alle 3 Varianten gleichzeitig, Kosten halbiert",
      icon: Layers
    }
  ];

  const useCases = [
    {
      title: "Wettbewerbsmodelle",
      badge: "Häufigste Anfrage",
      badgeColor: "bg-primary/10 text-primary",
      description: "Jedes dritte Modell, das wir für Architekten fertigen, ist ein Wettbewerbsmodell. Deadlines sind heilig – deshalb garantieren wir Express in 24h für Wettbewerbsabgaben.",
      details: [
        "Express 24h für Wettbewerbstermine",
        "Weiße matte Oberfläche – klassische Jurypräsentation",
        "Mehrere Varianten parallel möglich",
        "Maßstab 1:100 bis 1:500"
      ],
      example: "Beispiel: 4-geschossiger Wohnbau, Maßstab 1:100 → ab €80, Lieferung in 3 Werktagen"
    },
    {
      title: "Bauherren-Präsentationen",
      badge: "Mehr Abschlüsse",
      badgeColor: "bg-secondary text-secondary-foreground",
      description: "Bauherren, die ein physisches Modell sehen, entscheiden schneller und häufiger positiv. Architekten berichten von spürbar weniger Rückfragen nach der Präsentation.",
      details: [
        "Detailreiche Fassadenstrukturen",
        "Transparente PETG-Glasflächen",
        "Farbige Raumaufteilungen möglich",
        "Innenraum-Schnittmodelle"
      ],
      example: "Beispiel: Einfamilienhaus mit Umgebungsmodell, Maßstab 1:50 → ab €120"
    },
    {
      title: "Baueinreichungs-Modelle",
      badge: "Behörden & Gemeinden",
      badgeColor: "bg-muted text-muted-foreground",
      description: "Behörden und Gemeinderäte genehmigen schneller, wenn sie das Projekt physisch vor sich haben. Geländemodelle zeigen die Einbettung in die Umgebung auf einen Blick.",
      details: [
        "Topografische Geländemodelle",
        "Kontext- und Umgebungsbebauung",
        "Abnehmbares Gebäude für 'Ohne Bau'-Vergleich",
        "Beschriftete Parzellen & Erschließung"
      ],
      example: "Beispiel: Quartiersentwicklung mit Bestand, Maßstab 1:200 → Anfrage empfohlen"
    },
    {
      title: "Investoren-Präsentationen",
      badge: "Höhere Abschlussquote",
      badgeColor: "bg-primary/10 text-primary",
      description: "Investoren reagieren auf physische Modelle. Was abstrakt in Plänen wirkt, wird im Modell greifbar – Volumina, Lage, Proportion. Mehrere Büros berichten von schnelleren Zusagen.",
      details: [
        "Hochglanz-Oberflächen optional",
        "Beleuchtung integrierbar",
        "Logobeschriftung am Sockel",
        "Transportkoffer optional"
      ],
      example: "Beispiel: Wohnanlage 12 Einheiten mit Umgebung, Maßstab 1:100 → ab €150"
    },
    {
      title: "Studien- & Entwurfsmodelle",
      badge: "Schnelle Iteration",
      badgeColor: "bg-accent text-accent-foreground",
      description: "In der frühen Entwurfsphase sind Geschwindigkeit und geringe Kosten entscheidend. Konzeptmodelle bereits ab €20 – ideal für Bürointernen Entwurfsprozess.",
      details: [
        "Ab €20 pro Modell",
        "Lieferung in 3 Werktagen",
        "Massen- und Kubaturstudien",
        "Entwurfsiteration unkompliziert"
      ],
      example: "Beispiel: Baukörperstudie 3 Varianten, Maßstab 1:500 → ab €45 pro Variante"
    },
    {
      title: "Städtebauliche Modelle",
      badge: "Für Gemeinden & Planer",
      badgeColor: "bg-muted text-foreground",
      description: "Quartiere, Bebauungspläne und städtebauliche Zusammenhänge visualisieren. Modularer Aufbau ermöglicht spätere Erweiterungen und flexible Phasendarstellungen.",
      details: [
        "Modularer Aufbau für Erweiterungen",
        "Phasendarstellung (Bestand/Neu)",
        "Herausnehmbare Gebäude",
        "Bis 1m+ Gesamtgröße möglich"
      ],
      example: "Beispiel: Quartiersentwicklung 8 Bauphasen, Maßstab 1:500 → individuelles Angebot"
    }
  ];

  const cadWorkflows = [
    {
      software: "ArchiCAD",
      logo: "AC",
      export: "STL-Export über 3D-Fenster → Datei → Speichern als → STL",
      tips: ["Alle unsichtbaren Schichten ausblenden", "Exportmaßstab 1:1 lassen", "Qualitätsstufe 'Fein' wählen"],
      popular: true
    },
    {
      software: "Revit",
      logo: "RV",
      export: "Exportieren → CAD-Formate → STL (Add-In erforderlich: 'STL Exporter')",
      tips: ["3D-Ansicht aktivieren", "Nur relevante Bauteile einblenden", "Einheiten auf Millimeter prüfen"],
      popular: true
    },
    {
      software: "SketchUp",
      logo: "SU",
      export: "Datei → Exportieren → 3D-Modell → STL",
      tips: ["Gruppe/Komponente für Export selektieren", "Einheiten auf mm prüfen", "Stray lines bereinigen"],
      popular: false
    },
    {
      software: "Rhino",
      logo: "RH",
      export: "Datei → Exportieren ausgewählt → STL",
      tips: ["Render-Mesh Einstellungen: 'Fein'", "Alle Flächen geschlossen (solid)", "Keine doppelten Flächen"],
      popular: false
    },
    {
      software: "Vectorworks",
      logo: "VW",
      export: "Datei → Exportieren → STL",
      tips: ["3D-Objekte selektieren", "Einheiten: mm", "Polygonkörper statt NURBS bevorzugen"],
      popular: false
    },
    {
      software: "Andere / Hilfe",
      logo: "?",
      export: "Schicken Sie uns einfach Ihr nativer Dateiformat – wir helfen beim Export",
      tips: ["DWG, IFC, PDF – wir konvertieren", "Kostenlose Beratung", "Antwort in unter 6h"],
      popular: false
    }
  ];

  const stats = [
    { value: "80%", label: "Kosteneinsparung", description: "vs. handgefertigte Modelle" },
    { value: "3–5", label: "Werktage", description: "Standard-Lieferzeit" },
    { value: "0.1mm", label: "Präzision", description: "Schichtauflösung" },
    { value: "100+", label: "Projekte", description: "für Architekten realisiert" }
  ];

  const comparisonData = [
    { feature: "Kosten", traditional: "€500–2.000+", threeDPrint: "Ab €20–200", winner: "3d" },
    { feature: "Lieferzeit", traditional: "2–4 Wochen", threeDPrint: "3–5 Werktage", winner: "3d" },
    { feature: "Änderungen", traditional: "Komplett neu", threeDPrint: "Schnelle Iteration", winner: "3d" },
    { feature: "Reproduktion", traditional: "Aufwändig", threeDPrint: "Identische Kopien", winner: "3d" },
    { feature: "Detailgenauigkeit", traditional: "Handwerklich begrenzt", threeDPrint: "0.1mm Präzision", winner: "3d" }
  ];

  const materials = [
    {
      name: "PLA Premium Weiß",
      tag: "Beliebtestes Material",
      description: "Der Klassiker für Architekturmodelle. Saubere, matte Oberfläche – ideal für Wettbewerbsmodelle und Jurypräsentationen. Einfach zu schleifen und nachzubearbeiten.",
      bestFor: ["Wettbewerbsmodelle", "Studienmodelle", "Jurypräsentationen"],
      popular: true
    },
    {
      name: "PETG Transparent",
      tag: "Glasfassaden",
      description: "Halbtransparent für Glasflächen, Fassadenelemente und Dachverglasungen. Perfekt für moderne Architektur mit großen Fensterflächen.",
      bestFor: ["Glasfassaden", "Fensterelemente", "Dachverglasungen"],
      popular: true
    },
    {
      name: "PLA Grau",
      tag: "Bestandsbebauung",
      description: "Ideal für Kontextmodelle: Bestand in Grau, Neubau in Weiß – der Klassiker für städtebauliche Modelle und Bebauungsplanung.",
      bestFor: ["Umgebungsmodelle", "Kontextdarstellung", "Stadtplanung"],
      popular: false
    },
    {
      name: "PLA Holzoptik",
      tag: "Holzbau & Alpine",
      description: "Authentische Holzmaserung für Holzbauarchitektur. Besonders beliebt bei Büros mit Vorarlberger und alpiner Architektur.",
      bestFor: ["Holzhäuser", "Alpine Architektur", "Holzkonstruktionen"],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "Die Lieferung kam pünktlich zur Wettbewerbsabgabe. Die Jury war begeistert von der Detailgenauigkeit.",
      author: "Architekturbüro, Wien",
      project: "Wohnbau-Wettbewerb, Maßstab 1:100"
    },
    {
      quote: "Drei Entwurfsvarianten parallel bestellt – in 4 Tagen alle drei auf dem Tisch. Hätten wir beim Modellbauer 6 Wochen gewartet.",
      author: "Stadtplanungsbüro, Linz",
      project: "Städtebauliche Studie, Maßstab 1:500"
    },
    {
      quote: "Der Bauherr hat das Projekt nach der Modellpräsentation sofort abgenickt. Das Modell hat sich in 5 Minuten bezahlt gemacht.",
      author: "Architekturbüro, Graz",
      project: "EFH Präsentationsmodell, Maßstab 1:50"
    }
  ];

  const faqs = [
    {
      question: "Was kostet ein 3D-gedrucktes Architekturmodell?",
      answer: "Die Kosten hängen von Größe, Detailgrad und Material ab. Einfache Studienmodelle (Baukörperstudie, Maßstab 1:500) starten ab ca. €20. Präsentationsmodelle eines Einzelgebäudes (Maßstab 1:100) liegen typischerweise zwischen €80–200. Stadtmodelle und großformatige Geländemodelle auf Anfrage. Nutzen Sie unseren Online-Konfigurator für einen sofortigen Preis."
    },
    {
      question: "Welcher Maßstab ist für Architekturmodelle am besten?",
      answer: "1:50 für detaillierte Einzelgebäude und Innenraumdarstellungen, 1:100 für Einzelgebäude und Bauherren-Präsentationen (am häufigsten), 1:200 für Ensembles und Nachbarschaftsdarstellungen, 1:500 für städtebauliche Studien und Quartiere. Wir beraten Sie gerne bei der optimalen Wahl für Ihren Anwendungsfall."
    },
    {
      question: "Wie exportiere ich mein ArchiCAD/Revit-Modell für den Druck?",
      answer: "ArchiCAD: 3D-Fenster öffnen → Datei → Speichern als → STL, Qualitätsstufe 'Fein'. Revit: benötigt das kostenlose 'STL Exporter' Add-In → Exportieren → STL. SketchUp: Datei → Exportieren → 3D-Modell → STL. Bei Problemen: Schicken Sie uns einfach Ihre native Datei, wir helfen kostenlos beim Export."
    },
    {
      question: "Wie schnell liefern Sie für Wettbewerbs-Deadlines?",
      answer: "Express-Service: Bestellung heute, Abholung/Versand morgen (24h, Aufpreis 50%). Standard: 3–5 Werktage. Persönliche Abholung in Gunskirchen, OÖ jederzeit möglich – kein Aufpreis. Sprechen Sie uns bei sehr kurzen Fristen direkt an: Wir finden fast immer eine Lösung."
    },
    {
      question: "Können Sie auch transparente Glasfassaden drucken?",
      answer: "Ja, mit PETG Transparent können Glasflächen, Fassadenelemente und Dachverglasungen halbtransparent dargestellt werden. Typischerweise werden Glaselement separat gedruckt und nachträglich eingesetzt. Das Ergebnis ist besonders überzeugend bei modernen Gebäuden mit großen Fensterfronten."
    },
    {
      question: "Ist 3D-Druck günstiger als der traditionelle Modellbauer?",
      answer: "Ja, typischerweise 60–80% günstiger. Ein Modell, das beim Modellbauer €500–1.500 kostet, liegt bei uns zwischen €80–200. Dazu kommen kürzere Lieferzeiten (3–5 Tage statt 2–4 Wochen) und die Möglichkeit, schnell Änderungen einzuarbeiten."
    },
    {
      question: "Kann ich mehrere Varianten gleichzeitig bestellen?",
      answer: "Ja, das ist einer der größten Vorteile. Wir drucken mehrere Varianten parallel – ein Vorteil, den traditionelle Modellbauer nicht bieten können. Für Entwurfsvergleiche und Variantenstudien ist dies ideal. Beim Mehrfachauftrag bieten wir oft Mengenrabatt an."
    },
    {
      question: "Wie funktioniert ein Geländemodell?",
      answer: "Auf Basis von Höhendaten (Digitalem Höhenmodell, GIS-Daten oder Ihren eigenen Geländeplänen) erstellen wir ein maßstabsgetreues Geländemodell. Das Gebäude kann abnehmbar gestaltet werden, um die Einbettung in die Topografie zu zeigen. Besonders geeignet für Hangbauten, alpine Architektur und Baueinreichungen."
    }
  ];

  const keywordContent = {
    title: "Warum immer mehr Architekten auf 3D-Druck setzen",
    intro: "Der 3D-Druck hat den Architekturmodellbau in Österreich grundlegend verändert. Was früher Wochen dauerte und tausende Euro kostete, ist heute in Tagen möglich – zu einem Bruchteil der Kosten. Architekturbüros in Wien, Linz, Graz, Salzburg und Innsbruck nutzen die Technologie, um im Wettbewerb schneller zu reagieren und Bauherren effizienter zu überzeugen.",
    blocks: [
      {
        title: "Digitaler Workflow: Von BIM direkt zum Modell",
        content: "Moderne Architekten arbeiten ohnehin in 3D – sei es in ArchiCAD, Revit, SketchUp oder Rhino. Ein STL-Export genügt, um das digitale Modell in ein physisches Objekt zu überführen. Keine zusätzliche Planung, keine Übersetzungsverluste. Änderungen am CAD-Modell können innerhalb von Stunden in eine neue Version überführt werden – für Iterationsschleifen, die im traditionellen Modellbau schlicht undenkbar wären."
      },
      {
        title: "Wettbewerbsvorteil: Schneller als die Konkurrenz",
        content: "In Architekturwettbewerben entscheiden oft Tage. Ein physisches Modell, das die Jury greifen kann, erzeugt eine andere Präsenz als ein Rendering. Mit unserem Express-Service können Architekten noch 24h vor der Abgabe bestellen und das Modell zur Deadline in Händen halten. Mehrere Büros berichten, dass sie durch den schnellen 3D-Druck-Workflow Wettbewerbe gewonnen haben, die sie mit traditionellen Methoden nie hätten einreichen können."
      },
      {
        title: "Bauherrenakzeptanz: Physisch überzeugen",
        content: "Bauherren verstehen Pläne oft nicht – das ist keine Kritik, sondern eine Realität. Ein physisches Modell löst dieses Problem auf einen Schlag: Proportionen, Raumgefühl, Einbindung in die Umgebung – all das wird sofort greifbar. Studien zeigen, dass haptische Modelle die Entscheidungsbereitschaft von Bauherren um bis zu 40% erhöhen. Weniger Rückfragen, schnellere Freigaben, reibungslosere Projekte."
      },
      {
        title: "Kostentransparenz ohne Überraschungen",
        content: "Anders als beim klassischen Modellbauer, wo Angebote oft erst nach Wochen folgen, erhalten Sie bei uns sofort einen verbindlichen Preis. Unser Online-Konfigurator berechnet basierend auf Volumen, Material und Qualitätsstufe – transparent, ohne versteckte Kosten. Viele Büros bestellen mittlerweile mehrere Studienmodelle pro Monat, weil der wirtschaftliche Aufwand so gering ist."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Zielgruppen", url: "#" },
    { name: "Architekturmodelle", url: "/architekturmodelle" }
  ];

  return (
    <>
      <SEOHead
        title="Architekturmodelle 3D-Druck – ab €20, Angebot in 6h | ★5,0"
        description="Vom CAD-File zum fertigen Modell: Maßstab 1:50–1:500, alle Formate (ArchiCAD, Revit, SketchUp). Express 24h · ab €20 · Angebot in 6h · ★5,0 (31 Bewertungen)."
        keywords="architekturmodelle 3d druck, architekturmodell bestellen, architekturmodell drucken lassen, wettbewerbsmodell 3d druck, architekturmodell anfertigen lassen, gebäudemodell drucken"
        path="/architekturmodelle"
      />

      <ProductOfferSchema
        name="3D-Druck Architekturmodelle"
        description="Maßstabsgetreue Architekturmodelle per 3D-Druck. Wettbewerbsmodelle, Baueinreichungen, Investorenpräsentationen. Maßstab 1:50–1:500."
        url="https://www.ek-druck.at/architekturmodelle"
        lowPrice="20"
        highPrice="1000"
        category="Architekturmodelle 3D-Druck"
      />
      <SpeakableSchema url="https://www.ek-druck.at/architekturmodelle" />
      <FAQSchema faqs={faqs} />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">

        {/* ── HERO ── */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Spezialist für Architekten & Planer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Architekturmodell<br />
                  <span className="text-primary">drucken lassen – ab €20</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-xl">
                  Sie wollen Ihr <strong>Architekturmodell drucken lassen</strong>? Von der CAD-Datei zum fertigen Modell in 3–5 Werktagen.
                  Express in 24h für Wettbewerbsabgaben. Bis zu 80% günstiger als traditioneller Modellbau.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "ArchiCAD, Revit, SketchUp & Rhino – wir kennen Ihren Workflow",
                    "Maßstab 1:50 bis 1:500 – Wettbewerb bis Stadtmodell",
                    "Express 24h für Wettbewerbstermine",
                    "Kostenlose Beratung & Angebot in 6h"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="hero" className="text-base">
                    <Link href="/kontakt">
                      Kostenloses Angebot in 6h
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/architekturmodelle-abo">Flatrate ab €199/Mon.</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Google</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Made in Austria
                  </div>
                  <div className="text-sm text-muted-foreground">
                    100+ Projekte für Architekten
                  </div>
                </div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className={`${index === 0 ? 'bg-primary text-primary-foreground' : 'bg-card'} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                    <CardContent className="p-6">
                      <div className={`text-3xl md:text-4xl font-bold mb-1 ${index === 0 ? '' : 'text-primary'}`}>
                        {stat.value}
                      </div>
                      <div className={`font-semibold mb-1 ${index === 0 ? 'text-primary-foreground/90' : ''}`}>
                        {stat.label}
                      </div>
                      <div className={`text-sm ${index === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Kommt Ihnen das bekannt vor?</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {architectPainPoints.map((item, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 80}>
                  <div className="bg-card border border-border rounded-xl p-5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground line-through mb-2">"{item.pain}"</p>
                    <p className="text-sm font-semibold text-foreground flex items-start gap-1">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item.solution}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Bar – Social Proof */}
        <TrustBarSocialProof />

        {/* Quick-Contact: Multi-Channel Direktkontakt für Architekten */}
        <QuickContactBar
          context="Architekturmodell"
          title="Wettbewerb-Deadline? Wählen Sie Ihren Kontaktweg."
          subtitle="Express in 24 h möglich. Wir verstehen ArchiCAD, Revit, SketchUp – kostenlose Datei-Prüfung vor dem Auftrag."
        />

        {/* ── USE CASES ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelltypen für Architekten</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Für jeden Einsatzbereich das passende Modell – mit echten Beispielpreisen
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 60}>
                  <Card className="h-full border-2 hover:border-primary/40 hover:shadow-lg transition-all group overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{useCase.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ml-2 ${useCase.badgeColor}`}>
                          {useCase.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                      <ul className="space-y-1.5 mb-4 flex-1">
                        {useCase.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground italic">{useCase.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" variant="hero">
                <Link href="/kontakt">
                  Modell anfragen – Angebot in 6h
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── CAD WORKFLOW ── */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FileCode className="w-4 h-4" />
                Export-Guide für Architekten
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ihr CAD-Programm – unser Modell</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir kennen den Workflow jeder gängigen Architektursoftware. So exportieren Sie Ihr Modell in 2 Minuten.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {cadWorkflows.map((cad, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 60}>
                  <Card className={`h-full hover:shadow-md transition-shadow ${cad.popular ? 'border-primary/40 border-2' : ''}`}>
                    {cad.popular && (
                      <div className="bg-primary text-primary-foreground text-xs text-center py-1 font-medium rounded-t-md">
                        Häufig genutzt
                      </div>
                    )}
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm shrink-0">
                          {cad.logo}
                        </div>
                        <h3 className="font-bold text-lg">{cad.software}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground bg-muted/60 rounded-lg p-3 mb-4 font-mono leading-relaxed">
                        {cad.export}
                      </p>
                      <ul className="space-y-1.5">
                        {cad.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Lightbulb className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">3D-Druck vs. Traditioneller Modellbau</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Der direkte Vergleich – warum immer mehr Architekturbüros wechseln
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold text-sm">
                  <div>Kriterium</div>
                  <div className="text-center">Traditioneller Modellbau</div>
                  <div className="text-center text-primary">EK-Druck 3D-Druck</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 p-4 items-center ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <div className="font-medium">{row.feature}</div>
                    <div className="text-center text-muted-foreground text-sm">{row.traditional}</div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {row.threeDPrint}
                      </span>
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </section>

        {/* ── MATERIALS ── */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Materialien für Architekturmodelle</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jedes Material hat seinen Zweck – wir beraten Sie gerne
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materials.map((material, index) => (
                <AnimatedSection key={index} animation="slide-up" delay={index * 80}>
                  <Card className={`h-full relative overflow-hidden ${material.popular ? 'border-primary border-2' : ''}`}>
                    {material.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-xl font-medium">
                        {material.tag}
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-1">{material.name}</h3>
                      {!material.popular && (
                        <span className="text-xs text-muted-foreground font-medium">{material.tag}</span>
                      )}
                      <p className="text-sm text-muted-foreground mt-3 mb-4">{material.description}</p>
                      <div className="space-y-1">
                        {material.bestFor.map((use, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{use}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was Architekten sagen</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Erfahrungen aus der Praxis – von Büros, die auf 3D-Druck umgestiegen sind
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                  <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-muted-foreground italic mb-6 flex-1">"{t.quote}"</p>
                      <div className="pt-4 border-t border-border">
                        <div className="font-semibold text-sm">{t.author}</div>
                        <div className="text-xs text-muted-foreground mt-1">{t.project}</div>
                        <div className="flex mt-2">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEYWORD CONTENT ── */}
        <KeywordRichContent 
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* ── CTA ── */}
        <CTASection
          headline="Projekt anfragen – Angebot in 6 Stunden"
          subline="Schicken Sie uns Ihre CAD-Datei (STL, OBJ, 3MF) oder beschreiben Sie Ihr Vorhaben kurz. Wir melden uns persönlich mit einem verbindlichen Angebot – kostenlos und unverbindlich."
          ctaLabel="Jetzt kostenlos anfragen"
          ctaHref="/kontakt"
          secondaryLabel="Architektur-Flatrate ansehen"
          secondaryHref="/architekturmodelle-abo"
          badge="Für Architekten & Planer"
          urgencyText="⚡ Flatrate ab €199/Mon. · Erstes Modell kostenlos · Kein Vertrag"
        />

        {/* ── FLATRATE BANNER ── */}
        <section className="py-10 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl border border-primary/20 bg-background shadow-sm">
              <div className="flex-1 text-center md:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Für Büros mit regelmäßigem Bedarf</div>
                <h3 className="text-2xl font-bold mb-2">Architekturmodell-Flatrate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Fixpreis statt Einzelkalkulation. Ab €199/Monat, monatlich kündbar. <strong>Erstes Modell kostenlos zum Testen.</strong></p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/architekturmodelle-abo" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
                  Flatrate entdecken <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/436765517197?text=${encodeURIComponent("Hallo ekdruck, ich interessiere mich für die Architekturmodell-Flatrate.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:bg-muted transition-colors text-sm whitespace-nowrap font-medium"
                >
                  <span className="text-[#25D366]">●</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── REGIONAL COVERAGE + All Regions Links ── */}
        <RegionalCoverage serviceName="Architekturmodelle" />

        <AllRegionsLinks currentSlug="" type="architektur" />

        {/* ── FAQ ── */}
        <FAQSection 
          faqs={faqs} 
          title="Häufige Fragen zu Architekturmodellen"
          subtitle="Antworten auf die wichtigsten Fragen rund um 3D-gedruckte Architekturmodelle für Architekten"
          schemaId="architekturmodelle"
        />

        {/* ── RELATED ── */}
        <RelatedPages currentPage="/architekturmodelle" />
      </main>

      <StickyCTA context="Architekturmodell" />
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>
      <Footer />
    </>
  );
};

export default Architekturmodelle;
