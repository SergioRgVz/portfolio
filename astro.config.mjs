// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // compressHTML: true,
  // output: 'static',
  integrations: [
    tailwind(),
  ]
});

