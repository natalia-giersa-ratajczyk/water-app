import Drop from '@/assets/icons/Drop.svg';
import Plus from '@/assets/icons/Plus.svg';
import Icon from '@/components/Icon';

import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <p className={styles['card-text']}>Twój dzisiejszy progres</p>
      <div className={styles['accent-circle']}>
        <div className={styles.icon}>
          <Drop />
        </div>
        <div className={styles['water-amount']}>
          <span className={styles['water-accent']}>1000/</span>
          <span>2400ml</span>
        </div>
        <p className={styles.goal}>
          Osiągnięto <span>30%</span> celu
        </p>
      </div>
      <button className={styles.button} onClick={() => console.log('click')}>
        <Icon>
          <Plus />
        </Icon>
      </button>
    </div>
  );
};

export default Card;
