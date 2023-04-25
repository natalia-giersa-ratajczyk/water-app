import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
