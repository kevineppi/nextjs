import type { Metadata } from 'next'
import Gelaendemodell from '@/src-pages/Gelaendemodell'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

const TITLE = 'Geländemodell drucken lassen ★5,0 · Relief aus Höhendaten'
const DESCRIPTION =
  'Geländemodell und Reliefmodell aus dem 3D-Druck: wir wandeln amtliche Höhendaten (BEV, DGM1, swisstopo) in ein Relief zum Anfassen. Angebot in 6h. ★5,0'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'geländemodell drucken lassen, geländemodell 3d druck, reliefmodell, reliefkarte drucken lassen, topografiemodell 3d druck, topographiemodell, höhenmodell drucken, landschaftsmodell 3d druck, gelände 3d druck österreich, topografiemodell drucken lassen, umgebungsmodell gelände',
  alternates: buildDachAlternates('/architekturmodelle/gelaendemodell'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/architekturmodelle/gelaendemodell',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-hoehenlinien.jpg', width: 1200, height: 630, alt: 'ekdruck · Geländemodell / Reliefmodell aus dem 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Geländemodell / Reliefmodell 3D-Druck',
  description:
    'Gelände-, Topografie- und Reliefmodelle aus dem 3D-Druck. Wir wandeln amtliche Höhendaten (BEV, DGM1 der Landesvermessung, swissALTI3D von swisstopo) in ein druckfertiges Relief um. Segmentiert bis XXL, Express in 24-48h, Festpreis-Angebot in 6h. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/architekturmodelle/gelaendemodell',
})

const FAQ_LD = faqSchema([
  { q: 'Wer macht Geländemodelle aus Höhendaten in Österreich?', a: 'Geländemodelle aus amtlichen Höhendaten fertigt in Österreich ekdruck (Gunskirchen, Oberösterreich). Wir wandeln die Höhendaten von BEV (AT), DGM1 (DE) und swissALTI3D (CH) selbst in ein maßstabsgetreues Relief um, mit passender Überhöhung, ab 1 Stück, österreichweit geliefert. Angebot in 6 Stunden, Express in 24 bis 48 Stunden. 5,0 Sterne auf Google.' },
  { q: 'Was kostet ein Geländemodell aus dem 3D-Druck?', a: 'Das hängt von Fläche, Maßstab und Detailgrad ab. Nach einer kurzen Sichtung Ihrer Daten oder des gewünschten Ausschnitts erhalten Sie innerhalb von 6 Stunden ein verbindliches Festpreis-Angebot. Einen ersten Richtwert liefert der Kostenrechner.' },
  { q: 'Woher kommen die Höhendaten? Muss ich selbst etwas liefern?', a: 'In der Regel nicht. Wir arbeiten mit amtlichen Höhendaten: in Österreich vom BEV und den Bundesländern (Landes-Laserscan bis 1 m), in Deutschland das DGM1 der Landesvermessung, in der Schweiz swissALTI3D von swisstopo. Sagen Sie uns den Ausschnitt, den Rest holen und bereiten wir auf.' },
  { q: 'Wie groß kann ein Geländemodell sein?', a: 'Es gibt keine feste Größengrenze. Große Reliefs setzen wir aus mehreren Teilen zusammen, mit unsichtbaren Trennkanten entlang von Wegen oder Geländekanten. So sind auch großflächige Areale bis XXL als ein zusammenhängendes Modell möglich.' },
  { q: 'Was ist die Höhenüberhöhung bei einem Geländemodell?', a: 'Die Höhenüberhöhung streckt die Höhen gegenüber der Grundfläche. Bei flachem Gelände sind die Höhenunterschiede im Maßstab so klein, dass das Relief kaum lesbar wäre, dann überhöhen wir leicht und maßvoll, damit Täler und Hänge sichtbar bleiben. Bei alpinem Gelände ist das meist nicht nötig.' },
  { q: 'Was ist der Unterschied zwischen DGM und DOM?', a: 'Ein DGM (digitales Geländemodell) beschreibt die reine Erdoberfläche ohne Gebäude und Bewuchs. Ein DOM (digitales Oberflächenmodell) enthält zusätzlich Häuser und Bäume. Für ein Reliefmodell arbeiten wir mit dem DGM, für ein Stadtmodell mit Bebauung kombinieren wir Höhendaten und Gebäudedaten.' },
  { q: 'Aus welchem Material und in welcher Optik?', a: 'Standard ist durchgehendes Weiß in mattem PLA, das die Form in den Vordergrund stellt. Auf Wunsch koloriert, mit abgesetzten Höhenschichten, Gewässern oder eingelegten Wegen und Beschriftungen.' },
  { q: 'Wie schnell ist ein Geländemodell fertig?', a: 'Je nach Umfang wenige Tage, Express in 24 bis 48 Stunden ist bei druckreifer Datenlage möglich. Das Festpreis-Angebot kommt in 6 Stunden.' },
  { q: 'Kann man aus einer Landkarte ein 3D-Relief machen?', a: 'Ja. Sie nennen uns die Region oder den Kartenausschnitt, wir beziehen die amtlichen Höhendaten und bauen daraus ein druckfertiges 3D-Relief. Aus einer flachen Landkarte wird so ein greifbares Reliefmodell, auf Wunsch mit Wegen, Gewässern oder einer eingelegten Route.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodelle', url: '/architekturmodelle' },
  { name: 'Geländemodell', url: '/architekturmodelle/gelaendemodell' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Gelaendemodell />
    </>
  )
}
