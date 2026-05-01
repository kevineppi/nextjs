import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Zap, Target, CheckCircle } from "lucide-react";
const About = () => {
  const capabilities = ["Einzelanfertigungen & Spezialanfertigungen", "Nachhaltige Inneneinrichtung", "Individuelle Projekte", "Design & Beratung", "Millimetergenaue Präzision", "Express-Service verfügbar"];
  const materials = ["100% Österreichisches Filament", "Hergestellt aus Industrieabfällen", "PLA & PLA+ nachhaltig", "PETG regional", "ABS aus Austria", "Flexible Materialien", "Alle Farben verfügbar", "Verschiedene Größen", "Umweltfreundlich", "Ressourcenschonend"];
  const values = [{
    icon: Target,
    title: "Nachhaltigkeit",
    description: "100% österreichisches Filament aus Industrieabfällen für ressourcenschonende Produktion"
  }, {
    icon: Zap,
    title: "Regionalität",
    description: "Kurze Wege, persönlicher Kontakt und schnelle Lieferzeiten aus Oberösterreich"
  }, {
    icon: Users,
    title: "Kundennähe",
    description: "Langfristige Partnerschaften und kostenlose, individuelle Beratung für jeden Kunden"
  }, {
    icon: Award,
    title: "Qualität",
    description: "Hohe Qualitätsansprüche und millimetergenaue Präzision bei jedem Projekt"
  }];
  return <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Über <span className="text-gradient">ekdruck e.U.</span> - Ihr 3D-Druck Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ihr regionaler 3D-Druck Partner aus Oberösterreich. Nachhaltige Fertigung mit{" "}
            <Link href="/3d-druck-materialien" className="text-primary hover:underline font-semibold">österreichischem Filament</Link>, 
            persönliche Beratung und kurze Lieferwege in ganz Österreich. Spezialisiert auf{" "}
            <Link href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Einzelanfertigungen</Link> und{" "}
            <Link href="/modellbau-dekoration" className="text-primary hover:underline font-semibold">individuelle Projekte</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Company Story */}
          <div className="gradient-card p-10 rounded-2xl border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Unsere Mission</h3>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-primary">ekdruck e.U.</strong> ist Ihr vertrauensvoller 3D-Druck Partner aus Oberösterreich. 
                Wir bieten professionellen <strong className="text-primary">FDM 3D-Druck Service</strong> mit modernster Technologie und{" "}
                <strong className="text-primary">nachhaltigen österreichischen Materialien</strong>.{" "}
                <Link href="/einzelanfertigungen" className="text-primary hover:underline font-semibold">Maßgeschneiderte Einzelstücke</Link> und 
                individuelle Fertigungslösungen aus Oberösterreich - mit kurzen Lieferwegen in ganz Österreich.
              </p>
              <p>
                Unser <strong className="text-primary">3D-Druck Dienstleister</strong> deckt alle Bereiche der additiven Fertigung ab. 
                Von <strong className="text-primary">Anschauungsmodellen</strong> über{" "}
                <strong className="text-primary">Messemodelle</strong> bis hin zu{" "}
                <strong className="text-primary">individuellen Einzelanfertigungen</strong>. 
                Als regionaler <Link href="/fdm-3d-druck" className="text-primary hover:underline font-semibold">3D-Druck Spezialist</Link>{" "}
                legen wir Wert auf persönliche Beratung und langfristige Kundenpartnerschaften.
              </p>
              <p>
                Dabei verwenden wir ausschließlich{" "}
                <strong className="text-primary">nachhaltige Filamente aus österreichischen Industrieabfällen</strong>, 
                um ressourcenschonend und umweltfreundlich zu fertigen. So verbinden wir Qualität mit Nachhaltigkeit 
                und ermöglichen kurze Reaktionszeiten in ganz Österreich und der DACH-Region.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="gradient-card p-10 rounded-2xl border-2 border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold">Unsere Werte</h3>
            </div>
            <div className="space-y-8">
              {values.map((value, index) => <div key={index} className="group flex items-start space-x-5 p-5 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Capabilities and Materials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="gradient-card border-0">
            
          </Card>

          <Card className="gradient-card border-0">
            
          </Card>
        </div>
      </div>
    </section>;
};
export default About;