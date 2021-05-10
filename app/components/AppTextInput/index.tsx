import React from 'react';
import { TextInput } from 'react-native';

import { theme } from '../../config';
import { Container } from '../../styles';

function AppTextInput({ IconComponent = null, ...textInputProps }) {
  return (
    <Container
      border="1px"
      bc="grey5"
      bg="lightGrey"
      corner="8px"
      direction="row"
      grow="1"
      justify="flex-start"
      mt="8px"
      mb="8px"
      width="auto"
    >
      {IconComponent}
      <TextInput
        placeholderTextColor={theme.grey6}
        style={{
          //backgroundColor: theme.secondary,
          color: theme.black,
          fontSize: 16,
          height: 48,
          padding: 8,
        }}
        {...textInputProps}
      />
    </Container>
  );
}

export default AppTextInput;
