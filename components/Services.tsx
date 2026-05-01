import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Clock, Gift, Home, Sparkles, FileCheck, MessageCircle, Wrench, ClipboardList } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [{
    icon: Sparkles,
    title: "Messemodelle & Präsentation",
    description: "Beeindruckende Anschauungsobjekte für Messen, Events und Ausstellungen.",
    features: ["XXL-Objekte möglich", "Express 24h", "Transportfähig", "Blickfang für Ihren Stand"],
    link: "/messemodelle"
  }, {
    icon: Home,
    title: "Architekturmodelle",
    description: "Maßstabsgetreue Modelle für Architekten, Planer und Immobilienentwickler.",
    features: ["Maßstäbe 1:50 bis 1:500", "Hochdetailliert", "Präsentationsfertig", "Mehrfarbig möglich"],
    link: "/architekturmodelle"
  }, {
    icon: PenTool,
    title: "Industrielle Anschauungsmodelle",
    description: "Präsentationsmodelle für Industrie, Produktentwicklung und Kundenpräsentationen.",
    features: ["Maßstabsmodelle", "Produktvisualisierung", "Konzeptdarstellung", "Kundenpräsentationen"],
    link: "/kontakt"
  }, {
    icon: Palette,
    title: "Showroom & Schaufenster",
    description: "Anschauungsobjekte für Verkaufsräume, Schaufenster und Ausstellungen.",
    features: ["Individuelle Größen", "20+ Farben", "Eyecatcher", "Markenkonform"],
    link: "/einzelanfertigungen"
  }, {
    icon: Gift,
    title: "Kunst & Skulpturen",
    description: "Einzigartige Skulpturen und Kunstobjekte für Künstler, Galerien und Sammler.",
    features: ["Individuelle Designs", "Spezialeffekte", "Künstlerberatung", "Unikate"],
    link: "/kunstobjekte"
  }, {
    icon: Clock,
    title: "Express Service 24h",
    description: "Schnelle Fertigung für dringende Messe- und Präsentationstermine.",
    features: ["24-48h Lieferung", "Kostenlose Beratung", "Faire Preise", "Priorität"],
    link: "/kontakt"
  }, {
    icon: MessageCircle,
    title: "Materialberatung",
    description: "Persönliche Beratung zur optimalen Materialwahl für Ihr Projekt.",
    features: ["PLA, PETG, ASA", "Farbberatung", "Oberflächenoptionen", "Nachbearbeitung"],
    link: "/materialien"
  }, {
    icon: Wrench,
    title: "Konzept-Beratung",
    description: "Von der Idee zum fertigen Modell – wir beraten bei der Umsetzung.",
    features: ["Machbarkeitsanalyse", "Design-Tipps", "Größenoptimierung", "Kosteneffizienz"],
    link: "/kontakt"
  }, {
    icon: ClipboardList,
    title: "Projektmanagement",
    description: "Koordination größerer Projekte mit mehreren Modellen oder Phasen.",
    features: ["Terminkoordination", "Qualitätskontrolle", "Statusupdates", "Persönlicher Kontakt"],
    link: "/firmenkunden"
  }];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unsere <span className="text-gradient">3D-Druck Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Professioneller <strong className="text-primary">FDM 3D-Druck Service</strong> aus Oberösterreich für 
            Messen, Architektur und Industriepräsentationen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Anschauungsmodelle für jeden Maßstab – termingerecht und präzise gefertigt 
            mit nachhaltigen Materialien aus Österreich.
          </p>
        </div>

        {/* Legal Notice */}
        <div className="max-w-3xl mx-auto mb-12 bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Hinweis:</span> Ausschließlich Anschauungsmodelle für 
              Messen, Architektur und Industriepräsentationen. 
              <span className="font-medium text-foreground"> Keine Funktionsteile oder technische Bauteile.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 gradient-card border-0 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={service.link}>Mehr erfahren</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="shadow-lg group" asChild>
            <Link href="/kontakt">
              <PenTool className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Projekt anfragen
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            oder nutzen Sie unseren <span className="font-semibold text-foreground">🤖 KI-Berater</span> für schnelle Antworten
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
