# SEO-Entscheidungslog ek-druck.at

Branch: `seo-cleanup` · Datenbasis: Google Search Console, 3 Monate (Stand 18.06.2026):
500 Klicks · 55.851 Impressionen · CTR 0,9 % · Ø Position 12,2 · 141 URLs mit Impressionen.
Jede Entscheidung mit Befund, Evidenz/Prinzip, Änderung, Risiko und Reversibilität.

## Umgesetzt (dieser Branch, build-verifiziert)

### 1. Host-Kanonisierung: non-www auf www (301)
- **Befund:** `/ratgeber/material-guide` taucht in GSC unter `www.ek-druck.at` (95 Klicks) UND `ek-druck.at` (23 Klicks) getrennt auf. Beide Hosts sind erreichbar und werden separat indexiert.
- **Evidenz/Prinzip:** Google "Duplicate URLs / Canonicalization". Zwei erreichbare Hosts splitten Ranking-Signale (Links, CTR, Autorität) auf zwei Versionen derselben Seite und verschwenden Crawl-Budget.
- **Änderung:** `next.config.js`, 301-Redirect aller Pfade von `ek-druck.at` auf `https://www.ek-druck.at` (metadataBase ist bereits www).
- **Risiko:** sehr gering. **Reversibel:** Redirect-Block entfernen.

### 2. Gedankenstriche entfernt (Markenregel)
- **Befund:** Em-/En-Dashes in Title-Tags, Meta-Descriptions und Fließtext, u.a. in den Google-Snippets ("...★5,0 — Express 24h..."). 1822 Vorkommen in 108 Dateien.
- **Evidenz/Prinzip:** Interne Markenregel (keine Gedankenstriche in Außenkommunikation) plus saubere, konsistente SERP-Snippets.
- **Änderung:** ` — `/` – ` durch ` · ` (bereits genutzter Separator), restliche `—`/`–` durch `-`. Nur String-/Textinhalte, keine Logik.
- **Risiko:** gering, reine Stringersetzung, Build verifiziert. **Reversibel:** via Git.

## Geprüft, bewusst NICHT geändert

### 3. Indexierung ist NICHT das Problem
141 URLs erhalten Impressionen. Dass bei der Marken-Suche "ekdruck" nur Startseite + Sitelinks erscheinen, ist normales Sitelink-Verhalten, kein Indexierungsfehler. Keine Aktion.

### 4. Bestehende Redirects sind solide
Stadt→Bundesland, prototypen→prototyping, Branchen-Varianten, Thin-Content-Redirects sind bereits sauber gepflegt. Keine Aktion.

### 5. Google-Unternehmensprofil (kein Code)
Vorhanden und stark (5,0 / 32 Bewertungen, 465 Interaktionen), aber Profilstärke nicht 100 %. Empfehlung: Leistungen, Produkte, Beiträge, Fotos vervollständigen. Hebt den lokalen Map-Pack, über den die kommerzielle Lokal-Nachfrage konvertiert (z.B. "3d druck oberösterreich" Pos 1,1). Außerhalb des Repos.

## Phase 2: empfohlen, bewusst NOCH NICHT angewandt (Entscheidung nötig)

### 6. Thin-/Doorway-Risiko bei programmatischen Standortseiten
- **Befund:** Dutzende fast identische Standortseiten mit 0 Klicks über 3 Monate, vor allem deutsche Städte: `/architekturmodelle/stuttgart` (73 Impr, 0 Kl), `/messemodelle/muenchen`, `/architekturmodelle/villach` (102/0), Stuttgart/Berlin/Frankfurt/Dresden u.v.m.
- **Evidenz/Prinzip:** Google "Doorway Pages" und "Scaled Content Abuse / Helpful Content". Viele near-duplicate Templateseiten verwässern Seiten-Qualitätssignale und Crawl-Budget.
- **Warum noch nicht umgesetzt:** Diese DE-Seiten wurden bewusst für Reichweite gebaut. Ein Entfernen/Noindex ist eine strategische Abwägung (SEO-Hygiene vs. DE-Reichweite), die nicht einstimmig ist. Der saubere, reversible Weg ist **noindex statt löschen**, gesteuert über ein `noindex`-Flag in `data/regionalArchitekturData.ts` / `data/regionalMesseData.ts` (Mechanik dafür existiert bereits: `robots: { index: false, follow: false }` in `architekturmodelle/[region]/generateMetadata`).
- **Empfehlung:** Noindex für alle programmatischen Standortseiten mit 0 Klicks und ohne Kern-AT-Relevanz; AT-Bundesländer + Wien/Linz/Graz/Salzburg/Innsbruck/Klagenfurt/Wels + alle Service-/Branchen-/Cases-/Ratgeber-Seiten bleiben indexierbar.

## Deploy
`seo-cleanup` nach `main` mergen, Auto-Deploy über das verbundene Hosting. Vorher empfohlen: Vorschau-Deploy prüfen.

_Co-erstellt mit Claudia, evidenzbasiert auf GSC-Export + Live-Crawl._
