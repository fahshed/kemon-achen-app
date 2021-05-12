import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import { theme } from '../../config';
//import { Container } from '../../styles';

function AppTextInput({ IconComponent = null, ...textInputProps }) {
  return (
    <View style={styles.container}>
      {IconComponent}
      <TextInput
        placeholderTextColor={theme.grey6}
        style={styles.inputStyle}
        {...textInputProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputStyle: {
    padding: 8,
    color: theme.black,
    fontSize: 16,
  },
});
export default AppTextInput;
