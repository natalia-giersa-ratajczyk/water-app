import Link from 'next/link';

import Email from '@/assets/icons/Email.svg';
import Password from '@/assets/icons/Password.svg';

import Button from '../Button';
import Container from '../Container';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <form className={styles.form}>
          <h2>Logowanie</h2>
          <div className={styles['input-wrapper']}>
            <label htmlFor="email">Adres email</label>
            <div className={styles.input}>
              <Email />
              <input
                type="email"
                id="email"
                placeholder="example@test.com"
                required
              />
            </div>
          </div>
          <div className={styles['input-wrapper']}>
            <label htmlFor="password">Hasło</label>
            <div className={styles.input}>
              <Password />
              <input type="password" id="password" required />
            </div>
          </div>
        </form>
        <div className={styles.button}>
          <Button>
            <Link href="/home">Zaloguj się</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
