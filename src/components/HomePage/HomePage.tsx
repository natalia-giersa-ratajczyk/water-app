import { useContext, useEffect, useState } from 'react';

import Card from '@/components/Card';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { AppContext } from '@/context/context';
import { FACTOR, ML_FACTOR } from '@/utils/constants';

import RecordsList from '../RecordsList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { records, usernames } = useContext(AppContext);

  const [amountDrank, setAmountDrank] = useState(0);
  const [amounts, setAmounts] = useState<number[]>([]);
  const [optimalAmount, setOptimalAmount] = useState(0);
  const [username, setUsername] = useState('');
  const [userWeight, setUserWeight] = useState(0);

  useEffect(() => {
    setAmountDrank(
      amounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  }, [amounts]);

  useEffect(() => {
    const amountArray = records.map((record) => record.amount);
    setAmounts(amountArray);
  }, [records]);

  console.log(username);

  useEffect(() => {
    setUsername(
      usernames.find((username) => username.id === 'xac58sk75kwapm8')?.username
    );
    setUserWeight(
      usernames.find((username) => username.id === 'xac58sk75kwapm8')?.weight
    );
  }, [usernames]);

  useEffect(() => {
    setOptimalAmount(userWeight * FACTOR * ML_FACTOR);
  }, [userWeight]);

  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {username}!</h2>
        <Card optimalAmount={optimalAmount} amountDrank={amountDrank} />
        <RecordsList />
      </Container>
    </Layout>
  );
};

export default HomePage;
