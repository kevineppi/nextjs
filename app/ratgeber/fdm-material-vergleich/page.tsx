import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Calculator, CheckCircle2, XCircle, Phone,
  Thermometer, Gauge, FlaskConical, Leaf, ShieldAlert, AlertTriangle,
  Sun, Droplets, Wrench, Star,
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/landing/Breadcrumbs'
import AuthorByline from '@/components/AuthorByline'
import { buildDachAlternates, STANDARD_ROBOTS } from '@/lib/seo'
import { materials, decisionMatrix } from '@/data/materialVergleichContent'
import { BRAND } from '@/data/brandVoice'

// ─────────────────────────────────────────────────────────────────
//   METADATA & SEO
// ─────────────────────────────────────────────────────────────────

const TITLE = 'PLA vs PETG vs ASA vs ABS · FDM-Material-Vergleich 2026 | ekdruck'
const DESCRIPTION =
  'Wissenschaftlicher Material-Vergleich für FDM-3D-Druck: PLA, PETG, ASA, ABS, TPU, PA-CF. Normwerte nach ISO 527/178/75, Druck-Parameter, Anwendungs-Entscheidungsmatrix. Aus der ekdruck-Werkstatt.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildDachAlternates('/ratgeber/fdm-material-vergleich'),
  keywords: [
    'pla vs petg', 'petg vs pla', 'asa vs petg', 'pla vs asa', 'abs vs petg',
    'fdm material vergleich', '3d druck material', 'pla petg asa abs',
    'welches 3d druck material', 'material vergleich 3d druck',
    'pla materialdaten', 'petg materialdaten', 'asa materialdaten', 'pa-cf 3d druck',
    'tpu shore härte', 'fdm filament vergleich', 'iso 527 zugfestigkeit',
    'hdt wärmeformbeständigkeit pla petg', 'glasübergangstemperatur filament',
  ].join(', '),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/fdm-material-vergleich',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    publishedTime: '2026-05-27T00:00:00.000Z',
    modifiedTime: '2026-05-27T00:00:00.000Z',
    authors: ['Kevin Eppensteiner'],
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'FDM-Material-Vergleich PLA PETG ASA ABS · ekdruck' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: STANDARD_ROBOTS,
}

