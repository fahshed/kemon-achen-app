import React, { useEffect, useRef } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Fontisto,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  CreatePostScreen,
  HomeScreen,
  NearbyProfessionalScreen,
  NotificationScreen,
} from '../../screens';
import CommunityListScreen from '../../screens/CommunityListScreen';
import CreatePostButton from './CreatePostButton';
import NavRoutes from '../NavRoutes';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/core';
import * as Notifications from 'expo-notifications';
import Api from '../../api';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function BottomTabNavigator() {
  const navigation = useNavigation();
  //useNotifications(null);
  const notificationListener = useRef(null);
  const responseListener = useRef(null);

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current = Notifications.addNotificationReceivedListener(
      null,
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data.adviceIds;
        navigation.navigate(NavRoutes.LATEST_ADVICE, { data });
      },
    );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    let token;
    if (Constants.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        // eslint-disable-next-line no-alert
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //setExpoPushToken(token);
      Api.registerPushNotificationToken({ pushToken: token });

      //console.log(token);
    } else {
      // eslint-disable-next-line no-alert
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    return token;
  };

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
        options={() => ({
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
        component={CommunityListScreen}
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
          headerShown: false,
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
        }}
      />
    </TabFiveStack.Navigator>
  );
}
