import React, { useEffect, useState } from 'react';

import ImageHeader from '../../components/ImageHeader';
import CommunityAboutScreen from '../../screens/CommunityDetailsSubScreens/CommunityAboutScreen';
import CommunityPostsScreen from '../../screens/CommunityDetailsSubScreens/CommunityPostsScreen';
import CommunityDescription from '../../components/CommunityDescription';
import CommunityDetailsTabNavigator from '../../navigation/CommunityDetailsTabNavigator';
import Api from '../../api';
import { TopSearchBar2 } from '../../components';

export default function CommunityScreen({ route }) {
  const communityId = route.params;
  const [commDesc, setCommDesc] = useState(null);

  const getCommunityInfo = async () => {
    const response = await Api.getCommunityInfo(communityId);
    setCommDesc(response);
  };

  useEffect(() => {
    getCommunityInfo();
  }, []);

  return (
    <>
      <TopSearchBar2 />
      <ImageHeader />
      {commDesc && (
        <CommunityDescription
          communityName={commDesc.name}
          badges={commDesc.tags}
          description={commDesc.description}
          hasJoined={commDesc.hasJoined}
          members={commDesc.members + ' members'}
        />
      )}

      <CommunityDetailsTabNavigator
        FirstTabScreen={CommunityPostsScreen}
        SecondTabScreen={CommunityAboutScreen}
        communityId={communityId}
      />
    </>
  );
}
