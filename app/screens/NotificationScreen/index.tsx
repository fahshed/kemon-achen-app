import React from 'react';
import { View, FlatList } from 'react-native';
import { theme } from '../../config';
import { ItemSeparator, NotificationCard } from '../../components';

//import { Body2Bold } from '../../styles';
//import UserInfoBar2 from '../../components/UserInfoBar2';
// import Comment from '../../components/Comment';
// import UserInfoBar3 from '../../components/UserInfoBar3';
// import TagComponent from '../../components/Tag';
// import RankBadgeComponent from '../../components/RankBadgeComponent';
//import { theme } from '../../config';
// import NotificationCard from '../../components/NotificationCard';
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
import ScreenTitleComponent from '../../components/ScreenTitleComponent';
import { AppButton } from '../../components';

import { useAppDispatch, useAppSelector } from '../../store';
import { logout } from '../../store/reducers';
import CommunityPostHeader from '../../components/CommunityPostHeader';
import CommunityDescription from '../../components/CommunityDescription';
function NotificationScreen() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.User);

  const notifications = [
    {
      userID: '12345',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '123453',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '123459',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '1234500',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '1234577',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '1234598',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '123451',
      title: 'Dr Fahim Gave Feedback on your post in community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '123450008',
      title: 'Dr Fahim Gave Feedback on your post',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
    {
      userID: '12345121',
      title: 'Dr Fahim Gave Feedback on your post in Community PTSD',
      body:
        "There is a recent study on stress management that breathing techniques often help people in dealing with lot's of stress. So Make sure to breath once in a while everyday for three minutes or so. In that way you can achieve what you aspire for by dealing with stress in a healthy way.",
      time: '5h',
    },
  ];

  const renderItem = ({ item }) => (
    <NotificationCard notificationTitle={item.title} time={item.time} />
  );

  const badges = [
    { name: 'PTSD', id: '1' },
    { name: 'Anxiety', id: '2' },
    { name: 'Stress', id: '3' },
  ];

  return (
    // <View style={{ padding: 8 }}>
    //   {/* <UserInfobar1 /> */}
    //   <View style={{ padding: 8 }} />
    //   {/* <UserInfoBar3 /> */}
    //   {/* <View
    //     style={{
    //       padding: 8,
    //       flexDirection: 'row',
    //       justifyContent: 'space-evenly',
    //     }}
    //   >
    //     <TagComponent badgeContent="Anxiety" />
    //     <TagComponent badgeContent="PTSD" />
    //     <RankBadgeComponent rank="100" />
    //   </View> */}

    //   <View style={{ padding: 8 }} />
    //   {/* <NotificationCard
    //     notificationTitle="Fahim gave feedback on your post"
    //     notificationBody="Welcome to your life There's no turning back Even while we sleep We
    //     will find you Acting on your best Welcome to your life There's no
    //     turning back Even while we sleep We will find you Acting on your best
    //     Welcome to your life There's no turning back Even while we sleep We
    //     will find you Acting on your best Welcome to your life There's no
    //     turning back Even while we sleep We will find you Acting on your best"
    //     time="2h"
    //   /> */}
    //   <Body2Bold mb="20px">Component test screen</Body2Bold>
    // </View>
    <>
      <CommunityPostHeader postedBy="Akil" time="2h" />
      <CommunityDescription
        communityName="Anxiety"
        badges={badges}
        description="Some description about communities"
        hasJoined={true}
        members="5000"
      />
      <View style={{ padding: 8 }}>
        <H5Bold>Dummy account screen</H5Bold>
        <Body2Bold>{'ID: ' + user._id}</Body2Bold>
        <Body2Bold>{'Name: ' + user.name}</Body2Bold>
        <Body2Bold>{'role: ' + user.role}</Body2Bold>
        <AppButton title="Logout" onPress={() => dispatch(logout())} />
      </View>
      <ScreenTitleComponent screenName="Notifications" />
      <FlatList
        data={notifications}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(notification) => notification.userId}
        renderItem={renderItem}
      />
    </>
  );
}

export default NotificationScreen;
