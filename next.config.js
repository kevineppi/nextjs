/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // ═══ Host-Kanonisierung: non-www -> www (301). Behebt doppelte Indexierung.
      //     Beleg: /ratgeber/material-guide war in GSC unter www UND non-www gelistet. ═══
      { source: '/:path*', has: [{ type: 'host', value: 'ek-druck.at' }], destination: 'https://www.ek-druck.at/:path*', permanent: true },

      // ═══ Preise-Seite entfernt (2026-09-04, Kevin): Menü entschlackt, Kostenrechner ist die Preis-Antwort ═══
      { source: '/preise', destination: '/kostenrechner', permanent: true },

      // ═══ WKO-Altlast (2026-09-22, AI-SEO-Audit): /serienfertigung war 404,
      //     hing aber mit "Serienfertigung"-Titel im Google-Index ═══
      { source: '/serienfertigung', destination: '/firmenkunden', permanent: true },

      // ═══ GSC-404-Bereinigung (2026-09-22): 14 URLs aus dem Index, die nie
      //     Routen hatten (routenlose Messe-Datensätze) oder Alt-Varianten sind ═══
      { source: '/messemodelle/kaernten', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/niederoesterreich', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/dornbirn', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/burgenland', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/karlsruhe', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/saarland', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/mecklenburg-vorpommern', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/augsburg', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/brandenburg', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/bremen', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/dresden', destination: '/messemodelle', permanent: true },
      { source: '/messemodelle/friedrichshafen', destination: '/messemodelle', permanent: true },
      { source: '/3d-druck/klagenfurt', destination: '/3d-druck-kaernten', permanent: true },
      { source: '/3d-druck-tirol', destination: '/3d-druck-salzburg', permanent: true },

      // ═══ Architektur-Städte → Bundesländer (2026-09-22, Kevin): dünne Stadt-
      //     Duplikate konsolidieren, analog zum 3d-druck-Cluster. Bündelt Signale
      //     auf 9 starke Seiten statt 17 halbstarke (GSC: 'Gecrawlt, nicht indexiert') ═══
      { source: '/architekturmodelle/linz', destination: '/architekturmodelle/oberoesterreich', permanent: true },
      { source: '/architekturmodelle/wels', destination: '/architekturmodelle/oberoesterreich', permanent: true },
      { source: '/architekturmodelle/graz', destination: '/architekturmodelle/steiermark', permanent: true },
      { source: '/architekturmodelle/klagenfurt', destination: '/architekturmodelle/kaernten', permanent: true },
      { source: '/architekturmodelle/villach', destination: '/architekturmodelle/kaernten', permanent: true },
      { source: '/architekturmodelle/st-poelten', destination: '/architekturmodelle/niederoesterreich', permanent: true },
      { source: '/architekturmodelle/innsbruck', destination: '/architekturmodelle/tirol', permanent: true },
      { source: '/architekturmodelle/dornbirn', destination: '/architekturmodelle/vorarlberg', permanent: true },

      // ═══ Case-Bereinigung (2026-09-22, Kevin-Wahrheitscheck): 3 unbestätigte
      //     Cases entfernt, Generali-Stückzahl korrigiert (3.500 → 1.000) ═══
      { source: '/cases/maschinenbau-werkzeugmaschine-schnitt', destination: '/branchen/maschinenbau', permanent: true },
      { source: '/cases/anlagenbau-pumpen-schnittmodell', destination: '/branchen/anlagenbau', permanent: true },
      { source: '/cases/wien-stadtentwicklung-1-500-stadtmodell', destination: '/architekturmodelle/stadtmodell', permanent: true },
      { source: '/cases/generali-firmen-keksausstecher-3500-stueck', destination: '/cases/generali-keksausstecher-1000-stueck', permanent: true },
      // GSC-Fund 24.09.: Alt-URLs noch im Index (zackbumm-Case existiert nicht mehr,
      // 'verbinder' in der URL ist zudem WKO-Wort; Umlaut-Ratgeber-URL war nie live)
      { source: '/cases/theater-zackbumm-buehnenbild-verbinder', destination: '/cases', permanent: true },
      { source: '/ratgeber/ma%C3%9Fstab-cad-export-5-fehler', destination: '/ratgeber/datenaufbereitung-architekturmodell', permanent: true },

      // ═══ Studenten-Seite verallgemeinert (2026-09-13, Kevin): alle Studiengänge, neue URL /studenten.
      //     301 erhält die bereits verteilten Links (Fachschafts-Mails, ChatGPT-Zitate). ═══
      { source: '/architekturmodelle/studenten', destination: '/studenten', permanent: true },

      // ═══ Prototyping: alte URLs konsolidieren auf /prototyping ═══
      { source: '/prototypen', destination: '/prototyping', permanent: true },
      { source: '/rapid-prototyping', destination: '/prototyping', permanent: true },
      { source: '/rapid-prototyping-oesterreich', destination: '/prototyping', permanent: true },
      { source: '/prototyp', destination: '/prototyping', permanent: true },
      { source: '/3d-druck-prototyp', destination: '/prototyping', permanent: true },

      // ═══ Thin Content & sonstige Keyword-Bereinigungen ═══
      { source: '/3d-druck-firma', destination: '/', permanent: true },
      { source: '/3d-druck-dienstleister-oesterreich', destination: '/', permanent: true },
      { source: '/kunstobjekte', destination: '/einzelanfertigungen', permanent: true },
      { source: '/modellbau-dekoration', destination: '/einzelanfertigungen', permanent: true },
      { source: '/fdm-3d-druck', destination: '/ratgeber/verfahrens-vergleich', permanent: true },
      { source: '/glossar', destination: '/ratgeber', permanent: true },

      // ═══ Stadt → Bundesland konsolidieren ═══
      { source: '/3d-druck-linz', destination: '/3d-druck-oberoesterreich', permanent: true },
      { source: '/3d-druck-wels', destination: '/3d-druck-oberoesterreich', permanent: true },
      { source: '/3d-druck-gunskirchen', destination: '/3d-druck-oberoesterreich', permanent: true },
      { source: '/3d-druck-graz', destination: '/3d-druck-steiermark', permanent: true },
      { source: '/3d-druck-innsbruck', destination: '/3d-druck-salzburg', permanent: true },
      { source: '/3d-druck-klagenfurt', destination: '/3d-druck-kaernten', permanent: true },
      { source: '/3d-druck-villach', destination: '/3d-druck-kaernten', permanent: true },
      { source: '/3d-druck-st-poelten', destination: '/3d-druck-niederoesterreich', permanent: true },
      { source: '/3d-druck-dornbirn', destination: '/3d-druck-vorarlberg', permanent: true },

      // ═══ Typo-Redirects ═══
      { source: '/impressu', destination: '/impressum', permanent: true },
      { source: '/messemodele', destination: '/messemodelle', permanent: true },

      // ═══ Branchen-Cluster: Keyword-Varianten-Capture (2026-05-26) ═══
      // Kanonische URL ist /branchen/<slug> — alternative Pfade konsolidieren:
      { source: '/messemodelle-maschinenbau', destination: '/branchen/maschinenbau', permanent: true },
      { source: '/messemodelle-schiffbau', destination: '/branchen/schiffbau', permanent: true },
      { source: '/messemodelle-energietechnik', destination: '/branchen/energietechnik', permanent: true },
      { source: '/messemodelle-automotive', destination: '/branchen/automotive', permanent: true },
      { source: '/messemodelle-anlagenbau', destination: '/branchen/anlagenbau', permanent: true },
      { source: '/messemodelle-elektrotechnik', destination: '/branchen/elektrotechnik', permanent: true },
      { source: '/maschinenbau-messemodell', destination: '/branchen/maschinenbau', permanent: true },
      { source: '/schiffbau-messemodell', destination: '/branchen/schiffbau', permanent: true },
      { source: '/energietechnik-messemodell', destination: '/branchen/energietechnik', permanent: true },
      { source: '/industriemodell', destination: '/branchen', permanent: true },
      { source: '/industriemodelle', destination: '/branchen', permanent: true },
      { source: '/industriegueter', destination: '/branchen', permanent: true },

      // ═══ Phantom-URLs aus GSC-Coverage (2026-05-27) ═══
      // Diese URLs werden von Google indiziert aber existieren nicht / liefern 404.
      // Statt 404 → 301 zur thematisch nächsten Seite, damit Link-Equity erhalten bleibt.
      { source: '/messemodelle/dortmund', destination: '/messemodelle/koeln', permanent: true },
    ]
  },
};

module.exports = nextConfig;
