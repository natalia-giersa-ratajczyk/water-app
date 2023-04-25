import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ModalProps = {
  trigger: ReactNode;
  children: ReactNode;
  title: string;
  isOpen: boolean;
  openHandler: Dispatch<SetStateAction<boolean>>;
};
