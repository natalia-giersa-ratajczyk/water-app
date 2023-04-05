import { forwardRef } from 'react';

import inputStyles from '../Inputs.module.css';
import styles from './Weight.module.css';
import { WeightProps } from './Weight.types';

<<<<<<< HEAD
const Weight = forwardRef<HTMLInputElement, WeightProps>(
  ({ onChange }, ref) => {
    return (
      <div className={styles.wrapper}>
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
=======
const Weight = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={inputStyles.input}>
      <label htmlFor="weight">Waga</label>
      <div className={styles['weight-input']}>
        <input type="number" id="weight" ref={ref} />
        <span className={styles.weight}>kg</span>
>>>>>>> beead01313d3331ea3bb19710f6082816e3eb044
      </div>
    );
  }
);

Weight.displayName = 'Weight';

export default Weight;
