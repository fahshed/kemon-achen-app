import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { theme } from '../../config';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import CommunityCard from '../../components/CommunityCard';
import NavRoutes from '../../navigation/NavRoutes';
import { ActivityIndicator, ItemSeparator } from '../../components';
import Api from '../../api';
import { H6Bold } from '../../styles';

function CommunityListScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedCommunities, setSuggestedCommunities] = useState([]);
  const { communities } = useAppSelector((state) => state.Community);

  const getCommunitiesOfUser = async () => {
    setIsLoading(true);
    const response = await dispatch(fetchCommunities());
    if ('error' in response) {
      console.log('Community List fetch error', response.error);
    }
  };

  const getSuggestedCommunities = async () => {
    try {
      const response = await Api.getSuggestedCommunities();
      setSuggestedCommunities(response);
      setIsLoading(false);
    } catch (error) {
      console.log('Suggested community fetch failed');
    }
  };

  useEffect(() => {
    getCommunitiesOfUser();
    getSuggestedCommunities();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
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
