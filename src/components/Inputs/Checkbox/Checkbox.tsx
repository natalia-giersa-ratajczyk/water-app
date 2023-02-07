import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ id, text, icon, isChecked, onChange }: CheckboxProps) => {
  const checkedStyles = isChecked ? styles.checked : '';

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={onChange}
        />
        <div className={`${styles.icon} ${checkedStyles}`}>{icon}</div>
      </div>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;
