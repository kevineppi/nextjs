'use client'

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Eye, Hand, Timer, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";

const gruende = [
  { icon: Hand, t: "Haptik schlägt Pixel", d: "Ein Modell darf angefasst, gedreht und aus jedem Winkel betrachtet werden. Ein Bildschirm bleibt Distanz. Was man in die Hand nehmen kann, bleibt im Kopf." },
  { icon: Timer, t: "Stopp in unter drei Sekunden", d: "Auf dem Gang entscheidet sich in Sekunden, wer stehen bleibt. Ein ungewöhnliches, greifbares Objekt stoppt den Laufschritt zuverlässiger als jedes Video im Dauerloop." },
  { icon: MessageSquare, t: "Gesprächsöffner statt Monolog", d: "Ein Modell lädt zur Frage ein. Statt Ihr Team einen Pitch herunterbeten zu lassen, beginnt das Gespräch beim Besucher: Wie funktioniert das? Genau da wollen Sie hin." },
  { icon: Sparkles, t: "Fotomotiv, das geteilt wird", d: "Ein starker Blickfang wird fotografiert und weiterverbreitet. So wirkt Ihr Stand über die Messehalle hinaus, ganz ohne Media-Budget." },
];

const eyecatcher = [
  { t: "Vergrößertes Produktmodell", d: "Ihr Produkt filigran, aber überlebensgroß. Details, die sonst niemand sieht, werden zum Hingucker." },
  { t: "Funktionsmodell", d: "Bewegliche Mechanik zum Vorführen: Dreh-, Schiebe- oder Klappbewegung. Der stärkste Hebel für lange Standgespräche." },
  { t: "Schnittmodell", d: "Das aufgeschnittene Produkt zeigt das Innenleben. Erklärt in Sekunden, was ein Datenblatt nie schafft." },
  { t: "Großmodell bis über 2 m", d: "Segmentiert gefertigt, aus der Halle heraus sichtbar. Der Anker, an dem Ihr Stand erkannt wird." },
];

const faqs = [
  { q: "Warum stoppt ein Modell mehr Besucher als ein Bildschirm?", a: "Auf einer Messe sind Bildschirme allgegenwärtig, das Auge blendet sie aus. Ein greifbares, ungewöhnliches Objekt bricht dieses Muster. Es darf angefasst werden, erzeugt Neugier und wird zum Gesprächsanlass, während ein Video im Vorbeigehen kaum registriert wird." },
  { q: "Wie groß sollte ein Blickfang-Modell sein?", a: "Das hängt vom Ziel ab. Ein vergrößertes Produktmodell auf dem Tisch reicht oft, um Gespräche zu starten. Ein Großmodell bis über 2 m macht den Stand aus der Halle heraus erkennbar. Wir beraten zur Größe passend zu Standfläche und Budget." },
  { q: "Was kostet ein Eyecatcher für den Messestand?", a: "Tischgroße Modelle beginnen im unteren dreistelligen Bereich, große Blickfänge mit Mechanik oder Beleuchtung liegen höher. Sie erhalten innerhalb von 6 Stunden ein verbindliches Festpreisangebot." },
  { q: "Wie schnell ist ein Messemodell fertig?", a: "Standard 5 bis 10 Werktage, bei knappen Messeterminen ist Express möglich. Je früher die CAD-Daten kommen, desto entspannter die Fertigung. Für wiederkehrende Roadshows drucken wir aus robusterem Material und liefern Transportlösungen mit." },
  { q: "Lässt sich ein Modell mehrfach einsetzen?", a: "Ja. Für mehrere Messen fertigen wir aus widerstandsfähigem Material und liefern stabile Transportboxen. So begleitet Sie derselbe Blickfang über eine ganze Saison." },
];

const MessestandBlickfangGuide = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-28 md:pt-32">

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ratgeber · Messemodelle</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
                Blickfang am Messestand: warum Maßstabsmodelle mehr Besucher stoppen als Bildschirme
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Auf jeder Messe kämpfen Dutzende Stände um dieselben Sekunden Aufmerksamkeit. Wer stehen bleibt, entscheidet
                sich im Vorbeigehen. Warum ein greifbares Modell dabei gewinnt und wie Sie den richtigen Eyecatcher wählen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold" asChild>
                  <Link href="/messemodelle">Zu den Messemodellen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-2" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Direkt anrufen</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-base leading-[1.85] text-foreground/85">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-2">Das Aufmerksamkeits-Problem am Stand</h2>
            <p>
              Ein Messebesucher läuft an Ihrem Stand in wenigen Sekunden vorbei. In dieser Zeitspanne entscheidet sich, ob er
              stehen bleibt oder weitergeht. Bildschirme, Roll-ups und Werbespots sind auf jeder Messe im Überfluss vorhanden,
              das Auge hat gelernt, sie zu überblättern.
            </p>
            <p>
              Ein <strong>physisches Modell</strong> durchbricht dieses Muster. Es ist echt, dreidimensional und darf angefasst
              werden. Genau diese Greifbarkeit ist der Grund, warum ein guter Blickfang mehr Menschen stoppt als der schönste
              Bildschirm, und warum aus dem Stoppen ein Gespräch wird.
            </p>
          </div>
        </div>
      </section>

      {/* WARUM MODELL */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Warum ein Modell zieht</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {gruende.map((g) => (
                <AnimatedSection key={g.t} animation="slide-up">
                  <div className="rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 p-8 h-full">
                    <g.icon className="w-9 h-9 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{g.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.d}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EYECATCHER-TYPEN */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">Welcher Blickfang passt zu Ihnen?</h2>
            <p className="text-muted-foreground mb-10">Vier bewährte Typen, je nach Produkt, Standfläche und Ziel. Eine ausführliche Übersicht finden Sie auf der <Link href="/messemodelle" className="text-primary font-semibold hover:underline">Messemodelle-Seite</Link>.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {eyecatcher.map((e) => (
                <div key={e.t} className="rounded-3xl bg-background border-2 border-border p-8">
                  <Eye className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Häufige Fragen zum Messe-Blickfang</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold text-base mb-2 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-5">Ihr nächster Messeauftritt braucht einen Blickfang?</h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Erzählen Sie uns von Ihrem Produkt und Ihrer Messe. Wir schlagen den passenden Blickfang vor und liefern
              innerhalb von 6 Stunden ein verbindliches Festpreisangebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold" asChild>
                <Link href="/messemodelle">Messemodelle ansehen <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-2 border-background/30 text-background hover:bg-background/10" asChild>
                <Link href="/kontakt">Anfrage stellen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default MessestandBlickfangGuide;
