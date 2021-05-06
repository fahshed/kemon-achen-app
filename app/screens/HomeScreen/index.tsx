import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import {
  BottomBar1,
  AppButton,
  BottomBar2,
  UserInfobar1,
  AppTextInput,
  AddCommentBottomBar,
  TopSearchBar1,
} from '../../components';
import { theme } from '../../config';

export default function HomeScreen() {
  return (
    <View>
      <BottomBar1
        onLikePress={() => console.log('Like pressed')}
        onCommentPress={() => console.log('Comment pressed')}
        onSharePress={() => console.log('Share pressed')}
      />
      <AppButton
        color={'secondary'}
        title={'Login'}
        onPress={() => console.log('hello button')}
      />
      <BottomBar2
        onLikePress={() => console.log('reply Like pressed')}
        onReplyPress={() => console.log('reply pressed')}
      />
      <UserInfobar1 />

      <AppTextInput
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="email"
            size={24}
            style={{ padding: 8 }}
          />
        }
        placeholder="Enter your E-mail"
      />
      <AppTextInput
        IconComponent={
          <MaterialCommunityIcons
            color={theme.grey6}
            name="lock"
            size={24}
            style={{ padding: 8 }}
          />
        }
        placeholder="Enter your Password"
      />
      <AddCommentBottomBar />
      <TopSearchBar1
        IconComponent={
          <AntDesign
            color={theme.grey6}
            name="search1"
            size={24}
            style={{ padding: 8 }}
          />
        }
      />
    </View>
  );
}
