import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticCard from "@/components/MagneticCard";
import StickyCTA from "@/components/landing/StickyCTA";
import {
  ArrowRight, Phone, Zap, Clock, CheckCircle2, XCircle, PackageCheck, FileCheck
} from "lucide-react";

const timeline = [
  { t: "Anfrage", d: "Datei oder Kurzbeschreibung" },
  { t: "Angebot in 6h", d: "verbindlicher Festpreis" },
  { t: "Fertigung 24-48h", d: "Druck, auch über Nacht" },
  { t: "Versand", d: "DACH-weit oder Zustellung OÖ" },
];

const geht = [
  "Daten sind druckreif (keine Geometrie-Korrekturen mehr nötig)",
  "Modell in gängiger Größe, bis etwa 50 cm Maximalkante",
  "Standard-Material verfügbar (PLA, PETG, ABS, ASA)",
  "Weiße oder einfarbige Optik, leichte Nachbearbeitung",
];

const gehtNicht = [
  "Sehr große, vielfach segmentierte Komplettmodelle",
  "Aufwändige Veredelung wie Aceton-Glättung oder mehrfarbige Profi-Lackierung",
  "Sonder-Materialien, die erst bestellt werden müssten",
];

const faqs = [
  { q: "Kann man ein Messemodell kurzfristig vor der Messe drucken lassen?", a: "Ja. Bei druckreifen Daten und gängiger Größe fertigen wir ein Messemodell in 24 bis 48 Stunden. Das verbindliche Festpreis-Angebot kommt innerhalb von 6 Stunden. Der klassische Modellbau braucht dafür meist 4 bis 10 Wochen." },
  { q: "Wie schnell ist ein Express-Messemodell wirklich fertig?", a: "Nach Ihrer Freigabe drucken wir in 24 bis 48 Stunden, bei sehr kleinen Modellen teils schneller. Danach Versand ins gesamte DACH-Gebiet, in Oberösterreich auf Wunsch persönliche Zustellung noch am Tag." },
  { q: "Was kostet die Express-Fertigung?", a: "Auf den Standardpreis kommt ein Express-Aufschlag: rund 15 Prozent für 48 Stunden, rund 30 Prozent für 24 Stunden. Den genauen Festpreis nennen wir im Angebot innerhalb von 6 Stunden, ab einem einzelnen Stück." },
  { q: "Was lässt sich nicht beschleunigen?", a: "Sehr große, vielfach segmentierte Modelle und aufwändige Veredelung (Aceton-Glättung, mehrfarbige Profi-Lackierung) brauchen ihre Zeit. Auch Sonder-Materialien, die erst bestellt werden müssten. Wir sagen Ihnen ehrlich, was im Zeitfenster geht." },
  { q: "Bis wann muss ich bestellen, damit es rechtzeitig ist?", a: "Je früher, desto entspannter. Aber auch bei knapper Deadline lohnt der Anruf: Wir prüfen sofort, ob sich der Termin ausgeht, und reservieren bei Zusage direkt einen Express-Slot. Telefon: +43 676 5517197." },
];

