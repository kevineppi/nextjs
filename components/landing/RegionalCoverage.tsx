'use client'

import Link from "next/link";
import { MapPin } from "lucide-react";

interface RegionalCoverageProps {
  serviceName: string;
  description?: string;
  baseUrl?: 'messemodelle' | '3d-druck'; // Which regional pages to link to
}

const RegionalCoverage = ({ serviceName, description, baseUrl = '3d-druck' }: RegionalCoverageProps) => {
  // Define regions with slugs that work for both URL patterns
  const regionData = [
    { name: "Wien", slug: "wien" },
    { name: "Oberösterreich", slug: "oberoesterreich" },
    { name: "Niederösterreich", slug: "niederoesterreich" },
    { name: "Steiermark", slug: "steiermark" },
    { name: "Salzburg", slug: "salzburg" },
    { name: "Kärnten", slug: "kaernten" },
    { name: "Tirol", slug: "tirol" },
    { name: "Vorarlberg", slug: "vorarlberg" },
    { name: "Burgenland", slug: "burgenland" },
  ];

  const cityData = [
    { name: "Linz", slug: "linz" },
    { name: "Graz", slug: "graz" },
    { name: "Innsbruck", slug: "innsbruck" },
    { name: "Klagenfurt", slug: "klagenfurt" },
    { name: "Wels", slug: "wels" },
    { name: "St. Pölten", slug: "st-poelten" },
    { name: "Dornbirn", slug: "dornbirn" },
    { name: "Villach", slug: "villach" },
    { name: "Gunskirchen", slug: "gunskirchen" },
  ];

  // Build URLs based on baseUrl prop
  const getUrl = (slug: string) => {
    if (baseUrl === 'messemodelle') {
      return `/messemodelle/${slug}`;
    }
    // Default 3d-druck URLs with some special cases
    const specialCases: Record<string, string> = {
      'tirol': '/3d-druck-innsbruck',
      'salzburg': '/3d-druck-salzburg',
    };
    return specialCases[slug] || `/3d-druck-${slug}`;
  };

  const regions = regionData.map(r => ({ name: r.name, url: getUrl(r.slug) }));
  const cities = cityData.map(c => ({ name: c.name, url: getUrl(c.slug) }));

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Versand in ganz Österreich</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {serviceName} in ganz Österreich
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description || `Von unserem Standort in Gunskirchen (Oberösterreich) liefern wir ${serviceName} in alle Bundesländer. Standardversand in 3-5 Werktagen, Express in 24-48h.`}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Bundesländer</h3>
            <div className="flex flex-wrap gap-2">
              {regions.map((region, index) => (
                <Link 
                  key={index} 
                  href={region.url}
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {region.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Städte</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <Link 
                  key={index} 
                  href={city.url}
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-muted/50 hover:bg-primary/10 hover:text-primary px-3 py-1.5 rounded-full text-sm transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-muted/30 rounded-xl max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Standort Gunskirchen, OÖ:</strong> Zentraler Standort für schnelle Lieferung nach Wien (2h Fahrt), 
            Linz (20min), Salzburg (1h), Graz (2h) und in die gesamte DACH-Region. 
            Persönliche Abholung nach Vereinbarung möglich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegionalCoverage;
