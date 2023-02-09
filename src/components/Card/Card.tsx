import { useEffect, useState } from 'react';

import Cactus from '@/assets/icons/Cactus.svg';
import Flower from '@/assets/icons/Flower.svg';
import Heart from '@/assets/icons/Heart.svg';
import Plus from '@/assets/icons/Plus.svg';
import Trophy from '@/assets/icons/Trophy.svg';
import Icon from '@/components/Icon';

import styles from './Card.module.css';
import { CardProps } from './Card.types';

const Card = ({ amountDrank, optimalAmount }: CardProps) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.round((amountDrank / optimalAmount) * 100));
  }, [optimalAmount, amountDrank]);

  const shouldShowCactus = percentage >= 0 && percentage <= 24;
  const shouldShowFlower = percentage >= 25 && percentage <= 49;
  const shouldShowHeart = percentage >= 50 && percentage <= 74;
  const shouldShowTrophy = percentage >= 75;

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
      <button className={styles.button} onClick={() => console.log('click')}>
        <Icon>
          <Plus />
        </Icon>
      </button>
    </div>
  );
};

export default Card;
