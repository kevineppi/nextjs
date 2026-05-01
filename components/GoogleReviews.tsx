'use client'

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
const GoogleReviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const placeId = "ChIJ32dHE_nzc0cRF4NmcjDDj3M";

  // Fallback reviews wenn Google Places API nicht verfügbar ist
  const fallbackReviews = [{
    author_name: "Hannah E.",
    rating: 5,
    text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen..",
    time: 1736899200
  }, {
    author_name: "Simone G.",
    rating: 5,
    text: "Anwortet schnell👌 Preis- Leistung extrem fair Empfehlenswert!",
    time: 1736467200
  }, {
    author_name: "Klaus F.",
    rating: 5,
    text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
    time: 1736640000
  }, {
    author_name: "Silvio T.",
    rating: 5,
    text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen!",
    time: 1737158400
  }, {
    author_name: "Christian Steller",
    rating: 5,
    text: "Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.",
    time: 1734220800
  }];
  useEffect(() => {
    // Verwende fallback reviews
    setReviews(fallbackReviews);
  }, []);
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('de-AT', {
      year: 'numeric',
      month: 'long'
    });
  };
  return <div className="w-full">
      <div className="mb-8">
        

        

        <div className="mt-6 text-center">
          
        </div>
      </div>
    </div>;
};
export default GoogleReviews;