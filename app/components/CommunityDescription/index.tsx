import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Caption, H6Bold, Body2 } from '../../styles';

import TagComponent from '../../components/Tag';
import JoinBadge from '../JoinBadge';

function CommunityDescription({
  communityName,
  members,
  description,
  badges,
  hasJoined,
  onJoin,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          marginBottom: 8,
        }}
      >
        <H6Bold>{communityName}</H6Bold>
        <JoinBadge hasJoined={hasJoined} handleJoining={onJoin} />
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 8,
    paddingBottom: 0,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default CommunityDescription;
