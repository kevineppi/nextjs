// ─────────────────────────────────────────────────────────────
// SPEISEKARTEN-LEADS · eigener Vertriebskanal, strikt getrennt
// von allen anderen CRM-Daten (Kontaktanfragen, Referenzen).
//
// PRODUKT: Abdeckung, die auf das Ende einer Speisekarten-
// Klemmschiene aufgesetzt wird. Schützt die Kante vor
// Druckstellen, verschließt die offene Seite, abnehmbar zum
// Seitentausch. Gebrauchsmuster-geschützt, im Spritzguss kaum
// umsetzbar. Verkaufsargument ist nicht der Preis, sondern
// weniger Reklamationen beim Hersteller.
//
// PRIO-LOGIK: A bekommen Firmen mit Klemmsystemen im Sortiment
// (direkter Produkt-Fit) plus der größte Marktteilnehmer.
//
// Kontaktdaten aus öffentlichen Impressum-, Kontakt- und
// Team-Seiten verifiziert. Keine Adresse ist konstruiert.
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
  mailBetreff: string
  mailText: string
}

// ⛔ BLACKLIST: diese Kontakte werden NICHT angeschrieben.
// Bewusst als eigene Liste geführt, damit sie nicht versehentlich
// wieder in die Kontaktliste rutschen.
export const SPEISEKARTEN_BLACKLIST = [
  {
    firma: 'Gastrotopcard',
    grund: 'Privater WhatsApp-Kontakt von Kevin. Wird auf keinen Fall über dieses CRM oder per Kaltmail angeschrieben.',
  },
]

const SIGNATUR = `Beste Grüße
Kevin Eppensteiner
ek-druck, Gunskirchen
+43 676 5517197
office@ek-druck.at`

