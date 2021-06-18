import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  CommunityScreen,
  CreatePostScreen,
  HomeScreen,
  NearbyProfessionalScreen,
  NotificationScreen,
} from '../../screens';
import CreatePostButton from './CreatePostButton';
import NavRoutes from '../NavRoutes';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people-alt" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={TabThreeNavigator}
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
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="stethoscope" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-sharp" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          headerTitle: 'Community',
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();
function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerTitle: 'Create Post',
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();
function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="NearbyProfessional"
        component={NearbyProfessionalScreen}
        options={{
          headerTitle: 'Professionals',
        }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();
function TabFiveNavigator() {
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTitle: 'Notifications',
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
      />
    </TabFiveStack.Navigator>
  );
}
