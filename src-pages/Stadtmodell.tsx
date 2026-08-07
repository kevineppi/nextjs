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
  ArrowRight, Phone, Building2, Landmark, Users, Ruler,
  Layers, Clock, Zap, MapPin
} from "lucide-react";

const zielgruppen = [
  { icon: Landmark, titel: "Gemeinden & Kommunen", text: "Ein Ortsmodell auf dem Tisch bei der Gemeindepräsentation oder Bürgerbeteiligung. Der ganze Ort mit Geländeverlauf, Nachbarschaft und Wegen, sofort erfassbar, ohne dass ein Plan erklärt werden muss." },
  { icon: Building2, titel: "Bauträger & Immobilienentwickler", text: "Ein Vermarktungsmodell des Quartiers, das ein neues Vorhaben im Zusammenhang mit der Umgebung zeigt. Greifbar am Verkaufstisch, im Schauraum oder auf der Messe." },
  { icon: Users, titel: "Stadtplaner & Planungsbüros", text: "Städtebauliche Entwürfe und Bebauungspläne als physisches Modell, das die Diskussion trägt, die man im Termin haben will. Varianten vergleichbar nebeneinander." },
  { icon: MapPin, titel: "Architekten (Umgebungsmodell)", text: "Das Umgebungsmodell zum Wettbewerbsbeitrag: der Kontext um den eigenen Entwurf herum, maßstabsgetreu und in durchgehendem Weiß, damit der Neubau im Ort verortet ist." },
];

const ablauf = [
  { num: "01", titel: "Maßstab & Umfang klären", text: "1:500 für Orts- und Quartiersmodelle, 1:1000 für größere Areale. Wir klären mit Ihnen, welcher Ausschnitt aufs Modell gehört und wo die sinnvolle Grenze liegt." },
  { num: "02", titel: "Daten aufbereiten", text: "Aus Flur- und Grenzplänen, amtlichen LoD2-Gebäudemodellen und DGM1-Geländedaten (auch CityGML, Kataster oder Vermessung) erstellen wir ein druckfertiges 3D-Modell: Gelände mit Höhenschichten, Straßen und Baukörper als saubere Volumen. Diese Umwandlung in ein 3D-Modell übernehmen wir bei allen Modellen, wenn nötig." },
  { num: "03", titel: "Segmentiert drucken", text: "Große Modelle drucken wir in mehreren Teilen und setzen sie von Hand zusammen. Die Trennkanten liegen dort, wo ohnehin eine Kante ist, danach sieht sie niemand mehr." },
  { num: "04", titel: "Fertig zur Präsentation", text: "Durchgehend weiß, sauber zusammengesetzt und kontrolliert, rechtzeitig zum Termin. Auf Wunsch mit persönlicher Zustellung in Oberösterreich." },
];

