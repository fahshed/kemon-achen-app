import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { CaptionBold } from '../../styles';

function Tag({ badgeContent }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.text}>
          <CaptionBold color="white">{badgeContent}</CaptionBold>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.primary,
    borderRadius: 16,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 1
  },
});

export default Tag;
