import { defineConfig } from 'astro/config';

// Set SITE_URL to the chosen production origin when deploying.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
});
