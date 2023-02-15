import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

import Error from '@/assets/icons/Error.svg';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ConfirmedPassword from '@/components/Inputs/ConfirmedPassword';
import Email from '@/components/Inputs/Email';
import Name from '@/components/Inputs/Name';
import Password from '@/components/Inputs/Password';
import { AppContext } from '@/context/context';

import styles from './RegisterPage.module.css';
import { RegisterPageForm } from './RegisterPage.types';

const newUserSchema = z
  .object({
    name: z.string().min(1, { message: 'Imię jest wymagane' }),
    email: z
      .string()
      .min(1, { message: 'Email jest wymagany' })
      .email({ message: 'Niepoprawny email' }),
    password: z
      .string()
      .min(1, { message: 'Hasło jest wymagane' })
      .min(7, { message: 'Hasło powinno mieć co najmniej 7 znaków' }),
    confirmedPassword: z.string(),
  })
  .refine((data) => data.confirmedPassword === data.password, {
    message: 'Hasła nie są identyczne',
    path: ['confirmedPassword'],
  });

type newUserSchema = z.infer<typeof newUserSchema>;

const notify = () =>
  toast.error('Podany email istnieje już w bazie.', {
    position: 'bottom-center',
    style: { backgroundColor: '#fff', color: '#ff8a8b', fontSize: '1.2rem' },
  });

const RegisterPage = () => {
  const { registerHandler, doesUserExist } = useContext(AppContext);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterPageForm>({
    resolver: zodResolver(newUserSchema),
  });

  const submitHandler = async ({
    name,
    email,
    password,
    confirmedPassword,
  }: RegisterPageForm) => {
    const userExist = await doesUserExist(email);

    try {
      if (userExist) {
        notify();
        return;
      }

      await registerHandler(name, email, password, confirmedPassword);
    } catch (error) {
      console.log(error);
    }

    router.replace('/login');
  };

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <h2 className={styles.title}>Rejestracja</h2>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles['message-wrapper']}>
            <Name {...register('name', { required: true })} />
            <p className={styles.message}>
              {errors.name && <Error />}
              {errors.name?.message}
            </p>
          </div>
          <div className={styles['message-wrapper']}>
            <Email {...register('email', { required: true })} />
            <p className={styles.message}>
              {errors.email && <Error />}
              {errors.email?.message}
            </p>
          </div>
          <div className={styles['message-wrapper']}>
            <Password {...register('password', { required: true })} />
            <p className={styles.message}>
              {errors.password && <Error />}
              {errors.password?.message}
            </p>
          </div>
          <div className={styles['message-wrapper']}>
            <ConfirmedPassword {...register('confirmedPassword', {})} />
            <p className={styles.message}>
              {errors.confirmedPassword && <Error />}
              {errors.confirmedPassword?.message}
            </p>
          </div>
          <div className={styles.button}>
            <Button onClick={handleSubmit(submitHandler)}>
              <span>Zarejestruj się</span>
            </Button>
          </div>
        </form>
        <Toaster />
      </Container>
    </div>
  );
};

export default RegisterPage;
