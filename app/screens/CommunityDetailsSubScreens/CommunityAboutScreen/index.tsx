import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Linking } from 'react-native';

import { Body1, H6Bold } from '../../../styles';
import Api from '../../../api';

export default function CommunityAboutScreen({ communityId }) {
  const [communityAbout, setcommunityAbout] = useState(null);

  const getCommunityAbout = async () => {
    const response = await Api.getCommunityAbout(communityId);
    setcommunityAbout(response);
  };

  useEffect(() => {
    getCommunityAbout();
  }, []);

  //console.log(communityAbout);

  return (
    <ScrollView>
      {communityAbout && (
        <View style={styles.container}>
          <H6Bold mt="4px" mb="4px">
            Practice
          </H6Bold>
          <Body1>{communityAbout.about.detailedDescription}</Body1>

          <H6Bold mt="16px" mb="4px">
            Symptoms
          </H6Bold>
          {communityAbout.about.symptoms.map((symptom, index) => (
            <Body1 key={index}>{symptom}</Body1>
          ))}

          <H6Bold mt="16px" mb="4px">
            What To Do
          </H6Bold>
          {communityAbout.about.toDo.map((todo, index) => (
            <Body1 key={index}>{todo}</Body1>
          ))}

          <H6Bold mt="16px" mb="4px">
            Learn More
          </H6Bold>
          {communityAbout.about.links.map((linkElement) => (
            <Body1
              key={linkElement._id}
              color="primary"
              onPress={() => Linking.openURL(linkElement.link)}
            >
              {linkElement.title}
            </Body1>
          ))}
        </View>
      )}
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