const MessemodellExpress = () => (
  <>
    <style>{`
      @keyframes fillTrack { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      .express-fill { transform-origin: left center; animation: fillTrack 1.8s cubic-bezier(0.65,0,0.35,1) both; }
      @keyframes nodePop { 0% { opacity: 0; transform: scale(0.4); } 100% { opacity: 1; transform: scale(1); } }
      .express-node { animation: nodePop 0.4s ease-out backwards; }
      @media (prefers-reduced-motion: reduce) { .express-fill, .express-node { animation: none !important; opacity: 1 !important; transform: none !important; } }
    `}</style>
    <Navigation />
    <main className="min-h-screen bg-background pt-28 md:pt-32">

      {/* HERO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[8%] right-[6%] w-[520px] h-[520px] rounded-full bg-primary/[0.07] blur-[120px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4" /><span className="mono text-[10px] font-bold uppercase tracking-[0.2em]">Messemodell · Express</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.04em] mb-8">
              <span className="block">Messemodell Express.</span>
              <span className="block text-gradient mt-2">Wenn die Messe nicht wartet.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
              Ihr <strong className="text-foreground">Messemodell kurzfristig vor der Messe</strong>, gefertigt in 24 bis 48 Stunden statt in Wochen.
              Angebot in <strong className="text-foreground">6 Stunden</strong>, ab einem Stück. Der klassische Modellbau ist längst ausgebucht,
              der 3D-Druck liefert noch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                <Link href="#kontakt">Express anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base border-2" asChild>
                <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Deadline knapp? Anrufen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE: Speed-Timeline */}
      <section className="py-16 md:py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-background/60 mb-10 text-center">Von der Anfrage bis zum Versand</p>
              <div className="relative">
                <div className="absolute left-0 right-0 top-3 h-0.5 bg-background/15" />
                <div className="express-fill absolute left-0 right-0 top-3 h-0.5 bg-primary" />
                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                  {timeline.map((s, i) => (
                    <div key={s.t} className="text-center">
                      <div className="express-node w-6 h-6 rounded-full bg-primary mx-auto mb-4 ring-4 ring-background" style={{ animationDelay: `${400 + i * 400}ms` }} />
                      <p className="font-bold text-sm md:text-base mb-1">{s.t}</p>
                      <p className="text-xs text-background/60 leading-snug">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SPEED-VERGLEICH */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-4 leading-[0.95]">24-48 Stunden.<br />Nicht 4 bis 10 Wochen.</h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">Der klassische Messemodellbau plant in Wochen. Wenn Ihr Termin näher rückt und das Modell noch fehlt, ist der 3D-Druck oft der einzige Weg, der noch rechtzeitig liefert.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedSection animation="slide-up">
                <MagneticCard className="rounded-3xl border-2 border-primary bg-primary/[0.03] h-full">
                  <div className="p-8">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Express-3D-Druck bei ekdruck</p>
                    <p className="text-5xl font-bold text-foreground mb-2">24-48h</p>
                    <p className="text-muted-foreground leading-relaxed">Angebot in 6 Stunden, Fertigung über Nacht, Versand oder persönliche Zustellung. Ab einem Stück.</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full">
                  <div className="p-8">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Klassischer Modellbau</p>
                    <p className="text-5xl font-bold text-foreground/40 mb-2">4-10 Wochen</p>
                    <p className="text-muted-foreground leading-relaxed">Handarbeit, lange Vorlaufzeiten, oft Monate vor der Messe ausgebucht. Kurzfristig meist keine Option mehr.</p>
                  </div>
                </MagneticCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* WANN EXPRESS GEHT / NICHT GEHT */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ehrlich gesagt</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Wann Express funktioniert.</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedSection animation="slide-up">
                <div className="rounded-3xl border-2 border-border bg-background p-8 h-full">
                  <p className="font-bold text-lg mb-5 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> In 24-48h machbar</p>
                  <ul className="space-y-3">
                    {geht.map((g) => (
                      <li key={g} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>{g}</span></li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="rounded-3xl border-2 border-border bg-background p-8 h-full">
                  <p className="font-bold text-lg mb-5 flex items-center gap-2"><XCircle className="w-5 h-5 text-muted-foreground" /> Braucht mehr Zeit</p>
                  <ul className="space-y-3">
                    {gehtNicht.map((g) => (
                      <li key={g} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug"><XCircle className="w-4 h-4 text-muted-foreground/70 mt-0.5 shrink-0" /><span>{g}</span></li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ECHTER EXPRESS-FALL */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 mb-6">
                <PackageCheck className="w-4 h-4" /><span className="mono text-[10px] font-bold uppercase tracking-[0.2em]">Echter Fall</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">Auftrag Sonntag, Versand Dienstag.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein Auftraggeber brauchte kurzfristig ein komplettes Modell für einen Termin. Zwischen Auftrag und Deadline lagen zwei Tage,
                das Wochenende inklusive. Der Auftrag kam am Sonntagabend, das fertige Modell ging Dienstagmittag raus, rechtzeitig auf den Tisch.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Möglich war das, weil zwei Dinge zusammenkamen: eine schnelle, saubere Datenaufbereitung und Druck, der durchgehend lief, auch über Nacht.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> <strong className="text-foreground">unter 2 Tage</strong></span>
                <span className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-primary" /> Wochenende inklusive</span>
                <Link href="/cases/ortsmodell-express-zwei-tage" className="text-primary font-semibold hover:underline">Fall ansehen →</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="rounded-3xl overflow-hidden border-2 border-border">
                <img src="/cases/ortsmodell-express-uebersicht.jpg" alt="Kurzfristig in unter zwei Tagen gefertigtes 3D-gedrucktes Modell aus weißem PLA, rechtzeitig zum Termin" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEO-BODY */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Express-Messemodell im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8">Kurzfristig zum Messemodell</h2>
              <div className="space-y-6 text-base leading-[1.85] text-foreground/85">
                <p>Ein <strong>Messemodell express drucken zu lassen</strong> heißt, eine harte Deadline noch zu retten. Wenn der Messetermin steht und das Modell fehlt, ist der 3D-Druck der schnellste Weg: Angebot in 6 Stunden, Fertigung in 24 bis 48 Stunden. Wir fertigen Eye-Catcher und maßstabsgetreue Anschauungsmodelle für den Messestand, auch kurzfristig und ab einem einzelnen Stück.</p>
                <p>Damit Express funktioniert, brauchen wir druckreife Daten und ein Modell in gängiger Größe. Rufen Sie bei knapper Deadline direkt an, dann prüfen wir sofort, ob sich der Termin ausgeht, und sagen ehrlich, was im Zeitfenster machbar ist. Für die Standard-Fertigung ohne Eile geht es zur <Link href="/messemodelle" className="text-primary font-semibold hover:underline">Messemodelle-Hauptseite</Link>, Preisbeispiele stehen im <Link href="/ratgeber/kosten-guide" className="text-primary font-semibold hover:underline">Kosten-Ratgeber</Link>. Unser Standort ist Gunskirchen in Oberösterreich, geliefert wird in ganz DACH.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Express, klar beantwortet.</h2>
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

export default MessemodellExpress;
