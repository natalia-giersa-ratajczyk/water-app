import Image from 'next/image';
import Link from 'next/link';

import Background from '@/assets/images/start.jpg';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/utils/routes';

import styles from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <Image src={Background} alt="" className={styles.image} fill />
          <div className={styles.text}>
            <h1>Witaj w aplikacji Nawodnij się!</h1>
            <p>Aplikacja pomoże Ci zadbać o poziom Twojego nawodnienia.</p>
          </div>
          <div className={styles.actions}>
            <Button>
              <Link href={LOGIN_ROUTE}>Zaloguj się</Link>
            </Button>
            <Button>
              <Link href={REGISTER_ROUTE}>Zarejestruj się</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StartPage;
