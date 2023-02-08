import Card from '@/components/Card';
import Container from '@/components/Container';
import Layout from '@/components/Layout';

import styles from './HomePage.module.css';
import { HomeProps } from './HomePage.types';

const HomePage = ({ name }: HomeProps) => {
  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {name}!</h2>
        <Card />
      </Container>
    </Layout>
  );
};

export default HomePage;
