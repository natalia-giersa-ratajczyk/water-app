import { Record } from 'pocketbase';
import { useContext, useEffect, useState } from 'react';

import RecordsItem from '@/components/RecordsItem';
import { AppContext } from '@/context/context';

import styles from './RecordsList.module.css';

const RecordsList = () => {
  const { records } = useContext(AppContext);

  const [recordsList, setRecordsList] = useState<Record[]>([]);

  useEffect(() => {
    setRecordsList(records);
  }, [records]);

  return (
    <>
      <span className={styles.title}>Twoje wpisy</span>
      <ul className={styles.list}>
        {records.length === 0 ? (
          <p className={styles.text}>
            Nic tu jeszcze nie ma. Nalej sobie szklankę wody :)
          </p>
        ) : (
          recordsList.map(({ amount, drink, id }) => (
            <RecordsItem key={id} amount={amount} drink={drink} />
          ))
        )}
      </ul>
    </>
  );
};

export default RecordsList;
