// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://shreyabhadwal.netlify.app',
  output: 'server',
  adapter: netlify(),
  integrations: [react(), keystatic()],
});
