import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  AddCommentBottomBar,
  CustomTextInput,
  TopSearchBar2,
} from '../../components';
import { theme } from '../../config';
import { Body2Bold } from '../../styles';

function NotificationScreen() {
  return (
    <View style={{ padding: 8 }}>
      <Body2Bold mb="20px">Component test screen</Body2Bold>
      <CustomTextInput
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="lock"
            size={24}
            style={{ paddingRight: 8 }}
          />
        }
      />
      <CustomTextInput />
      <AddCommentBottomBar />
      <TopSearchBar2 />
    </View>
  );
}

export default NotificationScreen;
