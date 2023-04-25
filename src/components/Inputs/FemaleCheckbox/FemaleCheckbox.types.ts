import { ChangeEvent } from 'react';

export type FemaleCheckboxProps = {
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
