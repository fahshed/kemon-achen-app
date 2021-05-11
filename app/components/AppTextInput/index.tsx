import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

import { theme } from '../../config';
//import { Container } from '../../styles';

function AppTextInput({ IconComponent = null, ...textInputProps }) {
  return (
    <View style={styles.container}>
      {IconComponent}
      <TextInput placeholderTextColor={theme.grey6} {...textInputProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //border: ,
    borderWidth: 1,
    borderColor: theme.grey5,
    backgroundColor: theme.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    width: 'auto',
  },
});
export default AppTextInput;
