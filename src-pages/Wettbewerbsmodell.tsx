import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import TextReveal from "@/components/TextReveal";
import MagneticCard from "@/components/MagneticCard";
import StickyCTA from "@/components/landing/StickyCTA";
import {
  ArrowRight, Phone, Zap, Clock, Copy, Ruler, Palette,
  FileCheck, Upload, CheckCircle2
} from "lucide-react";

const massstaebe = [
  { m: "1:200", typ: "Kompakt & detaillierter", text: "Einzelgebäude und kleine Ensembles. Fenster, Balkone und Dachformen bleiben ablesbar. Häufig in den Wettbewerbsunterlagen vorgeschrieben.", ab: "ab €420" },
  { m: "1:500", typ: "Städtebaulicher Standard", text: "Quartier, Umgebung und Baukörper im Zusammenhang. Der klassische Maßstab, wenn der Kontext mit auf den Sockel soll.", ab: "ab €780" },
  { m: "1:1000", typ: "Großer Kontext", text: "Ganze Areale und Stadtausschnitte. Reduziert auf Volumen und Geländeverlauf, ideal als Umgebungsmodell zum Entwurf.", ab: "auf Anfrage" },
];

const ablauf = [
  { icon: Upload, t: "1 · Daten schicken", d: "Sie laden Ihre Datei hoch oder mailen sie uns: STL, OBJ, STEP, 3MF oder direkt aus ArchiCAD, Revit, Rhino, SketchUp und Vectorworks. Aufbereiten müssen Sie nichts." },
  { icon: FileCheck, t: "2 · Angebot in 6h", d: "Wir sichten die Daten und schicken innerhalb von 6 Stunden ein verbindliches Festpreis-Angebot mit Maßstabs-Empfehlung und Liefertermin." },
  { icon: Zap, t: "3 · Fertigung", d: "Nach Ihrer Freigabe geht das Modell in Fertigung. Weiße matte Optik, bei Bedarf segmentiert und von Hand zusammengesetzt. Express in 24 bis 48 Stunden möglich." },
  { icon: CheckCircle2, t: "4 · Lieferung", d: "Versand ins gesamte DACH-Gebiet, auf Wunsch persönliche Zustellung in Oberösterreich. Rechtzeitig vor dem Abgabetermin auf dem Tisch." },
];

const faqs = [
  { q: "Welcher Maßstab ist für ein Wettbewerbsmodell richtig?", a: "Meist gibt die Auslobung den Maßstab vor. 1:200 ist typisch für einzelne Gebäude, 1:500 für den städtebaulichen Zusammenhang, 1:1000 für große Areale. Steht nichts in den Unterlagen, beraten wir Sie vor der Anfrage kostenfrei zum passenden Maßstab." },
  { q: "Warum sind Wettbewerbsmodelle weiß?", a: "Weiß und monochrom lenkt den Blick der Jury auf Volumen, Proportion und Setzung statt auf Farbe. Üblich ist der Bestand in Grau und der neue Entwurf in Weiß. Wir arbeiten in durchgehendem Weiß mit matter, nicht spiegelnder Oberfläche, so wie es der Jury-Standard erwartet." },
  { q: "Was kostet ein Wettbewerbsmodell?", a: "Das hängt von Maßstab, Umgebung, Anzahl der Varianten und Express-Wunsch ab. Als Richtwert: ab €420 im Maßstab 1:200 und ab €780 im Maßstab 1:500, ab einem einzelnen Modell. Ein verbindliches Festpreis-Angebot bekommen Sie innerhalb von 6 Stunden." },
  { q: "Wie kurzfristig geht ein Wettbewerbsmodell noch?", a: "In 24 bis 48 Stunden, wenn die Daten druckreif sind und das Modell in gängiger Größe liegt. Der klassische Modellbau braucht dafür Wochen. Rufen Sie bei knapper Deadline direkt an, dann prüfen wir das Zeitfenster sofort: +43 676 5517197." },
  { q: "Bekomme ich mehrere Entwurfs-Varianten als Modell?", a: "Ja, und das ist ein echter Vorteil gegenüber klassischem Modellbau. Mehrere Varianten laufen parallel zu gleichen Stückkosten, ohne Aufpreis für die zweite oder dritte Variante. So liegen A, B und C zum direkten Vergleich nebeneinander auf dem Tisch." },
  { q: "Was ist der Unterschied zwischen Wettbewerbs- und Präsentationsmodell?", a: "Ein Wettbewerbsmodell ist auf die Jury-Situation zugeschnitten: monochrom, reduziert, auf den Entwurf konzentriert. Ein Präsentationsmodell darf farbiger und detailreicher sein, etwa für Bauherren oder Vermarktung. Beides fertigen wir aus dem gleichen Workflow." },
  { q: "Welche Daten braucht ihr, und was ist mit dem Umgebungsmodell?", a: "Ihr 3D-Modell in STL, OBJ, STEP oder 3MF, oder die native Datei aus ArchiCAD, Revit, Rhino, SketchUp oder Vectorworks. Die Umgebung ergänzen wir aus Lage- und Höhendaten, wenn ein Umgebungs- oder Städtebaumodell dazu soll." },
];

