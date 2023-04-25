import { z } from 'zod';

import { MIN_PASSWORD_LENGTH } from '@/utils/constants';

export const NEW_USER_SCHEMA = z
  .object({
    name: z.string().min(1, { message: 'Imię jest wymagane' }),
    email: z
      .string()
      .min(1, { message: 'Email jest wymagany' })
      .email({ message: 'Niepoprawny email' }),
    password: z
      .string()
      .min(1, { message: 'Hasło jest wymagane' })
      .min(MIN_PASSWORD_LENGTH, {
        message: 'Hasło powinno mieć co najmniej 7 znaków',
      }),
    confirmedPassword: z.string(),
  })
  .refine((data) => data.confirmedPassword === data.password, {
    message: 'Hasła nie są identyczne',
    path: ['confirmedPassword'],
  });
