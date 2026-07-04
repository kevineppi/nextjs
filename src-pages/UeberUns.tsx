'use client'

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import SEOHead from "@/components/SEOHead"
import StickyCTA from "@/components/landing/StickyCTA"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import AnimatedSection from "@/components/AnimatedSection"
import GoogleReviewsSection from "@/components/GoogleReviewsSection"
import KevinStorySection from "@/components/landing/KevinStorySection"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Printer, Award, Zap, Users, MapPin, Shield, Building2, Leaf, Package, Clock } from "lucide-react"
import { BRAND } from "@/data/brandVoice"

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Über uns, Kevin Eppensteiner, ekdruck e.U. aus Gunskirchen | ekdruck"
        description="Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ. Großformat-Fertigung bis 2 m. ★5,0 (31 Bewertungen)."
        keywords="ekdruck über uns, kevin eppensteiner, ekdruck e.u., 3d druck gunskirchen, 3d druck inhaber oberösterreich, 3d druck werkstatt"
        path="/ueber-uns"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Über uns", url: "/ueber-uns" }
      ]} />

      {/* Person Schema für E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": BRAND.founderName,
            "jobTitle": "Inhaber & Gründer ekdruck e.U.",
            "worksFor": {
              "@type": "Organization",
              "name": BRAND.companyName,
              "url": "https://www.ek-druck.at",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": BRAND.street,
                "addressLocality": "Gunskirchen",
                "postalCode": BRAND.zip,
                "addressRegion": "Oberösterreich",
                "addressCountry": "AT"
              }
            },
            "alumniOf": "Maschinenbau-Studium",
            "telephone": BRAND.phone,
            "email": BRAND.email,
            "url": "https://www.ek-druck.at/ueber-uns"
          })
        }}
      />

      <Navigation />

      <main className="pt-20">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-background pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative">
            <AnimatedSection animation="fade-in" className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-5 text-xs font-semibold tracking-wider uppercase px-4 py-1.5">
                Gegründet {BRAND.yearFounded} · Gunskirchen, Oberösterreich
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                Hinter <span className="text-gradient">ekdruck</span><br />
                steht eine Person.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Kein anonymes 3D-Druck-Portal mit Vertriebsteam. Eine kleine, spezialisierte
                FDM-Werkstatt in Gunskirchen, ein Inhaber: Kevin Eppensteiner, {BRAND.founderAge}.
                Maschinenbau-Student ab Oktober {BRAND.yearFounded + 2}.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                {[
                  "Großformat bis 2 m",
                  "Angebot in 6h",
                  "Made in Austria",
                  `★5,0 · ${BRAND.reviews.count} Bewertungen`,
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── KENNZAHLEN ──── */}
        <section className="py-14 border-y border-border/50 bg-card/40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "2 m+", label: "Modellgröße", sublabel: "Großformat-Fertigung", icon: Printer },
                { value: `${BRAND.yearFounded}`, label: "Firmengründung", sublabel: "ekdruck e.U.", icon: Award },
                { value: "6h", label: "Angebots-Garantie", sublabel: "Verbindlich & kostenlos", icon: Zap },
                { value: `★${BRAND.reviews.rating}`, label: "Google-Rating", sublabel: `${BRAND.reviews.count} Bewertungen`, icon: Users },
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

        {/* ══ KEVIN-STORY-BLOCK, Hauptinhalt ══ */}
        <KevinStorySection />

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
                  ekdruck e.U. ist ein eingetragenes österreichisches Einzelunternehmen mit offizieller Gewerbeberechtigung der WKO Oberösterreich.
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

        {/* ── TECHNIK & KAPAZITAET ── */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection animation="fade-in" className="text-center mb-14">
                <Badge variant="outline" className="mb-4 text-xs">Technik & Kapazität</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technik & Kapazität</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Industrielle FDM-Technik, bewusst gewählt für Spezialisierung statt Massendurchsatz.
                  Im 24/7-Parallelbetrieb für kurze Lieferzeiten auch bei größeren Aufträgen.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    icon: Printer,
                    title: "Highspeed-FDM",
                    description: "Für Standard-Modelle, Detailgrade bis 0,1 mm Schichthöhe, Bauvolumen bis 256×256×256 mm. Unser Arbeitstier für schnelle Durchlaufzeiten.",
                  },
                  {
                    icon: Package,
                    title: "Großformat & Multi-Material",
                    description: "Großformat-FDM bis 360×360×360 mm, Multi-Material-Druck mit bis zu 5 Filamenten gleichzeitig, perfekt für mehrfarbige Modelle ohne Maskierung.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Parallelbetrieb",
                    description: "Failure-Detection per Push-Benachrichtigung. Drucker laufen autonom durch die Nacht, ich bekomme Alerts auf Smartphone. Sicherheit + Auslastung.",
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

              <AnimatedSection animation="fade-in">
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/60">
                  <h3 className="font-semibold mb-5 flex items-center gap-2 text-base">
                    <Package className="w-4 h-4 text-primary" />
                    Verarbeitete Materialien
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { material: "PLA / PLA+", note: "Standard, biologisch abbaubar" },
                      { material: "PETG", note: "Robust, UV-stabil" },
                      { material: "ABS", note: "Lackier-/Aceton-glättbar" },
                      { material: "ASA", note: "Outdoor-tauglich, UV-stabil" },
                      { material: "TPU 95A", note: "Flexibel, stoßdämpfend" },
                      { material: "PA6-CF", note: "Carbon-PA, mechanisch" },
                      { material: "PLA Silk", note: "Seidiger Glanz" },
                      { material: "PLA Spezial", note: "Wood, Marble, Metal-Fill" },
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">Regional &amp; nachhaltig produziert</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mein Filament kommt aus österreichischer Produktion. Konkret: das Material wird aus
                      recycelten Industrieabfällen hergestellt, Energie kommt aus Ökostrom, der CO₂-Fußabdruck
                      ist im Vergleich zu Standard-Importware aus Asien ca. 80% niedriger.
                    </p>
                    <p>
                      Das ist nicht nur Greenwashing-Marketing, die Lieferkette ist tatsächlich kurz: Hersteller
                      in OÖ, ich in OÖ, viele Kunden in OÖ. Bei DACH-weiten Aufträgen schickt der Versand das
                      Modell maximal 1.000 km. Im internationalen Vergleich ein Bruchteil der CO₂-Last.
                    </p>
                    <p>
                      Praktischer Nebeneffekt für Sie als Kunde: lokale Lieferkette = weniger Engpässe.
                      Während Konkurrenz im Frühjahr 2025 wegen Container-Verzögerungen aus China Lieferzeiten
                      von 4-6 Wochen melden musste, lief mein Material durchgängig.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in">
                  <div className="space-y-3">
                    {[
                      { stat: "~80%", label: "weniger CO₂ vs. Asien-Import" },
                      { stat: "100%", label: "Ökostrom in der Produktion" },
                      { stat: "<200 km", label: "Material-Transport bis Werkstatt" },
                      { stat: "0", label: "Kunststoff-Neu-Granulat, alles recycelt" },
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

        {/* ── REVIEWS ─────────────────────────────────────────── */}
        <GoogleReviewsSection />

      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}

export default UeberUns
