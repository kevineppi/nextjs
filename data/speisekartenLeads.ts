// ─────────────────────────────────────────────────────────────
// SPEISEKARTEN-LEADS · Hersteller von Speisekartenmappen (DACH)
// Zielgruppe für die 3D-gedruckte Kantenabdeckung für
// Klemmschienen (Gebrauchsmuster-geschützt) als
// Wiederverkäufer/Vertriebspartner.
//
// PRODUKT: Abdeckung, die auf das Ende einer Speisekarten-
// Klemmschiene aufgesetzt wird. Schützt die Kante vor
// Druckstellen, verschließt die offene Seite, abnehmbar zum
// Seitentausch. Verkaufsargument ist nicht der Preis, sondern
// WENIGER REKLAMATIONEN beim Hersteller.
//
// PRIO-LOGIK: A bekommen Firmen mit Klemmsystemen im Sortiment
// (direkter Produkt-Fit) plus der Bestandskunde plus der
// größte Marktteilnehmer.
//
// Alle Kontaktdaten wurden aus öffentlichen Impressum-, Kontakt-
// und Team-Seiten verifiziert (Recherche 2026-08). Keine Adresse
// ist konstruiert oder geraten. Zwei Namen stammen aus offiziellen
// Registern statt von der Website, das ist in der Notiz vermerkt.
// ─────────────────────────────────────────────────────────────

export type LeadPrioritaet = 'A' | 'B' | 'C'

export interface SpeisekartenLead {
  id: string
  firma: string
  website: string
  ort: string
  land: 'AT' | 'DE' | 'SK'
  kategorie: string
  ansprechpartner: string
  funktion: string
  email: string
  telefon: string
  prioritaet: LeadPrioritaet
  notiz: string
}

