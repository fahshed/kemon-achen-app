import React from 'react';

import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { CaptionBold } from '../../styles';

function JoinBadge({ hasJoined, handleJoining }) {
  return (
    <TouchableOpacity onPress={handleJoining} disabled={hasJoined}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: hasJoined ? theme.primary : theme.white,
            borderColor: hasJoined ? theme.primary : theme.secondary,
          },
        ]}
      >
        {hasJoined ? (
          <CaptionBold color="white">Joined</CaptionBold>
        ) : (
          <CaptionBold color="secondary">+ Join</CaptionBold>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,

    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default JoinBadge;
