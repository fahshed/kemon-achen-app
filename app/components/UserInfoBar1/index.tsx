import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../config';
import { Body1, Body1Bold, Caption } from '../../styles';

function UserInfoBar1() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200' }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.text}>
          <Body1>Community</Body1>
          <Entypo name="dot-single" size={16} />
          <Body1Bold>PTSD</Body1Bold>
        </View>
        <View style={styles.text}>
          <Caption color="grey5">Posted By Ajwad Akil</Caption>
          <Entypo name="dot-single" size={16} />
          <Caption>8h</Caption>
        </View>
      </View>
      <MaterialCommunityIcons
        style={styles.icon}
        name="dots-horizontal"
        size={24}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.lightGrey,
    flexDirection: 'row',
    height: 64,
    padding: 8,
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 8,
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
  },
});

export default UserInfoBar1;
