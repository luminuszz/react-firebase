/* eslint-disable react/prop-types */
import React from 'react';

import { AuthProvider } from './Auth';
import { CreateUserProvider } from './CreateUser';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <CreateUserProvider>{children}</CreateUserProvider>
    </AuthProvider>
  );
};

export default AppProvider;
