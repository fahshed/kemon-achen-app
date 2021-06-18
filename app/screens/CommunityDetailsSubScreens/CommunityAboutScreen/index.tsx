import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { Body1, Body1Bold, H6Bold } from '../../../styles';
import Api from '../../../api';

//import { ItemSeparator } from '../../components';
//import UserProfileCommentCard from '../../components/UserProfileCommentCard';

//import { theme } from '../../config';

export default function CommunityAboutScreen({ communityId }) {
  const [communityAbout, setcommunityAbout] = useState(null);

  const getCommunityAbout = async () => {
    const response = await Api.getCommunityAbout(communityId);
    setcommunityAbout(response);
  };

  useEffect(() => {
    getCommunityAbout();
  }, []);

  console.log(communityAbout);

  return (
    <ScrollView>
      <View style={styles.container}>
        <H6Bold mt="16px" mb="4px">
          Practice
        </H6Bold>
        <Body1>
          {communityAbout && communityAbout.about.detailedDescription}
        </Body1>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
