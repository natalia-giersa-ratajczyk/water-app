import PocketBase, { Record } from 'pocketbase';
import { createContext, useEffect, useState } from 'react';

import { API_URL, DEFAULT_RECORDS_COUNT } from '@/utils/constants';

import { AppContextProps, AppContextProviderProps } from './context.types';

export const AppContext = createContext<AppContextProps>({
  // getRecords: () => Promise.resolve([] as Record[]),
  records: [],
  loginHandler: () => Promise.resolve({ token: '', record: {} as Record }),
  registerHandler: () => Promise.resolve({} as Record),
  isUserValid: () => false,
  getCurrentUser: () => null,
  existingUsers: () => Promise.resolve([]),
  updateUserData: () => Promise.resolve({} as Record),
  logoutHandler: () => {},
  createNewRecord: () => Promise.resolve({} as Record),
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const getRecords = async () => {
      const pb = new PocketBase(API_URL);

      const currentUser = getCurrentUser();

      const records = await pb
        .collection('records')
        .getFullList(DEFAULT_RECORDS_COUNT, {
          sort: '-created',
          filter: `userId='${currentUser?.id}'`,
        });

      setRecords(records);
    };

    getRecords();
  }, []);
  // const getRecords = async () => {
  //   const pb = new PocketBase('http://127.0.0.1:8090');

  //   const currentUser = getCurrentUser();

  //   const records = await pb.collection('records').getFullList(200, {
  //     sort: '-created',
  //     filter: `userId='${currentUser?.id}'`,
  //   });

  //   // setRecords(records);
  //   return records;
  // };

  const createNewRecord = async (drink: string, amount: number) => {
    const pb = new PocketBase(API_URL);

    const currentUser = getCurrentUser();

    const data = {
      drink: drink,
      amount: amount,
      userId: currentUser?.id,
    };

    const record = await pb.collection('records').create(data);

    return record;
  };

  const loginHandler = async (email: string, password: string) => {
    const pb = new PocketBase(API_URL);

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
    const pb = new PocketBase(API_URL);

    const data = {
      username: name,
      email: email,
      password: password,
      passwordConfirm: confirmedPassword,
      emailVisibility: true,
    };

    const newUser = await pb.collection('users').create(data);

    return newUser;
  };

  const isUserValid = () => {
    const pb = new PocketBase(API_URL);

    return pb.authStore.isValid;
  };

  const getCurrentUser = () => {
    const pb = new PocketBase(API_URL);

    return pb.authStore.model;
  };

  const existingUsers = async () => {
    const pb = new PocketBase(API_URL);

    const users = await pb
      .collection('users')
      .getFullList(DEFAULT_RECORDS_COUNT);

    return users;
  };

  const updateUserData = async (id: string, gender: string, weight: number) => {
    const pb = new PocketBase(API_URL);

    const data = {
      gender: gender,
      weight: weight,
    };

    const updatedData = await pb.collection('users').update(id, data);

    return updatedData;
  };

  const logoutHandler = () => {
    const pb = new PocketBase(API_URL);

    return pb.authStore.clear();
  };

  return (
    <AppContext.Provider
      value={{
        // getRecords,
        records,
        loginHandler,
        isUserValid,
        getCurrentUser,
        registerHandler,
        existingUsers,
        updateUserData,
        logoutHandler,
        createNewRecord,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
