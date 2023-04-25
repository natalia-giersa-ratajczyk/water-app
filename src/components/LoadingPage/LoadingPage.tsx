import Container from '@/components/Container';

import styles from './LoadingPage.module.css';
import WaterDrop from './WaterDrop';

const LoadingPage = () => {
  return (
    <div className={styles.background}>
      <Container isFullHeight>
        <div className={styles.wrapper}>
          <WaterDrop className={styles.icon} />
          <h2 className={styles.title}>Wczytywanie...</h2>
        </div>
      </Container>
    </div>
  );
};

export default LoadingPage;
