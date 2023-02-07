import Link from 'next/link';
import { useState } from 'react';

import Female from '@/assets/icons/Female.svg';
import Male from '@/assets/icons/Male.svg';
import Button from '@/components/Button';
import Container from '@/components/Container/Container';
import Checkbox from '@/components/Inputs/Checkbox';
import Weight from '@/components/Inputs/Weight';

import styles from './OnboardingPage.module.css';

const OnboardingPage = () => {
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);
  const [isCheckedMale, setIsCheckedMale] = useState(false);

  const isFemaleHandler = () => {
    setIsCheckedFemale(true);
    setIsCheckedMale(false);
  };

  const isMaleHandler = () => {
    setIsCheckedMale(true);
    setIsCheckedFemale(false);
  };

  return (
    <div className={styles.background}>
      <Container>
        <p className={styles.text}>
          Podaj nam kilka informacji o sobie, żebyśmy mogli wyliczyć Twoje
          dzienne zapotrzebowanie na wodę
        </p>
        <form className={styles.form}>
          <div className={styles.wrapper}>
            <span>Płeć</span>
            <div className={styles.gender}>
              <Checkbox
                id="female"
                text="Kobieta"
                icon={<Female />}
                isChecked={isCheckedFemale}
                onChange={isFemaleHandler}
              />
              <Checkbox
                id="male"
                text="Mężczyzna"
                icon={<Male />}
                isChecked={isCheckedMale}
                onChange={isMaleHandler}
              />
            </div>
          </div>
          <Weight />
          <div className={styles.button}>
            <Button>
              <Link href="/home">Zapisz</Link>
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default OnboardingPage;
