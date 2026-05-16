'use client'

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MagneticCard from "@/components/MagneticCard";
import { Check, ArrowRight, Clock, AlertTriangle, Wallet, TrendingDown, Zap, Package, Calendar, Phone } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "5 Tage Wartezeit – mitten in der Iteration",
    text: "Ihre Konstruktion ist fertig, der Sprint läuft. Aber Sie warten 4–5 Werktage auf den Druck. Beim nächsten Druckdienstleister dasselbe Spiel. Das Sprint-Ziel verschiebt sich – und mit ihm die Roadmap.",
  },
  {
    icon: AlertTriangle,
    title: "Pro Anfrage ein neuer Preis, eine neue Lieferzeit",
    text: "Mal €45, mal €120, mal €230 – für ähnliche Bauteile. Manchmal in 3 Tagen, manchmal in 10. Sie können Ihrem Vorstand kein verlässliches Iterationsbudget vorlegen, weil die Kosten pro Zyklus springen.",
  },
  {
    icon: Wallet,
    title: "Zur Deadline immer noch ohne Slot",
    text: "Freitag soll der Funktionstest stattfinden, Donnerstag ruft der Konstrukteur an: 'Wir brauchen noch eine Variante.' Sie versuchen einen Express-Slot zu bekommen – der ist belegt. Wieder kein Test, wieder eine Woche verloren.",
  },
];

const loyaltyOptions = [
  {
    name: "Volumen-Rabatt",
    icon: TrendingDown,
    eyebrow: "Für regelmäßige Bedarfe",
    headline: "Mehr Aufträge, weniger Stückkosten",
    text: "Ab dem 5. Auftrag im Quartal sparen Sie automatisch. Keine Karte, keine Anmeldung, kein Vertrag – wir erkennen Sie über Ihre Auftraggeber-Daten und rechnen den Rabatt direkt auf der Rechnung an.",
    stufen: [
      { volume: "5+ Aufträge / Quartal", rabatt: "10%", desc: "Automatisch ab dem 5. Auftrag" },
      { volume: "10+ Aufträge / Quartal", rabatt: "15%", desc: "Premium-Stammkunden-Status" },
      { volume: "20+ Aufträge / Quartal", rabatt: "20%", desc: "Direkter Inhaber-Kontakt inklusive" },
    ],
    cta: "Mehr erfahren",
    ctaLink: "#kontakt",
  },
  {
    name: "Express-Slot-Vorvertrag",
    icon: Zap,
    eyebrow: "Für Deadline-Druck-Sicherheit",
    headline: "3 Express-Slots auf Abruf",
    text: "Einmalig €149 sichert Ihnen drei 24h-Express-Slots in den nächsten 6 Monaten. Sie rufen an, wir produzieren in 24 Stunden – garantiert verfügbar, auch wenn unsere Maschinen sonst ausgelastet sind.",
    stufen: [
      { volume: "Einmal-Zahlung €149", rabatt: "3 Slots", desc: "Gültig 6 Monate ab Buchung" },
      { volume: "Druck pro Slot zusätzlich", rabatt: "Normalpreis", desc: "Express-Aufschlag entfällt" },
      { volume: "Slot-Buchung", rabatt: "Telefon", desc: "Direkt mit Inhaber, garantiert" },
    ],
    cta: "Slots reservieren",
    ctaLink: "tel:+436765517197",
    highlighted: true,
  },
  {
    name: "Hardware-Sprint-Paket",
    icon: Package,
    eyebrow: "Für Entwicklungsphasen",
    headline: "10 Iterationen in 3 Monaten",
    text: "Sie sind mitten in der Hardware-Entwicklung und brauchen über 3 Monate intensiv Prototypen? Das Sprint-Paket bündelt 10 Aufträge zum Festpreis – inklusive Produktionspriorität und persönlichem Ansprechpartner.",
    stufen: [
      { volume: "Festpreis €1.490", rabatt: "10 Drucke", desc: "Standard-Größe bis 18×18×18 cm" },
      { volume: "Gültigkeitsdauer", rabatt: "3 Monate", desc: "Auf Wunsch verlängerbar" },
      { volume: "Produktionspriorität", rabatt: "Inklusive", desc: "Vor Einzelaufträgen produziert" },
    ],
    cta: "Sprint planen",
    ctaLink: "#kontakt",
  },
];

