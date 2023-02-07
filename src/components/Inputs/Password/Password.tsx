import { forwardRef } from 'react';

import PasswordIcon from '@/assets/icons/Password.svg';

import styles from './Password.module.css';

const Password = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="password">Hasło</label>
      <div className={styles['password-input']}>
        <PasswordIcon />
        <input type="password" id="password" ref={ref} required />
      </div>
    </div>
  );
});

Password.displayName = 'Password';

export default Password;
