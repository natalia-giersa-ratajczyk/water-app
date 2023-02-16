import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ id, text, icon, isChecked, onChange }: CheckboxProps) => {
  const checkedStyles = isChecked ? styles.checked : '';

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <label htmlFor={id} className={styles.label}>
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={isChecked}
            onChange={onChange}
          />
          <div className={`${styles.icon} ${checkedStyles}`}>{icon}</div>
          <span>{text}</span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
