# ekdruck.at – Next.js Migration

## Überblick
Dieses Projekt ist die Next.js-Migration der ekdruck.at Website. 
Es nutzt Server-Side Rendering (SSR) für optimale SEO-Performance.

## Was wurde geändert (SEO-Optimierungen)

### Entfernte Seiten (301-Redirects in next.config.js)
- `/auth` → `/` (interner Admin-Bereich, nicht öffentlich)
- `/admin` → `/` (interner Admin-Bereich, nicht öffentlich)
- `/glossar` → `/ratgeber` (Thin Content, in Ratgeber konsolidiert)
- `/fdm-3d-druck` → `/ratgeber/verfahrens-vergleich` (Duplicate Content)
- `/modellbau-dekoration` → `/einzelanfertigungen` (Thin Content)
- `/kunstobjekte` → `/einzelanfertigungen` (Thin Content)
- `/3d-druck-firma` → `/` (Duplicate der Homepage)
- `/3d-druck-dienstleister-oesterreich` → `/` (Duplicate der Homepage)
- `/rapid-prototyping-oesterreich` → `/prototypen` (Duplicate)
- `/rapid-prototyping` → `/prototypen` (konsolidiert)

### Konsolidierte Stadtseiten → Bundeslandseiten
- `/3d-druck-linz` → `/3d-druck-oberoesterreich`
- `/3d-druck-wels` → `/3d-druck-oberoesterreich`
- `/3d-druck-gunskirchen` → `/3d-druck-oberoesterreich`
- `/3d-druck-graz` → `/3d-druck-steiermark`
- `/3d-druck-innsbruck` → `/3d-druck-tirol`
- `/3d-druck-klagenfurt` → `/3d-druck-kaernten`
- `/3d-druck-villach` → `/3d-druck-kaernten`
- `/3d-druck-st-poelten` → `/3d-druck-niederoesterreich`
- `/3d-druck-dornbirn` → `/3d-druck-vorarlberg`

### Beibehaltene Seiten (32 Seiten)
**Kern-Seiten:**
- `/` (Homepage) – H1: 3D-Druck Service Österreich
- `/architekturmodelle` – H1: Architekturmodell drucken lassen
- `/messemodelle` – H1: Messemodell anfertigen lassen
- `/kostenrechner` – Interaktiver Preisrechner
- `/kontakt` – Kontaktformular
- `/ueber-uns` – E-E-A-T Seite
- `/referenzen` – Projektgalerie
- `/prototypen` – Rapid Prototyping (konsolidiert)
- `/einzelanfertigungen` – Einzelstücke + Kunstobjekte
- `/firmenkunden` – B2B-Konditionen
- `/3d-druck-materialien` – Materialübersicht
- `/architekturmodelle-abo` – Flatrate für Büros
- `/impressum` – Legal

**Ratgeber (Content Hub):**
- `/ratgeber` – Hub-Seite
- `/ratgeber/material-guide` – TOP PERFORMER (171 Klicks)
- `/ratgeber/kosten-guide` – Preistransparenz
- `/ratgeber/verfahrens-vergleich` – FDM vs SLA vs SLS
- `/ratgeber/architekturmodell-guide` – Für Architekten
- `/ratgeber/messemodell-guide` – Für Messebauer
- `/ratgeber/prototyping-guide` – Für Produktentwickler
- `/ratgeber/architekturmodell-flatrate` – Flatrate erklärt

**Regionale Seiten (9 Bundesländer):**
- `/3d-druck-wien`
- `/3d-druck-oberoesterreich` (inkl. Linz, Wels, Gunskirchen)
- `/3d-druck-steiermark` (inkl. Graz)
- `/3d-druck-tirol` (inkl. Innsbruck)
- `/3d-druck-salzburg`
- `/3d-druck-kaernten` (inkl. Klagenfurt, Villach)
- `/3d-druck-vorarlberg` (inkl. Dornbirn)
- `/3d-druck-niederoesterreich` (inkl. St. Pölten)
- `/3d-druck-burgenland`

**Dynamische Regionale Seiten:**
- `/messemodelle/[region]` – Messemodelle nach Stadt/Region
- `/architekturmodelle/[region]` – Architekturmodelle nach Stadt/Region

## Deployment auf Vercel

1. Push dieses Repository auf GitHub
2. Verbinde es mit Vercel
3. Domain `ek-druck.at` auf Vercel zeigen
4. Vercel erkennt Next.js automatisch und konfiguriert SSR

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne http://localhost:3000

## SEO-Features
- Server-Side Rendering (SSR) für alle Seiten
- Automatische Sitemap unter /sitemap.xml
- robots.txt unter /robots.txt
- JSON-LD Schema (LocalBusiness) im Root Layout
- Pro-Seite Metadata mit Title, Description, Canonical
- 301-Redirects für alle konsolidierten/entfernten Seiten
- Open Graph + Twitter Cards
- hreflang Tags für DACH-Region
