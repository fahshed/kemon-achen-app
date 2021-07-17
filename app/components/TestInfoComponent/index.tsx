import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2 } from '../../styles';
import ProfileTestBadgeComponent from '../ProfileTestBadgeComponent';

const colors = {
  excellent: 'lemon',
  good: 'blue',
  bad: 'orange',
  concerning: 'red',
};

function TestInfoComponent({ score, testName, createdAgo }) {
  return (
    <View style={styles.container}>
      <ProfileTestBadgeComponent score={score} color={colors[score]} />
      <Body2>{testName} Test</Body2>
      <Entypo name="dot-single" size={16} />
      <Body2>{createdAgo}</Body2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    marginRight: 8,
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default TestInfoComponent;
