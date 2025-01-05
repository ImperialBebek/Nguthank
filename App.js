// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import TransactionScreen from './screens/TransactionScreen';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFFFFF" 
      />
      <TransactionScreen />
    </>
  );
};

export default App;
