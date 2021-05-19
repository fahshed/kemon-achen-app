import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2Bold, Body2 } from '../../styles';

function UserInfoBar3({ RankBadgeComponent = null }) {
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

      {/* <View style={styles.detailsContainer}> */}
      <Body2Bold>Fahim Morshed</Body2Bold>
      {RankBadgeComponent}
      <Entypo name="dot-single" size={16} />
      <Body2>2h</Body2>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.lightGrey,
    flexDirection: 'row',
    height: 32,
    padding: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
