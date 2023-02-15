import PocketBase, { Record } from 'pocketbase';
import { createContext, useEffect, useState } from 'react';

import { AppContextProps, AppContextProviderProps } from './context.types';

export const AppContext = createContext<AppContextProps>({
  records: [],
  loginHandler: () => Promise.resolve({ token: '', record: {} as Record }),
  registerHandler: () => Promise.resolve({} as Record),
  isUserValid: () => false,
  getCurrentUser: () => null,
  doesUserExist: () => Promise.resolve(false),
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

    pb.authStore.clear();

    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);

    return authData;
  };

  const registerHandler = async (
    name: string,
    email: string,
    password: string,
    confirmedPassword: string
  ) => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const data = {
      username: name,
      email: email,
      password: password,
      passwordConfirm: confirmedPassword,
    };

    const newUser = await pb.collection('users').create(data);

    return newUser;
  };

  const isUserValid = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb.authStore.isValid;
  };

  const getCurrentUser = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb.authStore.model;
  };

  const doesUserExist = async (email: string) => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const user = await pb
      .collection('users')
      .getFullList(200, { filter: `email='${email}'` });

    console.log(user);

    return user.length !== 0;
  };

  return (
    <AppContext.Provider
      value={{
        records,
        loginHandler,
        isUserValid,
        getCurrentUser,
        registerHandler,
        doesUserExist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
