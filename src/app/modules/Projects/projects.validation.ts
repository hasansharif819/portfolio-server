import { z } from 'zod';

const createProjectsValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    frontendurl: z.string(),
    backendurl: z.string(),
    liveurl: z.string(),
    frontendTechnology: z.string(),
    backendTechnology: z.string(),
    isDeleted: z.boolean().optional(),
  }),
});

const updateProjectsValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    frontendurl: z.string().optional(),
    backendurl: z.string().optional(),
    liveurl: z.string().optional(),
    frontendTechnology: z.string().optional(),
    backendTechnology: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProjectsValidations = {
  createProjectsValidationSchema,
  updateProjectsValidationSchema,
};
