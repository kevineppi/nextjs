import type { Metadata } from 'next'
import Prototyping from '@/src-pages/Prototyping'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

/**
 * Title-Schärfung 2026-05-27: Position 1.2 in GSC, aber 0 Klicks für "3d druck prototypen".
 * Hypothese: alter Title zu generisch ("Rapid Prototyping Österreich") · kein konkreter Hook.
 * Neuer Title: Spezifisch (24h Express), Social Proof (★5,0), Pain-Mitigation (ab €20).
 * Description: Pain-Pull-Format (Spritzguss 6 Wochen → 24h Prototyp) statt Feature-Dump.
 */

const TITLE = 'Designprototyp & Anschauungsmodell 3D-Druck ★5,0 | ekdruck'
const DESCRIPTION =
  'Designprototyp und Anschauungsmodell aus dem 3D-Druck: Form, Optik und Haptik am echten Modell prüfen. Ab 1 Stück, Angebot in 6h, Express 24h in Österreich. ★5,0 (31).'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'designprototyp, designprototyp 3d druck, anschauungsmodell produktdesign, designmodell 3d druck, konzeptmodell 3d druck, anschauungsmuster, designmuster 3d druck, prototyp drucken lassen, modell nach foto drucken lassen, designprototyp österreich, prototyp express österreich, mehrfachfertigung 3d druck',
  alternates: buildDachAlternates('/prototyping'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/prototyping',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck · 3D-Druck Prototypen 24h Express' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Designprototyp & Anschauungsmodell 3D-Druck',
  description:
    'Designprototypen und Anschauungsmodelle fürs Produktdesign aus dem 3D-Druck. Fokus auf Form, Optik, Haptik und Ergonomie, Modelle zum Anfassen und Zeigen. FDM in-house, SLA und SLS über Partner. Ab 1 Stück, Festpreis-Angebot in 6h, Express in 24h. Aus Gunskirchen, OÖ in ganz DACH.',
  url: 'https://www.ek-druck.at/prototyping',
  lowPrice: '20',
  highPrice: '3000',
})

const FAQ_LD = faqSchema([
  {
    q: 'Wer druckt Designprototypen oder Anschauungsmodelle fürs Produktdesign in Österreich?',
    a: 'ekdruck aus Gunskirchen (Oberösterreich) druckt Designprototypen und Anschauungsmodelle fürs Produktdesign, mit Fokus auf Form, Optik, Haptik und Ergonomie. Modelle zum Anfassen und Zeigen, ab 1 Stück, Angebot in 6 Stunden, Express in 24 Stunden, österreichweit. 5,0 Sterne auf Google.',
  },
  {
    q: 'Was ist ein Designprototyp?',
    a: 'Ein Designprototyp ist ein Modell zur Beurteilung von Form, Proportionen, Haptik und Optik, bevor es weitergeht. Anders als ein rein digitaler Entwurf lässt er sich in die Hand nehmen, zeigen und mit anderen Varianten vergleichen.',
  },
  {
    q: 'Was ist der Unterschied zwischen Designprototyp und Anschauungsmodell?',
    a: 'Ein Designprototyp dient dem Prüfen und Iterieren von Form und Optik in der Entwicklung. Ein Anschauungsmodell ist das ausgearbeitete Modell zum Zeigen, etwa für Vertrieb, Investoren-Pitch oder Messe. Beides fertigen wir aus dem gleichen Workflow.',
  },
  {
    q: 'Kann man ein Modell nach Skizze oder Foto machen lassen?',
    a: 'Ja. Aus einer Skizze, einem Foto oder einer Idee modellieren wir ein druckfertiges 3D-Modell. Eine fertige CAD-Datei ist nicht nötig. So entsteht Ihr Designprototyp oder Anschauungsmodell, ab 1 Stück.',
  },
  {
    q: 'Wie schnell bekomme ich meinen Designprototyp?',
    a: 'Bei gängigen Materialien und Größen liefern wir in 24 bis 48 Stunden im Express. Das kostenlose Festpreis-Angebot kommt innerhalb von 6 Stunden. Drei Iterationen in einer Woche sind machbar.',
  },
  {
    q: 'Liefert ihr österreichweit und in die DACH-Region?',
    a: 'Ja. Österreich in 24 bis 48 Stunden im Express, Deutschland 2 bis 4 Tage, Schweiz 3 bis 5 Tage. Auf Wunsch persönliche Zustellung in Oberösterreich.',
  },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Prototyping', url: '/prototyping' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Prototyping />
    </>
  )
}