export const SPEISEKARTEN_LEADS: SpeisekartenLead[] = [
  {
    id: 'klemmbinder',
    firma: 'Klemmbinder.de (Bernd Seliger)',
    website: 'https://www.klemmbinder.de',
    ort: 'Wissgoldingen',
    land: 'DE',
    kategorie: 'Hersteller Klemmbindesysteme',
    ansprechpartner: 'Bernd Seliger',
    funktion: 'Inhaber',
    email: 'info@klemmbinder.de',
    telefon: '+49 7162 30 19 400',
    prioritaet: 'A',
    notiz: 'Bester Produkt-Fit der Liste. Reiner Klemmsystem-Spezialist: A6 bis A3, 26 Farben, drei Klemmschienenbreiten. Genau die Schienen, für die die Abdeckung gemacht ist.',
    mailBetreff: 'Kurze Frage zu den Enden Ihrer Klemmschienen',
    mailText: `Guten Tag Herr Seliger,

kurze Frage aus der Praxis: Bekommen Sie Rückmeldungen von Kunden, dass die Kanten an den Enden der Klemmschiene mit der Zeit Druckstellen bekommen?

Mir ist das bei zwei Betrieben kurz hintereinander aufgefallen. Deshalb habe ich eine kleine Abdeckung entwickelt, die man auf das Schienenende aufsetzt. Sie schützt die Kante, verschließt die offene Seite und lässt sich zum Tauschen der Seiten wieder abnehmen. Ist inzwischen als Gebrauchsmuster eingetragen.

Sie haben ja drei Schienenbreiten im Programm. Wenn Sie mir sagen, welche für Sie interessant wäre, schicke ich Ihnen ein paar Muster zum Ausprobieren. Kostenlos, einfach zum Anschauen.

${SIGNATUR}`,
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
    notiz: 'Klemmsysteme im Sortiment und nur rund 15 km von Gunskirchen. Persönlicher Besuch mit Muster möglich, kein Telefon nötig. Schnellster Weg zur ersten Referenz.',
    mailBetreff: 'Nachbarschaftliche Anfrage aus Gunskirchen',
    mailText: `Guten Tag Frau Beck,

ich bin Kevin von ek-druck aus Gunskirchen, also praktisch um die Ecke.

Ich habe eine kleine Abdeckung für die Enden von Speisekarten-Klemmschienen entwickelt. Hintergrund: Die Kanten dort bekommen mit der Zeit Druckstellen, das Leder reibt am Tisch und die offene Seite schaut irgendwann nicht mehr schön aus. Meine Abdeckung wird einfach aufgesetzt, schützt die Kante und lässt sich zum Seitentausch wieder abnehmen.

Da wir fast Nachbarn sind: Soll ich auf einen Sprung vorbeikommen und Ihnen ein paar Muster mitbringen? Dauert keine zehn Minuten und Sie haben die Teile in der Hand.

${SIGNATUR}`,
  },
  {
    id: 'uhl-menu',
    firma: 'UHL-Menu GMBH',
    website: 'https://www.uhl-menu.com',
    ort: 'Wundschuh bei Graz',
    land: 'AT',
    kategorie: 'Hersteller Speisekartenmappen',
    ansprechpartner: 'Harald Uhl',
    funktion: 'Geschäftsführung (Quelle: WKO-Register, nicht Website)',
    email: 'uhl-austria@uhl-menu.com',
    telefon: '+43 316 767777-0',
    prioritaet: 'A',
    notiz: 'Führt ausdrücklich Magnet- und Klemmsysteme, direkter Produkt-Fit. Seit 1982, drei Standorte AT/DE/HU. Echtholz und Echtleder im Sortiment.',
    mailBetreff: 'Kantenschutz für Ihre Klemmsysteme',
    mailText: `Guten Tag Herr Uhl,

Sie führen ja Magnet- und Klemmsysteme im Programm, deshalb melde ich mich.

Bei Klemmschienen entstehen an den offenen Enden mit der Zeit Druckstellen an der Kante, gerade bei Leder und Leinen. Ich habe eine Abdeckung entwickelt, die man dort aufsetzt: schützt die Kante, verschließt die Öffnung und ist zum Seitentausch wieder abnehmbar. Das Ganze ist als Gebrauchsmuster eingetragen.

Gefertigt wird im 3D-Druck, das heißt jede Farbe ist möglich und es braucht keine Mindestmenge.

Wenn Sie mir sagen, welches Schienenprofil Sie verwenden, schicke ich Ihnen passende Muster zum Testen.

${SIGNATUR}`,
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
    notiz: 'Führt Klemmmappen. Ältester Anbieter, seit 1891, Hotelgruppen in ganz Europa. Viele Karten im täglichen Gästekontakt, entsprechend Kantenverschleiß. DE-Vertrieb: Rüd Progastro, info@rued.info.',
    mailBetreff: 'Kanten an Klemmmappen, kleine Lösung dafür',
    mailText: `Guten Tag Herr Breitenfelner,

Sie haben Klemmmappen im Sortiment und beliefern Hotelgruppen, also Karten, die täglich durch viele Hände gehen.

Genau dort ist mir ein Thema aufgefallen: An den Enden der Klemmschiene entstehen Druckstellen, das Material reibt am Tisch und die offene Seite wirkt nach einiger Zeit nicht mehr hochwertig. Ich habe eine Abdeckung entwickelt, die auf das Schienenende aufgesetzt wird und genau das verhindert. Abnehmbar bleibt sie, das Personal kann Seiten weiter normal tauschen. Als Gebrauchsmuster eingetragen.

Wäre das etwas, das Sie sich ansehen wollen? Ich schicke gerne Muster passend zu Ihrem Profil.

${SIGNATUR}`,
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
    notiz: 'Starker Klemm-Fit: betreibt zusätzlich klemmbretter.eu, Metallbeschläge und Klemmsysteme. Positioniert sich über Material und Haptik statt Preis. Alternativmail: mail@agenturkgb.de',
    mailBetreff: 'Abdeckung für die Enden von Klemmschienen',
    mailText: `Guten Tag Herr Becker,

Sie arbeiten viel mit Klemmsystemen, deshalb dürfte Ihnen das Thema bekannt vorkommen: An den offenen Enden der Schiene bekommt die Kante mit der Zeit Druckstellen, besonders bei Leinen und Leder.

Ich habe dafür eine Abdeckung gebaut, die man auf das Schienenende aufsetzt. Sie schützt die Kante, macht die offene Seite sauber zu und lässt sich zum Seitentausch wieder abnehmen. Ist als Gebrauchsmuster eingetragen und wird im 3D-Druck gefertigt, also in jeder Farbe und ohne Mindestmenge.

Da Sie ohnehin über Material und Verarbeitung verkaufen und nicht über den Preis, könnte das gut zu Ihrem Sortiment passen. Muster schicke ich gerne, sagen Sie mir einfach die Schienenbreite.

${SIGNATUR}`,
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
    notiz: 'Der Größte im Feld: über 2,5 Mio. Mappen/Jahr, 2.000+ Modelle, seit 1967. Weitere Direktmails: markus.lindner@li-print.de, marita.lindner@li-print.de, beratung@li-print.de',
    mailBetreff: 'Reklamationen an Klemmschienen-Kanten, Idee dazu',
    mailText: `Guten Tag Herr Lindner,

bei Speisekarten mit Klemmschiene entstehen an den Schienenenden häufig Druckstellen an der Kante. Leder und Leinen reiben am Tisch, die offene Seite franst optisch aus, und die Reklamation landet am Ende beim Hersteller.

Ich habe dafür eine Abdeckung entwickelt, die auf das Schienenende aufgesetzt wird: Kante geschützt, Öffnung sauber verschlossen, zum Seitentausch wieder abnehmbar. Als Gebrauchsmuster eingetragen, im Spritzguss wegen der Geometrie kaum machbar, deshalb fertige ich sie im 3D-Druck.

Bei Ihren Stückzahlen wäre das entweder ein Zusatzartikel oder eine Möglichkeit, die Reklamationsquote zu senken. Ich schicke Ihnen gerne Muster, passend zu dem Profil, das Sie am häufigsten verbauen.

${SIGNATUR}`,
  },
  {
    id: 'maren-thomsen',
    firma: 'Maren Thomsen GmbH',
    website: 'https://www.marenthomsen.de',
    ort: 'Berlin',
    land: 'DE',
    kategorie: 'Druckerei / Hersteller Speisekarten und Mappen',
    ansprechpartner: 'Maren Thomsen',
    funktion: 'Geschäftsführung',
    email: 'info@marenthomsen.de',
    telefon: '+49 30 88720 77-0',
    prioritaet: 'A',
    notiz: 'Eigene Produktion in Berlin, Stückzahlen 5 bis 5.000. Referenzen: Mövenpick, Hilton, Scandic, design hotels AG. Verkauft an Ketten mit Premium-Budget.',
    mailBetreff: 'Kleine Sache für Ihre Hotelkunden',
    mailText: `Guten Tag Frau Thomsen,

Sie arbeiten für Häuser wie Mövenpick und Hilton, also für Kunden, bei denen eine abgestoßene Kante an der Speisekarte sofort auffällt.

Genau da setzt meine Idee an: An den Enden von Klemmschienen entstehen mit der Zeit Druckstellen, weil Leder und Leinen permanent am Tisch reiben. Ich habe eine Abdeckung entwickelt, die man dort aufsetzt. Sie schützt die Kante, verschließt die Öffnung sauber und bleibt abnehmbar, damit Seiten weiter getauscht werden können. Als Gebrauchsmuster eingetragen.

Gefertigt im 3D-Druck, also jede Farbe möglich, auch abgestimmt auf ein Hausdesign, und ohne Mindestmenge.

Wenn Sie neugierig sind, schicke ich Muster.

${SIGNATUR}`,
  },
  {
    id: 'fluhrer',
    firma: 'Fluhrer Verlag GmbH',
    website: 'https://www.fluhrer-speisekarten.de',
    ort: 'Bielefeld',
    land: 'DE',
    kategorie: 'Druckerei / Hersteller Speisekarten und Mappen',
    ansprechpartner: 'Heike Fluhrer',
    funktion: 'Geschäftsführerin',
    email: 'info@fluhrer-speisekarten.de',
    telefon: '+49 521 694 32',
    prioritaet: 'B',
    notiz: 'Seit 1982, eigene Manufaktur, Made in Germany. Führt auch Klemmbretter. Breites Sortiment inkl. Wein-, Rechnungs- und Zimmermappen.',
    mailBetreff: 'Ergänzung für Ihre Klemmbretter und Mappen',
    mailText: `Guten Tag Frau Fluhrer,

Sie fertigen in eigener Manufaktur, deshalb kennen Sie das Thema vermutlich: An den Enden von Klemmschienen bekommt die Kante mit der Zeit Druckstellen, das Material reibt am Tisch und die offene Seite schaut nicht mehr sauber aus.

Ich habe eine kleine Abdeckung entwickelt, die genau dort aufgesetzt wird. Kante geschützt, Öffnung zu, zum Seitentausch wieder abnehmbar. Als Gebrauchsmuster eingetragen, gefertigt im 3D-Druck in jeder Farbe und ohne Mindestmenge.

Wäre das eine sinnvolle Ergänzung zu Ihrem Sortiment? Muster schicke ich gerne unverbindlich.

${SIGNATUR}`,
  },
  {
    id: 'iba-hartmann',
    firma: 'IBA Hartmann GmbH & Co. KG',
    website: 'https://logo.iba-hartmann.de',
    ort: 'Augsburg',
    land: 'DE',
    kategorie: 'Werbeartikel-Veredler mit Speisekartenmappen',
    ansprechpartner: 'Markus Hartmann',
    funktion: 'Geschäftsführer',
    email: 'hallo.logo@iba-hartmann.de',
    telefon: '+49 821 79409-0',
    prioritaet: 'B',
    notiz: 'Größter Werbeartikler der Liste. Verkauft bereits Objekte mit Logo an gehobene Gastronomie. Holz, Leder, Kunstleder.',
    mailBetreff: 'Zusatzartikel zu Ihren Speisekartenmappen',
    mailText: `Guten Tag Herr Hartmann,

Sie liefern Speisekartenmappen an die gehobene Gastronomie, also an Betriebe, bei denen die Optik zählt.

Bei Mappen mit Klemmschiene entstehen an den Schienenenden mit der Zeit Druckstellen und unsaubere Kanten. Ich habe dafür eine Abdeckung entwickelt, die dort aufgesetzt wird und die Kante schützt. Abnehmbar bleibt sie, damit Seiten weiter getauscht werden können. Als Gebrauchsmuster eingetragen.

Gefertigt im 3D-Druck, in jeder Farbe, auch abgestimmt auf Hausfarben, ohne Mindestmenge und ohne Werkzeugkosten.

Falls das für Ihr Sortiment interessant ist, schicke ich Muster.

${SIGNATUR}`,
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
    mailBetreff: 'Kleine Idee für Ihre Speisekarten',
    mailText: `Guten Tag Herr Galvan,

Sie fertigen für die Tiroler Hotellerie, also für Häuser mit hoher Gästefrequenz und entsprechend beanspruchten Karten.

Mir ist aufgefallen, dass bei Klemmschienen an den offenen Enden mit der Zeit Druckstellen entstehen und die Kante unsauber wird. Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird: schützt die Kante, verschließt die Öffnung, bleibt zum Seitentausch abnehmbar. Als Gebrauchsmuster eingetragen.

Ich bin selbst aus Oberösterreich, kurze Wege also. Wenn Sie wollen, schicke ich Ihnen Muster zum Ansehen.

${SIGNATUR}`,
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
    notiz: 'Familienbetrieb seit 1963, Fertigung in Bielefeld. Zweitmarke schoene-mappen.de. Kunststoff-Verarbeiter: entweder Konkurrenz oder Ergänzung, genau deshalb Gespräch wert.',
    mailBetreff: 'Ergänzung zu Ihren Speisekartenmappen',
    mailText: `Guten Tag Frau Heidemann,

Sie verarbeiten seit Jahrzehnten Kunststoff, deshalb schreibe ich Ihnen ganz offen.

Bei Speisekarten mit Klemmschiene bekommt die Kante an den Schienenenden mit der Zeit Druckstellen. Ich habe dafür eine Abdeckung entwickelt, die dort aufgesetzt wird und die offene Seite sauber verschließt. Sie ist als Gebrauchsmuster eingetragen, und wegen der Geometrie im Spritzguss nur schwer machbar, deshalb entsteht sie bei mir im 3D-Druck.

Für Sie könnte das eine Ergänzung sein, die Sie selbst nicht wirtschaftlich fertigen können. Falls Sie sich das ansehen wollen, schicke ich gerne Muster.

${SIGNATUR}`,
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
    mailBetreff: 'Kantenschutz für Speisekarten mit Klemmschiene',
    mailText: `Guten Tag Herr Sanders,

als Buchbinder wissen Sie besser als die meisten, wie schnell eine Kante unschön wird, wenn sie ungeschützt ist.

Genau darum geht es: An den Enden von Klemmschienen entstehen Druckstellen, weil das Material dauernd am Tisch reibt. Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird, die Kante schützt und die offene Seite verschließt. Zum Seitentausch bleibt sie abnehmbar. Als Gebrauchsmuster eingetragen.

Wenn Sie das interessiert, schicke ich Ihnen ein paar Muster zum Anfassen.

${SIGNATUR}`,
  },
  {
    id: 'sigel',
    firma: 'SIGEL GmbH',
    website: 'https://www.sigel-office.com',
    ort: 'Mertingen',
    land: 'DE',
    kategorie: 'Markenhersteller mit Speisekarten-Mappen-Linie',
    ansprechpartner: 'Daniel Petrasch',
    funktion: 'Geschäftsführer',
    email: 'info@sigel.de',
    telefon: '+49 9078 81-0',
    prioritaet: 'C',
    notiz: 'Größter Konzern der Liste, rund 1.800 Artikel, 32 Speisekarten-Mappen-Modelle. Listung braucht Lieferantenaudit und Mengengarantie. Erst ansprechen, wenn 2 bis 3 Partner live sind.',
    mailBetreff: 'Zusatzartikel für Ihre Speisekarten-Mappen',
    mailText: `Guten Tag,

Sie führen mehrere Speisekarten-Mappen mit Klemmschiene im Sortiment.

Bei diesen Systemen entstehen an den Schienenenden mit der Zeit Druckstellen an der Kante. Ich habe dafür eine Abdeckung entwickelt, die dort aufgesetzt wird, die Kante schützt und die Öffnung verschließt, ohne den Seitentausch zu behindern. Die Lösung ist als Gebrauchsmuster eingetragen.

Falls das für Ihr Sortiment relevant sein könnte, sagen Sie mir gerne, an wen im Produktmanagement ich mich wenden darf. Muster schicke ich unverbindlich zu.

${SIGNATUR}`,
  },
  {
    id: 'elbcards',
    firma: 'Elbcards (Michael Scholz)',
    website: 'https://www.elbcards.de',
    ort: 'Hamburg',
    land: 'DE',
    kategorie: 'Hersteller Speisekarten aus Holz, Leder, Leinen',
    ansprechpartner: 'Michael Scholz',
    funktion: 'Inhaber',
    email: 'office@elbcards.de',
    telefon: '+49 151 74532381',
    prioritaet: 'C',
    notiz: 'Junges kleines Unternehmen. Inhaltlich passend (Holz, Sondermaterial), aber wenig Volumen. Alternativmail: info@elbcards.de',
    mailBetreff: 'Kurze Frage von einem anderen Kleinbetrieb',
    mailText: `Guten Tag Herr Scholz,

wir sind beide eher die kleinen in der Branche, deshalb ganz direkt.

Ich habe eine Abdeckung für die Enden von Speisekarten-Klemmschienen entwickelt. Sie verhindert die Druckstellen, die dort mit der Zeit entstehen, verschließt die offene Seite und bleibt abnehmbar. Als Gebrauchsmuster eingetragen, gefertigt im 3D-Druck, also jede Farbe möglich und keine Mindestmenge.

Falls Sie so etwas bei Ihren Karten brauchen können, schicke ich Ihnen Muster. Und falls nicht, sagen Sie es einfach, dann ist auch gut.

${SIGNATUR}`,
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
    mailBetreff: 'Zubehör für Ihre Speisekartenmappen',
    mailText: `Guten Tag Frau Hansla,

Sie haben ein breites Sortiment an Mappen und Hüllen, deshalb melde ich mich mit einem kleinen Zubehörteil.

Bei Klemmschienen entstehen an den offenen Enden mit der Zeit Druckstellen an der Kante. Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird, die Kante schützt und die Öffnung sauber verschließt. Als Gebrauchsmuster eingetragen, im 3D-Druck gefertigt, jede Farbe möglich, keine Mindestmenge.

Als Ergänzung im Shop wäre das ein Artikel mit guter Marge und ohne Lagerrisiko, weil ich auch kleine Mengen nachliefern kann. Muster schicke ich gerne.

${SIGNATUR}`,
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
    notiz: 'Keine Mail öffentlich, nur Kontaktformular: sueba-mappen.de/footer/impressum. Fertigt Hüllen, nicht die Außen-Cover.',
    mailBetreff: 'Abdeckung für Klemmschienen-Enden',
    mailText: `Guten Tag Herr Kirsch,

Sie fertigen Hüllen und Mappen für die Gastronomie, deshalb kurz zu einem Detail an den Klemmschienen.

An den offenen Enden entstehen dort mit der Zeit Druckstellen an der Kante. Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird und das verhindert, abnehmbar für den Seitentausch. Als Gebrauchsmuster eingetragen.

Falls das zu Ihrem Programm passt, schicke ich gerne Muster. Über welche Adresse erreiche ich Sie dafür am besten?

${SIGNATUR}`,
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
    mailBetreff: 'Kleines Zubehör für Speisekarten mit Klemmschiene',
    mailText: `Guten Tag Frau Brandt,

kurz und ohne Umschweife: Bei Speisekarten mit Klemmschiene bekommt die Kante an den Schienenenden mit der Zeit Druckstellen.

Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird, die Kante schützt und die offene Seite verschließt. Zum Seitentausch bleibt sie abnehmbar. Als Gebrauchsmuster eingetragen, gefertigt im 3D-Druck in jeder Farbe, ohne Mindestmenge.

Falls das für Ihre Kunden interessant ist, schicke ich Ihnen Muster zum Ansehen.

${SIGNATUR}`,
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
    mailBetreff: 'Zubehör für Speisekartenmappen',
    mailText: `Guten Tag Herr Hofknecht,

Sie handeln mit Speisekarten- und Hotelmappen, deshalb eine kurze Anfrage.

Bei Mappen mit Klemmschiene entstehen an den Schienenenden Druckstellen an der Kante. Ich habe dafür eine Abdeckung entwickelt, die dort aufgesetzt wird und das verhindert, abnehmbar für den Seitentausch. Als Gebrauchsmuster eingetragen, im 3D-Druck gefertigt, jede Farbe, keine Mindestmenge.

Wäre das ein Artikel für Ihr Sortiment? Muster schicke ich unverbindlich.

${SIGNATUR}`,
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
    mailBetreff: 'Abdeckung für Klemmschienen-Enden an Speisekarten',
    mailText: `Guten Tag,

Sie fertigen Speisekartenmappen und bieten Individualisierung nach Farbe und Material an.

Passend dazu: An den Enden von Klemmschienen entstehen mit der Zeit Druckstellen an der Kante. Ich habe eine Abdeckung entwickelt, die dort aufgesetzt wird, die Kante schützt und die Öffnung verschließt, abnehmbar für den Seitentausch. Als Gebrauchsmuster eingetragen, gefertigt im 3D-Druck in jeder Farbe und ohne Mindestmenge.

Wenn Sie sich das ansehen möchten, schicke ich gerne Muster.

${SIGNATUR}`,
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
