import Link from 'next/link';
import { useRouter } from 'next/router';

import ChartBar from '@/assets/icons/ChartBar.svg';
import Drop from '@/assets/icons/Drop.svg';
import User from '@/assets/icons/User.svg';
import Waves from '@/assets/icons/Waves.svg';
import Icon from '@/components/Icon/Icon';
import {
  ANALYTICS_ROUTE,
  HOME_ROUTE,
  USER_PROFILE_ROUTE,
} from '@/utils/routes';

import styles from './Header.module.css';

const Header = () => {
  const { asPath, isReady } = useRouter();

  const getActiveRouteStyle = (route: string) => {
    if (!isReady) {
      return;
    }
    return asPath.includes(route) ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <div className={styles['logo-box']}>
        <Waves />
        <h1 className={styles.logo}>Nawodnij się</h1>
      </div>
      <nav className={styles.navigation}>
        <Link href={HOME_ROUTE} className={getActiveRouteStyle(HOME_ROUTE)}>
          <Icon>
            <Drop />
          </Icon>
        </Link>
        <Link
          href={ANALYTICS_ROUTE}
          className={getActiveRouteStyle(ANALYTICS_ROUTE)}
        >
          <Icon>
            <ChartBar />
          </Icon>
        </Link>
        <Link
          href={USER_PROFILE_ROUTE}
          className={getActiveRouteStyle(USER_PROFILE_ROUTE)}
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
