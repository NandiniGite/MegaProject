import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import GlobalProvider from '../context/GlobalProvider';  // Adjust the path based on your structure

const App = () => {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>
  );
};

export default App;
