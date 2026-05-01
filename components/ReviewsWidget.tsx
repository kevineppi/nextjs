import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsWidget = () => {
  const reviews = [
    {
      id: 1,
      name: "Hannah E.",
      rating: 5,
      text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
      date: "vor 2 Wochen",
      verified: true
    },
    {
      id: 2,
      name: "Simone G.",
      rating: 5,
      text: "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
      date: "vor 1 Monat",
      verified: true
    },
    {
      id: 3,
      name: "Klaus F.",
      rating: 5,
      text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war, was für meine Anwendung nicht relevant gewesen wäre. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
      date: "vor 3 Wochen",
      verified: true
    },
    {
      id: 4,
      name: "Silvio T.",
      rating: 5,
      text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Sehr gerne wieder. Preis Leistung ist einfach Super. Sehr gerne wieder",
      date: "vor 1 Woche",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Das sagen unsere <span className="text-gradient">Kunden</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Über 50+ zufriedene Kunden vertrauen auf unseren 3D-Druck Service
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="gradient-card border-0 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs text-primary">✓ Verifiziert</span>
                  )}
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-sm mb-4 line-clamp-4">{review.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://search.google.com/local/reviews?placeid=ChIJ32dHE_nzc0cRF4NmcjDDj3M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWidget;