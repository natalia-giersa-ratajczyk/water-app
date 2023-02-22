import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import ArrowDown from '@/assets/icons/ArrowDown.svg';

import styles from './DropdownCalendar.module.css';

const DropdownCalendar = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.button}>
        <span className={styles['button-label']}>Wybierz tydzień</span>
        <ArrowDown className={styles['button-icon']} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.content}>
        Tu będzie kalendarz
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownCalendar;
