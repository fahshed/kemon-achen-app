import React from 'react';
import { TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Container } from '../../styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <Container
      bg="lightGrey"
      corner="24px"
      direction="row"
      height="48px"
      justify="flex-start"
      mt="8px"
      width={width}
    >
      {icon && (
        <MaterialCommunityIcons
          color={theme.grey6}
          name={icon}
          size={24}
          style={{ marginRight: 8, padding: 8 }}
        />
      )}
      <TextInput
        placeholderTextColor={theme.grey6}
        style={{
          color: theme.black,
          fontSize: 18,
          fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        }}
        {...otherProps}
      />
    </Container>
  );
}

export default AppTextInput;
