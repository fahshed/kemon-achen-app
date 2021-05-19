import React from 'react';

import { StyleSheet, View } from 'react-native';
import { theme } from '../../config';
import { CaptionBold } from '../../styles';

function TagComponent({ badgeContent }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <CaptionBold color="white">{badgeContent}</CaptionBold>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.primary,
    borderRadius: 16,
    marginRight: 8,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 1,
  },
});

export default TagComponent;
