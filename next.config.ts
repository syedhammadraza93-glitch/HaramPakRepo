import type { NextConfig } from "next";

const privateExport = process.env.HARAM_PAK_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(privateExport ? { output: "export", trailingSlash: true } : {}),
  images: { unoptimized: privateExport, qualities: [75, 90, 100] },
};

export default nextConfig;
