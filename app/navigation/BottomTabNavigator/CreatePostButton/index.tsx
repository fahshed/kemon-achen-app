import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../../config';

function CreatePostButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 8 }}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={30}
          color={theme.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.primary,
    borderRadius: 30,
    borderColor: theme.lightGrey,
    borderWidth: 4,
    bottom: 25,
    height: 60,
    width: 60,
    justifyContent: 'center',
  },
});

export default CreatePostButton;
