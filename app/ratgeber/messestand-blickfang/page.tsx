import type { Metadata } from 'next'
import MessestandBlickfangGuide from '@/src-pages/ratgeber/MessestandBlickfangGuide'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

const TITLE = 'Blickfang am Messestand: warum Maßstabsmodelle Besucher stoppen | ekdruck'
const DESCRIPTION = 'Warum ein greifbares Messemodell mehr Besucher stoppt als jeder Bildschirm, und wie Sie den richtigen Eyecatcher für Ihren Messestand wählen: Typen, Größe, Ablauf.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/ratgeber/messestand-blickfang' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/messestand-blickfang',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const FAQ_LD = faqSchema([
  { q: 'Warum stoppt ein Modell mehr Besucher als ein Bildschirm?', a: 'Auf einer Messe sind Bildschirme allgegenwärtig, das Auge blendet sie aus. Ein greifbares, ungewöhnliches Objekt bricht dieses Muster, es darf angefasst werden, erzeugt Neugier und wird zum Gesprächsanlass.' },
  { q: 'Wie groß sollte ein Blickfang-Modell sein?', a: 'Das hängt vom Ziel ab. Ein vergrößertes Produktmodell auf dem Tisch reicht oft, um Gespräche zu starten. Ein Großmodell bis über 2 m macht den Stand aus der Halle heraus erkennbar. Wir beraten zur Größe passend zu Standfläche und Budget.' },
  { q: 'Was kostet ein Eyecatcher für den Messestand?', a: 'Tischgroße Modelle beginnen im unteren dreistelligen Bereich, große Blickfänge mit Mechanik oder Beleuchtung liegen höher. Sie erhalten innerhalb von 6 Stunden ein verbindliches Festpreisangebot.' },
  { q: 'Wie schnell ist ein Messemodell fertig?', a: 'Standard 5 bis 10 Werktage, bei knappen Messeterminen ist Express möglich. Je früher die CAD-Daten kommen, desto entspannter die Fertigung.' },
  { q: 'Lässt sich ein Modell mehrfach einsetzen?', a: 'Ja. Für mehrere Messen fertigen wir aus widerstandsfähigem Material und liefern stabile Transportboxen, so begleitet Sie derselbe Blickfang über eine ganze Saison.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Ratgeber', url: '/ratgeber' },
  { name: 'Blickfang am Messestand', url: '/ratgeber/messestand-blickfang' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <MessestandBlickfangGuide />
    </>
  )
}
