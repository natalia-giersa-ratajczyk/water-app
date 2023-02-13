import Link from 'next/link';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Email from '@/components/Inputs/Email';
import Name from '@/components/Inputs/Name';
import Password from '@/components/Inputs/Password';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <h2 className={styles.title}>Rejestracja</h2>
        <form className={styles.form}>
          <Name />
          <Email />
          <Password />
        </form>
        <div className={styles.button}>
          <Button>
            <Link href="/onboarding">Zarejestruj się</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
