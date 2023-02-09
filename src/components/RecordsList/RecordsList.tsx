import RecordsItem from '@/components/RecordsItem';

import styles from './RecordsList.module.css';

const DUMMY_LIST = [
  { amount: 300, drink: 'woda', id: 1 },
  { amount: 250, drink: 'herbata', id: 2 },
];

const RecordsList = () => {
  return (
    <>
      <span className={styles.title}>Twoje wpisy</span>
      <ul className={styles.list}>
        {DUMMY_LIST.map(({ amount, drink, id }) => (
          <RecordsItem key={id} amount={amount} drink={drink} />
        ))}
      </ul>
    </>
  );
};

export default RecordsList;
