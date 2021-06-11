import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CommunityListScreen from '../../screens/CommunityListScreen';
import CommunityScreen from '../../screens/CommunityScreen';

const Stack = createStackNavigator();

const CommunityListNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      name="CommunityList"
      component={CommunityListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CommunityDetails"
      component={CommunityScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default CommunityListNavigator;
