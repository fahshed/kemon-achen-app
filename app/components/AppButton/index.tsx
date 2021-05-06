import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, H5Bold } from '../../styles';

function AppButton({ color = 'primary', title, onPress = null }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container
        justify="center"
        bg={color}
        corner="8px"
        height="48px"
        mt="8px"
      >
        <H5Bold color="white">{title}</H5Bold>
      </Container>
    </TouchableOpacity>
  );
}

export default AppButton;
