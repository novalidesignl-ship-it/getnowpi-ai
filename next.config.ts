import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/getnowpi-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