// ─────────────────────────────────────────────────────────────────
//   FAQs · strukturierte Q&A für AI-Citation + Rich Snippets
// ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'Was ist der Hauptunterschied zwischen PLA und PETG?',
    answer:
      'PLA ist steifer, detailreicher und einfacher zu drucken, aber spröde bei Schlag und verformt bereits ab ~55 °C. PETG ist mechanisch zäher (höhere Schlagzähigkeit), bleibt bis ~75 °C formstabil und übersteht Außenanwendungen besser, druckt aber tendenziell mit leichtem Stringing. Für Indoor-Modelle mit höchster Detailtreue: PLA. Für mehrfach genutzte und mechanisch beanspruchte Modelle: PETG.',
  },
  {
    question: 'Was ist besser: ASA oder PETG für Outdoor-Anwendungen?',
    answer:
      'ASA ist die erste Wahl für dauerhafte Outdoor-Modelle, weil sein chemischer Aufbau (Acrylester statt Butadien wie bei ABS) gegen UV-Strahlung stabil ist und über Jahre keine Farb- oder Festigkeitsabbau zeigt. PETG bietet mittlere UV-Stabilität · UV-stabilisierte PETG-Varianten sind eine günstigere Alternative für Outdoor-Einsatz unter 12 Monaten, ASA für längere Lebensdauer.',
  },
  {
    question: 'Warum benötigt ABS einen geschlossenen Drucker?',
    answer:
      'ABS hat einen hohen thermischen Schrumpf beim Abkühlen, was zu Warping (Verzug an den Ecken) führt. Ein geschlossenes Druckergehäuse stabilisiert die Umgebungstemperatur auf 40-55 °C und verlangsamt das Abkühlen kontrolliert. Zusätzlich sondert ABS bei Drucktemperatur Styrol-haltige Dämpfe ab, die in geschlossenen Räumen ohne Absaugung problematisch sind.',
  },
  {
    question: 'Wann lohnt sich PA-CF gegenüber PETG oder ABS?',
    answer:
      'PA-CF (Carbon-Faser-verstärktes Polyamid) hat etwa das 2- bis 3-fache Zugfestigkeitsniveau von PETG/ABS und eine Wärmeformbeständigkeit bis ~180 °C. Es ist die richtige Wahl für Funktionsmuster, die mechanisch belastet werden, in DV/PV-Tests laufen oder bei Wärme maßhaltig bleiben müssen. Der Mehrpreis (€80-€150/kg) und der Bedarf einer gehärteten Düse rechtfertigen sich nur bei Funktions-Anforderungen · für reine Show-Modelle ist PA-CF überdimensioniert.',
  },
  {
    question: 'Welches Material eignet sich für Lebensmittelkontakt?',
    answer:
      'Sowohl PLA als auch PETG sind als Polymer prinzipiell lebensmittelechte Kunststoff-Familien. ABER: der 3D-Druck-Prozess selbst (Schichtstruktur mit Mikro-Kavitäten, Düsen-Materialwanderung) macht selbst lebensmittelechte Filamente nicht automatisch lebensmittelecht im fertigen Druck. Für echten Lebensmittelkontakt: lebensmittelechte Filament-Variante MIT zusätzlicher lebensmittelechter Beschichtung (z.B. Epoxidharz-Versiegelung) ODER Edelstahl-Hülle als Lebensmittelkontakt-Fläche. Für Custom-Keksausstecher haben wir die FDA-zertifizierte PETG-Variante einsetzt · Reinigung in Spülmaschine möglich, Mikrowellen-Kontakt vermeiden.',
  },
  {
    question: 'Was bedeutet HDT bei 0.45 MPa, und warum ist es wichtiger als die Glasübergangstemperatur?',
    answer:
      'HDT (Heat Deflection Temperature) nach ISO 75-2 misst, bei welcher Temperatur sich ein genormter Prüfkörper unter definierter Last (0,45 MPa für die übliche Niedriglast-Methode) um 0,25 mm verformt. Das ist praxisrelevanter als die Glasübergangstemperatur (Tg), weil HDT die reale mechanische Belastung berücksichtigt. Faustregel für ek-druck-Praxis: Wenn ein Modell im Auto-Innenraum im Sommer (~60-70 °C) maßhaltig bleiben muss, braucht es ein Material mit HDT >75 °C · PETG, ASA, ABS oder PA-CF.',
  },
  {
    question: 'Ist PLA wirklich biologisch abbaubar · und was bedeutet das praktisch?',
    answer:
      'PLA ist unter industriellen Kompostierbedingungen (Temperatur ~60 °C, hohe Feuchte, mikrobielle Aktivität) innerhalb von Monaten biologisch abbaubar. Im Garten-Kompost oder Hausmüll dauert der Abbau Jahrzehnte · die Bedingungen reichen nicht aus. Praktisch heißt das: PLA-Modelle in der Mülltonne sind nicht "umweltfreundlich entsorgt". Der ökologische Vorteil entsteht in der Produktion: PLA wird aus pflanzlichen Stärken hergestellt, hat damit eine deutlich bessere CO₂-Bilanz als erdölbasierte Kunststoffe (PETG, ASA, ABS).',
  },
  {
    question: 'Welche Druck-Schichthöhe ergibt welche Oberflächen-Qualität?',
    answer:
      'Standard-Schichthöhe bei FDM-Druck: 0,2 mm · gute Balance Druckzeit und Sichtbarkeit der Schichten. 0,1 mm Schichthöhe für sichtbare Detailflächen verdoppelt die Druckzeit, ergibt aber deutlich glattere Schräg- und Bogenflächen. 0,08 mm ist möglich aber selten wirtschaftlich. Für höchste Glätte bei Premium-Modellen kombinieren wir 0,1mm-Druck mit manuellem Schleifen + Grundieren + Lackieren · Ergebnis nicht von Spritzguss unterscheidbar.',
  },
  {
    question: 'Welches Material hat den geringsten ökologischen Fußabdruck?',
    answer:
      'PLA aus österreichischer Produktion ist die ökologisch beste Standardwahl. Vergleichsdaten: österreichisches PLA-Filament aus recycelten Industrieabfällen, hergestellt mit Ökostrom, hat einen CO₂-Fußabdruck von etwa 1,8-2,5 kg CO₂-Äquivalent pro kg Filament · gegenüber konventionellem Asien-Import-PLA bei ~5-7 kg CO₂. ABS und PETG haben rohstoffbedingt höhere Werte (~3-4 kg). PA-CF ist wegen Carbon-Faser-Energieintensität am höchsten (~8-12 kg). Wenn Nachhaltigkeit Priorität ist: österreichisches PLA. Wenn Funktionalität dominiert: das Material wählen das die Anforderung erfüllt und auf Lieferkette achten.',
  },
  {
    question: 'Welche Norm-Tests stecken hinter den Material-Datenblättern?',
    answer:
      'Standardisierte Materialprüfungen folgen ISO-Normen, die international vergleichbare Werte garantieren: ISO 527-2 (Zugversuch · Zugfestigkeit und E-Modul), ISO 178 (Biegeversuch · Biege-E-Modul und Biegefestigkeit), ISO 75-2 (Wärmeformbeständigkeit / HDT), ISO 180 (Charpy-Schlagversuch), ISO 11357-2 (DSC für Glasübergangstemperatur). Für US-Datenblätter sind die ASTM-Äquivalente üblich (ASTM D638 statt ISO 527). Werte aus Hersteller-Datenblättern sind nur direkt vergleichbar, wenn die gleiche Norm + Prüfbedingungen verwendet wurden.',
  },
]

