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
    ]
  },
};

module.exports = nextConfig;
