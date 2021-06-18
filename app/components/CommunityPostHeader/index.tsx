import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { CaptionBold } from '../../styles';

function CommunityPostHeader({ postedBy, time }) {
  return (
    <View style={styles.container}>
      <CaptionBold color="grey6">Posted By {postedBy}</CaptionBold>
      <Entypo name="dot-single" size={16} />
      <CaptionBold>{time}</CaptionBold>

      <MaterialCommunityIcons
        style={styles.icon}
        name="dots-horizontal"
        size={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default CommunityPostHeader;
