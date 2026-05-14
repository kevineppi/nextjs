'use client'

import { useState } from "react";
import Link from "next/link";
import {
  Star, Zap, Unlock, MapPin, X, Check, Clock, Wallet,
  Trophy, Building2, Briefcase, GraduationCap, Globe, TrendingUp,
  Phone, Mail, ChevronDown, ArrowRight, Sparkles, MessageCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/landing/StickyCTA";
import QuickContactBar from "@/components/QuickContactBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { } from "@/components/ui/input";
import { } from "@/components/ui/textarea";
import { } from "@/components/ui/label";
import {
  Select,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT } from "@/lib/contactConfig";
import { trackContactClick } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Architekturmodell Flatrate – ekdruck e.U.",
  description:
    "Monatliches Abo für Architekturbüros: 3D-gedruckte Architekturmodelle im Fixpreis, 48h-Lieferung, keine Mindestlaufzeit. Erstes Modell kostenlos.",
  brand: { "@type": "Brand", name: "ekdruck e.U." },
  manufacturer: { "@type": "Organization", name: "ekdruck e.U.", url: "https://www.ek-druck.at" },
  image: "https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "31",
    bestRating: "5",
    worstRating: "1",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter Flatrate",
      price: "490",
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "490", priceCurrency: "EUR", referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" } },
      availability: "https://schema.org/InStock",
      url: "https://www.ek-druck.at/architekturmodelle-abo",
      seller: { "@type": "Organization", name: "ekdruck e.U." },
    },
    {
      "@type": "Offer",
      name: "Professional Flatrate",
      price: "890",
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "890", priceCurrency: "EUR", referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" } },
      availability: "https://schema.org/InStock",
      url: "https://www.ek-druck.at/architekturmodelle-abo",
      seller: { "@type": "Organization", name: "ekdruck e.U." },
    },
    {
      "@type": "Offer",
      name: "Studio Flatrate",
      price: "2500",
      priceCurrency: "EUR",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "2500", priceCurrency: "EUR", referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" } },
      availability: "https://schema.org/InStock",
      url: "https://www.ek-druck.at/architekturmodelle-abo",
      seller: { "@type": "Organization", name: "ekdruck e.U." },
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Was kostet die Architekturmodell-Flatrate?", acceptedAnswer: { "@type": "Answer", text: "Die Flatrate startet ab €490/Monat (Starter: 2 Modelle inklusive), Professional bei €890/Monat (4 Modelle inklusive), Studio bei €2.500/Monat (8 Modelle inklusive). Alle Pakete sind monatlich kündbar, ohne Mindestlaufzeit." } },
    { "@type": "Question", name: "Was bedeutet 'Erstes Modell kostenlos'?", acceptedAnswer: { "@type": "Answer", text: "Neue Flatrate-Kunden erhalten ihr erstes Architekturmodell kostenlos gedruckt – als Qualitätstest ohne Risiko. Das Testmodell wird nach Auftragsbestätigung der Flatrate produziert und in 48 Stunden geliefert." } },
    { "@type": "Question", name: "Welche CAD-Programme werden unterstützt?", acceptedAnswer: { "@type": "Answer", text: "Wir akzeptieren alle gängigen Formate: STL, OBJ, STEP, 3DM (Rhino), DWG/DXF sowie native Formate aus ArchiCAD, Revit, SketchUp und anderen Architekturprogrammen." } },
    { "@type": "Question", name: "Wie schnell wird geliefert?", acceptedAnswer: { "@type": "Answer", text: "Flatrate-Kunden genießen Produktionspriorität – Lieferung garantiert in 48 Stunden österreichweit. Auch nach Deutschland in 48–72 Stunden." } },
  ],
};

const PAIN_POINTS = [
  { title: "Zeitdruck vor Wettbewerben", text: "Sie brauchen das Modell für Freitag. Der Modellbauer hat drei Wochen Wartezeit. Der 3D-Druck-Anbieter antwortet nicht auf Ihre Anfrage." },
  { title: "Unkalkulierbare Kosten", text: "Jede Anfrage ein neues Angebot. Mal €180, mal €420 – für scheinbar ähnliche Modelle. Keine Planungssicherheit für Ihr Budget." },
  { title: "Qualität trifft Kompromiss", text: "Günstige Anbieter liefern schlechte Qualität. Gute Qualität kostet Zeit und Geld. Beides gleichzeitig scheint unmöglich." },
];

