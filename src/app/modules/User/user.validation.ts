import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string().default('admin'),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
