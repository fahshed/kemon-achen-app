import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { theme } from '../../config';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import CommunityCard from '../../components/CommunityCard';
import NavRoutes from '../../navigation/NavRoutes';
import { ItemSeparator } from '../../components';
import Api from '../../api';
import { H6Bold } from '../../styles';

function CommunityListScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const [suggestedCommunities, setSuggestedCommunities] = useState([]);
  const { communities } = useAppSelector((state) => state.Community);

  const getCommunitiesOfUser = async () => {
    const response = await dispatch(fetchCommunities());
    //console.log(response);
    if ('error' in response) {
      console.log('Community List fetch error', response.error);
    }
  };

  const getSuggestedCommunities = async () => {
    try {
      const response = await Api.getSuggestedCommunities();
      setSuggestedCommunities(response);
    } catch (error) {
      console.log('Suggested community fetch failed');
    }
  };

  useEffect(() => {
    getCommunitiesOfUser();
    getSuggestedCommunities();
  }, []);

  return (
    <ScrollView>
      <H6Bold ml="8px" mb="8px" color="primary">
        Your Communities
      </H6Bold>

      {communities.map((item, index) => (
        <View key={index}>
          <CommunityCard
            communityName={item.name}
            onPress={() =>
              navigation.navigate(NavRoutes.COMMUNITY_DETAILS, item._id)
            }
          />
          <ItemSeparator height={8} color={theme.grey3} />
        </View>
      ))}
      <H6Bold ml="8px" mb="8px" color="primary">
        More Communities
      </H6Bold>
      {suggestedCommunities.map((item, index) => (
        <View key={index}>
          <CommunityCard
            communityName={item.name}
            onPress={() =>
              navigation.navigate(NavRoutes.COMMUNITY_DETAILS, item._id)
            }
          />
          <ItemSeparator height={8} color={theme.grey3} />
        </View>
      ))}
    </ScrollView>
  );
}

export default CommunityListScreen;
