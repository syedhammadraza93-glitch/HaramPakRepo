import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITE_ORIGIN } from "@/lib/constants";
import { umrahPackages } from "@/lib/umrah-packages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...SITE_CONFIG.navigation.map(({ href }) => href === "/" ? href : href + "/"),
    ...umrahPackages.map(({ id }) => `/umrah/${id}/`),
    "/pilgrim-portal/",
  ];
  return pages.map(path => ({ url: new URL(path, SITE_ORIGIN).href }));
}
