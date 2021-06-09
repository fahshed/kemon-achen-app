import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Body1, Body1Bold, H6Bold } from '../../styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../config';

//import { ItemSeparator } from '../../components';
//import UserProfileCommentCard from '../../components/UserProfileCommentCard';

//import { theme } from '../../config';

export default function ChamberScreen() {
  const qualifications = ['MBBS', 'MCPS(Psychiatry)', 'FCPS(Psychiatry)'];

  return (
    <ScrollView>
      <View style={styles.container}>
        <H6Bold mb="4px">Qualifications</H6Bold>
        {qualifications.map((q) => (
          <Body1>{q}</Body1>
        ))}
        <H6Bold mt="16px" mb="4px">
          Practice
        </H6Bold>
        <Body1>
          I am currently practicing in Emerald Hospital as an assistant
          professor and also in National memorial Hospital in weekdays. I
          specialize in treating patients with sever PTSD and borderline
          disorders.{' '}
        </Body1>
        <H6Bold mt="16px" mb="4px">
          Identification Number
        </H6Bold>
        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>License No: </Body1Bold>
          <Body1>1615089889</Body1>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>Issued At: </Body1Bold>
          <Body1>12/12/2012</Body1>
        </View>

        <H6Bold mt="16px" mb="4px">
          Contact
        </H6Bold>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="email"
            size={24}
            color={theme.secondary}
          />
          <Body1 ml="8px">rishidibegushi@gmail.com</Body1>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="phone"
            size={24}
            color={theme.secondary}
          />
          <Body1 ml="8px">+8801759099000</Body1>
        </View>

        <H6Bold mt="16px" mb="4px">
          Address
        </H6Bold>
        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>Chamber : </Body1Bold>
          <Body1>Mindwell Consultation Center</Body1>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>Location : </Body1Bold>
          <Body1>East Shewrapara, Mirpur, Dhaka</Body1>
        </View>
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
