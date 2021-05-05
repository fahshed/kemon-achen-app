import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../config';
import { Body1 } from '../../styles';
import Icon from '../Icon';

function BottomBar1({onLikePress, onCommentPress, onSharePress}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onLikePress}>
          <Icon name="arrow-up-bold-outline" size={32}/>
        </TouchableOpacity>
        <Body1>100</Body1>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onCommentPress}>
          <Icon name="comment-outline" size={32}/>
        </TouchableOpacity>
        <Body1>100</Body1>
      </View>
      <View style={styles.iconWithText}>
        <TouchableOpacity onPress={onSharePress}>
          <Icon name="share-outline" size={32}/>
        </TouchableOpacity>
        <Body1>Share</Body1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.secondary,
    flexDirection: 'row',
    height: 48,
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
