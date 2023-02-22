import Header from '@/components/Header';

import styles from './Layout.module.css';
import { LayoutProps } from './Layout.types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
