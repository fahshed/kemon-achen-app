import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProfessionalProfileScreen from '../../screens/ProfessionalProfileScreen';
import {
  NearbyProfessionalScreen,
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
