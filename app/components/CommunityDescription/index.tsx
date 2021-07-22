import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../../config';
import { Caption, H6Bold, Body2 } from '../../styles';

import TagComponent from '../../components/Tag';
import JoinBadge from '../JoinBadge';
import Api from '../../api';

function CommunityDescription({
  communityId,
  communityName,
  members,
  description,
  badges,
  hasJoined,
}) {
  const handleJoin = async () => {
    try {
      await Api.joinCommunity(communityId);
    } catch (error) {
      console.log('Join error', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <H6Bold>{communityName}</H6Bold>
        <JoinBadge hasJoined={hasJoined} handleJoining={handleJoin} />
      </View>
      <Caption mb="8px">{members}</Caption>
      <Body2 mb="8px">{description}</Body2>
      <View style={{ flexDirection: 'row' }}>
        {badges.map((tag, index) => (
          <TagComponent key={index} badgeContent={tag} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 16,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 4,
  },
});

export default CommunityDescription;
