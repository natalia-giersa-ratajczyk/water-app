import { forwardRef } from 'react';

import Male from '@/assets/icons/Male.svg';

import styles from './MaleCheckbox.module.css';
import { MaleCheckboxProps } from './MaleCheckbox.types';

const MaleCheckbox = forwardRef<HTMLInputElement, MaleCheckboxProps>(
  ({ isChecked, onChange }, ref) => {
    const checkedStyles = isChecked ? styles.checked : '';

    return (
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          <label htmlFor="male" className={styles.label}>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              ref={ref}
              checked={isChecked}
              onChange={onChange}
            />
            <div className={`${styles.icon} ${checkedStyles}`}>
              <Male />
            </div>
            <span>Mężczyzna</span>
          </label>
        </div>
      </div>
    );
  }
);

MaleCheckbox.displayName = 'MaleCheckbox';

export default MaleCheckbox;
