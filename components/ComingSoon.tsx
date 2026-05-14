import { Clock, Bell, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
}

const ComingSoon = ({ 
  title = "Coming Soon", 
  subtitle = "Wir arbeiten an etwas Besonderem für Sie" 
}: ComingSoonProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 mb-8 shadow-lg">
            <Sparkles className="h-10 w-10 text-primary-foreground" />
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Clock className="h-4 w-4" />
            In Entwicklung
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">{title}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          {/* Description */}
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Diese Seite wird derzeit überarbeitet. Kontaktieren Sie uns gerne direkt 
            für Ihr individuelles Projekt oder schauen Sie bald wieder vorbei.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero" asChild className="group">
              <Link href="/kontakt">
                <Bell className="mr-2 h-5 w-5" />
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                Zur Startseite
              </Link>
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="mt-16 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 inline-block">
            <p className="text-sm text-muted-foreground mb-2">
              Direkte Anfragen an:
            </p>
            <p className="font-semibold text-foreground">
              office@ek-druck.at · +43 676 5517197
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
