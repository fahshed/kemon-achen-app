import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, H5Bold, Body1 } from '../../styles';

function AppButton({ color = 'primary', title, onPress = null, style = null }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container
        justify="center"
        bg={color}
        corner="8px"
        height="48px"
        mt="8px"
        style={style}
      >
        {!style ? (
          <H5Bold color="white">{title}</H5Bold>
        ) : (
          <Body1 color="white">{title}</Body1>
        )}
      </Container>
    </TouchableOpacity>
  );
}

export default AppButton;
