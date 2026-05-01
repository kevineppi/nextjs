import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Shield, Award, Zap, CheckCircle } from "lucide-react";
const Reviews = () => {
  // Echte Kundenbewertungen
  const reviews = [{
    id: 1,
    name: "Hannah E.",
    rating: 5,
    text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
    date: "vor 2 Wochen",
    verified: true
  }, {
    id: 2,
    name: "Simone G.",
    rating: 5,
    text: "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
    date: "vor 1 Monat",
    verified: true
  }, {
    id: 3,
    name: "Klaus F.",
    rating: 5,
    text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war, was für meine Anwendung nicht relevant gewesen wäre. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
    date: "vor 3 Wochen",
    verified: true
  }, {
    id: 4,
    name: "Silvio T.",
    rating: 5,
    text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Sehr gerne wieder. Preis Leistung ist einfach Super. Sehr gerne wieder",
    date: "vor 1 Woche",
    verified: true
  }];
  const trustIndicators = [{
    icon: <Award className="w-6 h-6" />,
    title: "2 Jahre Erfahrung",
    description: "Bewährte Expertise in der additiven Fertigung"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "24h Express Service",
    description: "Schnelle Umsetzung für eilige Projekte"
  }, {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "100% Zufriedenheitsgarantie",
    description: "Ihre Zufriedenheit ist unser Anspruch"
  }];
  return <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum <span className="text-gradient">ekdruck e.U.</span> für 3D-Druck vertrauen?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Unsere Kunden schätzen unsere Zuverlässigkeit, Qualität und den persönlichen Service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {trustIndicators.map((indicator, index) => <Card key={index} className="gradient-card border-0 hover:shadow-card transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {indicator.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{indicator.title}</h3>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-12">
          
          
        </div>

        {/* Reviews Grid */}
        

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="gradient-card border-0 max-w-2xl mx-auto animate-scale-in">
            
          </Card>
        </div>
      </div>
    </section>;
};
export default Reviews;