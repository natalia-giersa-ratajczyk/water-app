import { BaseAuthStore } from 'pocketbase';
import { useContext, useEffect, useState } from 'react';

import Card from '@/components/Card';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { AppContext } from '@/context/context';
import { FACTOR, ML_FACTOR } from '@/utils/constants';

import RecordsList from '../RecordsList';
import styles from './HomePage.module.css';
// import { HomePageProps } from './HomePage.types';

const HomePage = () => {
  const { getCurrentUser, records } = useContext(AppContext);

  const [amountDrank, setAmountDrank] = useState(0);
  const [amounts, setAmounts] = useState<number[]>([]);
  const [optimalAmount, setOptimalAmount] = useState(0);
  const [currentUser, setCurrentUser] =
    useState<BaseAuthStore['baseModel']>(null);

  // TODO: Extract the code below to a custom hook

  useEffect(() => {
    if (getCurrentUser() === null) {
      return;
    }

    setCurrentUser(getCurrentUser());
  }, [getCurrentUser]);

  useEffect(() => {
    if (typeof records === 'undefined') {
      return;
    }

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

  // useEffect(() => {
  //   if (currentUser === null) {
  //     router.replace('/');
  //     return;
  //   }
  // }, [currentUser, router]);

  useEffect(() => {
    setOptimalAmount(Math.round(currentUser?.weight * FACTOR * ML_FACTOR));
  }, [currentUser]);

  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {currentUser?.username}!</h2>
        <Card optimalAmount={optimalAmount} amountDrank={amountDrank} />
        <RecordsList />
      </Container>
    </Layout>
  );
};

export default HomePage;
