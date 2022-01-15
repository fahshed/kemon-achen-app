import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, ToastAndroid, View } from 'react-native';
import Api from '../../api';
import {
  ActivityIndicator,
  AppButton,
  ItemSeparator,
  JoinCommunityCard,
} from '../../components';
import { theme } from '../../config';
import { useAppDispatch } from '../../store';
import { setJoinedAtLeastOne } from '../../store/reducers';
import { Body1Bold, Container, H6Bold } from '../../styles';

function JoinCommunityScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestedCommunities, setSuggestedCommunities] = useState([]);
  const [iosBlock, setIosBlock] = useState(false);

  const dispatch = useAppDispatch();

  const getSuggestedCommunities = async () => {
    try {
      const response = await Api.getSuggestedCommunities();

      setSuggestedCommunities(
        response.map((com) => ({ community: com, isJoined: false })),
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Suggested community fetch failed', error);
    }
  };

  const joinCommunty = async (id, index) => {
    try {
      await Api.joinCommunity(id);
      setSuggestedCommunities([
        ...suggestedCommunities.slice(0, index),
        { community: suggestedCommunities[index].community, isJoined: true },
        ...suggestedCommunities.slice(index + 1),
      ]);
    } catch (error) {
      console.log('join failed at signup', error);
    }
  };

  const handleNavigation = () => {
    if (!suggestedCommunities.some((com) => com.isJoined === true)) {
      if (Platform.OS === 'ios') {
        setIosBlock(true);
      } else if (Platform.OS === 'android') {
        ToastAndroid.showWithGravityAndOffset(
          'You must join at least one community to continue !!!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } else {
      dispatch(setJoinedAtLeastOne());
    }
  };

  useEffect(() => {
    getSuggestedCommunities();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView>
      <H6Bold align="center" mt="24px" mb="24px" color="primary">
        Communities you may be interested
      </H6Bold>
      {suggestedCommunities.map((item, index) => (
        <View key={index}>
          <JoinCommunityCard
            communityName={item.community.name}
            communityDescription={item.community.description}
            hasJoined={item.isJoined}
            onPress={() => joinCommunty(item.community._id, index)}
          />
          <ItemSeparator height={8} color={theme.grey3} />
        </View>
      ))}

      {iosBlock ? (
        <Body1Bold mt="16px" mb="8px" ml="8px" color="danger">
          You must join at least one community to continue !!!
        </Body1Bold>
      ) : null}

      <Container grow="1" justify="center" mt="24px">
        <Container width="70%">
          <AppButton title="Continue" mb={10} onPress={handleNavigation} />
        </Container>
      </Container>
    </ScrollView>
  );
}

export default JoinCommunityScreen;
