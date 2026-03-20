import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zeroclickjournal.com', // ← 替换为你的阿里云域名
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-dark' },
  },
  build: {
    format: 'directory',
  },
});
