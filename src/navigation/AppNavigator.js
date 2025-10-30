import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //   if (isLoading) {
  //     return <Loading message="Please wait..." />;
  //   }
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );    
};

export default AppNavigator;
