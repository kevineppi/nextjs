import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Presentation, Palette, Users, Wrench, Sparkles, CalendarCheck } from "lucide-react";

interface RelatedPage {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}

const allPages: RelatedPage[] = [
  {
    title: "Flatrate für Architekturbüros",
    description: "Fixpreis ab €199/Mon. · 48h-Lieferung · erstes Modell kostenlos",
    url: "/architekturmodelle-abo",
    icon: CalendarCheck,
    highlight: true
  },
  {
    title: "Architekturmodelle",
    description: "Maßstabsgetreue Modelle für Wettbewerbe und Präsentationen",
    url: "/architekturmodelle",
    icon: Building2
  },
  {
    title: "Messemodelle",
    description: "Express-Fertigung für beeindruckende Messeauftritte",
    url: "/messemodelle",
    icon: Presentation
  },
  {
    title: "Designprototypen",
    description: "Anschauungsmodelle für Präsentationen & Investoren in 24h",
    url: "/rapid-prototyping",
    icon: Wrench
  },
  {
    title: "Kunstobjekte",
    description: "Grenzenlose kreative Möglichkeiten für Künstler",
    url: "/kunstobjekte",
    icon: Palette
  },
  {
    title: "Einzelanfertigungen",
    description: "Individuelle Anschauungsmodelle ab 1 Stück",
    url: "/einzelanfertigungen",
    icon: Sparkles
  },
  {
    title: "Firmenkunden",
    description: "Professionelle B2B-Abwicklung mit Rechnungsstellung",
    url: "/firmenkunden",
    icon: Users
  }
];

interface RelatedPagesProps {
  currentPage: string;
  title?: string;
}

const RelatedPages = ({ currentPage, title = "Weitere Zielgruppen" }: RelatedPagesProps) => {
  const relatedPages = allPages.filter(page => page.url !== currentPage);

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedPages.map((page, index) => (
            <Link key={index} href={page.url} className="group">
              <Card className={`h-full hover:shadow-lg transition-all ${page.highlight ? 'border-primary/50 bg-primary/5 hover:border-primary' : 'hover:border-primary/50'}`}>
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors ${page.highlight ? 'bg-primary/20' : 'bg-primary/10'}`}>
                    <page.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {page.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
