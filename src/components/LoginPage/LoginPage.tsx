import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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

const LoginPage = () => {
  const { loginHandler, isUserValid } = useContext(AppContext);
  const [hasError, setHasError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors, dirtyFields, isSubmitting, isSubmitted },
    handleSubmit,
  } = useForm<LoginPageForm>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    console.log(dirtyFields);
  }, [dirtyFields]);

  // TODO: Fix this shit.
  const submitHandler = async ({ email, password }: LoginPageForm) => {
    try {
      // setIsLoading(true);
      await loginHandler(email, password);
    } catch (error) {
      setHasError(error !== null);
      // setIsLoading(false);
    }

    if (!isUserValid()) {
      return;
    }

    router.replace('/home');
  };

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <h2 className={styles.title}>Logowanie</h2>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <Email {...register('email', { required: true })} />
          <p className={styles.message}>
            {errors.email && <Error />}
            {errors.email?.message}
          </p>
          <Password {...register('password', { required: true })} />
          <p className={styles.message}>
            {errors.password && <Error />}
            {errors.password?.message}
          </p>
          <div className={styles.button}>
            <Button onClick={handleSubmit(submitHandler)}>
              <span>
                {isSubmitting || isSubmitted ? 'Logowanie...' : 'Zaloguj się'}
              </span>
            </Button>
          </div>
          <div>
            {hasError && (
              <div className={styles.message}>
                <Error />
                <p>Nieprawidłowy email lub hasło.</p>
              </div>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
