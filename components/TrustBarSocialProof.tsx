import { Star, MapPin, Clock, Award, Shield, Zap } from "lucide-react";

/**
 * Konservative, ehrliche Trust-Bar mit Social-Proof-Signalen.
 * Wird direkt unter Hero auf Startseite + Money-Pages eingesetzt.
 * Keine erfundenen Zahlen – nur überprüfbare Aussagen.
 */
const TrustBarSocialProof = () => {
  const trustItems = [
    {
      icon: Star,
      label: "5.0 ★ Google",
      sublabel: "31 Bewertungen",
      highlight: true,
    },
    {
      icon: MapPin,
      label: "Made in Austria",
      sublabel: "Gunskirchen, OÖ",
      highlight: false,
    },
    {
      icon: Clock,
      label: "Antwort in 6h",
      sublabel: "Mo–Fr persönlich",
      highlight: false,
    },
    {
      icon: Zap,
      label: "Express 24h",
      sublabel: "Bei Eilaufträgen",
      highlight: false,
    },
    {
      icon: Shield,
      label: "5+ Jahre Erfahrung",
      sublabel: "Eigentümergeführt",
      highlight: false,
    },
    {
      icon: Award,
      label: "AT-weite Lieferung",
      sublabel: "Versand & Selbstabholung",
      highlight: false,
    },
  ];

  return (
    <section
      className="border-y border-border bg-muted/20 py-6 md:py-8"
      aria-label="Vertrauen & Qualitätsmerkmale"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 group transition-transform hover:-translate-y-0.5 ${
                item.highlight ? "" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110 ${
                  item.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm leading-tight tracking-tight">{item.label}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSocialProof;
