import { forwardRef } from 'react';

import Female from '@/assets/icons/Female.svg';

import styles from './FemaleCheckbox.module.css';
import { FemaleCheckboxProps } from './FemaleCheckbox.types';

const FemaleCheckbox = forwardRef<HTMLInputElement, FemaleCheckboxProps>(
  ({ isChecked, onChange }, ref) => {
    const checkedStyles = isChecked ? styles.checked : '';

    return (
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          <label htmlFor="female" className={styles.label}>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              ref={ref}
              checked={isChecked}
              onChange={onChange}
            />
            <div className={`${styles.icon} ${checkedStyles}`}>
              <Female />
            </div>
            <span>Kobieta</span>
          </label>
        </div>
      </div>
    );
  }
);

FemaleCheckbox.displayName = 'FemaleCheckbox';

export default FemaleCheckbox;
