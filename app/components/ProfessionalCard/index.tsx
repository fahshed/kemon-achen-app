import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { Body1, Caption } from '../../styles';
import RankBadgeComponent from '../RankBadgeComponent';
import TagComponent from '../Tag';

function ProfessionalCard() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/200' }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          <Body1>Dr. Sikandar Bakshiii</Body1>
          <RankBadgeComponent rank="100" />
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
          <TagComponent badgeContent="PTSD" />
          <TagComponent badgeContent="Anxiety" />
          <TagComponent badgeContent="Stress" />
        </View>
        <Caption color="grey6" numberOfLines={3}>
          Dhanmondi, panchalaish, Chattogram
        </Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.orange,
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

export default ProfessionalCard;
