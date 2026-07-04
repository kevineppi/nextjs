'use client'

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mountain, Layers, FileStack, Ruler, Building2, CheckCircle2 } from "lucide-react";

const formate = [
  { k: "DGM / DTM (Rasterdaten)", v: "ÖKO-1m-DTM, ALS-Raster, GeoTIFF, XYZ-Punktraster" },
  { k: "Höhenlinien", v: "DXF, DWG, Shapefile aus dem Vermessungsplan" },
  { k: "Punktwolken", v: "ALS-Laserscan, LAS/LAZ, e57" },
  { k: "GIS-Exporte", v: "QGIS, ArcGIS, direkt als Mesh oder Höhenraster" },
];

const anwendungen = [
  { icon: Building2, t: "Hangbebauung", d: "Das geplante Gebäude im echten Geländeschnitt zeigen, für Bauverhandlung und Nachbarschaftsgespräch. Der Eingriff in den Hang wird sofort lesbar." },
  { icon: Mountain, t: "Alpine Lagen & Tourismus", d: "Skigebiete, Wanderregionen, Schutzhütten im Reliefmodell. Für Besucherzentren, Tourismusbüros und Investorenpräsentationen." },
  { icon: Layers, t: "Hochwasserschutz & Wasserbau", d: "Fließwege, Retentionsflächen und Schutzbauten am Reliefmodell, farbcodiert. Macht abstrakte Gutachten für Behördentermine greifbar." },
  { icon: FileStack, t: "Städtebau & Erschließung", d: "Quartiers- und Erschließungsplanungen mit echtem Gelände, Maßstab 1:1000 bis 1:2000. Straßen, Kanten und Bebauung im Kontext." },
];

const faqs = [
  { q: "Welche Daten brauchen Sie für ein Geländemodell?", a: "Am besten ein DGM oder DTM als Rasterdaten (z.B. das amtliche ÖKO-1m-DTM), Höhenlinien aus dem Vermessungsplan (DXF/DWG) oder eine ALS-Punktwolke. Auch QGIS- und ArcGIS-Exporte verarbeiten wir direkt. Wenn Sie unsicher sind, schicken Sie uns, was vorhanden ist, wir sagen Ihnen, ob es reicht." },
  { q: "In welchem Maßstab entsteht ein Geländemodell?", a: "Für Einzelgrundstücke meist 1:500, für Quartiers- und Erschließungsplanungen 1:1000 bis 1:2000. Bei sehr flachem Gelände setzen wir auf Wunsch eine Höhenüberhöhung (Faktor 2 bis 3) ein, damit das Relief lesbar bleibt." },
  { q: "Kann ein Gebäude auf das Geländemodell gesetzt werden?", a: "Ja. Wir setzen Ihr geplantes Gebäude als abnehmbares Element auf das Reliefmodell, ideal für die Hangbebauungs-Analyse. So lässt sich der Bestand mit und ohne Neubau vergleichen." },
  { q: "Wie detailgenau ist das gedruckte Relief?", a: "Das Modell bildet die Höhendaten maßstabsgetreu ab. Die Auflösung richtet sich nach der Qualität Ihrer Ausgangsdaten: ein 1m-DTM ergibt ein deutlich feineres Relief als grobe Höhenlinien im 10m-Abstand." },
  { q: "Wie lange dauert ein Geländemodell?", a: "Je nach Größe und Detailgrad 5 bis 10 Werktage. Bei knappen Behördenterminen ist ein Express-Weg möglich. Das verbindliche Festpreisangebot erhalten Sie innerhalb von 6 Stunden nach Datenupload." },
  { q: "Können mehrere Farben oder Schichten dargestellt werden?", a: "Ja. Farbcodierte Geologie-Schichten, Fließrichtungen oder Nutzungszonen sind möglich, ebenso eingelaserte Beschriftungen für Wege, Flurnamen oder Höhenkoten." },
];

