import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CommunityListScreen from '../../screens/CommunityListScreen';
import CommunityScreen from '../../screens/CommunityScreen';
import ProfessionalProfileScreen from '../../screens/ProfessionalProfileScreen';
import {
  CreatePostScreen,
  NearbyProfessionalScreen,
  NotificationScreen,
} from '../../screens';

const Stack = createStackNavigator();

const ProfessionalListNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      name="NearbyProfessionalScreen"
      component={NearbyProfessionalScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfessionalProfile"
      component={ProfessionalProfileScreen}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default ProfessionalListNavigator;
