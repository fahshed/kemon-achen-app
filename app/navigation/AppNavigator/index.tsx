import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  CreatePostScreen,
  NearbyProfessionalScreen,
  NotificationScreen,
} from '../../screens';
import CommunityListScreen from '../../screens/CommunityListScreen';
import CreatePostButton from '../CreatePostButton';
import NavRoutes from '../NavRoutes';
import FeedNavigator from '../FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CommunityList"
      component={CommunityListScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="people-alt" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CreatePost"
      component={CreatePostScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <CreatePostButton
            onPress={() => navigation.navigate(NavRoutes.CREATE_POST)}
          />
        ),
      })}
    />
    <Tab.Screen
      name="NearbyProfessional"
      component={NearbyProfessionalScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Fontisto name="stethoscope" size={32} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="notifications-sharp" size={32} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
