import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Cactus from '@/assets/icons/Cactus.svg';
import Flower from '@/assets/icons/Flower.svg';
import Heart from '@/assets/icons/Heart.svg';
import Plus from '@/assets/icons/Plus.svg';
import Trophy from '@/assets/icons/Trophy.svg';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Modal from '@/components/Modal';
import { AppContext } from '@/context/context';
import {
  CACTUS_MAX,
  CACTUS_MIN,
  FLOWER_MAX,
  FLOWER_MIN,
  HEART_MAX,
  HEART_MIN,
  TROPHY_MIN,
} from '@/utils/cardConstants';

import styles from './Card.module.css';
import { CardProps, ModalFormProps } from './Card.types';

const Card = ({ amountDrank, optimalAmount }: CardProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ModalFormProps>();

  const { createNewRecord } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.round((amountDrank / optimalAmount) * 100));
  }, [optimalAmount, amountDrank]);

  const shouldShowCactus = percentage >= CACTUS_MIN && percentage <= CACTUS_MAX;
  const shouldShowFlower = percentage >= FLOWER_MIN && percentage <= FLOWER_MAX;
  const shouldShowHeart = percentage >= HEART_MIN && percentage <= HEART_MAX;
  const shouldShowTrophy = percentage >= TROPHY_MIN;

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
    <div className={styles.card}>
      <p className={styles['card-text']}>Twój dzisiejszy postęp</p>
      <div className={styles['accent-circle']}>
        <div className={styles.icon}>
          {shouldShowCactus && <Cactus />}
          {shouldShowFlower && <Flower />}
          {shouldShowHeart && <Heart />}
          {shouldShowTrophy && <Trophy />}
        </div>
        <div className={styles['water-amount']}>
          <span className={styles['water-accent']}>{amountDrank}/</span>
          <span>{optimalAmount}ml</span>
        </div>
        <p className={styles.goal}>
          Osiągnięto <span>{percentage}%</span> celu
        </p>
      </div>
      <Modal
        trigger={
          <button className={styles.button}>
            <Icon>
              <Plus />
            </Icon>
          </button>
        }
        modalTitle="Dodaj nowy wpis"
        modalIsOpen={open}
        openModalHandler={setOpen}
      >
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
      </Modal>
    </div>
  );
};

export default Card;
