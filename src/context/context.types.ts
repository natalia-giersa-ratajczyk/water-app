import { Admin, Record, RecordAuthResponse } from 'pocketbase';
import { ReactNode } from 'react';

export type AppContextProps = {
  records: Record[];
  loginHandler: (
    email: string,
    password: string
  ) => Promise<RecordAuthResponse<Record>>;
  registerHandler: (
    name: string,
    email: string,
    password: string,
    confirmedPassword: string
  ) => Promise<Record>;
  isUserValid: () => boolean;
  getCurrentUser: () => Record | Admin | null;
  existingUsers: () => Promise<Record[]>;
};

export type AppContextProviderProps = {
  children: ReactNode;
};
