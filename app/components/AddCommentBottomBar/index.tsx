import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import CustomTextInput from '../CustomTextInput';

function AddCommentBottomBar() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <View style={{ flex: 1 }}>
        <CustomTextInput placeholder="Add a comment" />
      </View>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name={'chevron-double-down'}
          size={40}
          color={theme.grey5}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.grey1,
    marginTop: 8,
    position: 'absolute',
    bottom: 0,
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
