import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2Bold, Body2 } from '../../styles';

function UserInfoBar3({
  commenterName,
  commentedAgo,
  RankBadgeComponent = null,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            RankBadgeComponent === null ? theme.lightGrey : theme.primary,
        },
      ]}
    >
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />

      <Body2Bold>{commenterName}</Body2Bold>
      {RankBadgeComponent}
      <Entypo name="dot-single" size={16} />
      <Body2>{commentedAgo}</Body2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    height: 32,
    padding: 8,
  },
  image: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginRight: 8,
  },
});

export default UserInfoBar3;
