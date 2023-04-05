import { forwardRef } from 'react';

import inputStyles from '../Inputs.module.css';
import styles from './Weight.module.css';

const Weight = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={inputStyles.input}>
      <label htmlFor="weight">Waga</label>
      <div className={styles['weight-input']}>
        <input type="number" id="weight" ref={ref} />
        <span className={styles.weight}>kg</span>
      </div>
    </div>
  );
});

Weight.displayName = 'Weight';

export default Weight;
