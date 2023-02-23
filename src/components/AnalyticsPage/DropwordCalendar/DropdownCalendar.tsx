import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import ArrowDown from '@/assets/icons/ArrowDown.svg';

import styles from './DropdownCalendar.module.css';
import { DropdownCalendarProps } from './DropdownCalenrar.types';

const DropdownCalendar = ({ title, children }: DropdownCalendarProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.button}>
        <span className={styles['button-label']}>{title}</span>
        <ArrowDown className={styles['button-icon']} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.content}>
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropdownCalendar;
