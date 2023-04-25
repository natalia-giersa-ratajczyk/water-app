import { Rubik } from '@next/font/google';
import * as Dialog from '@radix-ui/react-dialog';

import Close from '@/assets/icons/Close.svg';
import Icon from '@/components/Icon';

import styles from './Modal.module.css';
import { ModalProps } from './Modal.types';

const rubik = Rubik({ weight: 'variable', subsets: ['latin', 'latin-ext'] });

const Modal = ({
  trigger,
  children,
  title,
  isOpen,
  openHandler,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={openHandler}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          aria-describedby={undefined}
          className={`${rubik.className} ${styles.wrapper}`}
        >
          <div className={styles.nav}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close className={styles.close}>
              <Icon>
                <Close />
              </Icon>
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
