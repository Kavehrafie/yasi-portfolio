import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/utils/config.ts';
import compress from 'astro-compress';
import vercel from "@astrojs/vercel/serverless";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), sitemap(), compress()],
  trailingSlash: SITE.trailingSlash,
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/**']
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')``
      }
    }
  },
  output: "server",
  adapter: vercel()
});