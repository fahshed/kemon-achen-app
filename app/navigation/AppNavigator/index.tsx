import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from '../BottomTabNavigator';
import {
  PostDetailsScreen,
  UserProfileScreen,
  TestScreen,
  ScoreScreen,
  AdviceScreen,
  QouteScreen,
} from '../../screens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      name="Qoute"
      component={QouteScreen}
      options={{ headerTitle: 'Qoute', headerShown: false }}
    />
    <Stack.Screen
      name="Root"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PostDetails"
      component={PostDetailsScreen}
      options={{ headerTitle: 'Post' }}
    />
    <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    <Stack.Screen
      name="Test"
      component={TestScreen}
      options={{ headerTitle: 'Test', headerShown: false }}
    />
    <Stack.Screen
      name="Score"
      component={ScoreScreen}
      options={{ headerTitle: 'Score', headerShown: false }}
    />
    <Stack.Screen
      name="Advice"
      component={AdviceScreen}
      options={{ headerTitle: 'Advice', headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
