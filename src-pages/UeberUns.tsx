import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

import AnimatedSection from "@/components/AnimatedSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Printer,
  Leaf,
  Award,
  MapPin,
  Phone,
  Mail,
  Shield,
  Users,
  Zap,
  Clock,
  CheckCircle2,
  Building2,
  Star,
  Package,
  ArrowRight,
  Heart,
} from "lucide-react";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Über uns – ekdruck | 3D-Druck aus Oberösterreich"
        description="Wer steckt hinter ekdruck? Echte Menschen aus Gunskirchen, OÖ ✓ WKO-gewerbeberechtigt ✓ 10+ FDM-Drucker ✓ Österreichisches Filament ✓ Persönliche Beratung → Lernen Sie uns kennen"
        keywords="ekdruck über uns, 3d-druck gunskirchen, ekdruck e.u., 3d-druck firma österreich, 3d-druck oberösterreich"
        path="/ueber-uns"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Über uns", url: "/ueber-uns" }
      ]} />
      <Navigation />

      <main className="pt-20">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-background pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <AnimatedSection animation="fade-in" className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-5 text-xs font-semibold tracking-wider uppercase px-4 py-1.5">
                Gegründet 2024 · Gunskirchen, Oberösterreich
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Über <span className="text-gradient">ekdruck e.U.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ihr regionaler 3D-Druck Spezialist für Architekturmodelle, Messemodelle und individuelle 
                Anschauungsmodelle – handwerklich präzise, nachhaltig und persönlich aus dem Herzen Oberösterreichs.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {["10+ FDM-Drucker", "Angebot in 6h", "B2B & Privatkunden", "Made in Austria"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── KENNZAHLEN ────────────────────────────────────────── */}
        <section className="py-14 border-y border-border/50 bg-card/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "10+", label: "FDM-Drucker", sublabel: "Parallel in Betrieb", icon: Printer },
                { value: "2024", label: "Firmengründung", sublabel: "ekdruck e.U.", icon: Award },
                { value: "6h", label: "Angebot-Garantie", sublabel: "Verbindlich & kostenlos", icon: Zap },
                { value: "100+", label: "Kundenprojekte", sublabel: "B2B & Privatkunden", icon: Users },
              ].map(({ value, label, sublabel, icon: Icon }, i) => (
                <AnimatedSection key={label} animation="fade-in">
                  <div className="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 text-center cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mt-1">{value}</div>
                    <div className="font-semibold text-sm">{label}</div>
                    <div className="text-xs text-muted-foreground">{sublabel}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── STORY ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <Badge variant="outline" className="mb-4 text-xs">Unsere Geschichte</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Vom Hobby zur spezialisierten<br className="hidden md:block" /> 3D-Druck Manufaktur
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-14 items-start">
                {/* Text */}
                <AnimatedSection animation="slide-up">
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      Alles begann 2022 mit echter Begeisterung: Die ersten Drucker, erste Fehldrucke, erste 
                      Erfolgserlebnisse – und die wachsende Überzeugung, dass FDM-Druck weit mehr kann, als die 
                      meisten ahnen. Was als privates Hobby startete, wurde schnell zur Leidenschaft.
                    </p>
                    <p>
                      Mit dem Erwerb von Kenntnissen rund um Modellierungssoftware wie Autodesk Fusion 
                      ab 2023 wurde das Spektrum größer: Dateien optimieren, Druckparameter perfektionieren, 
                      Materialien verstehen – das Handwerk von Grund auf lernen und lieben.
                    </p>
                    <p>
                      2024 folgte der logische nächste Schritt: die offizielle Firmengründung als ekdruck e.U. 
                      Anfangs mit Fokus auf Privatkunden – Menschen mit kreativen Ideen, die ein besonderes 
                      Geschenk, ein Dekorationsstück oder ein individuelles Anschauungsmodell suchten. 
                      Dieser direkte, persönliche Kontakt hat uns bis heute geprägt.
                    </p>
                    <p>
                      Seit Anfang 2025 kommen immer mehr große Firmenprojekte dazu – Architekturmodelle für 
                      Planungsbüros, Messeexponate für Aussteller im DACH-Raum, Präsentationsmodelle für 
                      Unternehmen. Die Wurzeln als handwerklicher Betrieb mit persönlichem Anspruch 
                      bleiben dabei immer spürbar.
                    </p>
                    <div className="flex items-center gap-2 pt-2 text-primary font-medium text-sm">
                      <Heart className="w-4 h-4 fill-primary" />
                      Auf Privatkunden sind wir nach wie vor genauso stolz wie auf unsere Firmenprojekte.
                    </div>
                  </div>
                </AnimatedSection>

                {/* Timeline */}
                <AnimatedSection animation="slide-up">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
                    <div className="space-y-4">
                      {[
                        {
                          year: "2022",
                          title: "Der Funke",
                          text: "Privater Einstieg in den FDM-Druck – Technik, Materialien und Möglichkeiten intensiv erprobt.",
                          active: false,
                        },
                        {
                          year: "2023",
                          title: "Wissen aufbauen",
                          text: "Vertiefung in Modellierungssoftware & Druckoptimierung – das Handwerk von Grund auf erlernt.",
                          active: false,
                        },
                        {
                          year: "2024",
                          title: "Firmengründung",
                          text: "Offizielle Gründung als ekdruck e.U. – Start mit Privatkunden und ersten Einzelanfertigungen.",
                          active: false,
                        },
                        {
                          year: "2025",
                          title: "Große Projekte",
                          text: "Erste Großaufträge: Architektur- & Messemodelle für Unternehmen im DACH-Raum.",
                          active: true,
                        },
                        {
                          year: "Heute",
                          title: "Wachstum & Herz",
                          text: "10+ Drucker, österreichweit & Deutschland – B2B & Privatkunden, persönlich & zuverlässig.",
                          active: true,
                        },
                      ].map(({ year, title, text, active }) => (
                        <div key={year} className="flex gap-5 group">
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 group-hover:scale-110 ${
                              active
                                ? "bg-primary border-primary text-primary-foreground"
                                : "bg-card border-primary/30 text-primary"
                            }`}>
                              <span className="text-[10px] font-bold leading-none text-center px-1">{year}</span>
                            </div>
                          </div>
                          <div className={`flex-1 pb-4 p-4 rounded-xl border transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md group-hover:-translate-y-0.5 ${
                            active ? "bg-primary/5 border-primary/20" : "bg-card border-border/50"
                          }`}>
                            <div className="font-semibold text-sm mb-1">{title}</div>
                            <div className="text-xs text-muted-foreground leading-relaxed">{text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ── WKO TRUST ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-10">
                <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider px-3 py-1">
                  <Shield className="w-3 h-3 mr-1.5 inline" /> Rechtliche Grundlage
                </Badge>
                <h2 className="text-3xl font-bold mb-3">WKO-Gewerbeberechtigung</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                  ekdruck e.U. ist ein eingetragenes österreichisches Einzelunternehmen mit offizieller Gewerbeberechtigung der WKO.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-5">
                <AnimatedSection animation="slide-up">
                  <div className="group h-full p-6 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Gewerbeberechtigung (WKO)</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Gewerbe:</strong> Erzeugung von Architekturmodellen sowie Modellen 
                          für Gebrauchsgegenstände aller Art, sofern diese lediglich Anschauungszwecken dienen.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          Gemäß Gewerbeordnung (GewO) der Wirtschaftskammer Österreich (WKO)
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-up">
                  <div className="group h-full p-6 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Unternehmensform</h3>
                        <ul className="text-sm text-muted-foreground space-y-1.5">
                          {[
                            ["Firma", "ekdruck e.U."],
                            ["Rechtsform", "Einzelunternehmen (e.U.)"],
                            ["Land", "Österreich"],
                            ["Kammer", "WKO Oberösterreich"],
                          ].map(([k, v]) => (
                            <li key={k} className="flex items-center gap-2">
                              <span className="text-foreground font-medium">{k}:</span>
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ── MASCHINENPARK ─────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <Badge variant="outline" className="mb-4 text-xs">Technik & Kapazität</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Maschinenpark</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Über 10 professionelle FDM-Drucker – parallel betrieben für kurze Lieferzeiten 
                  auch bei größeren Aufträgen.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    icon: Printer,
                    title: "10+ FDM-Drucker",
                    description: "Parallelbetrieb mehrerer Maschinen ermöglicht Express-Lieferung in 24-48h – auch bei größeren Stückzahlen.",
                  },
                  {
                    icon: Package,
                    title: "Großes Bauvolumen",
                    description: "Druckbetten bis 350×350mm für großformatige Modelle ohne Teilungsstellen – ideal für Architektur- und Messemodelle.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Produktion",
                    description: "Automatisierter Druckbetrieb rund um die Uhr sichert zuverlässige Termintreue – auch vor wichtigen Messen.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <AnimatedSection key={title} animation="fade-in">
                    <div className="group h-full p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Materialien Grid */}
              <AnimatedSection animation="fade-in">
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/60">
                  <h3 className="font-semibold mb-5 flex items-center gap-2 text-base">
                    <Package className="w-4 h-4 text-primary" />
                    Verarbeitete Materialien
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { material: "PLA", note: "Biologisch abbaubar" },
                      { material: "PETG", note: "Robust & flexibel" },
                      { material: "ASA", note: "UV-beständig" },
                      { material: "TPU", note: "Stoßdämpfend" },
                      { material: "PLA Silk", note: "Seidiger Glanz" },
                      { material: "Wood-Fill", note: "Holzoptik" },
                      { material: "Marble PLA", note: "Marmor-Optik" },
                      { material: "Metal-Fill", note: "Metallic-Optik" },
                    ].map(({ material, note }) => (
                      <div key={material} className="group flex flex-col gap-0.5 p-3.5 rounded-xl bg-background border border-border/40 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                        <span className="font-bold text-sm text-primary group-hover:text-primary">{material}</span>
                        <span className="text-xs text-muted-foreground">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── NACHHALTIGKEIT ────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-primary/5 border-y border-primary/10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <AnimatedSection animation="slide-up">
                  <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
                    <Leaf className="w-3 h-3 mr-1.5 inline" /> Nachhaltigkeit
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">Regional & nachhaltig produziert</h2>
                  <p className="text-muted-foreground mb-7 leading-relaxed">
                    Nachhaltigkeit ist kein Marketingbegriff für uns – es ist eine bewusste Entscheidung, 
                    die sich durch alle Produktionsschritte zieht.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Österreichisches PLA-Filament aus regionaler Produktion",
                      "PLA ist biologisch abbaubar und auf Maisstärkebasis",
                      "Kurze Transportwege durch lokale Fertigung in OÖ",
                      "Auf-Bestellung-Produktion minimiert Verschwendung",
                      "Materialreste werden sortenrein recycelt",
                      "Energieeffiziente Produktion durch moderne FDM-Technologie",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection animation="fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Leaf, label: "Bio-PLA", sublabel: "Österreichisches Filament", color: "from-green-500/10 to-green-500/5" },
                      { icon: MapPin, label: "Regional", sublabel: "Produktion in OÖ", color: "from-primary/10 to-primary/5" },
                      { icon: Package, label: "Zero-Waste", sublabel: "Auf-Bestellung-Fertigung", color: "from-primary/10 to-primary/5" },
                      { icon: Zap, label: "Energieeffizient", sublabel: "Moderne FDM-Technologie", color: "from-yellow-500/10 to-yellow-500/5" },
                    ].map(({ icon: Icon, label, sublabel, color }) => (
                      <div key={label} className={`group p-6 rounded-2xl bg-gradient-to-br ${color} border border-primary/15 text-center hover:border-primary/35 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
                        <div className="w-11 h-11 rounded-xl bg-background/80 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-semibold text-sm">{label}</div>
                        <div className="text-xs text-muted-foreground mt-1">{sublabel}</div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERTISE & VERTRAUEN ─────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <Badge variant="outline" className="mb-4 text-xs">Warum ekdruck</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Expertise & Vertrauen</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                  Was uns von anonymen Druckportalen unterscheidet – und warum Kunden immer wieder kommen.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-5 mb-12">
                {[
                  {
                    icon: Star,
                    title: "5-Sterne Bewertungen",
                    description: "Über 21 verifizierte Google-Bewertungen von echten Kunden. Transparenz und Qualität stehen für uns an erster Stelle.",
                    accent: true,
                  },
                  {
                    icon: Zap,
                    title: "Angebot in 6 Stunden",
                    description: "Verbindliche Angebote innerhalb von 6 Stunden nach Anfrage – kein wochenlanges Warten, kein Preisrätselraten.",
                    accent: false,
                  },
                  {
                    icon: Award,
                    title: "Spezialisierung statt Masse",
                    description: "Kein allgemeiner 3D-Druck-Shop – wir sind Experten für Anschauungsmodelle, Architektur- und Messemodelle.",
                    accent: false,
                  },
                ].map(({ icon: Icon, title, description, accent }) => (
                  <AnimatedSection key={title} animation="fade-in">
                    <div className={`group h-full p-6 rounded-2xl border hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ${
                      accent
                        ? "bg-primary/5 border-primary/25 hover:border-primary/50 hover:shadow-primary/10"
                        : "bg-card border-border/60 hover:border-primary/40 hover:shadow-primary/5"
                    }`}>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${
                        accent ? "bg-primary/20" : "bg-primary/10 group-hover:bg-primary/20"
                      }`}>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* NAP – Local SEO Schema */}
              <AnimatedSection animation="fade-in">
                <div
                  className="p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/30 transition-colors"
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <h3 className="font-semibold mb-6 text-base flex items-center gap-2" itemProp="name">
                    <MapPin className="w-4 h-4 text-primary" />
                    ekdruck e.U. – Kontakt & Standort
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: MapPin,
                        label: "Adresse",
                        content: (
                          <address className="not-italic text-sm text-foreground leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <span itemProp="streetAddress">Negrellistraße 15</span><br />
                            <span itemProp="postalCode">4623</span> <span itemProp="addressLocality">Gunskirchen</span><br />
                            <span itemProp="addressRegion">Oberösterreich</span>, <span itemProp="addressCountry">Österreich</span>
                          </address>
                        ),
                        sub: null,
                      },
                      {
                        icon: Phone,
                        label: "Telefon",
                        content: (
                          <a href="tel:+436765517197" className="text-sm font-medium hover:text-primary transition-colors" itemProp="telephone">
                            +43 676 5517197
                          </a>
                        ),
                        sub: "Mo–Fr, 8:00–18:00 Uhr",
                      },
                      {
                        icon: Mail,
                        label: "E-Mail",
                        content: (
                          <a href="mailto:office@ek-druck.at" className="text-sm font-medium hover:text-primary transition-colors" itemProp="email">
                            office@ek-druck.at
                          </a>
                        ),
                        sub: "Angebot innerhalb 6 Stunden",
                      },
                    ].map(({ icon: Icon, label, content, sub }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1.5">{label}</div>
                          {content}
                          {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── GOOGLE BEWERTUNGEN ────────────────────────────────── */}
        <GoogleReviewsSection />

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-primary/8 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 text-center relative">
            <AnimatedSection animation="fade-in" className="max-w-2xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihr Projekt?</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Schildern Sie uns Ihr Vorhaben – wir melden uns innerhalb von 6 Stunden 
                mit einem verbindlichen, kostenlosen Angebot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link href="/kontakt">
                    Kostenloses Angebot anfordern
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/referenzen">Referenzen ansehen</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <StickyCTA context="ekdruck Anfrage" />
      <Footer />
    </div>
  );
};

export default UeberUns;
