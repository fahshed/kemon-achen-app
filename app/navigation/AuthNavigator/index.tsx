import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import {
  LoginScreen,
  ProfessionalSignupScreen,
  RegularSignupScreen,
  SignupScreen,
  WelcomeScreen,
} from '../../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegularSignup"
      component={RegularSignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfessionalSignup"
      component={ProfessionalSignupScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
