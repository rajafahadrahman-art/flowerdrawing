import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/tools/draw-along-preview",
        destination: "/tools/draw-along/",
        permanent: true,
      },
      {
        source: "/tools/draw-along-preview/",
        destination: "/tools/draw-along/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
