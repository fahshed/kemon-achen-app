import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import Api from '../../api';
import { ItemSeparator, NotificationCard } from '../../components';
import { H5Bold } from '../../styles';
import { timeAgo } from '../../utils';
import { theme } from '../../config';

export default function NotificationScreen() {
  const [isRefreshing, setIsRefreshing] = useState(true);

  const [notifications, setNotifications] = useState([]);

  const renderItem = ({ item }) => (
    <NotificationCard
      notificationTitle={item.message}
      content={item.content}
      time={timeAgo(item.createdAt)}
    />
  );

  const getNotifications = async () => {
    const response = await Api.getNotifications();
    setNotifications(response);
    setIsRefreshing(false);
  };

  useEffect(() => {
    (async () => {
      await getNotifications();
    })();
  }, []);

  return isRefreshing ? (
    <H5Bold align="center" mt="32px" mb="24px">
      Loading...
    </H5Bold>
  ) : (
    <FlatList
      data={notifications}
      ItemSeparatorComponent={() => (
        <ItemSeparator height={8} color={theme.grey3} />
      )}
      keyExtractor={(post) => post._id}
      refreshing={isRefreshing}
      onRefresh={() => {
        setIsRefreshing(true);
        getNotifications();
      }}
      renderItem={renderItem}
    />
  );
}
