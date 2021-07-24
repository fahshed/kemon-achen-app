import React, { useEffect, useState } from 'react';

import ImageHeader from '../../components/ImageHeader';
import CommunityAboutScreen from '../../screens/CommunityDetailsSubScreens/CommunityAboutScreen';
import CommunityPostsScreen from '../../screens/CommunityDetailsSubScreens/CommunityPostsScreen';
import CommunityDescription from '../../components/CommunityDescription';
import CommunityDetailsTabNavigator from '../../navigation/CommunityDetailsTabNavigator';
import { ActivityIndicator, TopSearchBar2 } from '../../components';
import Api from '../../api';

import { Container } from '../../styles';

export default function CommunityScreen({ route }) {
  const communityId = route.params;
  const [commDesc, setCommDesc] = useState(null);
  const [joinLoading, setJoinLoading] = useState(false);

  const getCommunityInfo = async () => {
    try {
      const response = await Api.getCommunityInfo(communityId);
      setCommDesc(response);
    } catch (error) {
      console.log('Community Info fetch error', error);
    }
  };

  const handleJoin = async () => {
    setJoinLoading(true);
    try {
      await Api.joinCommunity(communityId);
      await getCommunityInfo();
    } catch (error) {
      console.log('Join error', error);
    }
    setJoinLoading(false);
  };

  useEffect(() => {
    getCommunityInfo();
  }, []);

  return (
    <>
      <TopSearchBar2 communityId={communityId} communityName={commDesc?.name} />

      <ImageHeader communityId={communityId} />

      {joinLoading ? (
        <Container height="100px" align="center" justify="center">
          <ActivityIndicator />
        </Container>
      ) : (
        <>
          {commDesc && (
            <CommunityDescription
              communityName={commDesc.name}
              badges={commDesc.tags}
              description={commDesc.description}
              hasJoined={commDesc.hasJoined}
              onJoin={handleJoin}
              members={commDesc.members + ' members'}
            />
          )}
        </>
      )}

      <CommunityDetailsTabNavigator
        FirstTabScreen={CommunityPostsScreen}
        SecondTabScreen={CommunityAboutScreen}
        communityId={communityId}
      />
    </>
  );
}
