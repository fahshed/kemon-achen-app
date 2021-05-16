import React from 'react';
import { View } from 'react-native';

import { Body2Bold } from '../../styles';
import { BottomBar2, UserInfobar1 } from '../../components';
import UserInfoBar3 from '../../components/UserInfoBar3';
import Tag from '../../components/Tag';
import RankBadge from '../../components/RankBadge';

function NotificationScreen() {
  return (
    <View style={{ padding: 8 }}>
      <Body2Bold>NotificationScreen</Body2Bold>
      <BottomBar2 />
      <UserInfobar1 />
      <View style={{padding: 8}} />
      <UserInfoBar3 RankBadge={<RankBadge rank="100" />}/>
      <View style={{padding: 8}} />
      <UserInfoBar3 />
      <View style={{padding: 8, flexDirection: "row", justifyContent: "space-evenly"}} >
      <Tag badgeContent="Anxiety" />
      <Tag badgeContent="PTSD" />
      <RankBadge rank="568"/>
        </View>
        <RankBadge rank="568"/>
      <View style={{padding: 8}} />
    </View>
  );
}

export default NotificationScreen;
