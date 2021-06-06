import React from 'react';
import { View } from 'react-native';

//import { Body2Bold } from '../../styles';
//import UserInfoBar2 from '../../components/UserInfoBar2';
// import Comment from '../../components/Comment';
// import UserInfoBar3 from '../../components/UserInfoBar3';
// import TagComponent from '../../components/Tag';
// import RankBadgeComponent from '../../components/RankBadgeComponent';
//import { theme } from '../../config';
//import NotificationCard from '../../components/NotificationCard';
// import ProfessionalCard from '../../components/ProfessionalCard';
//import CommunityCard from '../../components/CommunityCard';
//import UserProfileCommentCard from '../../components/UserProfileCommentCard';
// import UserProfilePost from '../../components/UserProfilePost';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import {
//   AddCommentBottomBar,
//   CustomTextInput,
//   TopSearchBar2,
// } from '../../components';
// import { theme } from '../../config';
import { Body2Bold, H5Bold } from '../../styles';
//import ImageHeader from '../../components/ImageHeader';
// import RegularProfileInfoBar from '../../components/RegularProfileInfoBar';
// import ProfessionalProfileInfoBar from '../../components/ProfessionalProfileInfoBar';
//import ProfileTestBadgeComponent from '../../components/ProfileTestBadgeComponent';
// import TestInfoComponent from '../../components/TestInfoComponent';

// import ScreenTitleComponent from '../../components/ScreenTitleComponent';
import { AppButton } from '../../components';

import { useAppDispatch, useAppSelector } from '../../store';
import { logout } from '../../store/reducers';
function NotificationScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.User);

  // const badges = [
  //   {
  //     name: 'PTSD',
  //     id: '12345',
  //   },
  //   {
  //     name: 'Anxiety',
  //     id: '56789',
  //   },
  // ];
  return (
    <View style={{ padding: 8 }}>
      {/* <UserInfobar1 /> */}
      <View style={{ padding: 8 }} />
      {/* <UserInfoBar3 /> */}
      {/* <View
        style={{
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TagComponent badgeContent="Anxiety" />
        <TagComponent badgeContent="PTSD" />
        <RankBadgeComponent rank="100" />
      </View> */}
      {/* <Comment
        commentBody="m Ipsum, Lorem ipsum dolor sit amet"
        RankBadgeComponent={<RankBadgeComponent rank="100" />}
      /> */}

      <View style={{ padding: 8 }}>
        <H5Bold>Dummy account screen</H5Bold>
        <Body2Bold>{'ID: ' + user._id}</Body2Bold>
        <Body2Bold>{'Name: ' + user.name}</Body2Bold>
        <Body2Bold>{'role: ' + user.role}</Body2Bold>
        <AppButton title="Logout" onPress={() => dispatch(logout())} />
      </View>
      <View style={{ padding: 8 }} />
      {/* <NotificationCard
        notificationTitle="Fahim gave feedback on your post"
        notificationBody="Welcome to your life There's no turning back Even while we sleep We
        will find you Acting on your best Welcome to your life There's no
        turning back Even while we sleep We will find you Acting on your best
        Welcome to your life There's no turning back Even while we sleep We
        will find you Acting on your best Welcome to your life There's no
        turning back Even while we sleep We will find you Acting on your best"
        time="2h"
      /> */}
      {/* <ProfessionalCard /> */}
      {/* <UserProfileCommentCard
        postTitle="Anyone else feels something is not right?"
        commentBody='My grandmother went to an "OK" doctor. We were told she was going to
        die. There was nothing that can be done. My mother brought her to
        another doctor who recognized the ailment and rapidly cured her.'
        time="2h"
      /> */}
      <Body2Bold mb="20px">Component test screen</Body2Bold>
    </View>
  );
}

export default NotificationScreen;