const STEPS = [
  { n: "01", title: "Modell anfragen", text: "Schicken Sie uns Ihre CAD-Datei (ArchiCAD, Revit, Rhino, SketchUp, STL) per E-Mail oder über unser Portal. Keine Rückfragen, keine Formulare – einfach senden." },
  { n: "02", title: "Angebot in 6 Stunden", text: "Sie erhalten ein verbindliches Festpreisangebot innerhalb von 6 Arbeitsstunden. Kein Kleingedrucktes, keine Nachberechnung." },
  { n: "03", title: "Produktion startet sofort", text: "Flatrate-Kunden haben Produktionspriorität. Ihr Modell wird vor allen Einzelaufträgen gefertigt – garantiert." },
  { n: "04", title: "Lieferung in 48 Stunden", text: "Österreichweit. Sicher verpackt. Direkt ins Büro oder an die Baustelle." },
];

const TIERS = [
  {
    name: "Starter",
    price: "490",
    subtitle: "Für kleine Büros & Gelegenheitsnutzer",
    highlighted: false,
    features: [
      { text: "Bis zu 2 Modelle pro Monat inklusive", included: true },
      { text: "Maßstäbe 1:100 bis 1:500", included: true },
      { text: "Maximale Druckfläche: 35×35×35 cm pro Modell", included: true },
      { text: "48h Express-Lieferung inklusive", included: true },
      { text: "Persönlicher Ansprechpartner", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität", included: false },
      { text: "Mehrfarbiger Druck", included: false },
      { text: "Unlimitierte Revisionen", included: false },
    ],
  },
  {
    name: "Professional",
    price: "890",
    subtitle: "Für aktive Büros mit regelmäßigem Bedarf",
    highlighted: true,
    badge: "Beliebteste Wahl",
    features: [
      { text: "Bis zu 4 Modelle pro Monat inklusive", included: true },
      { text: "Maßstäbe 1:50 bis 1:500", included: true },
      { text: "Maximale Druckfläche: 35×35×35 cm pro Modell", included: true },
      { text: "48h Express-Lieferung inklusive", included: true },
      { text: "Persönlicher Ansprechpartner", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität (vor Einzelkunden)", included: true },
      { text: "Mehrfarbiger Druck", included: false },
      { text: "Unlimitierte Revisionen", included: false },
    ],
  },
  {
    name: "Studio",
    price: "2500",
    subtitle: "Für große Büros & Wettbewerbsstudios",
    highlighted: false,
    features: [
      { text: "Bis zu 8 Modelle pro Monat inklusive", included: true },
      { text: "Alle Maßstäbe inkl. 1:50 und Detailmodelle", included: true },
      { text: "Maximale Druckfläche: 35×35×35 cm pro Modell", included: true },
      { text: "48h Express-Lieferung inklusive", included: true },
      { text: "Persönlicher Ansprechpartner", included: true },
      { text: "Keine Mindestlaufzeit – monatlich kündbar", included: true },
      { text: "Produktionspriorität (höchste Stufe)", included: true },
      { text: "Mehrfarbiger Druck (Multi-Color)", included: true },
      { text: "Unlimitierte Revisionen & Korrekturen", included: true },
    ],
  },
];

const COMPARE_ROWS = [
  { label: "Kosten pro Modell", a: "€300–€1.200", b: "€150–€450", c: "ab €210/Modell" },
  { label: "Lieferzeit", a: "2–4 Wochen", b: "3–7 Tage", c: "48 Stunden" },
  { label: "Planungssicherheit", a: "❌", b: "❌", c: "✅ Fixpreis" },
  { label: "CAD-Kompatibilität", a: "Eingeschränkt", b: "Variiert", c: "✅ Alle Formate" },
  { label: "Revisionen", a: "❌ Aufpreis", b: "❌ Aufpreis", c: "✅ Inklusive" },
  { label: "Persönlicher Kontakt", a: "✅", b: "❌", c: "✅" },
];

const TARGET_AUDIENCE = [
  { Icon: Trophy, title: "Sie regelmäßig an Wettbewerben teilnehmen", text: "und immer pünktlich liefern müssen, egal wie knapp die Deadline ist." },
  { Icon: Building2, title: "Sie mehrere Projekte parallel führen", text: "und für jedes Projekt schnell ein Modell für Kundenpräsentationen brauchen." },
  { Icon: Briefcase, title: "Sie Ihr Budget planbar halten wollen", text: "ein Fixpreis pro Monat statt überraschender Einzelrechnungen." },
  { Icon: GraduationCap, title: "Sie an einer Architekturschule lehren oder studieren", text: "und regelmäßig Modelle für Semesterarbeiten und Abschlussarbeiten benötigen." },
  { Icon: Globe, title: "Ihr Büro in Wien, Linz, Graz oder Salzburg sitzt", text: "wir liefern österreichweit in 48 Stunden." },
  { Icon: TrendingUp, title: "Sie als Immobilienentwickler arbeiten", text: "und Modelle für Investorenpräsentationen, Behördeneinreichungen und Verkaufsunterlagen brauchen." },
];

const TESTIMONIALS = [
  { quote: "Endlich ein Anbieter, der versteht, wie Architekturbüros arbeiten. Das Modell für unseren Wettbewerbsbeitrag war in 36 Stunden da – perfekte Qualität.", author: "M.K., Architekturbüro Wien" },
  { quote: "Die Flatrate rechnet sich bereits ab dem zweiten Modell pro Monat. Wir bestellen jetzt entspannt, statt jedes Mal neu zu verhandeln.", author: "T.H., Planungsbüro Linz" },
  { quote: "Ich habe das erste Modell kostenlos testen dürfen – die Qualität hat mich überzeugt. Seitdem sind wir Professional-Kunde.", author: "S.R., Architektin, Graz" },
];

const FAQS = [
  { q: "Welche Dateiformate werden akzeptiert?", a: "Wir akzeptieren STL, OBJ, STEP, 3DM (Rhino), DWG/DXF sowie native Formate aus ArchiCAD, Revit und SketchUp. Falls Sie kein druckfertiges Modell haben, helfen wir bei der Aufbereitung – inklusive im Professional- und Studio-Paket." },
  { q: "Gibt es eine Mindestlaufzeit?", a: "Nein. Die Flatrate ist monatlich kündbar, ohne Fristen oder Aufwandsentschädigung. Wir sind überzeugt, dass Sie bleiben werden – weil die Qualität stimmt." },
  { q: "Was passiert, wenn ich mein Modell-Kontingent nicht ausschöpfe?", a: "Nicht genutzte Modelle verfallen am Monatsende. Es gibt jedoch keine Nachberechnung bei Überschreitung – zusätzliche Modelle werden zum günstigen Flatrate-Zusatzpreis abgerechnet." },
  { q: "Wie groß können die Modelle sein?", a: "Je nach Paket bis zu 35×35×35 cm als Einzeldruck. Größere Modelle fertigen wir als modulares System – ohne Aufpreis im Studio-Paket." },
  { q: "Liefern Sie auch nach Deutschland?", a: "Ja. Wir liefern in ganz Österreich und Deutschland. Die Lieferzeit beträgt 48–72 Stunden nach Deutschland." },
  { q: "Kann ich das Abo upgraden oder downgraden?", a: "Ja, jederzeit zum nächsten Monatsersten – unkompliziert per E-Mail." },
  { q: "Was bedeutet \"Produktionspriorität\"?", a: "Flatrate-Kunden werden vor allen Einzelaufträgen produziert. Das garantiert die 48h-Lieferzeit auch in Hochsaison (z.B. vor großen Messen oder Wettbewerbsdeadlines)." },
];

const ArchitekturmodelleAbo = () => {



  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(var(--background) / 0.92), hsl(var(--background) / 0.85)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency-Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              🎁 Erstes Modell kostenlos – für neue Flatrate-Kunden
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Architekturmodelle auf Abruf –{" "}
              <span className="text-primary">Fixpreis, 48h-Lieferung, keine Mindestlaufzeit</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Keine Einzelanfragen, keine Wartezeiten, keine Überraschungskosten. Die ekdruck Büro-Flatrate: Ihr persönlicher 3D-Druck Service für Architekturbüros in ganz Österreich.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="text-base px-8 py-6 hover:scale-105 active:scale-95 transition-transform shadow-xl">
                <a href="#kontakt">
                  Jetzt kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 hover:scale-105 active:scale-95 transition-transform">
                <a href="#preise">Preise ansehen</a>
              </Button>
            </div>

            {/* Direct WhatsApp CTA – niedrigste Hürde für 24h Conversion */}
            <div className="flex justify-center mb-10">
              <a
                href={`https://wa.me/436765517197?text=${encodeURIComponent("Hallo ekdruck, ich interessiere mich für die Architekturmodell-Flatrate und möchte gerne mein erstes Modell kostenlos testen.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Oder direkt per WhatsApp: Erstes Modell kostenlos anfragen →
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-primary fill-primary" /> 5.0 Google (31 Rezensionen)</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Lieferung in 48 Stunden</div>
              <div className="flex items-center gap-2"><Unlock className="h-4 w-4 text-primary" /> Keine Mindestlaufzeit</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Made in Austria</div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-CHANNEL KONTAKT – direkt nach Hero, maximale Conversion */}
      <QuickContactBar
        context="Architekturmodell-Flatrate"
        title="Bereit für planbare Architekturmodelle? Wählen Sie Ihren Weg."
        subtitle="Erstes Modell kostenlos · 48h-Lieferung · Keine Mindestlaufzeit – direkt zum Inhaber, kein Callcenter."
      />

      {/* SECTION 1 – PAIN POINTS */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
            Kennen Sie das?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PAIN_POINTS.map((p, i) => (
              <Card key={i} className="p-8 border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-5">
                  <X className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-xl md:text-2xl font-bold text-foreground mt-16 max-w-3xl mx-auto">
            Das war gestern. Willkommen bei der ersten Architekturmodell-Flatrate Österreichs.
          </p>
        </div>
      </section>

      {/* SECTION 2 – PROCESS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
            Die ekdruck Büro-Flatrate – so funktioniert's
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {STEPS.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-5 shadow-md">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – PRICING */}
      <section id="preise" className="py-20 md:py-28 bg-muted/40 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 tracking-tight">
            Transparente Preise. Keine Überraschungen.
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Drei Pakete – für jedes Büro die passende Flatrate.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={`relative p-8 transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 md:scale-105 bg-card"
                    : "border-border bg-card hover:shadow-lg"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-md">
                    {tier.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 italic">{tier.subtitle}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-foreground">€{Number(tier.price).toLocaleString("de-AT")}</span>
                  <span className="text-muted-foreground">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      {f.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? "text-foreground" : "text-muted-foreground/60 line-through"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                    tier.highlighted ? "" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  size="lg"
                  onClick={() => {
                    trackContactClick("form", { source: "pricing_card", context: tier.name });
                    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {tier.name} wählen
                </Button>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Alle Preise exkl. MwSt. · Keine Einrichtungsgebühr · Monatlich kündbar · Erstes Modell kostenlos zum Testen
          </p>
        </div>
      </section>

      {/* SECTION 4 – COMPARISON */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
            Was kostet ein Architekturmodell wirklich?
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-5 font-semibold text-foreground"></th>
                  <th className="text-center p-5 font-semibold text-foreground">Traditioneller Modellbau</th>
                  <th className="text-center p-5 font-semibold text-foreground">Einzelauftrag 3D-Druck</th>
                  <th className="text-center p-5 font-bold text-primary bg-primary/5">ekdruck Flatrate</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-5 font-semibold text-foreground">{row.label}</td>
                    <td className="p-5 text-center text-muted-foreground">{row.a}</td>
                    <td className="p-5 text-center text-muted-foreground">{row.b}</td>
                    <td className="p-5 text-center font-bold text-primary bg-primary/5">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              *Marktvergleich Österreich 2026. Preise variieren je nach Komplexität und Anbieter.
            </p>
          </div>
        </div>
      </section>

      {/* MID-PAGE CONVERSION NUDGE */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/90 text-lg font-semibold mb-5">
            Bereits überzeugt? Das erste Modell ist kostenlos – kein Vertrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            >
              Jetzt kostenlos anfragen <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href={`https://wa.me/436765517197?text=${encodeURIComponent("Hallo ekdruck, ich interessiere mich für die Architekturmodell-Flatrate und möchte mein erstes Modell kostenlos testen.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10 transition-colors font-medium text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Direkt per WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 – TARGET AUDIENCE */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
            Die Flatrate ist perfekt für Sie, wenn...
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TARGET_AUDIENCE.map(({ Icon, title, text }, i) => (
              <Card key={i} className="p-7 border-border bg-card hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Was unsere Kunden sagen
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-secondary-foreground/5 backdrop-blur border border-secondary-foreground/10 rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="italic text-secondary-foreground/90 leading-relaxed mb-5">
                  „{t.quote}"
                </blockquote>
                <div className="text-sm font-semibold text-secondary-foreground/70">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
            Häufige Fragen zur Büro-Flatrate
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border bg-card rounded-xl px-5 hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CONTACT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>

      {/* SECTION 9 – INTERNAL LINKS */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-tight">
            Weitere Leistungen von ekdruck
          </h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { to: "/messemodelle", label: "Messemodelle & Exponate" },
              { to: "/einzelanfertigungen", label: "Einzelanfertigungen & Prototypen" },
              { to: "/", label: "Alle 3D-Druck Leistungen" },
            ].map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{l.label}</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-Footer-Block */}
      <section className="py-10 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-5xl mx-auto text-center">
            ekdruck e.U. ist spezialisierter 3D-Druck Dienstleister für Architekturbüros, Planungsbüros und Immobilienentwickler in ganz Österreich. Unsere Architekturmodell-Flatrate ermöglicht planbare, schnelle und günstige Modellproduktion für Wettbewerbe, Behördeneinreichungen und Kundenpräsentationen. Wir beliefern Architekturbüros in Wien, Graz, Linz, Salzburg, Innsbruck und ganz Österreich innerhalb von 48 Stunden.
          </p>
        </div>
      </section>

      <StickyCTA context="Architekturmodell-Flatrate – Erstes Modell kostenlos" />
      <Footer />
    </div>
  );
};

export default ArchitekturmodelleAbo;
