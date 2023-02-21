import styles from './UserProfileInput.module.css';
import { UserProfileInputProps } from './UserProfileInput.types';

const UserProfileInput = ({
  id,
  label,
  inputType,
  inputValue,
  disabled,
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
        disabled={disabled}
      />
    </fieldset>
  );
};

export default UserProfileInput;
