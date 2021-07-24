import React from 'react';

import ImageHeader from '../../components/ImageHeader';
import RegularProfileInfoBar from '../../components/RegularProfileInfoBar';
import UserHealthScreen from '../../screens/UserHealthScreen';
import UserPostsScreen from '../../screens/UserPostsScreen';
import UserCommentsScreen from '../../screens/UserCommentsScreen';
import UserProfileTabNavigator from '../../navigation/UserProfileTabNavigator';
import { useAppSelector } from '../../store';

export default function UserProfileScreen() {
  const { user } = useAppSelector((state) => state.User);
  return (
    <>
      <ImageHeader id={user.name} />
      <RegularProfileInfoBar
        userName={user.name}
        profileDescription={user.message}
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
