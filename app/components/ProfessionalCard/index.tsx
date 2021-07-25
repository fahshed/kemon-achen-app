import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { theme } from '../../config';
import { Caption, Body2Bold } from '../../styles';
import RankBadgeComponent from '../RankBadgeComponent';
import TagComponent from '../Tag';

function ProfessionalCard({
  userName,
  badges,
  rank,
  location,
  handleNavigation,
}) {
  return (
    <TouchableHighlight underlayColor={theme.grey6} onPress={handleNavigation}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/seed/${userName}/300`,
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 4 }}>
            <Body2Bold>{userName}</Body2Bold>
            <RankBadgeComponent rank={rank} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            {badges.map((tag) => (
              <TagComponent badgeContent={tag.title} key={tag._id} />
            ))}
          </View>
          <Caption color="grey6" numberOfLines={3}>
            {location}
          </Caption>
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

export default ProfessionalCard;
