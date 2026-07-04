import type { Metadata } from 'next'
import GelaendemodellGuide from '@/src-pages/ratgeber/GelaendemodellGuide'
import { faqSchema, breadcrumbSchema } from '@/lib/seo'

const TITLE = 'Geländemodell aus DGM-Daten: detailgenaues Relief im 3D-Druck | ekdruck'
const DESCRIPTION = 'Wie aus DGM, DTM oder Höhenlinien ein maßstabsgetreues Geländemodell entsteht: Datenformate, Ablauf, Maßstäbe und Anwendungen für Bauverhandlung, Städtebau und Wasserbau.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/ratgeber/gelaendemodell-dgm' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/gelaendemodell-dgm',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const FAQ_LD = faqSchema([
  { q: 'Welche Daten brauchen Sie für ein Geländemodell?', a: 'Am besten ein DGM oder DTM als Rasterdaten (z.B. das amtliche ÖKO-1m-DTM), Höhenlinien aus dem Vermessungsplan (DXF/DWG) oder eine ALS-Punktwolke. Auch QGIS- und ArcGIS-Exporte verarbeiten wir direkt.' },
  { q: 'In welchem Maßstab entsteht ein Geländemodell?', a: 'Für Einzelgrundstücke meist 1:500, für Quartiers- und Erschließungsplanungen 1:1000 bis 1:2000. Bei sehr flachem Gelände setzen wir eine Höhenüberhöhung (Faktor 2 bis 3) ein, damit das Relief lesbar bleibt.' },
  { q: 'Kann ein Gebäude auf das Geländemodell gesetzt werden?', a: 'Ja. Wir setzen Ihr geplantes Gebäude als abnehmbares Element auf das Reliefmodell, ideal für die Hangbebauungs-Analyse und den Vergleich von Bestand mit und ohne Neubau.' },
  { q: 'Wie detailgenau ist das gedruckte Relief?', a: 'Das Modell bildet die Höhendaten maßstabsgetreu ab. Die Auflösung richtet sich nach der Qualität Ihrer Ausgangsdaten: ein 1m-DTM ergibt ein deutlich feineres Relief als grobe Höhenlinien im 10m-Abstand.' },
  { q: 'Wie lange dauert ein Geländemodell?', a: 'Je nach Größe und Detailgrad 5 bis 10 Werktage, bei knappen Behördenterminen auch schneller. Das verbindliche Festpreisangebot erhalten Sie innerhalb von 6 Stunden nach Datenupload.' },
  { q: 'Können mehrere Farben oder Schichten dargestellt werden?', a: 'Ja. Farbcodierte Geologie-Schichten, Fließrichtungen oder Nutzungszonen sind möglich, ebenso eingelaserte Beschriftungen für Wege, Flurnamen oder Höhenkoten.' },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Ratgeber', url: '/ratgeber' },
  { name: 'Geländemodell aus DGM-Daten', url: '/ratgeber/gelaendemodell-dgm' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <GelaendemodellGuide />
    </>
  )
}
