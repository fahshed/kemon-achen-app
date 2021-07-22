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
  ProfessionalProfileScreen,
  CommunityScreen,
  CommunitySearchResultScreen,
  LatestAdviceScreen,
} from '../../screens';
import { useAppSelector } from '../../store';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { role } = useAppSelector((state) => state.User.user);

  return (
    <Stack.Navigator mode="card">
      {role === 'regular' && (
        <Stack.Screen
          name="TestFlow"
          component={TestFlow}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TestFlow() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Qoute"
        component={QouteScreen}
        options={{ headerTitle: 'Qoute', headerShown: false }}
      />
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
}

function App() {
  return (
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
        name="CommunityDetails"
        component={CommunityScreen}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="ProfessionalProfile"
        component={ProfessionalProfileScreen}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="Latest Advice"
        component={LatestAdviceScreen}
        options={{ headerTitle: '' }}
      />
      <Stack.Screen
        name="CommunitySearchResult"
        component={CommunitySearchResultScreen}
        options={{ headerTitle: '' }}
      />
    </Stack.Navigator>
  );
}
