import PocketBase, { Record } from 'pocketbase';
import { createContext, useEffect, useState } from 'react';

import { AppContextProps, AppContextProviderProps } from './context.types';

export const AppContext = createContext<AppContextProps>({
  records: [],
  loginHandler: () => Promise.resolve({ token: '', record: {} as Record }),
  isUserValid: () => false,
  getCurrentUser: () => null,
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const getRecords = async () => {
      const currentUser = getCurrentUser();

      const records = await pb.collection('records').getFullList(200, {
        sort: '-created',
        filter: `userId='${currentUser?.id}'`,
      });

      setRecords(records);
    };

    getRecords();
  }, []);

  const loginHandler = async (email: string, password: string) => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);

    console.log(pb.authStore);

    return authData;
  };

  const isUserValid = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb.authStore.isValid;
  };

  const getCurrentUser = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb.authStore.model;
  };

  return (
    <AppContext.Provider
      value={{ records, loginHandler, isUserValid, getCurrentUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
