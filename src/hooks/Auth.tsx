/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

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

export interface SignInRequest {
  email: string;
  password: string;
}

interface CreateUserContextData {
  signInIfSocialLogin(): Promise<void>;
  signIn(data: SignInRequest): Promise<void>;
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

  const signInIfSocialLogin = useCallback(async () => {
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

        setUsers({ token: refreshToken, user });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInRequest) => {
    try {
      const response = await api
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (response.user?.refreshToken) {
        const {
          displayName,
          email: responseEmail,
          uid,
          refreshToken,
        } = response.user;

        const user: UsersData = {
          email: responseEmail,
          name: displayName,
          id: uid,
        };
        localStorage.setItem('@finances:token', refreshToken);
        localStorage.setItem('@finances:user', JSON.stringify(user));

        setUsers({ token: refreshToken, user });
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const signOut = () => console.log('saiu');

  return (
    <AuthContext.Provider
      value={{ signInIfSocialLogin, signIn, signOut, user: users }}
    >
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