const faqs = [
  { q: "Wer druckt Stadtmodelle in Österreich?", a: "In Österreich druckt ekdruck (Gunskirchen, Oberösterreich) Stadtmodelle aus dem 3D-Druck. Wir wandeln amtliche Kartendaten selbst in ein maßstabsgetreues Modell um, fertigen Quartiers-, Orts- und Stadtmodelle ab 1 Stück, liefern österreichweit, erstellen das Angebot in 6 Stunden und im Express in 24 bis 48 Stunden. Bewertung: 5,0 Sterne auf Google." },
  { q: "Was kostet ein Städtebaumodell oder Stadtmodell?", a: "Das hängt von Fläche, Maßstab und Detailgrad ab. Nach einer kurzen Sichtung Ihrer Daten erhalten Sie ein verbindliches Festpreis-Angebot innerhalb von 6 Stunden. Einen ersten Richtwert liefert der Kostenrechner." },
  { q: "Welcher Maßstab ist für ein Stadtmodell sinnvoll?", a: "1:500 für Orts-, Quartiers- und Bebauungsmodelle, 1:1000 für größere Areale und Stadtausschnitte. Im großen Maßstab gewinnt man nichts durch mehr Detail, sondern durch Weglassen: durchgehendes Weiß, saubere Dachkanten und ein Geländeverlauf, der stimmt." },
  { q: "Wie groß kann ein Stadtmodell sein?", a: "Es gibt keine feste Größengrenze. Große Modelle setzen wir aus mehreren Teilen zusammen, mit unsichtbaren Trennkanten. So sind auch großflächige Areale bis XXL als ein zusammenhängendes Modell möglich." },
  { q: "Welche Daten braucht ihr für ein Stadtmodell?", a: "Lage- und Höhendaten sowie Gebäudedaten, zum Beispiel CityGML/LoD-Datensätze, Kataster oder Vermessung. Wir bereiten die Daten druckfertig auf. Details dazu in unseren Ratgebern zu Massenmodell/LoD und zur Datenaufbereitung." },
  { q: "Wie schnell ist ein Stadtmodell fertig?", a: "Je nach Umfang wenige Tage. Ein komplettes Ortsmodell haben wir schon in unter zwei Tagen aufbereitet, gedruckt und pünktlich zum Sitzungstermin geliefert. Das Angebot kommt in 6 Stunden." },
  { q: "Wofür wird ein Stadtmodell eingesetzt?", a: "Für Gemeinde- und Bürgerpräsentationen, Bebauungspläne, die Vermarktung durch Bauträger und als Umgebungsmodell für Architektur-Wettbewerbe. Überall dort, wo ein Plan Erklärung braucht und ein Modell nicht." },
  { q: "Was ist der Unterschied zwischen LoD1 und LoD2?", a: "LoD1 sind einfache Klötzchen mit flachem Dach, LoD2 bildet die echten Dachformen ab. Für ein ruhiges Städtebaumodell reicht oft LoD1, für erkennbare Gebäude und Wettbewerbe lohnt sich LoD2. Wir wählen den Detailgrad passend zu Maßstab und Zweck und bereiten die Daten druckfertig auf." },
  { q: "Kann man ein Stadtmodell aus Wiener oder Grazer Geodaten drucken lassen?", a: "Ja. Für Wien, Graz, Linz oder Ihre Gemeinde holen und verarbeiten wir die amtlichen Geodaten selbst, eigene CAD-Daten brauchen Sie nicht. Sie nennen uns Ort und Ausschnitt, wir liefern das fertige, maßstabsgetreue Stadtmodell." },
  { q: "Was ist der Unterschied zwischen Stadtmodell und Geländemodell?", a: "Ein Stadtmodell zeigt die Bebauung, also Gebäude, Straßen und Quartiere im Zusammenhang. Ein Geländemodell zeigt die reine Landschaft aus Höhendaten, ohne Häuser. Oft kombinieren wir beides: die Bebauung auf dem passenden Geländeverlauf." },
];

