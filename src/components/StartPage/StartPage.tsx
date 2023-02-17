import Link from 'next/link';

import RefreshingPana from '@/assets/images/Refreshing-pana.svg';
import Button from '@/components/Button';
import Container from '@/components/Container';

import styles from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <div className={styles.wrapper}>
          <RefreshingPana className={styles.image} />
          <div className={styles.text}>
            <h1>Witaj w aplikacji Nawodnij się!</h1>
            <p>Aplikacja pomoże Ci monitorować Twój poziom nawodnienia.</p>
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
