import React from 'react';
import { View } from 'react-native';

import { theme } from '../../config';
import { Body2, H6Bold } from '../../styles';
import BottomBar1 from '../BottomBar1';
import UserInfoBar1 from '../UserInfoBar1';

function Post() {
  return (
    <>
      <UserInfoBar1 />
      <View style={{ backgroundColor: theme.grey3, padding: 8 }}>
        <H6Bold mb="8px">
          Anyone else feel like something horrible happened every time the phone
          rings?
        </H6Bold>
        <Body2>
          When my phone rings, my anxiety shoots through the roof. I put my
          location on with my immediate family so they know when I’m at work and
          just to text me with direct . I’m convinced something really bad
          happened to someone I love and someone is calling me to tell me. Help?
        </Body2>
      </View>

      <BottomBar1 />
    </>
  );
}

export default Post;
