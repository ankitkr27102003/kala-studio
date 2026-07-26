/**
 * Centralized site/brand configuration.
 * Brand name is not finalized yet — change it here, not throughout the app.
 */
export const siteConfig = {
  name: "Kala Studio",
  description:
    "Handmade artwork and custom craftsmanship, made with care.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;