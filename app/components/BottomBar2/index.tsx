import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { Body2 } from '../../styles';
import Icon from '../Icon';

function BottomBar1({onLikePress, onReplyPress}) {
  return (
    <View style={styles.container}>
          <View style={styles.iconWithText}>{ }</View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onReplyPress}>
          <Icon name="reply-outline" size={24}/>
        </TouchableOpacity>
        <Body2>Reply</Body2>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onLikePress}>
          <Icon name="arrow-up-bold-outline" size={24}/>
        </TouchableOpacity>
        <Body2>10</Body2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.primary,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: '100%',
  },
  iconWithText:{
    flex : 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default BottomBar1;
