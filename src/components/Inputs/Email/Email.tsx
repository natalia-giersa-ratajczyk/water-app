import { forwardRef } from 'react';

import EmailIcon from '@/assets/icons/Email.svg';

import inputStyles from '../Inputs.module.css';
import styles from './Email.module.css';
import { EmailProps } from './Email.types';

const Email = forwardRef<HTMLInputElement, EmailProps>(({ onChange }, ref) => {
  return (
    <div className={inputStyles.input}>
      <label htmlFor="email">Adres email</label>
      <div className={styles['email-input']}>
        <EmailIcon />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@test.com"
          ref={ref}
          onChange={onChange}
        />
      </div>
    </div>
  );
});

Email.displayName = 'Email';

export default Email;
