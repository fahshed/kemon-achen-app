import React from 'react';

import { StyleSheet, View } from 'react-native';
import { theme } from '../../config';
import { Caption } from '../../styles';

function ProfileTestBadgeComponent({ score, color }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: score === '' ? theme.grey6 : theme[color],
        },
      ]}
    >
      <Caption color="white">{score}</Caption>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.grey6,
    borderRadius: 8,
    marginRight: 8,
    width: 70,
    padding: 3,
  },
});

export default ProfileTestBadgeComponent;
