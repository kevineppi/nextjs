'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
    
    // Set noindex for 404 pages
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      // Let the next page's SEOHead set the correct robots directive
    };
  }, [pathname]);

  const popularPages = [
    { to: "/messemodelle", label: "Messemodelle" },
    { to: "/architekturmodelle", label: "Architekturmodelle" },
    { to: "/einzelanfertigungen", label: "Einzelanfertigungen" },
    { to: "/kostenrechner", label: "Kostenrechner" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Seite nicht gefunden | ekdruck e.U."
        description="Die gesuchte Seite existiert nicht. Entdecken Sie unsere 3D-Druck Services für Messemodelle, Architekturmodelle und Einzelanfertigungen."
        path={pathname}
      />
      <Navigation />

      <main className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Seite nicht gefunden
          </h1>
          <p className="text-muted-foreground mb-8">
            Die Seite <span className="font-mono text-sm bg-muted px-2 py-0.5 rounded">{pathname}</span> existiert leider nicht oder wurde verschoben.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button asChild>
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Zur Startseite
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/kontakt">
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground mb-3">Beliebte Seiten:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularPages.map((page) => (
                <Link
                  key={page.to}
                  href={page.to}
                  className="text-sm px-3 py-1.5 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
