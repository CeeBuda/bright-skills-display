// Static build config used ONLY by the GitHub Pages workflow.
// It keeps the default TanStack Start server entry (the custom SSR error wrapper
// is not compatible with the prerenderer) and prerenders every route to HTML.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: false },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
  vite: {
    base: process.env["PAGES_BASE"] || "/",
  },
});
