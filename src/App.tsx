import React from 'react';

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import AppProvider from './hooks';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SideBar />
        <Navbar />
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </>
  );
};

export default App;
