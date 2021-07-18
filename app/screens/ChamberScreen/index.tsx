import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Body1, Body1Bold, H6Bold } from '../../styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../config';
import Api from '../../api';

export default function ChamberScreen({ userId }) {
  const [chamber, setChamber] = useState(null);

  //const userId = "60830ac18fc20123c40f10c0";

  const getProfessionalChamber = async () => {
    const response = await Api.getProfessionalChamber(userId);
    //console.log(response);
    setChamber(response);
  };

  useEffect(() => {
    getProfessionalChamber();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <H6Bold mb="4px">Qualifications</H6Bold>
        {chamber &&
          chamber.qualification.map((q, index) => (
            <Body1 key={index}>{q}</Body1>
          ))}
        <H6Bold mt="16px" mb="4px">
          Practice
        </H6Bold>
        <Body1>{chamber && chamber.about}</Body1>
        <H6Bold mt="16px" mb="4px">
          Identification Number
        </H6Bold>
        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>License No: </Body1Bold>
          <Body1>{chamber && chamber.license}</Body1>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>Issued At: </Body1Bold>
          <Body1>
            {chamber && new Date(chamber.licenseIssued).toLocaleDateString()}
          </Body1>
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
          <Body1
            ml="8px"
            mb="8px"
            onPress={() => Linking.openURL(`mailto:${chamber.email}`)}
          >
            {chamber && chamber.email}
          </Body1>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons
            name="phone"
            size={24}
            color={theme.secondary}
          />
          {chamber && (
            <Body1
              ml="8px"
              color="darkGrey"
              onPress={() => {
                Linking.openURL(`tel:${chamber.phone}`);
              }}
            >
              {chamber.phone}
            </Body1>
          )}
        </View>

        <H6Bold mt="16px" mb="4px">
          Address
        </H6Bold>
        <View style={{ flexDirection: 'row' }}>
          <Body1Bold>Location : </Body1Bold>
          <Body1>{chamber && chamber.address}</Body1>
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
