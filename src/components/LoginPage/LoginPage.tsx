import Link from 'next/link';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Email from '@/components/Inputs/Email';
import Password from '@/components/Inputs/Password';
import { HOME_ROUTE } from '@/components/utils/routes';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.background}>
      <Container>
        <h2 className={styles.title}>Logowanie</h2>
        <form className={styles.form}>
          <Email />
          <Password />
        </form>
        <div className={styles.button}>
          <Button>
            <Link href={HOME_ROUTE}>Zaloguj się</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
