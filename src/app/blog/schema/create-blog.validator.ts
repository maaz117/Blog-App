import * as z from 'zod';

export const createBlogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required'),
  category: z.string().min(1, 'category is required'),
});

export type CreateBlogBody = z.infer<typeof createBlogSchema>;