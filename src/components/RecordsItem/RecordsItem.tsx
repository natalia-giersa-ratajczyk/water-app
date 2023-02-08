import Dots from '@/assets/icons/Dots.svg';

import styles from './RecordsItem.module.css';
import { RecordsItemProps } from './RecordsItem.types';

const RecordsItem = ({ amount, drink }: RecordsItemProps) => {
  return (
    <div className={styles.item}>
      <span className={styles.amount}>{amount}ml</span>
      <span className={styles.drink}>{drink}</span>
      <div className={styles.edit}>
        <Dots />
      </div>
    </div>
  );
};

export default RecordsItem;
