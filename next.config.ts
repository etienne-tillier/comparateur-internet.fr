import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/actualites-sfr/5-bonnes-raisons-de-se-laisser-tenter-par-la-fibre-de-sfr",
        destination: "/guides/esim",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
