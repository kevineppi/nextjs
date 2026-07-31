import type { Metadata } from 'next'
import MessemodellExpress from '@/src-pages/MessemodellExpress'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

const TITLE = 'Messemodell Express ★5,0 · fertig in 24-48h statt Wochen'
const DESCRIPTION =
  'Messemodell kurzfristig vor der Messe? Express-Fertigung in 24-48h statt Wochen, Angebot in 6h, ab 1 Stück. Wenn die Deadline drückt, liefert der 3D-Druck noch. ★5,0'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'messemodell express, messemodell kurzfristig, messemodell 48 stunden, express messeexponat, last-minute messemodell, messemodell schnell drucken lassen, messeexponat express, messemodell vor messe, express modell messestand, messemodell kurzfristig österreich',
  alternates: buildDachAlternates('/messemodelle/express'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/messemodelle/express',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-express-uebersicht.jpg', width: 1200, height: 630, alt: 'ekdruck · Messemodell Express in 24 bis 48 Stunden' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Messemodell Express 3D-Druck',
  description:
    'Express-Fertigung von Messemodellen und Ausstellungsmodellen in 24 bis 48 Stunden. Festpreis-Angebot in 6 Stunden, ab einem Stück. Für kurzfristige Messetermine, wenn der klassische Modellbau nicht mehr rechtzeitig liefert. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/messemodelle/express',
})

const FAQ_LD = faqSchema([
  { q: 'Kann man ein Messemodell kurzfristig vor der Messe drucken lassen?', a: 'Ja. Bei druckreifen Daten und gängiger Größe fertigen wir ein Messemodell in 24 bis 48 Stunden. Das verbindliche Festpreis-Angebot kommt innerhalb von 6 Stunden. Der klassische Modellbau braucht dafür meist 4 bis 10 Wochen.' },
  { q: 'Wie schnell ist ein Express-Messemodell wirklich fertig?', a: 'Nach Ihrer Freigabe drucken wir in 24 bis 48 Stunden, bei sehr kleinen Modellen teils schneller. Danach Versand ins gesamte DACH-Gebiet, in Oberösterreich auf Wunsch persönliche Zustellung noch am Tag.' },
  { q: 'Was kostet die Express-Fertigung?', a: 'Auf den Standardpreis kommt ein Express-Aufschlag: rund 15 Prozent für 48 Stunden, rund 30 Prozent für 24 Stunden. Den genauen Festpreis nennen wir im Angebot innerhalb von 6 Stunden, ab einem einzelnen Stück.' },
  { q: 'Was lässt sich nicht beschleunigen?', a: 'Sehr große, vielfach segmentierte Modelle und aufwändige Veredelung (Aceton-Glättung, mehrfarbige Profi-Lackierung) brauchen ihre Zeit. Auch Sonder-Materialien, die erst bestellt werden müssten. Wir sagen Ihnen ehrlich, was im Zeitfenster geht.' },
  { q: 'Bis wann muss ich bestellen, damit es rechtzeitig ist?', a: 'Je früher, desto entspannter. Aber auch bei knapper Deadline lohnt der Anruf: Wir prüfen sofort, ob sich der Termin ausgeht, und reservieren bei Zusage direkt einen Express-Slot. Telefon: +43 676 5517197.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Messemodelle', url: '/messemodelle' },
  { name: 'Express', url: '/messemodelle/express' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <MessemodellExpress />
    </>
  )
}
