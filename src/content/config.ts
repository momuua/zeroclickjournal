import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['seo', 'ai', 'llm']),
    pubDate: z.date(),
    modDate: z.date().optional(),
    isFAQ: z.boolean().default(false),
    faqItems: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    toc: z.array(z.object({
      text: z.string(),
      slug: z.string(),
    })).optional(),
  }),
});

export const collections = { articles };
