import { useRouter } from 'next/router';
import { Admin, Record } from 'pocketbase';
import { useContext, useEffect, useState } from 'react';

import Card from '@/components/Card';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { AppContext } from '@/context/context';

import RecordsList from '../RecordsList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { records, getCurrentUser, logoutHandler } = useContext(AppContext);

  const router = useRouter();

  const [amountDrank, setAmountDrank] = useState(0);
  const [amounts, setAmounts] = useState<number[]>([]);
  const [optimalAmount, setOptimalAmount] = useState(0);
  const [currentUser, setCurrentUser] = useState<Record | Admin | null>(null);

  useEffect(() => {
    const amountArray = records.map((record) => record.amount);
    setAmounts(amountArray);
  }, [records]);

  useEffect(() => {
    setAmountDrank(
      amounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  }, [amounts]);

  useEffect(() => {
    if (getCurrentUser() === null) {
      return;
    }

    setCurrentUser(getCurrentUser());
  }, [getCurrentUser]);

  useEffect(() => {
    setOptimalAmount(currentUser?.weight * 0.03 * 1000);
  }, [currentUser]);

  const clickHandler = () => {
    logoutHandler();

    router.replace('/');
  };

  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {currentUser?.username}!</h2>
        <Card optimalAmount={optimalAmount} amountDrank={amountDrank} />
        <RecordsList />
        <button onClick={clickHandler}>
          <span>Wyloguj się</span>
        </button>
      </Container>
    </Layout>
  );
};

export default HomePage;
