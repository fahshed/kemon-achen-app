import React from 'react';
import { Image } from 'react-native';

import { Container } from '../../styles';
import AppTextInput from '../AppTextInput';

function TopSearchBar1({ IconComponent }) {
  return (
    <Container
      bg="lightGrey"
      direction="row"
      height="64px"
      justify="flex-start"
      p="8px"
    >
      <Image
        style={{ height: 48, width: 48, borderRadius: 24, marginRight: 8 }}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <AppTextInput IconComponent={IconComponent} placeholder="Search" />
    </Container>
  );
}

export default TopSearchBar1;
