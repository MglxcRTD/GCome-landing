// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({

  site: 'https://mglxcRTD.github.io',
  base: '/GCome-landing',
  vite: {
    plugins: [tailwindcss()]
  }
});