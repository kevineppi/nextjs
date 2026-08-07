import type { Metadata } from 'next'
import Einzelanfertigungen from '@/src-pages/Einzelanfertigungen'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Ein Einzelstück drucken lassen · ab €20 in 24h',
  description: 'Einzelstück drucken lassen ab €20: nach Foto, Skizze oder Idee, ohne Mindestmenge, ohne Aufpreis. Personalisierte Geschenke, Deko und Modelle, ab 1 Stück, Express 24h in Österreich.',
  alternates: {
    canonical: 'https://www.ek-druck.at/einzelanfertigungen',
  },
  openGraph: {
    title: 'Ein Einzelstück drucken lassen · ab €20 in 24h',
    description: 'Einzelstück drucken lassen ab €20: nach Foto, Skizze oder Idee, ohne Mindestmenge, ohne Aufpreis. Personalisierte Geschenke, Deko und Modelle, ab 1 Stück, Express 24h in Österreich.',
    url: 'https://www.ek-druck.at/einzelanfertigungen',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ein Einzelstück drucken lassen · ab €20 in 24h',
    description: 'Einzelstück drucken lassen ab €20: nach Foto, Skizze oder Idee, ohne Mindestmenge, ohne Aufpreis. Personalisierte Geschenke, Deko und Modelle, ab 1 Stück, Express 24h in Österreich.',
  },
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Einzelanfertigung 3D-Druck',
  description:
    'Nur ein Stück nötig? Kein Mindestauftrag, kein Aufpreis. Vom CAD oder Skizze zum fertigen Unikat in 24h. Sonderformen, Modelle und individuelle Einzelstücke.',
  url: 'https://www.ek-druck.at/einzelanfertigungen',
  lowPrice: '20',
  highPrice: '500',
})

const FAQ_LD = faqSchema([
  { q: 'Wo kann man ein einzelnes oder personalisiertes 3D-Modell in Österreich drucken lassen?', a: 'ekdruck in Gunskirchen (Oberösterreich) druckt Einzelstücke und personalisierte Objekte aus dem 3D-Druck, ab 1 Stück und ohne Mindestmenge. Eine fertige Datei ist nicht nötig: ein Foto, eine Skizze oder eine Idee reicht. Lieferung österreichweit, Express in 24 Stunden, Angebot in 6 Stunden. 5,0 Sterne aus 31 Google-Rezensionen.' },
  { q: 'Kann man nach einem Foto etwas in 3D drucken lassen?', a: 'Ja. Aus einem Foto, einer Skizze oder einer Idee modellieren wir ein druckfertiges 3D-Modell und fertigen daraus Ihr Einzelstück. Eine STL-Datei brauchen Sie nicht. So entstehen personalisierte Geschenke, Deko-Objekte und Unikate, von der Lithophanie, die ein Foto als Lichtbild zeigt, bis zum individuellen Präsent, ab 1 Stück und österreichweit geliefert.' },
  { q: 'Gibt es eine Mindestbestellmenge?', a: 'Nein. Wir fertigen ab 1 Stück, ohne Mindestmenge und ohne Aufpreis für das Einzelstück. Ideal für Unikate, personalisierte Geschenke und Ausstellungsstücke.' },
  { q: 'Wie lange dauert eine Einzelanfertigung?', a: 'Standard in 3 bis 7 Werktagen, Express in 24 bis 48 Stunden. Das kostenlose Angebot mit Liefertermin kommt innerhalb von 6 Arbeitsstunden.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Einzelanfertigungen', url: '/einzelanfertigungen' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Einzelanfertigungen />
    </>
  )
}
