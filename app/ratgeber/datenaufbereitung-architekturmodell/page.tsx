import type { Metadata } from 'next'
import DatenaufbereitungGuide from '@/src-pages/ratgeber/DatenaufbereitungGuide'

const TITLE = 'Datenaufbereitung: von CAD und GIS zum druckbaren Architekturmodell | ekdruck'
const DESCRIPTION =
  'Wie aus IFC, Revit, ArchiCAD, CityGML oder einem Geländemodell ein druckbares Modell wird. Mit Maßstabs-Tabelle, FDM-Grenzen und den acht Fehlern, an denen amtliche Geodaten scheitern.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://www.ek-druck.at/ratgeber/datenaufbereitung-architekturmodell' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.ek-druck.at/ratgeber/datenaufbereitung-architekturmodell',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'article',
    images: [{ url: 'https://www.ek-druck.at/cases/ortsmodell-hoehenlinien.jpg', width: 801, height: 1200 }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

export default function Page() {
  return <DatenaufbereitungGuide />
}
