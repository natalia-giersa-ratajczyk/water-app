import { forwardRef } from 'react';

import Emoji from '@/assets/icons/Emoji.svg';

import inputStyles from '../Inputs.module.css';
import styles from './Name.module.css';
import { NameProps } from './Name.types';

const Name = forwardRef<HTMLInputElement, NameProps>(({ onChange }, ref) => {
  return (
    <div className={`${inputStyles.input} ${styles['name-input']}`}>
      <label htmlFor="name">Imię</label>
      <div className={styles['name-input']}>
        <Emoji className={styles.icon} />
        <input
          type="text"
          id="name"
          name="name"
          ref={ref}
          onChange={onChange}
          placeholder="Helena"
        />
      </div>
    </div>
  );
});

Name.displayName = 'Name';

export default Name;