const PrototypingStammkundenSection = () => (
  <section id="stammkunden" className="py-32 scroll-mt-20">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">

        {/* Pain-Point Hero */}
        <AnimatedSection animation="fade-in" className="mb-20">
          <div className="text-center mb-16">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Pain Points</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] mb-6">
              Schluss mit<br/>
              <span className="text-gradient">Wartezeit-Lotterie.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Drei Pain Points, die jeder Hardware-Entwickler kennt.
              Drei Loyalty-Konditionen, die helfen – ohne Abo-Zwang.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {painPoints.map((p, i) => (
              <AnimatedSection key={p.title} animation="slide-up" delay={i * 100}>
                <div className="rounded-3xl border-2 border-border bg-muted/30 p-6 md:p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-bold text-base mb-3 tracking-tight leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Lösungs-Headline */}
        <AnimatedSection animation="fade-in" className="text-center mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Unsere Lösung</p>
          <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1] mb-4">
            Stammkunden-Konditionen<br/><span className="text-gradient">statt Abo-Zwang.</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Sie zahlen weiterhin pro Auftrag – nicht monatlich. Aber je nach Bedarfsmuster bieten wir drei Konditionen, die Ihnen Geld, Wartezeit oder beides sparen.
          </p>
        </AnimatedSection>

        {/* Loyalty-Optionen */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {loyaltyOptions.map((opt, i) => (
            <AnimatedSection key={opt.name} animation="slide-up" delay={i * 120}>
              <MagneticCard className={`rounded-3xl border-2 h-full transition-all duration-500 ${opt.highlighted ? 'border-primary shadow-2xl shadow-primary/10 bg-card relative' : 'border-border bg-card hover:border-primary/30'}`}>
                <div className="p-8 md:p-10 relative h-full flex flex-col">
                  {opt.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-3xl" />
                  )}

                  <div className={`w-12 h-12 rounded-2xl ${opt.highlighted ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center mb-6`}>
                    <opt.icon className={`w-6 h-6 ${opt.highlighted ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>

                  <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">{opt.eyebrow}</p>
                  <p className="font-bold text-2xl tracking-tight mb-3">{opt.headline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{opt.text}</p>

                  <div className="space-y-3 mb-8 pb-6 border-b border-border/50 flex-1">
                    {opt.stufen.map((s, j) => (
                      <div key={j} className="rounded-xl bg-muted/40 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold">{s.volume}</span>
                          <span className="mono text-sm font-bold text-primary">{s.rabatt}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground italic">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className={`w-full rounded-full py-6 text-sm font-semibold ${opt.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}
                  >
                    {opt.ctaLink.startsWith('tel:') ? (
                      <a href={opt.ctaLink}><Phone className="mr-2 w-4 h-4" /> {opt.cta}</a>
                    ) : (
                      <Link href={opt.ctaLink}>{opt.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    )}
                  </Button>
                </div>
              </MagneticCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust-Banner */}
        <AnimatedSection animation="fade-in" delay={500}>
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/[0.02] p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Keine Verträge, keine Bindung</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Stammkunden-Konditionen greifen automatisch. Keine Karte, keine Mitgliedschaft, keine Kündigung nötig.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Direkter Inhaber-Kontakt</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ab 20 Aufträgen pro Quartal kommunizieren Sie direkt mit dem Inhaber – Express-Slots per WhatsApp möglich.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">B2B-konditioniert</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    UID-Rechnung, NDA auf Wunsch, Festpreise mit verbindlicher Kalkulation auch für Mehrfach-Bestellungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default PrototypingStammkundenSection;
