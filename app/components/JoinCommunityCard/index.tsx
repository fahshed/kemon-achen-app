import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { Body2Bold, Caption } from '../../styles';
import JoinBadge from '../JoinBadge';

function JoinCommunityCard({
  communityName,
  hasJoined,
  communityDescription,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `https://picsum.photos/seed/${communityName}/300` }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 4,
          }}
        >
          <Body2Bold>{communityName + '   '}</Body2Bold>
          <JoinBadge hasJoined={hasJoined} handleJoining={onPress} />
        </View>
        <Caption color="grey6" numberOfLines={2}>
          {communityDescription}
        </Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    justifyContent: 'center',
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

export default JoinCommunityCard;
