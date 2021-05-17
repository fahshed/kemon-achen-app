import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2, Caption } from '../../styles';

function NotificationCard({ notificationTitle, notificationBody, time }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.header}>
          <Body2>{notificationTitle}</Body2>
          <Entypo name="dot-single" size={16} />
          <Body2>{time}</Body2>
        </View>
        <Caption color="grey6" numberOfLines={3}>
          {notificationBody}
        </Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: theme.lemon,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 4,
    width: '85%',
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  imageContainer: {
    alignItems: 'center',
    width: '15%',
  },
  header: {
    flexDirection: 'row',
  },
});

export default NotificationCard;
