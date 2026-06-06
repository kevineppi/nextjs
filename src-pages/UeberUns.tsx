'use client'

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SEOHead from "@/components/SEOHead"
import StickyCTA from "@/components/landing/StickyCTA"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import AnimatedSection from "@/components/AnimatedSection"
import GoogleReviewsSection from "@/components/GoogleReviewsSection"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Star, Zap, Shield, Award, MapPin, Heart, Wrench, AlertCircle,
  Building2, Sparkles, Package, Leaf, X, ArrowRight, Phone,
  Factory, Gem, Layers, Presentation
} from "lucide-react"
import { BRAND } from "@/data/brandVoice"

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Über uns — ekdruck e.U., 3D-Druck-Manufaktur aus Gunskirchen | ekdruck"
        description="ekdruck e.U. ist eine 3D-Druck-Manufaktur in Gunskirchen, Oberösterreich. Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte für Premium-Brands im DACH-Raum. ★5,0 Bewertungen."
        keywords="ekdruck über uns, ekdruck e.u., 3d druck manufaktur, 3d druck gunskirchen, 3d druck oberösterreich, industriemodelle, messemodelle, marketingobjekte"
        path="/ueber-uns"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Über uns", url: "/ueber-uns" }
      ]} />

      {/* Organization Schema für E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": BRAND.companyName,
            "url": "https://www.ek-druck.at",
            "logo": "https://www.ek-druck.at/lovable-uploads/40dc02c2-6cc2-46bb-aff9-6f06079f1f77.png",
            "description": "3D-Druck-Manufaktur für Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte in Gunskirchen, Oberösterreich.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": BRAND.street,
              "addressLocality": "Gunskirchen",
              "postalCode": BRAND.zip,
              "addressRegion": "Oberösterreich",
              "addressCountry": "AT"
            },
            "telephone": BRAND.phone,
            "email": BRAND.email,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": BRAND.reviews.rating,
              "reviewCount": BRAND.reviews.count
            }
          })
        }}
      />

      <Navigation />

      <main className="pt-20">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[640px] flex items-center bg-foreground">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/about/werkstatt-overview.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.38) contrast(1.1)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/45 to-foreground/85 pointer-events-none" />

          <div className="container mx-auto px-4 relative py-24 md:py-32">
            <AnimatedSection animation="fade-in" className="max-w-4xl">
              <Badge variant="secondary" className="mb-6 text-xs font-bold tracking-wider uppercase px-4 py-1.5 bg-primary/20 border border-primary/40 text-primary">
                ekdruck e.U. · Gunskirchen, Oberösterreich
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.02] tracking-tight text-background">
                Industrieller 3D-Druck.<br />
                <span className="text-primary">Aus eigener Manufaktur.</span>
              </h1>
              <p className="text-lg md:text-xl text-background/75 max-w-2xl leading-relaxed">
                Industriemodelle, Architekturmodelle, Messeobjekte und Marketingobjekte
                für Industriegüter-Hersteller, Architekturbüros und Premium-Brands im DACH-Raum.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Industriemodelle",
                  "Architekturmodelle",
                  "Messeobjekte",
                  "Made in Austria",
                  `★${BRAND.reviews.rating} · ${BRAND.reviews.count} Bewertungen`,
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-background/10 text-background/85 border border-background/20">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── ANCHOR BAR (4 Trust-Signale) ───────────────────── */}
        <section className="py-14 border-y border-border/50 bg-card/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: `★${BRAND.reviews.rating}`, label: "Google-Bewertungen", sublabel: `${BRAND.reviews.count} verifizierte Reviews`, icon: Star },
                { value: "6h", label: "Festpreis-Garantie", sublabel: "Verbindlich & kostenlos", icon: Zap },
                { value: "WKO", label: "Zertifiziert", sublabel: "Gewerbeberechtigung OÖ", icon: Shield },
                { value: "100%", label: "Made in Austria", sublabel: "Material, Produktion, Logistik", icon: MapPin },
              ].map(({ value, label, sublabel, icon: Icon }) => (
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


        {/* ══ WAS WIR MACHEN — 4 DISZIPLINEN ══ */}
        <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Was wir machen">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in" className="mb-14">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-4">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                      Worauf wir spezialisiert sind
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
                      Industrieller 3D-Druck<br />
                      <span className="text-primary">in vier Disziplinen.</span>
                    </h2>
                  </div>
                  <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed">
                    <p>
                      ek-druck ist eine 3D-Druck-Manufaktur mit Sitz in Gunskirchen, Oberösterreich.
                      Wir konstruieren, drucken und veredeln Modelle und Objekte für
                      Industriegüter-Hersteller, Architekturbüros und Marketing-Abteilungen im DACH-Raum.
                    </p>
                    <p className="text-muted-foreground">
                      Konstruktion, Druck und Veredelung laufen unter einem Dach — kein Zwischenhandel,
                      keine Drittagenturen, keine Importvermittler. Jeder Auftrag wird manuell
                      qualitätsgeprüft und vor Versand fotografisch dokumentiert.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Factory,
                    number: "01",
                    title: "Industriemodelle für Messen und Showrooms",
                    description: "Maßstabsgetreue Anschauungsmodelle von Industriemaschinen, Anlagen und Bauteilen. Mit gezielten Cutaway-Sektionen für sichtbare Konstruktionsdetails. Maßstab 1:5 bis 1:25.",
                    link: "/messemodelle"
                  },
                  {
                    icon: Sparkles,
                    number: "02",
                    title: "Marketingobjekte für Industriegüter-Hersteller",
                    description: "Branchen-Skulpturen, Werbe-Inszenierungen, Direct-Mail-Samples und Premium-Klienten-Geschenke. Einzelstücke oder als kleine Edition, immer individuell gefertigt.",
                    link: "/firmenkunden"
                  },
                  {
                    icon: Building2,
                    number: "03",
                    title: "Architekturmodelle für Architekten und Planer",
                    description: "Maßstabsgetreue Anschauungsmodelle von Bauprojekten, Stadtplanung und Innenarchitektur. Für Wettbewerbe, Bauträger-Präsentationen und Endkunden-Visualisierungen. Auch als Architektur-Flatrate.",
                    link: "/architekturmodelle-abo"
                  },
                  {
                    icon: Gem,
                    number: "04",
                    title: "Premium-Geschenke und Sonderanfertigungen",
                    description: "Vertragsabschluss-Replika, Jubiläumsmodelle, Award-Trophäen, Werks-Modelle. Hohe Wertanmutung, individuelle Fertigung, Bedeutung statt Werbung.",
                    link: "/einzelanfertigungen"
                  },
                ].map((cat, i) => (
                  <AnimatedSection key={i} animation="fade-in">
                    <Link href={cat.link} className="block h-full">
                      <div className="group h-full p-7 md:p-8 rounded-3xl bg-muted/30 border-2 border-border hover:border-primary/40 hover:bg-muted/50 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                            <cat.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-1">N° {cat.number}</p>
                            <h3 className="font-bold text-lg md:text-xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                              {cat.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ══ STAMMKUNDEN — GASTROTOPCARD + GENERALI ══ */}
        <section className="py-20 md:py-28 bg-foreground text-background" aria-label="Stammkunden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-16 max-w-2xl mx-auto">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Stammkunden &amp; Referenzen
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  Bekannte Marken.<br />
                  <span className="text-primary">Individuelle Aufträge.</span>
                </h2>
                <p className="text-base md:text-lg text-background/65 leading-relaxed">
                  Vertrauen entsteht über Jahre — nicht über Versprechen. Zwei Stammkunden,
                  die unsere Arbeitsweise repräsentieren.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-5">
                <AnimatedSection animation="slide-up">
                  <article className="bg-background/5 border-2 border-background/10 rounded-3xl p-7 md:p-8 hover:border-primary/40 transition-all h-full">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                      Gastronomie · Laufende Zusammenarbeit
                    </p>
                    <h3 className="font-bold text-xl md:text-2xl tracking-tight leading-tight mb-4">
                      Speisekarten-Abdeckungen für GastroTopCard.
                    </h3>
                    <p className="text-sm md:text-base text-background/72 leading-relaxed">
                      Für die <strong className="text-background font-semibold">GastroTopCard</strong> fertigen
                      wir die Abdeckungen für ihre Speisekarten — laufend, in konstanter Qualität und mit
                      gleichbleibender Passgenauigkeit. Wiederkehrende Aufträge wie dieser sind das Fundament
                      unter den Spezialprojekten — und zeigen, dass unsere Verlässlichkeit über Jahre trägt.
                    </p>
                  </article>
                </AnimatedSection>

                <AnimatedSection animation="slide-up">
                  <article className="bg-background/5 border-2 border-background/10 rounded-3xl p-7 md:p-8 hover:border-primary/40 transition-all h-full">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3">
                      Versicherung · Premium-Brand
                    </p>
                    <h3 className="font-bold text-xl md:text-2xl tracking-tight leading-tight mb-4">
                      Individualisierte Mitarbeitergeschenke für Generali.
                    </h3>
                    <p className="text-sm md:text-base text-background/72 leading-relaxed">
                      Für die <strong className="text-background font-semibold">Generali Versicherung</strong> fertigten
                      wir individualisierte Keksausstecher als Mitarbeiter- und Kundengeschenk zur Adventszeit.
                      Ein Klassiker, der vom Werbeartikel zur Familienerinnerung wird — und beweist, dass auch
                      große Premium-Brands aus Österreich auf unsere Manufaktur setzen.
                    </p>
                  </article>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in" className="text-center mt-12">
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-all"
                >
                  Mehr Cases &amp; Projekt-Stories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
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
                  ekdruck e.U. ist ein eingetragenes österreichisches Einzelunternehmen mit
                  offizieller Gewerbeberechtigung der WKO Oberösterreich.
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
                          <strong className="text-foreground">Gewerbe:</strong> Erzeugung von Architekturmodellen
                          sowie Modellen für Gebrauchsgegenstände aller Art, sofern diese lediglich
                          Anschauungszwecken dienen.
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
                            ["Standort", `${BRAND.street}, ${BRAND.zip} ${BRAND.location.split(',')[0]}`],
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


        {/* ══ WERTE — VIER MIT BEISPIEL (eines mit Foto) ══ */}
        <section className="py-20 md:py-28 bg-background" aria-label="Werte">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Wofür wir stehen
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  Vier Werte — mit Beispiel statt Floskel.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Jeder behauptet das gleiche ("Qualität", "Kundennähe", "Verlässlichkeit"). Hier ist,
                  was diese Worte bei ek-druck konkret bedeuten — mit jeweils einem Beispiel aus dem
                  Auftragsalltag.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Wert 1 — Direkter Ansprechpartner */}
                <article className="bg-muted/30 border-2 border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl leading-tight tracking-tight pt-2">Direkter Ansprechpartner</h3>
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Bei ek-druck sprechen Sie direkt mit der Person, die Ihr Projekt konstruiert, druckt
                    und übergibt. Keine Vertriebs-Hotline, keine Drittagenturen. Briefing, Iteration,
                    Auslieferung — eine Verantwortung, eine Kommunikationslinie.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                      In der Praxis
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Bei zeitkritischen Projekten ist die persönliche Übergabe vor Ort kein Sonderaufwand,
                      sondern Teil unseres Service-Verständnisses. Modelle für Last-Minute-Messeauftritte
                      werden bei Bedarf am Wochenende fertiggestellt und persönlich übergeben.
                    </p>
                  </div>
                </article>

                {/* Wert 2 — Ehrlich Nein sagen */}
                <article className="bg-muted/30 border-2 border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl leading-tight tracking-tight pt-2">Ehrlich Nein sagen</h3>
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Ein guter Anbieter sagt nicht zu allem ja. Wenn eine Anfrage außerhalb unserer
                    Kernkompetenz liegt — Großserien, SLA-Schmuck, mechanische Funktionsbauteile —
                    sagen wir das offen und vermitteln an passende Spezialisten aus unserem Netzwerk.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                      In der Praxis
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Bei einer Großserien-Anfrage für Werbeartikel war Spritzguss das geeignetere
                      Verfahren. Vermittlung an zwei Werkzeugbauer aus OÖ — kein Auftrag für uns,
                      Vertrauen für die Zukunft.
                    </p>
                  </div>
                </article>

                {/* Wert 3 — HANDWERK VOR AUTOMATION (mit Lötstation-Foto) */}
                <article className="bg-background border-2 border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all">
                  <div
                    className="w-full aspect-[16/10] bg-cover bg-center"
                    style={{ backgroundImage: 'url(/about/loetstation.jpg)' }}
                    aria-hidden="true"
                  />
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl leading-tight tracking-tight pt-2">Handwerk vor Automation</h3>
                    </div>
                    <p className="text-base text-foreground/80 leading-relaxed mb-4">
                      Es gibt Anbieter, die FDM-Druck als reine Online-Plattform betreiben — Upload,
                      Algorithmus, Versand. Wir nicht. Jedes Modell wird manuell qualitätsgeprüft,
                      oft manuell nachbearbeitet, vor Versand fotografiert. Nicht skalierbar wie bei
                      Plattformen — qualitativ messbar besser.
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                        In der Praxis
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        Für ein Maschinenmodell zur EMO Hannover: mehrere Stunden manuelle Nachbearbeitung
                        an der Schnittfläche — Schleifen, Spachteln, Lackieren in Kontrastfarbe.
                        Eine Plattform hätte ein rohes FDM-Schnittbild geliefert. Der Unterschied war am
                        Messestand sichtbar.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Wert 4 — Made in Austria */}
                <article className="bg-muted/30 border-2 border-border rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl leading-tight tracking-tight pt-2">Made in Austria — wörtlich</h3>
                  </div>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Manufaktur in Gunskirchen, Filament aus österreichischer Produktion (recycelte
                    Industrieabfälle, Ökostrom, ~80% weniger CO₂ als Standard-Importware), Verpackung
                    aus AT. Kurze Lieferketten machen ek-druck unabhängig von globalen Verwerfungen.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                      In der Praxis
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      Während Konkurrenz im Frühjahr 2025 wegen Container-Verzögerungen aus China
                      Lieferzeiten von 4-6 Wochen melden musste, lief unsere österreichische
                      Materialversorgung ohne Unterbrechung. Lead-Time-Vorteil für unsere Kunden über
                      die gesamte Phase.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>


        {/* ══ MATERIALIEN — INDUSTRIETAUGLICHE WERKSTOFFE ══ */}
        <section className="py-20 md:py-28 bg-card/40 border-y border-border/50" aria-label="Materialien">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-12 max-w-2xl mx-auto">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Material-Spektrum
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  Industrietaugliche Werkstoffe.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ausschließlich Materialien, die UV-, Temperatur- und Mechanik-Belastung im
                  Industriealltag aushalten. Lackierbar, glättbar, einbau-fertig.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" className="mb-10">
                <div
                  className="w-full aspect-[21/9] rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: 'url(/about/material-spulen.jpg)', backgroundPosition: 'center 60%' }}
                  aria-hidden="true"
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-in">
                <div className="p-6 md:p-8 rounded-3xl bg-background border border-border/60">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { material: "PETG", note: "UV- und stoßresistent · Daueraussteller, Schaumodelle" },
                      { material: "PA6-CF", note: "Carbon-Polyamid · mechanisch belastbar" },
                      { material: "ABS", note: "Aceton-glättbar · Spritzguss-Optik" },
                      { material: "ASA", note: "UV-stabil · Outdoor-tauglich" },
                      { material: "TPU 95A", note: "Flexibel · stoßdämpfend, Dichtungen" },
                      { material: "PLA / PLA+", note: "Standard · biologisch abbaubar" },
                      { material: "PLA Silk", note: "Seidiger Glanz · Premium-Optik" },
                      { material: "PLA Spezial", note: "Wood, Marble, Metal-Fill" },
                    ].map(({ material, note }) => (
                      <div key={material} className="group flex flex-col gap-0.5 p-4 rounded-xl bg-muted/30 border border-border/40 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                        <span className="font-bold text-sm text-primary">{material}</span>
                        <span className="text-xs text-muted-foreground leading-relaxed">{note}</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">Regional &amp; nachhaltig produziert</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Unser Filament kommt aus österreichischer Produktion. Konkret: das Material wird aus
                      recycelten Industrieabfällen hergestellt, Energie kommt aus Ökostrom, der CO₂-Fußabdruck
                      ist im Vergleich zu Standard-Importware aus Asien ca. 80% niedriger.
                    </p>
                    <p>
                      Das ist nicht nur Greenwashing-Marketing — die Lieferkette ist tatsächlich kurz: Hersteller
                      in OÖ, Produktion in OÖ, viele Kunden in OÖ. Bei DACH-weiten Aufträgen schickt der Versand
                      das Modell maximal 1.000 km. Im internationalen Vergleich ein Bruchteil der CO₂-Last.
                    </p>
                    <p>
                      Praktischer Nebeneffekt für Sie als Kunde: lokale Lieferkette = weniger Engpässe.
                      Während Konkurrenz im Frühjahr 2025 wegen Container-Verzögerungen aus China Lieferzeiten
                      von 4-6 Wochen melden musste, lief unser Material durchgängig.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in">
                  <div className="space-y-3">
                    {[
                      { stat: "~80%", label: "weniger CO₂ vs. Asien-Import" },
                      { stat: "100%", label: "Ökostrom in der Produktion" },
                      { stat: "<200 km", label: "Material-Transport bis Manufaktur" },
                      { stat: "0", label: "Kunststoff-Neu-Granulat — alles recycelt" },
                    ].map(({ stat, label }) => (
                      <div key={stat} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-primary/20">
                        <div className="text-2xl font-bold text-primary min-w-[100px]">{stat}</div>
                        <div className="text-sm text-foreground/80 leading-relaxed">{label}</div>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>


        {/* ══ WAS WIR NICHT MACHEN ══ */}
        <section className="py-20 md:py-28 bg-foreground text-background" aria-label="Was wir nicht machen">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="mb-12 max-w-3xl">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Ehrliche Grenzen
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-4">
                  Was wir <span className="text-primary">nicht</span> machen.
                </h2>
                <p className="text-base md:text-lg text-background/70 leading-relaxed">
                  Damit Sie nicht enttäuscht werden — die Grenzen unseres Portfolios sind klar definiert.
                  Wenn Ihre Anfrage hier landet, verweisen wir Sie auf passende Spezialisten.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  {
                    point: "Mechanische Funktionsbauteile",
                    detail: "Aktuelle WKO-Gewerbeberechtigung umfasst Anschauungsmodelle. Mechanische Funktionsbauteile außerhalb des Scopes — Vermittlung an Maschinenbau-Partner aus unserem Netzwerk.",
                  },
                  {
                    point: "Großserien-Fertigung",
                    detail: "Großserien sind ein anderes Handwerk — für identische Bauteile in hohen Stückzahlen ist Spritzguss wirtschaftlicher. Wir vermitteln an Werkzeugbauer aus unserem Netzwerk.",
                  },
                  {
                    point: "Resin-/SLA-Schmuck und Mikro-Detail",
                    detail: "SLA-Druck im Schmuck-Bereich ist eine eigene Disziplin mit anderen Druckern. Unser Stack ist FDM — kommt bei Mikro-Details unter 0,3mm Wandstärke an Grenzen.",
                  },
                  {
                    point: "Spielzeug für Kleinkinder",
                    detail: "EN 71 / Spielzeug-Sicherheits-Zertifizierungen liegen außerhalb unseres Scopes. PETG ist FDA-konform für Lebensmittelkontakt — formale Spielzeug-Zertifizierung erfordert spezialisierte Anbieter.",
                  },
                  {
                    point: "Schattenkunden / Bar-Aufträge",
                    detail: "ekdruck e.U. ist ein ordentlich angemeldetes Unternehmen mit UID. Alle Aufträge laufen über Rechnung — keine Ausnahmen.",
                  },
                  {
                    point: "Kostenlose Test-Modelle für Privatkunden",
                    detail: "Für Schulen, Forschungsprojekte und gemeinnützige Initiativen gelten Sonderkonditionen. Private \"Schauen-was-möglich-ist\"-Aufträge nicht kostenfrei — unsere Zeit hat einen Wert.",
                  },
                ].map((g, i) => (
                  <div key={i} className="bg-background/5 border-2 border-background/10 rounded-2xl p-5 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-bold text-base leading-snug mb-2">{g.point}</h3>
                        <p className="text-sm text-background/70 leading-relaxed">{g.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ══ FINAL CTA ══ */}
        <section className="py-20 md:py-28 bg-background border-t border-border" aria-label="Kontakt">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-border bg-muted/30 mb-6">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-bold">★{BRAND.reviews.rating} · {BRAND.reviews.count} Google-Bewertungen</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                Klingt nach einem Partner,<br />
                <span className="text-primary">mit dem Sie arbeiten möchten?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Schicken Sie CAD, Skizze oder kurze Beschreibung. Sie bekommen das Festpreisangebot
                binnen 6 Stunden — direkt aus der Manufaktur.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/kostenrechner"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
                >
                  STL hochladen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {BRAND.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ── REVIEWS ─────────────────────────────────────────── */}
        <GoogleReviewsSection />

      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}

export default UeberUns
