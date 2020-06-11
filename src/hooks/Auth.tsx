/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';
import authProvider from '../services/auth';

interface UserStateData {
  token: string;
  user: object;
}

export interface UsersData {
  id?: string | null;
  email?: string | null;

  name?: string | null;
}

interface CreateUserContextData {
  signIn(): Promise<void>;
  signOut(): void;
  user: UserStateData;
}

const AuthContext = createContext({} as CreateUserContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<UserStateData>(() => {
    const token = localStorage.getItem('@finances:token');
    const user = localStorage.getItem('@finances:user');
    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {} as UserStateData;
  });

  const signIn = useCallback(async () => {
    try {
      const resolve = await api.auth().signInWithPopup(authProvider);
      if (resolve.user?.refreshToken) {
        const { displayName, email, uid, refreshToken } = resolve.user;

        const user: UsersData = {
          email,
          name: displayName,
          id: uid,
        };
        localStorage.setItem('@finances:token', refreshToken);
        localStorage.setItem('@finances:user', JSON.stringify(user));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const signOut = () => console.log('saiu');

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: users }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): CreateUserContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
