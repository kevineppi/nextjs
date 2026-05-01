'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Star, ExternalLink, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

interface PlacesData {
  name: string;
  rating: number;
  total: number;
  reviews: GoogleReview[];
}

// Fallback reviews falls API nicht verfügbar
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    author_name: "Christian Steller",
    author_url: "",
    profile_photo_url: "",
    rating: 5,
    text: "Ich bin absolut begeistert von ekDruck! Die Qualität ist erstklassig, jedes Detail wird sehr präzise und sauber umgesetzt. Die Kommunikation war von Anfang an ausgesprochen freundlich und professionell.",
    time: 1734220800,
    relative_time_description: "vor 3 Monaten",
  },
  {
    author_name: "Silvio T.",
    author_url: "",
    profile_photo_url: "",
    rating: 5,
    text: "Sehr freundlich und unkompliziert. Ich bin begeistert von dem Stück. Exakter Clone vom Forschungsstück. Absolut professionell!! Kann ich nur weiterempfehlen! Preis Leistung ist einfach Super.",
    time: 1737158400,
    relative_time_description: "vor 1 Woche",
  },
  {
    author_name: "Klaus F.",
    author_url: "",
    profile_photo_url: "",
    rating: 5,
    text: "Sehr schnelle Abwicklung. Ein Teil wurde sogar 2x gedruckt, da beim ersten Druck ein Überhang nicht sauber war. Das auf eigene Kosten der Firma. Kommunikation war ausgezeichnet.",
    time: 1736640000,
    relative_time_description: "vor 2 Wochen",
  },
  {
    author_name: "Hannah E.",
    author_url: "",
    profile_photo_url: "",
    rating: 5,
    text: "Inhaber sehr zuvorkommend und freundlich, mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen.",
    time: 1736899200,
    relative_time_description: "vor 2 Wochen",
  },
  {
    author_name: "Simone G.",
    author_url: "",
    profile_photo_url: "",
    rating: 5,
    text: "Antwortet schnell 👌 Preis-Leistung extrem fair. Empfehlenswert!",
    time: 1736467200,
    relative_time_description: "vor 1 Monat",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-border"}`}
      />
    ))}
  </div>
);

const GoogleReviewsSection = () => {
  const [data, setData] = useState<PlacesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data: result, error } = await supabase.functions.invoke("google-reviews");
        if (error || !result?.reviews?.length) {
          throw new Error("API unavailable");
        }
        setData(result);
      } catch {
        setUsingFallback(true);
        setData({
          name: "ekdruck e.U.",
          rating: 5.0,
          total: 31,
          reviews: FALLBACK_REVIEWS,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-card border border-border/50 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const reviews = data?.reviews || [];

  return (
    <section className="py-16 md:py-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fade-in" className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/5 border border-primary/15">
              {/* Google G icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold">Google Bewertungen</span>
              {!usingFallback && (
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">Live</span>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-4xl font-bold">{data?.rating?.toFixed(1)}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Basierend auf <strong className="text-foreground">{data?.total} Google-Bewertungen</strong>
            </p>
          </AnimatedSection>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {reviews.slice(0, 3).map((review, i) => (
              <AnimatedSection key={i} animation="fade-in">
                <div className="group h-full flex flex-col p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    {review.profile_photo_url ? (
                      <img
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-border/50"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{review.author_name}</div>
                      <div className="text-xs text-muted-foreground">{review.relative_time_description}</div>
                    </div>
                    {/* Google icon small */}
                    <svg viewBox="0 0 24 24" className="w-4 h-4 ml-auto flex-shrink-0 opacity-50" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  <StarRating rating={review.rating} />

                  <div className="mt-3 flex-1">
                    <Quote className="w-6 h-6 text-primary/15 mb-1" />
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{review.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA zu Google */}
          <AnimatedSection animation="fade-in" className="text-center">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJ32dHE_nzc0cRF4NmcjDDj3M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all duration-200 hover:text-primary group"
            >
              Alle {data?.total} Bewertungen auf Google ansehen
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
