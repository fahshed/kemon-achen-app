import { useEffect, useRef } from 'react';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/core';
import NavRoutes from '../../navigation/NavRoutes';
import * as Notifications from 'expo-notifications';
import Api from '../../api';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function useNotifications(notificationListeners) {
  const navigation = useNavigation();
  const notificationListener = useRef(null);
  const responseListener = useRef(null);

  useEffect(() => {
    registerForPushNotificationsAsync();

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data.adviceIds;

        navigation.navigate(NavRoutes.LATEST_ADVICE, { data });
      },
    );

    if (notificationListeners) {
      notificationListener.current = Notifications.addNotificationReceivedListener(
        notificationListeners,
      );
    }

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

      console.log(token);
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
}
