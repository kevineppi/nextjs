'use client'

/**
 * Architekturmodell-Flatrate — eigener UI-Stil "Datenblatt":
 * ruhig, flach, tabellarisch. Feines Raster statt Foto, Mono-Indexlabels,
 * Preis-Matrix als Kernstück, ehrliche Passt/Passt-nicht-Abgrenzung.
 * Kevin-Vorgabe 24.09.2026: Hintergrundfoto weg, Inhalte maximal relevant,
 * locker übersichtlich.
 */

import Link from "next/link";
import { Star, Check, ArrowRight, MessageCircle, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/landing/StickyCTA";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { trackContactClick } from "@/lib/tracking";
import { ABO_FAQS } from "@/data/aboFaqs";

/* ── Daten ─────────────────────────────────────────────────────────── */

const KONDITIONEN = [
  { k: "Lieferzeit", v: "48 Stunden", sub: "österreichweit · DE 48–72h" },
  { k: "Laufzeit", v: "keine", sub: "monatlich kündbar" },
  { k: "Einstieg", v: "1. Modell gratis", sub: "als Qualitätstest" },
  { k: "Modellgröße", v: "35×35×35 cm", sub: "größer: segmentiert" },
  { k: "Angebot", v: "in 6h", sub: "werktags, Festpreis" },
  { k: "Dateiformate", v: "alle gängigen", sub: "ArchiCAD, Revit, Rhino, STL …" },
];

const MATRIX_TIERS = [
  { name: "Starter", price: 490, sub: "kleine Büros, Gelegenheitsbedarf" },
  { name: "Professional", price: 890, sub: "aktive Büros, regelmäßiger Bedarf", badge: "Beliebteste Wahl" },
  { name: "Studio", price: 2500, sub: "große Büros, Wettbewerbsphasen" },
];

const MATRIX_ROWS: { label: string; values: (string | boolean)[] }[] = [
  { label: "Modelle pro Monat", values: ["bis 2", "bis 4", "bis 8"] },
  { label: "Rechnerisch je Modell", values: ["€245", "€222,50", "€312,50"] },
  { label: "Maßstäbe", values: ["1:100 – 1:500", "1:50 – 1:500", "alle, inkl. Detailmodelle"] },
  { label: "Max. Größe je Modell", values: ["35×35×35 cm", "35×35×35 cm", "35×35×35 cm"] },
  { label: "48h-Lieferung", values: [true, true, true] },
  { label: "Persönlicher Ansprechpartner", values: [true, true, true] },
  { label: "Monatlich kündbar", values: [true, true, true] },
  { label: "Datenaufbereitung inklusive", values: [false, true, true] },
  { label: "Produktionspriorität", values: [false, true, "höchste Stufe"] },
  { label: "Mehrfarbiger Druck", values: [false, false, true] },
  { label: "Unlimitierte Revisionen", values: [false, false, true] },
];

const STEPS = [
  { n: "01", title: "Modell anfragen", text: "CAD-Datei per E-Mail senden: ArchiCAD, Revit, Rhino, SketchUp oder STL. Keine Formulare." },
  { n: "02", title: "Angebot in 6h", text: "Verbindliches Festpreisangebot innerhalb von 6 Arbeitsstunden. Keine Nachberechnung." },
  { n: "03", title: "Produktion startet", text: "Ab Professional mit Produktionspriorität vor allen Einzelaufträgen. 48h-Lieferung gilt in jedem Paket." },
  { n: "04", title: "Lieferung in 48h", text: "Österreichweit, sicher verpackt, direkt ins Büro. Nach Deutschland in 48–72 Stunden." },
];

const PASST = [
  "Sie brauchen regelmäßig Modelle: Wettbewerbe, Baubesprechungen, Kundenpräsentationen",
  "Sie führen mehrere Projekte parallel und wollen kurze, planbare Lieferzeiten",
  "Sie wollen einen fixen Monatsbetrag statt Einzelangeboten im Budget",
  "Sie entwickeln Immobilien und brauchen Modelle für Investoren- und Verkaufstermine",
];

const PASST_NICHT = [
  { text: "Sie brauchen seltener als 2 Modelle pro Monat: dann fahren Sie mit dem Einzelauftrag günstiger.", link: { to: "/architekturmodelle", label: "Zu den Einzelaufträgen" } },
  { text: "Sie brauchen ein einziges Modell für ein einmaliges Projekt: auch dafür ist der Einzelauftrag der richtige Weg.", link: { to: "/kostenrechner", label: "Richtpreis berechnen" } },
  { text: "Ob sich die Flatrate für Ihr Büro rechnet, zeigt der ehrliche Vergleich mit Break-even-Tabelle.", link: { to: "/ratgeber/architekturmodell-flatrate", label: "Zum Flatrate-Ratgeber" } },
];

// Echte Google-Rezensionen (5,0 · 35 Bewertungen) — keine erfundenen Testimonials.
const TESTIMONIALS = [
  { quote: "Die Qualität ist erstklassig, jedes Detail wird sehr detailgetreu und sauber umgesetzt.", author: "Christian Steller" },
  { quote: "Sehr schnelle Abwicklung, Kommunikation war ausgezeichnet.", author: "Klaus F." },
  { quote: "Mein Auftrag wurde schnell bearbeitet, Top Qualität, kann ich nur weiterempfehlen.", author: "Hannah E." },
];

const WHATSAPP_HREF = `https://wa.me/436765517197?text=${encodeURIComponent("Hallo ekdruck, ich interessiere mich für die Architekturmodell-Flatrate und möchte mein erstes Modell kostenlos testen.")}`;

/* ── Bausteine des Datenblatt-Stils ────────────────────────────────── */

const SectionLabel = ({ index, children }: { index: string; children: React.ReactNode }) => (
  <div className="flex items-baseline gap-3 mb-3">
    <span className="mono text-[10px] font-bold text-primary">{index}</span>
    <span className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{children}</span>
  </div>
);

const GRID_BG = {
  backgroundImage:
    "linear-gradient(hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.55) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const CellValue = ({ v }: { v: string | boolean }) => {
  if (v === true) return <Check className="w-4 h-4 text-primary inline-block" aria-label="inklusive" />;
  if (v === false) return <span className="text-muted-foreground/40" aria-label="nicht enthalten">–</span>;
  return <span className="font-medium text-foreground">{v}</span>;
};

/* ── Seite ─────────────────────────────────────────────────────────── */

const ArchitekturmodelleAbo = () => {
  const scrollKontakt = (source: string, context?: string) => {
    trackContactClick("form", { source, context });
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO — kein Foto, feines Raster, kompakt */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0" style={GRID_BG} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="/">Flatrate für Architekturbüros</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.02] tracking-[-0.04em] mb-6 max-w-3xl">
              Die Architekturmodell-Flatrate.{" "}
              <span className="text-primary">Fixpreis, 48h, monatlich kündbar.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Zwei bis acht Modelle pro Monat zum fixen Betrag, geliefert in 48 Stunden.
              Das erste Modell drucke ich kostenlos, damit Sie die Qualität prüfen können, bevor Sie sich entscheiden.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button size="lg" className="px-8" onClick={() => scrollKontakt("hero")}>
                Erstes Modell kostenlos anfragen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="#preise">Pakete vergleichen</a>
              </Button>
            </div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors mb-10"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Oder direkt per WhatsApp anfragen →
            </a>

            {/* Konditionen-Leiste: die 6 relevantesten Fakten als Datenzeile */}
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-y border-border divide-x divide-border bg-background/70 backdrop-blur-[2px]">
              {KONDITIONEN.map((f) => (
                <div key={f.k} className="p-4">
                  <dt className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">{f.k}</dt>
                  <dd className="font-bold text-foreground text-sm leading-tight">{f.v}</dd>
                  <dd className="text-[11px] text-muted-foreground leading-tight mt-0.5">{f.sub}</dd>
                </div>
              ))}
            </dl>
            <p className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
              <Star className="h-3.5 w-3.5 text-primary fill-primary" />
              5,0 auf Google · 35 Rezensionen · ekdruck e.U., Gunskirchen
            </p>
          </div>
        </div>
      </section>

      {/* 01 · PAKETE — die Matrix als Kernstück */}
      <section id="preise" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="01">Pakete &amp; Preise</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3">
              Drei Pakete, eine Tabelle. Mehr braucht es nicht.
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Alle Preise exkl. MwSt., keine Einrichtungsgebühr. Upgrade und Downgrade jederzeit zum nächsten Monatsersten.
            </p>

            <div className="overflow-x-auto border border-border rounded-2xl">
              <table className="w-full min-w-[680px] text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-5 align-bottom w-[26%]">
                      <span className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Leistung</span>
                    </th>
                    {MATRIX_TIERS.map((t) => (
                      <th key={t.name} className={`text-left p-5 align-bottom ${t.badge ? "bg-primary/5 border-x border-primary/20" : ""}`}>
                        {t.badge && (
                          <span className="inline-block mono text-[9px] font-bold uppercase tracking-[0.15em] text-primary-foreground bg-primary px-2 py-1 rounded-full mb-3">
                            {t.badge}
                          </span>
                        )}
                        <p className="text-lg font-bold text-foreground leading-none mb-1">{t.name}</p>
                        <p className="text-2xl font-bold text-foreground mono leading-none mb-1">
                          €{t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                          <span className="text-xs text-muted-foreground font-normal"> /Monat</span>
                        </p>
                        <p className="text-[11px] text-muted-foreground font-normal leading-tight">{t.sub}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="p-4 pl-5 text-muted-foreground">{row.label}</td>
                      {row.values.map((v, k) => (
                        <td key={k} className={`p-4 pl-5 ${MATRIX_TIERS[k].badge ? "bg-primary/5 border-x border-primary/20" : ""}`}>
                          <CellValue v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-border">
                    <td className="p-4 pl-5"></td>
                    {MATRIX_TIERS.map((t) => (
                      <td key={t.name} className={`p-4 ${t.badge ? "bg-primary/5 border-x border-primary/20" : ""}`}>
                        <Button
                          size="sm"
                          variant={t.badge ? "default" : "outline"}
                          className="w-full"
                          onClick={() => scrollKontakt("pricing_matrix", t.name)}
                        >
                          {t.name} anfragen
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Erstes Modell kostenlos zum Testen · Nicht genutzte Modelle verfallen am Monatsende, Zusatzmodelle zum Flatrate-Zusatzpreis.
            </p>
          </div>
        </div>
      </section>

      {/* 02 · RECHNET SICH DAS — ehrliche Einordnung statt Verkaufsdruck */}
      <section className="py-16 md:py-20 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <SectionLabel index="02">Rechnet sich das?</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-4">
                Faustregel: ab zwei Modellen pro Monat.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Im Kontingent kostet ein Modell je nach Paket €222 bis €313. Die Flatrate rechnet sich
                also, sobald Sie monatlich mindestens zwei Modelle brauchen, die im Einzelauftrag mehr
                als rund €245 kosten würden. Dazu kommen 48-Stunden-Lieferung und ein fixer Monatsbetrag
                statt Einzelangeboten.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Bei weniger Bedarf sage ich es Ihnen offen: Dann ist der{" "}
                <Link href="/architekturmodelle" className="underline underline-offset-2 hover:text-primary">Einzelauftrag</Link>{" "}
                der günstigere Weg.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="border border-border rounded-2xl bg-background p-6 h-full flex flex-col justify-between">
                <div>
                  <p className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Der ehrliche Vergleich</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Break-even-Tabelle, Praxisbeispiele und der Fall, in dem sich die Flatrate{" "}
                    <em>nicht</em> lohnt: alles im Ratgeber.
                  </p>
                </div>
                <Link
                  href="/ratgeber/architekturmodell-flatrate"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                >
                  Flatrate vs. Einzelauftrag lesen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · ABLAUF — schlanke Zeile statt Karten-Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="03">So funktioniert&apos;s</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-10">
              Von der CAD-Datei zum Modell im Büro.
            </h2>
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
              {STEPS.map((s) => (
                <div key={s.n} className="py-6 md:py-2 md:px-6 first:pl-0 last:pr-0">
                  <p className="mono text-3xl font-bold text-primary/25 mb-3">{s.n}</p>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 · FÜR WEN — Passt / Passt nicht, ehrliche Abgrenzung */}
      <section className="py-16 md:py-20 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="04">Für wen</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-10">
              Passt die Flatrate zu Ihrem Büro?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-2xl bg-background p-7">
                <p className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-5">Ja, wenn</p>
                <ul className="space-y-4">
                  {PASST.map((t, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-2xl bg-background p-7">
                <p className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">Eher nicht, wenn</p>
                <ul className="space-y-5">
                  {PASST_NICHT.map((t, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <X className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5" />
                      <span>
                        {t.text}{" "}
                        <Link href={t.link.to} className="text-primary font-semibold whitespace-nowrap hover:underline underline-offset-2">
                          {t.link.label} →
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 · STIMMEN — schmale Zeile, echte Rezensionen */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="05">Kundenstimmen</SectionLabel>
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em]">Was Kunden sagen.</h2>
              <p className="text-sm text-muted-foreground">5,0 Sterne · aus 35 Google-Bewertungen</p>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="py-6 md:py-2 md:px-6 first:pl-0 last:pr-0">
                  <div className="flex gap-0.5 mb-3" aria-label="5 von 5 Sternen">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-foreground/85 leading-relaxed mb-3">„{t.quote}"</blockquote>
                  <figcaption className="mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {t.author} · Google-Rezension
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 · FAQ */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <SectionLabel index="06">FAQ</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-4">
                Häufige Fragen zur Flatrate.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Etwas nicht dabei? Rufen Sie mich an: <a href="tel:+436765517197" className="font-bold text-foreground hover:text-primary">0676 5517197</a>, oder schreiben Sie per WhatsApp.
              </p>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="w-full">
                {ABO_FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm md:text-base">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>

      {/* WEITERE WEGE */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionLabel index="07">Weiterlesen</SectionLabel>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { to: "/architekturmodelle", label: "Architekturmodelle im Einzelauftrag" },
                { to: "/ratgeber/architekturmodell-flatrate", label: "Ratgeber: Wann lohnt sich die Flatrate?" },
                { to: "/messemodelle", label: "Messemodelle & Exponate" },
                { to: "/einzelanfertigungen", label: "Einzelanfertigungen & Prototypen" },
              ].map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  className="group flex items-center justify-between py-4 px-5 border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{l.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Absatz */}
      <section className="py-10 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            Die Architekturmodell-Flatrate von ekdruck e.U. ist ein monatliches Fixpreis-Abo für Architekturbüros,
            Planungsbüros und Immobilienentwickler: zwei bis acht 3D-gedruckte Modelle pro Monat, Lieferung in 48
            Stunden österreichweit, monatlich kündbar, erstes Modell kostenlos. Gefertigt in Gunskirchen bei Wels,
            geliefert nach Wien, Graz, Linz, Salzburg, Innsbruck und in ganz Österreich.
          </p>
        </div>
      </section>

      <StickyCTA context="Architekturmodell-Flatrate – Erstes Modell kostenlos" />
      <Footer />
    </div>
  );
};

export default ArchitekturmodelleAbo;
