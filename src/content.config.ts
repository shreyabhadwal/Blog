import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.enum(['career', 'books', 'culture', 'notes'])),
    draft: z.boolean().optional().default(false),
  }),
});

const bulletins = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lately' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    links: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      note: z.string().optional(),
    })),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts, bulletins };
