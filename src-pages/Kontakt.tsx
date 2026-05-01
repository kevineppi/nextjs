import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Breadcrumbs from "@/components/landing/Breadcrumbs";
import InternalLinks from "@/components/landing/InternalLinks";
import CalEmbed from "@/components/CalEmbed";
import { Calendar, Clock, Video } from "lucide-react";

const contactLinks = [
  { to: "/messemodelle", label: "Messemodelle anfragen", description: "Express-Fertigung für Messen & Events ab 24h" },
  { to: "/architekturmodelle", label: "Architekturmodelle", description: "Maßstabsgetreue Modelle für Wettbewerbe & Präsentationen" },
  { to: "/rapid-prototyping", label: "Rapid Prototyping", description: "Funktionale Prototypen in 24–48 Stunden" },
  { to: "/firmenkunden", label: "Firmenkunden-Service", description: "UID-Rechnung, NDA & Mengenrabatte für Unternehmen" },
  { to: "/ratgeber/kosten-guide", label: "Was kostet 3D-Druck?", description: "Transparenter Kosten-Guide mit Preisbeispielen" },
  { to: "/3d-druck-materialien", label: "Material-Vergleich", description: "PLA vs PETG vs ABS – welches Material passt?" },
];

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Kontakt & Anfrage | 3D-Druck Angebot in 6h | ekdruck"
        description="3D-Druck Anfrage stellen → Kostenloses Angebot in 6h ✓ Persönliche Beratung ✓ Tel: +43 676 5517197 ✓ Express 24h möglich ✓ Kein Callcenter → Jetzt Projekt beschreiben"
        path="/kontakt"
        keywords="3d-druck anfrage, 3d-druck angebot, 3d-druck beratung österreich, kontakt ekdruck, 3d-druck bestellen"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Kontakt", url: "/kontakt" }
      ]} />
      <Navigation />

      <main className="pt-20">
        <Breadcrumbs items={[
          { name: "Kontakt & Anfrage", url: "/kontakt" }
        ]} />
        <Contact />

        {/* Cal.com Inline-Embed: Termin direkt auf der Seite buchen */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border" aria-label="Termin online buchen">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3">
                  Lieber direkt sprechen?
                </p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                  15-Min Beratung – online buchen
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Wählen Sie einen freien Slot. Sie erhalten sofort einen Cal-Video-Link.
                  Kein Sales-Pitch – nur Klartext zu Machbarkeit, Material, Preis und Lieferzeit.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" /> 15 Minuten</div>
                  <div className="flex items-center gap-1.5"><Video className="w-3.5 h-3.5 text-primary" /> Cal Video / Telefon</div>
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> Mo–Fr verfügbar</div>
                </div>
              </div>
              <CalEmbed height="700px" />
            </div>
          </div>
        </section>

        <InternalLinks links={contactLinks} title="Unsere Services im Überblick" />
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;

