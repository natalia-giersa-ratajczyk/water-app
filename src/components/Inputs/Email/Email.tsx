import { forwardRef } from 'react';

import EmailIcon from '@/assets/icons/Email.svg';

import styles from './Email.module.css';

const Email = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="email">Adres email</label>
      <div className={styles['email-input']}>
        <EmailIcon />
        <input
          type="email"
          id="email"
          placeholder="example@test.com"
          ref={ref}
          required
        />
      </div>
    </div>
  );
});

Email.displayName = 'Email';

export default Email;
