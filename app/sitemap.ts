import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITE_ORIGIN } from "@/lib/constants";
import { getWebsiteContent } from "@/lib/website-content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { packages } = await getWebsiteContent();
  const pages = [
    ...SITE_CONFIG.navigation.map(({ href }) => href === "/" ? href : href + "/"),
    ...packages.map(({ id }) => `/umrah/${id}/`),
    "/agent-portal/",
  ];
  return pages.map(path => ({ url: new URL(path, SITE_ORIGIN).href }));
}
