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
      // ═══ Keyword-Kannibalisierung beseitigen ═══
      { source: '/rapid-prototyping', destination: '/prototypen', permanent: true },
      { source: '/rapid-prototyping-oesterreich', destination: '/prototypen', permanent: true },
      { source: '/3d-druck-firma', destination: '/', permanent: true },
      { source: '/3d-druck-dienstleister-oesterreich', destination: '/', permanent: true },

      // ═══ Thin Content konsolidieren ═══
      { source: '/kunstobjekte', destination: '/einzelanfertigungen', permanent: true },
      { source: '/modellbau-dekoration', destination: '/einzelanfertigungen', permanent: true },
      { source: '/fdm-3d-druck', destination: '/ratgeber/verfahrens-vergleich', permanent: true },
      { source: '/glossar', destination: '/ratgeber', permanent: true },

      // ═══ Technische Seiten – noindex aber erreichbar ═══
      // Admin und Auth sind echte Seiten, keine Redirects

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
