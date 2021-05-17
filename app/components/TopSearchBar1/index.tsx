import React from 'react';
import { Image, View } from 'react-native';

import { Container } from '../../styles';
import AppTextInput from '../AppTextInput';

function TopSearchBar1({ IconComponent }) {
  return (
    <Container
      bg="lightGrey"
      direction="row"
      justify="flex-start"
      p="8px"
      mb="8px"
    >
      <View style={{ width: '15%' }}>
        <Image
          style={{ height: 48, width: 48, borderRadius: 24, marginRight: 8 }}
          source={{ uri: 'https://picsum.photos/200' }}
        />
      </View>

      <View style={{ width: '85%' }}>
        <AppTextInput IconComponent={IconComponent} placeholder="Search" />
      </View>
    </Container>
  );
}

export default TopSearchBar1;
