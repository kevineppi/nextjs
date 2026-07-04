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

      // ═══ Messemodelle Regional-Konsolidierung (2026-07-04, SEO Task 4) ═══
      //     Alle 26 messemodelle/{stadt}-Seiten waren Thin-Content (fast identisch) -> 301 auf /messemodelle.
      //     Buendelt Link-Equity, beendet die Keyword-Kannibalisierung. dortmund-Phantom inklusive.
      ...[
        'baden-wuerttemberg', 'basel', 'bayern', 'berlin', 'bern', 'duesseldorf', 'essen',
        'frankfurt', 'graz', 'hamburg', 'hannover', 'hessen', 'koeln', 'linz', 'luzern',
        'muenchen', 'niedersachsen', 'nordrhein-westfalen', 'nuernberg', 'oberoesterreich',
        'salzburg', 'st-gallen', 'steiermark', 'stuttgart', 'wien', 'zuerich', 'dortmund',
      ].map((stadt) => ({
        source: `/messemodelle/${stadt}`,
        destination: '/messemodelle',
        permanent: true,
      })),
    ]
  },
};

module.exports = nextConfig;
