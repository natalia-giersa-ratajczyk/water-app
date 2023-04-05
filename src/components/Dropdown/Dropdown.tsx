import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Dots from '@/assets/icons/Dots.svg';

import styles from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.edit}>
        <div>
          <Dots />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={styles.dropdown}>
        <DropdownMenu.Item className={styles.item}>Edytuj</DropdownMenu.Item>
        <DropdownMenu.Item className={styles.item}>Usuń</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
