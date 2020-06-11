/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */

import firebase from 'firebase';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import api from '../services/api';

interface CreateUserDTO {
  email: string;
  password: string;
  name: string;
}

export interface UsersData {
  id?: string | null;
  email?: string | null;
  password?: string | null;
  name?: string | null;
}

interface CreateUserContextData {
  create(data: CreateUserDTO): Promise<void>;
  getUSers(): Promise<firebase.database.DataSnapshot>;
}

const CreateUserCcntext = createContext({} as CreateUserContextData);

const CreateUserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<UsersData[]>([]);
  const database = api.database();

  const create = useCallback(
    async ({ email, password, name }: CreateUserDTO) => {
      try {
        const response = await api
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log(response.user);
      } catch (error) {
        console.log(error.message);
      }
    },
    [database, uuid],
  );

  const getUSers = useCallback(async () => {
    const usersData = await database.ref('users/').once('value');
    return usersData;
  }, [database]);

  return (
    <CreateUserCcntext.Provider value={{ create, getUSers }}>
      {children}
    </CreateUserCcntext.Provider>
  );
};

function useCreateUser(): CreateUserContextData {
  const context = useContext(CreateUserCcntext);
  if (!context) {
    throw new Error('useCreateUser must be used within a CreateUserProvider');
  }

  return context;
}

export { useCreateUser, CreateUserProvider };
