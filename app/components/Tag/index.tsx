import React from 'react';

import { StyleSheet, View } from 'react-native';
import { theme } from '../../config';
import { CaptionBold } from '../../styles';
import { capitalizeFirstLetter } from '../../utils';

function TagComponent({ badgeContent, postTag = null }) {
  return (
    <View
      style={[
        { backgroundColor: postTag ? theme.secondary : theme.primary },
        styles.container,
      ]}
    >
      <View style={[styles.text]}>
        <CaptionBold color="white">
          {capitalizeFirstLetter(badgeContent)}
        </CaptionBold>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    marginRight: 8,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 1,
  },
});

export default TagComponent;
