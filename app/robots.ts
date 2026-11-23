import type { MetadataRoute } from "next";
import { PRIVATE_REVIEW, SITE_ORIGIN } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return PRIVATE_REVIEW
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", SITE_ORIGIN).href };
}
