import { useContext } from 'react';

import EmptyRecordsList from '@/assets/images/empty-records-list.svg';
import RecordsItem from '@/components/RecordsItem';
import { AppContext } from '@/context/context';

import styles from './RecordsList.module.css';

const RecordsList = () => {
  const { records } = useContext(AppContext);

  // TODO: reload data when records change

  return (
    <>
      <span className={styles.title}>Twoje wpisy</span>
      <ul className={styles.list}>
        {records.length === 0 ? (
          <div className={styles['empty-records']}>
            <EmptyRecordsList className={styles.icon} />
            <p className={styles.text}>
              Nic tu jeszcze nie ma. Nalej sobie szklankę wody :)
            </p>
          </div>
        ) : (
          records.map(({ amount, drink, id }) => (
            <RecordsItem
              key={id}
              amount={amount}
              drink={drink}
              shouldShowDropdown
            />
          ))
        )}
      </ul>
    </>
  );
};

export default RecordsList;
