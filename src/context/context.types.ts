import { Record } from 'pocketbase';
import { ReactNode } from 'react';

export type AppContextProps = {
  records: Record[];
  usernames: Record[];
};

export type AppContextProviderProps = {
  children: ReactNode;
};
