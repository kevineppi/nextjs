import type { Metadata } from 'next'
import Architekturmodelle from '@/src-pages/Architekturmodelle'
import {
  buildDachAlternates,
  STANDARD_ROBOTS,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Architekturmodelle im 3D-Druck · Wettbewerbs- & Präsentationsmodelle | ekdruck',
  description: 'Architekturmodellbau aus Österreich: Wettbewerbsmodelle, Einreichmodelle, Städtebaumodelle. Direkt aus ArchiCAD, Revit oder IFC. Angebot in 6 h.',
  keywords: 'architekturmodell, architekturmodell drucken, architekturmodell 3d druck, architekturmodellbau, wettbewerbsmodell, präsentationsmodell architektur, städtebauliches modell, bauherrenmodell, stadtmodell drucken, gebäudemodell, architekturmodell wien, architekturmodell österreich, modellbau architektur, archicad 3d druck, revit modell drucken, sketchup modell drucken, rhino modell, maßstab 1 100, maßstab 1 200, maßstab 1 500, weißes modell, präsentationsmodell',
  alternates: buildDachAlternates('/architekturmodelle'),
  openGraph: {
    title: 'Architekturmodelle im 3D-Druck · Wettbewerbs- & Präsentationsmodelle | ekdruck',
    description: 'Architekturmodellbau aus Österreich: Wettbewerbsmodelle, Einreichmodelle, Städtebaumodelle. Direkt aus ArchiCAD, Revit oder IFC. Angebot in 6 h.',
    url: 'https://www.ek-druck.at/architekturmodelle',
    siteName: 'ekdruck · 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'ekdruck · Architekturmodelle aus dem 3D-Druck' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architekturmodelle im 3D-Druck · Wettbewerbs- & Präsentationsmodelle | ekdruck',
    description: 'Architekturmodellbau aus Österreich: Wettbewerbsmodelle, Einreichmodelle, Städtebaumodelle. Direkt aus ArchiCAD, Revit oder IFC. Angebot in 6 h.',
  },
  robots: STANDARD_ROBOTS,
}

const SERVICE_LD = serviceSchema({
  serviceType: 'Architekturmodelle 3D-Druck',
  description:
    'Maßgefertigte Architekturmodelle aus dem 3D-Druck für Wettbewerbe, Bauherren und Stadtmodelle. Maßstab 1:50 bis 1:500. PLA matt, PETG, ASA. Lieferung in ganz DACH.',
  url: 'https://www.ek-druck.at/architekturmodelle',
  lowPrice: '20',
  highPrice: '5000',
})

const FAQ_LD = faqSchema([
  {
    q: 'Wie lange dauert ein Architekturmodell 1:500?',
    a: 'Ein typisches Situationsmodell im Maßstab 1:500 ist je nach Detailgrad und Modellgröße in 5-10 Werktagen versandfertig. Express-Service auf Anfrage in 72h möglich.',
  },
  {
    q: 'Welche Materialien verwendet ihr für Architekturmodelle?',
    a: 'Standardmäßig PLA matt (cremeweiß oder anthrazit) und PETG für transparente Elemente. Für Outdoor-Modelle ASA. Multi-Material-Druck mit der Prusa XL ermöglicht bis zu 5 Farben in einem Modell.',
  },
  {
    q: 'Was kostet ein Architekturmodell für Wettbewerbe?',
    a: 'Wettbewerbsmodelle liegen je nach Größe und Detail typischerweise zwischen €450 und €3.500 netto. Für eine konkrete Berechnung nutzen Sie unseren Kostenrechner mit Ihrer DXF/IFC-Datei.',
  },
  {
    q: 'Liefert ihr in die Schweiz?',
    a: 'Ja, Lieferung in die Schweiz erfolgt per DHL Express. Aufgrund unserer Kleinunternehmerregelung in Österreich wird keine AT-USt ausgewiesen. Die schweizerische Einfuhr-Mehrwertsteuer (8,1%) erhebt der Zoll beim Empfänger.',
  },
  {
    q: 'Können Modelle in mehreren Varianten (Bestand/Neubau) geliefert werden?',
    a: 'Ja. Wir bauen austauschbare Parzellen-Inserts mit Magnet-Fixierung · der Wechsel zwischen Bestands- und Neubauzustand erfolgt in Sekunden. Ideal für Bauträger und Architekturpitches.',
  },
  {
    q: 'Sind die Modelle UV-beständig für Outdoor-Ausstellung?',
    a: 'Bei Druck in ASA-Filament ja, etwa für 6-18 Monate je nach Witterung. PLA und PETG sind für Indoor-Modelle ideal, vergilben aber im direkten Sonnenlicht.',
  },
])

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Architekturmodelle', url: '/architekturmodelle' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <Architekturmodelle />
    </>
  )
}
