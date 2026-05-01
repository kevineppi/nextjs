import Link from "next/link";
import { BookOpen, TrendingUp, Clock, Award, Palette, Wrench, Wallet } from "lucide-react";
import StickyCTA from "@/components/landing/StickyCTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AIChatWidget from "@/components/AIChatWidget";

const Ratgeber = () => {
  const articles = [
    {
      title: "Architekturmodell Flatrate vs. Einzelauftrag: Wann lohnt sich ein Abo?",
      description: "Break-even-Tabelle, Praxisbeispiele und ehrlicher Kostenvergleich – ab wann sich die Architektur-Flatrate für Ihr Büro rechnet. Mit Preistabelle 2026.",
      link: "/ratgeber/architekturmodell-flatrate",
      icon: Wallet,
      category: "Architektur-Flatrate",
      readTime: "8 Min. Lesezeit",
      date: "April 2026",
      highlight: true
    },
    {
      title: "Messemodelle im 3D-Druck: Kosten, Planung & Tipps 2026",
      description: "Schritt-für-Schritt Guide für Messeaussteller: Was kostet ein Messemodell? Wie plane ich rechtzeitig? Materialwahl und echte Preisbeispiele aus der Praxis.",
      link: "/ratgeber/messemodell-guide",
      icon: TrendingUp,
      category: "Messemodelle",
      readTime: "10 Min. Lesezeit",
      date: "März 2026"
    },
    {
      title: "Architekturmodelle 3D-Druck: Maßstäbe, Kosten & CAD-Export",
      description: "Der komplette Guide für Architekten: Welcher Maßstab für welchen Zweck? Export aus ArchiCAD, Revit & SketchUp. Kosten von Studienmodell bis Städtebau.",
      link: "/ratgeber/architekturmodell-guide",
      icon: Palette,
      category: "Architekturmodelle",
      readTime: "12 Min. Lesezeit",
      date: "März 2026"
    },
    {
      title: "Rapid Prototyping mit 3D-Druck: Der ultimative Guide 2026",
      description: "Funktionsprototypen in 24h, Materialwahl für Ingenieure, CAD-Formate und Toleranzen – alles was Produktentwickler wissen müssen.",
      link: "/rapid-prototyping",
      icon: Wrench,
      category: "Prototypen",
      readTime: "10 Min. Lesezeit",
      date: "März 2026"
    },
    {
      title: "3D-Druck Kosten in Österreich: Der ultimative Preisguide 2026",
      description: "Erfahren Sie alles über 3D-Druck Preise, Kostenfaktoren und wie Sie bei Ihrem nächsten Projekt Geld sparen können. Inklusive echter Preisbeispiele und Kalkulationshilfen.",
      link: "/ratgeber/kosten-guide",
      icon: TrendingUp,
      category: "Kosten & Preise",
      readTime: "8 Min. Lesezeit",
      date: "März 2026"
    },
    {
      title: "FDM vs. SLA vs. SLS: Welches 3D-Druckverfahren ist das richtige?",
      description: "Wissenschaftlich fundierter Vergleich der drei wichtigsten 3D-Druckverfahren. Genauigkeit, Kosten, Anwendungen und technische Details im direkten Vergleich.",
      link: "/ratgeber/verfahrens-vergleich",
      icon: Award,
      category: "Technologie",
      readTime: "12 Min. Lesezeit",
      date: "März 2026"
    },
    {
      title: "PLA, PETG oder ASA? Der wissenschaftliche Material-Guide",
      description: "Fundierter Vergleich der wichtigsten FDM-Materialien mit mechanischen Eigenschaften, Temperaturbeständigkeit und Anwendungsbereichen – wissenschaftlich belegt.",
      link: "/ratgeber/material-guide",
      icon: BookOpen,
      category: "Materialien",
      readTime: "10 Min. Lesezeit",
      date: "März 2026"
    }
  ];

  const upcomingArticles = [
    {
      title: "Die 10 häufigsten Fehler beim 3D-Druck Auftrag",
      category: "Best Practices",
      comingSoon: true
    },
    {
      title: "Nachhaltigkeit im 3D-Druck: Österreichisches vs. importiertes Filament",
      category: "Nachhaltigkeit",
      comingSoon: true
    },
  ];

  return (
    <>
      <SEOHead
        title="3D-Druck Ratgeber: Kosten, Material & Verfahren [2026]"
        description="Erstes 3D-Druck Projekt? 6 Gratis-Guides zu Kosten, Materialwahl & Verfahren ✓ Spart Geld & Fehler ✓ PLA oder PETG? FDM oder SLA? → Experten-Wissen kostenlos lesen"
        keywords="3d-druck ratgeber, 3d-druck kosten, fdm verfahren, 3d-druck tipps österreich, 3d-druck guide, modellbau guide, rapid prototyping guide"
        path="/ratgeber"
        schemaType="article"
        datePublished="2025-10-01"
        dateModified="2026-04-26"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">3D-Druck Expertenwissen</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                3D-Druck Ratgeber für Österreich
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Professionelles Wissen rund um 3D-Druck, FDM-Technologie und Modellbau. Von Expert:innen aus Oberösterreich für ganz Österreich.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{articles.length}</div>
                  <div className="text-sm text-muted-foreground">Artikel verfügbar</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">~10 Min</div>
                  <div className="text-sm text-muted-foreground">Durchschn. Lesezeit</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Expertenwissen</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">2026</div>
                  <div className="text-sm text-muted-foreground">Aktuell & relevant</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Aktuelle Artikel</h2>
            
            <div className="grid md:grid-cols-1 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${(article as any).highlight ? "border-primary/40 bg-primary/5 ring-1 ring-primary/20" : ""}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <article.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm text-primary font-medium">{article.category}</div>
                            {(article as any).highlight && <span className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">NEU</span>}
                          </div>
                          <div className="text-xs text-muted-foreground">{article.date} • {article.readTime}</div>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                    <CardDescription className="text-base">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full md:w-auto">
                      <Link href={article.link}>
                        {article.category === 'Architektur-Flatrate' && 'Flatrate-Guide lesen →'}
                        {article.category === 'Messemodelle' && 'Messemodell-Guide lesen'}
                        {article.category === 'Architekturmodelle' && 'Architekturmodell-Guide lesen'}
                        {article.category === 'Prototypen' && 'Prototyping-Guide lesen'}
                        {article.category === 'Kosten & Preise' && '3D-Druck Kosten-Guide lesen'}
                        {article.category === 'Technologie' && 'Verfahrens-Vergleich lesen'}
                        {article.category === 'Materialien' && 'Material-Guide lesen'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Demnächst verfügbar</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingArticles.map((article, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardHeader>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                        Demnächst
                      </span>
                    </div>
                    <div className="text-sm text-primary font-medium mb-2">{article.category}</div>
                    <CardTitle className="text-lg opacity-75">{article.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Möchten Sie über neue Artikel informiert werden?
              </p>
              <Button asChild variant="outline">
                <Link href="/kontakt">Newsletter abonnieren</Link>
              </Button>
            </div>
          </div>
        </section>

        <StickyCTA context="Ratgeber" />
        <AIChatWidget />
        <Footer />
      </div>
    </>
  );
};

export default Ratgeber;