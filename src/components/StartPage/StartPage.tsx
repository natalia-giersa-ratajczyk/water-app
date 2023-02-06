import Image from 'next/image';
import Link from 'next/link';

import Background from '@/assets/images/start.jpg';
import Button from '@/components/Button/Button';

import Container from '../Container';
import styles from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <Image src={Background} fill alt="" className={styles.image} />
          <div className={styles.text}>
            <h1>Witaj w aplikacji Nawodnij się!</h1>
            <p>Aplikacja pomoże Ci zadbać o poziom Twojego nawodnienia.</p>
          </div>
          <div className={styles.actions}>
            <Button>
              <Link href="/login">Zaloguj się</Link>
            </Button>
            <Button>
              <Link href="/register">Zarejestruj się</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StartPage;
