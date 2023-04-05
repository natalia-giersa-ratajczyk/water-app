import styles from './Icon.module.css';
import { IconProps } from './Icon.types';

const Icon = ({ children }: IconProps) => {
  return <div className={styles.icon}>{children}</div>;
};

export default Icon;