const GelaendemodellGuide = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-28 md:pt-32">

      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in">
              <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Ratgeber · Architekturmodelle</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.03em] mb-6">
                Geländemodell aus DGM-Daten: so entsteht ein detailgenaues Relief im 3D-Druck
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Aus Höhendaten wird ein anfassbares Landschaftsmodell. Wir zeigen, welche Daten Sie brauchen,
                wie aus DGM, DTM oder Höhenlinien ein maßstabsgetreues Geländemodell entsteht und wann sich das für
                Bauverhandlung, Städtebau oder Wasserbau auszahlt.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold" asChild>
                  <Link href="/architekturmodelle">Zu den Architekturmodellen <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-2" asChild>
                  <a href="tel:+436765517197"><Phone className="mr-2 w-4 h-4" /> Direkt anrufen</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WAS IST DGM */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-base leading-[1.85] text-foreground/85">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-2">Was ist ein DGM- oder DTM-Geländemodell?</h2>
            <p>
              Ein <strong>digitales Geländemodell (DGM)</strong>, im Vermessungswesen auch <strong>DTM</strong> genannt, beschreibt die
              nackte Erdoberfläche als Höhendaten, ohne Gebäude und Bewuchs. Genau diese Daten übersetzen wir in ein physisches
              Reliefmodell: Jeder Höhenwert wird maßstabsgetreu in die dritte Dimension gebracht, sodass Sie die Landschaft nicht nur
              sehen, sondern begreifen.
            </p>
            <p>
              Der Vorteil gegenüber einer Bildschirm-Visualisierung: Ein Modell auf dem Tisch lässt sich aus jedem Winkel betrachten,
              gemeinsam bereden und anfassen. In Bauverhandlungen und Bürgerbeteiligungen ist das oft der Unterschied zwischen einer
              abstrakten Debatte und einer schnellen Einigung.
            </p>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">So entsteht Ihr Geländemodell</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { n: "01", t: "Daten senden", d: "Sie schicken uns DGM, Höhenlinien oder eine Punktwolke. Wir prüfen Auflösung und Ausschnitt und melden uns mit einem Festpreis in 6 Stunden." },
                { n: "02", t: "Aufbereitung", d: "Wir bereinigen die Daten, legen Maßstab und Ausschnitt fest und arbeiten auf Wunsch Höhenüberhöhung, Sockel und Beschriftung ein." },
                { n: "03", t: "Fertigung & Lieferung", d: "Segmentierter Druck für große Reliefs mit unsichtbaren Stoßkanten, Finish nach Wunsch, Versand DACH-weit oder persönliche Übergabe." },
              ].map((s) => (
                <AnimatedSection key={s.n} animation="slide-up">
                  <div className="rounded-3xl bg-card border-2 border-border p-8 h-full">
                    <p className="mono text-3xl font-bold text-primary/30 mb-3">{s.n}</p>
                    <h3 className="font-bold text-lg mb-2">{s.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMATE */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-8">Welche Datenformate wir verarbeiten</h2>
            <div className="rounded-3xl border-2 border-border overflow-hidden bg-background">
              {formate.map((f, i) => (
                <div key={f.k} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 p-5 ${i > 0 ? 'border-t border-border' : ''}`}>
                  <p className="font-bold text-foreground sm:w-72 shrink-0">{f.k}</p>
                  <p className="text-sm text-muted-foreground">{f.v}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Kein passendes Format zur Hand? Schicken Sie uns, was vorliegt, wir sagen Ihnen ehrlich, ob es für ein gutes Relief reicht.</p>
          </div>
        </div>
      </section>

      {/* ANWENDUNGEN */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Wofür sich ein Geländemodell lohnt</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {anwendungen.map((a) => (
                <AnimatedSection key={a.t} animation="slide-up">
                  <div className="rounded-3xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 p-8 h-full">
                    <a.icon className="w-9 h-9 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">{a.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MASSSTAB */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-base leading-[1.85] text-foreground/85">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-2">Maßstab und Höhenüberhöhung</h2>
            <p>
              Für Einzelgrundstücke arbeiten wir meist im Maßstab <strong>1:500</strong>, für Quartiers- und Erschließungsplanungen
              in <strong>1:1000 bis 1:2000</strong>. Ist das Gelände sehr flach, wirkt ein maßstabstreues Relief schnell unscheinbar.
              Dann setzen wir eine <strong>Höhenüberhöhung</strong> (typisch Faktor 2 bis 3) ein, damit Hänge, Senken und Böschungen
              deutlich ablesbar bleiben. Die Überhöhung vermerken wir sichtbar am Sockel, damit nichts falsch gelesen wird.
            </p>
            <div className="flex items-start gap-3 rounded-2xl bg-primary/5 border border-primary/20 p-6">
              <Ruler className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <p className="text-sm">
                Tipp: Nennen Sie uns Ihren Verwendungszweck (Behördentermin, Investorenpräsentation, Ausstellung). Danach richten
                wir Maßstab, Überhöhung und Finish aus, statt einfach nur Daten zu drucken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-10">Häufige Fragen zu Geländemodellen</h2>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] mb-5">Sie haben Höhendaten und ein Projekt?</h2>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Schicken Sie uns Ihr DGM oder Ihre Höhenlinien. Sie bekommen ein maßstabsgetreues Geländemodell und
              innerhalb von 6 Stunden ein verbindliches Festpreisangebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 font-semibold" asChild>
                <Link href="/architekturmodelle">Architekturmodelle ansehen <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 border-2 border-background/30 text-background hover:bg-background/10" asChild>
                <Link href="/kostenrechner">Kosten berechnen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default GelaendemodellGuide;
