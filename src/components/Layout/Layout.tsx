import Header from '@/components/Header/Header';

import styles from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
