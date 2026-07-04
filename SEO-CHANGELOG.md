# SEO-CHANGELOG, ek-druck.at

> Umsetzung des Arbeitsauftrags `SEO-UMSETZUNG.md` (Analyse 04.07.2026).
> Branch: `seo-umsetzung-jul`. Alle Aenderungen verifiziert mit `npm run build` (gruen) und curl gegen server-gerendertes HTML.
> Diese Datei ist die Grundlage fuer die GSC-Nacharbeit (siehe unten).

## 1. Geaenderte Titles + Meta (Task 1)

| Seite | Title neu |
|---|---|
| `/` (Home) | `ekdruck · Architekturmodelle & Messemodelle aus dem 3D-Druck | Österreich` |
| `/messemodelle` | `Messemodelle vom Spezialisten · Maßstabsmodelle für Ihren Messestand | ekdruck` |
| `/architekturmodelle` | `Architekturmodelle im 3D-Druck · Wettbewerbs- & Präsentationsmodelle | ekdruck` |

- Ziel-Keyword steht jetzt an Title-Position 1. Home fuehrt "Architekturmodelle & Messemodelle" statt "3D-Druck Österreich" (loest die Kannibalisierung mit /messemodelle).
- Stern-Symbol (★) und Preisanker ("ab €20/30") aus allen Titles + Meta-Descriptions entfernt (Stern verursacht Google-Title-Rewrites, Preis schreckt B2B ab).
- H1 angepasst: Home-Hero "Architekturmodelle & Messemodelle", /messemodelle "Messemodelle, die Ihr Produkt zum Messe-Highlight machen", /architekturmodelle "Architekturmodelle. 1:50 bis 1:500 aus Ihren CAD-Daten".
- Client-seitige `<SEOHead>`-Titles auf Home + /architekturmodelle an die neuen Server-Titles angeglichen (kein Konflikt mehr).

## 2. Server-Rendering (Task 2)

- Verifiziert per `npm run start` + curl: H1 + Fliesstext der drei Geldseiten stehen im initialen HTML (nicht erst nach Hydration). Kein CSR-Refactor noetig.

## 3. Navigation, Footer, interne Links (Task 3)

- "Einzelanfertigungen" aus Haupt-Navigation (Desktop + Mobile) und Footer entfernt.
- Geldseiten-Querverlinkung ergaenzt: /architekturmodelle <-> /messemodelle, beide verlinken ihren Ratgeber-Guide + /kostenrechner.
- 16 Self-Links auf /messemodelle (aus der Stadt-Konsolidierung) in Fetttext umgewandelt.

## 4. Regionalseiten-Konsolidierung per 301 (Task 4)

**Messemodelle (Task 4a):** alle 26 `messemodelle/{stadt}`-Seiten entfernt und per 301 (308 permanent) auf `/messemodelle`:
`baden-wuerttemberg, basel, bayern, berlin, bern, duesseldorf, essen, frankfurt, graz, hamburg, hannover, hessen, koeln, linz, luzern, muenchen, niedersachsen, nordrhein-westfalen, nuernberg, oberoesterreich, salzburg, st-gallen, steiermark, stuttgart, wien, zuerich` (+ dortmund-Phantom).

**Architektur (Task 4b):** nur 6 Standortseiten bleiben indexiert (`wien, linz, graz, salzburg, muenchen, stuttgart`). Alle uebrigen 49 AT+DE-Regionen per 301 auf `/architekturmodelle`. `muenchen`/`stuttgart` jetzt `index,follow` (vorher faelschlich noindex).

- Redirects zentral in `next.config.js` `redirects()`.
- Sitemap (`app/sitemap.ts`): messeStadtPages entfernt.
- `AllRegionsLinks`: verlinkt nur noch behaltene, indexierbare Regionen (keine internen Redirect-Hops).

## 5. Einzelanfertigungen / Privatkunden (Task 5)

- `/einzelanfertigungen`: `robots: { index: false, follow: true }`. Seite bleibt direkt erreichbar fuer laufende Kunden.
- Aus Sitemap, Navigation, Footer, Hero-Saeule entfernt. TODO im Code hinterlegt (`301 -> /firmenkunden` bei endgueltigem Ausstieg).
- Kein separates `/3d-druck-fuer-privatpersonen` im Repo vorhanden.

## 6. Index-Hygiene (Task 6)

- 301: `/angebot` -> `/kontakt` (Alt-URL Lovable-Aera).
- `metadataBase` (https://www.ek-druck.at) und self-referencing Canonical (via `buildDachAlternates`) waren bereits gesetzt.
- non-www -> www 301 bereits aus frueherer Phase aktiv.

## 7. Strukturierte Daten (Task 7)

- Bereits vorhanden und server-gerendert: `LocalBusiness` + `aggregateRating` (5,0/31) site-weit via `orgSchema()` in `app/layout.tsx`; `Service` + `FAQPage` + `BreadcrumbList` auf den Geldseiten via `serviceSchema/faqSchema/breadcrumbSchema` (`lib/seo.ts`). Kein zusaetzlicher Bau noetig.

## 8. Content-Ausbau /architekturmodelle (Task 8)

- Neue Sektion "Was kostet ein Architekturmodell?" mit Preistabelle (reale Preise), Kostenfaktoren, CTA zum Kostenrechner.
- Neue Modelltypen-Sektion mit eigener H3: Wettbewerbsmodell, Einreichmodell/Bestandsmodell, Städtebaumodell, Schnittmodell.
- FAQ (13 Fragen inkl. Kosten) + Referenz-Sektionen waren bereits vorhanden.

## 9. Brand-Safety (zusaetzlich, Kevin-Regeln)

- Alle 259 Em-Dashes "—" site-weit entfernt, gespacete En-Dashes " – " zu Komma. 0 verbleibend.
- WKO-heikle Begriffe auf Home + Geldseiten + Marquee + Regionsdaten model-fokussiert umformuliert (u.a. Funktionsteile, Bauteile, Ersatzteile, Funktionsprototypen, Präzision, Konstruktion, "FDM PRÄZISION" -> "FDM DETAILTREUE").

---

## TODO Kevin (manuell nach dem Merge/Deploy)

1. In der **GSC** die Seiten `/`, `/architekturmodelle`, `/messemodelle` per URL-Pruefung neu zur Indexierung einreichen.
2. **Sitemap** neu einreichen (`https://www.ek-druck.at/sitemap.xml`).
3. Nach ~2 Wochen pruefen: fallen die "Gecrawlt, zurzeit nicht indexiert"-URLs (Stadt-/Regionsseiten) aus dem Index, steigt die Position der Geldseiten?

## Noch offen (Polish, kein Blocker)

- Nav-Reorder auf flache 5-Punkt-Leiste (Design-Entscheidung, bewusst nicht umgesetzt, Mega-Menue belassen).
- ★-Symbol in den metaTitles der 6 Regionsseiten (sekundaere Seiten).
- ~10 verstreute interne Links auf /einzelanfertigungen (via `follow:true` SEO-neutral).
- Groesserer WKO-Content-Pass auf `data/serviceSeoContent.ts` (Prototyping-/Messe-Bloecke, u.a. /prototyping) sowie /messemodelle Branchen-Beispiele, dort ist die Formulierung teils bewusst technisch, braucht deine Abstimmung.
