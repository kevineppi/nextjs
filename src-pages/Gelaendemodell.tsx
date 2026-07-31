import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticCard from "@/components/MagneticCard";
import StickyCTA from "@/components/landing/StickyCTA";
import {
  ArrowRight, Phone, Mountain, Building2, Landmark, Layers,
  Ruler, Database, Zap, Route as RouteIcon
} from "lucide-react";

// Höhenschichten für das Signature-Relief (Seitenprofil, baut Schicht für Schicht auf)
const schichten = [
  { w: 300, x: 10 },
  { w: 266, x: 24 },
  { w: 228, x: 44 },
  { w: 186, x: 70 },
  { w: 146, x: 96, accent: true },
  { w: 100, x: 122, accent: true },
  { w: 58, x: 150, accent: true },
];

const laender = [
  { code: "AT", land: "Österreich", provider: "BEV & Länder-GIS", sets: ["Geländemodell: BEV ab 5 m, Landes-Laserscan bis 1 m / 0,5 m", "Höhenschichtlinien, Kataster (DKM)", "Länder-Portale: DORIS OÖ, tiris, GIS Steiermark"], zugang: "data.bev.gv.at & data.gv.at · Open Data (CC-BY)" },
  { code: "DE", land: "Deutschland", provider: "Landesvermessung der Länder", sets: ["DGM1, 1 m Raster (GeoTIFF / XYZ)", "LoD2-Gebäudemodelle (CityGML)", "ALKIS-Liegenschaftsdaten"], zugang: "OpenGeodata-Portale · dl-de/by-2-0" },
  { code: "CH", land: "Schweiz", provider: "swisstopo", sets: ["swissALTI3D, 0,5 / 2 m Höhenmodell", "swissBUILDINGS3D, 3D-Gebäude (CityGML)", "swissTLM3D Landschaftsmodell"], zugang: "swisstopo.admin.ch · Open Government Data" },
];

const anwendungen = [
  { icon: Mountain, t: "Regionen & Tourismus", d: "Reliefmodelle einer Region, eines Tals oder eines Wandergebiets für Tourismusbüros, Infozentren und Ausstellungen. Die Landschaft wird begreifbar, im Wortsinn." },
  { icon: Building2, t: "Planungsbüros", d: "Das Umgebungsmodell zum Entwurf: der reale Geländeverlauf, auf dem das Projekt sitzt. Hangneigung, Einschnitt und Aussicht werden am Modell sofort lesbar." },
  { icon: Landmark, t: "Gemeinden & Bürgerbeteiligung", d: "Ein Geländemodell auf dem Tisch macht Bebauungs- und Infrastrukturvorhaben im Ort verständlich, ganz ohne Planlesen." },
  { icon: RouteIcon, t: "Alpine Projekte", d: "Steiles Gelände, Lifte, Schutzbauten oder Wegeführungen im echten Höhenverlauf. Gerade im alpinen Raum sagt ein Relief mehr als jede Draufsicht." },
];

const faqs = [
  { q: "Was kostet ein Geländemodell aus dem 3D-Druck?", a: "Das hängt von Fläche, Maßstab und Detailgrad ab. Nach einer kurzen Sichtung Ihrer Daten oder des gewünschten Ausschnitts erhalten Sie innerhalb von 6 Stunden ein verbindliches Festpreis-Angebot. Einen ersten Richtwert liefert der Kostenrechner." },
  { q: "Woher kommen die Höhendaten? Muss ich selbst etwas liefern?", a: "In der Regel nicht. Wir arbeiten mit amtlichen Höhendaten: in Österreich vom BEV und den Bundesländern (Landes-Laserscan bis 1 m), in Deutschland das DGM1 der Landesvermessung, in der Schweiz swissALTI3D von swisstopo. Sagen Sie uns den Ausschnitt, den Rest holen und bereiten wir auf." },
  { q: "Wie groß kann ein Geländemodell sein?", a: "Es gibt keine feste Größengrenze. Große Reliefs setzen wir aus mehreren Teilen zusammen, mit unsichtbaren Trennkanten entlang von Wegen oder Geländekanten. So sind auch großflächige Areale bis XXL als ein zusammenhängendes Modell möglich." },
  { q: "Was ist Überhöhung, und wann braucht man sie?", a: "Bei flachem Gelände sind die Höhenunterschiede im Maßstab so klein, dass das Relief kaum lesbar wäre. Dann überhöhen wir die Höhen leicht und maßvoll, damit Täler und Hänge sichtbar bleiben. Bei alpinem Gelände ist das meist nicht nötig." },
  { q: "Aus welchem Material und in welcher Optik?", a: "Standard ist durchgehendes Weiß in mattem PLA, das die Form in den Vordergrund stellt. Auf Wunsch koloriert, mit abgesetzten Höhenschichten, Gewässern oder eingelegten Wegen und Beschriftungen." },
  { q: "Wie schnell ist ein Geländemodell fertig?", a: "Je nach Umfang wenige Tage, Express in 24 bis 48 Stunden ist bei druckreifer Datenlage möglich. Das Festpreis-Angebot kommt in 6 Stunden. Bei knapper Deadline rufen Sie an: +43 676 5517197." },
];

