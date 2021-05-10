import React from 'react';
import { Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from '../../styles';
import { theme } from '../../config';
import AppTextInput from '../AppTextInput';

function AddCommentBottomBar() {
  return (
    <Container
      direction="row"
      height="64px"
      justify="flex-start"
      p="8px"
      bg="lightGrey"
    >
      <Image
        style={{ height: 48, width: 48, borderRadius: 24, marginRight: 8 }}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <AppTextInput placeholder="Add a comment" />
      <MaterialCommunityIcons
        name={'chevron-double-down'}
        size={40}
        color={theme.grey5}
      />
    </Container>
  );
}

export default AddCommentBottomBar;
