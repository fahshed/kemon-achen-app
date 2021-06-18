import React, { useEffect, useState } from 'react';

import ImageHeader from '../../components/ImageHeader';
import CommunityAboutScreen from '../../screens/CommunityDetailsSubScreens/CommunityAboutScreen';
import CommunityPostsScreen from '../../screens/CommunityDetailsSubScreens/CommunityPostsScreen';
import CommunityDescription from '../../components/CommunityDescription';
import CommunityDetailsTabNavigator from '../../navigation/CommunityDetailsTabNavigator';
import Api from '../../api';

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

  //console.log(commDesc.tags);

  const badges = [
    { name: 'PTSD', id: '1' },
    { name: 'Anxiety', id: '2' },
    { name: 'Stress', id: '3' },
  ];
  return (
    <>
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
