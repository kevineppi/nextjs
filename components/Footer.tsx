import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">ekdruck e.U.</h3>
            <p className="text-muted-foreground mb-6">
              Spezialist für Architektur- und Messemodelle aus dem 3D-Druck.
              B2B-Service für Architekturbüros in ganz Österreich.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/ekdruck/" target="_blank" rel="noopener noreferrer" aria-label="ekdruck auf Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/3d-druck/" target="_blank" rel="noopener noreferrer" aria-label="ekdruck auf LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/architekturmodelle-abo" className="hover:text-primary transition-colors font-medium text-foreground">Flatrate für Architekturbüros</Link></li>
              <li><Link href="/kostenrechner" className="hover:text-primary transition-colors font-medium text-foreground">3D-Druck Kostenrechner</Link></li>
              <li><Link href="/firmenkunden" className="hover:text-primary transition-colors">Firmenkunden &amp; B2B</Link></li>
              <li><Link href="/architekturmodelle" className="hover:text-primary transition-colors">Architekturmodelle</Link></li>
              <li><Link href="/messemodelle" className="hover:text-primary transition-colors">Messemodelle</Link></li>
              <li><Link href="/prototypen" className="hover:text-primary transition-colors">Prototypen</Link></li>
              <li><Link href="/einzelanfertigungen" className="hover:text-primary transition-colors">Einzelanfertigungen</Link></li>
              <li><Link href="/3d-druck-materialien" className="hover:text-primary transition-colors">Materialien</Link></li>
            </ul>
          </div>

          {/* Regional Pages - Bundesländer */}
          <div>
            <h4 className="font-semibold mb-4">3D-Druck Regionen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/3d-druck-wien" className="hover:text-primary transition-colors">3D-Druck Wien</Link></li>
              <li><Link href="/3d-druck-oberoesterreich" className="hover:text-primary transition-colors">3D-Druck Oberösterreich</Link></li>
              <li><Link href="/3d-druck-steiermark" className="hover:text-primary transition-colors">3D-Druck Steiermark</Link></li>
              <li><Link href="/3d-druck-salzburg" className="hover:text-primary transition-colors">3D-Druck Salzburg</Link></li>
              <li><Link href="/3d-druck-kaernten" className="hover:text-primary transition-colors">3D-Druck Kärnten</Link></li>
              <li><Link href="/3d-druck-niederoesterreich" className="hover:text-primary transition-colors">3D-Druck Niederösterreich</Link></li>
              <li><Link href="/3d-druck-vorarlberg" className="hover:text-primary transition-colors">3D-Druck Vorarlberg</Link></li>
              <li><Link href="/3d-druck-burgenland" className="hover:text-primary transition-colors">3D-Druck Burgenland</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Wissen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link></li>
              <li><Link href="/ratgeber/kosten-guide" className="hover:text-primary transition-colors">3D-Druck Kosten-Guide</Link></li>
              <li><Link href="/ratgeber/material-guide" className="hover:text-primary transition-colors">Material-Guide</Link></li>
              <li><Link href="/ratgeber/verfahrens-vergleich" className="hover:text-primary transition-colors">FDM vs SLA vs SLS</Link></li>
              <li><Link href="/ratgeber/architekturmodell-guide" className="hover:text-primary transition-colors">Architekturmodell-Guide</Link></li>
              <li><Link href="/ratgeber/architekturmodell-flatrate" className="hover:text-primary transition-colors">Flatrate-Guide für Büros</Link></li>
              <li><Link href="/ratgeber/messemodell-guide" className="hover:text-primary transition-colors">Messemodell-Guide</Link></li>
              <li><Link href="/referenzen" className="hover:text-primary transition-colors">Referenzen</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <a href="mailto:office@ek-druck.at" className="text-sm hover:text-primary transition-colors">office@ek-druck.at</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <a href="tel:+436765517197" className="text-sm hover:text-primary transition-colors">+43 676 5517197</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                <div className="text-sm">
                  <div>Negrellistraße 15</div>
                  <div>4623 Gunskirchen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ekdruck e.U. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap items-center space-x-6 mt-4 md:mt-0">
            <Link href="/impressum" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/kontakt" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
