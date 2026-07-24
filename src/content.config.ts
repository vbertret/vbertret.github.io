import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        type: z.enum(['paper', 'proceeding', 'talk', 'poster', 'thesis']),
        event: z.string().optional(),     // conferences / talks
        journal: z.string().optional(),   // journal papers
        // External links (any subset; each rendered as a badge on the article page)
        doi: z.string().optional(),
        hal: z.string().optional(),
        theses: z.string().optional(),    // theses.fr record
        code: z.string().optional(),      // source code repository
        link: z.string().optional(),      // generic fallback link
    }),
});

export const collections = { research };
