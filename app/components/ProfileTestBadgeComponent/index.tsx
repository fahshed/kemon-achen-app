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
      <View style={styles.text}>
        <Caption color="white">{score}</Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.grey6,
    borderRadius: 16,
    marginRight: 8,
    width: 48,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 1,
  },
});

export default ProfileTestBadgeComponent;