// ─────────────────────────────────────────────────────────────────
//   STRUKTURIERTE DATEN · TechArticle, FAQPage, HowTo, Breadcrumb
// ─────────────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'PLA vs PETG vs ASA vs ABS · FDM-Material-Vergleich 2026',
  description: DESCRIPTION,
  image: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  author: {
    '@type': 'Person',
    name: BRAND.founderName,
    url: 'https://www.ek-druck.at/ueber-uns',
    jobTitle: 'Inhaber & Gründer ekdruck e.U.',
    knowsAbout: ['FDM-3D-Druck', 'Material-Wissenschaft', 'Polymer-Verarbeitung'],
  },
  publisher: {
    '@type': 'Organization',
    name: BRAND.companyName,
    logo: { '@type': 'ImageObject', url: 'https://www.ek-druck.at/icon-192.png' },
  },
  mainEntityOfPage: 'https://www.ek-druck.at/ratgeber/fdm-material-vergleich',
  about: [
    { '@type': 'Thing', name: 'Polylactid (PLA)' },
    { '@type': 'Thing', name: 'Polyethylenterephthalat-Glykol (PETG)' },
    { '@type': 'Thing', name: 'Acrylester-Styrol-Acrylnitril (ASA)' },
    { '@type': 'Thing', name: 'Acrylnitril-Butadien-Styrol (ABS)' },
    { '@type': 'Thing', name: 'Thermoplastisches Polyurethan (TPU)' },
    { '@type': 'Thing', name: 'Carbon-Faser-verstärktes Polyamid (PA-CF)' },
  ],
  citation: [
    'ISO 527-2:2012 Plastics · Determination of tensile properties',
    'ISO 178:2019 Plastics · Determination of flexural properties',
    'ISO 75-2:2013 Plastics · Determination of temperature of deflection under load',
    'ISO 11357-2:2020 Plastics · Differential scanning calorimetry (DSC)',
    'ISO 180:2019 Plastics · Determination of Izod impact strength',
    'ASTM D638-14 Standard Test Method for Tensile Properties of Plastics',
  ],
  inLanguage: 'de-AT',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ek-druck.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://www.ek-druck.at/ratgeber' },
    { '@type': 'ListItem', position: 3, name: 'FDM-Material-Vergleich', item: 'https://www.ek-druck.at/ratgeber/fdm-material-vergleich' },
  ],
}