export const SPEISEKARTEN_LEADS: SpeisekartenLead[] = [
  {
    id: 'gastrotopcard',
    firma: 'Gastrotopcard',
    website: '',
    ort: '',
    land: 'AT',
    kategorie: 'Hersteller Speisekarten · BESTANDSKUNDE',
    ansprechpartner: 'bekannt (Bestandskunde)',
    funktion: '',
    email: '',
    telefon: '',
    prioritaet: 'A',
    notiz: 'Höchste Abschlusswahrscheinlichkeit von allen. Gastrotopcard ist selbst als Speisekarten-Hersteller gelistet UND bereits laufender Kunde. Gespräch über Wiederverkauf statt reiner Auftragsfertigung kostet nichts. Kein Kaltkontakt, kein Telefon nötig. Hier zuerst anfangen.',
  },
  {
    id: 'lindner-mappenhaus',
    firma: 'Druckbetrieb Lindner GmbH & Co. KG (Mappenhaus)',
    website: 'https://www.mappenhaus.de',
    ort: 'Mainz',
    land: 'DE',
    kategorie: 'Hersteller Speisekartenmappen / Druckerei',
    ansprechpartner: 'Thomas Lindner',
    funktion: 'Geschäftsführer, Sonderdruck/Mappen/Branchenlösungen',
    email: 'thomas.lindner@li-print.de',
    telefon: '+49 6131 98281-18',
    prioritaet: 'A',
    notiz: 'Der Größte im Feld: über 2,5 Mio. Mappen/Jahr, 2.000+ Modelle, seit 1967. Beraterteam mit Namen und Direktmails öffentlich. Weitere: markus.lindner@li-print.de, marita.lindner@li-print.de, beratung@li-print.de. Muster mit Lindner-Logo beilegen.',
  },
  {
    id: 'uhl-menu',
    firma: 'UHL-Menu GMBH',
    website: 'https://www.uhl-menu.com',
    ort: 'Wundschuh bei Graz',
    land: 'AT',
    kategorie: 'Hersteller Speisekartenmappen',
    ansprechpartner: 'Harald Uhl',
    funktion: 'Gewerberechtliche Geschäftsführung (Quelle: WKO-Register, nicht Website)',
    email: 'uhl-austria@uhl-menu.com',
    telefon: '+43 316 767777-0',
    prioritaet: 'A',
    notiz: 'Führt ausdrücklich MAGNET- UND KLEMMSYSTEME, also direkter Produkt-Fit für die Kantenabdeckung. Seit 1982, drei Standorte AT/DE/HU. Echtholz und Echtleder im Sortiment, Sondermaterial ist dort schon Teil des Geschäftsmodells. Nach Schienenprofil fragen.',
  },
  {
    id: 'reischl-sohn',
    firma: 'Reischl+Sohn GmbH (speisekarten.de)',
    website: 'https://www.reischl.at',
    ort: 'Lamprechtshausen bei Salzburg',
    land: 'AT',
    kategorie: 'Hersteller Speisekartenmappen',
    ansprechpartner: 'Roman Breitenfelner',
    funktion: 'Geschäftsführer',
    email: 'menu@reischl.at',
    telefon: '+43 6274 7331',
    prioritaet: 'A',
    notiz: 'Führt KLEMMMAPPEN, direkter Produkt-Fit. Ältester Anbieter, gegründet 1891, Hotelgruppen in ganz Europa als Langzeitkunden, also viele Karten im täglichen Gästekontakt und entsprechend Kantenverschleiß. DE-Vertrieb über Rüd Progastro, info@rued.info, +49 7731 9249-60.',
  },
  {
    id: 'scampolo',
    firma: 'Scampolo Design (Anita Beck)',
    website: 'https://shop.scampolo.at',
    ort: 'Bad Wimsbach, OÖ',
    land: 'AT',
    kategorie: 'Hersteller / Händler Speisekarten und Gastro-Zubehör',
    ansprechpartner: 'Anita Beck',
    funktion: 'Inhaberin',
    email: 'office@scampolo.at',
    telefon: '+43 7245 20165-0',
    prioritaet: 'A',
    notiz: 'Führt Klemmsysteme im Sortiment UND liegt nur rund 15 km von Gunskirchen. Persönlicher Besuch mit Muster möglich, kein Telefon nötig. Kleiner Umsatz, aber schnellster Weg zur ersten Wiederverkäufer-Referenz, die bei Lindner, Uhl und Klemmbinder zitierbar ist.',
  },
  {
    id: 'maren-thomsen',
    firma: 'Maren Thomsen GmbH',
    website: 'https://www.marenthomsen.de',
    ort: 'Berlin',
    land: 'DE',
    kategorie: 'Druckerei / Hersteller Speisekarten und Mappen',
    ansprechpartner: 'Maren Thomsen, Slawomir Choluj',
    funktion: 'Geschäftsführung',
    email: 'info@marenthomsen.de',
    telefon: '+49 30 88720 77-0',
    prioritaet: 'A',
    notiz: 'Eigene Produktion in Berlin, Stückzahlen 5 bis 5.000. Referenzen: Mövenpick, Hilton, Scandic, design hotels AG. Verkauft bereits an Ketten mit Premium-Budget.',
  },
  {
    id: 'fluhrer',
    firma: 'Fluhrer Verlag GmbH',
    website: 'https://www.fluhrer-speisekarten.de',
    ort: 'Bielefeld',
    land: 'DE',
    kategorie: 'Druckerei / Hersteller Speisekarten und Mappen',
    ansprechpartner: 'Heike Fluhrer, Louisa Fluhrer-Aganović',
    funktion: 'Geschäftsführerinnen',
    email: 'info@fluhrer-speisekarten.de',
    telefon: '+49 521 694 32',
    prioritaet: 'B',
    notiz: 'Seit 1982, eigene Manufaktur, Made in Germany. Breites Sortiment inkl. Wein-, Rechnungs- und Zimmermappen. Kein separater Vertriebskontakt gelistet.',
  },
  {
    id: 'iba-hartmann',
    firma: 'IBA Hartmann GmbH & Co. KG',
    website: 'https://logo.iba-hartmann.de',
    ort: 'Augsburg',
    land: 'DE',
    kategorie: 'Werbeartikel-Veredler mit Speisekartenmappen',
    ansprechpartner: 'Markus Hartmann, Robert Krismayr',
    funktion: 'Geschäftsführer',
    email: 'hallo.logo@iba-hartmann.de',
    telefon: '+49 821 79409-0',
    prioritaet: 'B',
    notiz: 'Größter Werbeartikler der Liste. Verkauft bereits das Prinzip Objekt-mit-Logo an gehobene Gastronomie, deckt sich exakt mit dem Angebot. Holz, Leder, Kunstleder im Sortiment.',
  },
  {
    id: 'menucard',
    firma: 'MENUCARD Modruga Druck & Handelsges.m.b.H.',
    website: 'https://www.menucard.at',
    ort: 'Kramsach, Tirol',
    land: 'AT',
    kategorie: 'Hersteller Speisekarten und Hotelmappen',
    ansprechpartner: 'Gernot Galvan',
    funktion: 'Geschäftsführung',
    email: 'info@menucard.at',
    telefon: '+43 5337 62971',
    prioritaet: 'B',
    notiz: 'Familienbetrieb, lange am Markt. Handgefertigte Speise-, Getränke- und Hotelmappen. Tiroler Hotellerie als hochpreisiges Abnehmerfeld.',
  },
  {
    id: 'speisekartenzentrale',
    firma: 'Agentur KGB GbR (Speisekartenzentrale)',
    website: 'https://www.speisekartenzentrale.de',
    ort: 'Mainburg',
    land: 'DE',
    kategorie: 'Hersteller Speisekartenmappen und Klemmbretter',
    ansprechpartner: 'Helmut Becker, Doris Roeche',
    funktion: 'Inhaber',
    email: 'info@speisekartenzentrale.de',
    telefon: '+49 8751 619 99 22',
    prioritaet: 'A',
    notiz: 'Starker Klemm-Fit: betreibt zusätzlich klemmbretter.eu, führt Metallbeschläge und Klemmsysteme. Über 25 Jahre am Markt, positioniert sich über Material und Haptik statt Preis, passt also zum Premium-Argument der Kantenabdeckung. Alternativmail: mail@agenturkgb.de',
  },
  {
    id: 'heidemann-plastik',
    firma: 'heidemann plastik GmbH & Co. KG',
    website: 'https://www.heidemann-plastik.de',
    ort: 'Bielefeld',
    land: 'DE',
    kategorie: 'Hersteller Speisekartenmappen (Kunststoff)',
    ansprechpartner: 'Petra Heidemann',
    funktion: 'Geschäftsführerin',
    email: 'info@heidemann-plastik.de',
    telefon: '+49 521 97054-0',
    prioritaet: 'B',
    notiz: 'Familienbetrieb seit 1963, Fertigung in Bielefeld. Zweitmarke schoene-mappen.de. Ambivalent: 3D-Druck ist entweder Konkurrenz oder Premium-Ergänzung. Genau deshalb Gespräch wert.',
  },
  {
    id: 'sanders-gastronomiekarten',
    firma: 'Buchbinderei Sanders oHG (gastronomiekarten.de)',
    website: 'https://www.gastronomiekarten.de',
    ort: 'Hamburg',
    land: 'DE',
    kategorie: 'Buchbinderei / Hersteller Speisekarten',
    ansprechpartner: 'Lars Sanders',
    funktion: 'Vertretungsberechtigter Gesellschafter',
    email: 'kontakt@gastronomiekarten.de',
    telefon: '+49 40 23 35 80',
    prioritaet: 'B',
    notiz: 'Klassische Buchbinderei mit eigenem Gastro-Shop. Buchbinder denken in Materialien und Handarbeit, gute Gesprächsbasis.',
  },
  {
    id: 'klemmbinder',
    firma: 'Klemmbinder.de (Bernd Seliger)',
    website: 'https://www.klemmbinder.de',
    ort: 'Wissgoldingen',
    land: 'DE',
    kategorie: 'Hersteller Klemmbindesysteme und Speisekarten',
    ansprechpartner: 'Bernd Seliger',
    funktion: 'Inhaber',
    email: 'info@klemmbinder.de',
    telefon: '+49 7162 30 19 400',
    prioritaet: 'A',
    notiz: 'BESTER PRODUKT-FIT DER GANZEN LISTE. Reiner Klemmsystem-Spezialist: A6 bis A3, 26 Farben, DREI KLEMMSCHIENENBREITEN. Genau die Schienen, für die die Kantenabdeckung gemacht ist. Klein, aber jeder verkaufte Klemmbinder ist ein potenzieller Abnehmer. Nach Schienenprofil fragen und Muster für alle drei Breiten schicken.',
  },
  {
    id: 'sigel',
    firma: 'SIGEL GmbH',
    website: 'https://www.sigel-office.com',
    ort: 'Mertingen',
    land: 'DE',
    kategorie: 'Markenhersteller mit Speisekarten-Mappen-Linie',
    ansprechpartner: 'Daniel Petrasch',
    funktion: 'Alleiniger Geschäftsführer',
    email: 'info@sigel.de',
    telefon: '+49 9078 81-0',
    prioritaet: 'C',
    notiz: 'Größter Konzern der Liste, rund 1.800 Artikel, 32 Speisekarten-Mappen-Modelle. Produktseitig passend, prozessseitig schwer: Lieferantenaudit und Mengengarantie nötig. Erst ansprechen, wenn 2 bis 3 Partner live sind.',
  },
  {
    id: 'elbcards',
    firma: 'Elbcards (Michael Scholz)',
    website: 'https://www.elbcards.de',
    ort: 'Hamburg',
    land: 'DE',
    kategorie: 'Hersteller Speisekarten aus Holz, Leder, Leinen',
    ansprechpartner: 'Michael Scholz',
    funktion: 'Einzelunternehmer',
    email: 'office@elbcards.de',
    telefon: '+49 151 74532381',
    prioritaet: 'C',
    notiz: 'Junges kleines Unternehmen. Inhaltlich sehr passend (Holz, Sondermaterial), aber wenig Volumen zu erwarten. Alternativmail: info@elbcards.de',
  },
  {
    id: 'speisekartenmappen-de',
    firma: 'speisekartenmappen.de (Thea Hansla)',
    website: 'https://www.speisekartenmappen.de',
    ort: 'Varel',
    land: 'DE',
    kategorie: 'Händler mit Veredelung',
    ansprechpartner: 'Thea Hansla',
    funktion: 'Inhaberin',
    email: 'info@hansla.de',
    telefon: '+49 4451 957 461',
    prioritaet: 'C',
    notiz: 'Gut sortierter Shop mit Logodruck und Prägung, eher Händler als Fertiger. Zweitmarke speisen-karte.de',
  },
  {
    id: 'sueba',
    firma: 'SÜBA Vertriebs-GmbH & Co. KG',
    website: 'http://www.sueba-mappen.de',
    ort: 'Coburg',
    land: 'DE',
    kategorie: 'Hersteller Kunststoffhüllen für Speisekartenmappen',
    ansprechpartner: 'Bernd H. Kirsch',
    funktion: 'Geschäftsführer',
    email: '',
    telefon: '+49 7854 9697-0',
    prioritaet: 'C',
    notiz: 'Keine Mail öffentlich, nur Kontaktformular: sueba-mappen.de/footer/impressum. Fertigt Hüllen, nicht die Außen-Cover. Nur mittelbar passend.',
  },
  {
    id: 'gastrokart',
    firma: 'GASTROKART (Andrea Brandt)',
    website: 'https://www.gastrokart.de',
    ort: 'Kronweiler',
    land: 'DE',
    kategorie: 'Anbieter Speisekarten',
    ansprechpartner: 'Andrea Brandt',
    funktion: 'Inhaberin',
    email: 'info@gastrokart.de',
    telefon: '+49 6787 988330',
    prioritaet: 'C',
    notiz: 'Kleiner Anbieter.',
  },
  {
    id: 'rh-direkt',
    firma: 'RH-direkt (Reinhold Hofknecht)',
    website: 'https://www.rh-direkt.de',
    ort: 'Bayreuth',
    land: 'DE',
    kategorie: 'Händler Speisekarten und Gastronomiebedarf',
    ansprechpartner: 'Reinhold Hofknecht',
    funktion: 'Inhaber',
    email: 'info@rh-direkt.com',
    telefon: '+49 921 1676431',
    prioritaet: 'C',
    notiz: 'Sehr kleiner Händler mit eBay-Shop. Geringes Volumen.',
  },
  {
    id: 'gastro-palazzo',
    firma: 'GASTRO PALAZZO s.r.o.',
    website: 'https://gp-menu.com',
    ort: 'Bratislava',
    land: 'SK',
    kategorie: 'Hersteller Speisekartenmappen',
    ansprechpartner: 'kein Ansprechpartner öffentlich gelistet',
    funktion: '',
    email: 'info@gp-menu.com',
    telefon: '+421 910 237 572',
    prioritaet: 'C',
    notiz: 'Reiner Mappen-Spezialist mit Individualisierung nach Farbe und Material. Außerhalb DACH, deshalb nachrangig.',
  },
]

export const LEAD_STATUS = [
  { value: 'offen', label: 'Offen' },
  { value: 'kontaktiert', label: 'Kontaktiert' },
  { value: 'antwort', label: 'Antwort erhalten' },
  { value: 'termin', label: 'Termin/Gespräch' },
  { value: 'kunde', label: 'Partner gewonnen' },
  { value: 'abgesagt', label: 'Abgesagt' },
] as const

export type LeadStatusValue = typeof LEAD_STATUS[number]['value']
