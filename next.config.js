/** @type {import('next').NextConfig} */

// ─── DSGVO-Check: Impressum ist Pflicht für öffentliche Websites ───
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_ADRESSE) {
  throw new Error(
    "\n\n" +
      "╔══════════════════════════════════════════════════════════════╗\n" +
      "║  ❌  Build abgebrochen: NEXT_PUBLIC_ADRESSE fehlt!           ║\n" +
      "║                                                              ║\n" +
      '║  Jede öffentliche Website braucht ein Impressum (DSGVO).     ║\n' +
      "╚══════════════════════════════════════════════════════════════╝\n\n"
  );
}

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['better-sqlite3'],
  },
};

module.exports = nextConfig;