const Stadtmodell = () => (
  <>
    <Navigation />
    <main className="min-h-screen bg-background pt-28 md:pt-32">

      {/* HERO */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[5%] left-[10%] w-[550px] h-[550px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Städtebaumodelle · Ortsmodelle · Umgebungsmodelle</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-[-0.04em] mb-8">
              <span className="block text-gradient">Städtebaumodell.</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-3 text-outline">Der ganze Ort auf dem Tisch.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stadt-, Orts- und Umgebungsmodelle aus dem 3D-Druck, aufgebaut auf <strong className="text-foreground">amtlichen Kartendaten</strong>. Maßstabsgetreu von <strong className="text-foreground">1:500 bis 1:1000</strong>,
                segmentiert bis XXL, in durchgehendem Weiß. Für Gemeinden, Bauträger und Planungsbüros, die ein Quartier oder den ganzen Ort
                greifbar auf den Tisch legen wollen. Angebot in <strong className="text-foreground">6 Stunden</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="#kontakt">Stadtmodell anfragen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-base border-2" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Anrufen</a>
                </Button>
              </div>
            </div>

            {/* Hero-Foto: echtes Ortsmodell */}
            <AnimatedSection animation="fade-in">
              <div className="rounded-3xl overflow-hidden border-2 border-border">
                <img
                  src="/cases/ortsmodell-uebersicht.jpg"
                  alt="Übersicht eines 3D-gedruckten Ortsmodells im Maßstab 1:500 mit Bebauung, Straßen und Gelände aus weißem PLA"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-3">Ortsmodell 1:500 · für eine Gemeindepräsentation gefertigt</p>
            </AnimatedSection>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-border mt-16">
              {[
                { v: "1:500", l: "Maßstab", s: "bis 1:1000" },
                { v: "XXL", l: "Größe", s: "segmentiert" },
                { v: "6h", l: "Angebot", s: "Festpreis" },
                { v: "5,0★", l: "Google", s: "31 Bewertungen" },
              ].map((s, i) => (
                <div key={s.l} className={`relative py-8 md:py-10 px-2 md:px-6 group ${i > 0 ? "border-l border-border" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""}`}>
                  <p className="mono text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{s.v}</p>
                  <div className="flex flex-wrap items-baseline gap-x-2 mt-3">
                    <p className="mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">{s.l}</p>
                    <p className="text-[10px] text-muted-foreground hidden md:inline">{s.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECHTES PROJEKT · Proof */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-12">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Echtes Projekt</p>
              <TextReveal text="Ortsmodell 1:500 für eine Gemeinde." className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-[-0.04em]" />
              <p className="text-muted-foreground max-w-2xl mt-6 text-base leading-relaxed">
                Ein Ortsmodell im Maßstab 1:500, A1-Format, aus sechs Teilen von Hand zusammengesetzt. Es lag bei der
                Gemeindepräsentation auf dem Tisch. Die Anwesenden haben sich drübergebeugt und das Vorhaben im Zusammenhang
                mit dem ganzen Ort sofort erfasst, mit Geländeverlauf, Nachbarschaft und Wegen.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: "/cases/ortsmodell-kirche.jpg", alt: "Kirche im Zentrum des 3D-gedruckten Ortsmodells im Maßstab 1:500" },
                { src: "/cases/ortsmodell-hoehenlinien.jpg", alt: "Detail des Ortsmodells mit Höhenlinien, Straßenverlauf und Gebäuden" },
                { src: "/cases/ortsmodell-tiefe.jpg", alt: "Blick über das weiße Ortsmodell, Häuser im Maßstab 1:500 aus PLA" },
              ].map((img, i) => (
                <AnimatedSection key={img.src} animation="slide-up" delay={i * 100}>
                  <div className="rounded-2xl overflow-hidden border border-border h-full">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
                <span><strong className="text-foreground">Maßstab</strong> 1:500</span>
                <span><strong className="text-foreground">Format</strong> 841 × 594 mm (A1)</span>
                <span><strong className="text-foreground">Material</strong> weißes PLA</span>
                <span><strong className="text-foreground">Aufbau</strong> 6 Teile, von Hand gefügt</span>
                <Link href="/cases/ortsmodell-1-500-gemeindepraesentation" className="text-primary font-semibold hover:underline">Ganzes Projekt ansehen →</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Wer ein Stadtmodell braucht</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">Ein Modell sagt mehr als der Plan.</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-4">
              {zielgruppen.map((z, i) => (
                <AnimatedSection key={z.titel} animation="slide-up" delay={i * 80}>
                  <MagneticCard className="rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="p-8 md:p-10">
                      <z.icon className="w-10 h-10 text-primary mb-6" />
                      <p className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{z.titel}</p>
                      <p className="text-muted-foreground leading-relaxed">{z.text}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-in" className="mb-16">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Von den Daten zum Modell</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">In vier Schritten.</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ablauf.map((a, i) => (
                <AnimatedSection key={a.num} animation="slide-up" delay={i * 70}>
                  <MagneticCard className="rounded-3xl border-2 border-border bg-card h-full transition-all duration-500">
                    <div className="p-6">
                      <p className="text-5xl font-bold text-foreground/[0.06] mb-3">{a.num}</p>
                      <p className="font-bold text-lg mb-2 tracking-tight">{a.titel}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                    </div>
                  </MagneticCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPRESS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 mb-6">
                <Zap className="w-4 h-4" /><span className="mono text-[10px] font-bold uppercase tracking-[0.2em]">Auch kurzfristig</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-6">Ein Ortsmodell in zwei Tagen.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Auftrag am Sonntagabend, Versand am Dienstagmittag: ein komplettes Ortsmodell in unter zwei Tagen aufbereitet
                und aus weißem PLA gedruckt, pünktlich zum Sitzungstermin. Der Druck lief durchgehend, auch über Nacht.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ein Plan wäre rechtzeitig gewesen, ein Modell zum Angreifen normalerweise nicht. Genau das war hier der Unterschied.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> <strong className="text-foreground">unter 2 Tage</strong> Turnaround</span>
                <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-primary" /> aufbereitet und gedruckt</span>
                <Link href="/cases/ortsmodell-express-zwei-tage" className="text-primary font-semibold hover:underline">Express-Projekt ansehen →</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { src: "/cases/ortsmodell-express-uebersicht.jpg", alt: "Fertiges 3D-gedrucktes Ortsmodell aus weißem PLA vor weißem Studio-Hintergrund" },
                  { src: "/cases/ortsmodell-express-relief.jpg", alt: "Reliefartiges Gelände des Ortsmodells mit Höhenschichten und Gebäuden aus dem 3D-Druck" },
                ].map((img) => (
                  <div key={img.src} className="rounded-2xl overflow-hidden border border-border">
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEO-BODY + CROSS-LINKS */}
      <section className="py-32 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Stadtmodell im Detail</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8">Was ein gutes Städtebaumodell ausmacht</h2>
              <div className="space-y-6 text-base leading-[1.85] text-foreground/85">
                <p>Ein <strong>Städtebaumodell</strong> zeigt nicht das einzelne Gebäude, sondern den Zusammenhang: den Ort, das Quartier, das Areal. Im <strong>Maßstab 1:500</strong> arbeiten wir Orts- und Bebauungsmodelle aus, im <strong>Maßstab 1:1000</strong> größere Stadtausschnitte. Entscheidend ist nicht möglichst viel Detail, sondern das richtige Weglassen: durchgehendes Weiß, saubere Dachkanten und ein Geländeverlauf, der stimmt.</p>
                <p>Sie nennen uns den Ort und den gewünschten Ausschnitt, wir holen und wandeln die <strong>amtlichen Kartendaten</strong> selbst in ein druckfertiges 3D-Modell um: Gebäude aus LoD2-Datensätzen, Gelände aus DGM1-Höhendaten. Eigene CAD-Daten brauchen Sie dafür nicht. So lässt sich ein <strong>Stadtmodell drucken lassen</strong>, vom einzelnen <strong>Quartiersmodell</strong> bis zur ganzen Stadt, ohne selbst Geodaten aufzubereiten. Am Bauträger-Tisch und in der Bürgerpräsentation schlägt ein greifbares Modell jede Visualisierung am Bildschirm.</p>
                <p>Große Modelle drucken wir <strong>segmentiert</strong> und setzen sie von Hand zusammen. Die Trennkanten liegen dort, wo ohnehin eine Kante ist. So sind auch großflächige Areale bis XXL als ein zusammenhängendes Modell möglich, ohne sichtbare Fugen. Als Grundlage dienen Lage- und Höhendaten sowie Gebäudedaten, etwa aus <Link href="/ratgeber/massenmodell-lod-gebaeudedaten" className="text-primary font-semibold hover:underline">CityGML/LoD-Datensätzen</Link>, Kataster oder Vermessung. Wie wir diese Daten druckfertig aufbereiten, steht im Ratgeber zur <Link href="/ratgeber/datenaufbereitung-architekturmodell" className="text-primary font-semibold hover:underline">Datenaufbereitung</Link>.</p>
                <p>Verwandte Modellarten aus dem gleichen Workflow: <Link href="/architekturmodelle" className="text-primary font-semibold hover:underline">Architekturmodelle</Link> für das einzelne Gebäude, das <Link href="/messemodelle" className="text-primary font-semibold hover:underline">Messemodell</Link> als Eye-Catcher am Stand, das <Link href="/architekturmodelle/gelaendemodell" className="text-primary font-semibold hover:underline">Geländemodell</Link> für reines Terrain und Relief, und der <Link href="/kostenrechner" className="text-primary font-semibold hover:underline">Kostenrechner</Link> für einen ersten Richtwert. Unser Standort ist Gunskirchen in Oberösterreich, geliefert wird ins gesamte DACH-Gebiet, auf Wunsch mit persönlicher Zustellung in OÖ.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">Stadtmodell, klar beantwortet.</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <AnimatedSection key={i} animation="slide-up" delay={i * 50}>
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

export default Stadtmodell;
