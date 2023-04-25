import { z } from 'zod';

import { MIN_PASSWORD_LENGTH } from '@/utils/constants';

export const USER_SCHEMA = z.object({
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
});

export const NOTIFICATION_DURATION = 2000;
