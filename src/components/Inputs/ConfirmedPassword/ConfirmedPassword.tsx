import { forwardRef, useState } from 'react';

import HidePassword from '@/assets/icons/HidePassword.svg';
import PasswordIcon from '@/assets/icons/Password.svg';
import ShowPassword from '@/assets/icons/ShowPassword.svg';

import inputStyles from '../Inputs.module.css';
import styles from './ConfirmedPassword.module.css';
import { ConfirmedPasswordProps } from './ConfirmedPassword.types';

const ConfirmedPassword = forwardRef<HTMLInputElement, ConfirmedPasswordProps>(
  ({ onChange }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
      setPasswordVisible((prevState) => !prevState);
    };

    return (
      <div className={inputStyles.input}>
        <label htmlFor="confirmedPassword"> Powtórz hasło</label>
        <div className={styles['password-input']}>
          <div className={styles['icon-wrapper']}>
            <PasswordIcon />
          </div>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="confirmedPassword"
            name="confirmedPassword"
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

ConfirmedPassword.displayName = 'ConfirmedPassword';

export default ConfirmedPassword;
