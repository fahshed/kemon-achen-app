import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { theme } from '../../config';
import { Body2Bold } from '../../styles';

function CommunityCard({ communityName, onPress }) {
  return (
    <TouchableHighlight underlayColor={theme.grey6} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: `https://picsum.photos/seed/${communityName}/300` }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Body2Bold> {communityName} </Body2Bold>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 8,
    width: '80%',
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  imageContainer: {
    alignItems: 'center',
    width: '20%',
  },
});

export default CommunityCard;
