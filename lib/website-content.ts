import { cache } from "react";
import { websiteDefaults } from "./website-defaults";

export type WebsiteContent = typeof websiteDefaults;

export const getWebsiteContent = cache(async (): Promise<WebsiteContent> => {
  const portal = process.env.PORTAL_CONTENT_ORIGIN?.trim();
  if (!portal) return websiteDefaults;

  const endpoint = new URL("/api/public/website/content", portal);
  if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost" && endpoint.hostname !== "127.0.0.1") {
    throw new Error("The content API requires HTTPS");
  }
  const response = await fetch(endpoint, { next: { revalidate: 60 }, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error("Published website content could not be loaded");
  const envelope = await response.json();
  if (envelope?.success !== true || !envelope.data || Array.isArray(envelope.data) || typeof envelope.data !== "object") {
    throw new Error("Published website content response is invalid");
  }
  const current = { ...websiteDefaults };
  for (const key of Object.keys(websiteDefaults) as (keyof WebsiteContent)[]) {
    const entry: unknown = envelope.data[key];
    if (entry === undefined) continue;
    const expectedArray = Array.isArray(websiteDefaults[key]);
    if (!entry || typeof entry !== "object" || Array.isArray(entry) !== expectedArray) {
      throw new Error("Published website section is invalid: " + key);
    }
    Object.assign(current, { [key]: entry });
  }
  return current;
});
