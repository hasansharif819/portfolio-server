import { z } from 'zod';

export const createBlogsValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    subject: z.string(),
    description: z.string(),
    summary: z.string(),
    img: z.string().optional(),
  }),
});

export const updateBlogsValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    subject: z.string().optional(),
    description: z.string().optional(),
    summary: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const blogsValidations = {
  createBlogsValidationSchema,
  updateBlogsValidationSchema
};
