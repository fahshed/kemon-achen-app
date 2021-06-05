import React from 'react';

import { StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { Caption } from '../../styles';

function MetricBarComponent({ score, color }) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme[color],
        },
      ]}
    >
      <View
        style={[
          styles.fillerContainer,
          { backgroundColor: theme[color], width: `${score}` },
        ]}
      >
        <View style={styles.text}>
          <Caption color="white">{score}</Caption>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.white,
    borderWidth: 2,
    borderColor: theme.red,
    borderRadius: 16,
    marginRight: 24,
    marginLeft: 'auto',
    marginTop: 4,
    width: '64%',
    height: 16,
  },
  fillerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    width: '60%',
    height: 12,
    backgroundColor: theme.white,
    marginBottom: 16,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: -1,
  },
});

export default MetricBarComponent;
