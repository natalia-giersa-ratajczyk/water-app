import Card from '@/components/Card';
import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { AMOUNT_DRANK, OPTIMAL_AMOUNT } from '@/utils/constants';

import RecordsList from '../RecordsList';
import styles from './HomePage.module.css';
import { HomeProps } from './HomePage.types';

const HomePage = ({ name }: HomeProps) => {
  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {name}!</h2>
        <Card optimalAmount={OPTIMAL_AMOUNT} amountDrank={AMOUNT_DRANK} />
        <RecordsList />
      </Container>
    </Layout>
  );
};

export default HomePage;
