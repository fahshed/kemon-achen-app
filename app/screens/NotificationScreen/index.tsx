import React from 'react';
import { View } from 'react-native';

import { Body2Bold } from '../../styles';
import { BottomBar2, UserInfobar1 } from '../../components';
import Comment from '../../components/Comment';
import UserInfoBar3 from '../../components/UserInfoBar3';
import TagComponent from '../../components/Tag';
import RankBadgeComponent from '../../components/RankBadgeComponent';
import NotificationCard from '../../components/NotificationCard';
import ProfessionalCard from '../../components/ProfessionalCard';

function NotificationScreen() {
  return (
    <View style={{ padding: 8 }}>
      <UserInfobar1 />
      <View style={{ padding: 8 }} />
      <UserInfoBar3 />
      <View style={{ padding: 8 }} />
      <UserInfoBar3 />
      <View
        style={{
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TagComponent badgeContent="Anxiety" />
        <TagComponent badgeContent="PTSD" />
        <RankBadgeComponent rank="100" />
      </View>

      <Comment
        commentBody="discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet"
        RankBadgeComponent={<RankBadgeComponent rank="100" />}
      />

      <View style={{ padding: 8 }} />
      <NotificationCard />

      <ProfessionalCard />
    </View>
  );
}

export default NotificationScreen;
