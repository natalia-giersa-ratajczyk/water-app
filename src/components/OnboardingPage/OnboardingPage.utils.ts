import { z } from 'zod';

export const USER_DATA_SCHEMA = z.object({
  weight: z.string().min(1, { message: 'Waga jest wymagana' }),
  gender: z.string().min(1),
});
