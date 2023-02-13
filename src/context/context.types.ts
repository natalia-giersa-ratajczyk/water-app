import { Admin, Record, RecordAuthResponse } from 'pocketbase';
import { ReactNode } from 'react';

export type AppContextProps = {
  records: Record[];
  loginHandler: (
    email: string,
    password: string
  ) => Promise<RecordAuthResponse<Record>>;
  isUserValid: () => boolean;
  getCurrentUser: () => Record | Admin | null;
};

export type AppContextProviderProps = {
  children: ReactNode;
};
