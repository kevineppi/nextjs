import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, Calculator, Wrench, Truck, Zap, Phone, ArrowRight, BadgeCheck, ShieldCheck } from "lucide-react";

const steps = [
  { num: "01", title: "CAD-Daten oder Skizze senden", time: "2 Min", icon: Target, desc: "STL, STEP, IGES oder native CAD-Dateien. Kein 3D-Modell? Skizze, Foto oder technische Zeichnung reichen für den Start. Auf Wunsch NDA vor Datenaustausch." },
  { num: "02", title: "Konstruktions-Check & Festpreis", time: "< 6h", icon: Calculator, desc: "Wir prüfen Wandstärken, Stützstrukturen, Anisotropie. Bei Optimierungspotenzial melden wir uns vorher. Verbindliches Festpreisangebot mit Materialempfehlung und Lieferdatum." },
  { num: "03", title: "Fertigung & Qualitätskontrolle", time: "1–14 Tage", icon: Wrench, desc: "FDM startet sofort nach Auftragsbestätigung. SLA und SLS gehen an den passenden Partner. Statusupdates und auf Wunsch Druckfotos zur laufenden Qualitätskontrolle." },
  { num: "04", title: "Versand oder persönliche Zustellung", time: "1–3 Tage", icon: Truck, desc: "Versand österreichweit, EU-weit und auf Anfrage weltweit. In Oberösterreich auf Wunsch persönliche Zustellung. Tracking-Nummer per E-Mail. Folge-Iteration sofort möglich." },
];

const checklist = [
  { item: "CAD-Datei oder Skizze", sub: "STL, STEP – oder ein Foto" },
  { item: "Verfahren-Empfehlung?", sub: "FDM, SLA oder SLS" },
  { item: "Stückzahl", sub: "Von 1 bis 200+ möglich" },
  { item: "Material & Anwendung", sub: "Funktion, Optik, Outdoor?" },
  { item: "Vertraulichkeit", sub: "NDA gewünscht?" },
  { item: "Wunschtermin", sub: "Express möglich" },
];

const PrototypingTimelineSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-in" className="mb-12">
          <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ihr Weg zum Prototyp</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-3">4 Schritte. 1 Ziel: Bauteil in der Hand.</h2>
          <p className="text-muted-foreground max-w-lg">Standardlieferzeit 3–5 Werktage. Express in 24 Stunden möglich. Iteration in Tagen statt Wochen.</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent" />

              {steps.map((s, i) => (
                <AnimatedSection key={s.num} animation="slide-up" delay={i * 120}>
                  <div className="flex gap-5 mb-8 relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative z-10">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg tracking-tight">{s.title}</h3>
                        <span className="mono text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{s.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Express + NDA + persönliche Zustellung */}
            <AnimatedSection animation="fade-in" delay={500}>
              <div className="grid sm:grid-cols-3 gap-3 mt-4">
                <div className="border-2 border-primary/20 rounded-2xl p-5 bg-primary/[0.02] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-primary block mb-0.5">Express 24h</strong>
                    <span className="text-muted-foreground">+50% Aufpreis</span>
                  </div>
                </div>
                <div className="border-2 border-primary/20 rounded-2xl p-5 bg-primary/[0.02] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-primary block mb-0.5">NDA-fähig</strong>
                    <span className="text-muted-foreground">Vertrauliche Abwicklung</span>
                  </div>
                </div>
                <div className="border-2 border-primary/20 rounded-2xl p-5 bg-primary/[0.02] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-primary block mb-0.5">Persönliche Zustellung</strong>
                    <span className="text-muted-foreground">OÖ ab €40, Aufpreis</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <a href="tel:+436765517197" className="text-primary font-semibold hover:underline inline-flex items-center gap-1.5 text-sm"><Phone className="w-4 h-4" />+43 676 5517197 – direkt mit dem Inhaber sprechen</a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className="border-2 border-primary/20 rounded-2xl p-6 md:p-8 bg-primary/[0.02] h-fit lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <p className="text-lg font-bold">Ihre Checkliste</p>
              </div>
              {checklist.map((c, i) => (
                <div key={i} className="flex gap-3 mb-4 last:mb-0">
                  <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="mono text-[10px] font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{c.item}</p>
                    <p className="text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-6 rounded-full py-6" asChild>
                <Link href="#kontakt">Anfrage starten <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default PrototypingTimelineSection;
