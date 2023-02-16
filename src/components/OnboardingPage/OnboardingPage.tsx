import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Error from '@/assets/icons/Error.svg';
import Female from '@/assets/icons/Female.svg';
import Male from '@/assets/icons/Male.svg';
import Button from '@/components/Button';
import Container from '@/components/Container/Container';
import Checkbox from '@/components/Inputs/Checkbox';
import Weight from '@/components/Inputs/Weight';
import { AppContext } from '@/context/context';

import styles from './OnboardingPage.module.css';
import { OnboardingPageForm } from './OnboardingPage.types';

const userDataSchema = z.object({
  // gender: z.union([z.literal(true), z.literal(false)], {
  //   required_error: 'Płeć jest wymagana',
  // }),
  weight: z.string().min(1, { message: 'Waga jest wymagana' }),
});

type userDataSchema = z.infer<typeof userDataSchema>;

const OnboardingPage = () => {
  const { updateUserData, getCurrentUser } = useContext(AppContext);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  const [isCheckedMale, setIsCheckedMale] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OnboardingPageForm>({
    resolver: zodResolver(userDataSchema),
  });

  const isFemaleHandler = () => {
    setIsCheckedFemale(true);
    setIsCheckedMale(false);
  };

  const isMaleHandler = () => {
    setIsCheckedMale(true);
    setIsCheckedFemale(false);
  };

  const gender = isCheckedFemale ? 'female' : 'male';

  const submitHandler = ({ weight }: OnboardingPageForm) => {
    const currentUser = getCurrentUser();
    const currentUserId = currentUser?.id ?? '';
    updateUserData(currentUserId, gender, weight);

    router.replace('/home');
  };

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <p className={styles.text}>
          Podaj nam kilka informacji o sobie, żebyśmy mogli wyliczyć Twoje
          dzienne zapotrzebowanie na wodę
        </p>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <div className={styles.wrapper}>
            <span>Płeć</span>
            <div className={styles.gender}>
              <Checkbox
                id="female"
                text="Kobieta"
                icon={<Female />}
                isChecked={isCheckedFemale}
                // onChange={isFemaleHandler}
                {...(register('gender', {
                  required: true,
                }),
                { onChange: isFemaleHandler })}
              />
              <Checkbox
                id="male"
                text="Mężczyzna"
                icon={<Male />}
                isChecked={isCheckedMale}
                // onChange={isMaleHandler}
                {...(register('gender', {
                  required: true,
                }),
                { onChange: isMaleHandler })}
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
