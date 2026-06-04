import type { Metadata } from 'next'
import Materialien from '@/src-pages/Materialien'

export const metadata: Metadata = {
  title: '3D-Druck Material wählen — PLA, PETG, ASA, Carbon-PA',
  description: 'Was kostet welches Filament und wofür ist es gut? Vergleich PLA (€15/kg) bis Carbon-PA (€120/kg) mit Temperatur, Festigkeit, Anwendung.',
  alternates: {
    canonical: 'https://www.ek-druck.at/3d-druck-materialien',
  },
  openGraph: {
    title: '3D-Druck Material wählen — PLA, PETG, ASA, Carbon-PA',
    description: 'Was kostet welches Filament und wofür ist es gut? Vergleich PLA (€15/kg) bis Carbon-PA (€120/kg) mit Temperatur, Festigkeit, Anwendung.',
    url: 'https://www.ek-druck.at/3d-druck-materialien',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D-Druck Material wählen — PLA, PETG, ASA, Carbon-PA',
    description: 'Was kostet welches Filament und wofür ist es gut? Vergleich PLA (€15/kg) bis Carbon-PA (€120/kg) mit Temperatur, Festigkeit, Anwendung.',
  },
}

export default function Page() {
  return <Materialien />
}
