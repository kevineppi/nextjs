import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Gift, Palette } from "lucide-react";
import Link from "next/link";

const CaseStudiesTeaser = () => {
  const caseStudies = [
    {
      icon: Home,
      industry: "Architektur",
      title: "Architekturmodell Villa",
      result: "Detailgetreue Präsentation, schnelle Lieferung",
      link: "/kontakt"
    },
    {
      icon: Gift,
      industry: "Geschenke",
      title: "Personalisierte Figuren",
      result: "Einzigartige Unikate, höchste Qualität",
      link: "/kontakt"
    },
    {
      icon: Palette,
      industry: "Dekoration",
      title: "Designer Vasen-Set",
      result: "Individuelle Designs, nachhaltig gefertigt",
      link: "/kontakt"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere Projekte <span className="text-gradient">in Aktion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Erfolgreiche Projekte aus Modellbau, Dekoration und mehr
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="hover:border-primary/50 transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{study.industry}</Badge>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {study.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group" asChild>
                    <Link href={study.link}>
                      Jetzt Projekt anfragen
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">
              Anfrage für Ihr Projekt stellen
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaser;