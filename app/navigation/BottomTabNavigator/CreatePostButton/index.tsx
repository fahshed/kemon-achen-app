import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../../config';

function CreatePostButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 16 }}>
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
    borderRadius: 25,
    borderColor: theme.lightGrey,
    borderWidth: 4,
    bottom: 10,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
});

export default CreatePostButton;