// SpeakableSpecification · für Voice-Assistenten + KI-Vorlese-Funktionen
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#tldr-vergleich', '#ai-summary'],
  },
}

// ─────────────────────────────────────────────────────────────────
//   PAGE
// ─────────────────────────────────────────────────────────────────

export default function FdmMaterialVergleichPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={[
          { name: 'Ratgeber', url: '/ratgeber' },
          { name: 'FDM-Material-Vergleich', url: '/ratgeber/fdm-material-vergleich' },
        ]} />

        {/* ═══ HERO ═══ */}
        <article>
          <header className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                  Ratgeber · FDM-Material-Vergleich · Stand 2026
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                  PLA vs PETG vs ASA vs ABS:<br />
                  <span className="text-primary">Welches FDM-Material passt zu Ihrem Modell?</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Die häufigste Frage bei jedem neuen Auftrag in der ekdruck-Werkstatt:
                  welches Material? Dieser Vergleich beantwortet sie wissenschaftlich
                  · Normdaten nach ISO 527, ISO 178 und ISO 75 · und übersetzt sie in eine
                  klare Entscheidungsmatrix aus der Werkstatt-Praxis.
                </p>
                <AuthorByline showDate publishedAt="2026-05-27" updatedAt="2026-05-27" variant="card" />
              </div>
            </div>
          </header>

          {/* ═══ AI-SUMMARY · kompakte Faktenbox für KI-Citation ═══ */}
          <section id="ai-summary" className="py-8 md:py-12 bg-foreground text-background" aria-label="AI-Summary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                  Zusammenfassung in 60 Sekunden
                </p>
                <div className="space-y-3 text-base md:text-lg leading-relaxed">
                  <p>
                    <strong className="text-primary">PLA</strong> ist das Standard-Einsteigermaterial · biologisch
                    abbaubar, höchste Detailtreue, geringes Warping. Limitiert durch niedrige Wärmeformbeständigkeit (HDT ~55 °C).
                  </p>
                  <p>
                    <strong className="text-primary">PETG</strong> ist der robuste Allrounder · stoßzäher als PLA,
                    formstabil bis ~75 °C, leicht hygroskopisch (Trocknung empfohlen).
                  </p>
                  <p>
                    <strong className="text-primary">ASA</strong> ist der Outdoor-Spezialist · UV-stabil über Jahre,
                    Wärmeformbeständigkeit ~95 °C. Benötigt geschlossenes Druckergehäuse.
                  </p>
                  <p>
                    <strong className="text-primary">ABS</strong> ist der Industriestandard für mechanische
                    Anwendungen mit Aceton-Glättung · Spritzguss-ähnliche Oberfläche, aber UV-anfällig und Lüftungsbedarf.
                  </p>
                  <p>
                    <strong className="text-primary">TPU</strong> ist flexibel (Shore 85A-70D) für Dichtungen
                    und Dämpfer. <strong className="text-primary">PA-CF</strong> ist Hochleistung (Aluminium-ähnliche
                    Steifigkeit) für Funktionsmuster mit Last.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ TLDR · COMPARISON TABLE ═══ */}
          <section id="tldr-vergleich" className="py-16 md:py-20 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">
                  TLDR-Vergleich: Alle 6 Materialien auf einen Blick
                </h2>
                <p className="text-base text-muted-foreground mb-8 max-w-3xl">
                  Standardisierte Materialwerte nach ISO-Normen. Für detaillierte Erklärungen siehe Material-Profile unten.
                </p>

                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm border-collapse min-w-[900px]">
                    <thead>
                      <tr className="bg-foreground text-background">
                        <th className="text-left p-4 font-bold sticky left-0 bg-foreground">Eigenschaft</th>
                        {materials.map((m) => (
                          <th key={m.slug} className="p-4 font-bold text-center min-w-[110px]">
                            <Link href={`#${m.slug}`} className="hover:text-primary">
                              {m.name}
                            </Link>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Zugfestigkeit (ISO 527)', key: 'tensileStrength' },
                        { label: 'HDT bei 0,45 MPa (ISO 75)', key: 'heatDeflection' },
                        { label: 'Glasübergang Tg', key: 'glassTransition' },
                        { label: 'Schlagzähigkeit (ISO 180)', key: 'impactStrength' },
                        { label: 'Dehnung bei Bruch', key: 'elongation' },
                        { label: 'Druck-Temperatur', key: 'printTemp' },
                        { label: 'Bett-Temperatur', key: 'bedTemp' },
                        { label: 'Filament-Preis/kg', key: 'pricePerKg' },
                      ].map((row, i) => (
                        <tr key={row.key} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/40'}>
                          <td className="p-4 font-bold sticky left-0" style={{ backgroundColor: 'inherit' }}>
                            {row.label}
                          </td>
                          {materials.map((m) => (
                            <td key={m.slug} className="p-4 text-center text-foreground/85">
                              {(m as any)[row.key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                      <tr className="bg-background">
                        <td className="p-4 font-bold sticky left-0 bg-background">UV-Stabilität</td>
                        {materials.map((m) => (
                          <td key={m.slug} className="p-4 text-center capitalize">
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                              m.uvResistance === 'hoch' ? 'bg-primary text-primary-foreground' :
                              m.uvResistance === 'mittel' ? 'bg-muted text-foreground' :
                              'bg-destructive/10 text-destructive'
                            }`}>
                              {m.uvResistance}
                            </span>
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-muted/40">
                        <td className="p-4 font-bold sticky left-0 bg-muted/40">Druck-Schwierigkeit</td>
                        {materials.map((m) => (
                          <td key={m.slug} className="p-4 text-center">
                            <span className="font-mono font-bold text-primary">{m.printDifficulty}/5</span>
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-background">
                        <td className="p-4 font-bold sticky left-0 bg-background">Gehäuse nötig?</td>
                        {materials.map((m) => (
                          <td key={m.slug} className="p-4 text-center">
                            {m.needsEnclosure ?
                              <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> :
                              <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />
                            }
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ DECISION MATRIX ═══ */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">
                  Entscheidungsmatrix: Welches Material wann?
                </h2>
                <p className="text-base text-muted-foreground mb-10 max-w-3xl">
                  Sechs typische ek-druck-Szenarien mit klarer Empfehlung. Die Praxis-Logik aus der Werkstatt
                  übersetzt Materialwissenschaft in projektgerechte Entscheidungen.
                </p>

                <div className="space-y-4">
                  {decisionMatrix.map((d, i) => (
                    <article
                      key={i}
                      className="bg-muted/30 border-2 border-border rounded-2xl p-6 md:p-8"
                    >
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="mono text-sm font-bold text-primary">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold leading-tight tracking-tight">
                          {d.scenario}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 ml-8">{d.context}</p>
                      <div className="ml-8 p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                          Empfehlung
                        </p>
                        <p className="text-base leading-relaxed">{d.recommendation}</p>
                        {d.alternatives && d.alternatives.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-2 italic">
                            Alternativen: {d.alternatives.join(', ').toUpperCase()}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ DETAILED MATERIAL PROFILES ═══ */}
          <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">
                  Detaillierte Material-Profile
                </h2>
                <p className="text-base text-muted-foreground mb-12 max-w-3xl">
                  Pro Material: chemischer Aufbau, mechanische und thermische Eigenschaften, Druck-Praxis aus der Werkstatt,
                  konkrete ek-druck-Empfehlung wann dieses Material gewählt wird.
                </p>

                {materials.map((m, idx) => (
                  <article
                    key={m.slug}
                    id={m.slug}
                    className="bg-background border-2 border-border rounded-3xl p-6 md:p-10 mb-6 scroll-mt-20"
                  >
                    <header className="mb-6 pb-6 border-b border-border">
                      <p className="mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-2">
                        Material 0{idx + 1}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-1">{m.name}</h3>
                      <p className="text-sm md:text-base text-muted-foreground italic mb-4">{m.fullName}</p>
                      <p className="text-base md:text-lg leading-relaxed">{m.shortDescription}</p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6">
                      {/* Mechanische Eigenschaften */}
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                          <Gauge className="w-3.5 h-3.5" />
                          Mechanische Eigenschaften
                        </p>
                        <dl className="space-y-2 text-sm">
                          {[
                            ['Dichte', m.density],
                            ['Zugfestigkeit (ISO 527)', m.tensileStrength],
                            ['Biege-E-Modul (ISO 178)', m.flexuralModulus],
                            ['Schlagzähigkeit (ISO 180)', m.impactStrength],
                            ['Dehnung bei Bruch', m.elongation],
                          ].map(([k, v]) => (
                            <div key={k} className="grid grid-cols-2 gap-2 pb-2 border-b border-border/40 last:border-0">
                              <dt className="text-muted-foreground">{k}</dt>
                              <dd className="font-bold">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Thermische Eigenschaften */}
                      <div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                          <Thermometer className="w-3.5 h-3.5" />
                          Thermische Eigenschaften
                        </p>
                        <dl className="space-y-2 text-sm">
                          {[
                            ['Glasübergang Tg', m.glassTransition],
                            ['HDT bei 0,45 MPa', m.heatDeflection],
                            ['Druck-Temperatur', m.printTemp],
                            ['Bett-Temperatur', m.bedTemp],
                          ].map(([k, v]) => (
                            <div key={k} className="grid grid-cols-2 gap-2 pb-2 border-b border-border/40 last:border-0">
                              <dt className="text-muted-foreground">{k}</dt>
                              <dd className="font-bold">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    {/* Druck-Praxis Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-muted">
                        Druck-Schwierigkeit: {m.printDifficulty}/5
                      </span>
                      <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-muted">
                        Warping: {m.warpingRisk}
                      </span>
                      {m.needsEnclosure && (
                        <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-destructive/10 text-destructive">
                          Geschlossenes Gehäuse nötig
                        </span>
                      )}
                      {m.needsHardenedNozzle && (
                        <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-destructive/10 text-destructive">
                          Gehärtete Düse nötig
                        </span>
                      )}
                      <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-muted flex items-center gap-1">
                        <Sun className="w-3 h-3" />
                        UV: {m.uvResistance}
                      </span>
                      <span className="mono text-xs font-bold px-3 py-1.5 rounded-full bg-muted flex items-center gap-1">
                        <Droplets className="w-3 h-3" />
                        Hygroskopisch: {m.hygroscopic}
                      </span>
                    </div>

                    {/* Anwendungs-Eignung */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-5">
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Beste Anwendungen
                        </p>
                        <ul className="space-y-1.5 text-sm">
                          {m.bestFor.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-5">
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-destructive mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          Ungeeignet für
                        </p>
                        <ul className="space-y-1.5 text-sm">
                          {m.avoidFor.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <XCircle className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* ek-druck-Praxis-Box */}
                    <div className="bg-foreground text-background rounded-2xl p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                          <span className="font-bold text-xs">K</span>
                        </div>
                        <p className="mono text-[10px] font-bold uppercase tracking-wider text-primary">
                          ek-druck-Werkstattpraxis
                        </p>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed text-background/90">
                        {m.ekdruckUsage}
                      </p>
                    </div>

                    {/* Sustainability + Pricing */}
                    <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-border text-sm">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Biologisch abbaubar:</strong> {m.biodegradable ? 'ja' : 'nein'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Lebensmittelkontakt:</strong> {m.foodSafe}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-primary" />
                        <span>
                          <strong>Nachbearbeitung:</strong> {m.postProcessing[0]}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ FAQ ═══ */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-3">
                  Häufige Fragen zu FDM-Materialien
                </h2>
                <p className="text-base text-muted-foreground mb-10 max-w-3xl">
                  Antworten auf die Fragen, die wir am häufigsten von Kunden bekommen · strukturiert für schnelles Skimmen.
                </p>

                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details
                      key={i}
                      className="group border-2 border-border bg-background rounded-2xl p-5 md:p-6 hover:border-primary/30 transition-all open:border-primary/30"
                    >
                      <summary className="font-bold text-base md:text-lg cursor-pointer flex items-start gap-3 list-none">
                        <span className="mono text-sm font-bold text-primary shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 leading-snug">{f.question}</span>
                        <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-4 ml-8 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {f.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ NORMEN & QUELLEN ═══ */}
          <section className="py-12 md:py-16 bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                  Normen & wissenschaftliche Grundlage
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Materialwerte in diesem Vergleich basieren auf standardisierten Prüfmethoden nach folgenden internationalen Normen:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ISO 527-2:2012</strong> · Kunststoffe · Bestimmung der Zugeigenschaften (Zugfestigkeit, E-Modul, Dehnung)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ISO 178:2019</strong> · Kunststoffe · Bestimmung der Biegeeigenschaften</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ISO 75-2:2013</strong> · Kunststoffe · Bestimmung der Wärmeformbeständigkeit (HDT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ISO 11357-2:2020</strong> · Kunststoffe · Dynamische Differenzkalorimetrie (DSC) für Glasübergangstemperatur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ISO 180:2019</strong> · Kunststoffe · Bestimmung der Izod-Schlagzähigkeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>ASTM D638-14</strong> · Standard Test Method for Tensile Properties of Plastics (US-Äquivalent)</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-6 italic">
                  Werte in diesem Artikel sind herstellerübergreifende typische Bandbreiten aus mehreren Filament-Quellen
                  (Polymaker, Prusament, Bambu Lab, Fillamentum, Extrudr). Für konkrete Projekt-Spezifikation immer das
                  Herstellerdatenblatt des gewählten Filaments konsultieren.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ CROSS-LINKS ═══ */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                  Weitere Ratgeber
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { href: '/3d-druck-materialien', title: 'Alle Materialien im ek-druck-Stack', desc: 'Komplett-Übersicht der verfügbaren Filamente mit Pricing.' },
                    { href: '/ratgeber/kosten-guide', title: 'Kosten-Guide 3D-Druck', desc: 'Wie sich Material-Wahl auf die Gesamtkosten Ihres Modells auswirkt.' },
                    { href: '/ratgeber/verfahrens-vergleich', title: '3D-Druck vs. Handmodellbau', desc: 'Wann lohnt sich FDM-3D-Druck gegenüber Handmodellbau oder Spritzguss?' },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group block bg-background border-2 border-border rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                    >
                      <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                        {l.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{l.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                        Lesen <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ CTA ═══ */}
          <section className="py-20 md:py-28 bg-foreground text-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">
                  Konkretes Projekt?
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                  Wir empfehlen das Material<br />
                  <span className="text-primary">für Ihre Anforderung.</span>
                </h2>
                <p className="text-base md:text-lg text-background/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                  STL hochladen → Sie erhalten ein Festpreis-Angebot mit Material-Empfehlung
                  passend zu Ihrem Anwendungsfall, binnen 6 Stunden direkt von Kevin.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/kostenrechner"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-4 font-bold hover:opacity-90 transition-all"
                  >
                    <Calculator className="w-5 h-5" />
                    STL hochladen · Preis sofort
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="inline-flex items-center gap-2 border-2 border-background/30 rounded-full px-8 py-4 font-bold hover:bg-background/10 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    {BRAND.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center mt-8 text-sm text-background/60">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span>★{BRAND.reviews.rating} · {BRAND.reviews.count} Google-Bewertungen · Made in {BRAND.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </section>

        </article>

        <Footer />
      </div>
    </>
  )
}
