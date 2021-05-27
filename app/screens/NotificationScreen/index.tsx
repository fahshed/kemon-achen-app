import React from 'react';
import { View } from 'react-native';

//import { Body2Bold } from '../../styles';
import UserInfoBar2 from '../../components/UserInfoBar2';
import Comment from '../../components/Comment';
import UserInfoBar3 from '../../components/UserInfoBar3';
import TagComponent from '../../components/Tag';
import RankBadgeComponent from '../../components/RankBadgeComponent';
import NotificationCard from '../../components/NotificationCard';
import ProfessionalCard from '../../components/ProfessionalCard';
//import CommunityCard from '../../components/CommunityCard';
import UserProfileCommentCard from '../../components/UserProfileCommentCard';
import UserProfilePost from '../../components/UserProfilePost';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  AddCommentBottomBar,
  CustomTextInput,
  TopSearchBar2,
} from '../../components';
import { theme } from '../../config';
import { Body2Bold } from '../../styles';
import ImageHeader from '../../components/ImageHeader';

function NotificationScreen() {
  return (
    <View style={{ padding: 8 }}>
      {/* <UserInfobar1 /> */}
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
      <NotificationCard
        notificationTitle="Fahim gave feedback on your post"
        notificationBody="Welcome to your life There's no turning back Even while we sleep We
        will find you Acting on your best Welcome to your life There's no
        turning back Even while we sleep We will find you Acting on your best
        Welcome to your life There's no turning back Even while we sleep We
        will find you Acting on your best Welcome to your life There's no
        turning back Even while we sleep We will find you Acting on your best"
        time="2h"
      />
      {/* <ProfessionalCard /> */}
      <UserProfileCommentCard
        postTitle="Anyone else feels something is not right?"
        commentBody='My grandmother went to an "OK" doctor. We were told she was going to
        die. There was nothing that can be done. My mother brought her to
        another doctor who recognized the ailment and rapidly cured her.'
        time="2h"
      />
      <Body2Bold mb="20px">Component test screen</Body2Bold>
      {/* <CustomTextInput
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
      <TopSearchBar2 /> */}
      {/* <UserInfoBar2 communityName="PTSD" postedAgo="2h" /> */}

      {/* <UserProfilePost
        communityName="Anxiety"
        postedAgo="10h"
        title="Ths is a test post"
        content="Sex is goodaasASasASas sASas asAS as AS Sex is goodaasASasASas sASas asAS as AS Sex is goodaasASasASas sASas asAS as AS"
        commentCount={100}
        voteCount={100}
      /> */}
      <ImageHeader />
    </View>
  );
}

export default NotificationScreen;
