import { Admin, Record, RecordAuthResponse } from 'pocketbase';
import { ReactNode } from 'react';

export type AppContextProps = {
  // getRecords: () => Promise<Record[]>;
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
  updateUserData: (
    id: string,
    gender: string,
    weight: number
  ) => Promise<Record>;
  logoutHandler: () => void;
  createNewRecord: (drink: string, amount: number) => Promise<Record>;
};

export type AppContextProviderProps = {
  children: ReactNode;
};
