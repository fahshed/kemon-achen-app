import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body2Bold, Body2 } from '../../styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

function UserProfileCommentCard({
  postTitle,
  commentBody,
  time,
  handleNaviagtion,
}) {
  return (
    <TouchableHighlight onPress={handleNaviagtion} underlayColor={theme.grey6}>
      <View style={{ flexDirection: 'column', backgroundColor: theme.white }}>
        <View style={styles.header}>
          <Body2Bold>{postTitle}</Body2Bold>
          <Entypo name="dot-single" size={16} />
          <Body2>{time}</Body2>
        </View>
        <Body2 pl="8px" pr="8px" pb="8px">
          {commentBody}
        </Body2>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    height: 32,
    padding: 8,
  },
});

export default UserProfileCommentCard;
