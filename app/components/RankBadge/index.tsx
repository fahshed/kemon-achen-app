import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Caption } from '../../styles';

function RankBadge({ rank }) {
  return (
    <View>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="star"
          size={16}
          color="white"
        />
        <View style={styles.text}>
          <Caption color="white">{rank}</Caption>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.secondary,
    borderRadius: 16,
    width: 50
  },
  icon: {
    marginLeft: 4,
    marginRight: 2,
  },
  text: {
    marginRight: 4,
    marginTop: 1
  },
});

export default RankBadge;
