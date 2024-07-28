import { z } from 'zod';
import { Category } from './skills.constant';

export const createSkillsValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    category: z.enum([...Category] as [string, ...string[]]),
    progress: z.number().optional(),
    img: z.string().optional(),
  }),
});

export const updateSkillsValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.enum([...Category] as [string, ...string[]]).optional(),
    progress: z.number().optional(),
    img: z.string().optional(),
  }),
});

export const skillsValidations = {
  createSkillsValidationSchema,
  updateSkillsValidationSchema
};
