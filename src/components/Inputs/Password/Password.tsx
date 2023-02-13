import { forwardRef, useState } from 'react';

import HidePassword from '@/assets/icons/HidePassword.svg';
import PasswordIcon from '@/assets/icons/Password.svg';
import ShowPassword from '@/assets/icons/ShowPassword.svg';

import styles from './Password.module.css';
import { PasswordProps } from './Password.types';

const Password = forwardRef<HTMLInputElement, PasswordProps>(
  ({ onChange }, ref) => {
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
            onChange={onChange}
          />
          <button
            type="button"
            onClick={togglePassword}
            className={styles.button}
          >
            {passwordVisible ? <ShowPassword /> : <HidePassword />}
          </button>
        </div>
      </div>
    );
  }
);

Password.displayName = 'Password';

export default Password;
