import React from 'react';

import ImageHeader from '../../components/ImageHeader';
import CommunityAboutScreen from '../../screens/CommunityDetailsSubScreens/CommunityAboutScreen';
import CommunityPostsScreen from '../../screens/CommunityDetailsSubScreens/CommunityPostsScreen';
import CommunityDescription from '../../components/CommunityDescription';
import CommunityDetailsTabNavigator from '../../navigation/CommunityDetailsTabNavigator';
import { useAppDispatch, useAppSelector } from '../../store';

export default function CommunityScreen({ route }) {
  const dispatch = useAppDispatch();
  const communityId = route.params;
  const badges = [
    { name: 'PTSD', id: '1' },
    { name: 'Anxiety', id: '2' },
    { name: 'Stress', id: '3' },
  ];
  return (
    <>
      <ImageHeader />
      <CommunityDescription
        communityName="Anxiety"
        badges={badges}
        description="Some description about communities"
        hasJoined={true}
        members="5000"
      />

      <CommunityDetailsTabNavigator
        FirstTabScreen={CommunityAboutScreen}
        SecondTabScreen={CommunityPostsScreen}
        communityId={communityId}
      />
    </>
  );
}
