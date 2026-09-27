import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://temrjan.com",
  integrations: [sitemap({ filter: (page) => new URL(page).pathname !== '/' })],
  vite: {
    plugins: [tailwindcss()],
  },
});
