import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import NavigationTheme from './NavigationTheme';
import DrawerNavigator from './DrawerNavigator';

import { useAppSelector } from '../store';

export default function Navigation() {
  const { isAuthenticated } = useAppSelector((state) => state.User);

  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
