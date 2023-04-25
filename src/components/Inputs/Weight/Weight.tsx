import { forwardRef } from 'react';

import inputStyles from '../Inputs.module.css';
import styles from './Weight.module.css';
import { WeightProps } from './Weight.types';

const Weight = forwardRef<HTMLInputElement, WeightProps>(
  ({ onChange }, ref) => {
    return (
      <div className={inputStyles.input}>
        <label htmlFor="weight">Waga</label>
        <div className={styles['weight-input']}>
          <input
            type="number"
            id="weight"
            name="weight"
            ref={ref}
            onChange={onChange}
          />
          <span className={styles.weight}>kg</span>
        </div>
      </div>
    );
  }
);

Weight.displayName = 'Weight';

export default Weight;
