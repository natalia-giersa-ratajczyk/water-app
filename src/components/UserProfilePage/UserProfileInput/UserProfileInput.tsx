import styles from './UserProfileInput.module.css';
import { UserProfileInputProps } from './UserProfileInput.types';

const UserProfileInput = ({
  id,
  label,
  inputType,
  inputValue,
  disabled,
}: UserProfileInputProps) => {
  const disabledStyles = disabled ? styles.disabled : '';

  return (
    <fieldset className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={inputType}
        defaultValue={inputValue}
        className={`${styles.input} ${disabledStyles}`}
        disabled={disabled}
      />
    </fieldset>
  );
};

export default UserProfileInput;
