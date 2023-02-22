import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ModalProps = {
  trigger: ReactNode;
  children: ReactNode;
  modalTitle: string;
  modalIsOpen: boolean;
  openModalHandler: Dispatch<SetStateAction<boolean>>;
};
