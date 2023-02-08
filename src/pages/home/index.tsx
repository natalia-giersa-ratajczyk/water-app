import Drop from '@/assets/icons/Drop.svg';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Layout from '@/components/Layout';

import styles from './Home.module.css';
import { HomeProps } from './Home.types';

const Home = ({ name = 'Natalia' }: HomeProps) => {
  return (
    <Layout>
      <Container>
        <h2 className={styles.greetings}>Witaj, {name}!</h2>
        <div className={styles.card}>
          <p className={styles['card-text']}>Twój dzisiejszy progres</p>
          <div>
            <Icon>
              <Drop />
            </Icon>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
