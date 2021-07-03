import React from 'react';

import { StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { theme } from '../../config';
import { CaptionBold } from '../../styles';

function JoinBadge({ hasJoined, handleJoining }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={theme.grey3} onPress={handleJoining}>
        <View style={styles.text}>
          {hasJoined ? (
            <CaptionBold color="primary">Joined</CaptionBold>
          ) : (
            <CaptionBold color="secondary">Join</CaptionBold>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.white,
    borderRadius: 16,
    borderColor: theme.primary,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 1,
  },
});

export default JoinBadge;
