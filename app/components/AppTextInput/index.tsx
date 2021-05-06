import React from 'react';
import { TextInput } from 'react-native';

import { theme } from '../../config';
import { Container } from '../../styles';

function AppTextInput({ IconComponent = null, ...TextInputProps }) {
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
          color: theme.black,
          fontSize: 18,
          height: 48,
          //fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
          paddingLeft: !IconComponent ? 8 : 0,
        }}
        {...TextInputProps}
      />
    </Container>
  );
}

export default AppTextInput;
