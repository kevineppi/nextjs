import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSection from "@/components/landing/FAQSection";
import RelatedPages from "@/components/landing/RelatedPages";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import QuickContactBar from "@/components/QuickContactBar";
import StickyCTA from "@/components/landing/StickyCTA";
import { 
  Building, 
  FileText, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  MapPin,
  ShieldCheck,
  Handshake,
  Truck,
  Target,
  BarChart3,
  GraduationCap,
  Phone,
  Mail,
  Award,
  Zap,
  TrendingUp,
  Package,
  Settings,
  HeartHandshake,
  Factory,
  Euro,
  Percent,
  CalendarCheck,
  MessageSquare
} from "lucide-react";

const Firmenkunden = () => {
  const heroStats = [
    { value: "100+", label: "Firmenkunden", icon: Building },
    { value: "5.0", label: "Google Rating", icon: Star },
    { value: "24h", label: "Express", icon: Zap },
    { value: "100%", label: "Termintreue", icon: CalendarCheck }
  ];

  const trustLogos = [
    "Architekturbüros", "Messebau", "Werbeagenturen", "Designbüros", "Bildungseinrichtungen"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Verbindliche Lieferzeiten",
      description: "Termine die zu Ihren Projektplänen passen. Wir halten was wir versprechen.",
      highlight: "Express in 24-48h möglich",
      stats: "100% Termintreue"
    },
    {
      icon: Handshake,
      title: "Persönlicher Ansprechpartner",
      description: "Direkte Kommunikation ohne Warteschleifen, Tickets oder Chatbots.",
      highlight: "Schnelle Antworten garantiert",
      stats: "< 24h Reaktionszeit"
    },
    {
      icon: ShieldCheck,
      title: "Gleichbleibende Qualität",
      description: "Konsistente Ergebnisse bei wiederkehrenden Aufträgen durch dokumentierte Prozesse.",
      highlight: "Qualitätskontrolle bei jedem Auftrag",
      stats: "ISO-konforme Prozesse"
    },
    {
      icon: Euro,
      title: "Transparente Preise",
      description: "Individuelle Angebote innerhalb von 24h. Keine versteckten Kosten.",
      highlight: "Schnelle Kalkulation",
      stats: "Angebot in 24h"
    },
    {
      icon: HeartHandshake,
      title: "Langfristige Partnerschaft",
      description: "Stammkunden profitieren von Rahmenverträgen, Mengenrabatten und bevorzugter Bearbeitung.",
      highlight: "Wachsende Vorteile über Zeit",
      stats: "Bis 20% Mengenrabatt"
    },
    {
      icon: Package,
      title: "Flexible Bestellmengen",
      description: "Vom Einzelstück bis zur Serie – wir skalieren mit Ihren Anforderungen.",
      highlight: "Keine Mindestbestellmenge",
      stats: "Ab 1 Stück"
    }
  ];

  const industries = [
    {
      title: "Architektur & Planung",
      description: "Präsentationsmodelle in Maßstäben 1:50 bis 1:500. Wettbewerbsmodelle, Konzeptstudien und städtebauliche Modelle für Architekten und Planungsbüros.",
      link: "/architekturmodelle",
      icon: Building,
      stats: "Bis 80% günstiger",
      highlight: "als konventionelle Handmodelle",
      features: ["Maßstabsgetreu", "Hochdetailliert", "Farbig möglich"]
    },
    {
      title: "Messebau & Events",
      description: "Produktmodelle, Dekorationsobjekte und XXL-Elemente für Messebauer und Eventfirmen. Große Objekte bis 2m+ durch Segmentierung.",
      link: "/messemodelle",
      icon: Users,
      stats: "Express 24h",
      highlight: "für dringende Messetermine",
      features: ["XXL-Objekte", "Transportabel", "Robust"]
    },
    {
      title: "Agenturen & Design",
      description: "Modelle für Produktpräsentationen, Mockups und Kundenvorführungen. Über 20 Farben und Materialoptionen für kreative Projekte.",
      link: "/einzelanfertigungen",
      icon: Target,
      stats: "20+ Farben",
      highlight: "und Materialoptionen",
      features: ["Mockups", "Prototypen", "Präsentationen"]
    },
    {
      title: "Bildung & Forschung",
      description: "Anschauungsmodelle für Schulen, Universitäten und Forschungseinrichtungen. Anatomische Modelle, technische Demonstrationen, Lehrmaterial.",
      link: "/einzelanfertigungen",
      icon: GraduationCap,
      stats: "Mengenrabatte",
      highlight: "für Klassensätze",
      features: ["Didaktisch", "Robust", "Erschwinglich"]
    }
  ];

  const process = [
    { 
      step: "1", 
      title: "Anfrage", 
      description: "3D-Datei hochladen oder Projekt beschreiben. Wir erstellen ein individuelles Angebot.",
      icon: FileText,
      time: "2 Minuten"
    },
    { 
      step: "2", 
      title: "Beratung & Angebot", 
      description: "Persönliche Beratung und detailliertes Angebot innerhalb von 24 Stunden.",
      icon: BarChart3,
      time: "24h"
    },
    { 
      step: "3", 
      title: "Produktion", 
      description: "Bei Bestätigung starten wir sofort. Moderne Druckfarm mit paralleler Fertigung für schnelle Lieferung.",
      icon: Factory,
      time: "3-7 Werktage"
    },
    { 
      step: "4", 
      title: "Lieferung", 
      description: "Sichere Verpackung, Versand mit Tracking. Pünktlich bei Ihnen.",
      icon: Truck,
      time: "1-2 Werktage"
    }
  ];

  const testimonials = [
    {
      quote: "Zuverlässiger Partner für unsere Architekturmodelle. Die Qualität ist konstant hervorragend und die Lieferung immer pünktlich. Besonders schätzen wir die unkomplizierte Kommunikation.",
      author: "Planungsbüro",
      industry: "Architektur",
      location: "Oberösterreich",
      rating: 5,
      highlight: "Seit 2 Jahren Partner"
    },
    {
      quote: "Auch bei kurzfristigen Messeterminen können wir uns auf ekdruck verlassen. Der 24h-Express-Service hat uns schon mehrfach gerettet. Absolute Empfehlung für alle Messebauer!",
      author: "Event-Agentur",
      industry: "Messebau",
      location: "Wien",
      rating: 5,
      highlight: "Express-Service"
    },
    {
      quote: "Einfache Abwicklung und faire Preise. Genau was wir als Agentur brauchen – kein unnötiger Overhead, einfach professionelle Umsetzung.",
      author: "Kreativagentur",
      industry: "Werbung",
      location: "Salzburg",
      rating: 5,
      highlight: "Perfekte Abwicklung"
    }
  ];

  const pricingAdvantages = [
    { 
      title: "Keine Mindestbestellmenge", 
      desc: "Auch Einzelstücke ohne Aufpreis – Sie zahlen nur was Sie brauchen",
      icon: Package
    },
    { 
      title: "Mengenrabatte ab 10 Stück", 
      desc: "5% ab 10 Stück, 10% ab 20 Stück, bis zu 20% ab 50 Stück",
      icon: Percent
    },
    { 
      title: "Rahmenverträge", 
      desc: "Individuelle Konditionen und garantierte Kapazitäten auf Anfrage",
      icon: FileText
    },
    { 
      title: "Vertraulichkeit garantiert", 
      desc: "NDA verfügbar, alle Daten werden nach Projektabschluss gelöscht",
      icon: ShieldCheck
    },
    { 
      title: "Schnelle Reaktionszeit", 
      desc: "Antwort innerhalb von 24h garantiert – meist deutlich schneller",
      icon: MessageSquare
    },
    { 
      title: "Express-Fertigung", 
      desc: "24-48h bei dringenden Projekten – wir sind flexibel",
      icon: Zap
    }
  ];

  const comparisonData = [
    { feature: "Mindestbestellwert", ekdruck: "Keiner", others: "Oft €200+" },
    { feature: "Angebotszeit", ekdruck: "Sofort", others: "1-5 Tage" },
    { feature: "Lieferzeit Standard", ekdruck: "5-7 Tage", others: "10-14 Tage" },
    { feature: "Express-Option", ekdruck: "24-48h", others: "Selten möglich" },
    { feature: "Persönlicher Kontakt", ekdruck: "Direkt", others: "Ticket-System" },
    { feature: "Qualitätskontrolle", ekdruck: "Bei jedem Teil", others: "Stichproben" },
  ];

  const faqs = [
    {
      question: "Gibt es Mengenrabatte für Unternehmen?",
      answer: "Ja! Ab 10 identischen Teilen erhalten Sie 5% Rabatt, ab 20 Stück 10%, ab 50 Stück bis zu 20%. Bei regelmäßigen Aufträgen sind individuelle Rahmenverträge mit besonderen Konditionen möglich. Der Rabatt wird automatisch im Konfigurator angezeigt."
    },
    {
      question: "Wie werden vertrauliche Projekte geschützt?",
      answer: "Vertraulichkeit hat bei uns höchste Priorität. Auf Wunsch unterzeichnen wir eine Geheimhaltungsvereinbarung (NDA). Alle Projektdaten werden vertraulich behandelt und nach Abschluss des Auftrags gelöscht. Ihre Designs sind bei uns sicher."
    },
    {
      question: "Wie schnell erhalte ich eine Antwort auf Anfragen?",
      answer: "Wir garantieren eine Rückmeldung innerhalb von 24 Stunden an Werktagen – meist antworten wir aber deutlich schneller. Bei dringenden Projekten erreichen Sie uns auch telefonisch für sofortige Beratung."
    },
    {
      question: "Welche Branchen bedienen Sie als B2B-Partner?",
      answer: "Wir arbeiten mit Architekturbüros, Messebauern, Werbeagenturen, Designbüros, Bildungseinrichtungen, Filmproduktionen, Museumswerkstätten und vielen weiteren Branchen. Für jede Branche haben wir spezialisierte Lösungen und verstehen die spezifischen Anforderungen."
    },
    {
      question: "Kann ich einen persönlichen Ansprechpartner bekommen?",
      answer: "Ja, für Firmenkunden gibt es direkte Kommunikation per E-Mail und Telefon – ohne Warteschleifen, Tickets oder Chatbots. Sie erhalten persönliche Beratung und schnelle Antworten auf Ihre Fragen. Bei regelmäßigen Projekten kennen wir Ihre Präferenzen."
    },
    {
      question: "Wie erhalte ich Express-Fertigung?",
      answer: "Bei dringenden Projekten bieten wir Express-Fertigung in 24-48 Stunden an. Kontaktieren Sie uns direkt per Telefon oder E-Mail. Der Aufpreis beträgt 50%, dafür erhalten Sie absolute Priorität in unserer Produktion."
    }
  ];

  const breadcrumbs = [
    { name: "Zielgruppen", url: "#" },
    { name: "Firmenkunden", url: "/firmenkunden" }
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck B2B Österreich ★5,0 – UID · NDA · Angebot in 6h"
        description="3D-Druck für Unternehmen ✓ Mengenrabatt ab 5 Stück ✓ NDA möglich ✓ UID-Rechnung ✓ Express 24h ✓ Angebot in 6h. ★ 5,0 (31 Bewertungen) | ekdruck"
        keywords="3d druck service österreich, 3d druck firma österreich, professioneller 3d druck b2b, 3d druck dienstleister österreich, 3d druck anbieter firma, 3d druck unternehmen österreich, b2b 3d druck service"
        path="/firmenkunden"
      />

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Firmenkunden", url: "/firmenkunden" }
      ]} />
      <Navigation />
      <Breadcrumbs items={breadcrumbs} />

      <main className="min-h-screen bg-background">
        {/* Premium Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                  <Building className="w-4 h-4" />
                  <span>3D-Druck Service für Unternehmen</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Professioneller<br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    3D-Druck Service Österreich
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Über 100 Unternehmen in Österreich vertrauen auf unseren <strong>B2B 3D-Druck Service</strong> –
                  vom Architekturbüro bis zur Werbeagentur. UID-Rechnung, Mengenrabatte ab 5 Stück,
                  NDA-fähige Abwicklung und ein fester Ansprechpartner.
                </p>

                {/* Key USPs */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Express 24h",
                    "Persönlicher Kontakt",
                    "Made in Austria",
                    "100% Termintreue"
                  ].map((usp, i) => (
                    <div key={i} className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{usp}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="text-base shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90 group">
                    <Link href="/kontakt">
                      Kostenloses Angebot in 6h
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base group">
                    <Link href="/kontakt">
                      <Mail className="mr-2 w-5 h-5" />
                      Beratung anfragen
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-semibold">5.0</span>
                    <span className="text-muted-foreground text-sm">Google Reviews</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Standort Oberösterreich</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Stats Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  {heroStats.map((stat, index) => (
                    <Card 
                      key={index} 
                      className={`
                        ${index === 0 ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground' : 'bg-card border-2 hover:border-primary/30'} 
                        shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group
                      `}
                    >
                      <CardContent className="p-6 relative">
                        <div className={`absolute top-3 right-3 ${index === 0 ? 'text-primary-foreground/30' : 'text-primary/10'}`}>
                          <stat.icon className="w-12 h-12" />
                        </div>
                        <div className={`text-4xl md:text-5xl font-bold mb-2 ${index === 0 ? '' : 'text-primary'}`}>
                          {stat.value}
                        </div>
                        <div className={`font-medium ${index === 0 ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Trust Logos */}
                <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border/50">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Vertrauen von Unternehmen aus:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {trustLogos.map((logo, i) => (
                      <span key={i} className="text-sm bg-background px-3 py-1.5 rounded-full border border-border">
                        {logo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-8 bg-muted/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Firmenkunden</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">B2B-Projekte</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
              <div className="h-12 w-px bg-border hidden md:block" />
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Express möglich</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick-Contact: B2B Multi-Channel direkt nach Social Proof */}
        <QuickContactBar
          context="B2B / Firmenkundenanfrage"
          title="B2B-Anfrage: Wählen Sie Ihren Kanal"
          subtitle="UID-Rechnung, NDA und Mengenrabatte ab Stück 1. Direkter Kontakt zum Inhaber – keine Vertriebsschleife."
        />

        {/* Benefits Section - Premium Cards */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Ihre Vorteile
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Warum Unternehmen uns wählen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Was uns als B2B-Partner auszeichnet – professionelle Abwicklung für Ihr Unternehmen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="group border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {benefit.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            {benefit.highlight}
                          </span>
                          <span className="text-xs text-muted-foreground font-medium">
                            {benefit.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Branchen
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Spezialisiert auf Ihre Branche
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Wir verstehen die spezifischen Anforderungen verschiedener Industrien
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <industry.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {industry.features.map((feature, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <span className="text-xl font-bold text-primary">{industry.stats}</span>
                            <span className="text-sm text-muted-foreground ml-2">{industry.highlight}</span>
                          </div>
                          <Button asChild variant="ghost" size="sm" className="group/btn">
                            <Link href={industry.link}>
                              Details
                              <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Timeline Style */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Settings className="w-4 h-4" />
                Ablauf
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                So einfach funktioniert's
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Von der Anfrage bis zur Lieferung – ein transparenter, effizienter Prozess
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Connection Line */}
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-[calc(100%-20px)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                    )}
                    
                    <div className="text-center group">
                      <div className="relative inline-block mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <item.icon className="w-10 h-10" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                          {item.step}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/kontakt">
                  Jetzt starten
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Der Unterschied
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                ekdruck vs. Andere Anbieter
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Warum sich Unternehmen für uns entscheiden
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden border-2">
                <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold border-b">
                  <div className="text-muted-foreground">Feature</div>
                  <div className="text-center text-primary">ekdruck</div>
                  <div className="text-center text-muted-foreground">Andere</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-3 p-4 items-center ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'} ${index < comparisonData.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className="font-medium">{row.feature}</div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 text-primary font-semibold">
                        <CheckCircle className="w-4 h-4" />
                        {row.ekdruck}
                      </span>
                    </div>
                    <div className="text-center text-muted-foreground text-sm">
                      {row.others}
                    </div>
                  </div>
                ))}
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Advantages */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Euro className="w-4 h-4" />
                B2B-Konditionen
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Faire Konditionen für Unternehmen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Transparente Preise, keine versteckten Kosten, attraktive Mengenrabatte
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingAdvantages.map((adv, index) => (
                <Card key={index} className="hover:shadow-lg transition-all group border-2 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <adv.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                        <p className="text-sm text-muted-foreground">{adv.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Discount Tiers */}
            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Mengenrabatt-Staffel</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { qty: "10+", discount: "5%" },
                      { qty: "20+", discount: "10%" },
                      { qty: "50+", discount: "15%" },
                      { qty: "100+", discount: "20%" }
                    ].map((tier, i) => (
                      <div key={i} className="text-center p-4 bg-background rounded-xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-1">{tier.discount}</div>
                        <div className="text-sm text-muted-foreground">ab {tier.qty} Stück</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Rabatte werden automatisch im Konfigurator berechnet
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Kundenstimmen
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Was unsere Partner sagen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Echte Bewertungen von Geschäftskunden aus ganz Österreich
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all group border-2 hover:border-primary/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {testimonial.highlight}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-background px-6 py-3 rounded-full border shadow-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold">5.0 von 5</span>
                <span className="text-muted-foreground">basierend auf Google Reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Subtle */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Bereit für eine professionelle Zusammenarbeit?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Starten Sie jetzt Ihr erstes Projekt oder kontaktieren Sie uns für ein 
                  unverbindliches Beratungsgespräch.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base group">
                    <Link href="/kontakt">
                      Anfrage stellen
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <a href="tel:+436765517197">
                      <Phone className="mr-2 w-5 h-5" />
                      +43 676 5517197
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">Direkter Kontakt für Firmenkunden</h3>
                    <p className="text-muted-foreground">Persönliche Beratung ohne Warteschleifen</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <a href="tel:+436765517197" className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group">
                      <Phone className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Telefon</span>
                      <span className="text-sm text-muted-foreground">+43 676 5517197</span>
                    </a>
                    <a href="mailto:office@ek-druck.at" className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group">
                      <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">E-Mail</span>
                      <span className="text-sm text-muted-foreground">office@ek-druck.at</span>
                    </a>
                    <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50">
                      <Clock className="w-8 h-8 text-primary mb-3" />
                      <span className="font-semibold">Reaktionszeit</span>
                      <span className="text-sm text-muted-foreground">Innerhalb 24h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <RegionalCoverage 
          serviceName="3D-Druck für Unternehmen"
          description="Wir arbeiten mit Unternehmen in ganz Österreich zusammen. Von Kleinbetrieben bis zu Konzernen – professionelle Abwicklung und zuverlässige Lieferung in alle Bundesländer."
        />

        {/* FAQ Section */}
        <FAQSection 
          faqs={faqs} 
          title="Häufige Fragen für Firmenkunden"
          subtitle="Antworten auf die wichtigsten Fragen zur B2B-Zusammenarbeit"
          schemaId="firmenkunden"
        />

        {/* Related Pages */}
        <RelatedPages currentPage="/firmenkunden" />
      </main>

      <StickyCTA context="B2B Firmenkundenanfrage" />
      <Footer />
    </>
  );
};

export default Firmenkunden;
