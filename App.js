// App.js
import React from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFFFFF" 
      />
      <LoginScreen />
    </>
  );
};

export default App;
