/* eslint-disable react/prop-types */
import React from 'react';

import { CreateUserProvider } from './CreateUser';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CreateUserProvider>{children}</CreateUserProvider>
    </>
  );
};

export default AppProvider;
