import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

import Error from '@/assets/icons/Error.svg';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Email from '@/components/Inputs/Email';
import Password from '@/components/Inputs/Password';
import { AppContext } from '@/context/context';

import styles from './LoginPage.module.css';
import { LoginPageForm } from './LoginPage.types';

const userSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email jest wymagany' })
    .email({ message: 'Niepoprawny email' }),
  password: z
    .string()
    .min(1, { message: 'Hasło jest wymagane' })
    .min(7, { message: 'Hasło powinno mieć co najmniej 7 znaków' }),
});

type userSchema = z.infer<typeof userSchema>;

const notify = () =>
  toast.error('Nieprawidłowy email lub hasło.', {
    position: 'bottom-center',
    style: { backgroundColor: '#fff', color: '#ff8a8b', fontSize: '1.2rem' },
    duration: 3000,
  });

const LoginPage = () => {
  const { loginHandler, isUserValid } = useContext(AppContext);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginPageForm>({
    resolver: zodResolver(userSchema),
  });

  const submitHandler = async ({ email, password }: LoginPageForm) => {
    try {
      setHasError(false);
      setIsLoading(true);

      await loginHandler(email, password);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }

    if (!isUserValid()) {
      return;
    }

    router.replace('/home');
  };

  useEffect(() => {
    if (hasError) {
      notify();
    }
  }, [hasError]);

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <h2 className={styles.title}>Logowanie</h2>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
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
          <div className={styles.button}>
            <Button onClick={handleSubmit(submitHandler)}>
              <span>{isLoading ? 'Logowanie...' : 'Zaloguj się'}</span>
            </Button>
          </div>
          {hasError && <Toaster />}
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
