import React, { useEffect } from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';

import { ItemSeparator, TopSearchBar2 } from '../../components';
import { theme } from '../../config';
//import NavRoutes from '../../navigation/NavRoutes';
//import { Body2Bold, H5Bold } from '../../styles';

import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import ScreenTitleComponent from '../../components/ScreenTitleComponent';
import CommunityCard from '../../components/CommunityCard';
import NavRoutes from '../../navigation/NavRoutes';

function CommunityScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const { communities } = useAppSelector((state) => state.Community);

  const renderItem = ({ item }) => (
    <CommunityCard
      communityName={item.name}
      onPress={() => console.log('Pressed!')}
    />
  );

  const getCommunitiesOfUser = async () => {
    const response = await dispatch(fetchCommunities());
    if ('error' in response) {
      console.log('Community List fetch error', response.error);
    }
  };

  useEffect(() => {
    getCommunitiesOfUser();
  }, []);

  return (
    <>
      <TopSearchBar2
        navigateToProfileScreen={() =>
          navigation.navigate(NavRoutes.USER_PROFILE)
        }
      />
      <ScrollView style={styles.communityListContainer}>
        <ScreenTitleComponent screenName="Communities" />
        <FlatList
          data={communities}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={8} color={theme.grey1} />
          )}
          keyExtractor={(community) => community._id}
          renderItem={renderItem}
        />

        {/* <View style={styles.suggestedCommunityListContainer}> */}
        <ScreenTitleComponent screenName="Suggested Communities" />

        <FlatList
          data={communities}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={8} color={theme.grey1} />
          )}
          keyExtractor={(community) => community._id}
          renderItem={renderItem}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  communityListContainer: {
    height: '50%',
    backgroundColor: theme.white,
  },
  suggestedCommunityListContainer: {
    backgroundColor: theme.white,
    height: '40%',
  },
});

export default CommunityScreen;
