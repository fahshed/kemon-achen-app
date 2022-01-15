import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Body1 } from '../../styles';
import MetricBarComponent from '../../components/MetricBarComponent';

function MetricComponent({ name, score, color }) {
  return (
    <View style={styles.container}>
      <Body1 ml="16px">{name}</Body1>
      <MetricBarComponent score={score} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default MetricComponent;
