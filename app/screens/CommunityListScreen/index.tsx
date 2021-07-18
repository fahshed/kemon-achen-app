import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { TopSearchBar2 } from '../../components';
import { theme } from '../../config';
//import NavRoutes from '../../navigation/NavRoutes';
//import { Body2Bold, H5Bold } from '../../styles';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import CommunityCard from '../../components/CommunityCard';
import NavRoutes from '../../navigation/NavRoutes';

function CommunityListScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const { communities } = useAppSelector((state) => state.Community);

  const getCommunitiesOfUser = async () => {
    const response = await dispatch(fetchCommunities());
    console.log(response);
    if ('error' in response) {
      console.log('Community List fetch error', response.error);
    }
  };

  useEffect(() => {
    getCommunitiesOfUser();
  }, []);

  return (
    <>
      <ScrollView>
        <TopSearchBar2 />
        <View style={styles.communityListContainer}>
          {communities.map((item) => (
            <CommunityCard
              communityName={item.name}
              onPress={() =>
                navigation.navigate(NavRoutes.COMMUNITY_DETAILS, item._id)
              }
              key={item._id}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  communityListContainer: {
    height: '50%',
    backgroundColor: theme.white,
  },
});

export default CommunityListScreen;
