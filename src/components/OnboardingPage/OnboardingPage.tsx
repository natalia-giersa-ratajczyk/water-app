import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Error from '@/assets/icons/Error.svg';
import Button from '@/components/Button';
import Container from '@/components/Container/Container';
import FemaleCheckbox from '@/components/Inputs/FemaleCheckbox';
import MaleCheckbox from '@/components/Inputs/MaleCheckbox';
import Weight from '@/components/Inputs/Weight';
import { AppContext } from '@/context/context';
import { HOME_ROUTE } from '@/utils/routes';

import styles from './OnboardingPage.module.css';
import { OnboardingPageForm } from './OnboardingPage.types';

const OnboardingPage = () => {
  const { updateUserData, getCurrentUser } = useContext(AppContext);
  const [gender, setGender] = useState<null | boolean>(null);

  const router = useRouter();

  const userDataSchema = z.object({
    weight: z.string().min(1, { message: 'Waga jest wymagana' }),
    gender: z.string().min(1),
  });

  type userDataSchema = z.infer<typeof userDataSchema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OnboardingPageForm>({
    resolver: zodResolver(userDataSchema),
  });

  const submitHandler = ({ weight, gender }: OnboardingPageForm) => {
    const currentUser = getCurrentUser();
    const currentUserId = currentUser?.id ?? '';
    updateUserData(currentUserId, gender, weight);

    router.replace(HOME_ROUTE);
  };

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <p className={styles.text}>
          Podaj nam kilka informacji o sobie, żebyśmy mogli wyliczyć Twoje
          dzienne minimalne zapotrzebowanie na wodę
        </p>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.wrapper}>
            <span>Płeć</span>
            <div className={styles.gender}>
              <FemaleCheckbox
                {...register('gender')}
                isChecked={gender !== null && !gender}
                onChange={(event) => {
                  register('gender').onChange(event);
                  setGender(false);
                }}
              />
              <MaleCheckbox
                {...register('gender')}
                isChecked={gender !== null && gender}
                onChange={(event) => {
                  register('gender').onChange(event);
                  setGender(true);
                }}
              />
              <p className={styles.message}>
                {errors.gender && <Error />}
                {errors.gender && 'Płeć jest wymagana'}
              </p>
            </div>
          </div>
          <div className={styles['message-wrapper']}>
            <Weight {...register('weight', { required: true })} />
            <p className={styles.message}>
              {errors.weight && <Error />}
              {errors.weight?.message}
            </p>
          </div>
          <div className={styles.button}>
            <Button onClick={handleSubmit(submitHandler)}>
              <span>Zapisz</span>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default OnboardingPage;
