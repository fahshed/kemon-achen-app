import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { theme } from '../../config';
import { Body2Bold, Caption } from '../../styles';

import TagComponent from '../../components/Tag';
import RankBadgeComponent from '../../components/RankBadgeComponent';

function ProfessionalProfileInfoBar({ userName, badges, rank }) {
  const renderItem = ({ item }) => <TagComponent badgeContent={item.name} />;
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
        <FlatList
          data={badges}
          keyExtractor={(badge) => badge.id}
          horizontal={true}
          renderItem={renderItem}
        />
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <Caption color="red">Edit</Caption>
      </TouchableOpacity>
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