const Gelaendemodell = () => (
  <>
    <style>{`
      @keyframes reliefRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      .relief-layer { animation: reliefRise 0.6s cubic-bezier(0.22,1,0.36,1) backwards; transform-box: fill-box; }
      @media (prefers-reduced-motion: reduce) { .relief-layer { animation: none !important; opacity: 1 !important; transform: none !important; } }
    `}</style>
    <Navigation />
    <main className="min-h-screen bg-background pt-28 md:pt-32">

      {/* HERO mit Höhenschichten-Signature */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[6%] right-[6%] w-[520px] h-[520px] rounded-full bg-primary/[0.06] blur-[120px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Geländemodelle · Topografie · Relief</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-8">
                <span className="block">Geländemodell.</span>
                <span className="block text-gradient mt-2">Die Landschaft als Relief zum Anfassen.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Wir wandeln <strong className="text-foreground">amtliche Höhendaten</strong> in ein gedrucktes Relief um. Topografie- und Reliefmodelle
                für Regionen, Planungsbüros und Gemeinden, segmentiert bis XXL, Angebot in <strong className="text-foreground">6 Stunden</strong>.
                Sie brauchen kein fertiges 3D-Modell, nur den Ausschnitt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="#kontakt">Geländemodell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base border-2" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Anrufen</a>
                </Button>
              </div>
            </div>
            {/* Signature: Höhenschichten-Relief */}
            <div className="relative">
              <svg viewBox="0 0 320 210" className="w-full h-auto" role="img" aria-label="Geländemodell als gestapelte Höhenschichten">
                {schichten.map((s, i) => (
                  <rect
                    key={i}
                    className="relief-layer"
                    x={s.x}
                    y={188 - i * 26}
                    width={s.w}
                    height={22}
                    rx={4}
                    style={{
                      fill: s.accent ? `hsl(var(--primary) / ${0.55 + i * 0.09})` : `hsl(var(--foreground) / ${0.28 + i * 0.06})`,
                      animationDelay: `${i * 75}ms`,
                    }}
                  />
                ))}
              </svg>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3 text-center">Höhenschichten · Schicht für Schicht aufgebaut</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATEN: von den Rohdaten zum Relief */}
      <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-4"><Database className="w-5 h-5 text-primary" /><p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Ihre Daten, egal aus welchem Land</p></div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">Vom Höhenmodell zum Relief.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie müssen kein 3D-Modell liefern. Sagen Sie uns den Ausschnitt, wir holen die passenden amtlichen Höhendaten und
                bereiten sie druckfertig auf. Wir kennen die Datenquellen in der ganzen DACH-Region.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {laender.map((l, i) => (
                <AnimatedSection key={l.code} animation="slide-up" delay={i * 90}>
                  <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full transition-all duration-500 hover:border-primary/30">
                    <div className="p-7 md:p-8 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-5">
                        <span className="mono text-3xl font-bold text-foreground">{l.code}</span>
                        <span className="mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{l.land}</span>
                      </div>
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-3">{l.provider}</p>
                      <ul className="space-y-2 mb-5 flex-1">
                        {l.sets.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
                            <Layers className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" /><span>{s}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground pt-4 border-t border-border/60">{l.zugang}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
                Auch Flur- und Grenzpläne, CityGML-Gebäudemodelle, Vermessung oder Ihre eigenen CAD-Daten arbeiten wir ein. Diese
                Umwandlung in ein druckfertiges 3D-Modell übernehmen wir bei allen unseren Modellen, wenn nötig.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ANWENDUNGEN */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wofür ein Geländemodell</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">Wenn die Draufsicht nicht reicht.</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-4">
              {anwendungen.map((a, i) => (
                <AnimatedSection key={a.t} animation="slide-up" delay={i * 80}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="p-8 md:p-10">
                      <a.icon className="w-10 h-10 text-primary mb-6" />
                      <p className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{a.t}</p>
                      <p className="text-muted-foreground leading-relaxed">{a.d}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MASSSTAB / GRÖSSE / ÜBERHÖHUNG */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            <AnimatedSection animation="slide-up">
              <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full">
                <div className="p-8">
                  <Ruler className="w-9 h-9 text-primary mb-5" />
                  <p className="text-xl font-bold mb-3">Maßstab</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Vom kleinen Talausschnitt bis zur ganzen Region. Wir wählen den Maßstab so, dass Ihr Ausschnitt aufs gewünschte Format passt und das Relief seine Wirkung behält.</p>
                </div>
              </MagneticCard>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={90}>
              <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full">
                <div className="p-8">
                  <Layers className="w-9 h-9 text-primary mb-5" />
                  <p className="text-xl font-bold mb-3">Größe & Segmentierung</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Keine feste Größengrenze. Große Reliefs drucken wir in Teilen und setzen sie von Hand zusammen, mit Trennkanten entlang von Wegen oder Geländekanten, die man später nicht sieht.</p>
                </div>
              </MagneticCard>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={180}>
              <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full">
                <div className="p-8">
                  <Mountain className="w-9 h-9 text-primary mb-5" />
                  <p className="text-xl font-bold mb-3">Überhöhung</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Bei flachem Gelände überhöhen wir die Höhen maßvoll, damit Täler und Hänge lesbar bleiben. Bei alpinem Gelände bleibt das Relief im echten Verhältnis.</p>
                </div>
              </MagneticCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-14">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Vom Ausschnitt zum Modell</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">So läuft es ab.</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {[
                { n: "01", t: "Ausschnitt festlegen", d: "Sie nennen uns die Region oder den Ausschnitt und den Zweck. Ein grober Kartenausschnitt genügt." },
                { n: "02", t: "Höhendaten holen & aufbereiten", d: "Wir beziehen die amtlichen Höhendaten (BEV, DGM1, swissALTI3D) und bauen daraus ein druckfertiges Relief, auf Wunsch mit Gewässern, Wegen oder Bebauung." },
                { n: "03", t: "Angebot in 6h & Druck", d: "Sie bekommen ein verbindliches Festpreis-Angebot in 6 Stunden. Nach Freigabe drucken wir das Relief, Schicht für Schicht, Express in 24 bis 48h möglich." },
                { n: "04", t: "Lieferung", d: "Versand ins gesamte DACH-Gebiet, auf Wunsch persönliche Zustellung in Oberösterreich." },
              ].map((step, i) => (
                <AnimatedSection key={step.n} animation="slide-up" delay={i * 60}>
                  <MagneticCard className="rounded-2xl border-2 border-border bg-card">
                    <div className="p-6 md:p-7 flex items-start gap-5">
                      <span className="mono text-3xl md:text-4xl font-bold text-foreground/[0.12] shrink-0 leading-none">{step.n}</span>
                      <div>
                        <p className="font-bold text-lg mb-1">{step.t}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                      </div>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO-BODY */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Geländemodell im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8">Relief, Topografie und Landschaft aus dem 3D-Druck</h2>
              <div className="space-y-6 text-base leading-[1.85] text-foreground/85">
                <p>Ein <strong>Geländemodell drucken zu lassen</strong> heißt, eine Landschaft begreifbar zu machen. Wo eine Karte flach bleibt, zeigt ein <strong>Reliefmodell</strong> Täler, Hänge und Grate im echten Verhältnis. Wir arbeiten dafür mit amtlichen Höhendaten und bauen daraus Schicht für Schicht ein Relief zum Anfassen, für Regionen und Tourismusbüros, Planungsbüros, Gemeinden und alpine Projekte.</p>
                <p>Der Weg dahin ist unser Handwerk: Aus <strong>Höhen- und Geländedaten</strong> wird ein sauberes, druckfertiges 3D-Modell. In Österreich nutzen wir die Höhendaten von BEV und Bundesländern, in Deutschland das DGM1 der Landesvermessung, in der Schweiz swissALTI3D von swisstopo. Sie müssen selbst nichts vorbereiten. Auch ein <strong>Topografiemodell</strong> oder <strong>Höhenmodell</strong> mit eingelegten Wegen, Gewässern oder Bebauung ist damit möglich.</p>
                <p>Verwandte Modelle aus dem gleichen Workflow: das <Link href="/architekturmodelle/stadtmodell" className="text-primary font-semibold hover:underline">Städtebaumodell</Link> mit Bebauung auf dem Gelände, das <Link href="/architekturmodelle/wettbewerbsmodell" className="text-primary font-semibold hover:underline">Wettbewerbsmodell</Link> mit Umgebung, und die Hauptseite <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link>. Einen ersten Richtwert liefert der <Link href="/kostenrechner" className="text-primary font-semibold hover:underline">Kostenrechner</Link>. Unser Standort ist Gunskirchen in Oberösterreich, geliefert wird in ganz DACH.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Häufige Fragen</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Geländemodell, klar beantwortet.</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 40}>
                  <div className="rounded-2xl border-2 border-border p-6 md:p-8">
                    <p className="font-bold text-lg mb-2">{f.q}</p>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20"><Contact /></section>
    </main>

    <StickyCTA />
    <Footer />
  </>
);

export default Gelaendemodell;
