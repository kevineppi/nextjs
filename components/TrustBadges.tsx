import { Shield, Star, Users, CheckCircle } from "lucide-react";

interface TrustBadgesProps {
  variant?: "compact" | "full";
}

const TrustBadges = ({ variant = "full" }: TrustBadgesProps) => {
  const badges = [
    {
      icon: Users,
      text: "100+ erfolgreiche Projekte",
      highlight: "100+",
    },
    {
      icon: Star,
      text: "5.0/5 bei Google Bewertungen",
      highlight: "5.0/5",
    },
    {
      icon: CheckCircle,
      text: "100% Zufriedenheitsgarantie",
      highlight: "100%",
    },
    {
      icon: Shield,
      text: "Österreichische Qualität",
      highlight: "🇦🇹",
    },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border px-3 py-2 rounded-lg"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                <span className="text-primary">{badge.highlight}</span>{" "}
                {badge.text.replace(badge.highlight, "")}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">
              {badge.highlight}
            </div>
            <div className="text-sm text-muted-foreground">
              {badge.text.replace(badge.highlight, "").trim()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
