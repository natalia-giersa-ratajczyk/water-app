import styles from './UserProfileInput.module.css';
import { UserProfileInputProps } from './UserProfileInput.types';

const UserProfileInput = ({
  id,
  label,
  inputType,
  inputValue,
}: UserProfileInputProps) => {
  return (
    <fieldset className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={inputType}
        value={inputValue}
        className={styles.input}
      />
    </fieldset>
  );
};

export default UserProfileInput;
