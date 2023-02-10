import PocketBase, { Record } from 'pocketbase';
import { createContext, useEffect, useState } from 'react';

import { AppContextProps, AppContextProviderProps } from './context.types';

export const AppContext = createContext<AppContextProps>({
  records: [],
  usernames: [],
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [records, setRecords] = useState<Record[]>([]);
  const [usernames, setUsernames] = useState<Record[]>([]);

  useEffect(() => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const getRecords = async () => {
      const records = await pb
        .collection('records')
        .getFullList(200, { sort: '-created' });
      setRecords(records);
    };

    const getUsernames = async () => {
      const usernames = await pb.collection('users').getFullList(200);
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
