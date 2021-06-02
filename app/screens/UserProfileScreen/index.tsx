import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ItemSeparator, TopSearchBar2 } from '../../components';
import { theme } from '../../config';
import ImageHeader from '../../components/ImageHeader';
import RegularProfileInfoBar from '../../components/RegularProfileInfoBar';
import UserHealthScreen from '../../screens/UserHealthScreen';
import UserPostsScreen from '../../screens/UserPostsScreen';
import UserCommentsScreen from '../../screens/UserCommentsScreen';
import UserProfileTabNavigator from '../../navigation/UserProfileTabNavigator';

const Tab = createMaterialTopTabNavigator();

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