const Wettbewerbsmodell = () => (
  <>
    <Navigation />
    <main className="min-h-screen bg-background pt-28 md:pt-32">

      {/* HERO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[8%] right-[8%] w-[520px] h-[520px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute bottom-[8%] left-[8%] w-[380px] h-[380px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wettbewerbsmodell · Architektur · 3D-Druck</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-8">
              <span className="block">Wettbewerbsmodell.</span>
              <span className="block text-gradient mt-2">Jurytauglich, rechtzeitig vor der Abgabe.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              Ihr <strong className="text-foreground">Wettbewerbsmodell aus dem 3D-Druck</strong>, fertig in 24 bis 48 Stunden statt in Wochen.
              Weiße matte Jury-Optik, mehrere Entwurfs-Varianten parallel, ab einem Stück. Der Abgabetermin steht und das Modell fehlt noch?
              Angebot in <strong className="text-foreground">6 Stunden</strong>.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["Express 24 bis 48h", "Angebot in 6h", "Weiße Jury-Optik", "Varianten parallel", "ab Stück 1", "★5,0 Google"].map((b) => (
                <span key={b} className="mono text-[10px] font-bold uppercase tracking-[0.15em] rounded-full border border-border bg-muted/40 px-3 py-1.5 text-foreground/80">{b}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                <Link href="#kontakt">Wettbewerbsmodell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base border-2" asChild>
                <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Bei knapper Deadline anrufen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPRESS · Kern-USP */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 mb-8">
                <Zap className="w-4 h-4" /><span className="mono text-[10px] font-bold uppercase tracking-[0.2em]">Der Unterschied</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-8 leading-[0.95]">24 bis 48 Stunden.<br />Nicht 6 Wochen.</h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                <p className="text-lg text-background/80 leading-relaxed">
                  Der klassische Modellbau braucht für ein Wettbewerbsmodell zwei bis zehn Wochen. Genau dann, wenn die Abgabe näher rückt
                  und der Entwurf noch feilt, ist das ein Problem. Aus dem 3D-Druck geht es in Tagen: Sie schicken die Daten,
                  bekommen in 6 Stunden ein Festpreis-Angebot, und das Modell steht rechtzeitig auf dem Tisch.
                </p>
                <p className="text-lg text-background/80 leading-relaxed">
                  Je früher die Daten da sind, desto entspannter wird es. Aber auch wenn das Fenster eng ist, lohnt der Anruf:
                  bei druckreifen Daten und gängiger Größe ist die Fertigung in <strong className="text-background">24 bis 48 Stunden</strong> machbar.
                  Wir sagen Ihnen am Telefon ehrlich, ob sich der Termin ausgeht.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VARIANTEN */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in">
              <Copy className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">Mehrere Varianten parallel.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der größte Vorteil gegenüber klassischem Modellbau: mehrere Entwurfs-Varianten laufen zum gleichen Stückaufwand nebeneinander.
                Kein Aufpreis für die zweite oder dritte Variante.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                So liegen A, B und C zum direkten Vergleich auf dem Tisch, für die interne Entscheidung im Team oder für die Diskussion mit der Jury.
                Eine Entwurfs-Entscheidung fällt leichter, wenn man die Varianten nebeneinander in der Hand hält.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="grid grid-cols-3 gap-3">
                {["A", "B", "C"].map((v, i) => (
                  <MagneticCard key={v} className="rounded-2xl border-2 border-border bg-card h-full">
                    <div className="p-5 md:p-7 text-center">
                      <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{v}</p>
                      <p className="mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Variante</p>
                      <div className="mt-4 h-16 rounded-lg bg-muted/60 border border-border" style={{ opacity: 1 - i * 0.18 }} />
                    </div>
                  </MagneticCard>
                ))}
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4 text-center">Gleiche Stückkosten · direkter Vergleich</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MASSSTAB-TABELLE */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <div className="flex items-center gap-3 mb-4"><Ruler className="w-5 h-5 text-primary" /><p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Der richtige Maßstab</p></div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Welcher Maßstab fürs Wettbewerbsmodell?</h2>
              <p className="text-muted-foreground max-w-2xl mt-4">Meist gibt die Auslobung den Maßstab vor. Falls nicht, sind das die üblichen Optionen.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {massstaebe.map((s, i) => (
                <AnimatedSection key={s.m} animation="slide-up" delay={i * 90}>
                  <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full transition-all duration-500 hover:border-primary/30">
                    <div className="p-8">
                      <p className="mono text-4xl font-bold text-foreground mb-1">{s.m}</p>
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-4">{s.typ}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.text}</p>
                      <p className="text-lg font-bold text-foreground">{s.ab}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">Richtwerte für ein einzelnes Modell. Verbindliches Festpreis-Angebot in 6 Stunden nach Datei-Upload, oder direkt im <Link href="/kostenrechner" className="text-primary font-semibold hover:underline">Kostenrechner</Link>.</p>
          </div>
        </div>
      </section>

      {/* WEISSE OPTIK + Foto */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <div className="rounded-3xl overflow-hidden border-2 border-border">
                <img src="/cases/ortsmodell-uebersicht.jpg" alt="Weißes Architekturmodell aus mattem PLA mit Bebauung und Gelände, Beispiel für die monochrome Jury-Optik" className="w-full h-auto object-cover" loading="lazy" />
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3">Beispiel: weißes mattes Architekturmodell aus PLA</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={100}>
              <Palette className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">Warum Wettbewerbsmodelle weiß sind.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Weiß und monochrom lenkt den Blick der Jury auf das Wesentliche: Volumen, Proportion und die Setzung im Ort.
                Farbe würde nur ablenken. Deshalb ist Weiß seit jeher der Standard im Architektur-Wettbewerb.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Üblich ist der Bestand in einem zurückhaltenden Grau und der neue Entwurf in reinem Weiß, damit sofort lesbar ist,
                was neu dazukommt. Wir arbeiten mit <strong className="text-foreground">matter, nicht spiegelnder Oberfläche</strong>,
                damit auf den Jury-Fotos nichts glänzt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wenn es farbiger und detailreicher sein soll, etwa für die spätere Vermarktung, ist das ein
                <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline"> Präsentationsmodell</Link>. Beides kommt aus dem gleichen Workflow.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Von der Datei zum Modell</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Vier Schritte bis zur Abgabe.</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ablauf.map((a, i) => (
                <AnimatedSection key={a.t} animation="slide-up" delay={i * 70}>
                  <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full">
                    <div className="p-7">
                      <a.icon className="w-8 h-8 text-primary mb-5" />
                      <p className="font-bold text-lg mb-2 tracking-tight">{a.t}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO-BODY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wettbewerbsmodell im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8">Das Modell entscheidet mit</h2>
              <div className="space-y-6 text-base leading-[1.85] text-foreground/85">
                <p>Ein <strong>Wettbewerbsmodell</strong> ist mehr als eine Beilage zur Abgabe. In der Jury-Sitzung liegt es auf dem Tisch, während die Pläne an der Wand hängen. Ein Modell braucht keine Erklärung: der Entwurf ist im Zusammenhang mit dem Ort sofort erfassbar, mit Höhen, Nachbarschaft und Setzung. Genau deshalb lohnt es sich, das <strong>Wettbewerbsmodell aus dem 3D-Druck</strong> nicht dem Zufall der letzten Tage zu überlassen.</p>
                <p>Der 3D-Druck spielt im Wettbewerb zwei Stärken aus, die der klassische Modellbau nicht bietet: <strong>Geschwindigkeit</strong> und <strong>parallele Varianten</strong>. Ein Wettbewerbsmodell in 24 bis 48 Stunden nimmt den Druck aus der Deadline, und mehrere Entwurfs-Varianten zum gleichen Stückaufwand machen die Entscheidung im Team leichter. Dazu kommt die weiße matte Optik, die die Jury erwartet, in durchgehendem Weiß mit sauberen Kanten.</p>
                <p>Für den Kontext um den Entwurf herum fertigen wir das passende <Link href="/architekturmodelle/stadtmodell" className="text-primary font-semibold hover:underline">Umgebungs- und Städtebaumodell</Link> aus Lage- und Höhendaten. Wer zuerst wissen möchte, welcher Maßstab und welches Material sinnvoll sind, findet die Grundlagen im <Link href="/ratgeber/architekturmodell-guide" className="text-primary font-semibold hover:underline">Architekturmodell-Ratgeber</Link>. Alles rund um Modelle für Architekten steht auf der Hauptseite <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link>. Unser Standort ist Gunskirchen in Oberösterreich, geliefert wird ins gesamte DACH-Gebiet.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Häufige Fragen</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Wettbewerbsmodell, klar beantwortet.</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 40}>
                  <div className="rounded-2xl border-2 border-border bg-background p-6 md:p-8">
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

export default Wettbewerbsmodell;
