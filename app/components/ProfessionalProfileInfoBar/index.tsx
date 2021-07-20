import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { theme } from '../../config';
import { Body2Bold, Caption } from '../../styles';

import TagComponent from '../../components/Tag';
import RankBadgeComponent from '../../components/RankBadgeComponent';
import { useAppSelector } from '../../store';

function ProfessionalProfileInfoBar({ userName, badges, rank }) {
  const { user } = useAppSelector((state) => state.User);
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Body2Bold>{userName}</Body2Bold>
          <Caption ml="8px" mt="1px">
            Rank:{''}
          </Caption>
          <RankBadgeComponent rank={rank} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          {badges.map((tag, index) => (
            <TagComponent badgeContent={tag} key={index} />
          ))}
        </View>
      </View>
      {user.role === 'professional' ? (
        <TouchableOpacity style={{ marginLeft: 160 }}>
          <Caption color="primary">Edit</Caption>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: theme.white,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
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

export default ProfessionalProfileInfoBar;
