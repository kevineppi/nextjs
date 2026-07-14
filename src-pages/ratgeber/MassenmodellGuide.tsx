import SEOHead from "@/components/SEOHead";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/landing/CTASection";
import StickyCTA from "@/components/landing/StickyCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import AnimatedSection from "@/components/AnimatedSection";
import { Building2, Database, MapPin, AlertTriangle, CheckCircle, ExternalLink, Layers, Info } from "lucide-react";

/**
 * Ratgeber: Massenmodell, LoD1, LoD2 und woher die Gebäudedaten kommen.
 *
 * Ziel: Referenz-Artikel (linkable asset). Jede Zahl ist belegt, jede Quelle verlinkt.
 * Unsichere Angaben sind als solche gekennzeichnet. Keine erfundenen Fakten.
 */
const MassenmodellGuide = () => {
  const faqs = [
    {
      question: "Was ist ein Massenmodell?",
      answer:
        "Ein Massenmodell (auch Klötzchenmodell oder Baukörpermodell) zeigt Gebäude als reine Volumen ohne Fassadendetail. In der CityGML-Systematik entspricht das LoD1: die Außenhülle ist genau ein prismatischer Extrusionskörper mit flachem Dach. Keine Dachformen, keine Fenster, keine Anbauten. Für Städtebau, Umgebungsbebauung und Maßstäbe um 1:1000 bis 1:500 ist genau das die richtige Detailtiefe.",
    },
    {
      question: "Was ist der Unterschied zwischen LoD1 und LoD2?",
      answer:
        "LoD1 ist der Block: flaches Dach, ein Volumen, sonst nichts. LoD2 hat vereinfachte Dachformen (Sattel-, Walm-, Pultdach), getrennte Boden-, Wand- und Dachflächen und darf Anbauten ab etwa 0,5 m Tiefe enthalten. Fenster und Türen gibt es erst ab LoD3. Für ein Ortsmodell im Maßstab 1:500 macht LoD2 den entscheidenden optischen Unterschied, weil die Dachlandschaft den Charakter eines Ortes trägt.",
    },
    {
      question: "Gibt es in Österreich flächendeckende LoD2-Gebäudedaten?",
      answer:
        "Nein. Österreich hat seit Mai 2023 ein flächendeckendes LoD1: die DLM-Bauwerke des BEV mit rund 2,6 Millionen Gebäuden als Blockmodelle, unentgeltlich als GeoPackage. LoD2 mit Dachformen gibt es nur auf Stadtebene: Wien und Linz stellen es frei bereit, Graz verkauft es über den Geodaten-Shop. Deutschland hat dagegen mit LoD2-DE rund 58 Millionen Gebäude flächendeckend.",
    },
    {
      question: "Woher bekomme ich das Gelände dazu?",
      answer:
        "Für ganz Österreich vom BEV: das ALS-Höhenraster (Digitales Geländemodell) mit 1 m Rasterweite als GeoTIFF, unentgeltlich, ausdrücklich unter CC BY 4.0. Die Höhengenauigkeit beträgt laut BEV grundsätzlich plus/minus 0,50 m. Einzelne Bundesländer liefern feiner: Tirol etwa mit 50 cm.",
    },
    {
      question: "Welcher LoD reicht für welchen Maßstab?",
      answer:
        "Für 1:1000 und 1:500 (Städtebau, Umgebung, Massenmodell) reichen LoD1 und LoD2. Ab etwa 1:200 wird Fassadendetail sichtbar, dafür braucht es LoD3 oder direkt Ihre CAD- und BIM-Daten. Der Grund ist rechnerisch: bei 1:500 sind selbst 4 m große Objekte im Modell nur 8 mm groß, und alles unter etwa 40 cm real lässt sich als freistehende Wand ohnehin nicht mehr drucken.",
    },
    {
      question: "Kann ich OpenStreetMap-Daten verwenden?",
      answer:
        "Für Grundrisse ja, unter der ODbL-Lizenz mit Namensnennung. Das Problem sind die Höhen: die Attribute building:levels und height sind in der Fläche unvollständig. Ohne Höhe entsteht kein Massenmodell, sondern nur ein Grundriss. Für Österreich ist das BEV-DLM-Bauwerke-Paket die bessere Grundlage, weil dort Bodenhöhe sowie mittlere und maximale Objekthöhe mitgeliefert werden.",
    },
  ];

  const lodTable = [
    { lod: "LoD0", scale: "regional, Landschaft", roof: "ja (2D-Fußabdruck)", acc: "geringer als LoD1", note: "Grundrissebene, kein Volumen" },
    { lod: "LoD1", scale: "Stadt, Region", roof: "flach", acc: "5 / 5 m", note: "Das Massenmodell. Objekte ab 6 x 6 m / 3 m" },
    { lod: "LoD2", scale: "Stadt, Stadtteile, Projekte", roof: "differenzierte Dachformen", acc: "2 / 2 m", note: "Objekte ab 4 x 4 m / 2 m. Keine Fenster" },
    { lod: "LoD3", scale: "Stadtteile, Architekturmodelle (außen)", roof: "reale Objektform", acc: "0,5 / 0,5 m", note: "Fenster und Türen als eigene Objekte" },
    { lod: "LoD4", scale: "Innenraum-Modelle", roof: "reale Objektform", acc: "0,2 / 0,2 m", note: "In CityGML 3.0 gestrichen" },
  ];

  const atSources = [
    {
      name: "BEV DLM-Bauwerke",
      what: "Gebäude als Blockmodelle (LoD1), rund 2,6 Mio. Objekte, mit Bodenhöhe sowie mittlerer und maximaler Objekthöhe",
      coverage: "flächendeckend Österreich",
      format: "GeoPackage (GPKG), WMS",
      cost: "unentgeltlich",
      url: "https://www.bev.gv.at/Services/Produkte/Digitales-Landschaftsmodell/Bauwerke.html",
      badge: "LoD1",
    },
    {
      name: "BEV ALS-Höhenraster (DGM)",
      what: "Digitales Geländemodell aus Airborne Laserscanning, 1 m Rasterweite. Höhengenauigkeit laut BEV grundsätzlich plus/minus 0,50 m",
      coverage: "flächendeckend Österreich",
      format: "GeoTIFF, COG",
      cost: "unentgeltlich, CC BY 4.0",
      url: "https://www.bev.gv.at/Services/Produkte/Digitales-Gelaendehoehenmodell/ALS-Hoehenraster.html",
      badge: "Gelände",
    },
    {
      name: "Stadt Wien, Generalisiertes Dachmodell",
      what: "LOD2.1 mit Dachformen, rund 200.000 Gebäude. Halbautomatisch abgeleitet, die Dachkanten sind nicht direkt gemessen",
      coverage: "gesamtes Stadtgebiet Wien",
      format: "CityGML, DXF-Dreiecksnetz",
      cost: "frei, CC BY 4.0",
      url: "https://www.wien.gv.at/stadtplanung/generalisiertes-dachmodell",
      badge: "LoD2",
    },
    {
      name: "Stadt Wien, Detailliertes Dachmodell",
      what: "LOD2.4, rund 81.000 Gebäude. Ausdrücklich nicht flächendeckend, sondern projektbezogen erzeugt. Rauchfänge und Dachluken werden nicht modelliert",
      coverage: "Teilgebiete",
      format: "DXF, DWG, XML",
      cost: "kostenpflichtig (MA 41)",
      url: "https://www.wien.gv.at/stadtentwicklung/stadtvermessung/geodaten/dachmodell/produkt-lod2.html",
      badge: "LoD2",
    },
    {
      name: "Stadt Linz, 3D-Geodaten",
      what: "Gebäude und Gelände in LoD2, gekachelt nach Katasterblatt",
      coverage: "Stadtgebiet Linz",
      format: "CityGML",
      cost: "kostenlos, CC BY 4.0, auch kommerziell",
      url: "https://www.linz.at/stadtentwicklung/linz3d.php",
      badge: "LoD2",
    },
    {
      name: "Stadt Graz, 3D-Stadtmodell",
      what: "LoD2-Dachmodell, automatisch aus photogrammetrisch ausgewerteten Dachlandschaften erzeugt",
      coverage: "Stadtgebiet Graz",
      format: "SHP, DWG, FBX",
      cost: "kostenpflichtig über den Geodaten-Shop",
      url: "https://www.graz.at/cms/beitrag/10295977/8115682/Geodaten_D.html",
      badge: "LoD2",
    },
    {
      name: "basemap.at (geoland.at)",
      what: "Österreichweites DGM und DOM mit 1 m als Dienst",
      coverage: "alle 9 Bundesländer",
      format: "WMTS",
      cost: "OGD Österreich, CC BY 4.0",
      url: "https://basemap.at/",
      badge: "Gelände",
    },
    {
      name: "Land Tirol, Laserscandaten",
      what: "DGM und DOM mit 50 cm, zusätzlich 1 m XYZ und Höhenlinien als DXF",
      coverage: "Tirol",
      format: "GeoTIFF, XYZ, DXF",
      cost: "kostenfrei (Punktwolken kostenpflichtig)",
      url: "https://www.tirol.gv.at/sicherheit/geoinformation/geodaten-tiris/laserscandaten/",
      badge: "Gelände",
    },
  ];

  const dachVergleich = [
    {
      land: "Österreich",
      lod1: "flächendeckend (BEV DLM-Bauwerke, rund 2,6 Mio. Gebäude, gratis)",
      lod2: "nur Stadtebene: Wien und Linz frei, Graz kostenpflichtig. Kein flächendeckendes LoD2",
      terrain: "BEV ALS-DGM 1 m, CC BY 4.0, plus/minus 0,50 m",
    },
    {
      land: "Deutschland",
      lod1: "vorhanden",
      lod2: "flächendeckend als LoD2-DE, rund 58 Mio. Gebäude. Achtung: die BKG-Version ist kein Open Data, sondern nur für Behörden. Die Bundesländer geben LoD2 aber sehr wohl offen ab (NRW unter dl-de/zero-2-0, Bayern unter CC BY 4.0 seit 01.01.2023)",
      terrain: "landesweit über die Landesvermessung",
    },
    {
      land: "Schweiz",
      lod1: "vorhanden",
      lod2: "swissBUILDINGS3D 3.0 Beta mit Dachformen und Dachüberständen, aber ohne Gauben. Genauigkeit plus/minus 30 bis 50 cm, damit deutlich besser als die CityGML-LoD2-Vorgabe von 2 m. Noch nicht landesweit in CityGML (19 Kantone plus Stadt Zürich)",
      terrain: "swisstopo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Massenmodell, LoD1 und LoD2: welche Gebäudedaten brauche ich? | ekdruck"
        description="Referenz für Architektur- und Städtebaumodelle: LoD-Stufen nach CityGML, und wo es in Österreich, Deutschland und der Schweiz die Gebäude- und Geländedaten wirklich gibt. Mit Lizenzen, Formaten und Kosten."
        keywords="Massenmodell, LoD1, LoD2, CityGML, Baukörpermodell, Gebäudedaten Österreich, Städtebaumodell, BEV DLM-Bauwerke, Architekturmodell 3D-Druck"
        path="/ratgeber/massenmodell-lod-gebaeudedaten"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          { name: "Massenmodell und LoD", url: "/ratgeber/massenmodell-lod-gebaeudedaten" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <Navigation />

      {/* HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Ratgeber, Daten und Maßstab
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.0] tracking-[-0.03em] mb-6">
              Massenmodell, LoD1, LoD2: welche Gebäudedaten brauche ich?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Die wichtigste Nachricht vorweg: <strong className="text-foreground">Österreich hat kein
              flächendeckendes LoD2.</strong> Es hat seit Mai 2023 ein flächendeckendes LoD1. Wer ein Ortsmodell
              oder Städtebaumodell plant, sollte das wissen, bevor er Daten sucht. Dieser Artikel sagt, welche
              Detailstufe was enthält, welche für welchen Maßstab reicht, und wo die Daten in Österreich,
              Deutschland und der Schweiz tatsächlich liegen. Mit Lizenz, Format und Kosten.
            </p>
          </div>
        </div>
      </section>

      {/* WAS IST EIN MASSENMODELL */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">Was ein Massenmodell ist</h2>
              <p className="text-base leading-[1.85] text-foreground/85 mb-4">
                Das Massenmodell, auch Klötzchenmodell oder Baukörpermodell, zeigt Gebäude als reine Volumen.
                Keine Fassade, keine Fenster, kein Dachdetail. In der Sprache der CityGML-Norm ist das{" "}
                <strong>LoD1</strong>. Der Umsetzungsleitfaden der SIG3D beschreibt es so: die generalisierte
                Außenhülle wird durch genau einen prismatischen Extrusionskörper dargestellt. Boden und Dach
                horizontal, Wände vertikal. Sonst nichts.
              </p>
              <p className="text-base leading-[1.85] text-foreground/85">
                Das klingt nach wenig und ist genau richtig. Bei einem Ortsmodell im Maßstab 1:500 trägt nicht das
                Fensterdetail die Aussage, sondern die Körnung: wie hoch, wie dicht, wie steht das Neue im
                Bestand. Genau dafür ist das Massenmodell gemacht. Wer mehr Detail will, sieht weiter unten, ab
                wann sich das überhaupt lohnt.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LOD-TABELLE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">Die LoD-Stufen nach CityGML</h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-8">
                Die Werte stammen aus dem OGC CityGML 2.0 Encoding Standard, Tabelle 3. Die Spalte Genauigkeit
                meint die absolute 3D-Punktgenauigkeit in Lage und Höhe.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/60">
                    <tr className="text-left">
                      <th className="p-4 font-bold">Stufe</th>
                      <th className="p-4 font-bold">Typischer Maßstabsbereich</th>
                      <th className="p-4 font-bold">Dach</th>
                      <th className="p-4 font-bold">Genauigkeit</th>
                      <th className="p-4 font-bold">Anmerkung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lodTable.map((r) => (
                      <tr key={r.lod} className="border-t border-border">
                        <td className="p-4 font-bold text-primary whitespace-nowrap">{r.lod}</td>
                        <td className="p-4 text-muted-foreground">{r.scale}</td>
                        <td className="p-4 text-muted-foreground">{r.roof}</td>
                        <td className="p-4 font-mono whitespace-nowrap">{r.acc}</td>
                        <td className="p-4 text-muted-foreground">{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Card className="mt-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6 flex gap-4">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Ehrlichkeits-Fußnote, die selten jemand mitliefert</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Die Norm selbst sagt über diese Genauigkeitswerte woertlich: &bdquo;The accuracy requirements
                      given in this standard are debatable and are to be considered as discussion proposals.&ldquo;
                      Wer die Tabelle als hartes Gesetz verkauft, hat sie nicht gelesen. Sie ist ein
                      Orientierungsrahmen, kein Prüfmaßstab.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 grid md:grid-cols-2 gap-5">
                <Card>
                  <CardContent className="p-6">
                    <p className="font-bold mb-2">Was LoD2 wirklich enthält</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Getrennte Boden-, Wand- und Dachflächen, vereinfachte Dachformen, Anbauten ab etwa 0,5 m
                      Tiefe (Balkone, Loggien). Gauben und Kamine sind laut Norm erlaubt.{" "}
                      <strong className="text-foreground">
                        Das amtliche deutsche LoD2-DE enthält sie trotzdem nicht.
                      </strong>{" "}
                      Wer LoD2 bestellt, bekommt also oft weniger, als der Standard hergäbe. Fenster und Türen
                      gibt es in keinem Fall, die kommen erst ab LoD3.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="font-bold mb-2">CityGML 3.0: LoD4 ist gestrichen</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      In CityGML 3.0 gibt es nur noch LoD0 bis LoD3. Innenräume lassen sich jetzt in jeder Stufe
                      modellieren, damit war eine eigene Innenraum-Stufe überflüssig. Wer noch von LoD4 spricht,
                      arbeitet mit der 2.0er-Systematik.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DATENQUELLEN OESTERREICH */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
                  Woher die Daten in Österreich kommen
                </h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-8">
                Das ist der Teil, an dem die meisten Projekte hängen bleiben. Hier die Quellen, die es wirklich
                gibt, mit Lizenz, Format und Kosten. Stand der Recherche: Juli 2026. Prüfen Sie die Lizenz vor
                der Nutzung immer selbst, die Bedingungen ändern sich.
              </p>

              <div className="grid gap-4">
                {atSources.map((s) => (
                  <Card key={s.name} className="hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="mono text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                            {s.badge}
                          </span>
                          <h3 className="text-lg font-bold">{s.name}</h3>
                        </div>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline font-semibold inline-flex items-center gap-1 shrink-0"
                        >
                          Zur Quelle <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.what}</p>
                      <div className="grid sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span className="mono uppercase tracking-wider text-muted-foreground/70">Abdeckung</span>
                          <p className="font-semibold mt-0.5">{s.coverage}</p>
                        </div>
                        <div>
                          <span className="mono uppercase tracking-wider text-muted-foreground/70">Format</span>
                          <p className="font-semibold mt-0.5">{s.format}</p>
                        </div>
                        <div>
                          <span className="mono uppercase tracking-wider text-muted-foreground/70">Kosten</span>
                          <p className="font-semibold mt-0.5">{s.cost}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-6 flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2">OpenStreetMap: Grundrisse ja, Höhen nein</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OSM liefert unter der ODbL brauchbare Gebäudegrundrisse. Die Höhenattribute{" "}
                      <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">building:levels</code> und{" "}
                      <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">height</code> sind in der
                      Fläche aber unvollständig. Ohne Höhe entsteht kein Massenmodell, sondern nur ein Umriss.
                      Für Österreich ist das BEV-Paket die bessere Grundlage, weil dort Bodenhöhe sowie mittlere
                      und maximale Objekthöhe mitgeliefert werden.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DACH-VERGLEICH */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
                  Österreich, Deutschland, Schweiz im Vergleich
                </h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-8">
                Wer aus Deutschland gewohnt ist, dass LoD2 einfach da ist, erlebt in Österreich eine
                Überraschung. Und wer in Deutschland beim Bund sucht statt beim Land, findet ausgerechnet dort
                kein Open Data.
              </p>

              <div className="space-y-5">
                {dachVergleich.map((c) => (
                  <Card key={c.land}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">{c.land}</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <span className="mono text-[10px] font-bold uppercase tracking-wider bg-muted text-foreground/70 px-2 py-1 rounded h-fit shrink-0 w-16 text-center">
                            LoD1
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{c.lod1}</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="mono text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded h-fit shrink-0 w-16 text-center">
                            LoD2
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{c.lod2}</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="mono text-[10px] font-bold uppercase tracking-wider bg-muted text-foreground/70 px-2 py-1 rounded h-fit shrink-0 w-16 text-center">
                            Gelände
                          </span>
                          <p className="text-muted-foreground leading-relaxed">{c.terrain}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WELCHER LOD FUER WELCHEN MASSSTAB */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedSection animation="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em]">
                  Welche Stufe reicht für welchen Maßstab?
                </h2>
              </div>
              <p className="text-base leading-[1.85] text-foreground/85 mb-6">
                Die Norm gibt in der Zeile &bdquo;Model scale description&ldquo; eine grobe Richtung vor: LoD1 für
                Stadt und Region, LoD2 für Stadtteile und Projekte, LoD3 für Architekturmodelle. Die harte
                Begründung liefert aber erst die Rechnung.
              </p>

              <div className="space-y-4">
                {[
                  {
                    s: "1:1000 und 1:500",
                    lod: "LoD1 oder LoD2 reicht vollständig",
                    why: "Bei 1:500 entspricht 1 m Realität 2 mm im Modell. Ein 4 m großes Objekt, also die Untergrenze dessen, was LoD2 überhaupt enthält, ist im Modell 8 mm groß. Feinere Daten zu beschaffen bringt hier nichts, weil der Drucker sie ohnehin nicht ausgeben könnte.",
                  },
                  {
                    s: "1:200",
                    lod: "Grenzbereich, LoD2 wird knapp",
                    why: "Dachrinnen (0,5 mm) und Gehsteigkanten (0,6 mm) werden gerade darstellbar. Wer Fassadenstruktur will, muss aus den Geodaten raus und in CAD oder BIM rein.",
                  },
                  {
                    s: "1:100 und feiner",
                    lod: "CAD, BIM oder LoD3",
                    why: "Ab hier trägt die Fassade die Aussage. LoD2-Geodaten enthalten schlicht keine Fenster. Sie liefern die Umgebung, das Hauptobjekt kommt aus Ihrem Planungsmodell.",
                  },
                ].map((r) => (
                  <Card key={r.s}>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="mono text-sm font-bold text-primary">{r.s}</span>
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="font-bold">{r.lod}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.why}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <p className="font-bold mb-2">Der Punkt, an dem sich Daten und Physik treffen</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bei 1:500 enthalten LoD2-Daten ohnehin nichts, was feiner wäre als 4 m Objektgröße. Und der
                    FDM-Druck kann alles unter etwa 40 cm real gar nicht als freistehende Wand ausgeben.{" "}
                    <strong className="text-foreground">
                      Datenlimit und Drucklimit liegen bei diesem Maßstab auf demselben Niveau.
                    </strong>{" "}
                    Wer bessere Daten kauft, kauft Auflösung, die nie im Modell ankommt. Die vollständige
                    Rechnung dazu steht im{" "}
                    <Link href="/ratgeber/datenaufbereitung-architekturmodell" className="text-primary hover:underline font-semibold">
                      Ratgeber zur Datenaufbereitung
                    </Link>
                    . (Diese Schlussfolgerung ist unsere Ableitung aus den Einzelwerten, keine Aussage der Norm.)
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* QUELLEN */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">Quellen</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { t: "OGC CityGML 2.0 Encoding Standard (12-019), Tabelle 3", u: "https://docs.ogc.org/is/12-019/12-019.pdf" },
                { t: "OGC CityGML 3.0 Part 1: Conceptual Model (20-010)", u: "https://docs.ogc.org/is/20-010/20-010.html" },
                { t: "SIG3D Modeling Guide for 3D Objects, Part 2: Buildings (LoD1, LoD2, LoD3)", u: "https://en.wiki.quality.sig3d.org/index.php/Modeling_Guide_for_3D_Objects_-_Part_2:_Modeling_of_Buildings_(LoD1,_LoD2,_LoD3)" },
                { t: "BEV, DLM-Bauwerke", u: "https://www.bev.gv.at/Services/Produkte/Digitales-Landschaftsmodell/Bauwerke.html" },
                { t: "BEV, ALS-Höhenraster", u: "https://www.bev.gv.at/Services/Produkte/Digitales-Gelaendehoehenmodell/ALS-Hoehenraster.html" },
                { t: "Stadt Wien, Generalisiertes Dachmodell", u: "https://www.wien.gv.at/stadtplanung/generalisiertes-dachmodell" },
                { t: "Stadt Linz, Linz3D", u: "https://www.linz.at/stadtentwicklung/linz3d.php" },
                { t: "Stadt Graz, Geodaten", u: "https://www.graz.at/cms/beitrag/10295977/8115682/Geodaten_D.html" },
                { t: "BKG, 3D-Gebäudemodelle LoD2-DE", u: "https://gdz.bkg.bund.de/index.php/default/3d-gebaudemodelle-lod2-deutschland-lod2-de.html" },
                { t: "Geobasis NRW, LoD2 GML (dl-de/zero-2-0)", u: "https://www.opengeodata.nrw.de/produkte/geobasis/3dg/lod2_gml/" },
                { t: "Geodaten Bayern, LoD2 (CC BY 4.0)", u: "https://geodaten.bayern.de/opengeodata/OpenDataDetail.html?pn=lod2" },
                { t: "swisstopo, swissBUILDINGS3D 3.0 Beta", u: "https://www.swisstopo.admin.ch/en/landscape-model-swissbuildings3d-3-0-beta" },
                { t: "Biljecki, Ledoux, Stoter (2016): An improved LOD specification for 3D building models", u: "https://3d.bk.tudelft.nl/lod/" },
              ].map((s) => (
                <li key={s.u} className="flex gap-2">
                  <span className="text-primary">&middot;</span>
                  <a href={s.u} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                    {s.t}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-6 leading-relaxed">
              Nicht abschließend verifiziert: ob die DLM-Bauwerke des BEV ausdrücklich unter CC BY 4.0 stehen
              (die Produktseite nennt keine explizite CC-Lizenz, für das ALS-Höhenraster ist CC BY 4.0 dagegen
              woertlich belegt). Für Salzburg, Innsbruck, Klagenfurt und die übrigen Bundesländer haben wir
              kein offenes LoD2 gefunden. Das ist kein Beweis, dass keines existiert.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-[-0.02em]">Häufige Fragen</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <Card key={f.question}>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{f.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default MassenmodellGuide;
