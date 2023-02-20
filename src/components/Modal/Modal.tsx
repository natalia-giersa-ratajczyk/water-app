import { Rubik } from '@next/font/google';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Close from '@/assets/icons/Close.svg';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { AppContext } from '@/context/context';

import styles from './Modal.module.css';
import { ModalFormProps, ModalProps } from './Modal.types';

const rubik = Rubik({ weight: 'variable', subsets: ['latin', 'latin-ext'] });

const Modal = ({ trigger }: ModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ModalFormProps>();
  const { createNewRecord } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const submitHandler = async ({ drink, amount }: ModalFormProps) => {
    setIsLoading(true);

    await createNewRecord(drink, Number.parseInt(amount, 10));

    setTimeout(() => {
      setOpen(false);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ drink: '', amount: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          aria-describedby={undefined}
          className={`${rubik.className} ${styles.wrapper}`}
        >
          <div className={styles.nav}>
            <Dialog.Title className={styles.title}>
              Dodaj nowy wpis
            </Dialog.Title>
            <Dialog.Close className={styles.close}>
              <Icon>
                <Close />
              </Icon>
            </Dialog.Close>
          </div>
          <fieldset className={styles['input-container']}>
            <label htmlFor="drink">Napój</label>
            <input
              id="drink"
              type="text"
              placeholder="np. woda"
              {...register('drink')}
            />
          </fieldset>
          <fieldset className={`${styles['input-container']} ${styles.amount}`}>
            <label htmlFor="amount">Ilość</label>
            <input
              id="amount"
              type="number"
              placeholder="np. 250"
              {...register('amount')}
            />
            <span className={styles.mililiters}>ml</span>
          </fieldset>
          <Button onClick={handleSubmit(submitHandler)}>
            <span>{isLoading ? 'Zapisywanie...' : 'Zapisz'}</span>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
