import { ChangeEvent } from 'react';

export type MaleCheckboxProps = {
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
