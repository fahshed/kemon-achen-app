import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, PostDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PostDetails"
      component={PostDetailsScreen}
      options={{ headerTitle: 'Post' }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
