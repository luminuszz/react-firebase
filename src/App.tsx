import React from 'react';

import AppProvider from './hooks';
import Create from './pages/Create';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Create />
      </AppProvider>
    </>
  );
};

export default App;
