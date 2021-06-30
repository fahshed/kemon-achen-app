import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, H6Bold, Body1 } from '../../styles';

function AppButton({
  color = 'primary',
  title,
  onPress = null,
  style = null,
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
        p="10px"
        style={style}
      >
        {!style ? (
          <H6Bold color="white">{title}</H6Bold>
        ) : (
          <Body1 color="white">{title}</Body1>
        )}
      </Container>
    </TouchableOpacity>
  );
}

export default AppButton;
