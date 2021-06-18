import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from '../BottomTabNavigator';
import {
  PostDetailsScreen,
  UserProfileScreen,
  TestScreen,
  ProfessionalProfileScreen,
  CommunityScreen,
} from '../../screens';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="card">
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
      options={{ headerTitle: 'Test' }}
    />

    <Stack.Screen
      name="CommunityDetails"
      component={CommunityScreen}
      options={{ headerTitle: '' }}
    />

    <Stack.Screen
      name="ProfessionalProfile"
      component={ProfessionalProfileScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
