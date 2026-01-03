import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // Eliminamos la línea de tailwind()
  integrations: [], 
  output: 'server',
  adapter: vercel(),
});