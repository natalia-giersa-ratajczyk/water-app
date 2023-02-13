import styles from './Container.module.css';
import { ContainerProps } from './Container.types';

const Container = ({ children, isFullHeight = false }: ContainerProps) => {
  const fullHeightStyles = isFullHeight ? styles.fullheight : '';

  return (
    <div className={`${styles.container} ${fullHeightStyles}`}>{children}</div>
  );
};

export default Container;
