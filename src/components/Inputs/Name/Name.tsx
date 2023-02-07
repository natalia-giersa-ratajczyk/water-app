import { forwardRef } from 'react';

import styles from './Name.module.css';

const Name = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={styles['name-input']}>
      <label htmlFor="name">Imię</label>
      <input type="text" id="name" ref={ref} required />
    </div>
  );
});

Name.displayName = 'Name';

export default Name;
