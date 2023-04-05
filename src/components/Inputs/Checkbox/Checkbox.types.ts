import { ChangeEvent } from 'react';

export type CheckboxProps = {
  id: string;
  text: string;
  icon: JSX.Element;
  isChecked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
