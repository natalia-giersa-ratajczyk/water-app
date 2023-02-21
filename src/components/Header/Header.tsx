import Link from 'next/link';
import { useRouter } from 'next/router';

import ChartBar from '@/assets/icons/ChartBar.svg';
import Drop from '@/assets/icons/Drop.svg';
import User from '@/assets/icons/User.svg';
import Waves from '@/assets/icons/Waves.svg';
import Icon from '@/components/Icon/Icon';

import styles from './Header.module.css';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles['logo-box']}>
        <Waves />
        <h1 className={styles.logo}>Nawodnij się</h1>
      </div>
      <nav className={styles.navigation}>
        <Link
          href="/home"
          className={`${router.pathname === '/home' ? styles.active : ''}`}
        >
          <Icon>
            <Drop />
          </Icon>
        </Link>
        <Link
          href="/analytics"
          className={`${router.pathname === '/analytics' ? styles.active : ''}`}
        >
          <Icon>
            <ChartBar />
          </Icon>
        </Link>
        <Link
          href="/userProfile"
          className={`${
            router.pathname === '/userProfile' ? styles.active : ''
          }`}
        >
          <Icon>
            <User />
          </Icon>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
