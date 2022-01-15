import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import CustomTextInput from '../CustomTextInput';

function AddCommentBottomBar({ onPress, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <CustomTextInput
          onChangeText={onChangeText}
          placeholder="Add a comment"
          value={value}
        />
      </View>

      <TouchableOpacity onPress={onPress} style={{ marginLeft: 6 }}>
        <MaterialCommunityIcons name={'send'} size={32} color={theme.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.grey3,
    position: 'absolute',
    bottom: 0,
    padding: 8,
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default AddCommentBottomBar;
