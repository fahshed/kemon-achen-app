import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2Bold, Body2 } from '../../styles';
import ProfileTestBadgeComponent from '../ProfileTestBadgeComponent';

function TestInfoComponent({ score, color, testName, numericInfo }) {
  return (
    <View style={styles.container}>
      <ProfileTestBadgeComponent score={score} color={color} />
      <Body2>{testName} Test</Body2>
      <Entypo name="dot-single" size={16} />
      <Body2>{numericInfo}</Body2>
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
});

export default TestInfoComponent;
