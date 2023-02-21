import { useRouter } from 'next/router';
import { useContext } from 'react';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { AppContext } from '@/context/context';

import UserProfileInput from './UserProfileInput';
import styles from './UserProfilePage.module.css';

const UserProfilePage = () => {
  const { logoutHandler } = useContext(AppContext);
  const router = useRouter();

  const clickHandler = () => {
    logoutHandler();

    router.replace('/');
  };

  return (
    <Layout>
      <Container>
        <div className={styles['edit-wrapper']}>
          <h2 className={styles.title}>Mój profil</h2>
          <span className={styles.edit}>Edytuj</span>
        </div>
        <div className={styles.wrapper}>
          <UserProfileInput
            id="name"
            label="Imię"
            inputType="text"
            inputValue="Stefan"
            disabled
          />
          <button className={styles.button} onClick={clickHandler}>
            <span>Wyloguj się</span>
          </button>
        </div>
      </Container>
    </Layout>
  );
};

export default UserProfilePage;
