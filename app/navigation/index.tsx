import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import NavigationTheme from './NavigationTheme';

import { useAppSelector } from '../store';

export default function Navigation() {
  const { isAuthenticated } = useAppSelector((state) => state.User);

  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
