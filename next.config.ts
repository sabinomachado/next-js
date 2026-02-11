import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/next-js",
  assetPrefix: "/next-js/",

  images: {
    unoptimized: true
  }
};

export default nextConfig;
