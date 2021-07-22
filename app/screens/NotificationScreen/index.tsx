import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { useAppDispatch } from '../../store';
import { logout } from '../../store/reducers';
import Api from '../../api';
import { AppButton, ItemSeparator, NotificationCard } from '../../components';
import { Container, H5Bold } from '../../styles';
import { timeAgo } from '../../utils';
import { theme } from '../../config';

export default function NotificationScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState(null);
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();
  //const { user } = useAppSelector((state) => state.User);

  useEffect(() => {
    (async () => {
      const response = await Api.getNotifications();
      setNotifications(response);
      //çconsole.log(response);
      setIsLoading(false);
    })();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <H5Bold align="center" mt="32px" mb="24px">
          Loading...
        </H5Bold>
      ) : (
        <Container p="8px" grow="1">
          {notifications.map((item, index) => (
            <View key={index}>
              <NotificationCard
                notificationTitle={item.message}
                content={item.content}
                time={timeAgo(item.createdAt)}
              />
              <ItemSeparator color={theme.darkGrey} />
            </View>
          ))}
          <AppButton title="Logout" onPress={() => dispatch(logout())} />
        </Container>
      )}
    </ScrollView>
  );
}
