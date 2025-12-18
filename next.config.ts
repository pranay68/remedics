import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.1.68:3000",
    "http://192.168.1.21:3000",
  ],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
