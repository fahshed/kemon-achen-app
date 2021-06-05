import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '../../config';
import { Body2Bold, Caption } from '../../styles';

function RegularProfileInfoBar({ userName, profileDescription }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Body2Bold>{userName}</Body2Bold>
        <Caption>{profileDescription}</Caption>
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 16 }}>
        <Caption color="red">Edit</Caption>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2,
  },
});

export default RegularProfileInfoBar;
