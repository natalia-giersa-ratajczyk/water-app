import PocketBase, { Record } from 'pocketbase';
import { createContext, useEffect, useState } from 'react';

import { API_URL, DEFAULT_RECORDS_COUNT } from '@/utils/constants';

import { AppContextProps, AppContextProviderProps } from './context.types';

export const AppContext = createContext<AppContextProps>({
  records: [],
  usernames: [],
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [usernames, setUsernames] = useState<Record[]>([]);

  useEffect(() => {
    const pb = new PocketBase(API_URL);

    const getRecords = async () => {
      const records = await pb
        .collection('records')
        .getFullList(DEFAULT_RECORDS_COUNT, { sort: '-created' });
      setRecords(records);
    };

    const getUsernames = async () => {
      const usernames = await pb
        .collection('users')
        .getFullList(DEFAULT_RECORDS_COUNT);
      setUsernames(usernames);
    };

    getRecords();
    getUsernames();
  }, []);

  return (
    <AppContext.Provider value={{ records, usernames }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
