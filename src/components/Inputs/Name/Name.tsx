import { forwardRef } from 'react';

<<<<<<< HEAD
import Emoji from '@/assets/icons/Emoji.svg';
=======
import inputStyles from '../Inputs.module.css';
import styles from './Name.module.css';
>>>>>>> beead01313d3331ea3bb19710f6082816e3eb044

import styles from './Name.module.css';
import { NameProps } from './Name.types';

const Name = forwardRef<HTMLInputElement, NameProps>(({ onChange }, ref) => {
  return (
<<<<<<< HEAD
    <div className={styles.wrapper}>
=======
    <div className={`${inputStyles.input} ${styles['name-input']}`}>
>>>>>>> beead01313d3331ea3bb19710f6082816e3eb044
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
