import type { Metadata } from 'next'
import Wettbewerbsmodell from '@/src-pages/Wettbewerbsmodell'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

const TITLE = 'Wettbewerbsmodell 3D-Druck ★5,0 · Express vor der Abgabe'
const DESCRIPTION =
  'Wettbewerbs- und Abgabemodell aus dem 3D-Druck in 24-48h statt Wochen. Weiße Jury-Optik, mehrere Varianten parallel, passend zur Einsatzplatte, ab Stück 1. Angebot in 6h. ★5,0'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'wettbewerbsmodell, wettbewerbsmodell 3d druck, abgabemodell, einsatzmodell, einsatzplatte wettbewerb, architekturmodell wettbewerb, wettbewerbsmodell maßstab, präsentationsmodell wettbewerb, wettbewerbsmodell weiß, wettbewerbsmodell express, modell architekturwettbewerb, wettbewerbsmodell 1:500, wettbewerbsmodell 1:200, wettbewerbsmodell österreich',
  alternates: buildDachAlternates('/architekturmodelle/wettbewerbsmodell'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/architekturmodelle/wettbewerbsmodell',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-uebersicht.jpg', width: 1200, height: 630, alt: 'ekdruck · Wettbewerbsmodell Architektur aus dem 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Wettbewerbsmodell Architektur 3D-Druck',
  description:
    'Jurytaugliche Wettbewerbsmodelle aus dem 3D-Druck. Weiße matte Optik, Maßstab 1:200 bis 1:1000, mehrere Entwurfs-Varianten parallel, ab einem Stück. Express in 24-48h, Festpreis-Angebot in 6h. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/architekturmodelle/wettbewerbsmodell',
})

const FAQ_LD = faqSchema([
  { q: 'Wer fertigt Wettbewerbsmodelle in Österreich?', a: 'ekdruck (Gunskirchen, Oberösterreich) fertigt Wettbewerbs- und Abgabemodelle aus dem 3D-Druck für Architekturbüros in ganz Österreich. Weißes Präsentationsmodell im Maßstab 1:200 oder 1:500, direkt aus Ihren CAD-Daten, Express in 24 bis 48 Stunden bis zur Abgabefrist, Angebot in 6 Stunden. Bewertung: 5,0 Sterne auf Google.' },
  { q: 'Welcher Maßstab ist für ein Wettbewerbsmodell richtig?', a: 'Meist gibt die Auslobung den Maßstab vor. 1:200 ist typisch für einzelne Gebäude, 1:500 für den städtebaulichen Zusammenhang, 1:1000 für große Areale. Steht nichts in den Unterlagen, beraten wir Sie vor der Anfrage kostenfrei zum passenden Maßstab.' },
  { q: 'Warum sind Wettbewerbsmodelle weiß?', a: 'Weiß und monochrom lenkt den Blick der Jury auf Volumen, Proportion und Setzung statt auf Farbe. Üblich ist der Bestand in Grau und der neue Entwurf in Weiß. Wir arbeiten in durchgehendem Weiß mit matter, nicht spiegelnder Oberfläche, so wie es der Jury-Standard erwartet.' },
  { q: 'Was kostet ein Wettbewerbsmodell?', a: 'Das hängt von Maßstab, Umgebung, Anzahl der Varianten und Express-Wunsch ab. Als Richtwert: ab 420 Euro im Maßstab 1:200 und ab 780 Euro im Maßstab 1:500, ab einem einzelnen Modell. Ein verbindliches Festpreis-Angebot bekommen Sie innerhalb von 6 Stunden.' },
  { q: 'Wie kurzfristig geht ein Wettbewerbsmodell noch?', a: 'In 24 bis 48 Stunden, wenn die Daten druckreif sind und das Modell in gängiger Größe liegt. Der klassische Modellbau braucht dafür Wochen. Rufen Sie bei knapper Deadline direkt an, dann prüfen wir das Zeitfenster sofort.' },
  { q: 'Bekomme ich mehrere Entwurfs-Varianten als Modell?', a: 'Ja, und das ist ein echter Vorteil gegenüber klassischem Modellbau. Mehrere Varianten laufen parallel zu gleichen Stückkosten, ohne Aufpreis für die zweite oder dritte Variante. So liegen A, B und C zum direkten Vergleich nebeneinander auf dem Tisch.' },
  { q: 'Was ist der Unterschied zwischen Wettbewerbs- und Präsentationsmodell?', a: 'Ein Wettbewerbsmodell ist auf die Jury-Situation zugeschnitten: monochrom, reduziert, auf den Entwurf konzentriert. Ein Präsentationsmodell darf farbiger und detailreicher sein, etwa für Bauherren oder Vermarktung. Beides fertigen wir aus dem gleichen Workflow.' },
  { q: 'Welche Daten braucht ihr, und was ist mit dem Umgebungsmodell?', a: 'Ihr 3D-Modell in STL, OBJ, STEP oder 3MF, oder die native Datei aus ArchiCAD, Revit, Rhino, SketchUp oder Vectorworks. Die Umgebung ergänzen wir aus Lage- und Höhendaten. Und wenn gar kein 3D-Modell vorliegt, wandeln wir Flur- und Grenzpläne mit amtlichen LoD2-Gebäude- und DGM1-Geländedaten in ein druckfertiges Modell um, so wie bei allen unseren Modellen, wenn nötig.' },
  { q: 'Wie muss die Einsatzplatte des Auslobers definiert sein?', a: 'Wir brauchen den Ausschnitt, den Höhenbezug und das Nullniveau der vorgegebenen Einsatzplatte. Daraus fertigen wir Ihren Entwurf maßstabsgetreu, sodass er sauber in die gemeinsame Platte des Wettbewerbs passt. Liegt keine Platte vor, ergänzen wir die Umgebung aus amtlichen Lage- und Höhendaten.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodelle', url: '/architekturmodelle' },
  { name: 'Wettbewerbsmodell', url: '/architekturmodelle/wettbewerbsmodell' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Wettbewerbsmodell />
    </>
  )
}
