import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import AllRegionsLinks from "@/components/landing/AllRegionsLinks";
import KeywordRichContent from "@/components/landing/KeywordRichContent";
import ProductOfferSchema from "@/components/ProductOfferSchema";
import SpeakableSchema from "@/components/SpeakableSchema";
import QuickContactBar from "@/components/QuickContactBar";
import TrustBarSocialProof from "@/components/TrustBarSocialProof";
import StickyCTA from "@/components/landing/StickyCTA";
import { 
  Presentation, 
  Zap, 
  Clock, 
  Package, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Scale,
  Sparkles,
  Award,
  Target,
  Eye,
  Calendar,
  Briefcase,
  TrendingUp
} from "lucide-react";

const Messemodelle = () => {
  const stats = [
    { value: "24h", label: "Express", description: "Schnellste Lieferzeit" },
    { value: "2m+", label: "Maximalgröße", description: "Für Eyecatcher-Objekte" },
    { value: "50+", label: "Messen", description: "Bereits beliefert" },
    { value: "100%", label: "Termintreue", description: "Zuverlässige Lieferung" }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Express-Fertigung 24-48h",
      description: "Auch bei kurzfristigen Messeterminen liefern wir pünktlich. Unser Express-Service garantiert Lieferung innerhalb von 24-48 Stunden nach Auftragsbestätigung."
    },
    {
      icon: Scale,
      title: "Jede Größe möglich",
      description: "Von kleinen Produktmodellen (ab 5cm) bis zu beeindruckenden Eyecatcher-Objekten über 2 Meter. Mehrteilige Konstruktion für XXL-Formate."
    },
    {
      icon: Sparkles,
      title: "Hochwertige Optik",
      description: "Professionelle Oberflächen für anspruchsvolle Präsentationen. Nachbearbeitung wie Schleifen, Lackieren oder Beschriften auf Anfrage."
    },
    {
      icon: Package,
      title: "Transportsicher",
      description: "Leichte PLA- und PETG-Objekte sind ideal für den Messetransport. Bis zu 70% leichter als vergleichbare Holz- oder Metallmodelle."
    }
  ];

  const useCases = [
    {
      title: "Überdimensionale Produktmodelle",
      description: "Vergrößerte Darstellungen Ihrer Produkte als Blickfang am Messestand. Perfekt für technische Produkte, Medizintechnik oder Konsumgüter.",
      details: ["Maßstab frei wählbar (z.B. 10:1)", "Originalgetreue Details", "Bis zu 2m Größe"],
      icon: Target,
      highlight: "Maximale Aufmerksamkeit"
    },
    {
      title: "Schnittmodelle & Cutaways",
      description: "Zeigen Sie das Innenleben Ihrer Produkte. Schnittmodelle und Funktionsdarstellungen für technische Erklärungen und Schulungen.",
      details: ["Transparente Materialien möglich", "Mehrteilige Modelle", "Austauschbare Komponenten"],
      icon: Eye,
      highlight: "Technische Präsentation"
    },
    {
      title: "3D-Logos & Markenelemente",
      description: "Individuelle 3D-Logos, Schriftzüge und Markenelemente für Ihren Messestand. Corporate Design in allen Farben umsetzbar.",
      details: ["Exakte Farbmatchung", "Große Formate bis 1m+", "Leichte Montage"],
      icon: Award,
      highlight: "Branding auf höchstem Niveau"
    },
    {
      title: "Architektur & Immobilien",
      description: "Immobilienprojekte und Standort-Modelle für Immobilienmessen und Investorenpräsentationen. Maßstabsgetreue Visualisierung.",
      details: ["Maßstäbe 1:50 bis 1:500", "Umgebungsdarstellung", "Modularer Aufbau"],
      icon: Presentation,
      highlight: "Für Immobilienmessen"
    }
  ];

  // Industrial Case Studies
  const caseStudies = [
    {
      title: "Industriemesse-Projekt",
      industry: "Maschinenbau-Aussteller",
      challenge: "Überdimensionales Produktmodell (1,5m) für Messestand bei der Hannover Messe. Nur 10 Tage Vorlaufzeit.",
      solution: "Mehrteiliger FDM-Druck in Corporate-Farben, nahtlose Montage vor Ort.",
      results: ["Termingerecht geliefert", "Eyecatcher am Stand", "Wiederholungsauftrag erhalten"],
      metrics: { size: "1,5m", time: "10 Tage", parts: "12 Teile" }
    },
    {
      title: "Immobilienmesse Wien",
      industry: "Projektentwickler",
      challenge: "Städtebauliches Modell eines Quartiers im Maßstab 1:200 für Investorenpräsentation.",
      solution: "Detailgetreue Gebäudemodelle mit abnehmbaren Dächern zur Innenraumvisualisierung.",
      results: ["Investor überzeugt", "3 Folgeprojekte", "Transportable Einzelteile"],
      metrics: { scale: "1:200", buildings: "8 Gebäude", time: "14 Tage" }
    },
    {
      title: "Medizintechnik-Messe",
      industry: "Medtech-Unternehmen",
      challenge: "Vergrößertes Funktionsmodell eines Implantats für MEDICA-Messestand.",
      solution: "10:1 Vergrößerung mit transparenten und farbigen Komponenten zur Veranschaulichung.",
      results: ["Komplexität verständlich gemacht", "Hohe Standbesucherzahl", "Presseanfragen"],
      metrics: { scale: "10:1", colors: "4 Farben", finish: "Hochglanz" }
    }
  ];

  const timeline = [
    { days: "24-48h", type: "Express", description: "Für dringende Messetermine", price: "+50% Aufpreis", recommended: true },
    { days: "3-5 Tage", type: "Standard", description: "Optimales Preis-Leistungs-Verhältnis", price: "Normalpreis", recommended: false },
    { days: "5-10 Tage", type: "Großprojekte", description: "Umfangreiche Messeinstallationen", price: "Nach Vereinbarung", recommended: false }
  ];

  const messeTypen = [
    { name: "Industriemessen", examples: "Hannover Messe, EMO, LIGNA" },
    { name: "Baumessen", examples: "BAU München, Bauen & Wohnen" },
    { name: "Medizintechnik", examples: "MEDICA, Compamed" },
    { name: "Konsumgüter", examples: "Ambiente, IFA" },
    { name: "Automobilmessen", examples: "IAA, Auto Zürich" },
    { name: "Immobilien", examples: "Expo Real, Immobilienmessen" }
  ];

  const faqs = [
    {
      question: "Wie schnell können Messemodelle gefertigt werden?",
      answer: "Unser Express-Service liefert in 24-48 Stunden nach Auftragsbestätigung. Standard-Lieferzeit beträgt 3-5 Werktage. Auch bei kurzfristigen Messeterminen sind wir Ihr zuverlässiger Partner."
    },
    {
      question: "Welche Größe ist für Messemodelle möglich?",
      answer: "Wir fertigen Objekte von wenigen Zentimetern bis über 2 Meter Größe. Große Objekte werden mehrteilig konstruiert und nahtlos zusammengefügt. Ideal für Eyecatcher-Elemente am Messestand."
    },
    {
      question: "Sind 3D-gedruckte Messemodelle transportfähig?",
      answer: "Ja, unsere PLA- und PETG-Objekte sind bis zu 70% leichter als vergleichbare Holz- oder Metallmodelle. Das macht sie ideal für den Messetransport und die Handhabung vor Ort."
    },
    {
      question: "Können Firmenfarben exakt umgesetzt werden?",
      answer: "Wir bieten über 20 Standardfarben und können viele RAL-Farben durch spezielle Filamente oder Nachbearbeitung (Lackierung) umsetzen. Sprechen Sie uns für Corporate-Design-Anforderungen an."
    },
    {
      question: "Was kosten Messemodelle im 3D-Druck?",
      answer: "Die Kosten hängen von Größe, Material und Komplexität ab. Kleine Produktmodelle starten ab ca. €30, große Eyecatcher-Objekte liegen typischerweise zwischen €150-500. Kontaktieren Sie uns für ein individuelles Angebot."
    },
    {
      question: "Kann man das gleiche Modell mehrfach fertigen?",
      answer: "Ja, das ist ein großer Vorteil des 3D-Drucks. Identische Reproduktionen sind ohne Mehraufwand möglich – ideal für mehrere Messestandorte oder als Ersatz bei Beschädigung."
    }
  ];

  const keywordContent = {
    title: "Messemodelle: Der Wettbewerbsvorteil am Stand",
    intro: "Auf Messen zählt der erste Eindruck. 3D-gedruckte Präsentationsobjekte ziehen Blicke an und ermöglichen es Ihnen, Produkte und Konzepte haptisch erlebbar zu machen. Von der Hannover Messe über die BAU München bis zu regionalen Fachmessen in Wien, Graz oder Salzburg – überall setzen erfolgreiche Aussteller auf 3D-gedruckte Eyecatcher.",
    blocks: [
      {
        title: "Kurzfristige Termine",
        content: "Messe-Deadlines sind oft eng. Während traditionelle Modellbauer Wochen brauchen, liefern wir in 24-48 Stunden. Das gibt Ihnen die Flexibilität, auch kurzfristige Änderungen oder Last-Minute-Ergänzungen für Ihren Messestand umzusetzen."
      },
      {
        title: "Leicht & Transportabel",
        content: "3D-gedruckte Objekte aus PLA oder PETG sind bis zu 70% leichter als vergleichbare Objekte aus Holz oder Metall. Das reduziert Transportkosten und macht die Handhabung am Messestand einfacher. Ideal für Messen in ganz Europa."
      },
      {
        title: "Reproduzierbar",
        content: "Benötigen Sie das gleiche Modell für mehrere Messestandorte? Kein Problem. Digitale Fertigung ermöglicht identische Reproduktionen ohne Mehraufwand. Auch Ersatzteile bei Beschädigung sind schnell nachgefertigt."
      },
      {
        title: "Individuelle Größen",
        content: "Von kleinen Produktmodellen für den Besprechungstisch bis zu überdimensionalen Eyecatcher-Objekten über 2 Meter Höhe. Mehrteilige Konstruktion ermöglicht praktisch unbegrenzte Größen ohne Qualitätsverlust."
      }
    ]
  };

  const breadcrumbs = [
    { name: "Zielgruppen", url: "#" },
    { name: "Messemodelle", url: "/messemodelle" }
  ];

  return (
    <>
      <SEOHead
        title="Messemodelle 3D-Druck | Express 24h · bis 2m+ | ★5,0"
        description="Messestand-Hingucker pünktlich geliefert: Großformate bis 2m+, transportsicher, lackierfertig. Express 24h · Angebot in 6h · ab €30 · ★5,0 (31 Bewertungen)."
        keywords="messemodelle 3d druck, messemodell bestellen, messemodell anfertigen lassen, 3d druck messemodell express, messeexponat bestellen, eyecatcher messestand, messemodell drucken lassen"
        path="/messemodelle"
      />

      <ProductOfferSchema
        name="3D-Druck Messemodelle"
        description="Professionelle 3D-gedruckte Messemodelle und Eyecatcher für Messestände. Express-Fertigung in 24h, Objekte bis 2m+."
        url="https://www.ek-druck.at/messemodelle"
        lowPrice="30"
        highPrice="1000"
        category="Messemodelle 3D-Druck"
      />
      <SpeakableSchema url="https://www.ek-druck.at/messemodelle" />

      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Presentation className="w-4 h-4" />
                  Für Messebau & Events
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Messemodell anfertigen lassen –<br />
                  <span className="text-primary">Express in 24 Stunden</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Sie müssen kurzfristig ein <strong>Messemodell anfertigen lassen</strong>? Wir drucken individuelle 3D-Objekte
                  von kleinen Produktmodellen bis zu spektakulären Eyecatchern (2 m+) –
                  auch bei kurzfristigen Messeterminen pünktlich geliefert nach Wien, München, Hannover und ganz DACH.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                 <Button asChild size="lg" variant="hero" className="text-base">
                    <Link href="/kontakt">
                      Kostenloses Angebot in 6h
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/referenzen">Projekte ansehen</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Express 24h möglich</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Made in Austria
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

        {/* Trust Bar – Social Proof direkt nach Hero */}
        <TrustBarSocialProof />

        {/* Quick-Contact: Multi-Channel B2B Direktkontakt direkt nach Hero
            Senkt Conversion-Hürde – Studien zeigen: Aufrufe ohne Anfragen
            korrelieren stark mit fehlenden Low-Friction-Kanälen */}
        <QuickContactBar
          context="Messemodell"
          title="Messetermin in Sicht? Lassen Sie uns sprechen."
          subtitle="Ob Eyecatcher 2 m+ oder Produktmodell 1:5 – wir liefern auch in 24 h. Wählen Sie den schnellsten Kontaktweg."
        />

        {/* Messe-Typen Banner */}
        <section className="py-8 bg-muted/30 border-y border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-4">Wir liefern für alle großen Messetypen</p>
            <div className="flex flex-wrap justify-center gap-4">
              {messeTypen.map((messe, index) => (
                <div key={index} className="bg-background px-4 py-2 rounded-full border border-border text-sm">
                  <span className="font-medium">{messe.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfekt für den Messeauftritt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Wir verstehen die besonderen Anforderungen im Messebau
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lieferzeiten für Messen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Auch bei kurzfristigen Terminen sind wir Ihr zuverlässiger Partner
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <Card key={index} className={`relative overflow-hidden ${item.recommended ? "border-primary border-2 shadow-lg" : ""}`}>
                  {item.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 text-center">
                      ⚡ Für dringende Projekte
                    </div>
                  )}
                  <CardContent className={`p-6 text-center ${item.recommended ? 'pt-10' : ''}`}>
                    <div className="text-4xl font-bold text-primary mb-2">{item.days}</div>
                    <h3 className="font-bold text-lg mb-1">{item.type}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full">{item.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Anwendungsbereiche</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vielfältige Einsatzmöglichkeiten für Ihren Messeauftritt
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-xl font-bold">{useCase.title}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium whitespace-nowrap">
                            {useCase.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Briefcase className="w-4 h-4" />
                Erfolgsbeispiele
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Messe-Projekte in der Praxis</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Anonymisierte Beispiele aus unserer Projektarbeit
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary/30 hover:shadow-xl transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-xs bg-muted px-2 py-1 rounded-full font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Herausforderung</span>
                        <p className="text-sm text-muted-foreground mt-1">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">Lösung</span>
                        <p className="text-sm text-muted-foreground mt-1">{study.solution}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 mb-4">
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 block">Ergebnis</span>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <span key={key} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {value}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/referenzen">
                  Alle Referenzen ansehen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Messe-Checkliste</h2>
                <p className="text-muted-foreground">So planen Sie Ihr Messeprojekt optimal</p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      { time: "4 Wochen vorher", task: "3D-Dateien vorbereiten oder erstellen lassen" },
                      { time: "3 Wochen vorher", task: "Material und Farbe auswählen, Angebot einholen" },
                      { time: "2 Wochen vorher", task: "Auftrag bestätigen (Standardlieferung)" },
                      { time: "1 Woche vorher", task: "Express-Bestellung bei kurzfristigen Änderungen" },
                      { time: "2-3 Tage vorher", task: "Lieferung erhalten, Qualitätskontrolle" },
                      { time: "Messetag", task: "Beeindrucken Sie Ihre Besucher!" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-32 shrink-0">
                          <span className="text-sm font-bold text-primary">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span>{item.task}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Keyword Rich Content */}
        <KeywordRichContent 
          title={keywordContent.title}
          intro={keywordContent.intro}
          blocks={keywordContent.blocks}
        />

        {/* Regional Coverage + All Regions Links */}
        <RegionalCoverage 
          serviceName="Messemodelle" 
          description="Wir beliefern Messebauer und Aussteller in ganz Österreich. Express-Versand für kurzfristige Messetermine. Persönliche Abholung in Gunskirchen (OÖ) möglich."
          baseUrl="messemodelle"
        />

        <AllRegionsLinks currentSlug="" type="messe" />

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          title="Häufige Fragen zu Messemodellen"
          subtitle="Antworten auf die wichtigsten Fragen rund um 3D-gedruckte Messemodelle"
          schemaId="messemodelle"
        />

        {/* Related Pages */}
        <RelatedPages currentPage="/messemodelle" />
      </main>

      <StickyCTA context="Messemodell" />
      <Footer />
    </>
  );
};

export default Messemodelle;
