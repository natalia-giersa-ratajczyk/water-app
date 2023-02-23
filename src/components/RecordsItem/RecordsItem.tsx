import Dropdown from '@/components/Dropdown';

import styles from './RecordsItem.module.css';
import { RecordsItemProps } from './RecordsItem.types';

const RecordsItem = ({
  amount,
  drink,
  shouldShowDropdown,
}: RecordsItemProps) => {
  return (
    <div className={styles.item}>
      <span className={styles.amount}>{amount}ml</span>
      <span className={styles.drink}>{drink}</span>
      {shouldShowDropdown && <Dropdown />}
    </div>
  );
};

export default RecordsItem;
