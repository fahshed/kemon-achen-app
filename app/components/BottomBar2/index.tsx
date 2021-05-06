import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2 } from '../../styles';

function BottomBar1({
  onLikePress = null,
  onReplyPress = null,
  onMorePress = null,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onMorePress}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={theme.grey5}
            style={{ marginRight: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onReplyPress}>
          <MaterialCommunityIcons
            name="reply-outline"
            size={24}
            color={theme.grey5}
          />
        </TouchableOpacity>
        <Body2 color="grey5">Reply</Body2>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onLikePress}>
          <MaterialCommunityIcons
            name="arrow-up-bold-outline"
            size={24}
            color={theme.grey5}
          />
        </TouchableOpacity>
        <Body2 color="grey5">10</Body2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.lightGrey,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'flex-end',
    width: '100%',
  },
  iconWithText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 24,
  },
});

export default BottomBar1;
