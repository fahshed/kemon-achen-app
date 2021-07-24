import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { RankBadgeComponent } from '../../components';
import { theme } from '../../config';
import { H6, H6Bold } from '../../styles';
import { useAppSelector } from '../../store';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Api from '../../api';

function ProfessionalStatScreen() {
  const { user } = useAppSelector((state) => state.User);

  const [professionalStat, setProfessionalState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await Api.getProfessionalStat();
      setProfessionalState(response);
    })();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 128,
      }}
    >
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/seed/${user.name}/300`,
            }}
          />
        </TouchableOpacity>
      </View>

      {professionalStat && (
        <>
          <H6Bold pt={'4px'} pb={'2px'}>
            {user.name}
          </H6Bold>
          <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
            <H6>Rank</H6>
            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
              <RankBadgeComponent rank={professionalStat.rank} />
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={28}
              color={theme.primary}
            />
            <H6 pt={'4px'}>Votes Obtained: </H6>
            <H6Bold pt={'8px'}>{professionalStat.voteCount}</H6Bold>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="post-outline"
              size={28}
              color={theme.primary}
            />
            <H6 pt={'4px'}> Posts: </H6>
            <H6Bold pt={'8px'}>{professionalStat.postCount}</H6Bold>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="comment"
              size={28}
              color={theme.primary}
            />
            <H6 pt={'4px'}>Feedbacks: </H6>
            <H6Bold pt={'8px'}>{professionalStat.feedbackCount}</H6Bold>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="people-alt" size={28} color={theme.primary} />
            <H6 pt={'4px'}> Communites Joined: </H6>
            <H6Bold pt={'8px'}>{professionalStat.communityJoined}</H6Bold>
          </View>
        </>
      )}
    </View>
  );
}

export default ProfessionalStatScreen;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
});
