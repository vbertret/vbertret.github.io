// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// 1. Importe les nouveaux plugins
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://vbertret.github.io',
    integrations: [mdx(), sitemap()],
    
    // 2. Dis à Astro d'utiliser ces plugins quand il lit du Markdown
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});
