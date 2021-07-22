import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, H6Bold, Body1 } from '../../styles';

function AppButton({
  color = 'primary',
  title,
  onPress = null,
  small = false,
  mb = 0,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: '100%', marginBottom: mb }}
    >
      <Container
        justify="center"
        bg={color}
        corner="8px"
        pt="6px"
        pb="6px"
        pl="16px"
        pr="16px"
      >
        {small ? (
          <Body1 color="white">{title}</Body1>
        ) : (
          <H6Bold color="white">{title}</H6Bold>
        )}
      </Container>
    </TouchableOpacity>
  );
}

export default AppButton;
