import { useRouter } from 'next/router';
import { useContext, useRef, useState } from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Email from '@/components/Inputs/Email';
import Password from '@/components/Inputs/Password';
import { AppContext } from '@/context/context';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const { loginHandler, isUserValid } = useContext(AppContext);

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  console.log(email, password);

  const clickHandler = () => {
    loginHandler(email, password);

    if (!isUserValid) {
      return;
    }

    router.replace('/home');
  };

  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <h2 className={styles.title}>Logowanie</h2>
        <form className={styles.form}>
          <Email
            ref={emailRef}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Password
            ref={passwordRef}
            onChange={(event) => setPassword(event.target.value)}
          />
        </form>
        <div className={styles.button}>
          <Button onClick={clickHandler}>Zaloguj się</Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
