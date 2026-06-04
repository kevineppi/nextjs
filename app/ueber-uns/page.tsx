import type { Metadata } from 'next'
import UeberUns from '@/src-pages/UeberUns'
import { buildDachAlternates, STANDARD_ROBOTS, breadcrumbSchema, ORG_ID } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Über uns — Kevin Eppensteiner, Gründer von ek-druck',
  description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ. 3 industrielle FDM-Drucker. ★5,0 (31 Bewertungen).',
  alternates: buildDachAlternates('/ueber-uns'),
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Über uns — Kevin Eppensteiner, Gründer von ek-druck',
    description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ. 3 industrielle FDM-Drucker. ★5,0 (31 Bewertungen).',
    url: 'https://www.ek-druck.at/ueber-uns',
    siteName: 'ekdruck – 3D-Druck Österreich',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png', width: 1200, height: 630, alt: 'Kevin Eppensteiner — Inhaber ekdruck e.U. aus Gunskirchen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über uns — Kevin Eppensteiner, Gründer von ek-druck',
    description: 'Wer hinter ekdruck steht: Kevin Eppensteiner, 21, Maschinenbau-Student und Inhaber. Werkstatt in Gunskirchen, OÖ.',
  },
}

// Person-Schema für E-E-A-T (Google's Experience-Expertise-Authoritativeness-Trustworthiness)
const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.ek-druck.at/ueber-uns#kevin',
  name: 'Kevin Eppensteiner',
  givenName: 'Kevin',
  familyName: 'Eppensteiner',
  url: 'https://www.ek-druck.at/ueber-uns',
  image: 'https://www.ek-druck.at/lovable-uploads/a2a7821e-537c-4599-9e3e-c212d6a9bb02.png',
  jobTitle: 'Gründer & Geschäftsführer',
  worksFor: { '@id': ORG_ID },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Fachhochschule Oberösterreich — Maschinenbau',
  },
  knowsAbout: [
    'FDM 3D-Druck',
    'SLA 3D-Druck',
    'SLS 3D-Druck',
    'Rapid Prototyping',
    'Architekturmodellbau',
    'Messemodellbau',
    'Kleinserienfertigung',
    'CAD',
    'Materialwissenschaft Filamente',
  ],
  nationality: { '@type': 'Country', name: 'Austria' },
}

const ABOUT_LD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Über uns — ekdruck e.U.',
  url: 'https://www.ek-druck.at/ueber-uns',
  about: { '@id': ORG_ID },
  mainEntity: { '@id': 'https://www.ek-druck.at/ueber-uns#kevin' },
}

const BREADCRUMB_LD = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Über uns', url: '/ueber-uns' },
])

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <UeberUns />
    </>
  )
}
