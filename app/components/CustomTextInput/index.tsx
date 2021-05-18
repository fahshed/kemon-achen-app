import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import { theme } from '../../config';

function CustomTextInput({ IconComponent = null, ...textInputProps }) {
  return (
    <View style={styles.searchSection}>
      {IconComponent}
      <TextInput
        placeholder="User Nickname"
        placeholderTextColor={theme.grey6}
        //style={[styles.inputStyle, { width: IconComponent ? '85%' : '100%' }]}
        style={[styles.input, { paddingLeft: !IconComponent ? 8 : 0 }]}
        {...textInputProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchSection: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.white,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: theme.white,
    color: theme.black,
    fontSize: 16,
  },
});
export default CustomTextInput;
