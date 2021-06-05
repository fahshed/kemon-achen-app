import React from 'react';

import ImageHeader from '../../components/ImageHeader';
import RegularProfileInfoBar from '../../components/RegularProfileInfoBar';
import UserHealthScreen from '../../screens/UserHealthScreen';
import UserPostsScreen from '../../screens/UserPostsScreen';
import UserCommentsScreen from '../../screens/UserCommentsScreen';
import UserProfileTabNavigator from '../../navigation/UserProfileTabNavigator';

export default function UserProfileScreen() {
  return (
    <>
      <ImageHeader />
      <RegularProfileInfoBar
        userName="Akil"
        profileDescription="A Curious Pessimist"
      />

      <UserProfileTabNavigator
        FirstTabScreen={UserHealthScreen}
        SecondTabScreen={UserPostsScreen}
        ThirdTabScreen={UserCommentsScreen}
        firstScreenName="UserProfile"
        firstTabName="Health"
      />
    </>
  );
}
