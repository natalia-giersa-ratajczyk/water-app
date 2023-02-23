import { useContext } from 'react';

import Container from '@/components/Container';
import Layout from '@/components/Layout';
import RecordsItem from '@/components/RecordsItem';
import { AppContext } from '@/context/context';

import styles from './AnalyticsPage.module.css';
import DropdownCalendar from './DropwordCalendar';

const AnalyticsPage = () => {
  const { records } = useContext(AppContext);

  // TODO: add calendars
  // TODO: add chart
  // TODO: add choosing date functionality and displaying proper data

  return (
    <Layout>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Analiza wpisów</h2>
          <header className={styles.header}>
            <span className={styles['header-text']}>Analiza tygodniowa</span>
            <DropdownCalendar title="Wybierz tydzień">
              <span>Tu będzie kalendarz</span>
            </DropdownCalendar>
          </header>
          <div className={styles['chart-wrapper']}>
            <span>Tu będzie wykres</span>
          </div>
          <header className={styles.header}>
            <span className={styles['header-text']}>Analiza dzienna</span>
            <DropdownCalendar title="Wybierz dzień">
              <span>Tu będzie kalendarz</span>
            </DropdownCalendar>
          </header>
          <ul className={styles.list}>
            {records.length === 0 ? (
              <div className={styles['empty-records']}>
                <p className={styles.text}>Brak wpisów z danego dnia.</p>
              </div>
            ) : (
              records.map(({ amount, drink, id }) => (
                <RecordsItem key={id} amount={amount} drink={drink} />
              ))
            )}
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default AnalyticsPage;
