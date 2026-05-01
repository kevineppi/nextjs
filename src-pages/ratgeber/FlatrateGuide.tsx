import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import AnimatedSection from "@/components/AnimatedSection";
import {
  CheckCircle, X, ArrowRight, Calculator, TrendingDown, Clock,
  Building2, Star, MessageCircle, Wallet, Shield, Zap, AlertTriangle
} from "lucide-react";

const FlatrateGuide = () => {
  const faqs = [
    {
      question: "Für welche Büros lohnt sich die Architekturmodell-Flatrate?",
      answer: "Die Flatrate rechnet sich ab ca. 2 Modellen pro Monat. Für Büros mit laufenden Wettbewerben, mehreren aktiven Bauprojekten oder regelmäßigen Kundenpräsentationen ist der Break-even in der Regel bereits im ersten Monat erreicht. Beim Professional-Paket (€349/Monat, bis 7 Modelle) entspricht das einem Einzelpreis von unter €50 pro Modell."
    },
    {
      question: "Gibt es eine Mindestlaufzeit bei der ekdruck Flatrate?",
      answer: "Nein. Die Architekturmodell-Flatrate von ekdruck ist monatlich kündbar, ohne Mindestlaufzeit oder Kündigungsfrist. Sie können monatlich entscheiden, ob Sie weitermachen wollen."
    },
    {
      question: "Was passiert, wenn ich mehr Modelle bestelle als im Paket enthalten?",
      answer: "Nicht genutzte Modelle verfallen am Monatsende. Wenn Sie in einem Monat mehr Modelle benötigen als im Paket enthalten sind, werden die Mehrmengen zum günstigeren Flatrate-Preis abgerechnet – nicht zum regulären Einzelpreis."
    },
    {
      question: "Ist das erste Modell wirklich kostenlos?",
      answer: "Ja, für neue Flatrate-Kunden drucken wir das erste Modell kostenlos – als Qualitätstest ohne Risiko. Das Testmodell wird nach Abschluss der Flatrate-Vereinbarung produziert und in 48 Stunden geliefert."
    },
    {
      question: "Kann ich das Paket jederzeit upgraden oder downgraden?",
      answer: "Ja. Ein Upgrade ist jederzeit sofort möglich, ein Downgrade zum nächsten Monatsbeginn. So können Sie in Phasen mit Wettbewerben auf Studio wechseln und danach wieder auf Starter zurück."
    },
  ];

  const breakEvenRows = [
    { label: "1 Modell/Monat", einzelpreis: "€120–250", starter: "€199", professional: "€349", studio: "€549", winner: "einzeln" },
    { label: "2 Modelle/Monat", einzelpreis: "€240–500", starter: "€199", professional: "€349", studio: "€549", winner: "starter" },
    { label: "3 Modelle/Monat", einzelpreis: "€360–750", starter: "€199", professional: "€349", studio: "€549", winner: "starter" },
    { label: "5 Modelle/Monat", einzelpreis: "€600–1.250", starter: "über Limit", professional: "€349", studio: "€549", winner: "professional" },
    { label: "7 Modelle/Monat", einzelpreis: "€840–1.750", starter: "über Limit", professional: "€349", studio: "€549", winner: "professional" },
    { label: "10 Modelle/Monat", einzelpreis: "€1.200–2.500", starter: "über Limit", professional: "über Limit", studio: "€549", winner: "studio" },
  ];

  const painPoints = [
    {
      icon: Calculator,
      title: "Jedes Modell eine neue Preisverhandlung",
      desc: "Bei Einzelbestellungen kalkulieren Sie jedes Mal neu: Größe, Material, Lieferzeit. Das kostet Zeit und führt zu schwer planbaren Budgets."
    },
    {
      icon: Clock,
      title: "Keine Kapazitätsgarantie",
      desc: "Bei Einzelbestellungen ist Express-Lieferung ein Aufpreis. Bei der Flatrate haben Flatrate-Kunden Priorität – 48h-Lieferung ist im Preis enthalten."
    },
    {
      icon: AlertTriangle,
      title: "Kein verlässlicher Ansprechpartner",
      desc: "Einmalige Aufträge bedeuten jedes Mal neu erklären, neu briefen. Mit der Flatrate kennt ekdruck Ihren Standard und Ihre Anforderungen."
    },
    {
      icon: Wallet,
      title: "Kosten steigen mit Projektzahl",
      desc: "Je erfolgreicher ein Büro ist, desto mehr Modelle braucht es – und desto mehr zahlt es. Die Flatrate dreht diesen Effekt um: Fixkosten, egal wie viel gebaut wird."
    },
  ];

  const proConRows = [
    {
      aspect: "Preis pro Modell",
      einzeln: "€80–300 je nach Aufwand",
      flatrate: "€28–100 effektiv",
      winner: "flatrate"
    },
    {
      aspect: "Planbarkeit",
      einzeln: "Variabel, kaum budgetierbar",
      flatrate: "Fixbetrag im Monat",
      winner: "flatrate"
    },
    {
      aspect: "Lieferzeit",
      einzeln: "3–7 Tage standard, Express Aufpreis",
      flatrate: "48h inklusive",
      winner: "flatrate"
    },
    {
      aspect: "Aufwand pro Bestellung",
      einzeln: "Anfrage → Angebot → Freigabe",
      flatrate: "Datei senden, fertig",
      winner: "flatrate"
    },
    {
      aspect: "Mindestlaufzeit",
      einzeln: "Keine",
      flatrate: "Keine (monatl. kündbar)",
      winner: "gleich"
    },
    {
      aspect: "Sinnvoll wenn …",
      einzeln: "Weniger als 2 Modelle/Monat",
      flatrate: "Regelmäßig 2+ Modelle/Monat",
      winner: "context"
    },
  ];

  return (
    <>
      <SEOHead
        title="Architekturmodell Flatrate vs. Einzelauftrag: Wann lohnt sich ein Abo? [2026]"
        description="Ehrlicher Kostenvergleich: Ab wann rechnet sich die Architekturmodell-Flatrate für Architekturbüros? Preistabelle, Break-even-Analyse und Praxisbeispiele ✓"
        keywords="architekturmodell flatrate, 3d druck abo architektur, architekturmodell abo, 3d druck büro flatrate, architekturmodelle monatlich, 3d druck subscription architektur"
        path="/ratgeber/architekturmodell-flatrate"
        schemaType="article"
        datePublished="2026-04-01"
        dateModified="2026-04-26"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Ratgeber", url: "/ratgeber" },
        { name: "Architekturmodell Flatrate", url: "/ratgeber/architekturmodell-flatrate" }
      ]} />
      <FAQSchema faqs={faqs} />

      <Navigation />

      <div className="min-h-screen bg-background">

        {/* HERO */}
        <section className="pt-28 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/ratgeber" className="hover:text-primary transition-colors">Ratgeber</Link>
              <span>/</span>
              <span>Architekturmodell Flatrate</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              Für Architekturbüros · 8 Min. Lesezeit
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Architekturmodell Flatrate vs. Einzelauftrag:<br />
              <span className="text-primary">Wann lohnt sich ein Abo?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ein ehrlicher Vergleich mit Preistabelle und Break-even-Analyse — für Architekturbüros, die mehr als ein Modell pro Quartal beauftragen.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Verfasst April 2026</span>
              <span>·</span>
              <span>Letzte Aktualisierung: April 2026</span>
              <span>·</span>
              <span>Von Kevin Eppensteiner, ekdruck e.U.</span>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Kurze Antwort</div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Die Flatrate lohnt sich ab ca. <strong>2 Modellen pro Monat</strong> — schon beim Starter-Paket (€199/Mon.) amortisiert sich das gegenüber Einzelaufträgen, wenn ein Modell im Schnitt mehr als €100 kostet.
              </p>
              <p className="text-muted-foreground">
                Für Büros mit laufenden Wettbewerben oder mehreren aktiven Projekten gleichzeitig rechnet sich der Wechsel bereits im ersten Monat. Das erste Modell ist bei ekdruck kostenlos — so können Sie das selbst testen.
              </p>
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="py-8 border-b bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-semibold text-foreground mb-3">Inhalt</p>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { anchor: "#probleme", label: "1. Das Problem mit Einzelaufträgen" },
                { anchor: "#vergleich", label: "2. Flatrate vs. Einzelauftrag im Vergleich" },
                { anchor: "#break-even", label: "3. Break-even-Tabelle" },
                { anchor: "#pakete", label: "4. Welches Paket passt zu welchem Büro?" },
                { anchor: "#praxisbeispiele", label: "5. Praxisbeispiele aus dem Alltag" },
                { anchor: "#faq", label: "6. Häufige Fragen" },
              ].map(({ anchor, label }) => (
                <a key={anchor} href={anchor} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1">
                  <ArrowRight className="h-3 w-3 shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-20">

            {/* 1. PROBLEME */}
            <AnimatedSection animation="fade-in">
              <section id="probleme">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">01</span>
                  <h2 className="text-3xl font-bold">Das Problem mit Einzelaufträgen</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  Architekturbüros, die 3D-Druckmodelle regelmäßig beauftragen, kennen das Problem: Jede Bestellung ist ein kleines Projekt für sich. Anfrage, Angebot, Freigabe, Lieferung — und dann dasselbe wieder von vorn. Das kostet nicht nur Geld, sondern vor allem Zeit.
                </p>
                <div className="grid md:grid-cols-2 gap-5">
                  {painPoints.map((p, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{p.title}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-8">
                  Eine Flatrate löst all diese Probleme auf einmal: Fixpreis, feste Lieferzeit, ein persönlicher Ansprechpartner. Das Modell ist bei einem Abo-Anbieter anders — Sie werden als Partner behandelt, nicht als Einmalkunde.
                </p>
              </section>
            </AnimatedSection>

            {/* 2. VERGLEICH */}
            <AnimatedSection animation="fade-in">
              <section id="vergleich">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">02</span>
                  <h2 className="text-3xl font-bold">Flatrate vs. Einzelauftrag: Der direkte Vergleich</h2>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold">Kriterium</th>
                        <th className="text-left p-4 font-semibold">Einzelauftrag</th>
                        <th className="text-left p-4 font-semibold text-primary bg-primary/5">ekdruck Flatrate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {proConRows.map((row, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">{row.aspect}</td>
                          <td className="p-4 text-muted-foreground">
                            <div className="flex items-start gap-2">
                              {row.winner === "einzeln" ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> : row.winner === "gleich" ? <span className="h-4 w-4 shrink-0" /> : <X className="h-4 w-4 text-muted-foreground/40 shrink-0 mt-0.5" />}
                              {row.einzeln}
                            </div>
                          </td>
                          <td className="p-4 bg-primary/5">
                            <div className="flex items-start gap-2">
                              {row.winner === "flatrate" ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> : row.winner === "gleich" ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /> : <span className="h-4 w-4 shrink-0" />}
                              <span className={row.winner === "flatrate" || row.winner === "gleich" ? "font-medium text-foreground" : "text-muted-foreground"}>{row.flatrate}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Einzelpreise basieren auf typischen Preisen für FDM-gedruckte Architekturmodelle (Maßstab 1:100–1:500, Standardgröße A4–A3) im österreichischen Markt 2026.
                </p>
              </section>
            </AnimatedSection>

            {/* 3. BREAK-EVEN */}
            <AnimatedSection animation="fade-in">
              <section id="break-even">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">03</span>
                  <h2 className="text-3xl font-bold">Break-even-Tabelle</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  Ab wie vielen Modellen pro Monat lohnt sich welches Paket? Die Tabelle zeigt den typischen Einzelpreisbereich und stellt ihn dem Flatrate-Preis gegenüber. Grün markiert ist jeweils die günstigere Option.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold">Modellmenge/Monat</th>
                        <th className="text-left p-4 font-semibold">Einzelauftrag (Schätzung)</th>
                        <th className="text-left p-4 font-semibold">Starter €199</th>
                        <th className="text-left p-4 font-semibold text-primary bg-primary/5">Professional €349</th>
                        <th className="text-left p-4 font-semibold">Studio €549</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakEvenRows.map((row, i) => (
                        <tr key={i} className="border-t border-border">
                          <td className="p-4 font-semibold text-foreground">{row.label}</td>
                          <td className={`p-4 ${row.winner === "einzeln" ? "text-green-700 font-semibold bg-green-50" : "text-muted-foreground"}`}>{row.einzelpreis}</td>
                          <td className={`p-4 ${row.winner === "starter" ? "text-green-700 font-semibold bg-green-50" : "text-muted-foreground"}`}>{row.starter}</td>
                          <td className={`p-4 bg-primary/5 ${row.winner === "professional" ? "text-green-700 font-semibold" : "text-muted-foreground"}`}>{row.professional}</td>
                          <td className={`p-4 ${row.winner === "studio" ? "text-green-700 font-semibold bg-green-50" : "text-muted-foreground"}`}>{row.studio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-5 rounded-xl bg-muted/40 border border-border text-sm text-muted-foreground">
                  <strong>Annahme:</strong> Ein Standardmodell (Maßstab 1:200, ca. A4-Grundfläche, FDM-Druck weiß) kostet bei Einzelauftrag zwischen €80 und €200. Komplexere Modelle oder andere Maßstäbe können deutlich teurer sein. Die Flatrate deckt alle Standardmodelle ohne Nachkalkulation ab.
                </div>

                <div className="mt-8 p-6 rounded-2xl border-2 border-primary/30 bg-primary/5">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <TrendingDown className="h-10 w-10 text-primary shrink-0" />
                    <div className="flex-1 text-center sm:text-left">
                      <p className="font-bold text-lg mb-1">Fazit: Break-even bei 2 Modellen/Monat</p>
                      <p className="text-sm text-muted-foreground">Wer zwei oder mehr Standardmodelle pro Monat bestellt, zahlt mit der Flatrate weniger als mit Einzelaufträgen — und bekommt 48h-Lieferung dazu.</p>
                    </div>
                    <Link href="/architekturmodelle-abo">
                      <Button className="shrink-0">Flatrate testen →</Button>
                    </Link>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* 4. PAKETE */}
            <AnimatedSection animation="fade-in">
              <section id="pakete">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">04</span>
                  <h2 className="text-3xl font-bold">Welches Paket passt zu welchem Büro?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      name: "Starter",
                      price: "€199/Monat",
                      ideal: "Kleine Büros, Einzelarchitekten",
                      models: "Bis 3 Modelle/Monat",
                      desc: "Ideal für Büros mit 1–2 aktiven Projekten gleichzeitig. Auch für Architekturstudenten in der Abschlussphase.",
                      examples: ["1–2 Wohnbauprojekte", "Gelegentliche Wettbewerbe", "Studienmodelle"]
                    },
                    {
                      name: "Professional",
                      price: "€349/Monat",
                      ideal: "Mittlere Büros, 3–10 Mitarbeiter",
                      models: "Bis 7 Modelle/Monat",
                      desc: "Der Sweet Spot für die meisten etablierten Büros. Mehrere Projekte gleichzeitig, regelmäßige Kundenpräsentationen.",
                      examples: ["2–4 gleichzeitige Projekte", "Wettbewerbe + laufende Projekte", "Monatliche Baubesprechungen"],
                      highlight: true
                    },
                    {
                      name: "Studio",
                      price: "€549/Monat",
                      ideal: "Große Büros, Stadtplanung",
                      models: "Bis 15 Modelle/Monat",
                      desc: "Für Büros mit Projektvolumen ab 5 gleichzeitigen Projekten oder mit regelmäßigem Städtebaubedarf.",
                      examples: ["5+ aktive Projekte", "Stadtentwicklung & Bebauungspläne", "Team von 10+ Architekten"]
                    }
                  ].map((pkg) => (
                    <Card key={pkg.name} className={`relative ${pkg.highlight ? "border-primary shadow-lg" : ""}`}>
                      {pkg.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                          Am beliebtesten
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="text-sm font-bold text-primary mb-1">{pkg.name}</div>
                        <div className="text-2xl font-bold text-foreground mb-1">{pkg.price}</div>
                        <div className="text-xs text-muted-foreground mb-4">{pkg.models}</div>
                        <div className="font-semibold text-sm mb-2">{pkg.ideal}</div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.desc}</p>
                        <div className="space-y-1">
                          {pkg.examples.map((e) => (
                            <div key={e} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                              {e}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* 5. PRAXISBEISPIELE */}
            <AnimatedSection animation="fade-in">
              <section id="praxisbeispiele">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">05</span>
                  <h2 className="text-3xl font-bold">Praxisbeispiele aus dem Büroalltag</h2>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: Building2,
                      type: "Kleines Büro, Wien",
                      situation: "2 Architekten, 1–2 Wohnbauprojekte laufend, alle 2 Wochen ein Modell für Baubesprechungen.",
                      vorher: "2 × €180 Einzelauftrag = €360/Monat + 5–7 Tage Lieferzeit",
                      nachher: "Starter-Flatrate: €199/Monat + 48h-Lieferung",
                      ersparnis: "€161/Monat gespart · 3–5 Tage schneller"
                    },
                    {
                      icon: Star,
                      type: "Mittelgroßes Büro, Graz",
                      situation: "8 Mitarbeiter, 3–4 aktive Projekte, durchschnittlich 5 Modelle pro Monat inklusive Wettbewerbe.",
                      vorher: "5 × €200 Einzelauftrag = €1.000/Monat, davon 2× Express mit Aufpreis = effektiv €1.200/Monat",
                      nachher: "Professional-Flatrate: €349/Monat, 48h inklusive, kein Express-Aufpreis",
                      ersparnis: "€851/Monat gespart · Planbare Fixkosten"
                    },
                    {
                      icon: Zap,
                      type: "Wettbewerbsphase, Linz",
                      situation: "Büro mit aktiver Wettbewerbsstrategie: in manchen Monaten bis zu 10 Modelle, danach Flaute.",
                      vorher: "Hohe Einzelkosten in Wettbewerbsmonaten, schwer kalkulierbar",
                      nachher: "Studio-Flatrate (€549) in aktiven Monaten, Starter (€199) in ruhigen Monaten – beide monatlich kündbar",
                      ersparnis: "Flexibles Up-/Downgrade, keine Vertragsbindung"
                    },
                  ].map((ex, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ex.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-bold text-foreground">{ex.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{ex.situation}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/10 text-sm">
                          <div className="text-xs font-bold text-destructive mb-1 uppercase tracking-wider">Vorher (Einzelauftrag)</div>
                          <p className="text-muted-foreground">{ex.vorher}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-sm">
                          <div className="text-xs font-bold text-green-700 mb-1 uppercase tracking-wider">Nachher (Flatrate)</div>
                          <p className="text-muted-foreground">{ex.nachher}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                        <CheckCircle className="h-4 w-4" />
                        {ex.ersparnis}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* 6. FAQ */}
            <AnimatedSection animation="fade-in">
              <section id="faq">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black text-primary/15">06</span>
                  <h2 className="text-3xl font-bold">Häufige Fragen zur Architekturmodell-Flatrate</h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="p-5 rounded-xl bg-card border border-border">
                      <div className="font-semibold text-foreground mb-2">{faq.question}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* FINAL CTA */}
            <AnimatedSection animation="fade-in">
              <div className="p-8 rounded-2xl bg-primary/5 border-2 border-primary/20 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Jetzt testen – risikofrei</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Erstes Modell kostenlos drucken lassen</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Schicken Sie uns Ihre STL-Datei oder beschreiben Sie Ihr Modell kurz — wir drucken es kostenlos als Qualitätstest. Kein Vertrag, keine Mindestlaufzeit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/architekturmodelle-abo">
                    <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base">
                      Zur Flatrate-Seite <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href={`https://wa.me/436765517197?text=${encodeURIComponent("Hallo ekdruck, ich habe den Flatrate-Guide gelesen und möchte mein erstes Modell kostenlos testen.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border px-8 py-6 rounded-xl hover:bg-muted transition-colors text-base font-medium"
                  >
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    Direkt per WhatsApp anfragen
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 5.0 Google (31 Rezensionen)</span>
                  <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-primary" /> Keine Mindestlaufzeit</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> Antwort in 6 Stunden</span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </article>

        <StickyCTA context="Flatrate Guide" />
        <Footer />
      </div>
    </>
  );
};

export default FlatrateGuide;
