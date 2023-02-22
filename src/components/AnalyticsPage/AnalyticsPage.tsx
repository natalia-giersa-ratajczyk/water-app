import Container from '@/components/Container';
import Layout from '@/components/Layout';

import styles from './AnalyticsPage.module.css';
import DropdownCalendar from './DropwordCalendar';

const AnalyticsPage = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Analiza wpisów</h2>
          <nav className={styles['calendar-nav']}>
            <span className={styles['calendar-title']}>Tydzień</span>
            <DropdownCalendar />
          </nav>
        </div>
      </Container>
    </Layout>
  );
};

export default AnalyticsPage;
