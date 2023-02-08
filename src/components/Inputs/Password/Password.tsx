import { forwardRef, useState } from 'react';

import HidePassword from '@/assets/icons/HidePassword.svg';
import PasswordIcon from '@/assets/icons/Password.svg';
import ShowPassword from '@/assets/icons/ShowPassword.svg';

import styles from './Password.module.css';

const Password = forwardRef<HTMLInputElement>((_, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="password">Hasło</label>
      <div className={styles['password-input']}>
        <div className={styles['icon-wrapper']}>
          <PasswordIcon />
        </div>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          ref={ref}
        />
        <button onClick={togglePassword} className={styles.button}>
          {passwordVisible ? <ShowPassword /> : <HidePassword />}
        </button>
      </div>
    </div>
  );
});

Password.displayName = 'Password';

export default Password;
