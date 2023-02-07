import Link from 'next/link';

import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import Email from '@/components/Inputs/Email/Email';
import Password from '@/components/Inputs/Password/Password';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <form className={styles.form}>
          <h2>Logowanie</h2>
          <Email />
          <Password />
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
